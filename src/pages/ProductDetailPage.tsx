import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import VirtualTryOn from '../components/VirtualTryOn';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === Number(id));
  const { dispatch } = useCart();
  const { toggleWishlistItem, isInWishlist } = useWishlist();
  
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [isTryOnOpen, setIsTryOnOpen] = useState(false);

  if (!product) {
    return <div className="text-center py-20 text-brand-light">Product not found.</div>;
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };
  
  const handleToggleWishlist = () => {
    toggleWishlistItem(product);
  }
  
  const inWishlist = isInWishlist(product.id);
  const recommendedProducts = mockProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-brand-slate rounded-lg overflow-hidden mb-4">
            <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <button key={index} onClick={() => setMainImage(img)} className={`aspect-square bg-brand-slate rounded-md overflow-hidden border-2 ${mainImage === img ? 'border-brand-accent' : 'border-transparent'}`}>
                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div className="text-brand-light">
          <p className="text-brand-accent font-semibold">{product.brand}</p>
          <h1 className="text-4xl font-serif font-bold my-2">{product.name}</h1>
          <p className="text-3xl font-semibold text-brand-light mb-6">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="text-brand-light/70 leading-relaxed mb-8">{product.description}</p>
          
          <div className="flex items-center gap-4 mb-8">
            <button onClick={handleAddToCart} className="flex-1 bg-brand-accent text-black font-bold py-3 px-6 rounded-md hover:opacity-90 transition-colors">
              Add to Cart
            </button>
            <div className="flex items-center gap-2">
                <button onClick={handleToggleWishlist} className={`p-3 rounded-md border-2 transition-colors ${inWishlist ? 'bg-brand-secondary border-brand-secondary text-brand-light' : 'border-brand-accent/50 hover:border-brand-accent'}`}>
                  <HeartIcon filled={inWishlist} />
                </button>
                <button 
                  onClick={() => setIsTryOnOpen(true)} 
                  className="p-3 rounded-md border-2 border-brand-accent/50 hover:border-brand-accent transition-colors"
                  aria-label="Virtual Try-On"
                >
                  <CameraIcon />
                </button>
            </div>
          </div>

          <div className="border-t border-brand-accent/20 pt-6">
            <h4 className="font-semibold mb-2">Specifications</h4>
            <ul className="text-brand-light/70 text-sm space-y-1">
              <li><strong>Category:</strong> {product.category}</li>
              <li><strong>Strap Type:</strong> {product.strapType}</li>
              <li><strong>Dial Size:</strong> {product.dialSize}mm</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Reviews Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-serif font-bold text-center mb-10 text-brand-accent">Customer Reviews</h2>
        <div className="max-w-3xl mx-auto space-y-6">
            {product.reviews.map(review => (
                <div key={review.id} className="bg-brand-slate p-6 rounded-lg border border-brand-accent/10">
                    <div className="flex justify-between items-center mb-2">
                        <p className="font-bold text-brand-light">{review.author}</p>
                        <div className="flex items-center">
                           {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < review.rating} />)}
                        </div>
                    </div>
                    <p className="text-sm text-brand-light/50 mb-3">{review.date}</p>
                    <p className="text-brand-light/80">{review.comment}</p>
                </div>
            ))}
        </div>
      </div>
      
      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif font-bold text-center mb-10 text-brand-accent">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendedProducts.map(recProduct => <ProductCard key={recProduct.id} product={recProduct} />)}
            </div>
          </div>
      )}

      {isTryOnOpen && <VirtualTryOn watchImageUrl={product.images[0]} onClose={() => setIsTryOnOpen(false)} />}
    </div>
  );
};


const HeartIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill={filled ? 'currentColor' : 'none'} stroke="currentColor">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);
const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${filled ? 'text-brand-accent' : 'text-brand-slate/50'}`} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CameraIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


export default ProductDetailPage;