'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Star, CheckCircle2, Quote, Sparkles, ExternalLink } from 'lucide-react';
import {
  ScrollReveal,
  ScrollStagger,
  ScrollStaggerItem,
  ScrollParagraph,
  ScrollHeading,
} from '@/components/ui/scroll-animation';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoColorDots, LogoColorBar } from '@/components/ui/shivasha-logo';

export const GOOGLE_REVIEWS_URL = 'https://share.google/Htr2yxz0AdRjeiNzB';

export const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

const testimonials = [
  {
    name: 'Rajesh Malhotra',
    initials: 'RM',
    location: 'Sir Ganga Ram Hospital',
    treatment: 'Endoscopic Sinus Surgery (FESS)',
    tag: 'Sinus & Nasal Surgery (Blue)',
    color: '#2787C8',
    pillBg: 'bg-blue-50 text-[#2787C8] border-blue-200/70',
    avatarGradient: 'from-[#0f2942] to-[#2787C8]',
    rating: 5,
    quote: 'Dr. Aditi Garg is extremely patient, kind, and thorough. After suffering from chronic sinus headaches and blocked breathing for 3 years, her accurate diagnosis and minimally invasive surgery gave me complete relief. Highly recommended for any ENT issues.',
  },
  {
    name: 'Pooja Verma',
    initials: 'PV',
    location: 'Shivasha ENT Clinic, Mayur Vihar',
    treatment: 'Vertigo & Balance Disorder Treatment',
    tag: 'Vertigo & Balance (Blue)',
    color: '#2787C8',
    pillBg: 'bg-blue-50 text-[#2787C8] border-blue-200/70',
    avatarGradient: 'from-[#1b6ea8] to-[#2787C8]',
    rating: 5,
    quote: 'I visited Dr. Aditi at Shivasha Clinic for severe dizziness and ear fullness. She explained the condition with utmost clarity and performed the balance maneuver right away. I felt remarkably better within 24 hours. A truly reassuring doctor.',
  },
  {
    name: 'Sunil Aggarwal',
    initials: 'SA',
    location: 'Sir Ganga Ram Hospital',
    treatment: 'Tympanoplasty — Eardrum Surgery',
    tag: 'Ear & Hearing Care (Red)',
    color: '#DE4937',
    pillBg: 'bg-red-50 text-[#DE4937] border-red-200/70',
    avatarGradient: 'from-[#DE4937] to-[#e66353]',
    rating: 5,
    quote: 'Outstanding doctor with exceptional surgical skills. She operated on my long-standing perforated eardrum. Post-operative care and follow-up was flawless, and my hearing is now completely restored.',
  },
  {
    name: 'Meenakshi Sundaram',
    initials: 'MS',
    location: 'Shivasha ENT Clinic, Mayur Vihar',
    treatment: 'Paediatric Tonsil & Adenoid Care',
    tag: 'Paediatric Throat Care (Yellow)',
    color: '#F1AA37',
    pillBg: 'bg-amber-50 text-[#b57715] border-amber-200/70',
    avatarGradient: 'from-[#c28420] to-[#F1AA37]',
    rating: 5,
    quote: 'Dr. Aditi was wonderful with my 6-year-old child who struggled with night mouth-breathing and recurrent throat infections. Her gentle approach made our child feel safe, and the treatment worked wonderfully.',
  },
];

const faqs = [
  {
    q: 'How can I book an appointment with Dr. Aditi Garg at Sir Ganga Ram Hospital?',
    a: 'Dr. Aditi Garg is available at Sir Ganga Ram Hospital (Room F-87, Department of ENT) on Monday, Wednesday, and Friday from 8:00 AM to 3:00 PM, and on Tuesday, Thursday, and Saturday from 9:00 AM to 3:00 PM. You can book an appointment directly through this website or through the Sir Ganga Ram Hospital appointment portal.',
  },
  {
    q: 'What are the consultation timings for Shivasha ENT Clinic in Mayur Vihar?',
    a: 'At Shivasha ENT Clinic (148-B Pocket-4, Opp. Arya Samaj Mandir, Mayur Vihar Phase-1, New Delhi), Dr. Aditi Garg is available Monday through Saturday from 6:30 PM to 8:30 PM.',
  },
  {
    q: 'Does Dr. Aditi Garg treat paediatric (children) ENT conditions?',
    a: 'Yes, Dr. Garg has extensive experience treating paediatric ENT disorders including paediatric airway conditions, chronic tonsillitis, adenoid hypertrophy, mouth breathing, glue ear/otitis media, and paediatric foreign body removal with gentle, child-friendly care.',
  },
  {
    q: 'Are ENT surgeries covered under health insurance at Sir Ganga Ram Hospital?',
    a: 'Yes, major ENT surgical procedures such as FESS, Tympanoplasty, Mastoidectomy, Septoplasty, and Microlaryngeal surgeries conducted at Sir Ganga Ram Hospital are eligible for cashless insurance and TPA reimbursements as per your policy terms.',
  },
];

const TestimonialsFaq: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => setActiveTestimonial((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActiveTestimonial((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  // Auto-play slider (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTestimonial((p) => (p === testimonials.length - 1 ? 0 : p + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="patient-stories" className="bg-[#f8fafc] border-t border-[#e4e8e5] overflow-hidden relative">
      {/* Background ambient medical glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Testimonials */}
      <div className="py-20 sm:py-28 border-b border-[#e4e8e5] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left label & Stats */}
            <div className="lg:col-span-4">
              <ScrollReveal direction="down" once>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1b6ea8]">05</span>
                  <LogoColorDots size="w-2 h-2" />
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1b6ea8]">Patient Stories</span>
                </div>
              </ScrollReveal>

              <ScrollHeading
                as="h2"
                direction="up"
                once
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f2942] font-serif tracking-tight leading-[1.12]"
              >
                Hear from<br />
                <span className="text-[#1b6ea8] italic">our patients.</span>
              </ScrollHeading>

              <ScrollParagraph
                mode="sentences"
                delay={0.1}
                once
                className="mt-4 text-[14px] text-slate-500 leading-relaxed"
              >
                Real experiences and verified recovery stories from patients treated at Sir Ganga Ram Hospital and Shivasha ENT Clinic.
              </ScrollParagraph>

              {/* Trust Badge with Google Reviews Link */}
              <ScrollReveal direction="up" delay={0.12} once>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 bg-white hover:bg-[#f0f7fc] border border-blue-100 hover:border-[#1b6ea8] px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all group cursor-pointer"
                  title="View reviews on Google"
                >
                  <GoogleIcon className="w-4 h-4 shrink-0" />
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[12.5px] font-bold text-[#0f2942]">
                    5.0 Star Rating
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium border-l border-slate-200 pl-2">
                    Google Reviews
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1b6ea8] group-hover:translate-x-0.5 transition-all" />
                </a>
              </ScrollReveal>

              {/* Quick Satisfaction Metrics */}
              <ScrollReveal direction="up" delay={0.14} once>
                <div className="grid grid-cols-2 gap-3 mt-6 max-w-xs">
                  <div className="bg-white/80 backdrop-blur-xs border border-slate-200/90 rounded-2xl p-3 shadow-2xs">
                    <div className="text-xl font-bold font-serif text-[#1b6ea8]">100%</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Compassionate Care</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-xs border border-slate-200/90 rounded-2xl p-3 shadow-2xs">
                    <div className="text-xl font-bold font-serif text-[#1b6ea8]">11+ Yrs</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Clinical Practice</div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Navigation & Direct Google Link */}
              <ScrollReveal direction="up" delay={0.16} once>
                <div className="flex items-center gap-3 mt-7">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 border border-slate-300 bg-white rounded-full flex items-center justify-center text-slate-600 hover:border-[#1b6ea8] hover:text-white hover:bg-[#1b6ea8] transition-all shadow-sm cursor-pointer active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-10 h-10 border border-slate-300 bg-white rounded-full flex items-center justify-center text-slate-600 hover:border-[#1b6ea8] hover:text-white hover:bg-[#1b6ea8] transition-all shadow-sm cursor-pointer active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-[12.5px] font-medium text-slate-500 ml-2 tracking-wide">
                    <span className="text-[#0f2942] font-bold">{activeTestimonial + 1}</span> of {testimonials.length}
                  </span>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/80">
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#1b6ea8] hover:text-[#155887] hover:underline transition-colors group"
                  >
                    <span>Read all patient stories on Google</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Premium Glassmorphic Testimonial Card */}
            <div className="lg:col-span-8">
              <ScrollReveal direction="left" distance={30} once>
                <div
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="bg-white border border-[#dbe6e4] p-8 sm:p-12 rounded-3xl shadow-[0_15px_45px_rgba(14,78,80,0.06)] relative overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(14,78,80,0.1)] group"
                >
                  {/* Top subtle 3-color brand accent bar */}
                  <LogoColorBar height="h-1.5" className="absolute top-0 left-0 right-0" />

                  {/* Decorative background quote mark */}
                  <div className="absolute top-6 right-8 text-teal-900/5 pointer-events-none select-none group-hover:text-teal-900/10 transition-colors">
                    <Quote className="w-24 h-24 rotate-180" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="relative z-10 flex flex-col justify-between min-h-[240px]"
                    >
                      <div>
                        {/* Top Meta: Stars & Treatment Tag & Google badge */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              ))}
                              <span className="text-[12px] font-bold text-amber-700 ml-1">5.0</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex items-center text-[11px] font-semibold border px-3.5 py-1 rounded-full uppercase tracking-wider ${testimonials[activeTestimonial].pillBg}`}>
                              {testimonials[activeTestimonial].tag}
                            </span>
                            <a
                              href={GOOGLE_REVIEWS_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 px-2.5 py-1 rounded-full transition-colors"
                              title="Verified Google Review"
                            >
                              <GoogleIcon className="w-3 h-3" />
                              <span>Google Review</span>
                              <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                            </a>
                          </div>
                        </div>

                        {/* Testimonial Quote */}
                        <p className="text-[17px] sm:text-[18.5px] text-slate-800 leading-[1.8] font-normal italic">
                          &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                        </p>
                      </div>

                      {/* Author Details - Synced inside animation */}
                      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${testimonials[activeTestimonial].avatarGradient} text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md ring-2 ring-slate-100`}>
                            {testimonials[activeTestimonial].initials}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[15.5px] font-bold text-slate-900">
                                {testimonials[activeTestimonial].name}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                Verified Patient
                              </span>
                            </div>
                            <div className="text-[12.5px] font-medium text-[#1b6ea8] mt-0.5">
                              {testimonials[activeTestimonial].treatment}
                            </div>
                            <div className="text-[12px] text-slate-500 mt-0.5">
                              {testimonials[activeTestimonial].location}
                            </div>
                          </div>
                        </div>

                        {/* Pagination indicator dots */}
                        <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                          {testimonials.map((t, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveTestimonial(i)}
                              className={`h-2.5 rounded-full transition-all duration-300 ${
                                i === activeTestimonial ? 'w-8' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                              }`}
                              style={{ backgroundColor: i === activeTestimonial ? t.color : undefined }}
                              aria-label={`Go to testimonial ${i + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom bar with Google Review link */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2 text-[12.5px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <GoogleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>Verified patient reviews from Sir Ganga Ram Hospital &amp; Shivasha Clinic</span>
                  </div>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1b6ea8] hover:text-[#0f2942] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Share your experience</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 sm:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left label */}
            <div className="lg:col-span-4">
              <ScrollReveal direction="down">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1b6ea8]">06</span>
                  <LogoColorDots size="w-2 h-2" />
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1b6ea8]">FAQs</span>
                </div>
              </ScrollReveal>

              <ScrollHeading
                as="h2"
                direction="up"
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0f2942] font-serif tracking-tight leading-tight"
              >
                Frequently Asked<br />
                <span className="text-[#1b6ea8] italic">Questions.</span>
              </ScrollHeading>

              <ScrollParagraph
                mode="sentences"
                delay={0.1}
                className="mt-4 text-[14px] text-slate-500 leading-relaxed"
              >
                Clear answers regarding consultations, OPD timings, insurance coverage, and surgical procedures.
              </ScrollParagraph>

              <ScrollReveal direction="up" delay={0.15}>
                <div className="mt-8 p-5 bg-white border border-[#d8e6e4] rounded-2xl shadow-sm">
                  <div className="text-[12.5px] font-bold text-slate-800">Have a specific question?</div>
                  <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">
                    Our clinic desk is available to assist you with appointment scheduling and queries.
                  </p>
                  <a
                    href="tel:+919289300329"
                    className="mt-3.5 inline-flex items-center gap-2 text-xs font-bold text-[#1b6ea8] hover:text-[#0b3839] hover:underline"
                  >
                    <span>Call +91-9289300329</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Modern Card Accordion */}
            <div className="lg:col-span-8">
              <ScrollStagger staggerDelay={0.08} className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  const faqThemeColors = ['#DE4937', '#2787C8', '#F1AA37', '#2787C8'];
                  const currentColor = faqThemeColors[idx % faqThemeColors.length];
                  return (
                    <ScrollStaggerItem key={idx} direction="up" distance={18}>
                      <div
                        className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? 'bg-white shadow-md'
                            : 'bg-white/70 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs'
                        }`}
                        style={{ borderColor: isOpen ? currentColor : undefined }}
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 group cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-start gap-3.5">
                            <span
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                                isOpen ? 'text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                              }`}
                              style={{ backgroundColor: isOpen ? currentColor : undefined }}
                            >
                              {idx + 1}
                            </span>
                            <span
                              className={`text-[15px] sm:text-[16px] font-semibold leading-snug transition-colors ${
                                isOpen ? 'text-[#0f2942]' : 'text-slate-800 group-hover:text-[#1b6ea8]'
                              }`}
                            >
                              {faq.q}
                            </span>
                          </div>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                              isOpen ? 'bg-teal-50 text-[#1b6ea8] rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                            }`}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out px-5 sm:px-6 ${
                            isOpen ? 'max-h-72 pb-6 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="pl-9.5 pt-1 border-t border-slate-100">
                            <p className="text-[14px] text-slate-600 leading-relaxed pt-3 font-normal">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollStaggerItem>
                  );
                })}
              </ScrollStagger>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default TestimonialsFaq;
