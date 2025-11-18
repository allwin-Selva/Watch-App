import React, { createContext, useReducer, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Order, OrderStatus, TrackingEvent } from '../types';

type OrderState = {
  orders: Order[];
};

type OrderAction =
  | { type: 'ADD_ORDER'; payload: Order }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { orderId: string; status: OrderStatus; trackingEvent?: TrackingEvent } }
  | { type: 'LOAD_ORDERS'; payload: Order[] };

const OrderContext = createContext<{
  state: OrderState;
  dispatch: React.Dispatch<OrderAction>;
  getOrderById: (orderId: string) => Order | undefined;
} | undefined>(undefined);

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
  switch (action.type) {
    case 'ADD_ORDER':
      const newOrders = [action.payload, ...state.orders];
      // Save to localStorage
      localStorage.setItem('orders', JSON.stringify(newOrders));
      return { orders: newOrders };
    case 'UPDATE_ORDER_STATUS':
      const updatedOrders = state.orders.map(order => {
        if (order.id === action.payload.orderId) {
          const updatedTrackingEvents = action.payload.trackingEvent
            ? [...order.trackingEvents, action.payload.trackingEvent]
            : order.trackingEvents;
          return {
            ...order,
            status: action.payload.status,
            trackingEvents: updatedTrackingEvents,
          };
        }
        return order;
      });
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      return { orders: updatedOrders };
    case 'LOAD_ORDERS':
      return { orders: action.payload };
    default:
      return state;
  }
};

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, { orders: [] });

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      try {
        const parsedOrders = JSON.parse(savedOrders);
        dispatch({ type: 'LOAD_ORDERS', payload: parsedOrders });
      } catch (error) {
        console.error('Error loading orders from localStorage:', error);
      }
    }
  }, []);

  const getOrderById = (orderId: string): Order | undefined => {
    return state.orders.find(order => order.id === orderId);
  };

  return (
    <OrderContext.Provider value={{ state, dispatch, getOrderById }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

