import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const WishlistPage: React.FC = () => {
  const { items } = useWishlist();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-center mb-10 text-brand-accent">Your Wishlist</h1>
      {items.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-brand-light">Your wishlist is empty.</h2>
          <p className="text-brand-light/50 mt-2">Looks like you haven't added anything yet.</p>
          <Link to="/products" className="mt-6 inline-block px-6 py-2 bg-brand-accent text-brand-dark font-bold uppercase rounded-sm hover:opacity-90 transition-colors">
            Explore Watches
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;