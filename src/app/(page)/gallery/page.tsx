import React from 'react';
import InstagramFeed from '@/components/home/instagram-feed';
import AutoImageSlider from '@/components/home/auto-image-slider';
import WhyChooseUs from '@/components/home/why-choose-us';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Dr. Aditi Garg',
  description: 'Glimpses of patient care, clinics, and professional moments of Dr. Aditi Garg.',
};

import Image from 'next/image';

const galleryItems = [
  {
    title: 'Dr. Aditi Garg — Clinical Consultation',
    category: 'Doctor & Consultation',
    description: 'Associate Consultant ENT at Sir Ganga Ram Hospital & Director of Shivasha ENT Clinic.',
    image: '/images/dr-aditi-garg-portrait.jpg',
  },
  {
    title: 'Detailed Otoscopic Ear Examination',
    category: 'Clinical OPD Care',
    description: 'Direct magnification & illumination checkup to examine eardrum integrity and auditory canal health.',
    image: '/images/dr-aditi-patient-examination.png',
  },
  {
    title: 'High-Definition Video Endoscopy on Screen',
    category: 'Diagnostic Technology',
    description: 'Live high-resolution endoscopic visualization of tympanic membrane and nasal passages for patient transparency.',
    image: '/images/dr-aditi-video-otoscopy.jpg',
  },
  {
    title: 'Personalized Doctor-Patient Consultation',
    category: 'Patient Counseling',
    description: 'Detailed discussion of symptoms and personalized evidence-based treatment plans for senior citizens and families.',
    image: '/images/dr-aditi-patient-consultation.png',
  },
  {
    title: 'Microscopic & Endoscopic Surgery in OT',
    category: 'In the Operating Theatre',
    description: 'Dr. Aditi Garg performing delicate microscopic ear surgery and endoscopic sinus procedures.',
    image: '/images/dr-aditi-surgery-procedure.jpg',
  },
  {
    title: 'Collaborative Surgical & Anaesthesia Team',
    category: 'Surgical Care',
    description: 'Multidisciplinary team in modern OT adhering to international patient safety protocols.',
    image: '/images/dr-aditi-surgery-team.jpg',
  },
  {
    title: 'Dr. Aditi Garg — Consultant ENT Surgeon',
    category: 'Doctor & Leadership',
    description: 'Senior ENT specialist committed to patient-first care, surgical excellence, and clinical research.',
    image: '/images/dr-aditi-saree.jpg',
  },
  {
    title: 'Shivasha ENT Clinic — Mayur Vihar',
    category: 'Clinic Facility',
    description: 'Conveniently located at Pocket 4, Opp. Arya Samaj Mandir, Mayur Vihar Phase 1, New Delhi.',
    image: '/images/shivasha-clinic-front.jpg',
  },
  {
    title: 'Advanced OT Surgical Setup',
    category: 'Surgical Infrastructure',
    description: 'Fully equipped sterile operating theatre designed for complex head, neck, and ENT surgeries.',
    image: '/images/dr-aditi-surgeon.jpg',
  },
  {
    title: 'OPD Examination & Treatment Room',
    category: 'Clinic Facility',
    description: 'Hygienic, comfortable consultation and examination room equipped for comprehensive ENT checkups.',
    image: '/images/clinic-room.jpg',
  },
  {
    title: 'High-Definition Video Endoscopy & ESU',
    category: 'Advanced Equipment',
    description: 'Modern diagnostic endoscopy and electrosurgical unit for accurate, minimally invasive treatment.',
    image: '/images/endoscopy-equipment.jpg',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-16">
      {/* Realistic Header Banner */}
      <div className="relative bg-[#0e4e50] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <Image
            src="/images/clinic-room.jpg"
            alt="Gallery Setup"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e4e50] via-[#0e4e50]/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-100 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Life at Clinic &amp; OT
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            A visual glimpse into our dedicated patient care, modern clinics, and advanced surgical facilities.
          </p>
        </div>
      </div>

      {/* Main Photographic Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-1.5 flex flex-col ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className={`relative w-full overflow-hidden bg-slate-100 ${
                idx === 0 ? 'h-80 sm:h-[400px]' : 'h-64 sm:h-72'
              }`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide border border-white/20">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-[#0e4e50] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Feed & Social Moments */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-100">
          <InstagramFeed />
        </div>
      </div>

      <AutoImageSlider />
      <WhyChooseUs />
    </div>
  );
}
