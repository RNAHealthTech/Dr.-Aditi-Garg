'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Users,
  ShieldCheck,
  Cog,
  User,
  Phone,
  Calendar,
  Clock,
  FileText,
  Lock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface HeroSectionProps {
  onSuccessSubmit?: (data: any) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSuccessSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: 'Morning (08:00 AM - 10:00 AM)',
    concern: '',
    clinicLocation: 'Sir Ganga Ram Hospital',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccessSubmit) {
        onSuccessSubmit(formData);
      }
    }, 800);
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#f4faf9] via-[#edf7f5] to-[#fbfdfc] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Background Clinic Texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-cover bg-center pointer-events-none -z-10"
        style={{ backgroundImage: "url('/images/clinic-bg.jpg')" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Headline & Value Propositions */}
          <div className="lg:col-span-4 z-10 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0e4e50] uppercase">
              <span className="w-6 h-[2px] bg-[#0e4e50]"></span>
              <span>ENT Specialist in New Delhi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-[54px] font-bold tracking-tight text-[#113a3d] font-serif leading-[1.12]">
              Expert ENT Care,
              <br />
              <span className="text-[#0e4e50]">With a Personal</span>
              <br />
              Approach
            </h1>

            <div className="space-y-1">
              <div className="text-lg font-bold text-slate-900 tracking-tight">
                MBBS, DNB – ENT
              </div>
              <div className="text-sm font-medium text-slate-600">
                Associate Consultant, ENT
              </div>
            </div>

            {/* 3 Inline Circular Badge Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-teal-900/10 max-w-md">
              {/* Item 1 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 group">
                <div className="w-12 h-12 rounded-full bg-[#dcf2ee] flex items-center justify-center text-[#0e4e50] group-hover:scale-105 group-hover:bg-[#0e4e50] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  Patient
                  <br />
                  Centred Care
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 group">
                <div className="w-12 h-12 rounded-full bg-[#dcf2ee] flex items-center justify-center text-[#0e4e50] group-hover:scale-105 group-hover:bg-[#0e4e50] group-hover:text-white transition-all duration-300 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  Evidence Based
                  <br />
                  Treatment
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 group">
                <div className="w-12 h-12 rounded-full bg-[#dcf2ee] flex items-center justify-center text-[#0e4e50] group-hover:scale-105 group-hover:bg-[#0e4e50] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Cog className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  Advanced
                  <br />
                  ENT Procedures
                </span>
              </div>
            </div>
          </div>

          {/* Center Column: High Quality Doctor Portrait */}
          <div className="lg:col-span-4 flex justify-center items-end relative -mb-4 lg:mb-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
              {/* Subtle organic back aura */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-200/50 via-teal-100/20 to-transparent rounded-t-[140px] -z-10 transform scale-95" />
              
              <div className="relative overflow-hidden rounded-t-[140px] border-b-0 border-4 border-white/60 shadow-2xl">
                <Image
                  src="/images/dr-aditi-hero.jpg"
                  alt="Dr. Aditi Garg - ENT Specialist & Surgeon"
                  width={600}
                  height={800}
                  priority
                  className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Verified Doctor Badge */}
              <div className="absolute bottom-4 left-2 sm:-left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-teal-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 text-teal-700 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#0e4e50]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 leading-none">Sir Ganga Ram Hospital</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Associate Consultant ENT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Booking Card */}
          <div id="appointment-form" className="lg:col-span-4 z-10">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-100 relative">
              
              {/* Top Card Tag */}
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[#0e4e50] uppercase mb-1">
                <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
                <span>Book An Appointment</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 font-serif">
                Request an Appointment
              </h2>
              <p className="text-xs text-slate-500 mt-1 mb-5">
                Get expert ENT consultation with Dr. Aditi Garg
              </p>

              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-[#0e4e50] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg font-serif">Appointment Requested!</h3>
                  <p className="text-xs text-slate-600">
                    Thank you, <strong>{formData.fullName}</strong>. Our clinic team will call you at{' '}
                    <strong>{formData.phoneNumber}</strong> to confirm your slot for {formData.preferredDate || 'upcoming OPD'}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        preferredDate: '',
                        preferredTime: 'Morning (08:00 AM - 10:00 AM)',
                        concern: '',
                        clinicLocation: 'Sir Ganga Ram Hospital',
                      });
                    }}
                    className="text-xs font-semibold text-[#0e4e50] underline hover:text-[#093537]"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Full Name */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50] transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50] transition-all"
                    />
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Preferred Date */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50/70 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50] transition-all"
                      />
                    </div>

                    {/* Preferred Time Dropdown */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50] transition-all appearance-none cursor-pointer"
                      >
                        <option value="SGRH OPD (Mon, Wed, Fri 8-10 AM)">SGRH (8:00 - 10:00 AM)</option>
                        <option value="Shivasha Clinic (Mon-Sat 6:30-8:30 PM)">Shivasha (6:30 - 8:30 PM)</option>
                        <option value="Flexible / Callback Request">Callback for Preferred Slot</option>
                      </select>
                    </div>
                  </div>

                  {/* Your Concern */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 pt-3 pointer-events-none text-slate-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Your Concern (e.g., Sinusitis, Hearing Loss, Ear Pain)"
                      value={formData.concern}
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0e4e50] hover:bg-[#083032] text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group mt-2"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Request Appointment'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Secure Privacy Note */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your information is secure with us.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
