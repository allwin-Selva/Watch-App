import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

const OrderTrackingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getOrderById } = useOrder();
  
  const order = id ? getOrderById(id) : undefined;

  if (!order) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-serif font-bold mb-6 text-brand-accent">Order Not Found</h1>
        <p className="text-brand-light/70 mb-6">The order you're looking for doesn't exist.</p>
        <Link
          to="/orders"
          className="inline-block bg-brand-accent text-black font-bold py-2 px-6 rounded-md hover:opacity-90 transition-colors"
        >
          View All Orders
        </Link>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'confirmed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'processing':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'shipped':
        return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/50';
      case 'delivered':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'cancelled':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getStatusIcon = (status: string, isActive: boolean) => {
    if (!isActive) {
      return (
        <div className="w-4 h-4 rounded-full border-2 border-brand-light/30 bg-transparent" />
      );
    }
    
    switch (status) {
      case 'delivered':
        return (
          <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-4 h-4 rounded-full bg-brand-accent" />
        );
    }
  };

  const statusOrder: string[] = ['pending', 'confirmed', 'processing', 'shipped', 'delivered'];
  const currentStatusIndex = statusOrder.indexOf(order.status);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link
        to="/orders"
        className="text-brand-accent hover:text-brand-accent/80 mb-6 inline-block text-sm font-medium"
      >
        ← Back to Orders
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2 text-brand-accent">
          Order #{order.orderNumber}
        </h1>
        <p className="text-brand-light/70">
          Placed on {new Date(order.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Order Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tracking Timeline */}
          <div className="bg-brand-slate border border-brand-accent/10 rounded-lg p-6">
            <h2 className="text-xl font-bold text-brand-light mb-6">Order Status</h2>
            <div className="space-y-4">
              {statusOrder.map((status, index) => {
                const isActive = index <= currentStatusIndex;
                const isCurrent = index === currentStatusIndex;
                const trackingEvent = order.trackingEvents.find(e => e.status === status);
                
                return (
                  <div key={status} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      {getStatusIcon(status, isActive)}
                      {index < statusOrder.length - 1 && (
                        <div className={`w-0.5 h-12 mt-2 ${isActive ? 'bg-brand-accent' : 'bg-brand-light/20'}`} />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-semibold ${isActive ? 'text-brand-light' : 'text-brand-light/50'}`}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                        {isCurrent && (
                          <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getStatusColor(status)}`}>
                            Current
                          </span>
                        )}
                      </div>
                      {trackingEvent && (
                        <>
                          <p className="text-brand-light/70 text-sm">{trackingEvent.message}</p>
                          {trackingEvent.location && (
                            <p className="text-brand-light/50 text-xs mt-1">📍 {trackingEvent.location}</p>
                          )}
                          <p className="text-brand-light/50 text-xs mt-1">
                            {new Date(trackingEvent.timestamp).toLocaleString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-brand-slate border border-brand-accent/10 rounded-lg p-6">
            <h2 className="text-xl font-bold text-brand-light mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 pb-4 border-b border-brand-light/10 last:border-0 last:pb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-brand-light font-medium">{item.name}</h3>
                    <p className="text-brand-light/70 text-sm">{item.brand}</p>
                    <p className="text-brand-light/70 text-sm mt-1">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-brand-light font-semibold">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-brand-light/10">
              <div className="flex justify-between items-center">
                <span className="text-brand-light font-bold text-lg">Total</span>
                <span className="text-brand-accent font-bold text-xl">₹{order.total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="space-y-6">
          <div className="bg-brand-slate border border-brand-accent/10 rounded-lg p-6">
            <h2 className="text-xl font-bold text-brand-light mb-4">Shipping Address</h2>
            <div className="text-brand-light/80 text-sm space-y-2">
              <p className="font-medium">{order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
              <p>{order.shippingAddress.address}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
              <p>{order.shippingAddress.country}</p>
              <p className="mt-4 pt-4 border-t border-brand-light/10">
                <span className="text-brand-light/70">Email:</span> {order.shippingAddress.email}
              </p>
            </div>
          </div>

          {order.estimatedDelivery && (
            <div className="bg-brand-slate border border-brand-accent/10 rounded-lg p-6">
              <h2 className="text-xl font-bold text-brand-light mb-2">Estimated Delivery</h2>
              <p className="text-brand-accent font-semibold">
                {new Date(order.estimatedDelivery).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;

