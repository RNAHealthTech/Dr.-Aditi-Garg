'use client';

import React from 'react';
import { Users, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { EarLogoIcon } from '../header';

interface CtaBannerProps {
  onBookClick?: () => void;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ onBookClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#0a3a3c] text-white py-16 sm:py-20">
      
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Watermark Ear Outline Art on Right */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-10 text-teal-300 pointer-events-none hidden lg:block">
        <EarLogoIcon className="w-[380px] h-[380px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-300 uppercase">
              <span className="w-6 h-[2px] bg-teal-300"></span>
              <span>Take The Next Step</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">
              Book Your Consultation Today
            </h2>

            <p className="text-sm sm:text-base text-teal-100/80 max-w-xl">
              Get expert ENT evaluation and personalized treatment for a healthier tomorrow.
            </p>

            <div className="pt-3">
              <button
                onClick={() => {
                  if (onBookClick) {
                    onBookClick();
                  } else {
                    const appointmentSection = document.getElementById('appointment-form');
                    appointmentSection?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 bg-white hover:bg-teal-50 text-[#0e4e50] px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
              >
                <span>Request an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Badges */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-3 pt-6 lg:pt-0 border-t lg:border-t-0 border-teal-800/60">
            {/* Badge 1 */}
            <div className="flex flex-col items-center text-center space-y-2.5">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-teal-400/20 flex items-center justify-center text-teal-200">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-teal-100 leading-tight">
                Compassionate
                <br />
                Care
              </span>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center text-center space-y-2.5">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-teal-400/20 flex items-center justify-center text-teal-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-teal-100 leading-tight">
                Advanced
                <br />
                Treatment Options
              </span>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center text-center space-y-2.5">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-teal-400/20 flex items-center justify-center text-teal-200">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-teal-100 leading-tight">
                Better
                <br />
                Quality of Life
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
