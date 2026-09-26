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
  Calendar,
} from 'lucide-react';
import { EarLogoIcon } from '../header';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#081c1d] text-slate-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/8">

          {/* Col 1: Brand */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-teal-800 bg-teal-900/40 text-teal-400 flex items-center justify-center rounded-sm">
                <EarLogoIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[17px] font-bold font-serif text-white tracking-tight">Dr. Aditi Garg</div>
                <div className="text-[9.5px] uppercase tracking-[0.2em] font-semibold text-teal-500 mt-0.5">
                  ENT Specialist &amp; Surgeon
                </div>
              </div>
            </div>

            <p className="text-[13px] text-slate-500 leading-relaxed">
              Associate Consultant in ENT at Sir Ganga Ram Hospital, New Delhi. Dedicated to patient-centred, evidence-based care for ear, nose, throat, head &amp; neck disorders.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/shivasha_ent_clinic/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm border border-teal-800/60 hover:border-teal-600 hover:bg-teal-900/40 flex items-center justify-center text-teal-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.practo.com/delhi/doctor/aditi-garg-ear-nose-throat-ent-specialist-general-physician"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold text-teal-500 hover:text-white border border-teal-800/60 hover:border-teal-600 px-2.5 py-1 rounded-sm flex items-center gap-1 transition-colors"
              >
                Practo <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://sgrh.com/doctor-details/ent/dr-aditi-garg"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold text-teal-500 hover:text-white border border-teal-800/60 hover:border-teal-600 px-2.5 py-1 rounded-sm flex items-center gap-1 transition-colors"
              >
                SGRH <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: SGRH */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
              Sir Ganga Ram Hospital
            </h4>
            <div className="space-y-3 text-[12.5px]">
              <div className="flex items-start gap-2.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Dept. of ENT, Room F-87, Sir Ganga Ram Hospital Marg, Old Rajinder Nagar, New Delhi 110060</span>
              </div>
              <div className="flex items-center gap-2.5 text-teal-400 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon, Wed, Fri — 8:00–10:00 AM</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-500">
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <a href="tel:+911142254000" className="hover:text-white transition-colors">+91 11-4225 4000</a>
              </div>
            </div>
          </div>

          {/* Col 3: Shivasha Clinic */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
              Shivasha ENT Clinic
            </h4>
            <div className="space-y-3 text-[12.5px]">
              <div className="flex items-start gap-2.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">148-B, Pocket-4, Opp. Arya Samaj Mandir, Mayur Vihar Phase-1, New Delhi 110091</span>
              </div>
              <div className="flex items-center gap-2.5 text-teal-400 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon–Sat — 6:30–8:30 PM</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-500">
                <Mail className="w-3.5 h-3.5 text-teal-600" />
                <a href="mailto:draditi.garg90@gmail.com" className="hover:text-white transition-colors">draditi.garg90@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Col 4: Links + CTA */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">Quick Links</h4>
            <ul className="space-y-2 text-[12.5px]">
              <li><a href="/" className="text-slate-500 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-slate-500 hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="/services" className="text-slate-500 hover:text-teal-400 transition-colors">ENT Services</a></li>
              <li><a href="/expertise" className="text-slate-500 hover:text-teal-400 transition-colors">Expertise</a></li>
              <li><a href="/timings" className="text-slate-500 hover:text-teal-400 transition-colors">OPD Timings</a></li>
              <li><a href="/gallery" className="text-slate-500 hover:text-teal-400 transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-slate-500 hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold bg-teal-700/30 hover:bg-teal-700/50 text-teal-300 px-3.5 py-2 rounded-sm transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
          <span>© {new Date().getFullYear()} Dr. Aditi Garg (MBBS, DNB - ENT). All rights reserved.</span>
          <div className="flex items-center gap-3">
            <span>ENT Specialist & Surgeon</span>
            <span className="opacity-30">•</span>
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
