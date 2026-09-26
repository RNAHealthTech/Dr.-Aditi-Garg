'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Menu, X, Phone, MapPin } from 'lucide-react';

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
      <div className="bg-[#0c3e40] text-[#9fcece]/90 text-[11px] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#6bbdbd]" />
            Sir Ganga Ram Hospital, Rajinder Nagar &amp; Shivasha ENT Clinic, Mayur Vihar — New Delhi
          </span>
          <div className="flex items-center space-x-4">
            <a href="tel:+911142254000" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#6bbdbd]" />
              +91 11-4225 4000
            </a>
            <span className="opacity-30">|</span>
            <a href="mailto:draditi.garg90@gmail.com" className="hover:text-white transition-colors">
              draditi.garg90@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Dr. Aditi Garg — Home">
            <div className="w-9 h-9 flex items-center justify-center text-[#0e4e50] border border-[#c5d8d8] rounded-sm bg-[#f0f8f7] group-hover:bg-[#0e4e50] group-hover:border-[#0e4e50] group-hover:text-white transition-all duration-200">
              <EarLogoIcon className="w-5 h-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[17px] font-semibold tracking-tight text-[#0d3638] font-serif">
                Dr. Aditi Garg
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-slate-400 mt-0.5">
                ENT Specialist &amp; Surgeon
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-slate-500 hover:text-[#0e4e50] transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0e4e50] hover:after:w-full after:transition-all after:duration-200"
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
                className="inline-flex items-center gap-2 bg-[#0e4e50] hover:bg-[#0b3e40] text-white px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-colors duration-200 shadow-sm rounded-sm"
              >
                <Calendar className="w-3.5 h-3.5 opacity-75" />
                Book Appointment
              </button>
            ) : (
              <Link
                href="/contact"
                id="nav-book-appointment-btn"
                className="inline-flex items-center gap-2 bg-[#0e4e50] hover:bg-[#0b3e40] text-white px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-colors duration-200 shadow-sm rounded-sm"
              >
                <Calendar className="w-3.5 h-3.5 opacity-75" />
                Book Appointment
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-1.5 text-slate-600 hover:text-[#0e4e50] transition-colors"
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
                  className="px-3 py-2.5 text-[14px] font-medium text-slate-700 hover:text-[#0e4e50] hover:bg-[#f2f8f7] rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 mt-3 border-t border-slate-100">
              {onOpenAppointmentModal ? (
                <button
                  onClick={() => { setMobileMenuOpen(false); handleBookClick(); }}
                  className="w-full flex items-center justify-center gap-2 bg-[#0e4e50] text-white px-4 py-3 font-semibold text-sm rounded-sm shadow-sm"
                >
                  <Calendar className="w-4 h-4 opacity-75" />
                  Book Appointment
                </button>
              ) : (
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0e4e50] text-white px-4 py-3 font-semibold text-sm rounded-sm shadow-sm"
                >
                  <Calendar className="w-4 h-4 opacity-75" />
                  Book Appointment
                </Link>
              )}
              <div className="mt-4 text-[11px] text-slate-400 text-center space-y-1">
                <div><a href="tel:+911142254000" className="hover:text-[#0e4e50]">+91 11-4225 4000</a></div>
                <div><a href="mailto:draditi.garg90@gmail.com" className="hover:text-[#0e4e50]">draditi.garg90@gmail.com</a></div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
