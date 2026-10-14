'use client';

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  ScrollReveal,
  ScrollStagger,
  ScrollStaggerItem,
  ScrollParagraph,
  ScrollHeading,
} from '@/components/ui/scroll-animation';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoColorDots, LogoColorBar } from '@/components/ui/shivasha-logo';

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

const HeadNeckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="7" r="4" />
    <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
    <path d="M12 11v4" />
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
    color: '#DE4937', // Logo Red (Ear)
    colorName: 'Red (Ear)',
    dotColor: 'bg-[#DE4937]',
    gradient: 'from-[#DE4937] to-[#e86657]',
    lightPill: 'bg-red-50 text-[#DE4937] border-red-200/70',
    ring: 'ring-red-100',
    iconBg: 'bg-red-50 text-[#DE4937]',
    btnStyle: 'border-[#DE4937]/30 text-[#DE4937] hover:bg-[#DE4937] hover:text-white',
    description: 'Expert care for chronic ear infections, hearing loss, and microsurgical ear procedures using advanced microscopic & endoscopic techniques.',
    procedures: [
      'Tympanoplasty (Eardrum Repair)',
      'Modified Radical Mastoidectomy',
      'Ossiculoplasty',
      'Endoscopic Tympanoplasty',
      'Meatoplasty',
      'Grommet Insertion',
      'Ear Canal Foreign Body & Wax Removal',
      'Intratympanic Steroid Injection',
      'Ear Lobe Repair',
    ],
  },
  {
    num: '02',
    title: 'Nose & Sinus',
    icon: <NoseIcon />,
    color: '#2787C8', // Logo Blue (Nose)
    colorName: 'Blue (Nose)',
    dotColor: 'bg-[#2787C8]',
    gradient: 'from-[#0f2942] to-[#2787C8]',
    lightPill: 'bg-blue-50 text-[#1b6ea8] border-blue-200/70',
    ring: 'ring-blue-100',
    iconBg: 'bg-blue-50 text-[#2787C8]',
    btnStyle: 'border-[#1b6ea8]/30 text-[#1b6ea8] hover:bg-[#1b6ea8] hover:text-white',
    description: 'Comprehensive management of sinusitis, allergies, nasal obstruction and endoscopic sinus surgeries including advanced skull base approaches.',
    procedures: [
      'Functional Endoscopic Sinus Surgery (FESS)',
      'Septoplasty — Deviated Nasal Septum',
      'Caldwell-Luc Surgery',
      'Medial Maxillectomy',
      'Orbital Decompression',
      'Transnasal Endoscopic PPF & ITF Approach',
      'Endoscopic Endonasal DCR (Tear Duct Surgery)',
      'Nasal Bleed — Endoscopy & Cauterization',
      'Balloon Sinuplasty (Assisted)',
      'Allergy Testing & Immunotherapy',
    ],
  },
  {
    num: '03',
    title: 'Throat & Voice',
    icon: <ThroatIcon />,
    color: '#F1AA37', // Logo Yellow (Throat)
    colorName: 'Yellow (Throat)',
    dotColor: 'bg-[#F1AA37]',
    gradient: 'from-[#c28420] to-[#F1AA37]',
    lightPill: 'bg-amber-50 text-[#b57715] border-amber-200/70',
    ring: 'ring-amber-100',
    iconBg: 'bg-amber-50 text-[#b57715]',
    btnStyle: 'border-[#F1AA37]/40 text-[#b57715] hover:bg-[#F1AA37] hover:text-white',
    description: 'Precision care for voice disorders, throat infections, airway management and laryngeal conditions.',
    procedures: [
      'Microlaryngeal Surgeries (MLS)',
      'Tonsillectomy',
      'Coblation Adenoidectomy',
      'Tracheostomy',
      'Diagnostic & Therapeutic Oesophagoscopy',
      'Drug Induced Sleep Endoscopy (DISE)',
      'Peritonsillar Abscess Drainage',
      'Parapharyngeal Abscess Drainage',
      'Ludwig\'s Angina Drainage',
      'Laser Assisted Leukoplakic Patch Excision',
    ],
  },
  {
    num: '04',
    title: 'Head & Neck',
    icon: <HeadNeckIcon />,
    color: '#DE4937', // Cycles back to Red
    colorName: 'Red (Ear/Head-Neck)',
    dotColor: 'bg-[#DE4937]',
    gradient: 'from-[#DE4937] to-[#e86657]',
    lightPill: 'bg-red-50 text-[#DE4937] border-red-200/70',
    ring: 'ring-red-100',
    iconBg: 'bg-red-50 text-[#DE4937]',
    btnStyle: 'border-[#DE4937]/30 text-[#DE4937] hover:bg-[#DE4937] hover:text-white',
    description: 'Surgical management of thyroid, salivary gland, oral and neck pathologies including oncological procedures.',
    procedures: [
      'Thyroidectomy',
      'Submandibular Gland Excision',
      'Limited Oral CA Wide Local Excision with Reconstruction',
      'Thyroglossal Duct Cyst Excision',
      'Preauricular Sinus Excision',
      'Dentigerous Cyst Excision',
      'Neck Lymph Nodes Excision Biopsy',
      'AC Polypectomy',
      'Balloon Eustachian Tuboplasty',
    ],
  },
  {
    num: '05',
    title: 'Vertigo & Balance',
    icon: <VertigoIcon />,
    color: '#2787C8', // Cycles back to Blue
    colorName: 'Blue (Nose/Balance)',
    dotColor: 'bg-[#2787C8]',
    gradient: 'from-[#0f2942] to-[#2787C8]',
    lightPill: 'bg-blue-50 text-[#1b6ea8] border-blue-200/70',
    ring: 'ring-blue-100',
    iconBg: 'bg-blue-50 text-[#2787C8]',
    btnStyle: 'border-[#1b6ea8]/30 text-[#1b6ea8] hover:bg-[#1b6ea8] hover:text-white',
    description: 'Accurate diagnosis and treatment of dizziness, tinnitus and balance disorders with clinical evaluation & maneuvers.',
    procedures: [
      'BPPV & Epley Maneuver for Vertigo',
      'Vertigo Testing & Maneuvers',
      'Tinnitus Evaluation & Management',
      'Audiological Assessment & Audiometry',
      'Hearing Aid Counselling & Rehabilitation',
    ],
  },
  {
    num: '06',
    title: 'Paediatric ENT',
    icon: <ChildIcon />,
    color: '#F1AA37', // Cycles back to Yellow
    colorName: 'Yellow (Throat/Paediatric)',
    dotColor: 'bg-[#F1AA37]',
    gradient: 'from-[#c28420] to-[#F1AA37]',
    lightPill: 'bg-amber-50 text-[#b57715] border-amber-200/70',
    ring: 'ring-amber-100',
    iconBg: 'bg-amber-50 text-[#b57715]',
    btnStyle: 'border-[#F1AA37]/40 text-[#b57715] hover:bg-[#F1AA37] hover:text-white',
    description: 'Gentle, child-friendly ENT care for common paediatric ear, nose and throat conditions.',
    procedures: [
      'Paediatric Airway Evaluation & Management',
      'Paediatric Hearing Screening (Glue Ear)',
      'Chronic Tonsillitis & Adenoid Hypertrophy',
      'Mouth Breathing Assessment',
      'Paediatric Foreign Body Removal',
      'Tongue Tie Release',
    ],
  },
];

const ExpertiseDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="expertise" className="py-20 sm:py-28 bg-white border-y border-[#e4e8e5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14 items-end">
          <div>
            <ScrollReveal direction="down">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1b6ea8]">02</span>
                <LogoColorDots size="w-2 h-2" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1b6ea8]">Clinical Expertise</span>
              </div>
            </ScrollReveal>

            <ScrollHeading
              as="h2"
              direction="up"
              className="text-3xl sm:text-4xl font-bold text-[#0f2942] font-serif tracking-tight leading-tight"
            >
              Specialized ENT<br />Care & Procedures
            </ScrollHeading>
          </div>

          <ScrollParagraph
            mode="sentences"
            delay={0.1}
            className="text-[14px] text-slate-500 leading-relaxed lg:pl-8"
          >
            Dr. Aditi Garg offers comprehensive ENT care across six specialized disciplines using state-of-the-art endoscopic and microscopic technology. Over 35 types of surgeries performed independently.
          </ScrollParagraph>
        </div>

        {/* Category tabs — horizontal scrollable on mobile */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-nowrap overflow-x-auto pb-3 sm:pb-2 gap-2 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
            {categories.map((cat, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex items-center gap-2.5 px-5 py-3 rounded-full text-[13px] font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? `bg-gradient-to-r ${cat.gradient} text-white shadow-md shadow-slate-900/15`
                      : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : cat.dotColor}`} />
                  <span className={`${isActive ? 'text-white' : 'text-slate-600'} transition-colors`}>
                    {cat.icon}
                  </span>
                  <span>{cat.title}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {cat.procedures.length}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active category content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden"
          >
            {/* Top 3-Color Brand Bar */}
            <LogoColorBar height="h-1.5" className="absolute top-0 left-0 right-0" />

            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10 pt-2">
              
              {/* Left Column: Category Description */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${categories[activeTab].gradient} text-white flex items-center justify-center rounded-2xl shadow-md ring-4 ${categories[activeTab].ring}`}>
                    {categories[activeTab].icon}
                  </div>
                  <div>
                    <span className={`text-[11px] font-bold tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full border ${categories[activeTab].lightPill}`}>
                      Specialty {categories[activeTab].num} &bull; {categories[activeTab].colorName}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-serif leading-tight mt-1.5">
                      {categories[activeTab].title}
                    </h3>
                  </div>
                </div>

                <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
                  {categories[activeTab].description}
                </p>

                <div className="pt-2">
                  <a
                    href="/contact"
                    className={`inline-flex items-center gap-2.5 bg-white border px-6 py-3 rounded-full text-xs font-bold tracking-wide shadow-xs hover:shadow-md transition-all duration-200 group ${categories[activeTab].btnStyle}`}
                  >
                    <span>Consult for {categories[activeTab].title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column: Procedures Grid */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
                    Procedures &amp; Clinical Management
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${categories[activeTab].lightPill}`}>
                    {categories[activeTab].procedures.length} Surgeries &amp; Treatments
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {categories[activeTab].procedures.map((proc, i) => (
                    <div
                      key={`${activeTab}-${i}`}
                      className="bg-white border border-slate-200/80 hover:border-slate-300 p-3.5 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-200 flex items-start gap-3 group"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors text-white"
                        style={{ backgroundColor: categories[activeTab].color }}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-[13px] text-slate-700 font-medium group-hover:text-slate-900 leading-snug">
                        {proc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Link to full services */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="mt-12 pt-8 border-t border-[#e4e8e5] flex items-center justify-between flex-wrap gap-4">
            <p className="text-[13.5px] text-slate-500 font-medium">
              35+ types of ENT &amp; Head-Neck surgeries performed independently with advanced endoscopic &amp; microscopic techniques.
            </p>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#1b6ea8] hover:text-[#155887] group transition-colors"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExpertiseDetails;
