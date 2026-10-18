'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Building2,
  MapPin,
  CheckCircle2,
  AlertCircle,
  FileText,
  Lock,
  ExternalLink,
  Loader2,
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedConcern?: string;
  defaultClinic?: 'sgrh' | 'shivasha';
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdeajnbp';
const CLINIC_PHONE = '+91-9289300329';

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedConcern = '',
  defaultClinic = 'sgrh',
}) => {
  const [clinic, setClinic] = useState<'sgrh' | 'shivasha'>(defaultClinic);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: '08:00 AM - 10:00 AM (Mon, Wed, Fri)',
    concern: preselectedConcern,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setClinic(defaultClinic);
      setFormData((prev) => ({
        ...prev,
        concern: preselectedConcern || prev.concern,
        timeSlot:
          defaultClinic === 'sgrh'
            ? '08:00 AM - 10:00 AM (Mon, Wed, Fri)'
            : '06:30 PM - 07:30 PM (Mon - Sat)',
      }));
      setSubmitted(false);
      setErrorMessage(null);
    }
  }, [isOpen, defaultClinic, preselectedConcern]);

  // Adjust default slot when switching clinic
  const handleClinicChange = (selected: 'sgrh' | 'shivasha') => {
    setClinic(selected);
    if (selected === 'sgrh') {
      setFormData((prev) => ({
        ...prev,
        timeSlot: '08:00 AM - 10:00 AM (Mon, Wed, Fri)',
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        timeSlot: '06:30 PM - 07:30 PM (Mon - Sat)',
      }));
    }
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const clinicName =
      clinic === 'sgrh'
        ? 'Sir Ganga Ram Hospital (Rajinder Nagar)'
        : 'Shivasha ENT Clinic (Mayur Vihar Phase-1)';

    const payload = {
      _subject: `New Appointment Request: ${formData.name} - ${clinic === 'sgrh' ? 'Sir Ganga Ram' : 'Shivasha Clinic'}`,
      doctor: 'Dr. Aditi Garg (Associate Consultant - ENT)',
      patientName: formData.name,
      phoneNumber: formData.phone,
      preferredClinic: clinicName,
      preferredDate: formData.date || 'Earliest available date',
      preferredTimeSlot: formData.timeSlot,
      patientConcern: formData.concern || 'General ENT consultation',
      clinicHelpline: CLINIC_PHONE,
      submissionSource: 'Website Appointment Modal',
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setErrorMessage(null);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage(
            'Unable to submit the form at this moment. Please call us directly at ' + CLINIC_PHONE
          );
        }
      }
    } catch {
      setErrorMessage(
        'Network error. Please check your internet connection or call ' + CLINIC_PHONE + ' directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: '',
      phone: '',
      date: '',
      timeSlot: '08:00 AM - 10:00 AM (Mon, Wed, Fri)',
      concern: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-50 text-[#1b6ea8] mx-auto flex items-center justify-center border border-teal-100 shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-serif">
              Appointment Request Sent
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your appointment request for{' '}
              <strong>{clinic === 'sgrh' ? 'Sir Ganga Ram Hospital' : 'Shivasha ENT Clinic'}</strong> has been received via Formspree.
              Our coordinator will contact you at <strong>{formData.phone}</strong> shortly to confirm.
            </p>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-left text-xs space-y-1.5 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-400">Clinic:</span>
                <span className="font-semibold text-slate-900">{clinic === 'sgrh' ? 'Sir Ganga Ram Hospital' : 'Shivasha ENT Clinic'}</span>
              </div>
              {formData.date && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Preferred Date:</span>
                  <span className="font-semibold text-slate-900">{formData.date}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-400">Slot:</span>
                <span className="font-semibold text-slate-900">{formData.timeSlot}</span>
              </div>
            </div>

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={`tel:${CLINIC_PHONE.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#1b6ea8] hover:bg-[#155887] py-3 px-4 rounded-xl shadow-md transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Urgent inquiry? Call {CLINIC_PHONE}</span>
              </a>

              {clinic === 'sgrh' && (
                <a
                  href="https://appointment.sgrh.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#1b6ea8] hover:underline"
                >
                  <span>Or book directly via Sir Ganga Ram Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={handleResetAndClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl font-semibold text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[#1b6ea8] uppercase mb-1">
              <span className="w-4 h-[2px] bg-[#1b6ea8]"></span>
              <span>Schedule Consultation</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 font-serif">
              Book with Dr. Aditi Garg
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Associate Consultant, ENT — Sir Ganga Ram Hospital &amp; Shivasha ENT Clinic
            </p>

            {/* Helpline quick-call strip */}
            <div className="mb-4 flex items-center justify-between p-2.5 px-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs">
              <span className="text-slate-600 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#1b6ea8]" />
                Appointment Helpline:
              </span>
              <a
                href={`tel:${CLINIC_PHONE.replace(/[^0-9+]/g, '')}`}
                className="font-bold text-[#1b6ea8] hover:underline"
              >
                {CLINIC_PHONE}
              </a>
            </div>

            {/* Clinic Selector Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100/80 rounded-xl mb-4 text-xs font-semibold">
              <button
                type="button"
                onClick={() => handleClinicChange('sgrh')}
                className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  clinic === 'sgrh'
                    ? 'bg-white text-[#1b6ea8] shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Sir Ganga Ram</span>
              </button>

              <button
                type="button"
                onClick={() => handleClinicChange('shivasha')}
                className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  clinic === 'shivasha'
                    ? 'bg-white text-[#1b6ea8] shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Shivasha Clinic</span>
              </button>
            </div>

            {/* Timings info pill based on clinic */}
            <div className="bg-teal-50/70 border border-teal-100 rounded-xl p-3 mb-4 text-[11px] text-[#1b6ea8]">
              {clinic === 'sgrh' ? (
                <div>
                  <strong>Sir Ganga Ram Hospital:</strong> Room F-87, Rajinder Nagar •{' '}
                  <strong>Mon, Wed, Fri (8:00 AM – 3:00 PM) • Tue, Thu, Sat (9:00 AM – 3:00 PM)</strong>
                </div>
              ) : (
                <div>
                  <strong>Shivasha ENT Clinic:</strong> Mayur Vihar Phase-1, Opp. Arya Samaj Mandir •{' '}
                  <strong>Mon – Sat (6:30 PM – 8:30 PM)</strong>
                </div>
              )}
            </div>

            {/* Error banner if submission failed */}
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p>{errorMessage}</p>
                  <a
                    href={`tel:${CLINIC_PHONE.replace(/[^0-9+]/g, '')}`}
                    className="font-bold underline flex items-center gap-1 pt-1"
                  >
                    <Phone className="w-3 h-3" /> Call {CLINIC_PHONE} directly
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1b6ea8]/20 focus:border-[#1b6ea8]"
                />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Mobile Number * (e.g. 9289300329)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1b6ea8]/20 focus:border-[#1b6ea8]"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1b6ea8]/20 focus:border-[#1b6ea8]"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full pl-10 pr-2 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1b6ea8]/20 focus:border-[#1b6ea8]"
                  >
                    {clinic === 'sgrh' ? (
                      <>
                        <option value="08:00 AM - 10:00 AM (Mon, Wed, Fri)">
                          08:00 AM - 10:00 AM (Mon, Wed, Fri)
                        </option>
                        <option value="09:00 AM - 11:00 AM (Tue, Thu, Sat)">
                          09:00 AM - 11:00 AM (Tue, Thu, Sat)
                        </option>
                        <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                        <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
                      </>
                    ) : (
                      <>
                        <option value="06:30 PM - 07:30 PM (Mon - Sat)">
                          06:30 PM - 07:30 PM (Mon - Sat)
                        </option>
                        <option value="07:30 PM - 08:30 PM (Mon - Sat)">
                          07:30 PM - 08:30 PM (Mon - Sat)
                        </option>
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
                  name="concern"
                  placeholder="Primary concern (e.g. Ear discharge, Nose block, Voice issue)"
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1b6ea8]/20 focus:border-[#1b6ea8]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1b6ea8] hover:bg-[#155887] text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-md transition-all mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <span>Confirm Appointment Request</span>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Zero spam. Direct submission to Dr. Aditi Garg clinic coordinator.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
