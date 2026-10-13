'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import {
  ScrollReveal,
  ScrollStagger,
  ScrollStaggerItem,
  ScrollParagraph,
  ScrollHeading,
} from '@/components/ui/scroll-animation';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-[#faf9f7] pt-10 pb-0 lg:pt-16 overflow-hidden relative">
      {/* Background ambient medical glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-teal-100/60 via-emerald-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left: Doctor Introduction & Quick Details */}
          <div className="lg:col-span-7 pb-10 lg:pb-16 space-y-7">
            {/* Eyebrow */}
            <ScrollReveal direction="down" delay={0.05}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
                </span>
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#0e4e50]">
                  ENT Specialist &amp; Head-Neck Surgeon
                </span>
              </div>
            </ScrollReveal>

            {/* Name & Tagline */}
            <div className="space-y-3">
              <ScrollHeading
                as="h1"
                direction="up"
                className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0d3033] leading-[1.06] tracking-tight font-serif"
              >
                Dr. Aditi Garg
              </ScrollHeading>

              <ScrollStagger staggerDelay={0.07} className="flex flex-wrap items-center gap-2 pt-1">
                <ScrollStaggerItem direction="up">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-slate-700 bg-white border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-2xs">
                    MBBS, DNB – ENT
                  </span>
                </ScrollStaggerItem>
                <ScrollStaggerItem direction="up">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0e4e50] bg-[#eef7f6] border border-[#cbe6e3] px-3.5 py-1.5 rounded-full shadow-2xs">
                    Associate Consultant — ENT, Sir Ganga Ram Hospital
                  </span>
                </ScrollStaggerItem>
                <ScrollStaggerItem direction="up">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-slate-700 bg-white border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-2xs">
                    Director, Shivasha ENT Clinic
                  </span>
                </ScrollStaggerItem>
              </ScrollStagger>

              {/* Animated paragraph lines */}
              <ScrollParagraph
                mode="sentences"
                delay={0.1}
                className="text-[15.5px] sm:text-[16.5px] text-slate-600 leading-relaxed max-w-xl pt-2 font-normal"
              >
                Patient-centred ENT care for ear, nose, throat, voice, and balance disorders. Delivered with clinical clarity, surgical precision, and compassionate personal attention.
              </ScrollParagraph>
            </div>

            {/* Quick Clinic Timings Card Grid */}
            <ScrollStagger staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 max-w-xl">
              <ScrollStaggerItem direction="up">
                <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-sm hover:border-[#0e4e50]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0e4e50] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#0e4e50] mb-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0e4e50]" />
                      Sir Ganga Ram Hospital
                    </span>
                  </div>
                  <div className="text-[13.5px] font-bold text-slate-800">
                    Old Rajinder Nagar, New Delhi
                  </div>
                  <div className="text-[12px] text-slate-500 mt-2 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#0e4e50] shrink-0" />
                      <span className="font-semibold text-slate-700">Mon, Wed, Fri: 8:00 AM – 3:00 PM</span>
                    </div>
                    <div className="text-[11.5px] text-slate-500 pl-4.5">
                      Tue, Thu, Sat: 9:00 AM – 3:00 PM
                    </div>
                  </div>
                </div>
              </ScrollStaggerItem>

              <ScrollStaggerItem direction="up">
                <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-sm hover:border-[#0e4e50]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#0e4e50] mb-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0e4e50]" />
                      Shivasha ENT Clinic
                    </span>
                  </div>
                  <div className="text-[13.5px] font-bold text-slate-800">
                    Mayur Vihar Phase 1, New Delhi
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-slate-600 mt-2 font-medium">
                    <Clock className="w-3 h-3 text-[#0e4e50] shrink-0" />
                    <span>Mon – Sat | 6:30 PM – 8:30 PM</span>
                  </div>
                </div>
              </ScrollStaggerItem>
            </ScrollStagger>

            {/* CTAs -> Redirect to /contact */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0e4e50] to-[#135d5f] hover:from-[#0b3e40] hover:to-[#0e4e50] text-white px-8 py-3.5 text-[14px] font-bold tracking-wide hover:-translate-y-1 active:translate-y-0 shadow-md hover:shadow-xl hover:shadow-teal-900/20 transition-all duration-300 rounded-full group"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+918076268531"
                  className="inline-flex items-center gap-2 text-slate-800 bg-white border border-slate-200/90 hover:border-[#0e4e50] hover:text-[#0e4e50] hover:-translate-y-1 active:translate-y-0 px-6 py-3.5 text-[14px] font-bold transition-all duration-200 rounded-full shadow-sm hover:shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#0e4e50]" />
                  <span>+91-8076268531</span>
                </a>
                <Link
                  href="/timings"
                  className="text-[13.5px] font-semibold text-slate-500 hover:text-[#0e4e50] transition-colors underline underline-offset-4 decoration-slate-300 ml-2"
                >
                  View Full Timings
                </Link>
              </div>
            </ScrollReveal>

            {/* Clinical Trust Highlights */}
            <ScrollStagger staggerDelay={0.08} className="pt-2 flex flex-wrap items-center gap-6 text-[13px] text-slate-600 font-medium">
              <ScrollStaggerItem direction="up">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>11+ Years Clinical Experience</span>
                </div>
              </ScrollStaggerItem>
              <ScrollStaggerItem direction="up">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Microscopic &amp; Endoscopic Surgeries</span>
                </div>
              </ScrollStaggerItem>
              <ScrollStaggerItem direction="up">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Pediatric &amp; Adult ENT</span>
                </div>
              </ScrollStaggerItem>
            </ScrollStagger>
          </div>

          {/* Right: Doctor Portrait */}
          <div className="lg:col-span-5 flex justify-center items-end relative order-first lg:order-none">
            <ScrollReveal direction="left" delay={0.1} distance={40} className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px]">
              <div className="relative w-full group">
                {/* Subtle architectural arched backdrop */}
                <div className="absolute bottom-0 left-4 right-4 h-[92%] bg-gradient-to-b from-[#dff0ee] to-[#edf7f6] -z-10 rounded-t-[140px] border border-[#cbe4e1] transition-transform duration-500 group-hover:scale-[1.01] shadow-inner"></div>

                {/* Doctor Photo */}
                <div
                  className="w-full rounded-t-[140px] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.02] relative shadow-2xl border-4 border-white bg-slate-100 ring-1 ring-slate-200/50"
                  style={{ height: '560px' }}
                >
                  <Image
                    src="/images/dr-aditi-garg-portrait.jpg"
                    alt="Dr. Aditi Garg - ENT Specialist & Head-Neck Surgeon"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d3033]/75 via-transparent to-transparent pointer-events-none"></div>

                  {/* Doctor badge at bottom */}
                  <div className="absolute bottom-6 left-6 right-6 text-center z-10">
                    <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md text-[#0e4e50] text-[12px] font-bold tracking-[0.12em] uppercase px-5 py-2 rounded-full shadow-xl border border-[#0e4e50]/20">
                      Dr. Aditi Garg &bull; MBBS, DNB ENT
                    </span>
                  </div>
                </div>

                {/* Sir Ganga Ram Hospital affiliation badge — bottom left */}
                <div className="absolute bottom-8 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 px-4 py-3 shadow-xl rounded-2xl animate-subtle-float hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[12.5px] font-bold text-slate-900 leading-none">Sir Ganga Ram Hospital</span>
                  </div>
                  <div className="text-[11px] text-[#0e4e50] font-semibold mt-1">Associate Consultant — Dept. of ENT</div>
                </div>

                {/* Shivasha ENT Clinic badge — top right */}
                <div className="absolute top-12 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 px-4 py-3 shadow-xl rounded-2xl hidden sm:block animate-subtle-float delay-300 hover:scale-105 transition-transform duration-300">
                  <div className="text-[12px] font-bold text-slate-900 leading-none">Shivasha ENT Clinic</div>
                  <div className="text-[10.5px] text-[#0e4e50] font-semibold mt-1">Director &amp; Chief Consultant</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Credibility Strip */}
      <div className="border-t border-[#e4e8e5] bg-white mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ScrollStagger staggerDelay={0.06} className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 text-[12px] text-slate-500">
            <ScrollStaggerItem direction="up">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0e4e50]"></span>
                <span>MBBS — Coimbatore Govt. Medical College, Dr. MGR University</span>
              </div>
            </ScrollStaggerItem>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <ScrollStaggerItem direction="up">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0e4e50]"></span>
                <span>DNB – ENT, Dr. R.N. Cooper Hospital &amp; HBT Medical College</span>
              </div>
            </ScrollStaggerItem>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <ScrollStaggerItem direction="up">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0e4e50]"></span>
                <span>Associate Consultant — Sir Ganga Ram Hospital, New Delhi</span>
              </div>
            </ScrollStaggerItem>
            <div className="hidden md:block w-px h-4 bg-slate-200"></div>
            <ScrollStaggerItem direction="up">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0e4e50]"></span>
                <span>Member — Association of Otorhinolaryngologists of India (AOI)</span>
              </div>
            </ScrollStaggerItem>
          </ScrollStagger>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
