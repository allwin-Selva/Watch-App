import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [showStory, setShowStory] = useState(false);

  return (
    <footer className="bg-black border-t border-brand-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-brand-accent mb-4">Tickora</h3>
            <p className="text-brand-light/70 text-sm">The pinnacle of horological excellence and luxury.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-light/90 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sm text-brand-light/70 hover:text-brand-accent transition-colors">Shop All</Link></li>
              <li>
                <button
                  type="button"
                  onClick={() => setShowStory(true)}
                  className="text-left text-sm text-brand-light/70 hover:text-brand-accent transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li><a href="#" className="text-sm text-brand-light/70 hover:text-brand-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-light/90 mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-brand-light/70 hover:text-brand-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-brand-light/70 hover:text-brand-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-light/70 hover:text-brand-accent transition-colors">Order Tracking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-light/90 mb-4">Stay Connected</h4>
            <p className="text-sm text-brand-light/70 mb-4">Subscribe for exclusive offers and new arrivals.</p>
            <form>
              <div className="flex">
                <input type="email" placeholder="Your Email" className="bg-brand-slate border border-brand-accent/50 text-brand-light text-sm rounded-l-md focus:ring-brand-accent focus:border-brand-accent block w-full p-2.5" />
                <button type="submit" className="bg-brand-accent text-black px-4 rounded-r-md font-semibold text-sm hover:opacity-90 transition-colors">
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>
        {showStory && (
          <div className="mt-10 mb-4 rounded-lg border border-brand-accent/30 bg-brand-slate/60 p-6 max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-serif font-bold text-brand-accent mb-3">
              Our Story
            </h4>
            <p className="text-sm sm:text-base text-brand-light/80 leading-relaxed">
              Tickora began as a small atelier for collectors who believed a watch is more than a way to tell time—
              it is a legacy that can be worn. From sourcing rare mechanical pieces to curating cutting‑edge smart
              timepieces, we have spent years building relationships with master craftsmen and trusted manufacturers
              around the world. Every watch in our emporium is hand‑selected, authenticated, and backed by a concierge‑
              level support experience, so that your next timepiece isn&apos;t just purchased, it&apos;s carefully
              chosen to become part of your story.
            </p>
            <button
              type="button"
              onClick={() => setShowStory(false)}
              className="mt-4 inline-flex items-center justify-center rounded-md border border-brand-accent/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-light hover:bg-brand-accent hover:text-black transition-colors"
            >
              Close
            </button>
          </div>
        )}
        <div className="mt-8 pt-8 border-t border-brand-accent/20 text-center text-sm text-brand-light/50">
          <p>&copy; {new Date().getFullYear()} Tickora. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;