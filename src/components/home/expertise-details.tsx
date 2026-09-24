'use client';

import React, { useState } from 'react';
import {
  CheckCircle,
  Activity,
  Sparkles,
  Stethoscope,
  Microscope,
  Baby,
  Waves,
  Shield,
} from 'lucide-react';

const procedures = [
  {
    category: 'Ear & Otology',
    icon: <Microscope className="w-5 h-5 text-[#0e4e50]" />,
    items: [
      { name: 'Tympanoplasty (Eardrum Repair)', desc: 'Microscopic and endoscopic reconstruction of perforated eardrums with high success rates.' },
      { name: 'Mastoidectomy', desc: 'Removal of diseased mastoid bone air cells and cholesteatoma to stop recurring ear discharge.' },
      { name: 'Ossiculoplasty', desc: 'Reconstruction of middle ear hearing bones to restore conductive hearing loss.' },
      { name: 'Ear Canal Foreign Body & Wax Removal', desc: 'Safe microscopic cleaning for pediatric and adult ear canals.' },
    ],
  },
  {
    category: 'Nose, Sinus & Allergy',
    icon: <Sparkles className="w-5 h-5 text-[#0e4e50]" />,
    items: [
      { name: 'FESS (Functional Endoscopic Sinus Surgery)', desc: 'Minimally invasive clearance of chronic sinusitis and nasal polyposis.' },
      { name: 'Septoplasty & Turbinoplasty', desc: 'Straightening deviated nasal septum (DNS) to restore effortless nasal breathing.' },
      { name: 'Allergic Rhinitis & Sinonasal Polyps', desc: 'Comprehensive medical and immunotherapy protocols for nasal allergies.' },
      { name: 'Epistaxis (Nosebleed) Management', desc: 'Endoscopic electrocautery and packing for persistent nasal bleeding.' },
    ],
  },
  {
    category: 'Throat, Voice & Airway',
    icon: <Activity className="w-5 h-5 text-[#0e4e50]" />,
    items: [
      { name: 'Microlaryngeal Surgery (MLS)', desc: 'Precision phonosurgery for vocal nodules, polyps, cysts, and voice hoarseness.' },
      { name: 'Coblation Tonsillectomy & Adenoidectomy', desc: 'Low-temperature bloodless removal of infected tonsils and obstructing adenoids.' },
      { name: 'Snoring & OSA Evaluation', desc: 'Comprehensive airway assessment and sleep apnea surgical solutions.' },
      { name: 'Flexible Video Laryngoscopy (FVL)', desc: 'High-definition outpatient visualization of vocal cords and throat anatomy.' },
    ],
  },
  {
    category: 'Vertigo, Balance & Paediatric ENT',
    icon: <Waves className="w-5 h-5 text-[#0e4e50]" />,
    items: [
      { name: 'BPPV & Vertigo Maneuvers', desc: 'Accurate particle repositioning (Epley Maneuver) for positional vertigo and dizziness.' },
      { name: 'Tinnitus Evaluation', desc: 'Diagnostic testing and acoustic rehabilitation for chronic ear buzzing/ringing.' },
      { name: 'Paediatric Hearing Screening', desc: 'Gentle assessment of hearing impairment and glue ear (Otitis Media with Effusion).' },
      { name: 'Neck Swellings & Thyroid Evaluation', desc: 'Expert clinical workup and fine-needle aspiration guidance for neck lumps.' },
    ],
  },
];

const ExpertiseDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="expertise" className="py-16 sm:py-20 bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0e4e50] uppercase mb-2">
            <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
            <span>Clinical Expertise & Procedures</span>
            <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#113a3d] font-serif tracking-tight">
            Specialized Surgical & Clinical Disciplines
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Equipped with state-of-the-art endoscopic technology and evidence-based clinical protocols
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {procedures.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-[#0e4e50] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-teal-50/80 border border-slate-200'
              }`}
            >
              {cat.icon}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {procedures[activeTab].items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0e4e50] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-[#0e4e50]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertiseDetails;
