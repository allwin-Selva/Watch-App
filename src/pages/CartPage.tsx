import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { CartItem } from '../types';

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();
  const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: Math.max(0, quantity) } });
  };
  
  const handleRemove = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-center mb-10 text-brand-accent">Your Cart</h1>
      {state.items.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-brand-light">Your cart is empty.</h2>
          <Link to="/products" className="mt-4 inline-block px-6 py-2 bg-brand-accent text-black font-bold uppercase rounded-sm hover:opacity-90 transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {state.items.map(item => (
              <CartItemRow key={item.id} item={item} onQuantityChange={handleQuantityChange} onRemove={handleRemove} />
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-brand-slate p-6 rounded-lg border border-brand-accent/10">
              <h2 className="text-xl font-bold text-brand-light mb-4">Order Summary</h2>
              <div className="flex justify-between text-brand-light/80 mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-brand-light/80 mb-4">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="border-t border-brand-light/20 my-4"></div>
              <div className="flex justify-between text-brand-light font-bold text-lg mb-6">
                <span>Total</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <Link to="/checkout" className="w-full block text-center bg-brand-accent text-black font-bold py-3 px-6 rounded-md hover:opacity-90 transition-colors">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface CartItemRowProps {
  item: CartItem;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item, onQuantityChange, onRemove }) => (
  <div className="flex items-center bg-brand-slate p-4 rounded-lg border border-brand-accent/10">
    <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
    <div className="flex-grow ml-4">
      <Link to={`/product/${item.id}`} className="font-bold text-brand-light hover:text-brand-accent">{item.name}</Link>
      <p className="text-sm text-brand-light/70">{item.brand}</p>
      <p className="text-sm text-brand-light/50">₹{item.price.toLocaleString('en-IN')}</p>
    </div>
    <div className="flex items-center space-x-2">
      <button onClick={() => onQuantityChange(item.id, item.quantity - 1)} className="px-2 py-1 bg-black/20 rounded">-</button>
      <span>{item.quantity}</span>
      <button onClick={() => onQuantityChange(item.id, item.quantity + 1)} className="px-2 py-1 bg-black/20 rounded">+</button>
    </div>
    <div className="text-right w-24 ml-4 font-semibold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
    <button onClick={() => onRemove(item.id)} className="ml-4 text-brand-light/50 hover:text-brand-secondary">
        <TrashIcon/>
    </button>
  </div>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
    </svg>
);


export default CartPage;