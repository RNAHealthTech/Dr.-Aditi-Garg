'use client';

import React from 'react';
import { Shield, Clock, Heart, Award, Sparkles, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "10+ Years of Excellence",
    description: "Extensive experience in treating complex ENT disorders with a high success rate and patient satisfaction."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Evidence-Based Treatment",
    description: "Adhering to the latest international medical guidelines to provide safe and effective healthcare solutions."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Advanced Technology",
    description: "Equipped with state-of-the-art diagnostic and surgical tools, including high-definition endoscopes."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Compassionate Care",
    description: "A patient-first approach ensuring you feel heard, comfortable, and well-informed throughout your journey."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Minimal Wait Times",
    description: "Respecting your time with streamlined appointment scheduling and efficient clinic management."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Holistic Approach",
    description: "Treating the root cause rather than just symptoms for long-term health and wellness."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0e4e50] uppercase mb-3">
            <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
            <span>Why Choose Us</span>
            <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#113a3d] font-serif tracking-tight">
            Committed to Your Health <br />& Well-being
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Dr. Aditi Garg blends advanced medical expertise with deep compassion to deliver the highest standard of ENT care in New Delhi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-teal-50/0 group-hover:from-teal-50/50 group-hover:to-transparent transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-[#0e4e50] mb-6 group-hover:scale-110 group-hover:bg-[#0e4e50] group-hover:text-white transition-all duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0e4e50] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
