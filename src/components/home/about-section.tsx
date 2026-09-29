'use client';

import React from 'react';
import {
  GraduationCap,
  FileText,
  Building,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Award,
  BookOpen,
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
              <div className="overflow-hidden rounded-sm bg-gradient-to-b from-[#e6f0ef] to-[#cde4e1] aspect-[3/4] flex flex-col items-center justify-center relative shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3033]/20 to-transparent"></div>
                <div className="absolute bottom-6 flex flex-col items-center gap-1.5 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#0e4e50] text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-sm shadow-md">
                    Photo Coming Soon
                  </span>
                </div>
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
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4 opacity-70">Special Interests</h3>
              <ul className="space-y-2.5">
                {[
                  'Microscopic ear surgery',
                  'Endoscopic sinus & nasal surgery',
                  'Endoscopic ENT surgeries',
                  'Laryngeal & voice surgery',
                  'Minimally invasive surgical techniques',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px]">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards highlight */}
            <div className="bg-white border border-slate-200 px-6 py-5 rounded-sm shadow-sm">
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">Awards</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-[13px] text-slate-700">
                  <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Best Dissector — Dr. Morwani&apos;s Temporal Bone Dissection Workshop (2018)</span>
                </li>
                <li className="flex items-start gap-2.5 text-[13px] text-slate-700">
                  <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Best Dissector — 3D Simulated Temporal Bone Dissection by Dr. Prashant Naik (2024)</span>
                </li>
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
                Dr. Aditi Garg is an ENT Surgeon and Associate Consultant in the Department of ENT at Sir Ganga Ram Hospital, New Delhi. She is dedicated to providing comprehensive and patient-centred care across a wide range of ear, nose and throat disorders.
              </p>
              <p>
                She completed her MBBS from Coimbatore Government Medical College (2009–2015) and DNB in Otorhinolaryngology (ENT) from HBT Medical College and Dr. R. N. Cooper Municipal Hospital, Mumbai (2017–2020). She subsequently underwent Senior Residency at Sir Ganga Ram Hospital (2020–2023), gaining extensive clinical and surgical experience in the field of ENT.
              </p>
              <p>
                Her special interests include microscopic ear surgery and endoscopic ENT surgeries, with a particular focus on advanced surgical management of ear and sinonasal disorders. She has experience in the evaluation and management of various ENT conditions and is committed to adopting evidence-based, minimally invasive surgical techniques whenever appropriate.
              </p>
              <p>
                Dr. Garg has also been actively involved in academic activities, including presentations at national and state-level conferences, temporal bone dissection training, and publications in peer-reviewed medical journals. She has received recognition as <strong className="text-slate-800">&quot;Best Dissector&quot;</strong> in multiple temporal bone dissection courses.
              </p>
              <p>
                Her professional approach combines clinical expertise, meticulous surgical technique and compassionate patient care, with an emphasis on accurate diagnosis, appropriate treatment and good long-term outcomes.
              </p>
            </div>

            {/* Memberships */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0e4e50] bg-[#f0f8f7] border border-teal-200 px-3 py-1.5 rounded-sm">
                <BookOpen className="w-3.5 h-3.5" />
                Life Member — AOI (LM: 5972)
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-sm">
                <BookOpen className="w-3.5 h-3.5" />
                Delhi AOI Member (2022)
              </span>
            </div>

            {/* Education timeline */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-5">Education &amp; Training</h3>
              <div className="space-y-0 border-l-2 border-[#d4e8e8] pl-6">
                {[
                  {
                    degree: 'MBBS',
                    institution: 'Coimbatore Government Medical College',
                    sub: 'Tamil Nadu',
                    year: '2009 – 2015',
                    icon: <GraduationCap className="w-4 h-4" />,
                  },
                  {
                    degree: 'DNB — ENT',
                    institution: 'HBT Medical College & Dr. R. N. Cooper Municipal General Hospital',
                    sub: 'Mumbai',
                    year: '2017 – 2020',
                    icon: <FileText className="w-4 h-4" />,
                  },
                  {
                    degree: 'Senior Resident, ENT',
                    institution: 'Sir Ganga Ram Hospital',
                    sub: 'New Delhi',
                    year: '2020 – 2023',
                    icon: <Building className="w-4 h-4" />,
                  },
                  {
                    degree: 'Clinical Assistant, ENT',
                    institution: 'Sir Ganga Ram Hospital',
                    sub: 'New Delhi',
                    year: 'March 2025 – June 2026',
                    icon: <Building className="w-4 h-4" />,
                  },
                  {
                    degree: 'Associate Consultant, ENT',
                    institution: 'Sir Ganga Ram Hospital',
                    sub: 'New Delhi',
                    year: 'July 2026 – Present',
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
                      <p className="text-[11.5px] text-slate-400 mt-0.5">Pocket 4, Main Road, Mayur Vihar Phase-1, New Delhi</p>
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
