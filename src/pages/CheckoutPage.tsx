import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import type { Order, OrderItem, TrackingEvent } from '../types';

const CheckoutPage: React.FC = () => {
  const { state, dispatch } = useCart();
  const { dispatch: orderDispatch } = useOrder();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
  });

  const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // In a real app, this would process payment
      
      // Create order items from cart
      const orderItems: OrderItem[] = state.items.map(item => ({
        productId: item.id,
        name: item.name,
        brand: item.brand,
        price: item.price,
        quantity: item.quantity,
        image: item.images[0],
      }));

      // Generate order ID and order number
      const orderId = `order-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
      const orderNumber = `TICK-${Date.now().toString().slice(-8)}`;

      // Create initial tracking event
      const initialTrackingEvent: TrackingEvent = {
        id: 1,
        status: 'pending',
        message: 'Order placed successfully. We are processing your order.',
        timestamp: new Date().toISOString(),
      };

      // Calculate estimated delivery (7 days from now)
      const estimatedDelivery = new Date();
      estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

      // Create order object
      const newOrder: Order = {
        id: orderId,
        orderNumber: orderNumber,
        items: orderItems,
        shippingAddress: formState,
        status: 'pending',
        total: subtotal,
        createdAt: new Date().toISOString(),
        trackingEvents: [initialTrackingEvent],
        estimatedDelivery: estimatedDelivery.toISOString(),
      };

      // Add order to context
      orderDispatch({ type: 'ADD_ORDER', payload: newOrder });

      // Clear cart
      dispatch({ type: 'CLEAR_CART' });

      // Navigate to order tracking page
      navigate(`/orders/${orderId}`);
  };
  
  if (state.items.length === 0) {
      return (
          <div className="container mx-auto text-center py-20">
              <h1 className="text-2xl font-semibold text-brand-light">Your cart is empty.</h1>
              <p className="text-brand-light/50">Add items to your cart before proceeding to checkout.</p>
          </div>
      )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-8 sm:mb-10 text-brand-accent">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Customer Information */}
        <div className="bg-brand-slate p-6 sm:p-8 rounded-lg border border-brand-accent/10">
          <h2 className="text-xl font-bold text-brand-light mb-6">Contact & Shipping</h2>
          <div className="space-y-4">
            <InputField label="Email Address" name="email" type="email" value={formState.email} onChange={handleInputChange} required />
            <div className="grid sm:grid-cols-2 gap-4">
              <InputField label="First Name" name="firstName" type="text" value={formState.firstName} onChange={handleInputChange} required />
              <InputField label="Last Name" name="lastName" type="text" value={formState.lastName} onChange={handleInputChange} required />
            </div>
            <InputField label="Address" name="address" type="text" value={formState.address} onChange={handleInputChange} required />
            <InputField label="City" name="city" type="text" value={formState.city} onChange={handleInputChange} required />
            <div className="grid grid-cols-2 gap-4">
                <InputField label="Country" name="country" type="text" value={formState.country} onChange={handleInputChange} required />
                <InputField label="Postal Code" name="postalCode" type="text" value={formState.postalCode} onChange={handleInputChange} required />
            </div>
          </div>
        </div>
        
        {/* Order Summary & Payment */}
        <div>
            <div className="bg-brand-slate p-6 sm:p-8 rounded-lg border border-brand-accent/10">
              <h2 className="text-xl font-bold text-brand-light mb-4">Your Order</h2>
              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                {state.items.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center">
                            <img src={item.images[0]} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-3" />
                            <div>
                                <p className="text-brand-light">{item.name}</p>
                                <p className="text-brand-light/70">Qty: {item.quantity}</p>
                            </div>
                        </div>
                        <p className="text-brand-light">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                ))}
              </div>
              <div className="border-t border-brand-light/20 pt-4 space-y-2">
                <div className="flex justify-between text-brand-light/80">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-brand-light font-bold text-lg">
                    <span>Total</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-slate p-6 sm:p-8 rounded-lg border border-brand-accent/10 mt-8">
                <h2 className="text-xl font-bold text-brand-light mb-6">Payment Details</h2>
                <div className="text-center text-brand-light/70 p-8 bg-black/20 rounded-md">
                    <p>This is a demonstration.</p>
                    <p>Payment gateway integration would appear here.</p>
                </div>
            </div>
            
            <button type="submit" className="w-full mt-8 bg-brand-accent text-black font-bold py-3 px-6 rounded-md hover:opacity-90 transition-colors">
                Place Order
            </button>
        </div>
      </form>
    </div>
  );
};

interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, value, onChange, required }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-brand-light/80 mb-1">{label}</label>
        <input 
            type={type} 
            id={name} 
            name={name} 
            value={value} 
            onChange={onChange} 
            required={required} 
            className="block w-full bg-black/20 border-brand-accent/50 rounded-md shadow-sm p-2.5 text-brand-light focus:ring-brand-accent focus:border-brand-accent"
        />
    </div>
);


export default CheckoutPage;