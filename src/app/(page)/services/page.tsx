'use client';
import React from 'react';
import ServicesSection from '@/components/home/services-section';
import { ClipboardList, Stethoscope, HeartHandshake, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#fbfdfc] pb-20">
      {/* Dynamic Header Banner */}
      <div className="relative bg-gradient-to-br from-[#0e4e50] to-[#093537] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Comprehensive Services
          </h1>
          <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            From routine check-ups to complex surgical procedures, we offer complete care for all your Ear, Nose, and Throat concerns.
          </p>
        </div>
      </div>

      <div className="-mt-10">
        <ServicesSection />
      </div>

      {/* Patient Journey Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#0e4e50]">The Patient Journey</h2>
            <p className="text-slate-500 mt-3">What to expect when you consult with us</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 z-0"></div>

            {[
              { icon: ClipboardList, step: '01', title: 'Consultation', desc: 'Detailed history taking and thorough clinical examination.' },
              { icon: Stethoscope, step: '02', title: 'Diagnostics', desc: 'Endoscopy, audiometry, or scans if required for precise diagnosis.' },
              { icon: HeartHandshake, step: '03', title: 'Treatment Plan', desc: 'Personalized medical or surgical management tailored to you.' },
              { icon: CheckCircle, step: '04', title: 'Recovery & Follow-up', desc: 'Continuous support ensuring a smooth and complete recovery.' },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full border-4 border-teal-50 flex items-center justify-center shadow-lg shadow-teal-900/5 mb-6 group-hover:border-teal-500 transition-colors duration-300 relative">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0e4e50] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                    {item.step}
                  </div>
                  <item.icon className="w-8 h-8 text-[#0e4e50]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
