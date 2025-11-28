import React from 'react';
import { ViewState, Product } from '../types';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import { Clock, Send } from 'lucide-react';

interface HomePageProps {
  onViewChange: (view: ViewState) => void;
}

export default function HomePage({ onViewChange }: HomePageProps) {
  
  // Helper for Hero Section Menu
  const HeroMenu = () => (
    <div className="bg-white rounded-md border border-gray-200 h-full py-2">
      {CATEGORIES.map((cat, i) => (
        <div 
          key={i} 
          className={`px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 hover:text-blue-600 ${i === 0 ? 'bg-blue-50 font-medium' : 'text-gray-600'}`}
          onClick={() => onViewChange('LIST_GRID')}
        >
          {cat}
        </div>
      ))}
      <div className="px-4 py-2 text-sm cursor-pointer text-gray-600 hover:bg-blue-50 border-t mt-1 pt-2">More category</div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      
      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 bg-white border border-gray-200 rounded-md">
        {/* Sidebar Menu */}
        <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
          <HeroMenu />
        </div>
        
        {/* Main Banner */}
        <div className="lg:col-span-6 xl:col-span-7 h-80 relative rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/id/180/800/400)'}}>
           <div className="absolute inset-0 bg-black/10"></div>
           <div className="absolute top-10 left-10 text-gray-800">
             <h2 className="text-2xl font-light mb-1">Latest trending</h2>
             <h1 className="text-3xl font-bold mb-4">Electronic items</h1>
             <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 shadow-sm" onClick={() => onViewChange('LIST_GRID')}>
               Learn more
             </button>
           </div>
        </div>

        {/* User Card */}
        <div className="lg:col-span-3 h-full flex flex-col gap-2">
           <div className="bg-blue-50 p-4 rounded-md flex-1">
             <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
               </div>
               <div className="text-sm">
                 <p>Hi, user</p>
                 <p>let's get stated</p>
               </div>
             </div>
             <button className="w-full bg-blue-600 text-white rounded py-1 text-sm mb-2 hover:bg-blue-700">Join now</button>
             <button className="w-full bg-white text-blue-600 border border-gray-200 rounded py-1 text-sm hover:bg-gray-50">Log in</button>
           </div>
           <div className="bg-orange-500 text-white p-4 rounded-md text-sm">
             Get US $10 off with a new supplier
           </div>
           <div className="bg-teal-400 text-white p-4 rounded-md text-sm">
             Send quotes with supplier preferences
           </div>
        </div>
      </div>

      {/* DEALS SECTION */}
      <div className="bg-white border border-gray-200 rounded-md flex flex-col lg:flex-row overflow-hidden">
         <div className="p-5 w-full lg:w-64 border-r border-gray-200 shrink-0">
            <h3 className="font-bold text-lg mb-1">Deals and offers</h3>
            <p className="text-gray-500 text-sm mb-3">Hygiene equipments</p>
            <div className="flex gap-1 text-center mb-2">
               {['04', '13', '34', '56'].map((time, i) => (
                 <div key={i} className="bg-gray-600 text-white rounded p-1 w-11 h-12 flex flex-col justify-center">
                    <span className="font-bold leading-none">{time}</span>
                    <span className="text-[10px] text-gray-300">{['Days','Hour','Min','Sec'][i]}</span>
                 </div>
               ))}
            </div>
         </div>
         <div className="flex-1 overflow-x-auto">
            <div className="flex min-w-max">
               {MOCK_PRODUCTS.slice(0, 5).map((p) => (
                 <div key={p.id} className="w-36 md:w-44 p-4 border-r border-gray-200 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-inner" onClick={() => onViewChange('DETAIL')}>
                    <img src={p.image} alt={p.title} className="w-24 h-24 object-contain mb-3 p-2 mix-blend-multiply" />
                    <p className="text-sm text-gray-800 truncate w-full mb-1">{p.category}</p>
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">-25%</span>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* HOME & OUTDOOR GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 border border-gray-200 rounded-md bg-white overflow-hidden h-[260px]">
         <div className="p-4 bg-cover bg-center flex flex-col justify-between" style={{backgroundImage: 'url(https://picsum.photos/id/1080/300/600)', width: '100%'}}>
             <h3 className="font-bold text-lg w-32">Home and outdoor</h3>
             <button className="bg-white text-xs px-3 py-2 rounded font-medium w-max shadow-sm" onClick={() => onViewChange('LIST_GRID')}>Source now</button>
         </div>
         <div className="lg:col-span-3">
             <div className="grid grid-cols-2 md:grid-cols-4 h-full">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="border-b border-r border-gray-200 p-4 flex gap-2 h-32 hover:bg-gray-50 transition cursor-pointer" onClick={() => onViewChange('DETAIL')}>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Soft chairs</h4>
                        <p className="text-xs text-gray-400">From USD 19</p>
                      </div>
                      <img src={`https://picsum.photos/id/${50 + i}/60/60`} className="w-14 h-14 object-contain ml-auto self-end mix-blend-multiply" />
                  </div>
                ))}
             </div>
         </div>
      </div>

      {/* CONSUMER ELECTRONICS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 border border-gray-200 rounded-md bg-white overflow-hidden h-[260px]">
         <div className="p-4 bg-cover bg-center flex flex-col justify-between" style={{backgroundImage: 'url(https://picsum.photos/id/3/300/600)', width: '100%'}}>
             <h3 className="font-bold text-lg w-40">Consumer electronics and gadgets</h3>
             <button className="bg-white text-xs px-3 py-2 rounded font-medium w-max shadow-sm" onClick={() => onViewChange('LIST_GRID')}>Source now</button>
         </div>
         <div className="lg:col-span-3">
             <div className="grid grid-cols-2 md:grid-cols-4 h-full">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="border-b border-r border-gray-200 p-4 flex gap-2 h-32 hover:bg-gray-50 transition cursor-pointer" onClick={() => onViewChange('DETAIL')}>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Smart watches</h4>
                        <p className="text-xs text-gray-400">From USD 19</p>
                      </div>
                      <img src={`https://picsum.photos/id/${10 + i}/60/60`} className="w-14 h-14 object-contain ml-auto self-end mix-blend-multiply" />
                  </div>
                ))}
             </div>
         </div>
      </div>

      {/* REQUEST FORM */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md p-6 lg:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-8">
             <div className="text-white max-w-md">
                <h3 className="text-2xl font-bold mb-2">An easy way to send requests to all suppliers</h3>
                <p className="text-sm opacity-90">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
             </div>
             
             <div className="bg-white rounded-md p-5 w-full lg:w-[450px]">
                 <h4 className="font-bold text-lg mb-4 text-gray-800">Send quote to suppliers</h4>
                 <div className="space-y-4">
                    <input type="text" placeholder="What item you need?" className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-500" />
                    <textarea placeholder="Type more details" className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-20 outline-none focus:border-blue-500 resize-none"></textarea>
                    <div className="flex gap-2">
                        <input type="number" placeholder="Quantity" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-500" />
                        <select className="w-24 border border-gray-300 rounded px-3 py-2 text-sm outline-none">
                            <option>Pcs</option>
                            <option>Kg</option>
                        </select>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 font-medium">Send inquiry</button>
                 </div>
             </div>
          </div>
      </div>

      {/* RECOMMENDED ITEMS */}
      <div>
         <h3 className="font-bold text-xl mb-4 text-gray-800">Recommended items</h3>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {MOCK_PRODUCTS.concat(MOCK_PRODUCTS).slice(0, 10).map((p, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-md p-4 cursor-pointer hover:shadow-md transition" onClick={() => onViewChange('DETAIL')}>
                   <div className="h-40 flex items-center justify-center mb-3">
                      <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                   </div>
                   <div className="font-bold mb-1">${p.price}</div>
                   <div className="text-sm text-gray-500 line-clamp-2">{p.title}</div>
                </div>
             ))}
         </div>
      </div>

    </div>
  );
}