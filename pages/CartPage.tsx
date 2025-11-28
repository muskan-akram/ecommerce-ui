import React from 'react';
import { ViewState } from '../types';
import { MOCK_CART, MOCK_PRODUCTS } from '../constants';
import { ChevronLeft, ShoppingCart } from 'lucide-react';

interface CartPageProps {
  onViewChange: (view: ViewState) => void;
}

export default function CartPage({ onViewChange }: CartPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-6">My cart (3)</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
         
         {/* Cart Items List */}
         <div className="lg:col-span-9 space-y-4">
             {MOCK_CART.map((item) => (
                 <div key={item.id} className="bg-white border border-gray-200 rounded-md p-4 flex flex-col sm:flex-row gap-4">
                     <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 border border-gray-100 rounded flex items-center justify-center shrink-0">
                         <img src={item.image} alt={item.title} className="max-h-full max-w-full mix-blend-multiply" />
                     </div>
                     <div className="flex-1">
                         <div className="flex justify-between items-start mb-1">
                             <h3 className="font-medium text-gray-800 max-w-md">{item.title}</h3>
                             <div className="font-bold text-gray-800">${item.price}</div>
                         </div>
                         <div className="text-sm text-gray-500 mb-1">
                             Size: {item.selectedSize}, Color: {item.selectedColor}, Material: Plastic
                         </div>
                         <div className="text-sm text-gray-400 mb-3">Seller: {item.seller}</div>
                         
                         <div className="flex justify-between items-center">
                             <div className="space-x-2">
                                 <button className="px-3 py-1 border border-gray-200 rounded text-red-500 text-sm font-medium hover:bg-red-50">Remove</button>
                                 <button className="px-3 py-1 border border-gray-200 rounded text-blue-600 text-sm font-medium hover:bg-blue-50">Save for later</button>
                             </div>
                             <div className="flex items-center border border-gray-200 rounded">
                                 <select className="px-2 py-1 bg-white outline-none text-sm font-medium" defaultValue={item.qty}>
                                     <option>Qty: 1</option>
                                     <option>Qty: 2</option>
                                     <option>Qty: 3</option>
                                     <option>Qty: 9</option>
                                 </select>
                             </div>
                         </div>
                     </div>
                 </div>
             ))}

             <div className="flex justify-between items-center mt-6">
                 <button className="bg-blue-600 text-white px-5 py-2 rounded font-medium text-sm flex items-center gap-2 hover:bg-blue-700" onClick={() => onViewChange('LIST_GRID')}>
                     <ChevronLeft className="w-4 h-4" /> Back to shop
                 </button>
                 <button className="bg-white border border-gray-200 text-blue-600 px-5 py-2 rounded font-medium text-sm hover:bg-gray-50">Remove all</button>
             </div>
             
             {/* Security Icons */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                 <div className="flex gap-3">
                     <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                     </div>
                     <div>
                         <h4 className="font-medium text-sm text-gray-700">Secure payment</h4>
                         <p className="text-gray-400 text-xs">Have you ever finally just</p>
                     </div>
                 </div>
                 <div className="flex gap-3">
                     <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                     </div>
                     <div>
                         <h4 className="font-medium text-sm text-gray-700">Customer support</h4>
                         <p className="text-gray-400 text-xs">Have you ever finally just</p>
                     </div>
                 </div>
                 <div className="flex gap-3">
                     <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     </div>
                     <div>
                         <h4 className="font-medium text-sm text-gray-700">Free delivery</h4>
                         <p className="text-gray-400 text-xs">Have you ever finally just</p>
                     </div>
                 </div>
             </div>
         </div>

         {/* Checkout Sidebar */}
         <div className="lg:col-span-3">
             <div className="bg-white border border-gray-200 rounded-md p-4 mb-4">
                 <label className="text-gray-600 text-sm mb-2 block">Have a coupon?</label>
                 <div className="flex border border-gray-300 rounded overflow-hidden">
                     <input type="text" placeholder="Add coupon" className="w-full px-3 py-2 text-sm outline-none" />
                     <button className="bg-white text-blue-600 px-3 py-2 text-sm font-medium border-l border-gray-300 hover:bg-gray-50">Apply</button>
                 </div>
             </div>

             <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                 <div className="flex justify-between mb-2 text-gray-600">
                     <span>Subtotal:</span>
                     <span>$1403.97</span>
                 </div>
                 <div className="flex justify-between mb-2 text-gray-600">
                     <span>Discount:</span>
                     <span className="text-red-500">- $60.00</span>
                 </div>
                 <div className="flex justify-between mb-4 text-gray-600">
                     <span>Tax:</span>
                     <span className="text-green-600">+ $14.00</span>
                 </div>
                 <div className="flex justify-between font-bold text-lg text-gray-800 border-t pt-4 mb-4">
                     <span>Total:</span>
                     <span>$1357.97</span>
                 </div>
                 <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 shadow transition text-lg">Checkout</button>
                 
                 <div className="flex justify-center gap-2 mt-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/100px-Mastercard_2019_logo.svg.png" className="h-5" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/100px-Visa_Inc._logo.svg.png" className="h-5" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/100px-PayPal.svg.png" className="h-5" />
                 </div>
             </div>
         </div>
      </div>

      {/* Saved for Later */}
      <div className="bg-white border border-gray-200 rounded-md p-6 mt-8">
          <h3 className="font-bold text-lg mb-4">Saved for later</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {MOCK_PRODUCTS.slice(0, 4).map((p, i) => (
                  <div key={i} className="group cursor-pointer">
                      <div className="bg-gray-100 rounded-md mb-3 h-48 flex items-center justify-center p-4">
                          <img src={p.image} className="max-h-full max-w-full mix-blend-multiply" />
                      </div>
                      <div className="font-bold text-lg text-gray-900 mb-1">${p.price}</div>
                      <div className="text-gray-500 text-sm mb-3 line-clamp-2 h-10">{p.title}</div>
                      <button 
                        className="flex items-center gap-2 text-blue-600 border border-gray-200 px-3 py-2 rounded text-sm font-medium hover:bg-white hover:shadow transition bg-white w-max"
                        onClick={() => onViewChange('CART')} // Mock action
                      >
                          <ShoppingCart className="w-4 h-4" /> Move to cart
                      </button>
                  </div>
              ))}
          </div>
      </div>

      {/* Blue Banner */}
      <div className="mt-8 bg-blue-600 rounded-lg p-6 lg:p-8 flex flex-col md:flex-row justify-between items-center text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-blue-500 skew-x-12 opacity-50 z-0"></div>
          <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-1">Super discount on more than 100 USD</h2>
              <p className="text-blue-100 text-sm">Have you ever finally just write dummy info</p>
          </div>
          <button className="relative z-10 bg-orange-500 text-white px-6 py-2 rounded font-medium hover:bg-orange-600 mt-4 md:mt-0 transition">
              Shop now
          </button>
      </div>
    </div>
  );
}