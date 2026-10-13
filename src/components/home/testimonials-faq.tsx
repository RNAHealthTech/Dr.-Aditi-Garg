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
    tag: 'Sinus & Nasal Surgery',
    rating: 5,
    quote: 'Dr. Aditi Garg is extremely patient, kind, and thorough. After suffering from chronic sinus headaches and blocked breathing for 3 years, her accurate diagnosis and minimally invasive surgery gave me complete relief. Highly recommended for any ENT issues.',
  },
  {
    name: 'Pooja Verma',
    initials: 'PV',
    location: 'Shivasha ENT Clinic, Mayur Vihar',
    treatment: 'Vertigo & Balance Disorder Treatment',
    tag: 'Vertigo & Dizziness',
    rating: 5,
    quote: 'I visited Dr. Aditi at Shivasha Clinic for severe dizziness and ear fullness. She explained the condition with utmost clarity and performed the balance maneuver right away. I felt remarkably better within 24 hours. A truly reassuring doctor.',
  },
  {
    name: 'Sunil Aggarwal',
    initials: 'SA',
    location: 'Sir Ganga Ram Hospital',
    treatment: 'Tympanoplasty — Eardrum Surgery',
    tag: 'Ear & Hearing Care',
    rating: 5,
    quote: 'Outstanding doctor with exceptional surgical skills. She operated on my long-standing perforated eardrum. Post-operative care and follow-up was flawless, and my hearing is now completely restored.',
  },
  {
    name: 'Meenakshi Sundaram',
    initials: 'MS',
    location: 'Shivasha ENT Clinic, Mayur Vihar',
    treatment: 'Paediatric Tonsil & Adenoid Care',
    tag: 'Paediatric ENT',
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
    <section id="patient-stories" className="bg-[#faf9f7] border-t border-[#e4e8e5] overflow-hidden">

      {/* Testimonials */}
      <div className="py-20 sm:py-24 border-b border-[#e4e8e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left label */}
            <div className="lg:col-span-4">
              <ScrollReveal direction="down" once>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">05</span>
                  <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">Patient Stories</span>
                </div>
              </ScrollReveal>

              <ScrollHeading
                as="h2"
                direction="up"
                once
                className="text-3xl sm:text-4xl font-bold text-[#0d3033] font-serif tracking-tight leading-tight"
              >
                Hear from<br />our patients.
              </ScrollHeading>

              <ScrollParagraph
                mode="sentences"
                delay={0.1}
                once
                className="mt-4 text-[13.5px] text-slate-500 leading-relaxed"
              >
                Real experiences from patients treated at Sir Ganga Ram Hospital and Shivasha ENT Clinic.
              </ScrollParagraph>

              {/* Trust Badge with Google Reviews Link */}
              <ScrollReveal direction="up" delay={0.12} once>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2.5 bg-white hover:bg-[#f0f7f6] border border-[#d2e7e4] hover:border-[#0e4e50] px-4 py-2 rounded-full shadow-2xs hover:shadow-xs transition-all group cursor-pointer"
                  title="View reviews on Google"
                >
                  <GoogleIcon className="w-4 h-4 shrink-0" />
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[12px] font-semibold text-[#0d3033]">
                    5.0 on Google Reviews
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0e4e50] group-hover:translate-x-0.5 transition-all" />
                </a>
              </ScrollReveal>

              {/* Navigation & Direct Google Link */}
              <ScrollReveal direction="up" delay={0.15} once>
                <div className="flex items-center gap-3 mt-8">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 border border-slate-300 bg-white rounded-md flex items-center justify-center text-slate-600 hover:border-[#0e4e50] hover:text-[#0e4e50] hover:bg-[#f0f7f6] transition-all shadow-2xs cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-10 h-10 border border-slate-300 bg-white rounded-md flex items-center justify-center text-slate-600 hover:border-[#0e4e50] hover:text-[#0e4e50] hover:bg-[#f0f7f6] transition-all shadow-2xs cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-[12.5px] font-medium text-slate-500 ml-2 tracking-wide">
                    <span className="text-[#0d3033] font-semibold">{activeTestimonial + 1}</span> / {testimonials.length}
                  </span>
                </div>

                <div className="mt-7 pt-5 border-t border-slate-200/80">
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#0e4e50] hover:text-[#093537] hover:underline transition-colors group"
                  >
                    <span>Read all patient reviews on Google</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Testimonial Card */}
            <div className="lg:col-span-8">
              <ScrollReveal direction="left" distance={30} once>
                <div
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="bg-white border border-[#e4e8e5] p-8 sm:p-10 rounded-lg shadow-xs min-h-[300px] relative overflow-hidden transition-shadow hover:shadow-md"
                >
                  {/* Decorative background quote mark */}
                  <div className="absolute top-4 right-6 text-slate-100 pointer-events-none select-none">
                    <Quote className="w-20 h-20 opacity-40 rotate-180" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="relative z-10 flex flex-col justify-between min-h-[220px]"
                    >
                      <div>
                        {/* Top Meta: Stars & Treatment Tag & Google badge */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <span className="text-[12px] font-semibold text-slate-700">5.0</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center text-[11px] font-semibold text-[#0e4e50] bg-[#e8f3f2] px-3 py-1 rounded-full uppercase tracking-wider">
                              {testimonials[activeTestimonial].tag}
                            </span>
                            <a
                              href={GOOGLE_REVIEWS_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 px-2.5 py-1 rounded-full transition-colors"
                              title="Verified Google Review"
                            >
                              <GoogleIcon className="w-3 h-3" />
                              <span>Google Review</span>
                              <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                            </a>
                          </div>
                        </div>

                        {/* Testimonial Quote */}
                        <p className="text-[16px] sm:text-[17.5px] text-slate-800 leading-[1.8] font-normal">
                          &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                        </p>
                      </div>

                      {/* Author Details - Synced inside animation */}
                      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-full bg-[#0e4e50] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                            {testimonials[activeTestimonial].initials}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[14.5px] font-bold text-slate-900">
                                {testimonials[activeTestimonial].name}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                Verified Patient
                              </span>
                            </div>
                            <div className="text-[12px] font-medium text-[#0e4e50] mt-0.5">
                              {testimonials[activeTestimonial].treatment}
                            </div>
                            <div className="text-[11.5px] text-slate-500 mt-0.5">
                              {testimonials[activeTestimonial].location}
                            </div>
                          </div>
                        </div>

                        {/* Pagination indicator dots */}
                        <div className="flex gap-1.5 shrink-0">
                          {testimonials.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveTestimonial(i)}
                              className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-6 bg-[#0e4e50]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                                }`}
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
                    <span>Verified Google &amp; Practo patient feedback</span>
                  </div>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#0e4e50] hover:text-[#0a3839] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Share your review on Google</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left label */}
            <div className="lg:col-span-4">
              <ScrollReveal direction="down">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">06</span>
                  <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">FAQs</span>
                </div>
              </ScrollReveal>

              <ScrollHeading
                as="h2"
                direction="up"
                className="text-3xl sm:text-4xl font-bold text-[#0d3033] font-serif tracking-tight leading-tight"
              >
                Frequently Asked<br />Questions
              </ScrollHeading>

              <ScrollParagraph
                mode="sentences"
                delay={0.1}
                className="mt-4 text-[13.5px] text-slate-500 leading-relaxed"
              >
                Common questions about appointments, timings, and procedures.
              </ScrollParagraph>
            </div>

            {/* Right: Accordion */}
            <div className="lg:col-span-8">
              <ScrollStagger staggerDelay={0.08} className="divide-y divide-[#eaeaea]">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <ScrollStaggerItem key={idx} direction="up" distance={18}>
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full text-left py-5 flex items-start justify-between gap-6 group"
                        aria-expanded={isOpen}
                      >
                        <span className={`text-[14px] font-semibold leading-snug transition-colors ${isOpen ? 'text-[#0e4e50]' : 'text-slate-800 group-hover:text-[#0e4e50]'}`}>
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0e4e50]' : ''}`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-72 pb-5 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <p className="text-[13.5px] text-slate-500 leading-relaxed">
                          {faq.a}
                        </p>
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
