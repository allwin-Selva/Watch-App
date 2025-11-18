import React from 'react';
import { Link } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

const OrdersPage: React.FC = () => {
  const { state } = useOrder();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'confirmed':
        return 'bg-blue-500/20 text-blue-400';
      case 'processing':
        return 'bg-purple-500/20 text-purple-400';
      case 'shipped':
        return 'bg-indigo-500/20 text-indigo-400';
      case 'delivered':
        return 'bg-green-500/20 text-green-400';
      case 'cancelled':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  if (state.orders.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-brand-accent">My Orders</h1>
        <div className="bg-brand-slate p-12 rounded-lg border border-brand-accent/10">
          <p className="text-brand-light/70 text-lg mb-4">You haven't placed any orders yet.</p>
          <Link 
            to="/products" 
            className="inline-block bg-brand-accent text-black font-bold py-2 px-6 rounded-md hover:opacity-90 transition-colors"
          >
            Browse Watches
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-8 text-brand-accent">My Orders</h1>
      <div className="space-y-6">
        {state.orders.map((order) => (
          <div
            key={order.id}
            className="bg-brand-slate border border-brand-accent/10 rounded-lg p-6 hover:border-brand-accent/30 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h2 className="text-xl font-bold text-brand-light">Order #{order.orderNumber}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                <p className="text-brand-light/70 text-sm">
                  Placed on {new Date(order.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                {order.estimatedDelivery && (
                  <p className="text-brand-light/70 text-sm mt-1">
                    Estimated delivery: {new Date(order.estimatedDelivery).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                )}
              </div>
              <div className="mt-4 sm:mt-0 text-right">
                <p className="text-brand-light font-bold text-lg">₹{order.total.toLocaleString('en-IN')}</p>
                <Link
                  to={`/orders/${order.id}`}
                  className="text-brand-accent hover:text-brand-accent/80 text-sm font-medium mt-2 inline-block"
                >
                  View Details & Track →
                </Link>
              </div>
            </div>
            
            <div className="border-t border-brand-light/10 pt-4">
              <div className="flex flex-wrap gap-4">
                {order.items.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="text-brand-light text-sm font-medium">{item.name}</p>
                      <p className="text-brand-light/70 text-xs">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
                {order.items.length > 3 && (
                  <div className="flex items-center text-brand-light/70 text-sm">
                    +{order.items.length - 3} more item{order.items.length - 3 > 1 ? 's' : ''}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;

