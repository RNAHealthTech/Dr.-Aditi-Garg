'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Eye,
  CheckCircle2,
  Stethoscope,
  Tv,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Calendar,
} from 'lucide-react';
import {
  ScrollReveal,
  ScrollStagger,
  ScrollStaggerItem,
  ScrollParagraph,
  ScrollHeading,
} from '@/components/ui/scroll-animation';
import { motion, AnimatePresence } from 'framer-motion';

const showcaseItems = [
  {
    id: 'consultation',
    tag: 'One-on-One Consultation',
    tagIcon: HeartHandshake,
    title: 'Compassionate Patient Counseling',
    subtitle: 'Listening first. Explaining with clarity.',
    description:
      'Every appointment begins with active listening. Dr. Aditi Garg takes time to understand your complete symptom history, answering all queries with patience and reassurance.',
    image: '/images/dr-aditi-patient-consultation.png',
    alt: 'Dr. Aditi Garg consulting with a patient at Shivasha ENT Clinic desk',
    features: [
      'Comprehensive history taking & review',
      'Clear, jargon-free medical explanations',
      'Personalized non-surgical & surgical guidance',
    ],
    highlightBadge: 'Patient-First Focus',
  },
  {
    id: 'examination',
    tag: 'Detailed ENT Examination',
    tagIcon: Stethoscope,
    title: 'Gentle Physical & Otoscopic Evaluation',
    subtitle: 'Gentle, thorough, and comfortable checkups.',
    description:
      'Using specialized medical illumination and diagnostic otoscopes, Dr. Aditi conducts meticulous physical examinations for ear, nasal, and throat disorders with utmost care.',
    image: '/images/dr-aditi-patient-examination.png',
    alt: 'Dr. Aditi Garg conducting an otoscope ear examination on an elderly patient',
    features: [
      'Gentle & minimally invasive technique',
      'Thorough ear canal & eardrum inspection',
      'Special care for senior citizens & children',
    ],
    highlightBadge: 'Gentle Technique',
  },
  {
    id: 'endoscopy',
    tag: 'Advanced HD Video Endoscopy',
    tagIcon: Tv,
    title: 'Real-Time High-Definition Diagnostics',
    subtitle: 'See what your doctor sees on the screen.',
    description:
      'State-of-the-art video endoscopy and video otoscopy capture high-resolution imagery of the tympanic membrane (eardrum), nasal passages, and larynx for pinpoint accuracy.',
    image: '/images/dr-aditi-video-otoscopy.jpg',
    alt: 'Live high definition video otoscopy monitor showing patient eardrum examination',
    features: [
      'Real-time visualization on clinical monitor',
      'Accurate detection of perforations & lesions',
      'Visual records for tracking healing progress',
    ],
    highlightBadge: 'High-Definition Screen',
  },
];

const PatientCareShowcase: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-[#f8faf9] border-t border-[#e2e8e5] overflow-hidden relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <ScrollReveal direction="down">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">03.5</span>
                <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">
                  Clinical Care in Action
                </span>
              </div>
            </ScrollReveal>

            <ScrollHeading
              as="h2"
              direction="up"
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0d3033] font-serif tracking-tight leading-[1.12]"
            >
              Real Care.<br />
              <span className="text-[#0e4e50] italic">Clear Visual Diagnostics.</span>
            </ScrollHeading>

            <ScrollParagraph
              mode="sentences"
              delay={0.1}
              className="mt-4 text-[14.5px] sm:text-[15px] text-slate-600 leading-relaxed max-w-xl font-normal"
            >
              Authentic glimpses from everyday clinical practice with Dr. Aditi Garg — from patient counseling and gentle physical examinations to real-time HD video endoscopy.
            </ScrollParagraph>
          </div>

          <ScrollReveal direction="left" delay={0.15}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200/70 px-3.5 py-1.5 rounded-full shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                Live Clinical OPD
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200/70 px-3.5 py-1.5 rounded-full shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                HD Video Diagnostics
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* 3-Card Interactive Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {showcaseItems.map((item, idx) => {
            const Icon = item.tagIcon;
            return (
              <ScrollReveal key={item.id} direction="up" distance={25} delay={0.08 * idx}>
                <div
                  onMouseEnter={() => setActiveItem(idx)}
                  className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col h-full group ${
                    activeItem === idx
                      ? 'border-teal-400 shadow-[0_20px_50px_rgba(14,78,80,0.12)] -translate-y-2'
                      : 'border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                        <Icon className="w-3 h-3 text-teal-300" />
                        {item.tag}
                      </span>
                      <span className="text-[10px] font-bold text-white/90 bg-[#0e4e50]/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-teal-300/30">
                        {item.highlightBadge}
                      </span>
                    </div>

                    {/* Bottom image caption overlay */}
                    <div className="absolute bottom-3 left-4 right-4 z-10">
                      <p className="text-white text-xs font-semibold drop-shadow-md">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 group-hover:text-[#0e4e50] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-[13.5px] mt-2.5 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-[12.5px] text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action link */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0e4e50] group-hover:text-teal-700 transition-colors group/btn"
                      >
                        <span>Schedule a Visit</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <span className="text-[11px] text-slate-400 font-medium">
                        0{idx + 1} / 03
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Clinical Reassurance Bar */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-[#d8e8e5] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200/60 flex items-center justify-center text-[#0e4e50] shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[13.5px] font-bold text-slate-900">
                  Visual Transparency in ENT Diagnostics
                </h4>
                <p className="text-[12px] text-slate-500">
                  Patients view their endoscopic and otoscopic examinations live on screen, enabling informed decisions.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0e4e50] hover:bg-[#0b3e40] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-sm hover:shadow-md transition-all shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default PatientCareShowcase;
