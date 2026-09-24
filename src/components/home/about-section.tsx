'use client';

import React from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  FileText,
  Building2,
  Building,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Quote,
  Sparkles,
} from 'lucide-react';
import { EarLogoIcon } from '../header';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#fbfdfc] relative overflow-hidden">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column: Image with organic mask, floating quote and clinical interests */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Seated Doctor Photo with framed organic shape and floating quote */}
            <div className="relative">
              {/* Organic blob background element */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#d4ece8] via-[#e6f4f1] to-[#f0f9f7] rounded-[42px] -z-10 transform -rotate-1" />
              
              <div className="relative overflow-hidden rounded-[36px] border-4 border-white shadow-xl aspect-[4/3.2]">
                <Image
                  src="/images/dr-aditi-desk.jpg"
                  alt="Dr. Aditi Garg ENT Specialist Clinic Desk"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Quote Box */}
              <div className="relative sm:absolute -bottom-6 left-2 sm:-left-4 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-teal-100/80 mt-4 sm:mt-0">
                <div className="text-teal-600 mb-1.5">
                  <Quote className="w-5 h-5 fill-teal-100 rotate-180 inline" />
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 italic font-medium leading-relaxed">
                  “My aim is to provide compassionate, evidence-based and personalized ENT care for every patient.”
                </p>
                <div className="text-[11px] font-bold text-[#0e4e50] mt-2 text-right">
                  ― Dr. Aditi Garg
                </div>
              </div>
            </div>

            {/* Clinical Interests Card (Mint Background + Ear Watermark) */}
            <div className="bg-[#dcf2ee] rounded-2xl p-6 relative overflow-hidden border border-teal-200/60 shadow-sm mt-8 sm:mt-10">
              {/* Watermark Ear Art */}
              <div className="absolute -right-4 -bottom-4 opacity-15 text-teal-900 pointer-events-none">
                <EarLogoIcon className="w-32 h-32" />
              </div>

              <h3 className="text-base font-bold text-[#113a3d] font-serif mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0e4e50]" />
                <span>Clinical Interests</span>
              </h3>

              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0e4e50] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Endoscopic and microscopic ear surgery
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0e4e50] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Endoscopic nasal surgeries
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0e4e50] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Laryngeal surgery
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Bio, Qualifications & Consultation Timings */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow & Title */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0e4e50] uppercase mb-2">
                <span className="w-6 h-[2px] bg-[#0e4e50]"></span>
                <span>About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#113a3d] font-serif tracking-tight">
                Dr. Aditi Garg
              </h2>
              <div className="mt-1">
                <div className="text-base font-bold text-slate-900">MBBS, DNB – ENT</div>
                <div className="text-sm font-medium text-slate-600">Associate Consultant, ENT</div>
              </div>
            </div>

            {/* Doctor Bio Text */}
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Dr. Aditi Garg is an Associate Consultant in ENT at Sir Ganga Ram Hospital, New Delhi.
                She has completed her MBBS from Coimbatore Government Medical College (Dr. MGR University, Chennai)
                in 2015 and DNB from Dr. R.N. Cooper Municipal General Hospital and HBT Medical College in 2020.
              </p>
              <p className="text-xs sm:text-sm text-slate-500">
                Having served as Senior Resident at Sir Ganga Ram Hospital (2020–2023) and Consultant at Max Hospital, Noida,
                Dr. Garg has treated thousands of complex ear, nose, throat, vertigo, and airway cases. She has been recognized
                with the <strong>Best Dissector Award</strong> across multiple temporal bone dissection workshops and is an active member
                of the Association of Otorhinolaryngologists of India (AOI).
              </p>
            </div>

            {/* 3 Qualifications Badges in Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {/* Qualification 1 */}
              <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-teal-300 transition-colors">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0e4e50] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">MBBS</div>
                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      Coimbatore Government Medical College (Dr. MGR Univ.)
                    </div>
                  </div>
                </div>
                <div className="text-[11px] font-bold text-[#0e4e50] mt-3">2015</div>
              </div>

              {/* Qualification 2 */}
              <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-teal-300 transition-colors">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0e4e50] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">DNB – ENT</div>
                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      Dr. R.N. Cooper Municipal General Hospital & HBT
                    </div>
                  </div>
                </div>
                <div className="text-[11px] font-bold text-[#0e4e50] mt-3">2020</div>
              </div>

              {/* Qualification 3 */}
              <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-teal-300 transition-colors">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0e4e50] flex items-center justify-center shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Associate Consultant</div>
                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      Department of ENT, Sir Ganga Ram Hospital
                    </div>
                  </div>
                </div>
                <div className="text-[11px] font-bold text-[#0e4e50] mt-3">New Delhi</div>
              </div>
            </div>

            {/* Consultation Timings Section */}
            <div id="timings" className="pt-3">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#0e4e50]" />
                <h3 className="text-xl font-bold text-[#113a3d] font-serif">
                  Consultation Timings
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Location 1: Sir Ganga Ram Hospital */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-teal-300 transition-all group">
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 group-hover:bg-[#0e4e50] group-hover:text-white text-[#0e4e50] flex items-center justify-center shrink-0 transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        Sir Ganga Ram Hospital
                      </h4>
                      <p className="text-xs text-slate-500">Room F-87, Rajinder Nagar, New Delhi</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#0e4e50]" />
                      <span>Monday, Wednesday, Friday</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span className="font-semibold text-slate-900">8:00 AM – 10:00 AM</span>
                    </div>
                  </div>
                </div>

                {/* Location 2: Shivasha ENT Clinic */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-teal-300 transition-all group">
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 group-hover:bg-[#0e4e50] group-hover:text-white text-[#0e4e50] flex items-center justify-center shrink-0 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        Shivasha ENT Clinic
                      </h4>
                      <p className="text-xs text-slate-500">148-B Pocket-4, Opp. Arya Samaj Mandir, Mayur Vihar Ph-1</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#0e4e50]" />
                      <span>Monday – Saturday</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span className="font-semibold text-slate-900">6:30 PM – 8:30 PM</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
