import React from 'react';
import { Clock, MapPin, Building2, Calendar, Phone, AlertCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultation Timings | Dr. Aditi Garg',
  description: 'OPD Timings for Dr. Aditi Garg at Sir Ganga Ram Hospital and Shivasha ENT Clinic.',
};

export default function TimingsPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-24">
      {/* Dynamic Header Banner */}
      <div className="relative bg-[#0e4e50] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-400/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-800/40 rounded-full blur-[80px] -ml-20 -mb-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Consultation Timings
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto font-light">
            Plan your visit at your preferred location. Walk-ins are welcome, but prior appointments are highly recommended to reduce wait times.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        
        {/* Emergency Alert Banner */}
        <div className="bg-red-50/90 backdrop-blur-md border border-red-100 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-red-900/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-900">24/7 Emergency Support</h3>
              <p className="text-sm text-red-700">For urgent medical attention at Sir Ganga Ram Hospital</p>
            </div>
          </div>
          <a href="tel:+911142251097" className="shrink-0 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Call Casualty
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* SGRH Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-teal-100 text-[#0e4e50] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-teal-200/50">
                <Building2 className="w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Sir Ganga Ram Hospital</h2>
              <p className="text-teal-600 font-bold mb-8 uppercase tracking-wider text-xs">General / Private OPD</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-[#0e4e50]" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Days</p>
                    <p className="text-slate-900 font-semibold text-lg">Mon, Wed, Fri</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#0e4e50]" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Time</p>
                    <p className="text-slate-900 font-semibold text-lg">8:00 AM – 10:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#0e4e50]" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Location</p>
                    <p className="text-slate-700 font-medium leading-relaxed">Room No. F-87, Sir Ganga Ram Hospital Marg, Rajinder Nagar, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shivasha Clinic Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-indigo-200/50">
                <MapPin className="w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Shivasha ENT Clinic</h2>
              <p className="text-indigo-600 font-bold mb-8 uppercase tracking-wider text-xs">Evening Clinic</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-indigo-700" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Days</p>
                    <p className="text-slate-900 font-semibold text-lg">Mon - Sat</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-indigo-700" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Time</p>
                    <p className="text-slate-900 font-semibold text-lg">6:30 PM – 8:30 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-indigo-700" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Location</p>
                    <p className="text-slate-700 font-medium leading-relaxed">148 B Pocket 4, Opp. Arya Samaj Mandir, Mayur Vihar Phase 1, Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
