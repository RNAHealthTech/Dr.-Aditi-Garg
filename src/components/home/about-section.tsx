'use client';

import React from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  FileText,
  Building,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">01</span>
          <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">About</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left column — Image */}
          <div className="lg:col-span-4 space-y-6">
            {/* Doctor desk photo */}
            <div className="relative">
              <div className="overflow-hidden rounded-sm bg-[#e6f0ef] aspect-[3/4]">
                <Image
                  src="/images/dr-aditi-desk.jpg"
                  alt="Dr. Aditi Garg at clinic desk — ENT Specialist New Delhi"
                  fill
                  className="object-cover object-center hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              {/* Offset quote card */}
              <div className="mt-4 bg-white border border-slate-200 p-5 rounded-sm shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <p className="text-[13px] text-slate-700 italic leading-relaxed">
                  "My aim is to provide compassionate, evidence-based and personalised ENT care for every patient."
                </p>
                <div className="text-[11px] font-bold text-[#0e4e50] mt-3">― Dr. Aditi Garg</div>
              </div>
            </div>

            {/* Clinical interests */}
            <div className="bg-[#0e4e50] text-white px-6 py-5 rounded-sm">
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4 opacity-70">Clinical Interests</h3>
              <ul className="space-y-2.5">
                {[
                  'Endoscopic & microscopic ear surgery',
                  'Endoscopic nasal & sinus surgery',
                  'Laryngeal & voice surgery',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px]">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — Bio */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-[44px] font-bold text-[#0d3033] font-serif leading-tight tracking-tight">
                Dr. Aditi Garg
              </h2>
              <div className="flex flex-wrap items-center gap-2.5 text-[13px]">
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-sm font-semibold text-slate-700">MBBS, DNB – ENT</span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-sm font-semibold text-slate-700">Associate Consultant, ENT</span>
                <span className="bg-[#f0f8f7] border border-teal-200 px-3 py-1 rounded-sm font-semibold text-[#0e4e50]">Sir Ganga Ram Hospital</span>
              </div>
            </div>

            <div className="space-y-4 text-[14.5px] text-slate-600 leading-[1.8]">
              <p>
                Dr. Aditi Garg is an Associate Consultant in ENT at Sir Ganga Ram Hospital, New Delhi.
                She completed her MBBS from Coimbatore Government Medical College (Dr. MGR University, Chennai) in 2015, followed by DNB — ENT from Dr. R.N. Cooper Municipal General Hospital and HBT Medical College in 2020.
              </p>
              <p>
                Having served as Senior Resident at Sir Ganga Ram Hospital (2020–2023) and Consultant at Max Hospital, Noida, Dr. Garg has extensive experience treating complex ear, nose, throat, vertigo, and airway conditions. She has been recognised with the <strong className="text-slate-800">Best Dissector Award</strong> across multiple temporal bone dissection workshops and is an active member of the Association of Otorhinolaryngologists of India (AOI).
              </p>
            </div>

            {/* Education timeline */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-5">Education &amp; Training</h3>
              <div className="space-y-0 border-l-2 border-[#d4e8e8] pl-6">
                {[
                  {
                    degree: 'MBBS',
                    institution: 'Coimbatore Government Medical College',
                    sub: 'Dr. MGR University, Chennai',
                    year: '2015',
                    icon: <GraduationCap className="w-4 h-4" />,
                  },
                  {
                    degree: 'DNB — ENT',
                    institution: 'Dr. R.N. Cooper Municipal General Hospital & HBT Medical College',
                    sub: 'Mumbai',
                    year: '2020',
                    icon: <FileText className="w-4 h-4" />,
                  },
                  {
                    degree: 'Senior Resident, ENT',
                    institution: 'Sir Ganga Ram Hospital',
                    sub: 'New Delhi',
                    year: '2020–2023',
                    icon: <Building className="w-4 h-4" />,
                  },
                ].map((item, i) => (
                  <div key={i} className="relative pb-8 last:pb-0">
                    {/* Timeline dot */}
                    <div className="absolute -left-[1.45rem] top-0.5 w-5 h-5 rounded-full bg-white border-2 border-[#0e4e50] flex items-center justify-center text-[#0e4e50]">
                      {item.icon}
                    </div>
                    <div className="pl-3">
                      <div className="text-[11px] font-bold text-[#0e4e50] mb-0.5">{item.year}</div>
                      <div className="text-[14px] font-bold text-slate-900">{item.degree}</div>
                      <div className="text-[13px] text-slate-600">{item.institution}</div>
                      <div className="text-[12px] text-slate-400">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation timings */}
            <div id="timings" className="border-t border-slate-100 pt-8">
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-5">Consultation Timings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 p-5 rounded-sm hover:border-[#0e4e50]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-4 h-4 text-[#0e4e50] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[13.5px] font-bold text-slate-900 leading-tight">Sir Ganga Ram Hospital</h4>
                      <p className="text-[11.5px] text-slate-400 mt-0.5">Room F-87, Rajinder Nagar, New Delhi</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-2 text-[12.5px] text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#0e4e50]" />
                      <span className="font-medium">Monday, Wednesday, Friday</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12.5px] text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-[#0e4e50]" />
                      <span className="font-bold text-slate-900">8:00 AM – 10:00 AM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-5 rounded-sm hover:border-[#0e4e50]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-4 h-4 text-[#0e4e50] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[13.5px] font-bold text-slate-900 leading-tight">Shivasha ENT Clinic</h4>
                      <p className="text-[11.5px] text-slate-400 mt-0.5">148-B Pocket-4, Opp. Arya Samaj Mandir, Mayur Vihar Ph-1</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-2 text-[12.5px] text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-[#0e4e50]" />
                      <span className="font-medium">Monday – Saturday</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12.5px] text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-[#0e4e50]" />
                      <span className="font-bold text-slate-900">6:30 PM – 8:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0e4e50] border-b border-[#0e4e50]/30 hover:border-[#0e4e50] pb-0.5 transition-colors"
              >
                Learn More About Dr. Aditi Garg
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
