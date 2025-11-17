import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const { toggleWishlistItem, isInWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: product });
  };
  
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlistItem(product);
  }

  const inWishlist = isInWishlist(product.id);

  return (
    <Link to={`/product/${product.id}`} className="group block bg-brand-slate border border-brand-accent/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/10 hover:border-brand-accent/30">
      <div className="relative">
        <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
        <button 
          onClick={handleToggleWishlist} 
          className={`absolute top-3 right-3 p-2 rounded-full transform transition-all duration-200 hover:scale-110 active:scale-125 ${
            inWishlist 
              ? 'bg-brand-secondary text-brand-light' 
              : 'bg-black/50 text-brand-light hover:bg-brand-secondary'
          }`}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <HeartIcon filled={inWishlist} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-brand-light group-hover:text-brand-accent transition-colors truncate">{product.name}</h3>
        <p className="text-sm text-brand-light/70 mb-2">{product.brand}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-brand-light">₹{product.price.toLocaleString('en-IN')}</p>
          <button onClick={handleAddToCart} className="text-black bg-brand-accent hover:opacity-90 font-semibold py-1 px-3 rounded-md text-sm transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

const HeartIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={filled ? 'currentColor' : 'none'} stroke="currentColor">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);


export default ProductCard;