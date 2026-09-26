'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  Phone,
  ArrowRight,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-[#faf9f7] pt-10 pb-0 lg:pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left: Doctor Introduction & Quick Details */}
          <div className="lg:col-span-7 pb-10 lg:pb-16 space-y-7 animate-fade-up">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#0e4e50]">
                ENT Specialist &amp; Head-Neck Surgeon
              </span>
            </div>

            {/* Name & Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0d3033] leading-[1.08] tracking-tight font-serif">
                Dr. Aditi Garg
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-sm">
                  MBBS, DNB – ENT
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0e4e50] bg-[#eef7f6] border border-[#d2ebe9] px-3 py-1.5 rounded-sm">
                  Associate Consultant, Sir Ganga Ram Hospital
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-sm">
                  Director, Shivasha ENT Clinic
                </span>
              </div>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-xl pt-2 font-normal">
                Patient-centred ENT care for ear, nose, throat, voice, and balance disorders — delivered with clinical clarity, surgical precision, and compassionate personal attention.
              </p>
            </div>

            {/* Quick Clinic Timings Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 max-w-xl">
              <div className="bg-white border border-slate-200/90 p-4 rounded-sm shadow-xs hover:border-[#0e4e50]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#0e4e50] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0e4e50]" />
                    Sir Ganga Ram Hospital
                  </span>
                </div>
                <div className="text-[13px] font-semibold text-slate-800">
                  Old Rajinder Nagar, New Delhi
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-slate-500 mt-1">
                  <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Mon, Wed, Fri | 8:00 AM – 10:00 AM</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 p-4 rounded-sm shadow-xs hover:border-[#0e4e50]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#0e4e50] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0e4e50]" />
                    Shivasha ENT Clinic
                  </span>
                </div>
                <div className="text-[13px] font-semibold text-slate-800">
                  Mayur Vihar Phase 1, New Delhi
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-slate-500 mt-1">
                  <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Mon – Sat | 6:30 PM – 8:30 PM</span>
                </div>
              </div>
            </div>

            {/* CTAs -> Redirect to /contact */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0e4e50] hover:bg-[#0b3e40] text-white px-7 py-3.5 text-[14px] font-semibold tracking-wide hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md transition-all duration-200 rounded-sm group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+911142254000"
                className="inline-flex items-center gap-2 text-slate-700 bg-white border border-slate-200 hover:border-[#0e4e50] hover:text-[#0e4e50] hover:-translate-y-0.5 active:translate-y-0 px-5 py-3.5 text-[14px] font-semibold transition-all duration-200 rounded-sm"
              >
                <Phone className="w-4 h-4 text-[#0e4e50]" />
                <span>+91 11-4225 4000</span>
              </a>
              <Link
                href="/timings"
                className="text-[13.5px] font-medium text-slate-500 hover:text-[#0e4e50] transition-colors underline underline-offset-4 decoration-slate-300 ml-1"
              >
                View Full Timings
              </Link>
            </div>

            {/* Clinical Trust Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-[12.5px] text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0e4e50]" />
                <span>10+ Years Clinical Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0e4e50]" />
                <span>Microscopic &amp; Endoscopic Surgeries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0e4e50]" />
                <span>Pediatric &amp; Adult ENT</span>
              </div>
            </div>
          </div>

          {/* Right: Doctor Portrait */}
          <div className="lg:col-span-5 flex justify-center items-end relative order-first lg:order-none">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] group">
              {/* Subtle architectural arched backdrop */}
              <div className="absolute bottom-0 left-4 right-4 h-[92%] bg-[#e6f0ef] -z-10 rounded-t-[140px] border border-[#d2ebe9] transition-transform duration-500 group-hover:scale-[1.01]"></div>

              {/* Doctor Photo Placeholder */}
              <div
                className="w-full rounded-t-[140px] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.02] flex flex-col items-center justify-center bg-gradient-to-b from-[#e6f0ef] to-[#cde4e1] border-2 border-dashed border-[#a8cbc8]"
                style={{ height: '560px' }}
              >
                {/* Person silhouette */}
                <svg viewBox="0 0 120 120" className="w-28 h-28 mb-5 opacity-40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="42" r="22" fill="#0e4e50" />
                  <path d="M20 110c0-22.09 17.91-40 40-40s40 17.91 40 40" fill="#0e4e50" />
                </svg>
                {/* Label */}
                <div className="flex flex-col items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#0e4e50]/10 text-[#0e4e50] text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border border-[#0e4e50]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0e4e50] animate-pulse inline-block" />
                    Photo Coming Soon
                  </span>
                  <p className="text-[11px] text-[#0e4e50]/60 font-medium mt-1">Dr. Aditi Garg</p>
                </div>
              </div>

              {/* Sir Ganga Ram Hospital affiliation badge — bottom left */}
              <div className="absolute bottom-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-sm border border-slate-200 px-4 py-3 shadow-md rounded-sm animate-subtle-float hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#0e4e50] animate-pulse-soft"></span>
                  <span className="text-[12px] font-bold text-slate-800 leading-none">Sir Ganga Ram Hospital</span>
                </div>
                <div className="text-[11px] text-[#0e4e50] font-medium">Associate Consultant — ENT</div>
              </div>

              {/* Shivasha ENT Clinic badge — bottom right */}
              <div className="absolute top-12 -right-3 sm:-right-4 bg-white/95 backdrop-blur-sm border border-slate-200 px-3.5 py-2.5 shadow-md rounded-sm hidden sm:block animate-subtle-float delay-300 hover:scale-105 transition-transform duration-300">
                <div className="text-[11px] font-bold text-slate-800 leading-none">Shivasha ENT Clinic</div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5">Director &amp; Consultant</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Credibility Strip */}
      <div className="border-t border-[#e4e8e5] bg-white mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 text-[12px] text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0e4e50]"></span>
              <span>MBBS — Coimbatore Govt. Medical College, Dr. MGR University</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0e4e50]"></span>
              <span>DNB – ENT, Dr. R.N. Cooper Hospital &amp; HBT Medical College</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0e4e50]"></span>
              <span>Associate Consultant — Sir Ganga Ram Hospital, New Delhi</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0e4e50]"></span>
              <span>Member — Association of Otorhinolaryngologists of India (AOI)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
