export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  orders: number;
  shipping: string;
  description: string;
  image: string;
  category: string;
  brand?: string;
  features?: string[];
  isHot?: boolean;
}

export interface CartItem extends Product {
  qty: number;
  selectedSize?: string;
  selectedColor?: string;
  seller: string;
}

export type ViewState = 'HOME' | 'LIST_GRID' | 'LIST_ROW' | 'DETAIL' | 'CART';

export interface FilterState {
  brands: string[];
  features: string[];
  minPrice: number;
  maxPrice: number;
  condition: string;
}