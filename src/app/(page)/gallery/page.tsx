import React from 'react';
import InstagramFeed from '@/components/home/instagram-feed';
import AutoImageSlider from '@/components/home/auto-image-slider';
import WhyChooseUs from '@/components/home/why-choose-us';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Dr. Aditi Garg',
  description: 'Glimpses of patient care, clinics, and professional moments of Dr. Aditi Garg.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-16">
      {/* Realistic Header Banner */}
      <div className="relative bg-[#0e4e50] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80" alt="Gallery Setup" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e4e50] via-[#0e4e50]/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-100 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Life at Clinic
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            A visual journey into our world of expert ENT care, happy patients, and state-of-the-art facilities.
          </p>
        </div>
      </div>

      <div className="-mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-3xl p-4 shadow-xl border border-slate-100">
            <InstagramFeed />
          </div>
        </div>
      </div>

      <AutoImageSlider />
      <WhyChooseUs />
    </div>
  );
}
