import React, { useEffect, useRef, useState } from 'react';

// Declare global variables from the scripts in index.html
declare const handPoseDetection: any;
declare const tf: any;

interface VirtualTryOnProps {
  watchImageUrl: string;
  onClose: () => void;
}

const VirtualTryOn: React.FC<VirtualTryOnProps> = ({ watchImageUrl, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // FIX: Explicitly use window.Image to avoid potential type resolution issues with the global Image constructor.
  const watchImageRef = useRef<HTMLImageElement>(new window.Image());
  const detectorRef = useRef<any>(null);
  // FIX: The useRef hook requires an initial value. Initialize with undefined and set the type accordingly.
  const animationFrameId = useRef<number | undefined>(undefined);
  const [status, setStatus] = useState('Ready to start.');
  const [showCanvas, setShowCanvas] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  useEffect(() => {
    watchImageRef.current.src = watchImageUrl;
    watchImageRef.current.crossOrigin = 'anonymous';
    
    if (!isStarted) {
      return;
    }

    const setup = async () => {
      setStatus('Loading AI Model...');
      if (typeof handPoseDetection === 'undefined' || typeof tf === 'undefined') {
        setStatus('Error: AI libraries not loaded.');
        return;
      }
      
      await tf.setBackend('webgl');
      
      const model = handPoseDetection.SupportedModels.MediaPipeHands;
      const detectorConfig = {
        runtime: 'mediapipe',
        solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
        modelType: 'lite',
      };
      detectorRef.current = await handPoseDetection.createDetector(model, detectorConfig);
      setStatus('Starting Camera...');

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480, facingMode: 'user' },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            setShowCanvas(true);
            setStatus('Ready! Position your wrist in the frame.');
            detect();
          };
        }
      } catch (err) {
        console.error("Camera access denied:", err);
        setStatus("Camera access denied. Please allow camera permissions in your browser.");
      }
    };

    setup().catch(err => {
      console.error("Error setting up Virtual Try-On:", err);
      setStatus("Error: Could not start camera or AI model.");
    });

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (videoRef.current && videoRef.current.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
      if (detectorRef.current) {
        detectorRef.current.dispose();
      }
    };
  }, [watchImageUrl, isStarted]);

  const detect = async () => {
    if (detectorRef.current && videoRef.current?.readyState === 4 && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(-canvas.width, 0);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        ctx.restore();

        const hands = await detectorRef.current.estimateHands(video, { flipHorizontal: false });

        if (hands.length > 0) {
          if(status !== "Wrist Detected!") setStatus('Wrist Detected!');
          drawWatchOnWrist(ctx, hands[0].keypoints, canvas.width);
        } else {
          if(status !== 'Ready! Position your wrist in the frame.') setStatus('Ready! Position your wrist in the frame.');
        }
      }
    }
    animationFrameId.current = requestAnimationFrame(detect);
  };
  
  const drawWatchOnWrist = (ctx: CanvasRenderingContext2D, keypoints: any[], canvasWidth: number) => {
    const wrist = keypoints[0];
    const indexMcp = keypoints[5];
    const pinkyMcp = keypoints[17];
    
    if (wrist && indexMcp && pinkyMcp) {
      // Flip coordinates since canvas is mirrored
      const p1 = { x: canvasWidth - indexMcp.x, y: indexMcp.y };
      const p2 = { x: canvasWidth - pinkyMcp.x, y: pinkyMcp.y };
      const wristPos = { x: canvasWidth - wrist.x, y: wrist.y };

      const wristWidth = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
      const watchWidth = wristWidth * 1.6; // Scaling factor
      
      const midX = wristPos.x + (p2.x - p1.x) * 0.1;
      const midY = wristPos.y + (p2.y - p1.y) * 0.1 - (wristWidth * 0.1);
      const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

      ctx.save();
      ctx.translate(midX, midY);
      ctx.rotate(angle);
      
      const watchImage = watchImageRef.current;
      if (watchImage.complete && watchImage.naturalWidth > 0) {
        const aspectRatio = watchImage.naturalHeight / watchImage.naturalWidth;
        const watchHeight = watchWidth * aspectRatio;
        ctx.drawImage(watchImage, -watchWidth / 2, -watchHeight / 2, watchWidth, watchHeight);
      }
      ctx.restore();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center backdrop-blur-sm p-4">
      <div className="relative bg-brand-slate p-4 rounded-lg shadow-2xl max-w-3xl w-full border border-brand-accent/20">
        <button onClick={onClose} className="absolute -top-3 -right-3 bg-brand-secondary text-brand-light rounded-full h-8 w-8 flex items-center justify-center z-10 font-bold text-lg">&times;</button>
        <div className="aspect-[4/3] relative bg-black rounded-md overflow-hidden">
          {!isStarted ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <CameraIcon />
              <h3 className="text-2xl font-bold text-brand-accent mt-4 mb-2">Virtual Try-On</h3>
              <p className="text-brand-light/80 mb-6 max-w-sm">Use your camera to see how this watch looks on your wrist in real-time. We don't record or store any video.</p>
              <button 
                onClick={handleStart} 
                className="px-6 py-2 bg-brand-accent text-black font-bold uppercase rounded-sm hover:opacity-90 transition-all"
              >
                Start Camera
              </button>
            </div>
          ) : (
            <>
              <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover hidden" playsInline />
              <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full object-contain ${showCanvas ? 'block' : 'hidden'}`} />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-brand-light text-center p-2 rounded-md text-sm transition-opacity duration-300">
                {status}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const CameraIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export default VirtualTryOn;