'use client';

import React, { useState } from 'react';
import { Star, ChevronDown, MessageSquare, HelpCircle, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Malhotra',
    location: 'New Delhi (Sir Ganga Ram Hospital Patient)',
    treatment: 'Endoscopic Sinus Surgery (FESS)',
    rating: 5,
    quote:
      'Dr. Aditi Garg is extremely patient, kind, and thorough. After suffering from chronic sinus headaches for 3 years, her diagnosis and surgery gave me complete relief. Highly recommended for any ENT issues!',
  },
  {
    name: 'Pooja Verma',
    location: 'Mayur Vihar (Shivasha ENT Clinic)',
    treatment: 'Vertigo & Tinnitus Treatment',
    rating: 5,
    quote:
      'I visited Dr. Aditi at Shivasha Clinic for severe dizziness and ear fullness. She explained the condition with utmost clarity and performed the balance maneuver right away. Felt better within 24 hours.',
  },
  {
    name: 'Sunil Aggarwal',
    location: 'East Delhi Patient',
    treatment: 'Tympanoplasty (Eardrum Surgery)',
    rating: 5,
    quote:
      'Outstanding doctor with great surgical skills. She operated on my perforated eardrum at Sir Ganga Ram Hospital. Post-operative care and follow-up was flawless. Hearing is completely restored.',
  },
];

const faqs = [
  {
    q: 'How can I book an appointment with Dr. Aditi Garg at Sir Ganga Ram Hospital?',
    a: 'Dr. Aditi Garg is available at Sir Ganga Ram Hospital (Room F-87, Department of ENT) on Monday, Wednesday, and Friday from 8:00 AM to 10:00 AM. You can book an appointment directly through this website or through the Sir Ganga Ram Hospital appointment portal.',
  },
  {
    q: 'What are the consultation timings for Shivasha ENT Clinic in Mayur Vihar?',
    a: 'At Shivasha ENT Clinic (148-B Pocket-4, Opp. Arya Samaj Mandir, Mayur Vihar Phase-1, New Delhi), Dr. Aditi Garg is available Monday through Saturday in the evening from 6:30 PM to 8:30 PM.',
  },
  {
    q: 'Does Dr. Aditi Garg treat paediatric (children) ENT conditions?',
    a: 'Yes, Dr. Garg has extensive experience treating paediatric ENT disorders including chronic tonsillitis, adenoid hypertrophy, mouth breathing, glue ear/otitis media, and pediatric foreign body removal with gentle child-friendly care.',
  },
  {
    q: 'Are ENT surgeries covered under health insurance at Sir Ganga Ram Hospital?',
    a: 'Yes, major ENT surgical procedures such as FESS, Tympanoplasty, Mastoidectomy, Septoplasty, and Microlaryngeal surgeries conducted at Sir Ganga Ram Hospital are eligible for cashless insurance and TPA reimbursements as per your policy terms.',
  },
];

const TestimonialsFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0e4e50] uppercase mb-2">
              <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
              <span>Patient Stories</span>
              <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#113a3d] font-serif tracking-tight">
              Trusted by Hundreds of Patients
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Verified reviews from patients treated at Sir Ganga Ram Hospital and Shivasha ENT Clinic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#fbfdfc] rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-[11px] font-medium text-[#0e4e50] mt-0.5">{t.treatment}</div>
                  <div className="text-[11px] text-slate-400">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0e4e50] uppercase mb-2">
              <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
              <span>Got Questions?</span>
              <span className="w-4 h-[2px] bg-[#0e4e50]"></span>
            </div>
            <h2 className="text-3xl font-bold text-[#113a3d] font-serif tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/90 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-[#0e4e50]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#0e4e50]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-teal-50/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsFaq;
