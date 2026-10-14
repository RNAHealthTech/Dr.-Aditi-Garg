'use client';

import React from 'react';
import Image from 'next/image';
import {
  ScrollReveal,
  ScrollParagraph,
  ScrollHeading,
} from '@/components/ui/scroll-animation';

const images = [
  {
    src: '/images/dr-aditi-patient-examination.png',
    title: 'Dr. Aditi Garg | Detailed Otoscopic Ear Examination',
  },
  {
    src: '/images/dr-aditi-video-otoscopy.jpg',
    title: 'Real-Time HD Video Endoscopy & Eardrum Visualization',
  },
  {
    src: '/images/dr-aditi-patient-consultation.png',
    title: 'Compassionate OPD Consultation & Care Guidance',
  },
  {
    src: '/images/dr-aditi-surgery-procedure.jpg',
    title: 'Microscopic & Endoscopic Surgery in OT',
  },
  {
    src: '/images/dr-aditi-garg-portrait.jpg',
    title: 'Dr. Aditi Garg | ENT Specialist & Head-Neck Surgeon',
  },
  {
    src: '/images/dr-aditi-surgery-team.jpg',
    title: 'Advanced Operating Theatre & Surgical Teamwork',
  },
  {
    src: '/images/shivasha-clinic-front.jpg',
    title: 'Shivasha ENT Clinic | Mayur Vihar Phase 1',
  },
  {
    src: '/images/dr-aditi-saree.jpg',
    title: 'Dr. Aditi Garg | Ganga Ram Hospital & Shivasha ENT',
  },
  {
    src: '/images/endoscopy-equipment.jpg',
    title: 'HD Video Endoscopy & ESU Surgical Station',
  },
  {
    src: '/images/clinic-room.jpg',
    title: 'Modern Consultation & Examination Suite',
  },
];

const AutoImageSlider = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#0a1a2c] overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <ScrollReveal direction="down">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-blue-400 uppercase mb-4">
                <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#DE4937] via-[#2787C8] to-[#F1AA37]"></span>
                Facilities &amp; Technologies
              </div>
            </ScrollReveal>

            <ScrollHeading
              as="h2"
              direction="up"
              className="text-3xl sm:text-[38px] font-bold text-white font-serif tracking-tight leading-tight max-w-2xl"
            >
              Equipped for precision. Designed for comfort.
            </ScrollHeading>
          </div>

          <ScrollParagraph
            mode="sentences"
            delay={0.1}
            className="text-[13.5px] text-slate-400 max-w-sm leading-relaxed"
          >
            Experience world-class ENT care supported by modern medical infrastructure and advanced surgical technology at our centers.
          </ScrollParagraph>
        </div>
      </div>

      <ScrollReveal direction="up" distance={30} delay={0.15}>
        <div className="relative w-full overflow-hidden pb-10">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0a1a2c] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0a1a2c] to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-fit animate-marquee-fast">
            {[...images, ...images, ...images].map((img, idx) => (
              <div key={idx} className="relative w-72 h-80 sm:w-96 sm:h-[400px] mx-3 sm:mx-4 flex-shrink-0 rounded-xl overflow-hidden group">
                <Image 
                  src={img.src} 
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="w-10 h-1 bg-gradient-to-r from-[#DE4937] via-[#2787C8] to-[#F1AA37] mb-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0"></div>
                  <h3 className="text-white font-bold text-lg sm:text-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {img.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default AutoImageSlider;
