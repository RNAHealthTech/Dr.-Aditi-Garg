'use client';

import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { LogoColorDots } from '@/components/ui/shivasha-logo';

export const EarServiceIcon = ({ className = "w-7 h-7 text-[#DE4937]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 4.5-3 6.5-4 8.5-.5 1-1 2.5-2.5 3-1 .3-2-.3-2.5-1.2C9.2 17.5 9 15.5 9 14a3 3 0 1 1 6 0" />
    <path d="M10 10a2 2 0 1 1 4 0c0 1-.5 1.8-1.5 2.2" />
  </svg>
);

export const NoseServiceIcon = ({ className = "w-7 h-7 text-[#2787C8]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 18a4 4 0 0 0 8 0c0-2-2-4-2-7a2 2 0 1 0-4 0c0 3-2 5-2 7z" />
    <path d="M9 16c.8.6 1.8 1 3 1s2.2-.4 3-1" />
  </svg>
);

export const ThroatServiceIcon = ({ className = "w-7 h-7 text-[#F1AA37]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M17 11l2 2 4-4" />
  </svg>
);

export const HeadNeckServiceIcon = ({ className = "w-7 h-7 text-[#DE4937]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="7" r="4" />
    <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
    <path d="M12 11v4" />
  </svg>
);

export const HearingBalanceServiceIcon = ({ className = "w-7 h-7 text-[#2787C8]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 11a9 9 0 0 1 9-9 9 9 0 0 1 9 9" />
    <path d="M6 13a6 6 0 0 1 6-6 6 6 0 0 1 6 6" />
    <path d="M9 15a3 3 0 0 1 3-3 3 3 0 0 1 3 3" />
    <path d="M12 17v4" />
  </svg>
);

export const ClinicServiceIcon = ({ className = "w-7 h-7 text-[#F1AA37]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  color: string;
  tag: string;
  lightBg: string;
  text: string;
  borderHover: string;
  iconHoverBg: string;
}

const servicesData: ServiceDetail[] = [
  {
    id: 'ear-care',
    title: 'Ear Care & Surgery',
    description: 'Treatment for ear infections, hearing problems and advanced microscopic & endoscopic ear surgeries.',
    color: '#DE4937',
    tag: 'Ear & Hearing (Red)',
    lightBg: 'bg-red-50',
    text: 'text-[#DE4937]',
    borderHover: 'hover:border-red-300',
    iconHoverBg: 'group-hover:bg-[#DE4937]',
    icon: <EarServiceIcon className="w-7 h-7 text-[#DE4937]" />,
    highlights: [
      'Tympanoplasty & Eardrum Repair',
      'Modified Radical Mastoidectomy',
      'Ossiculoplasty',
      'Endoscopic Tympanoplasty',
      'Grommet Insertion',
      'Meatoplasty',
      'Intratympanic Steroid Injection',
    ],
  },
  {
    id: 'nose-sinus',
    title: 'Nose & Sinus Care',
    description: 'Management of sinusitis, allergies, nasal obstruction and advanced endoscopic sinus surgeries.',
    color: '#2787C8',
    tag: 'Nose & Sinus (Blue)',
    lightBg: 'bg-blue-50',
    text: 'text-[#2787C8]',
    borderHover: 'hover:border-blue-300',
    iconHoverBg: 'group-hover:bg-[#2787C8]',
    icon: <NoseServiceIcon className="w-7 h-7 text-[#2787C8]" />,
    highlights: [
      'Functional Endoscopic Sinus Surgery (FESS)',
      'Septoplasty (Deviated Nasal Septum)',
      'Endoscopic Endonasal DCR',
      'Caldwell-Luc & Denkers Surgery',
      'Medial Maxillectomy',
      'Orbital Decompression',
      'Nasal Bleed Cauterization',
    ],
  },
  {
    id: 'throat-voice',
    title: 'Throat & Voice Care',
    description: 'Precision care for voice disorders, throat infections, airway management and laryngeal conditions.',
    color: '#F1AA37',
    tag: 'Throat & Voice (Yellow)',
    lightBg: 'bg-amber-50',
    text: 'text-[#d4891b]',
    borderHover: 'hover:border-amber-300',
    iconHoverBg: 'group-hover:bg-[#F1AA37]',
    icon: <ThroatServiceIcon className="w-7 h-7 text-[#d4891b]" />,
    highlights: [
      'Microlaryngeal Surgeries (MLS)',
      'Tonsillectomy & Coblation Adenoidectomy',
      'Tracheostomy',
      'Diagnostic & Therapeutic Oesophagoscopy',
      'Drug Induced Sleep Endoscopy (DISE)',
      'Laser Assisted Leukoplakic Patch Excision',
    ],
  },
  {
    id: 'head-neck',
    title: 'Head & Neck Surgery',
    description: 'Surgical management of thyroid, salivary gland, neck and oncological ENT conditions.',
    color: '#DE4937',
    tag: 'Head & Neck (Red)',
    lightBg: 'bg-red-50',
    text: 'text-[#DE4937]',
    borderHover: 'hover:border-red-300',
    iconHoverBg: 'group-hover:bg-[#DE4937]',
    icon: <HeadNeckServiceIcon className="w-7 h-7 text-[#DE4937]" />,
    highlights: [
      'Thyroidectomy',
      'Submandibular Gland Excision',
      'Oral CA Wide Local Excision with Reconstruction',
      'Thyroglossal Duct Cyst Excision',
      'Neck Lymph Nodes Excision Biopsy',
      'Preauricular Sinus Excision',
      'Dentigerous Cyst Excision',
    ],
  },
  {
    id: 'hearing-balance',
    title: 'Hearing & Balance',
    description: 'Assessment and treatment for hearing loss, tinnitus, vertigo and balance disorders.',
    color: '#2787C8',
    tag: 'Balance & Hearing (Blue)',
    lightBg: 'bg-blue-50',
    text: 'text-[#2787C8]',
    borderHover: 'hover:border-blue-300',
    iconHoverBg: 'group-hover:bg-[#2787C8]',
    icon: <HearingBalanceServiceIcon className="w-7 h-7 text-[#2787C8]" />,
    highlights: [
      'BPPV & Epley Maneuver for Vertigo',
      'Vertigo Testing & Maneuvers',
      'Audiological Assessment & Audiometry',
      'Tinnitus (Ringing in Ears) Management',
      'Hearing Aid Counselling & Rehabilitation',
    ],
  },
  {
    id: 'clinic-procedures',
    title: 'Clinic Procedures',
    description: 'In-clinic procedures at Shivasha ENT Clinic, Mayur Vihar Phase 1.',
    color: '#F1AA37',
    tag: 'Shivasha Clinic (Yellow)',
    lightBg: 'bg-amber-50',
    text: 'text-[#d4891b]',
    borderHover: 'hover:border-amber-300',
    iconHoverBg: 'group-hover:bg-[#F1AA37]',
    icon: <ClinicServiceIcon className="w-7 h-7 text-[#d4891b]" />,
    highlights: [
      'Ear / Nose / Throat Endoscopy',
      'Nasal Bleed — Endoscopy & Cauterization',
      'Small Cyst Removal & Biopsies',
      'Ear Lobe Repair',
      'Tongue Tie Release',
      'Allergy Testing & Immunotherapy',
      'Foreign Body Removal (Ear / Nose / Throat)',
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
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest text-[#1b6ea8] uppercase mb-2">
              <LogoColorDots size="w-2 h-2" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942] font-serif tracking-tight">
              Comprehensive ENT Care
            </h2>
          </div>

          <a
            href="#expertise"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1b6ea8] hover:text-[#0f2942] group transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 6 Cards Grid with 3 Logo Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-5 border border-slate-200/80 ${service.borderHover} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 relative overflow-hidden`}
              onClick={() => setActiveModalService(service)}
            >
              {/* Top color accent strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                style={{ backgroundColor: service.color }}
              />

              <div>
                <div className="flex items-center justify-between mb-5">
                  {/* Icon Circle */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.lightBg} ${service.iconHoverBg} flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:text-white`}
                  >
                    <div className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all">
                      {service.icon}
                    </div>
                  </div>

                  <span
                    className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full border border-slate-200/60 ${service.lightBg} ${service.text}`}
                  >
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0f2942] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div
                className={`pt-5 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold ${service.text}`}
              >
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
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative border border-slate-100 overflow-hidden">
            {/* Top color bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: activeModalService.color }}
            />

            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <div className={`w-12 h-12 rounded-2xl ${activeModalService.lightBg} ${activeModalService.text} flex items-center justify-center mb-4`}>
              {activeModalService.icon}
            </div>

            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[10.5px] font-bold px-2 py-0.5 rounded-md ${activeModalService.lightBg} ${activeModalService.text}`}>
                {activeModalService.tag}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#0f2942] font-serif">
              {activeModalService.title}
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              {activeModalService.description}
            </p>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Treatments & Surgical Procedures
              </h4>
              <ul className="space-y-2.5">
                {activeModalService.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: activeModalService.color }}
                    />
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
                className="px-5 py-2 text-xs font-semibold text-white rounded-lg shadow-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: activeModalService.color }}
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
