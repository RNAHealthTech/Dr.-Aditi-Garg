import React from 'react';
import AboutSection from '@/components/home/about-section';
import { Metadata } from 'next';
import { Award, GraduationCap, Building2, Stethoscope, Users, HeartPulse } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Dr. Aditi Garg | ENT Specialist',
  description: 'Learn about Dr. Aditi Garg, a leading ENT Specialist at Sir Ganga Ram Hospital and Shivasha ENT Clinic.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-16">
      {/* Dynamic Header Banner */}
      <div className="relative bg-[#0e4e50] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#093537]/50 rounded-full blur-2xl -ml-10 -mb-10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-100 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Know Your Doctor
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            About Dr. Aditi Garg
          </h1>
          <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            A compassionate and highly skilled Otorhinolaryngologist dedicated to providing advanced ENT care with a patient-first approach.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: Users, stat: '10,000+', label: 'Happy Patients', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: HeartPulse, stat: '5,000+', label: 'Surgeries', color: 'text-red-600', bg: 'bg-red-50' },
            { icon: Award, stat: '10+ Years', label: 'Experience', color: 'text-amber-600', bg: 'bg-amber-50' },
            { icon: Building2, stat: '2', label: 'Premium Clinics', color: 'text-teal-600', bg: 'bg-teal-50' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.stat}</h3>
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <AboutSection />
      
      {/* Experience & Education Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#0e4e50]">Professional Journey</h2>
          <p className="text-slate-500 mt-3">Education and prestigious affiliations</p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10"></div>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#0e4e50] text-white flex items-center justify-center shadow-md shadow-teal-900/20 z-10">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div className="w-px h-full bg-slate-200 mt-2"></div>
              </div>
              <div className="pb-8">
                <span className="text-sm font-bold text-teal-600 tracking-wider uppercase">Current</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Associate Consultant, ENT</h3>
                <p className="text-slate-600 font-medium mt-1">Sir Ganga Ram Hospital & Shivasha ENT Clinic</p>
                <p className="text-slate-500 mt-3 leading-relaxed">
                  Leading complex ENT surgeries, managing advanced outpatient care, and specializing in endoscopic sinus surgeries and micro-laryngeal procedures.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shadow-md shadow-amber-900/10 z-10">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="text-sm font-bold text-amber-600 tracking-wider uppercase">Education</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Advanced Medical Training</h3>
                <p className="text-slate-600 font-medium mt-1">MBBS, MS (ENT) / DNB</p>
                <p className="text-slate-500 mt-3 leading-relaxed">
                  Rigorous academic and clinical training with a focus on Otorhinolaryngology, acquiring deep expertise in head & neck anatomy and pathologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
