import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Header: React.FC = () => {
  const { state: cartState } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const cartItemCount = cartState.items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${searchTerm.trim()}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-brand-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-serif font-bold text-brand-accent">
             Tickora
            </Link>
          </div>

          <nav className="hidden md:flex md:space-x-8">
            <Link to="/" className="text-sm font-medium text-brand-light/80 hover:text-brand-accent transition-colors">Home</Link>
            <Link to="/products" className="text-sm font-medium text-brand-light/80 hover:text-brand-accent transition-colors">All Watches</Link>
            <Link to="/orders" className="text-sm font-medium text-brand-light/80 hover:text-brand-accent transition-colors">Orders</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search watches..."
                className="bg-brand-slate border border-brand-accent/50 text-brand-light text-sm rounded-md focus:ring-brand-accent focus:border-brand-accent block w-full pl-3 pr-2 py-1.5 transition-all"
              />
            </form>
            
            <Link to="/wishlist" className="relative text-brand-light/80 hover:text-brand-accent transition-colors">
              <HeartIcon />
              {wishlistItems.length > 0 && <span className="absolute -top-2 -right-2 bg-brand-accent text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">{wishlistItems.length}</span>}
            </Link>

            <Link to="/cart" className="relative text-brand-light/80 hover:text-brand-accent transition-colors">
              <ShoppingCartIcon />
              {cartItemCount > 0 && <span className="absolute -top-2 -right-2 bg-brand-accent text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">{cartItemCount}</span>}
            </Link>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-light/80 hover:text-brand-accent">
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-sm font-medium text-brand-light/80 hover:text-brand-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/products" className="text-sm font-medium text-brand-light/80 hover:text-brand-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>All Watches</Link>
                <Link to="/orders" className="text-sm font-medium text-brand-light/80 hover:text-brand-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Orders</Link>
            </nav>
            <form onSubmit={handleSearch} className="mt-4 flex items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search watches..."
                className="bg-brand-slate border border-brand-accent/50 text-brand-light text-sm rounded-md focus:ring-brand-accent focus:border-brand-accent block w-full pl-3 pr-2 py-1.5 transition-all"
              />
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

// SVG Icons
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export default Header;