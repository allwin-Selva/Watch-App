
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
