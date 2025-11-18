
export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  category: 'Luxury' | 'Budget' | 'Smartwatch';
  strapType: 'Leather' | 'Metal' | 'Rubber' | 'Fabric';
  dialSize: number; // in mm
  rating: number;
  reviews: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderItem {
  productId: number;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ShippingAddress {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface TrackingEvent {
  id: number;
  status: OrderStatus;
  message: string;
  timestamp: string;
  location?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  status: OrderStatus;
  total: number;
  createdAt: string;
  trackingEvents: TrackingEvent[];
  estimatedDelivery?: string;
}
