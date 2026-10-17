'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Calendar } from 'lucide-react';
import {
  ScrollReveal,
  ScrollStagger,
  ScrollStaggerItem,
  ScrollParagraph,
  ScrollHeading,
} from '@/components/ui/scroll-animation';
import { LogoColorDots } from '@/components/ui/shivasha-logo';

interface CtaBannerProps {
  onBookClick?: () => void;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ onBookClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1d30] via-[#0f2942] to-[#1b6ea8] py-24 sm:py-28 border-t border-[#091b2c]">
      {/* Subtle clean medical ambient pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-xs">
              <LogoColorDots size="w-2 h-2" />
              Take the Next Step
            </div>
          </ScrollReveal>

          <ScrollHeading
            as="h2"
            direction="up"
            className="text-3xl sm:text-4xl lg:text-[50px] font-bold font-serif text-white tracking-tight leading-[1.06]"
          >
            Towards better<br />
            <span className="text-teal-300 italic">ENT health.</span>
          </ScrollHeading>

          <ScrollParagraph
            mode="sentences"
            delay={0.1}
            className="mt-5 text-[15px] sm:text-[16px] text-teal-50/80 leading-relaxed max-w-md font-light"
          >
            Book a personalized consultation with Dr.&nbsp;Aditi Garg at Sir Ganga Ram Hospital or Shivasha ENT Clinic.
          </ScrollParagraph>

          <ScrollReveal direction="up" delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              {onBookClick ? (
                <button
                  onClick={onBookClick}
                  id="cta-book-appointment-btn"
                  className="inline-flex items-center gap-2.5 bg-white text-[#0f2942] hover:bg-teal-50 px-8 py-4 text-[14px] font-bold tracking-wide transition-all duration-300 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 group cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#1b6ea8]" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  id="cta-book-appointment-btn"
                  className="inline-flex items-center gap-2.5 bg-white text-[#0f2942] hover:bg-teal-50 px-8 py-4 text-[14px] font-bold tracking-wide transition-all duration-300 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 group"
                >
                  <Calendar className="w-4 h-4 text-[#1b6ea8]" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              <a
                href="tel:+919289300329"
                className="inline-flex items-center gap-2.5 border border-white/30 hover:border-white text-white hover:bg-white/10 px-7 py-4 text-[14px] font-bold tracking-wide transition-all duration-300 rounded-full backdrop-blur-xs"
              >
                <Phone className="w-4 h-4 text-blue-300" />
                <span>+91-9289300329</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Location chips */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap gap-6 text-[13px] text-blue-100/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2787C8]"></span>
                <span className="text-white font-semibold">Sir Ganga Ram Hospital:</span>
                <span>Mon–Sat (Morning &amp; Afternoon OPD)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F1AA37]"></span>
                <span className="text-white font-semibold">Shivasha ENT Clinic:</span>
                <span>Mon–Sat (6:30 PM – 8:30 PM)</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
