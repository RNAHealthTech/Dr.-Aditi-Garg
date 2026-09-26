'use client';

import React from 'react';
import { Shield, Clock, Heart, Sparkles, CheckCircle2, Users } from 'lucide-react';

const qualities = [
  {
    icon: <Users className="w-4 h-4" />,
    title: 'Patient-Centred Care',
    description: 'Every consultation begins with listening. Your symptoms, concerns, and history are central to the diagnosis and treatment plan.',
  },
  {
    icon: <Shield className="w-4 h-4" />,
    title: 'Evidence-Based Treatment',
    description: 'Adhering to the latest international ENT guidelines to ensure safe, effective, and clinically grounded care.',
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: 'Advanced Technology',
    description: 'High-definition endoscopes and state-of-the-art diagnostic tools for precise, minimally invasive ENT procedures.',
  },
  {
    icon: <Heart className="w-4 h-4" />,
    title: 'Compassionate Approach',
    description: 'Patients feel heard, comfortable, and well-informed at every step — from first consultation through recovery.',
  },
  {
    icon: <Clock className="w-4 h-4" />,
    title: 'Minimal Wait Times',
    description: 'Streamlined appointment scheduling and efficient clinic management that respects your time.',
  },
  {
    icon: <CheckCircle2 className="w-4 h-4" />,
    title: 'Holistic Approach',
    description: 'Treating the root cause of ENT conditions rather than managing symptoms — for lasting health outcomes.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Large statement */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">03</span>
              <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">Why Dr. Aditi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0d3033] font-serif tracking-tight leading-[1.12]">
              Care that begins
              <br />
              <span className="italic text-[#0e4e50]">with listening.</span>
            </h2>

            <p className="mt-6 text-[14px] text-slate-500 leading-relaxed max-w-sm">
              Dr. Aditi Garg brings together medical expertise and genuine personal attention — ensuring every patient understands their condition and feels supported throughout.
            </p>

            {/* Subtle separator visual */}
            <div className="mt-10 border-t border-[#e4e8e5] pt-8">
              <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-4">Practicing at</div>
              <div className="space-y-2 text-[13px] text-slate-700">
                <div className="font-semibold">Sir Ganga Ram Hospital</div>
                <div className="text-slate-500 text-[12px]">New Delhi — NABH Accredited</div>
                <div className="font-semibold mt-3">Shivasha ENT Clinic</div>
                <div className="text-slate-500 text-[12px]">Mayur Vihar Phase-1, New Delhi</div>
              </div>
            </div>
          </div>

          {/* Right: Quality points — editorial list */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#eaeeec]">
              {qualities.map((q, idx) => (
                <div key={idx} className="flex items-start gap-5 py-5 group hover:translate-x-2 transition-transform duration-200 cursor-default">
                  <div className="w-8 h-8 rounded-sm border border-[#c8dede] bg-[#f0f8f7] text-[#0e4e50] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0e4e50] group-hover:text-white group-hover:border-[#0e4e50] transition-all duration-200">
                    {q.icon}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-slate-900 mb-1">{q.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{q.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
