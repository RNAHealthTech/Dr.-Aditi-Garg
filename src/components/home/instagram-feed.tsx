'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, ArrowRight, Heart, MessageCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import {
  ScrollReveal,
  ScrollStagger,
  ScrollStaggerItem,
  ScrollParagraph,
  ScrollHeading,
} from '@/components/ui/scroll-animation';

const instagramPosts = [
  {
    id: 1,
    image: '/images/dr-aditi-saree.jpg',
    caption: 'Associate Consultant ENT at Sir Ganga Ram Hospital & Shivasha ENT Clinic. Dedicated to compassionate healing.',
    tag: 'Consultant ENT',
    likes: '542',
    comments: '46',
  },
  {
    id: 2,
    image: '/images/dr-aditi-surgery-procedure.jpg',
    caption: 'Intraoperative focus during delicate microscopic ear and endoscopic sinus surgery (FESS). Patient safety is always top priority.',
    tag: 'In the OT',
    likes: '684',
    comments: '58',
  },
  {
    id: 3,
    image: '/images/dr-aditi-surgery-team.jpg',
    caption: 'Collaborative surgical & anaesthesia team in OT ensuring high-precision outcomes for complex ENT and head-neck procedures.',
    tag: 'OT Teamwork',
    likes: '512',
    comments: '39',
  },
  {
    id: 4,
    image: '/images/dr-aditi-garg-portrait.jpg',
    caption: 'Clinical OPD consultations at Sir Ganga Ram Hospital & Shivasha ENT Clinic. Individualized, patient-first care.',
    tag: 'Clinical OPD',
    likes: '482',
    comments: '38',
  },
  {
    id: 5,
    image: '/images/shivasha-clinic-front.jpg',
    caption: 'Shivasha ENT Clinic, Mayur Vihar Phase 1. Evening clinics 6:30 PM – 8:30 PM. Walk-ins and appointments open.',
    tag: 'Clinic Entrance',
    likes: '412',
    comments: '29',
  },
  {
    id: 6,
    image: '/images/clinic-room.jpg',
    caption: 'Inside our dedicated examination and treatment room designed for patient comfort, hygiene, and thorough evaluation.',
    tag: 'Clinic Facility',
    likes: '378',
    comments: '21',
  },
];

const InstagramFeed = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#fafcfa] border-t border-[#e4e8e5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <ScrollReveal direction="down">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">07</span>
                <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">From the Clinic</span>
              </div>
            </ScrollReveal>

            <ScrollHeading
              as="h2"
              direction="up"
              className="text-3xl sm:text-[36px] font-bold text-[#0d3033] font-serif tracking-tight leading-tight"
            >
              Health Insights &amp; Clinic Stories
            </ScrollHeading>

            <ScrollParagraph
              mode="sentences"
              delay={0.1}
              className="mt-3 text-[14px] text-slate-500 leading-relaxed max-w-xl"
            >
              Real moments from everyday ENT consultations, surgical case insights, and health advice from Dr. Aditi Garg&apos;s practice.
            </ScrollParagraph>
          </div>

          {/* Profile Badge Link */}
          <ScrollReveal direction="left" delay={0.15}>
            <a
              href="https://www.instagram.com/shivasha_ent_clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3.5 bg-white border border-slate-200/90 hover:border-pink-300 p-2 pr-5 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-[#dc2743]" />
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[14px] font-extrabold text-slate-900 group-hover:text-[#dc2743] transition-colors">
                    @shivasha_ent_clinic
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 fill-teal-50" />
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Follow Dr. Aditi on Instagram</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#dc2743] group-hover:translate-x-1 transition-all ml-1" />
            </a>
          </ScrollReveal>
        </div>

        {/* Instagram Profile Card */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              {/* Instagram Story Ring Avatar */}
              <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0e4e50] text-white flex items-center justify-center font-serif font-bold text-xl border-2 border-white">
                  AG
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Dr. Aditi Garg</h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200/50">
                    <CheckCircle2 className="w-3 h-3" /> Verified ENT
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#dc2743]">@shivasha_ent_clinic</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  ENT Specialist • Sir Ganga Ram Hospital &amp; Shivasha ENT Clinic, New Delhi
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/shivasha_ent_clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-xs sm:text-sm font-bold shadow-md shadow-rose-500/20 hover:shadow-lg hover:shadow-rose-500/35 hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </ScrollReveal>

        {/* Grid of Instagram Posts */}
        <ScrollStagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-4">
          {instagramPosts.map((post) => (
            <ScrollStaggerItem key={post.id} direction="up" distance={20}>
              <a
                href="https://www.instagram.com/shivasha_ent_clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image Container with 4:5 Portrait Instagram ratio */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Top Instagram Pill */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20">
                      {post.tag}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[#dc2743] transition-colors">
                      <Instagram className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-20">
                    {/* Likes & Comments Counter */}
                    <div className="flex items-center gap-4 text-white text-xs font-bold mb-2">
                      <span className="flex items-center gap-1.5">
                        <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MessageCircle className="w-4 h-4 text-white fill-white/20" />
                        {post.comments}
                      </span>
                    </div>

                    <p className="text-white text-[12.5px] leading-snug font-medium line-clamp-3">
                      {post.caption}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 tracking-wide uppercase">
                      View on Instagram <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Bottom subtle card label (visible always) */}
                <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 truncate max-w-[170px]">
                    {post.caption}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#dc2743] transition-colors shrink-0" />
                </div>
              </a>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>

        {/* Footer callout */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/shivasha_ent_clinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#dc2743] transition-colors group"
          >
            <span>Want more patient recovery stories and ENT health tips?</span>
            <span className="font-extrabold text-[#dc2743] group-hover:underline">Explore all posts on @shivasha_ent_clinic</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default InstagramFeed;
