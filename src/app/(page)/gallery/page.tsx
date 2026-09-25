import React from 'react';
import InstagramFeed from '@/components/home/instagram-feed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Dr. Aditi Garg',
  description: 'Glimpses of patient care, clinics, and professional moments of Dr. Aditi Garg.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-16">
      {/* Dynamic Header Banner */}
      <div className="relative bg-[#0e4e50] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#093537]/50 rounded-full blur-2xl -ml-10 -mb-10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
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
    </div>
  );
}
