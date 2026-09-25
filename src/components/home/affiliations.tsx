'use client';

import React from 'react';
import { MapPin, Clock, PhoneCall, Calendar, ArrowRight } from 'lucide-react';

const clinics = [
  {
    name: 'Sir Ganga Ram Hospital (SGRH)',
    type: 'Private OPD',
    address: 'Room No. F-87, Sir Ganga Ram Hospital Marg, Rajinder Nagar, New Delhi, 110060',
    timings: 'Mon, Wed, Fri | 8:00 AM - 10:00 AM',
    phone: '+91-11-4225 4000',
    link: 'https://appointment.sgrh.com',
    primary: true,
  },
  {
    name: 'Shivasha ENT Clinic',
    type: 'Evening Clinic',
    address: '148 B Pocket 4, Opposite Aarya Samaj Mandir, Mayur Vihar Phase 1, New Delhi',
    timings: 'Monday - Saturday | 6:30 PM - 8:30 PM',
    phone: '+91 99999 99999', // Placeholder
    link: '#appointment-form',
    primary: false,
  }
];

const Affiliations = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f4faf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0e4e50] uppercase mb-3">
            <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
            <span>Visit Us</span>
            <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#113a3d] font-serif tracking-tight">
            Clinic Locations & Timings
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Conveniently located in New Delhi. Book your appointment at a location and time that suits you best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clinics.map((clinic, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl p-8 border ${
                clinic.primary 
                  ? 'bg-white border-[#0e4e50]/20 shadow-lg shadow-teal-900/5 relative overflow-hidden' 
                  : 'bg-white border-slate-100 shadow-md'
              }`}
            >
              {clinic.primary && (
                <div className="absolute top-0 right-0 bg-[#0e4e50] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Primary Location
                </div>
              )}
              
              <div className="inline-block px-3 py-1 bg-teal-50 text-[#0e4e50] text-xs font-semibold rounded-full mb-4">
                {clinic.type}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 font-serif mb-6">
                {clinic.name}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">{clinic.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                  <p className="text-sm font-semibold text-slate-700">{clinic.timings}</p>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-teal-600 shrink-0" />
                  <p className="text-sm text-slate-600">{clinic.phone}</p>
                </div>
              </div>

              <a 
                href={clinic.link}
                target={clinic.link.startsWith('http') ? "_blank" : "_self"}
                rel="noreferrer"
                className={`inline-flex items-center justify-center w-full gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  clinic.primary
                    ? 'bg-[#0e4e50] text-white hover:bg-[#083032] shadow-md hover:shadow-lg'
                    : 'bg-teal-50 text-[#0e4e50] hover:bg-teal-100'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Here</span>
                {clinic.primary && <ArrowRight className="w-4 h-4" />}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
