'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

interface CtaBannerProps {
  onBookClick?: () => void;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ onBookClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#0d3638] py-20 sm:py-24 border-t border-[#0a2e30]">
      {/* Subtle clean medical ambient pattern */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-[1.5px] bg-teal-400"></span>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-teal-400">Take the Next Step</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-serif text-white tracking-tight leading-[1.08]">
            Towards better<br />
            ENT health.
          </h2>

          <p className="mt-5 text-[14.5px] text-white/60 leading-relaxed max-w-md">
            Book a consultation with Dr. Aditi Garg at Sir Ganga Ram Hospital or Shivasha ENT Clinic.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {onBookClick ? (
              <button
                onClick={onBookClick}
                id="cta-book-appointment-btn"
                className="inline-flex items-center gap-2 bg-white text-[#0d3638] hover:bg-teal-50 px-7 py-3.5 text-[13.5px] font-bold tracking-wide transition-colors duration-200 rounded-sm shadow-sm group"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ) : (
              <Link
                href="/contact"
                id="cta-book-appointment-btn"
                className="inline-flex items-center gap-2 bg-white text-[#0d3638] hover:bg-teal-50 px-7 py-3.5 text-[13.5px] font-bold tracking-wide transition-colors duration-200 rounded-sm shadow-sm group"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
            <a
              href="tel:+911142254000"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white/80 hover:text-white px-6 py-3.5 text-[13.5px] font-semibold tracking-wide transition-colors duration-200 rounded-sm"
            >
              <Phone className="w-4 h-4" />
              Contact Clinic
            </a>
          </div>

          {/* Location chips */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-[12.5px] text-white/50">
            <div>
              <span className="text-white/80 font-semibold">Sir Ganga Ram Hospital</span>
              <span className="ml-2">Mon, Wed, Fri — 8:00–10:00 AM</span>
            </div>
            <div>
              <span className="text-white/80 font-semibold">Shivasha ENT Clinic</span>
              <span className="ml-2">Mon–Sat — 6:30–8:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
