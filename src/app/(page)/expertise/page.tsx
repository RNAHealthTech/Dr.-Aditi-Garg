import React from 'react';
import ExpertiseDetails from '@/components/home/expertise-details';
import { Metadata } from 'next';
import { Microscope, Scissors, Activity, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Expertise | Dr. Aditi Garg',
  description: 'Surgical and clinical expertise of Dr. Aditi Garg in Ear, Nose, and Throat treatments.',
};

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-16">
      {/* Dynamic Header Banner */}
      <div className="relative bg-[#093537] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -ml-20 -mt-20"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0e4e50]/80 rounded-full blur-2xl -mr-10 -mb-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-teal-50 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            Advanced Clinical Care
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            Surgical & Clinical Expertise
          </h1>
          <p className="text-lg md:text-xl text-teal-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Employing state-of-the-art technology and minimally invasive techniques for precise diagnosis and rapid recovery.
          </p>
        </div>
      </div>

      {/* Why Choose Us Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Microscope, title: 'Microscopic Precision', desc: 'Utilizing advanced microscopes for delicate ear and vocal cord surgeries.', color: 'text-blue-600', bg: 'bg-blue-100/50' },
            { icon: Activity, title: 'Minimally Invasive', desc: 'Endoscopic sinus and nasal procedures for faster recovery and less pain.', color: 'text-teal-600', bg: 'bg-teal-100/50' },
            { icon: ShieldCheck, title: 'Evidence-Based', desc: 'Adhering to international protocols and latest medical research.', color: 'text-indigo-600', bg: 'bg-indigo-100/50' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-white flex flex-col items-center text-center group hover:bg-white transition-colors duration-300">
              <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <ExpertiseDetails />
    </div>
  );
}
