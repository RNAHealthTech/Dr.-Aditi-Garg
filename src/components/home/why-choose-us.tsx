'use client';

import React from 'react';
import { Shield, Clock, Heart, Sparkles, CheckCircle2, Users } from 'lucide-react';
import {
  ScrollReveal,
  ScrollStagger,
  ScrollStaggerItem,
  ScrollParagraph,
  ScrollHeading,
} from '@/components/ui/scroll-animation';
import { LogoColorDots } from '@/components/ui/shivasha-logo';

const qualities = [
  {
    icon: <Users className="w-4 h-4" />,
    title: 'Patient-Centred Care',
    description: 'Every consultation begins with listening. Your symptoms, concerns, and history are central to the diagnosis and treatment plan.',
    colorClass: 'bg-red-50 text-[#DE4937] group-hover:bg-[#DE4937]',
    borderHover: 'hover:border-red-300',
    dotColor: 'bg-[#DE4937]',
  },
  {
    icon: <Shield className="w-4 h-4" />,
    title: 'Evidence-Based Treatment',
    description: 'Adhering to the latest international ENT guidelines to ensure safe, effective, and clinically grounded care.',
    colorClass: 'bg-blue-50 text-[#2787C8] group-hover:bg-[#2787C8]',
    borderHover: 'hover:border-blue-300',
    dotColor: 'bg-[#2787C8]',
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: 'Advanced Technology',
    description: 'High-definition endoscopes and state-of-the-art diagnostic tools for precise, minimally invasive ENT procedures.',
    colorClass: 'bg-amber-50 text-[#d4891b] group-hover:bg-[#F1AA37]',
    borderHover: 'hover:border-amber-300',
    dotColor: 'bg-[#F1AA37]',
  },
  {
    icon: <Heart className="w-4 h-4" />,
    title: 'Compassionate Approach',
    description: 'Patients feel heard, comfortable, and well-informed at every step — from first consultation through recovery.',
    colorClass: 'bg-red-50 text-[#DE4937] group-hover:bg-[#DE4937]',
    borderHover: 'hover:border-red-300',
    dotColor: 'bg-[#DE4937]',
  },
  {
    icon: <Clock className="w-4 h-4" />,
    title: 'Minimal Wait Times',
    description: 'Streamlined appointment scheduling and efficient clinic management that respects your time.',
    colorClass: 'bg-blue-50 text-[#2787C8] group-hover:bg-[#2787C8]',
    borderHover: 'hover:border-blue-300',
    dotColor: 'bg-[#2787C8]',
  },
  {
    icon: <CheckCircle2 className="w-4 h-4" />,
    title: 'Holistic Approach',
    description: 'Treating the root cause of ENT conditions rather than managing symptoms — for lasting health outcomes.',
    colorClass: 'bg-amber-50 text-[#d4891b] group-hover:bg-[#F1AA37]',
    borderHover: 'hover:border-amber-300',
    dotColor: 'bg-[#F1AA37]',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Large statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal direction="down">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1b6ea8]">03</span>
                <LogoColorDots size="w-2 h-2" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1b6ea8]">Why Dr. Aditi</span>
              </div>
            </ScrollReveal>

            <ScrollHeading
              as="h2"
              direction="up"
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f2942] font-serif tracking-tight leading-[1.12]"
            >
              Care that begins
              <br />
              <span className="italic text-[#1b6ea8]">with listening.</span>
            </ScrollHeading>

            <ScrollParagraph
              mode="sentences"
              delay={0.1}
              className="mt-6 text-[14px] text-slate-500 leading-relaxed max-w-sm"
            >
              Dr.&nbsp;Aditi Garg brings together medical expertise and genuine personal attention. Every patient understands their condition and feels supported throughout.
            </ScrollParagraph>

            {/* Subtle separator visual */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="mt-10 border-t border-[#e4e8e5] pt-8">
                <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-4">Practicing at</div>
                <div className="space-y-2 text-[13px] text-slate-700">
                  <div className="font-semibold text-slate-900">Sir Ganga Ram Hospital</div>
                  <div className="text-slate-500 text-[12px]">New Delhi — NABH Accredited</div>
                  <div className="font-semibold text-slate-900 mt-3">Shivasha ENT Clinic</div>
                  <div className="text-slate-500 text-[12px]">Mayur Vihar Phase-1, New Delhi</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Quality points — modern feature card grid */}
          <div className="lg:col-span-7">
            <ScrollStagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualities.map((q, idx) => (
                <ScrollStaggerItem key={idx} direction="up" distance={20}>
                  <div className={`bg-white border border-[#e2ecea] ${q.borderHover} p-6 rounded-2xl shadow-2xs hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group relative overflow-hidden`}>
                    {/* Top small color dot indicator */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${q.dotColor} opacity-70`} />
                    </div>

                    <div>
                      <div className={`w-10 h-10 rounded-xl ${q.colorClass} group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300 shadow-2xs`}>
                        {q.icon}
                      </div>
                      <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-[#0f2942] transition-colors">
                        {q.title}
                      </h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                        {q.description}
                      </p>
                    </div>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
