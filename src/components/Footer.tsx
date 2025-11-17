import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
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
              <li><a href="#" className="text-sm text-brand-light/70 hover:text-brand-accent transition-colors">Our Story</a></li>
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
        <div className="mt-12 pt-8 border-t border-brand-accent/20 text-center text-sm text-brand-light/50">
          <p>&copy; {new Date().getFullYear()} Tickora. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;