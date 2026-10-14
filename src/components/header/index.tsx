'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Menu, X, Phone, MapPin } from 'lucide-react';
import { ShivashaEmblem } from '@/components/ui/shivasha-logo';

interface HeaderProps {
  onOpenAppointmentModal?: () => void;
}

export const EarLogoIcon = ({ className = "w-8 h-8 text-[#0e4e50]" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 4.5-3 6.5-4 8.5-.5 1-1 2.5-2.5 3-1 .3-2-.3-2.5-1.2C9.2 17.5 9 15.5 9 14a3 3 0 1 1 6 0" />
    <path d="M10 10a2 2 0 1 1 4 0c0 1-.5 1.8-1.5 2.2" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Expertise', href: '/expertise' },
    { label: 'Services', href: '/services' },
    { label: 'Timings', href: '/timings' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleBookClick = () => {
    if (onOpenAppointmentModal) {
      onOpenAppointmentModal();
    }
  };

  return (
    <>
      {/* Slim info bar */}
      <div className="bg-[#0f2942] text-[#b9dcf2]/90 text-[11px] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#7ebfea]" />
            Sir Ganga Ram Hospital, Rajinder Nagar &amp; Shivasha ENT Clinic, Mayur Vihar — New Delhi
          </span>
          <div className="flex items-center space-x-4">
            <a href="tel:+919289300329" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#7ebfea]" />
              +91-9289300329
            </a>
            <span className="opacity-30">|</span>
            <a href="mailto:draditigarg90@gmail.com" className="hover:text-white transition-colors">
              draditigarg90@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 relative ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-white/90 backdrop-blur-sm py-4'
          }`}
      >
        {/* Subtle 3-color accent line at the bottom of header */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DE4937] via-[#2787C8] to-[#F1AA37] opacity-90" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Dr. Aditi Garg | Shivasha ENT Clinic — Home">
            <div className="w-12 h-6 sm:w-14 sm:h-7 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0">
              <ShivashaEmblem className="w-full h-full aspect-[300/145] drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[17px] font-semibold tracking-tight text-[#0f2942] font-serif group-hover:text-[#1b6ea8] transition-colors">
                Dr. Aditi Garg
              </span>
              <span className="text-[9px] tracking-[0.16em] uppercase font-bold text-slate-500 mt-1 flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DE4937]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2787C8]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F1AA37]" />
                </span>
                <span>Shivasha ENT Clinic</span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-slate-500 hover:text-[#1b6ea8] transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1b6ea8] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            {onOpenAppointmentModal ? (
              <button
                onClick={handleBookClick}
                id="nav-book-appointment-btn"
                className="inline-flex items-center gap-2 bg-[#1b6ea8] hover:bg-[#155887] text-white px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-colors duration-200 shadow-sm rounded-sm"
              >
                <Calendar className="w-3.5 h-3.5 opacity-75" />
                Book Appointment
              </button>
            ) : (
              <Link
                href="/contact"
                id="nav-book-appointment-btn"
                className="inline-flex items-center gap-2 bg-[#1b6ea8] hover:bg-[#155887] text-white px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-colors duration-200 shadow-sm rounded-sm"
              >
                <Calendar className="w-3.5 h-3.5 opacity-75" />
                Book Appointment
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-1.5 text-slate-600 hover:text-[#1b6ea8] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 animate-fade-in">
            <nav className="flex flex-col space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-[14px] font-medium text-slate-700 hover:text-[#1b6ea8] hover:bg-[#f0f7fc] rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 mt-3 border-t border-slate-100">
              {onOpenAppointmentModal ? (
                <button
                  onClick={() => { setMobileMenuOpen(false); handleBookClick(); }}
                  className="w-full flex items-center justify-center gap-2 bg-[#1b6ea8] text-white px-4 py-3 font-semibold text-sm rounded-sm shadow-sm"
                >
                  <Calendar className="w-4 h-4 opacity-75" />
                  Book Appointment
                </button>
              ) : (
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#1b6ea8] text-white px-4 py-3 font-semibold text-sm rounded-sm shadow-sm"
                >
                  <Calendar className="w-4 h-4 opacity-75" />
                  Book Appointment
                </Link>
              )}
              <div className="mt-4 text-[11px] text-slate-400 text-center space-y-1">
                <div><a href="tel:+919289300329" className="hover:text-[#1b6ea8]">+91-9289300329</a></div>
                <div><a href="mailto:draditigarg90@gmail.com" className="hover:text-[#1b6ea8]">draditigarg90@gmail.com</a></div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
