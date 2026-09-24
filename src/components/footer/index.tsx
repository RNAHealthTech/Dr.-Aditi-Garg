'use client';

import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  ExternalLink,
  Building2,
  Calendar,
  Shield,
} from 'lucide-react';
import { EarLogoIcon } from '../header';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#052224] text-slate-300 pt-16 pb-12 border-t border-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-teal-900/60">
          
          {/* Col 1: Doctor Profile & Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-900/60 border border-teal-700/50 flex items-center justify-center text-teal-300">
                <EarLogoIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold font-serif text-white tracking-tight block">
                  Dr. Aditi Garg
                </span>
                <span className="text-[10px] uppercase font-semibold text-teal-300 tracking-wider">
                  ENT Specialist & Surgeon
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Associate Consultant in ENT at Sir Ganga Ram Hospital, New Delhi. Dedicated to delivering patient-centric, evidence-based medical and advanced endoscopic surgical care for ear, nose, throat, head & neck disorders.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/shivasha_ent_clinic/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-teal-900/50 border border-teal-700/40 hover:bg-teal-700 hover:text-white flex items-center justify-center text-teal-300 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.practo.com/delhi/doctor/aditi-garg-ear-nose-throat-ent-specialist-general-physician"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-teal-900/50 border border-teal-700/40 hover:bg-teal-700 text-teal-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Practo Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://sgrh.com/doctor-details/ent/dr-aditi-garg"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-teal-900/50 border border-teal-700/40 hover:bg-teal-700 text-teal-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>SGRH Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Hospital Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Building2 className="w-4 h-4 text-teal-400" />
              <span>Sir Ganga Ram Hospital</span>
            </h4>
            <div className="text-xs text-slate-400 space-y-2">
              <p className="leading-relaxed">
                Department of ENT, Room F-87, Sir Ganga Ram Hospital Marg, Old Rajinder Nagar, New Delhi - 110060
              </p>
              <div className="flex items-center gap-2 text-teal-300 font-semibold pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon, Wed, Fri (8:00 AM – 10:00 AM)</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <a href="tel:+911142254000" className="hover:text-white">+91 11-4225 4000</a>
              </div>
            </div>
          </div>

          {/* Col 3: Private Clinic Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>Shivasha ENT Clinic</span>
            </h4>
            <div className="text-xs text-slate-400 space-y-2">
              <p className="leading-relaxed">
                148-B, Pocket-4, Opposite Arya Samaj Mandir, Mayur Vihar Phase-1, New Delhi - 110091
              </p>
              <div className="flex items-center gap-2 text-teal-300 font-semibold pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon – Sat (6:30 PM – 8:30 PM)</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <a href="mailto:draditi.garg90@gmail.com" className="hover:text-white">draditi.garg90@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-teal-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-300 transition-colors">About Dr. Aditi</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">ENT Services</a></li>
              <li><a href="#expertise" className="hover:text-teal-300 transition-colors">Surgical Expertise</a></li>
              <li><a href="#timings" className="hover:text-teal-300 transition-colors">OPD Timings</a></li>
              <li><a href="#appointment-form" className="hover:text-teal-300 font-semibold text-teal-300">Book Appointment</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Dr. Aditi Garg (MBBS, DNB - ENT). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Medical Consultant — ENT</span>
            <span>•</span>
            <span>New Delhi, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;