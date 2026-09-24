'use client';

import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Building2,
  MapPin,
  CheckCircle2,
  FileText,
  Lock,
  ExternalLink,
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedConcern?: string;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedConcern = '',
}) => {
  const [clinic, setClinic] = useState<'sgrh' | 'shivasha'>('sgrh');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (08:00 AM - 10:00 AM)',
    concern: preselectedConcern,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#dcf2ee] text-[#0e4e50] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-serif">
              Appointment Request Received
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <strong>{formData.name}</strong>. Your consultation request for{' '}
              <strong>{clinic === 'sgrh' ? 'Sir Ganga Ram Hospital' : 'Shivasha ENT Clinic'}</strong> has been registered.
              Our coordinator will contact you at <strong>{formData.phone}</strong> shortly.
            </p>

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href="https://appointment.sgrh.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#0e4e50] hover:underline"
              >
                <span>Or book via official Sir Ganga Ram Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full bg-[#0e4e50] hover:bg-[#083032] text-white py-3 rounded-xl font-semibold text-sm shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[#0e4e50] uppercase mb-1">
              <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
              <span>Schedule Consultation</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 font-serif">
              Book with Dr. Aditi Garg
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-5">
              Associate Consultant, ENT — Sir Ganga Ram Hospital & Shivasha ENT Clinic
            </p>

            {/* Clinic Selector Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100/80 rounded-xl mb-5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setClinic('sgrh')}
                className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  clinic === 'sgrh'
                    ? 'bg-white text-[#0e4e50] shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Sir Ganga Ram</span>
              </button>

              <button
                type="button"
                onClick={() => setClinic('shivasha')}
                className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  clinic === 'shivasha'
                    ? 'bg-white text-[#0e4e50] shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Shivasha Clinic</span>
              </button>
            </div>

            {/* Timings info pill based on clinic */}
            <div className="bg-teal-50/70 border border-teal-100 rounded-xl p-3 mb-4 text-[11px] text-[#0e4e50]">
              {clinic === 'sgrh' ? (
                <div>
                  <strong>Sir Ganga Ram Hospital:</strong> Room F-87, Rajinder Nagar • <strong>Mon, Wed, Fri (8:00 AM – 10:00 AM)</strong>
                </div>
              ) : (
                <div>
                  <strong>Shivasha ENT Clinic:</strong> Mayur Vihar Phase-1, Opp. Arya Samaj Mandir • <strong>Mon – Sat (6:30 PM – 8:30 PM)</strong>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50]"
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
                  placeholder="Mobile Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50]"
                />
              </div>

              {/* Date */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50]"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full pl-10 pr-2 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50]"
                  >
                    {clinic === 'sgrh' ? (
                      <>
                        <option value="08:00 AM - 09:00 AM">08:00 AM - 09:00 AM</option>
                        <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                      </>
                    ) : (
                      <>
                        <option value="06:30 PM - 07:30 PM">06:30 PM - 07:30 PM</option>
                        <option value="07:30 PM - 08:30 PM">07:30 PM - 08:30 PM</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Concern */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <FileText className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Primary concern (e.g. Ear discharge, Nose block, Voice hoarseness)"
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0e4e50] hover:bg-[#083032] text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-md transition-all mt-2"
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Appointment Request'}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Zero spam guarantee. Patient data is confidential.</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default AppointmentModal;
