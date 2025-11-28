import React, { useState } from 'react';
import { ViewState, Product } from '../types';
import { MOCK_PRODUCTS, BRANDS, FEATURES } from '../constants';
import { LayoutGrid, List, ChevronRight, Star, Heart } from 'lucide-react';

interface ProductListingPageProps {
  viewType: 'LIST_GRID' | 'LIST_ROW';
  onViewChange: (view: ViewState) => void;
}

export default function ProductListingPage({ viewType, onViewChange }: ProductListingPageProps) {
  
  // Rating Star Helper
  const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex gap-1 text-orange-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-300'}`} />
      ))}
      <span className="text-orange-400 text-xs ml-1">{rating}</span>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span className="cursor-pointer hover:text-blue-600" onClick={() => onViewChange('HOME')}>Home</span>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="cursor-pointer hover:text-blue-600">Clothings</span>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="cursor-pointer hover:text-blue-600">Men's wear</span>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-gray-800">Summer clothing</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* SIDEBAR FILTERS */}
        <div className="hidden lg:block space-y-6">
           
           {/* Category Accordion */}
           <div>
              <div className="flex justify-between items-center font-bold mb-2 cursor-pointer">
                 Category <span className="text-gray-400">^</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 pl-2">
                 <li className="text-blue-600 font-medium bg-blue-50 -mx-2 px-2 py-1 rounded">Mobile accessory</li>
                 <li>Electronics</li>
                 <li>Smartphones</li>
                 <li>Modern tech</li>
                 <li className="text-blue-500 cursor-pointer">See all</li>
              </ul>
           </div>

           <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center font-bold mb-2 cursor-pointer">
                 Brands <span className="text-gray-400">^</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                 {BRANDS.map((brand, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <input type="checkbox" checked={i < 2} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                       <span>{brand}</span>
                    </li>
                 ))}
                 <li className="text-blue-500 cursor-pointer">See all</li>
              </ul>
           </div>

           <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center font-bold mb-2 cursor-pointer">
                 Features <span className="text-gray-400">^</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                 {FEATURES.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <input type="checkbox" checked={i === 0} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                       <span>{feat}</span>
                    </li>
                 ))}
                 <li className="text-blue-500 cursor-pointer">See all</li>
              </ul>
           </div>

           <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center font-bold mb-2">Price range</div>
              <div className="relative pt-6 pb-2">
                  <div className="h-1 bg-gray-200 rounded-full">
                      <div className="absolute left-0 top-1 bottom-1 w-1/2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full shadow cursor-pointer"></div>
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full shadow cursor-pointer"></div>
              </div>
              <div className="flex gap-2 text-sm mt-2">
                  <div className="flex-1">
                      <label className="text-gray-400 text-xs block">Min</label>
                      <input type="number" placeholder="0" className="w-full border rounded px-2 py-1 outline-none" />
                  </div>
                  <div className="flex-1">
                      <label className="text-gray-400 text-xs block">Max</label>
                      <input type="number" placeholder="9999" className="w-full border rounded px-2 py-1 outline-none" />
                  </div>
              </div>
              <button className="w-full mt-3 bg-white border border-gray-200 text-blue-600 font-medium py-1 rounded shadow-sm hover:bg-gray-50">Apply</button>
           </div>
        </div>

        {/* MAIN LISTING AREA */}
        <div className="lg:col-span-3">
            
            {/* Control Bar */}
            <div className="bg-white border border-gray-200 rounded-md p-3 mb-4 flex flex-wrap gap-4 items-center justify-between">
                <div className="text-sm">
                    12,911 items in <span className="font-bold">Mobile accessory</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="flex items-center gap-2 text-sm">
                       <input type="checkbox" className="rounded" />
                       <span>Verified only</span>
                   </div>
                   <select className="border border-gray-300 rounded px-2 py-1 text-sm outline-none bg-white">
                       <option>Featured</option>
                       <option>Price: Low to High</option>
                   </select>
                   <div className="flex border border-gray-300 rounded overflow-hidden">
                       <button 
                         className={`p-2 ${viewType === 'LIST_GRID' ? 'bg-gray-200' : 'bg-white'}`}
                         onClick={() => onViewChange('LIST_GRID')}
                       >
                           <LayoutGrid className="w-4 h-4" />
                       </button>
                       <button 
                         className={`p-2 ${viewType === 'LIST_ROW' ? 'bg-gray-200' : 'bg-white'}`}
                         onClick={() => onViewChange('LIST_ROW')}
                       >
                           <List className="w-4 h-4" />
                       </button>
                   </div>
                </div>
            </div>

            {/* Active Filters (Chips) */}
            <div className="flex flex-wrap gap-2 mb-4">
                {['Samsung', 'Apple', 'Poco', 'Metallic', '4 star', '3 star'].map((tag, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-gray-600 bg-white border border-blue-200 px-3 py-1 rounded-full cursor-pointer hover:bg-red-50 hover:border-red-200 hover:text-red-500 group transition">
                        {tag} <span className="text-gray-400 group-hover:text-red-500">✕</span>
                    </div>
                ))}
                <span className="text-blue-600 text-sm cursor-pointer self-center ml-2">Clear all filter</span>
            </div>

            {/* Products Layout */}
            {viewType === 'LIST_GRID' ? (
                // GRID VIEW
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {MOCK_PRODUCTS.concat(MOCK_PRODUCTS).map((product, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-md p-4 group cursor-pointer hover:shadow-lg transition relative" onClick={() => onViewChange('DETAIL')}>
                            <div className="h-48 flex items-center justify-center mb-4 relative">
                                <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="mb-2">
                                <div className="flex justify-between items-center mb-1">
                                    <div className="font-bold text-lg">${product.price} <span className="text-gray-400 text-sm font-normal line-through ml-1">${product.originalPrice || (product.price * 1.2).toFixed(2)}</span></div>
                                    <button className="p-2 rounded border border-gray-200 hover:bg-gray-100 text-blue-600"><Heart className="w-4 h-4" /></button>
                                </div>
                                <RatingStars rating={product.rating} />
                            </div>
                            <h3 className="text-gray-600 mb-2 font-medium line-clamp-2">{product.title}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                // LIST ROW VIEW
                <div className="space-y-4">
                    {MOCK_PRODUCTS.concat(MOCK_PRODUCTS).map((product, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-md p-4 flex flex-col md:flex-row gap-6 hover:shadow-md transition cursor-pointer" onClick={() => onViewChange('DETAIL')}>
                            <div className="w-full md:w-56 h-48 md:h-auto shrink-0 flex items-center justify-center bg-gray-50 rounded">
                                <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-gray-800 mb-2">{product.title}</h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="font-bold text-xl">${product.price}</span>
                                    {product.originalPrice && <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <RatingStars rating={product.rating} />
                                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>{product.orders} orders</span>
                                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span className="text-green-600">{product.shipping}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
                                <span className="text-blue-600 font-medium text-sm cursor-pointer">View details</span>
                            </div>
                            <div className="self-center md:self-start">
                                <button className="p-2 rounded border border-gray-200 hover:bg-gray-100 text-blue-600"><Heart className="w-5 h-5" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            <div className="flex justify-end gap-2 mt-8">
               <div className="border border-gray-300 rounded px-3 py-2 bg-white text-sm cursor-pointer">Show 10 <ChevronDown className="inline w-3 h-3 ml-1"/></div>
               <div className="flex border border-gray-300 rounded bg-white overflow-hidden">
                   <div className="px-3 py-2 border-r hover:bg-gray-100 cursor-pointer text-gray-400"><ChevronRight className="w-4 h-4 rotate-180" /></div>
                   <div className="px-4 py-2 border-r hover:bg-gray-100 cursor-pointer bg-gray-100 font-bold">1</div>
                   <div className="px-4 py-2 border-r hover:bg-gray-100 cursor-pointer">2</div>
                   <div className="px-4 py-2 border-r hover:bg-gray-100 cursor-pointer">3</div>
                   <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer"><ChevronRight className="w-4 h-4" /></div>
               </div>
            </div>

        </div>
      </div>
    </div>
  );
}

// Helper needed locally
function ChevronDown(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
}