import { Product, CartItem } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Canon Camera EOS 2000, Black 10x zoom',
    price: 998.00,
    originalPrice: 1128.00,
    rating: 4.5,
    reviews: 32,
    orders: 154,
    shipping: 'Free Shipping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/id/250/300/300',
    category: 'Electronics',
    brand: 'Canon',
    features: ['Metallic', '10x Zoom']
  },
  {
    id: '2',
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 99.50,
    originalPrice: 1128.00,
    rating: 4.8,
    reviews: 120,
    orders: 1200,
    shipping: 'Free Shipping',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://picsum.photos/id/404/300/300', // Camera placeholder
    category: 'Electronics',
    brand: 'GoPro',
    features: ['Waterproof', '4K']
  },
  {
    id: '3',
    title: 'Xiaomi Redmi 8 Original',
    price: 32.00,
    originalPrice: 40.00,
    rating: 4.2,
    reviews: 8,
    orders: 45,
    shipping: 'Paid Shipping',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://picsum.photos/id/160/300/300', // Phone placeholder
    category: 'Mobile accessory',
    brand: 'Xiaomi',
    features: ['Metallic', 'Large Memory']
  },
  {
    id: '4',
    title: 'Apple Watch Series Space Gray',
    price: 299.00,
    rating: 4.9,
    reviews: 450,
    orders: 890,
    shipping: 'Free Shipping',
    description: 'Modern nice apple watch with latest features.',
    image: 'https://picsum.photos/id/1/300/300', // Tech
    category: 'Smartwatches',
    brand: 'Apple',
    features: ['Metallic', 'OLED']
  },
  {
    id: '5',
    title: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle',
    price: 98.00,
    originalPrice: 120.00,
    rating: 4.3,
    reviews: 32,
    orders: 154,
    shipping: 'Negotiable',
    description: 'Great cotton t-shirt for men.',
    image: 'https://picsum.photos/id/999/300/300', // Clothes
    category: 'Clothing',
    brand: 'Generic',
    features: ['Cotton']
  },
  {
    id: '6',
    title: 'Blue Wallet for Men',
    price: 12.00,
    rating: 4.0,
    reviews: 12,
    orders: 50,
    shipping: 'Free',
    description: 'Leather wallet.',
    image: 'https://picsum.photos/id/888/300/300',
    category: 'Accessories',
  }
];

export const MOCK_CART: CartItem[] = [
  {
    id: '101',
    title: 'T-shirts with multiple colors, for men and lady',
    price: 78.99,
    qty: 9,
    seller: 'Artel Market',
    selectedSize: 'Medium',
    selectedColor: 'Blue',
    image: 'https://picsum.photos/id/999/100/100',
    category: 'Clothing',
    rating: 4,
    reviews: 10,
    orders: 10,
    shipping: 'Free',
    description: ''
  },
  {
    id: '102',
    title: 'School backpack for students',
    price: 39.00,
    qty: 3,
    seller: 'Best factory LLC',
    selectedSize: 'Medium',
    selectedColor: 'Blue',
    image: 'https://picsum.photos/id/103/100/100',
    category: 'Accessories',
    rating: 5,
    reviews: 20,
    orders: 20,
    shipping: 'Free',
    description: ''
  },
  {
    id: '103',
    title: 'Table lamp for bedroom',
    price: 170.50,
    qty: 1,
    seller: 'Artel Market',
    selectedSize: 'Standard',
    selectedColor: 'Beige',
    image: 'https://picsum.photos/id/55/100/100',
    category: 'Home',
    rating: 4.5,
    reviews: 5,
    orders: 5,
    shipping: 'Free',
    description: ''
  }
];

export const CATEGORIES = [
  'Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech', 'Home interiors', 'Computer and tech', 'Tools, equipments', 'Sports and outdoor'
];

export const BRANDS = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
export const FEATURES = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'];
