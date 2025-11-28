import React from 'react';
import { ViewState } from '../types';
import { MOCK_PRODUCTS } from '../constants';
import { Check, Star, MessageSquare, ShoppingBag, ShieldCheck, Globe, Heart } from 'lucide-react';

interface ProductDetailPageProps {
  onViewChange: (view: ViewState) => void;
}

export default function ProductDetailPage({ onViewChange }: ProductDetailPageProps) {
  const product = MOCK_PRODUCTS[4]; // Using the T-Shirt example from screenshot

  return (
    <div className="container mx-auto px-4 py-6">
       
       {/* Breadcrumb */}
       <div className="flex items-center text-sm text-gray-500 mb-6">
        <span className="cursor-pointer hover:text-blue-600" onClick={() => onViewChange('HOME')}>Home</span>
        <span className="mx-2">/</span>
        <span className="cursor-pointer hover:text-blue-600">Clothings</span>
        <span className="mx-2">/</span>
        <span className="cursor-pointer hover:text-blue-600">Men's wear</span>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Summer clothing</span>
      </div>

      <div className="bg-white border border-gray-200 rounded-md p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
        
        {/* Gallery */}
        <div className="lg:col-span-4 flex flex-col gap-4">
           <div className="border border-gray-200 rounded p-4 h-80 flex items-center justify-center">
             <img src={product.image} className="max-h-full object-contain mix-blend-multiply" />
           </div>
           <div className="flex gap-2 overflow-x-auto">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`border ${i===0 ? 'border-gray-500' : 'border-gray-200'} rounded p-1 w-14 h-14 cursor-pointer hover:border-gray-400 shrink-0`}>
                  <img src={product.image} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
              ))}
           </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5">
           <span className="text-green-600 text-sm font-medium flex items-center gap-1 mb-2">
             <Check className="w-4 h-4" /> In stock
           </span>
           <h1 className="text-xl font-bold text-gray-800 mb-3 leading-snug">
             Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
           </h1>
           <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center text-orange-400 gap-1">
                 <div className="flex"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 text-gray-300"/></div>
                 <span className="text-orange-400">9.3</span>
              </div>
              <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4"/> 32 reviews</span>
              <span className="flex items-center gap-1"><ShoppingBag className="w-4 h-4"/> 154 sold</span>
           </div>

           <div className="bg-orange-50 p-4 rounded mb-4 flex gap-8">
              <div className="border-r border-gray-300 pr-8 last:border-0 last:pr-0">
                 <div className="text-red-500 font-bold text-xl">$98.00</div>
                 <div className="text-gray-500 text-xs">50-100 pcs</div>
              </div>
              <div className="border-r border-gray-300 pr-8 last:border-0 last:pr-0">
                 <div className="text-gray-800 font-bold text-xl">$90.00</div>
                 <div className="text-gray-500 text-xs">100-700 pcs</div>
              </div>
              <div className="border-r border-gray-300 pr-8 last:border-0 last:pr-0">
                 <div className="text-gray-800 font-bold text-xl">$78.00</div>
                 <div className="text-gray-500 text-xs">700+ pcs</div>
              </div>
           </div>

           <div className="space-y-3 text-sm border-b border-gray-200 pb-4 mb-4">
              <div className="grid grid-cols-3">
                 <span className="text-gray-500">Price:</span>
                 <span className="col-span-2 text-gray-600">Negotiable</span>
              </div>
              <div className="grid grid-cols-3">
                 <span className="text-gray-500">Type:</span>
                 <span className="col-span-2 text-gray-600">Classic shoes</span>
              </div>
              <div className="grid grid-cols-3">
                 <span className="text-gray-500">Material:</span>
                 <span className="col-span-2 text-gray-600">Plastic material</span>
              </div>
              <div className="grid grid-cols-3">
                 <span className="text-gray-500">Design:</span>
                 <span className="col-span-2 text-gray-600">Modern nice</span>
              </div>
           </div>

           <div className="space-y-3 text-sm mb-6">
              <div className="grid grid-cols-3">
                 <span className="text-gray-500">Customization:</span>
                 <span className="col-span-2 text-gray-600">Customized logo and design custom packages</span>
              </div>
              <div className="grid grid-cols-3">
                 <span className="text-gray-500">Protection:</span>
                 <span className="col-span-2 text-gray-600">Refund Policy</span>
              </div>
              <div className="grid grid-cols-3">
                 <span className="text-gray-500">Warranty:</span>
                 <span className="col-span-2 text-gray-600">2 years full warranty</span>
              </div>
           </div>
        </div>

        {/* Supplier Sidebar */}
        <div className="lg:col-span-3">
            <div className="border border-gray-200 rounded-md p-4 shadow-sm h-full flex flex-col">
               <div className="flex items-center gap-3 mb-4 border-b pb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 font-bold flex items-center justify-center rounded uppercase">R</div>
                  <div>
                     <div className="font-medium">Supplier</div>
                     <div className="text-sm text-gray-500">Guanjoi Trading LLC</div>
                  </div>
               </div>
               
               <div className="space-y-3 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                     <span className="text-gray-400">🇩🇪</span> Germany, Berlin
                  </div>
                  <div className="flex items-center gap-2">
                     <ShieldCheck className="w-4 h-4 text-gray-400" /> Verified Seller
                  </div>
                  <div className="flex items-center gap-2">
                     <Globe className="w-4 h-4 text-gray-400" /> Worldwide shipping
                  </div>
               </div>

               <div className="mt-auto space-y-2">
                  <button className="w-full bg-blue-600 text-white rounded py-2 font-medium hover:bg-blue-700 transition">Send inquiry</button>
                  <button className="w-full bg-white border border-gray-200 text-blue-600 rounded py-2 font-medium hover:bg-gray-50 transition">Seller's profile</button>
               </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-blue-600 font-medium text-sm mt-4 cursor-pointer">
               <Heart className="w-4 h-4" /> Save for later
            </div>
        </div>
      </div>

      {/* Tabs / Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
         <div className="lg:col-span-9">
            <div className="bg-white border border-gray-200 rounded-md shadow-sm">
                <div className="flex border-b border-gray-200">
                    <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">Description</button>
                    <button className="px-6 py-3 text-gray-500 hover:text-gray-800 text-sm">Reviews</button>
                    <button className="px-6 py-3 text-gray-500 hover:text-gray-800 text-sm">Shipping</button>
                    <button className="px-6 py-3 text-gray-500 hover:text-gray-800 text-sm">About seller</button>
                </div>
                <div className="p-6 text-sm text-gray-600 leading-relaxed space-y-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    
                    <table className="w-full border border-gray-200 mt-4">
                       <tbody>
                          <tr className="border-b border-gray-200">
                             <td className="bg-gray-100 p-2 w-1/3 text-gray-500">Model</td>
                             <td className="p-2">#8786867</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                             <td className="bg-gray-100 p-2 text-gray-500">Style</td>
                             <td className="p-2">Classic style</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                             <td className="bg-gray-100 p-2 text-gray-500">Certificate</td>
                             <td className="p-2">ISO-898921212</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                             <td className="bg-gray-100 p-2 text-gray-500">Size</td>
                             <td className="p-2">34mm x 450mm x 19mm</td>
                          </tr>
                          <tr>
                             <td className="bg-gray-100 p-2 text-gray-500">Memory</td>
                             <td className="p-2">36GB RAM</td>
                          </tr>
                       </tbody>
                    </table>

                    <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-gray-400"/> Some great feature name here</div>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-gray-400"/> Lorem ipsum dolor sit amet, consectetur</div>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-gray-400"/> Duis aute irure dolor in reprehenderit</div>
                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-gray-400"/> Some great feature name here</div>
                    </div>
                </div>
            </div>
         </div>
         
         {/* Right Sidebar - You May Like */}
         <div className="lg:col-span-3">
             <div className="bg-white border border-gray-200 rounded-md p-4">
                 <h3 className="font-bold mb-4">You may like</h3>
                 <div className="space-y-4">
                    {MOCK_PRODUCTS.slice(0, 5).map((p, i) => (
                       <div key={i} className="flex gap-3 cursor-pointer group" onClick={() => onViewChange('DETAIL')}>
                           <div className="border border-gray-200 rounded w-16 h-16 flex items-center justify-center shrink-0">
                               <img src={p.image} className="max-h-full max-w-full mix-blend-multiply" />
                           </div>
                           <div>
                              <h4 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1 group-hover:text-blue-600">{p.title}</h4>
                              <div className="text-gray-500 text-xs">$7.00 - ${p.price}</div>
                           </div>
                       </div>
                    ))}
                 </div>
             </div>
         </div>
      </div>

      {/* Related Products */}
      <div className="bg-white border border-gray-200 rounded-md p-6 mt-6">
          <h3 className="font-bold text-lg mb-4">Related products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {MOCK_PRODUCTS.map((p, i) => (
                  <div key={i} className="cursor-pointer group" onClick={() => onViewChange('DETAIL')}>
                      <div className="bg-gray-100 rounded mb-2 h-32 flex items-center justify-center">
                          <img src={p.image} className="max-h-full max-w-full mix-blend-multiply p-2" />
                      </div>
                      <div className="text-sm font-medium mb-1 group-hover:text-blue-600">{p.title.split(' ').slice(0, 4).join(' ')}</div>
                      <div className="text-gray-500 text-xs">$32.00 - $40.00</div>
                  </div>
              ))}
          </div>
      </div>

      {/* Blue Banner */}
      <div className="mt-6 bg-blue-600 rounded-lg p-6 lg:p-8 flex flex-col md:flex-row justify-between items-center text-white relative overflow-hidden">
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