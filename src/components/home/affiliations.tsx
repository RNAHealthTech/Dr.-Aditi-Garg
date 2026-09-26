'use client';

import React from 'react';
import { MapPin, Clock, PhoneCall, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const clinics = [
  {
    num: '01',
    name: 'Sir Ganga Ram Hospital',
    type: 'Primary Hospital OPD',
    address: 'Room No. F-87, Department of ENT\nSir Ganga Ram Hospital Marg, Old Rajinder Nagar\nNew Delhi — 110060',
    days: 'Monday, Wednesday & Friday',
    timing: '8:00 AM – 10:00 AM',
    phone: '+91 11-4225 4000',
    link: 'https://appointment.sgrh.com',
    linkLabel: 'Book via SGRH Portal',
    primary: true,
    note: 'Insurance & TPA accepted for eligible surgical procedures',
  },
  {
    num: '02',
    name: 'Shivasha ENT Clinic',
    type: 'Private Evening Clinic',
    address: '148-B, Pocket-4\nOpposite Arya Samaj Mandir, Mayur Vihar Phase-1\nNew Delhi — 110091',
    days: 'Monday – Saturday',
    timing: '6:30 PM – 8:30 PM',
    phone: '',
    link: '/contact',
    linkLabel: 'Book Appointment',
    primary: false,
    note: 'Evening OPD for working patients & families',
  },
];

const Affiliations = () => {
  return (
    <section id="clinics" className="py-20 sm:py-28 bg-white border-t border-[#e4e8e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">04</span>
            <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">Clinic Locations</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d3033] font-serif tracking-tight leading-tight">
              Where to See<br />Dr. Aditi Garg
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed">
              Conveniently located at two clinics in New Delhi. Choose the location and timing that best fits your schedule.
            </p>
          </div>
        </div>

        {/* Two clinic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clinics.map((clinic, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col border ${
                clinic.primary
                  ? 'bg-[#0d3638] text-white border-[#0d3638]'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-[#0e4e50]/40'
              } p-8 rounded-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300`}
            >
              {/* Type badge */}
              <div className={`mb-6`}>
                <span className={`inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm ${
                  clinic.primary
                    ? 'bg-white/15 text-white/80'
                    : 'bg-[#f0f8f7] text-[#0e4e50]'
                }`}>
                  {clinic.type}
                </span>
              </div>

              {/* Number + name */}
              <div className="mb-6">
                <div className={`text-[11px] font-bold tracking-[0.2em] mb-1 ${clinic.primary ? 'text-teal-300' : 'text-[#0e4e50]'}`}>
                  {clinic.num}
                </div>
                <h3 className={`text-2xl font-bold font-serif leading-tight ${clinic.primary ? 'text-white' : 'text-slate-900'}`}>
                  {clinic.name}
                </h3>
              </div>

              {/* Details */}
              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${clinic.primary ? 'text-teal-300' : 'text-[#0e4e50]'}`} />
                  <p className={`text-[13px] leading-relaxed whitespace-pre-line ${clinic.primary ? 'text-white/80' : 'text-slate-600'}`}>
                    {clinic.address}
                  </p>
                </div>

                <div className={`border-t ${clinic.primary ? 'border-white/15' : 'border-slate-100'} pt-4 space-y-2.5`}>
                  <div className="flex items-center gap-3">
                    <Calendar className={`w-4 h-4 ${clinic.primary ? 'text-teal-300' : 'text-[#0e4e50]'}`} />
                    <span className={`text-[13px] font-semibold ${clinic.primary ? 'text-white' : 'text-slate-800'}`}>
                      {clinic.days}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className={`w-4 h-4 ${clinic.primary ? 'text-teal-300' : 'text-[#0e4e50]'}`} />
                    <span className={`text-[15px] font-bold ${clinic.primary ? 'text-white' : 'text-slate-900'}`}>
                      {clinic.timing}
                    </span>
                  </div>
                  {clinic.phone && (
                    <div className="flex items-center gap-3">
                      <PhoneCall className={`w-4 h-4 ${clinic.primary ? 'text-teal-300' : 'text-[#0e4e50]'}`} />
                      <a
                        href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                        className={`text-[13px] font-medium transition-colors ${clinic.primary ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-[#0e4e50]'}`}
                      >
                        {clinic.phone}
                      </a>
                    </div>
                  )}
                </div>

                {clinic.note && (
                  <div className={`text-[11.5px] ${clinic.primary ? 'text-teal-300/80' : 'text-slate-400'} italic`}>
                    {clinic.note}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={clinic.link}
                  target={clinic.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-200 ${
                    clinic.primary
                      ? 'bg-white text-[#0d3638] hover:bg-teal-50 px-5 py-2.5 rounded-sm shadow-sm'
                      : 'border border-[#0e4e50] text-[#0e4e50] hover:bg-[#f0f8f7] px-5 py-2.5 rounded-sm'
                  }`}
                >
                  {clinic.linkLabel}
                  {clinic.link.startsWith('http') ? <ExternalLink className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Affiliations;
