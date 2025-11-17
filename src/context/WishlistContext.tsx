
import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../types';

type WishlistState = {
  items: Product[];
  toggleWishlistItem: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;
};

const WishlistContext = createContext<WishlistState | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);

  const toggleWishlistItem = (product: Product) => {
    setItems(prevItems => {
      const exists = prevItems.some(item => item.id === product.id);
      if (exists) {
        return prevItems.filter(item => item.id !== product.id);
      } else {
        return [...prevItems, product];
      }
    });
  };
  
  const isInWishlist = (productId: number) => {
      return items.some(item => item.id === productId);
  }

  return (
    <WishlistContext.Provider value={{ items, toggleWishlistItem, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
