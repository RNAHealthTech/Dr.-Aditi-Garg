'use client';

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const EarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 4.5-3 6.5-4 8.5-.5 1-1 2.5-2.5 3-1 .3-2-.3-2.5-1.2C9.2 17.5 9 15.5 9 14a3 3 0 1 1 6 0" />
    <path d="M10 10a2 2 0 1 1 4 0c0 1-.5 1.8-1.5 2.2" />
  </svg>
);

const NoseIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 18a4 4 0 0 0 8 0c0-2-2-4-2-7a2 2 0 1 0-4 0c0 3-2 5-2 7z" />
    <path d="M9 16c.8.6 1.8 1 3 1s2.2-.4 3-1" />
  </svg>
);

const ThroatIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a3 3 0 0 1 3 3v1a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
    <path d="M12 8v4" />
    <path d="M8 16a4 4 0 0 1 8 0v2H8v-2z" />
    <path d="M10 20h4" />
  </svg>
);

const VertigoIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 11a9 9 0 0 1 9-9 9 9 0 0 1 9 9" />
    <path d="M6 13a6 6 0 0 1 6-6 6 6 0 0 1 6 6" />
    <path d="M9 15a3 3 0 0 1 3-3 3 3 0 0 1 3 3" />
    <path d="M12 17v4" />
  </svg>
);

const ChildIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M6 21v-1a6 6 0 0 1 12 0v1" />
    <path d="M9 11.5c1 .5 2 .5 3 0" />
  </svg>
);

const categories = [
  {
    num: '01',
    title: 'Ear & Hearing',
    icon: <EarIcon />,
    description: 'Expert care for chronic ear infections, hearing loss, and microsurgical ear procedures.',
    procedures: [
      'Tympanoplasty (Eardrum Repair)',
      'Mastoidectomy & Cholesteatoma Treatment',
      'Microscopic & Endoscopic Ear Surgery',
      'Ear Discharge & Chronic Otitis Media',
      'Ear Canal Foreign Body & Wax Removal',
    ],
  },
  {
    num: '02',
    title: 'Nose & Sinus',
    icon: <NoseIcon />,
    description: 'Management of sinusitis, allergies, nasal obstruction and endoscopic nasal surgeries.',
    procedures: [
      'FESS (Functional Endoscopic Sinus Surgery)',
      'Septoplasty — Deviated Nasal Septum',
      'Nasal Polyps & Allergy Management',
      'Turbinate Reduction & Snoring Relief',
      'Epistaxis (Nosebleed) Management',
    ],
  },
  {
    num: '03',
    title: 'Throat & Voice',
    icon: <ThroatIcon />,
    description: 'Precision care for voice disorders, throat infections, and laryngeal conditions.',
    procedures: [
      'Micro-Laryngeal Surgery (MLS)',
      'Vocal Cord Polyps & Nodules Treatment',
      'Coblation Tonsillectomy & Adenoidectomy',
      'Flexible Video Laryngoscopy (FVL)',
      'Snoring & Sleep Apnea Evaluation',
    ],
  },
  {
    num: '04',
    title: 'Vertigo & Balance',
    icon: <VertigoIcon />,
    description: 'Accurate diagnosis and treatment of dizziness, tinnitus and balance disorders.',
    procedures: [
      'BPPV & Epley Maneuver for Vertigo',
      'Tinnitus Evaluation & Management',
      'Audiological Assessment & Audiometry',
      'Hearing Aid Counselling & Rehabilitation',
    ],
  },
  {
    num: '05',
    title: 'Paediatric ENT',
    icon: <ChildIcon />,
    description: 'Gentle, child-friendly ENT care for common paediatric ear, nose and throat conditions.',
    procedures: [
      'Paediatric Hearing Screening (Glue Ear)',
      'Chronic Tonsillitis & Adenoid Hypertrophy',
      'Mouth Breathing Assessment',
      'Paediatric Foreign Body Removal',
    ],
  },
];

const ExpertiseDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="expertise" className="py-20 sm:py-28 bg-white border-y border-[#e4e8e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14 items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">02</span>
              <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">Clinical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d3033] font-serif tracking-tight leading-tight">
              Specialized ENT<br />Care & Procedures
            </h2>
          </div>
          <p className="text-[14px] text-slate-500 leading-relaxed lg:pl-8">
            Dr. Aditi Garg offers comprehensive ENT care across five specialized disciplines — using state-of-the-art endoscopic technology and evidence-based clinical protocols.
          </p>
        </div>

        {/* Category tabs — horizontal scrollable on mobile */}
        <div className="flex flex-nowrap overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap gap-px mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-[#e4e8e5]">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-5 py-3.5 text-[12.5px] font-semibold whitespace-nowrap transition-all duration-150 border-b-2 -mb-px ${
                activeTab === idx
                  ? 'border-[#0e4e50] text-[#0e4e50]'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <span className={`${activeTab === idx ? 'text-[#0e4e50]' : 'text-slate-400'} transition-colors`}>
                {cat.icon}
              </span>
              <span className="hidden sm:inline text-[10px] font-bold text-slate-400 mr-0.5">{cat.num}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active category content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-4 animate-fade-in">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#0e4e50]/20 bg-[#f0f8f7] text-[#0e4e50] flex items-center justify-center rounded-sm">
                {categories[activeTab].icon}
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0e4e50]">{categories[activeTab].num}</div>
                <h3 className="text-xl font-bold text-slate-900 font-serif leading-tight">{categories[activeTab].title}</h3>
              </div>
            </div>
            <p className="text-[14px] text-slate-500 leading-relaxed">
              {categories[activeTab].description}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0e4e50] border-b border-[#0e4e50]/30 hover:border-[#0e4e50] pb-0.5 transition-colors"
            >
              Book for this condition
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">Key Treatments &amp; Procedures</div>
            {categories[activeTab].procedures.map((proc, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-3 border-b border-[#f0f0ee] last:border-0 hover:translate-x-1.5 transition-transform duration-200 cursor-default"
              >
                <div className="w-5 h-5 rounded-full border border-[#0e4e50]/30 bg-[#f0f8f7] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#0e4e50]" />
                </div>
                <span className="text-[13.5px] text-slate-700 font-medium">{proc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Link to full services */}
        <div className="mt-12 pt-8 border-t border-[#e4e8e5] flex items-center justify-between flex-wrap gap-4">
          <p className="text-[13px] text-slate-500">
            Conditions treated across ear, nose, throat, head &amp; neck specialties.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0e4e50] hover:text-[#0b3e40] group transition-colors"
          >
            View all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseDetails;
