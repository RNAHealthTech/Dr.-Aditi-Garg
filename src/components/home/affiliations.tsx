'use client';

import React from 'react';
import { MapPin, Clock, PhoneCall, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import {
  ScrollReveal,
  ScrollStagger,
  ScrollStaggerItem,
  ScrollParagraph,
  ScrollHeading,
} from '@/components/ui/scroll-animation';

const clinics = [
  {
    num: '01',
    name: 'Sir Ganga Ram Hospital',
    type: 'Primary Hospital OPD',
    address: 'Room No. F-87, Department of ENT\nSir Ganga Ram Hospital Marg, Old Rajinder Nagar\nNew Delhi — 110060',
    days: 'Monday through Saturday',
    timing: 'Mon, Wed, Fri: 8:00 AM – 3:00 PM\nTue, Thu, Sat: 9:00 AM – 3:00 PM',
    phone: '+91 9289300329',
    link: 'https://appointment.sgrh.com',
    linkLabel: 'Book via SGRH Portal',
    primary: true,
    note: 'Insurance & TPA accepted for eligible surgical procedures',
  },
  {
    num: '02',
    name: 'Shivasha ENT Clinic',
    type: 'Private Evening Clinic',
    address: 'Pocket 4, Main Road\nMayur Vihar Phase-1\nNew Delhi — 110091',
    days: 'Monday – Saturday',
    timing: '6:30 PM – 8:30 PM',
    phone: '+91 9289300329',
    link: '/contact',
    linkLabel: 'Book Appointment',
    primary: false,
    note: 'Evening OPD for working patients & families',
  },
];

const Affiliations = () => {
  return (
    <section id="clinics" className="py-20 sm:py-28 bg-white border-t border-[#e4e8e5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <ScrollReveal direction="down">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">04</span>
              <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">Clinic Locations</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <ScrollHeading
              as="h2"
              direction="up"
              className="text-3xl sm:text-4xl font-bold text-[#0d3033] font-serif tracking-tight leading-tight"
            >
              Where to See<br />Dr. Aditi Garg
            </ScrollHeading>

            <ScrollParagraph
              mode="sentences"
              delay={0.1}
              className="text-[14px] text-slate-500 leading-relaxed"
            >
              Conveniently located at two clinics in New Delhi. Choose the location and timing that best fits your schedule.
            </ScrollParagraph>
          </div>
        </div>

        {/* Two clinic cards */}
        <ScrollStagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clinics.map((clinic, idx) => (
            <ScrollStaggerItem key={idx} direction="up" distance={30}>
              <div
                className={`relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  clinic.primary
                    ? 'bg-gradient-to-br from-[#0c3133] to-[#0e4e50] text-white shadow-xl shadow-teal-950/20 border border-teal-600/30'
                    : 'bg-white text-slate-900 border border-[#d6e4e2] hover:border-teal-400 shadow-md'
                } p-8 sm:p-10`}
              >
                {/* Top glow accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    clinic.primary ? 'bg-gradient-to-r from-teal-300 via-teal-400 to-amber-300' : 'bg-gradient-to-r from-[#0e4e50] to-teal-400'
                  }`}
                />

                {/* Type badge & Number */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`inline-block text-[11px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full ${
                      clinic.primary
                        ? 'bg-white/15 text-teal-200 border border-white/20'
                        : 'bg-teal-50 text-[#0e4e50] border border-teal-200/60'
                    }`}
                  >
                    {clinic.type}
                  </span>
                  <span className={`text-[12px] font-bold font-serif ${clinic.primary ? 'text-teal-300/80' : 'text-slate-400'}`}>
                    Location {clinic.num}
                  </span>
                </div>

                {/* Clinic name */}
                <div className="mb-6">
                  <h3 className={`text-2xl sm:text-[28px] font-bold font-serif leading-tight ${clinic.primary ? 'text-white' : 'text-slate-900'}`}>
                    {clinic.name}
                  </h3>
                </div>

                {/* Details */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <MapPin className={`w-4 h-4 shrink-0 mt-1 ${clinic.primary ? 'text-teal-300' : 'text-[#0e4e50]'}`} />
                    <p className={`text-[13.5px] leading-relaxed whitespace-pre-line ${clinic.primary ? 'text-teal-50/90' : 'text-slate-600'}`}>
                      {clinic.address}
                    </p>
                  </div>

                  <div className={`border-t ${clinic.primary ? 'border-white/15' : 'border-slate-100'} pt-4 space-y-3`}>
                    <div className="flex items-center gap-3">
                      <Calendar className={`w-4 h-4 ${clinic.primary ? 'text-teal-300' : 'text-[#0e4e50]'}`} />
                      <span className={`text-[13.5px] font-bold ${clinic.primary ? 'text-white' : 'text-slate-800'}`}>
                        {clinic.days}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className={`w-4 h-4 shrink-0 mt-0.5 ${clinic.primary ? 'text-teal-300' : 'text-[#0e4e50]'}`} />
                      <span className={`text-[13.5px] font-semibold whitespace-pre-line leading-relaxed ${clinic.primary ? 'text-teal-100' : 'text-slate-700'}`}>
                        {clinic.timing}
                      </span>
                    </div>
                    {clinic.phone && (
                      <div className="flex items-center gap-3">
                        <PhoneCall className={`w-4 h-4 ${clinic.primary ? 'text-teal-300' : 'text-[#0e4e50]'}`} />
                        <a
                          href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                          className={`text-[13.5px] font-bold transition-colors ${clinic.primary ? 'text-amber-300 hover:text-white' : 'text-[#0e4e50] hover:underline'}`}
                        >
                          {clinic.phone}
                        </a>
                      </div>
                    )}
                  </div>

                  {clinic.note && (
                    <div className={`text-[12px] pt-1 ${clinic.primary ? 'text-teal-200/80' : 'text-slate-500'} italic`}>
                      &bull; {clinic.note}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className={`mt-8 pt-6 border-t ${clinic.primary ? 'border-white/10' : 'border-slate-100'}`}>
                  <a
                    href={clinic.link}
                    target={clinic.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-2.5 text-[13.5px] font-bold transition-all duration-200 w-full py-3.5 rounded-full ${
                      clinic.primary
                        ? 'bg-white text-[#0d3638] hover:bg-teal-50 shadow-md hover:shadow-lg hover:scale-[1.02]'
                        : 'bg-[#0e4e50] text-white hover:bg-[#093537] shadow-sm hover:shadow-md hover:scale-[1.02]'
                    }`}
                  >
                    <span>{clinic.linkLabel}</span>
                    {clinic.link.startsWith('http') ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </a>
                </div>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>

      </div>
    </section>
  );
};

export default Affiliations;
