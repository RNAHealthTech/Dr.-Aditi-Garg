'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    title: 'Advanced Diagnostics',
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    title: 'Microscopic Precision',
  },
  {
    src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
    title: 'Modern OT Setups',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    title: 'Comprehensive Audiology',
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    title: 'State-of-the-art Endoscopy',
  },
];

const AutoImageSlider = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#081c1d] overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-teal-400 uppercase mb-4">
              <span className="w-8 h-[1.5px] bg-teal-400"></span>
              Facilities & Technologies
            </div>
            <h2 className="text-3xl sm:text-[38px] font-bold text-white font-serif tracking-tight leading-tight max-w-2xl">
              Equipped for precision. Designed for comfort.
            </h2>
          </div>
          <p className="text-[13.5px] text-slate-400 max-w-sm leading-relaxed">
            Experience world-class ENT care supported by modern medical infrastructure and advanced surgical technology at our centers.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden pb-10">
        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#081c1d] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#081c1d] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-fit animate-marquee-fast">
          {[...images, ...images, ...images].map((img, idx) => (
            <div key={idx} className="relative w-72 h-80 sm:w-96 sm:h-[400px] mx-3 sm:mx-4 flex-shrink-0 rounded-xl overflow-hidden group">
              <Image 
                src={img.src} 
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-8 h-1 bg-teal-500 mb-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0"></div>
                <h3 className="text-white font-bold text-lg sm:text-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoImageSlider;
