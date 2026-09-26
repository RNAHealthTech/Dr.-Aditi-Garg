'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24">
      {/* Dynamic Header Banner */}
      <div className="relative bg-[#0e4e50] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto font-light">
            Whether you have a medical query or want to book an appointment, our team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Contact Details & Cards (Left Column) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Phone Card */}
            <a href="tel:+911142254000" className="block bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-slate-200/40 border border-slate-100 hover:-translate-y-1 hover:shadow-xl hover:border-teal-300 transition-all duration-300 group">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center text-[#0e4e50] group-hover:bg-[#0e4e50] group-hover:text-white transition-colors duration-300 shadow-inner">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-1">Helpline</p>
                  <p className="text-xl font-bold text-slate-900">+91 11-4225 4000</p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a href="mailto:draditi.garg90@gmail.com" className="block bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-slate-200/40 border border-slate-100 hover:-translate-y-1 hover:shadow-xl hover:border-teal-300 transition-all duration-300 group">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center text-[#0e4e50] group-hover:bg-[#0e4e50] group-hover:text-white transition-colors duration-300 shadow-inner">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-lg font-bold text-slate-900 truncate">draditi.garg90@gmail.com</p>
                </div>
              </div>
            </a>

            {/* Location Cards */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg shadow-slate-200/40 border border-slate-100 relative overflow-hidden">
              <h3 className="text-xl font-bold font-serif text-slate-900 mb-6">Clinic Locations</h3>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <MapPin className="w-6 h-6 text-[#0e4e50] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-[#0e4e50] transition-colors">Sir Ganga Ram Hospital</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">Room No. F-87, Sir Ganga Ram Hospital Marg, Rajinder Nagar, New Delhi, 110060</p>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div className="flex gap-4 group">
                  <MapPin className="w-6 h-6 text-[#0e4e50] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-[#0e4e50] transition-colors">Shivasha ENT Clinic</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">148 B Pocket 4, Opp. Arya Samaj Mandir, Mayur Vihar Phase 1, New Delhi, 110091</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-teal-900/10 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
              
              <div className="mb-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold tracking-widest uppercase mb-4">
                  <MessageSquare className="w-3 h-3" />
                  Send a Message
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-900">Reach out directly</h2>
                <p className="text-slate-500 mt-2">Fill out the form below and our coordinator will get back to you promptly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700">Mobile Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 99999 99999"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700">Your Message / Query</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e4e50]/20 focus:border-[#0e4e50] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#0e4e50] hover:bg-[#093537] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-teal-900/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">Sending...</span>
                    ) : submitted ? (
                      <span className="flex items-center gap-2 text-teal-200">Message Sent <Send className="w-4 h-4" /></span>
                    ) : (
                      <span className="flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Booking Portal Banner */}
            <div className="mt-6 bg-[#0e4e50] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-teal-900/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
              <div>
                <h3 className="text-white font-bold font-serif text-xl">Ready for a consultation?</h3>
                <p className="text-teal-100 text-sm mt-1">Book directly via official hospital portal or Practo.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a 
                  href="https://appointment.sgrh.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white hover:bg-teal-50 text-[#0e4e50] px-5 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center gap-2"
                >
                  SGRH Portal
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.practo.com/delhi/doctor/aditi-garg-ear-nose-throat-ent-specialist-general-physician" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-teal-800/80 hover:bg-teal-700 border border-teal-400/30 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center gap-2"
                >
                  Practo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
