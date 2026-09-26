'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, ArrowRight } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    caption: 'Advancements in Endoscopic Sinus Surgery at SGRH.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    caption: 'Successful paediatric ENT camp at Shivasha Clinic.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
    caption: 'Discussing hearing preservation techniques at the annual conference.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    caption: 'State-of-the-art audiology setups for precise patient care.',
  },
];

const InstagramFeed = () => {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-[#e4e8e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">07</span>
              <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">From the Clinic</span>
            </div>
            <h2 className="text-3xl sm:text-[34px] font-bold text-[#0d3033] font-serif tracking-tight leading-tight">
              Health Insights &amp; Clinic Updates
            </h2>
            <p className="mt-3 text-[13.5px] text-slate-500 leading-relaxed max-w-lg">
              Moments from everyday ENT care, surgical updates, and health information from Dr. Aditi Garg's practice.
            </p>
          </div>
          <a
            href="https://www.instagram.com/shivasha_ent_clinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-700 border border-slate-300 hover:border-[#0e4e50] hover:text-[#0e4e50] px-4 py-2.5 rounded-sm transition-colors shrink-0"
          >
            <Instagram className="w-4 h-4" />
            @shivasha_ent_clinic
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Grid — asymmetric editorial layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {instagramPosts.map((post, idx) => (
            <a
              key={post.id}
              href="https://www.instagram.com/shivasha_ent_clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden bg-[#f0f5f4] rounded-sm ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
              style={{ aspectRatio: idx === 0 ? '1/1' : '1/1' }}
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0d3638]/0 group-hover:bg-[#0d3638]/50 transition-colors duration-300 flex items-end p-4">
                <p className="text-white text-[12px] leading-snug font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramFeed;
