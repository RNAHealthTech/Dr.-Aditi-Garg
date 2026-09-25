'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    likes: 124,
    comments: 12,
    caption: 'Advancements in Endoscopic Sinus Surgery at SGRH.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    likes: 89,
    comments: 5,
    caption: 'Successful pediatric ENT camp at Shivasha Clinic today!',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
    likes: 210,
    comments: 18,
    caption: 'Discussing hearing preservation techniques at the annual conference.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    likes: 156,
    comments: 9,
    caption: 'State-of-the-art audiology setups ensuring the best patient care.',
  },
];

const InstagramFeed = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f4faf9] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl -ml-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0e4e50]/5 rounded-full blur-2xl -mr-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0e4e50] uppercase mb-3">
              <Instagram className="w-4 h-4" />
              <span>@shivasha_ent_clinic</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#113a3d] font-serif tracking-tight">
              Glimpses of Our Care
            </h2>
            <p className="text-sm text-slate-500 mt-3 max-w-2xl">
              Follow us on Instagram for health tips, clinic updates, and behind-the-scenes moments from our practice.
            </p>
          </div>
          <a
            href="https://www.instagram.com/shivasha_ent_clinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Us</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {instagramPosts.map((post) => (
            <div 
              key={post.id} 
              className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                
                {/* Engagement stats */}
                <div className="flex items-center gap-4 text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <div className="flex items-center gap-1.5 font-semibold text-sm">
                    <Heart className="w-5 h-5 fill-current text-pink-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-sm">
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                
                {/* Caption snippet */}
                <p className="text-slate-200 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
