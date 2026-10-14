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
import { ShivashaEmblem } from '@/components/ui/shivasha-logo';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#fafbfb] pt-12 pb-14 lg:pt-20 lg:pb-20 overflow-hidden">
      {/* Soft, minimal ambient backdrop */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-500/[0.04] rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Spacious, Elegant Doctor Profile */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status Pill */}
            <ScrollReveal direction="down" delay={0.05}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-teal-200/70 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#0e4e50]">
                  ENT Specialist &amp; Head-Neck Surgeon
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-[12px] font-medium text-slate-500 hidden sm:inline">
                  Sir Ganga Ram Hospital &amp; Shivasha Clinic
                </span>
              </div>
            </ScrollReveal>

            {/* Name & Credentials */}
            <div className="space-y-3">
              <ScrollHeading
                as="h1"
                direction="up"
                className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-slate-900 leading-[1.08] tracking-tight font-serif"
              >
                Dr. Aditi Garg
              </ScrollHeading>

              <ScrollReveal direction="up" delay={0.08}>
                <p className="text-base sm:text-lg text-[#0e4e50] font-semibold flex flex-wrap items-center gap-2">
                  <span>MBBS, DNB (ENT)</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-700">Associate Consultant, Dept. of ENT</span>
                </p>
              </ScrollReveal>

              {/* Bio summary */}
              <ScrollParagraph
                mode="sentences"
                delay={0.1}
                className="text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-xl pt-2 font-normal"
              >
                Comprehensive, patient-centred care for ear, nose, throat, sinus, voice, and hearing disorders — combining advanced surgical precision with compassionate clinical consultation.
              </ScrollParagraph>
            </div>

            {/* Clean OPD Consultation Strip (Spacious, Minimalist, No Cramped Boxes) */}
            <ScrollReveal direction="up" delay={0.12}>
              <div className="bg-white/80 border border-slate-200/80 rounded-2xl p-5 shadow-xs max-w-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                  
                  {/* Location 1 */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#0e4e50] font-bold text-xs uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Sir Ganga Ram Hospital</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Old Rajinder Nagar, New Delhi</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-700 pt-1">
                      <Clock className="w-3 h-3 text-[#0e4e50]" />
                      <span>Mon–Sat | Morning &amp; Afternoon OPD</span>
                    </div>
                  </div>

                  {/* Location 2 */}
                  <div className="pt-3 sm:pt-0 sm:pl-6 space-y-1">
                    <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider">
                      <ShivashaEmblem className="w-5 h-3 shrink-0" />
                      <span>Shivasha ENT Clinic</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Mayur Vihar Phase 1, New Delhi</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-700 pt-1">
                      <Clock className="w-3 h-3 text-amber-600" />
                      <span>Mon–Sat | 6:30 PM – 8:30 PM (Evening)</span>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-[#0e4e50] hover:bg-[#093537] text-white px-8 py-4 text-sm font-bold tracking-wide rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="tel:+919289300329"
                  className="inline-flex items-center gap-2.5 text-slate-800 bg-white border border-slate-200 hover:border-[#0e4e50] hover:text-[#0e4e50] px-7 py-4 text-sm font-bold rounded-full shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-[#0e4e50]" />
                  <span>+91-9289300329</span>
                </a>

                <Link
                  href="/timings"
                  className="text-sm font-semibold text-slate-500 hover:text-[#0e4e50] transition-colors underline underline-offset-4 decoration-slate-300 ml-2"
                >
                  View Full OPD Timings
                </Link>
              </div>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollStagger staggerDelay={0.06} className="pt-2 flex flex-wrap items-center gap-6 text-[13px] text-slate-500 font-medium">
              <ScrollStaggerItem direction="up">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>11+ Years Experience</span>
                </div>
              </ScrollStaggerItem>
              <ScrollStaggerItem direction="up">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Advanced Endoscopic Surgery</span>
                </div>
              </ScrollStaggerItem>
              <ScrollStaggerItem direction="up">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Adult &amp; Pediatric Care</span>
                </div>
              </ScrollStaggerItem>
            </ScrollStagger>

          </div>

          {/* Right Column: Clean Doctor Portrait (No Clutter, Clean Margins) */}
          <div className="lg:col-span-5 flex justify-center items-center py-4">
            <ScrollReveal direction="left" delay={0.1} distance={25} className="w-full max-w-[420px]">
              <div className="relative">
                
                {/* Soft backdrop frame */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500/10 to-emerald-500/5 rounded-[36px] blur-lg pointer-events-none -z-10" />

                {/* Portrait Card */}
                <div className="rounded-[30px] overflow-hidden bg-white p-2.5 shadow-xl shadow-slate-200/70 border border-slate-100">
                  <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-100">
                    <Image
                      src="/images/dr-aditi-garg-portrait.jpg"
                      alt="Dr. Aditi Garg - ENT Specialist & Head-Neck Surgeon"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                      priority
                    />
                  </div>
                </div>

                {/* Single, Tasteful Floating Badge */}
                <div className="absolute -bottom-4 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#0e4e50] flex items-center justify-center font-bold text-xs shrink-0">
                      ENT
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">Dr. Aditi Garg</div>
                      <div className="text-[11px] text-[#0e4e50] font-medium">Associate Consultant</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200/60">
                    Sir Ganga Ram Hospital
                  </span>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Credibility Strip */}
      <div className="border-t border-slate-200/70 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ScrollStagger staggerDelay={0.06} className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 text-xs text-slate-500">
            <ScrollStaggerItem direction="up">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0e4e50]"></span>
                <span>MBBS — Coimbatore Govt. Medical College</span>
              </div>
            </ScrollStaggerItem>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <ScrollStaggerItem direction="up">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0e4e50]"></span>
                <span>DNB – ENT, Cooper Hospital &amp; HBT Medical College, Mumbai</span>
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
                <span>Director — Shivasha ENT Clinic, Mayur Vihar</span>
              </div>
            </ScrollStaggerItem>
          </ScrollStagger>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
