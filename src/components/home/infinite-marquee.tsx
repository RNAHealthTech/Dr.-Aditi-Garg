'use client';

import React from 'react';
import { Star } from 'lucide-react';

const InfiniteMarquee = () => {
  const items = [
    "Advanced Microscopic Ear Surgery",
    "Endoscopic Sinus Surgery (FESS)",
    "Microlaryngeal Voice Surgery",
    "Painless Recovery",
    "State-of-the-art Technology",
    "Paediatric ENT Care",
    "Comprehensive Hearing Tests",
    "Vertigo & Balance Clinic",
    "11+ Years Experience",
  ];

  const starColors = [
    { text: 'text-[#DE4937]', fill: 'fill-[#DE4937]' }, // Ear (Red)
    { text: 'text-[#2787C8]', fill: 'fill-[#2787C8]' }, // Nose (Blue)
    { text: 'text-[#F1AA37]', fill: 'fill-[#F1AA37]' }, // Throat (Yellow)
  ];

  return (
    <div className="w-full bg-[#0f2942] py-4 overflow-hidden border-y border-[#0a1d30] flex relative">
      {/* Gradient overlay for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0f2942] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0f2942] to-transparent z-10"></div>

      <div className="flex w-fit animate-marquee whitespace-nowrap">
        {/* Double the items to create the infinite effect */}
        {[...items, ...items, ...items].map((item, index) => {
          const color = starColors[index % starColors.length];
          return (
            <div key={index} className="flex items-center mx-4 md:mx-8">
              <span className="text-blue-50 text-sm md:text-base font-medium tracking-wide uppercase">
                {item}
              </span>
              <Star className={`w-3.5 h-3.5 mx-4 md:mx-8 ${color.text} ${color.fill} opacity-90`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
