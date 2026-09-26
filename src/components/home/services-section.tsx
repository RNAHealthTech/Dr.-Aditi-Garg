'use client';

import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';

export const EarServiceIcon = ({ className = "w-7 h-7 text-[#0e4e50]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 4.5-3 6.5-4 8.5-.5 1-1 2.5-2.5 3-1 .3-2-.3-2.5-1.2C9.2 17.5 9 15.5 9 14a3 3 0 1 1 6 0" />
    <path d="M10 10a2 2 0 1 1 4 0c0 1-.5 1.8-1.5 2.2" />
  </svg>
);

export const NoseServiceIcon = ({ className = "w-7 h-7 text-[#0e4e50]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 18a4 4 0 0 0 8 0c0-2-2-4-2-7a2 2 0 1 0-4 0c0 3-2 5-2 7z" />
    <path d="M9 16c.8.6 1.8 1 3 1s2.2-.4 3-1" />
  </svg>
);

export const ThroatServiceIcon = ({ className = "w-7 h-7 text-[#0e4e50]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M17 11l2 2 4-4" />
  </svg>
);

export const HeadNeckServiceIcon = ({ className = "w-7 h-7 text-[#0e4e50]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="7" r="4" />
    <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
    <path d="M12 11v4" />
  </svg>
);

export const HearingBalanceServiceIcon = ({ className = "w-7 h-7 text-[#0e4e50]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 11a9 9 0 0 1 9-9 9 9 0 0 1 9 9" />
    <path d="M6 13a6 6 0 0 1 6-6 6 6 0 0 1 6 6" />
    <path d="M9 15a3 3 0 0 1 3-3 3 3 0 0 1 3 3" />
    <path d="M12 17v4" />
  </svg>
);

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
}

const servicesData: ServiceDetail[] = [
  {
    id: 'ear-care',
    title: 'Ear Care & Surgery',
    description: 'Treatment for ear infections, hearing problems and advanced ear surgeries.',
    icon: <EarServiceIcon className="w-7 h-7 text-[#0e4e50]" />,
    highlights: [
      'Tympanoplasty & Eardrum Repair',
      'Mastoidectomy & Cholesteatoma Treatment',
      'Microscopic & Endoscopic Ear Surgery',
      'Ear Discharge & Chronic Otitis Media',
    ],
  },
  {
    id: 'nose-sinus',
    title: 'Nose & Sinus Care',
    description: 'Management of sinusitis, allergies, nasal obstruction and endoscopic nasal surgeries.',
    icon: <NoseServiceIcon className="w-7 h-7 text-[#0e4e50]" />,
    highlights: [
      'Functional Endoscopic Sinus Surgery (FESS)',
      'Deviated Nasal Septum (Septoplasty)',
      'Nasal Polyps & Allergy Management',
      'Turbinate Reduction & Snoring Relief',
    ],
  },
  {
    id: 'throat-voice',
    title: 'Throat & Voice Care',
    description: 'Treatment for voice disorders, throat infections and laryngeal conditions.',
    icon: <ThroatServiceIcon className="w-7 h-7 text-[#0e4e50]" />,
    highlights: [
      'Micro-Laryngeal Surgery (MLS)',
      'Vocal Cord Polyps & Nodules Care',
      'Chronic Tonsillitis & Adenoidectomy',
      'Flexible Video Laryngoscopy',
    ],
  },
  {
    id: 'head-neck',
    title: 'Head & Neck Care',
    description: 'Evaluation and management of head, neck and thyroid related ENT conditions.',
    icon: <HeadNeckServiceIcon className="w-7 h-7 text-[#0e4e50]" />,
    highlights: [
      'Thyroid Nodule & Swelling Diagnosis',
      'Salivary Gland Disorders (Parotid/Submandibular)',
      'Neck Lump & Lymph Node Evaluation',
      'Oral Cavity Lesions & Biopsies',
    ],
  },
  {
    id: 'hearing-balance',
    title: 'Hearing & Balance',
    description: 'Assessment and treatment for hearing loss, tinnitus and balance disorders.',
    icon: <HearingBalanceServiceIcon className="w-7 h-7 text-[#0e4e50]" />,
    highlights: [
      'Vertigo & Dizziness Diagnostics (BPPV)',
      'Audiological Assessment & Audiometry',
      'Tinnitus (Ringing in Ears) Management',
      'Hearing Aid Counseling & Rehabilitation',
    ],
  },
];

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceDetail | null>(null);

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0e4e50] uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#0e4e50]"></span>
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#113a3d] font-serif tracking-tight">
              Comprehensive ENT Care
            </h2>
          </div>

          <a
            href="#expertise"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0e4e50] hover:text-[#083032] group transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
              onClick={() => setActiveModalService(service)}
            >
              <div>
                {/* Mint Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-[#dcf2ee] flex items-center justify-center mb-5 group-hover:bg-[#0e4e50] group-hover:text-white transition-all duration-300">
                  <div className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0e4e50] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#0e4e50] group-hover:text-[#093537]">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal when user clicks Learn More */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <div className="w-12 h-12 rounded-full bg-[#dcf2ee] flex items-center justify-center mb-4">
              {activeModalService.icon}
            </div>

            <h3 className="text-2xl font-bold text-[#113a3d] font-serif">
              {activeModalService.title}
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              {activeModalService.description}
            </p>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0e4e50] mb-3">
                Key Treatments & Surgical Procedures
              </h4>
              <ul className="space-y-2.5">
                {activeModalService.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Close
              </button>
              <a
                href="/contact"
                onClick={() => {
                  setActiveModalService(null);
                  if (onSelectService) onSelectService(activeModalService.title);
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#0e4e50] hover:bg-[#093537] rounded-lg shadow-sm"
              >
                Book for this Care
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
