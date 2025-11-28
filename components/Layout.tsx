import React from 'react';
import { ViewState } from '../types';
import { ShoppingCart, User, MessageSquare, Heart, Search, Menu, ChevronDown, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

interface LayoutProps {
  children?: React.ReactNode;
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

export default function Layout({ children, currentView, onViewChange }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-700 bg-gray-50">
      {/* HEADER */}
      <header className="bg-white">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onViewChange('HOME')}
          >
            <div className="bg-blue-600 rounded p-1">
              <ShoppingCart className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-blue-500">Brand</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-auto order-3 md:order-2 w-full md:w-auto mt-2 md:mt-0">
            <div className="flex border-2 border-blue-600 rounded-lg overflow-hidden h-10">
              <input 
                type="text" 
                placeholder="Search" 
                className="flex-1 px-4 outline-none text-sm"
              />
              <div className="border-l border-blue-600 relative hidden sm:block">
                 <select className="appearance-none bg-white px-4 py-2 pr-8 text-sm h-full outline-none cursor-pointer">
                    <option>All category</option>
                    <option>Electronics</option>
                    <option>Clothes</option>
                 </select>
                 <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
              <button className="bg-blue-600 text-white px-6 font-medium text-sm hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 order-2 md:order-3">
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-blue-600">
              <User className="w-5 h-5 text-gray-500" />
              <span className="text-xs text-gray-500 hidden md:block">Profile</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-blue-600">
              <MessageSquare className="w-5 h-5 text-gray-500" />
              <span className="text-xs text-gray-500 hidden md:block">Message</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-blue-600">
              <Heart className="w-5 h-5 text-gray-500" />
              <span className="text-xs text-gray-500 hidden md:block">Orders</span>
            </div>
            <div 
              className="flex flex-col items-center gap-1 cursor-pointer hover:text-blue-600"
              onClick={() => onViewChange('CART')}
            >
              <ShoppingCart className={`w-5 h-5 ${currentView === 'CART' ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className={`text-xs hidden md:block ${currentView === 'CART' ? 'text-blue-600' : 'text-gray-500'}`}>My cart</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between overflow-x-auto whitespace-nowrap">
            <div className="flex items-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2 cursor-pointer mr-4" onClick={() => onViewChange('LIST_GRID')}>
                <Menu className="w-5 h-5" />
                <span>All category</span>
              </div>
              <span className="cursor-pointer hover:text-blue-600">Hot offers</span>
              <span className="cursor-pointer hover:text-blue-600">Gift boxes</span>
              <span className="cursor-pointer hover:text-blue-600">Projects</span>
              <span className="cursor-pointer hover:text-blue-600">Menu item</span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                Help <ChevronDown className="w-4 h-4" />
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm ml-4">
               <div className="flex items-center gap-1 cursor-pointer">
                  English, USD <ChevronDown className="w-4 h-4" />
               </div>
               <div className="flex items-center gap-2 cursor-pointer">
                  Ship to 🇩🇪 <ChevronDown className="w-4 h-4" />
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* NEWSLETTER */}
      <div className="bg-gray-100 py-8 mt-8">
        <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold mb-2">Subscribe on our newsletter</h3>
            <p className="text-gray-500 mb-4">Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className="flex justify-center gap-2 max-w-md mx-auto">
                <div className="relative flex-1">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input type="email" placeholder="Email" className="w-full pl-10 pr-4 py-2 border rounded text-sm outline-none focus:border-blue-500" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">Subscribe</button>
            </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white pt-10 pb-6 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-10">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 rounded p-1">
                  <ShoppingCart className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-blue-500">Brand</span>
              </div>
              <p className="text-gray-500 text-sm mb-4">Best information about the company gies here but now lorem ipsum is</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition"><Facebook className="w-4 h-4" /></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white cursor-pointer hover:bg-blue-400 transition"><Twitter className="w-4 h-4" /></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition"><Linkedin className="w-4 h-4" /></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white cursor-pointer hover:bg-pink-600 transition"><Instagram className="w-4 h-4" /></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white cursor-pointer hover:bg-red-600 transition"><Youtube className="w-4 h-4" /></div>
              </div>
            </div>
            
            <div>
               <h4 className="font-medium mb-3">About</h4>
               <ul className="text-sm text-gray-500 space-y-2">
                  <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-600">Find store</a></li>
                  <li><a href="#" className="hover:text-blue-600">Categories</a></li>
                  <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
               </ul>
            </div>
            
            <div>
               <h4 className="font-medium mb-3">Partnership</h4>
               <ul className="text-sm text-gray-500 space-y-2">
                  <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-600">Find store</a></li>
                  <li><a href="#" className="hover:text-blue-600">Categories</a></li>
                  <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
               </ul>
            </div>

            <div>
               <h4 className="font-medium mb-3">Information</h4>
               <ul className="text-sm text-gray-500 space-y-2">
                  <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                  <li><a href="#" className="hover:text-blue-600">Money Refund</a></li>
                  <li><a href="#" className="hover:text-blue-600">Shipping</a></li>
                  <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
               </ul>
            </div>

            <div>
               <h4 className="font-medium mb-3">For users</h4>
               <ul className="text-sm text-gray-500 space-y-2">
                  <li><a href="#" className="hover:text-blue-600">Login</a></li>
                  <li><a href="#" className="hover:text-blue-600">Register</a></li>
                  <li><a href="#" className="hover:text-blue-600">Settings</a></li>
                  <li><a href="#" className="hover:text-blue-600">My Orders</a></li>
               </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
                <h4 className="font-medium mb-3">Get app</h4>
                <div className="space-y-2">
                    <button className="bg-black text-white px-3 py-2 rounded w-full text-xs flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.23 3.91-1.23.96 0 1.98.51 2.54 1.31-2.42 1.55-2.1 5.38.19 6.64-.18.58-.45 1.2-.82 1.78-.49.76-1.03 1.52-1.62 2.1zM12.03 5.31c.27-1.58 1.4-2.85 2.76-2.98.24 1.83-1.61 3.29-2.76 2.98z"/></svg>
                        App Store
                    </button>
                    <button className="bg-black text-white px-3 py-2 rounded w-full text-xs flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-1.61-.772V2.586a.996.996 0 0 1 1.609-.772zM14.208 12.418l2.902 2.902-7.536 4.326-5.83-5.83 10.464-1.4zM17.84 14.882l3.225-1.862c.585-.338.585-1.702 0-2.04l-3.225-1.862-2.128 2.128 2.128 3.636zM4.174 4.354l5.83-5.83 7.536 4.326-2.902 2.902-10.464-1.4z"/></svg>
                        Google Play
                    </button>
                </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6 text-sm text-gray-500">
             <p>© 2023 Ecommerce.</p>
             <div className="flex items-center gap-1">
                 🇺🇸 English <ChevronDown className="w-4 h-4"/>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}