'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Malhotra',
    location: 'Sir Ganga Ram Hospital',
    treatment: 'Endoscopic Sinus Surgery (FESS)',
    quote: 'Dr. Aditi Garg is extremely patient, kind, and thorough. After suffering from chronic sinus headaches for 3 years, her diagnosis and surgery gave me complete relief. Highly recommended for any ENT issues.',
  },
  {
    name: 'Pooja Verma',
    location: 'Shivasha ENT Clinic, Mayur Vihar',
    treatment: 'Vertigo & Tinnitus Treatment',
    quote: 'I visited Dr. Aditi at Shivasha Clinic for severe dizziness and ear fullness. She explained the condition with utmost clarity and performed the balance maneuver right away. Felt better within 24 hours.',
  },
  {
    name: 'Sunil Aggarwal',
    location: 'Sir Ganga Ram Hospital',
    treatment: 'Tympanoplasty — Eardrum Surgery',
    quote: 'Outstanding doctor with great surgical skills. She operated on my perforated eardrum. Post-operative care and follow-up was flawless. My hearing is completely restored.',
  },
];

const faqs = [
  {
    q: 'How can I book an appointment with Dr. Aditi Garg at Sir Ganga Ram Hospital?',
    a: 'Dr. Aditi Garg is available at Sir Ganga Ram Hospital (Room F-87, Department of ENT) on Monday, Wednesday, and Friday from 8:00 AM to 10:00 AM. You can book an appointment directly through this website or through the Sir Ganga Ram Hospital appointment portal.',
  },
  {
    q: 'What are the consultation timings for Shivasha ENT Clinic in Mayur Vihar?',
    a: 'At Shivasha ENT Clinic (148-B Pocket-4, Opp. Arya Samaj Mandir, Mayur Vihar Phase-1, New Delhi), Dr. Aditi Garg is available Monday through Saturday from 6:30 PM to 8:30 PM.',
  },
  {
    q: 'Does Dr. Aditi Garg treat paediatric (children) ENT conditions?',
    a: 'Yes, Dr. Garg has extensive experience treating paediatric ENT disorders including chronic tonsillitis, adenoid hypertrophy, mouth breathing, glue ear/otitis media, and paediatric foreign body removal with gentle, child-friendly care.',
  },
  {
    q: 'Are ENT surgeries covered under health insurance at Sir Ganga Ram Hospital?',
    a: 'Yes, major ENT surgical procedures such as FESS, Tympanoplasty, Mastoidectomy, Septoplasty, and Microlaryngeal surgeries conducted at Sir Ganga Ram Hospital are eligible for cashless insurance and TPA reimbursements as per your policy terms.',
  },
];

const TestimonialsFaq: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const prev = () => setActiveTestimonial((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActiveTestimonial((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section className="bg-[#faf9f7] border-t border-[#e4e8e5]">

      {/* Testimonials */}
      <div className="py-20 sm:py-24 border-b border-[#e4e8e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left label */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">05</span>
                <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">Patient Stories</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0d3033] font-serif tracking-tight leading-tight">
                Heard from<br />our patients.
              </h2>
              <p className="mt-4 text-[13.5px] text-slate-500 leading-relaxed">
                Real experiences from patients treated at Sir Ganga Ram Hospital and Shivasha ENT Clinic.
              </p>

              {/* Navigation */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 border border-slate-300 rounded-sm flex items-center justify-center text-slate-600 hover:border-[#0e4e50] hover:text-[#0e4e50] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-9 h-9 border border-slate-300 rounded-sm flex items-center justify-center text-slate-600 hover:border-[#0e4e50] hover:text-[#0e4e50] transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-[12px] text-slate-400 ml-1">
                  {activeTestimonial + 1} / {testimonials.length}
                </span>
              </div>
            </div>

            {/* Right: Single testimonial */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-sm shadow-sm min-h-[240px] relative animate-fade-in">
                <div className="text-[80px] leading-none font-serif text-[#d4e8e7] select-none absolute top-4 left-8">"</div>
                <div className="relative z-10 pt-4">
                  <p className="text-[15px] sm:text-[16px] text-slate-700 leading-[1.75] font-medium">
                    {testimonials[activeTestimonial].quote}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <div className="text-[14px] font-bold text-slate-900">{testimonials[activeTestimonial].name}</div>
                    <div className="text-[12px] font-semibold text-[#0e4e50] mt-0.5">{testimonials[activeTestimonial].treatment}</div>
                    <div className="text-[11.5px] text-slate-400 mt-0.5">{testimonials[activeTestimonial].location}</div>
                  </div>
                  {/* Dots */}
                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeTestimonial ? 'bg-[#0e4e50]' : 'bg-slate-300'}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
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
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">06</span>
                <span className="block w-8 h-[1.5px] bg-[#0e4e50]"></span>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0e4e50]">FAQs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0d3033] font-serif tracking-tight leading-tight">
                Frequently Asked<br />Questions
              </h2>
              <p className="mt-4 text-[13.5px] text-slate-500 leading-relaxed">
                Common questions about appointments, timings, and procedures.
              </p>
            </div>

            {/* Right: Accordion */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-[#eaeaea]">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx}>
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
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-72 pb-5 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-[13.5px] text-slate-500 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default TestimonialsFaq;
