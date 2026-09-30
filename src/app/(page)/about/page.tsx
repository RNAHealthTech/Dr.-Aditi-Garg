import React from 'react';
import AboutSection from '@/components/home/about-section';
import TestimonialsFaq from '@/components/home/testimonials-faq';
import InstagramFeed from '@/components/home/instagram-feed';
import { Metadata } from 'next';
import {
  Award,
  GraduationCap,
  Building2,
  Stethoscope,
  Users,
  HeartPulse,
  BookOpen,
  FileText,
  Mic2,
  Briefcase,
  CheckCircle2,
  Scissors,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Dr. Aditi Garg | ENT Specialist & Head-Neck Surgeon',
  description: 'Learn about Dr. Aditi Garg, MBBS, DNB (ENT) — Associate Consultant, Department of ENT at Sir Ganga Ram Hospital and Director of Shivasha ENT Clinic, New Delhi. Education, work experience, publications, awards.',
};

const workExperience = [
  {
    role: 'Associate Consultant (ENT)',
    place: 'Sir Ganga Ram Hospital, New Delhi',
    period: 'Jul 2026 – Present',
    current: true,
  },
  {
    role: 'Clinical Assistant',
    place: 'Sir Ganga Ram Hospital, New Delhi',
    period: 'Mar 2025 – Jun 2026',
    current: false,
  },
  {
    role: 'Consultant (ENT) — Director',
    place: 'Shivasha ENT Clinic, Mayur Vihar, New Delhi',
    period: 'Apr 2024 – Present',
    current: true,
  },
  {
    role: 'Associate Consultant (ENT) to Dr. Sharad Maheshwari',
    place: 'Ear, Nose, Throat and Eye Hospital, Krishna Nagar, New Delhi',
    period: 'Oct 2023 – Jan 2025',
    current: false,
  },
  {
    role: 'Consultant (ENT)',
    place: 'Max Multi Specialty Center, Noida',
    period: 'Dec 2023 – Jun 2024',
    current: false,
  },
  {
    role: 'Consultant (ENT)',
    place: 'Malik Radix Healthcare, Nirman Vihar, New Delhi',
    period: 'Aug 2023 – Jun 2024',
    current: false,
  },
  {
    role: 'Senior Resident (ENT)',
    place: 'Sir Ganga Ram Hospital, New Delhi',
    period: 'Sep 2020 – Sep 2023',
    current: false,
  },
  {
    role: 'Junior Resident (Non-Academic)',
    place: 'Dept. of Endocrinology, Dr. RML Hospital, New Delhi',
    period: 'Feb 2017 – Apr 2017',
    current: false,
  },
];

const publications = [
  {
    title: 'A Prospective study of role of Functional MRI in suspects of Obstructive Sleep Apnea',
    journal: 'Indian Journal of Otolaryngology and Head & Neck surgery',
    year: '2024',
    role: 'Author',
    status: 'Published',
  },
  {
    title: 'Auricle Schwannoma: Presentation of a Rare case and Review of Existing Literature',
    journal: 'Indian Journal of Otorhinolaryngology and Head & Neck Surgery',
    year: '2020',
    role: 'Co-author',
    status: 'Published',
  },
  {
    title: 'Case Report: Nontuberculous Mycobacterial Parotits in an Elderly women with Sjogren’s Syndrome and Diabetes Mellitus',
    journal: 'International journal of Otorhinolaryngology and Head and Neck Surgery',
    year: '',
    role: 'Co-author',
    status: 'Accepted',
  },
  {
    title: 'Comparision of clinical outcomes in patients of Chronic Rhinosinusitis treated with Azithromycin or Clarithromycin',
    journal: 'Clinical Rhinology An International Journal',
    year: '',
    role: 'Co-author',
    status: 'Accepted',
  },
  {
    title: 'Case Report: A Rare pediatric Minimally invasive FTC wih MET Exon 14 Skipping',
    journal: 'Indian journal of Otolaryngology and head and neck surgery',
    year: '',
    role: 'Co-author',
    status: 'Under Review',
  },
  {
    title: 'Comparision of Giant and Conventional Parathyroid Adenoma: A Clinical and Biochemical Study',
    journal: 'International Journal of Otorhinolaryngology and head and neck surgery',
    year: '',
    role: 'Co-author',
    status: 'Under Review',
  },
];

const independentSurgeries = [
  'Tonsillectomy', 'Coblation Adenoidectomy', 'Tracheostomy', 'Tympanoplasty',
  'Modified Radical Mastoidectomy', 'Ossiculoplasty', 'Functional Endoscopic Sinus Surgery',
  'Caldwel Luc', 'Denkers', 'Medial Maxillectomy', 'Orbital Decompression',
  'Transnasal Endoscopic PPF And ITF Approach', 'Diagnostic And Therapeutic Oesophagoscopy',
  'Microlaryngeal Surgeries', 'Septoplasty', 'Endoscopic Endonasal DCR',
  'Thyroidectomy', 'Submandibular Gland Excision', 'AC Polypectomy',
  'Limited Oral CA Wide Local Excision With Buccal Fat Pad Reconstruction',
  'Thyroglossal Duct Cyst Excision', 'Preauricular Sinus Excision', 'Meatoplasty',
  'Dentigerous Cyst Excision', 'Neck Lymph Nodes Excision Biopsy',
  'Laser Assisted Leukoplakic Patch Excision', 'Grommet Insertion',
  'Drug Induced Sleep Endoscopy', 'Endoscopic Tympanoplasty',
  'Ludwings Angina Drainage', 'Parapharyngeal Abscess Drainage',
  'Peritonsillar Abscess Drainage', 'Ballon Eustachian Tuboplasty',
];

const assistedSurgeries = [
  'Oral Ca Wide Local Excision With Neck Dissection With Reconstruction',
  'Laryngectomy', 'Diagnostic And Therapeutic Bronchoscopy',
  'Endosopic Endonasal Transsphenoidal Pituitary Macradenoma Excision',
  'CSF Leak Repair', 'Stapedotomy', 'Facial Nerve Decompression',
  'JNA Excision', 'Maxillectomy', 'Mandibulectomy',
  'Mandible Fracture Reduction With Screw And Plates', 'Parotidectomy',
  'Sialendoscopy', 'Ballon Sinuplasty', 'Cochlear Implants',
  'Endolymphatic Sac Decompression', 'Optic Nerve Decompression',
  'Coblation BOT Reduction'
];

const cmeList = [
  { name: 'AOI All India Conference, Kolkata', year: '2026' },
  { name: 'SEOCON, Pune', year: '2025' },
  { name: 'Hands on Workshop on Lasers in Laryngology — Deenanath Mangeshkar Hospital, Pune', year: '2025' },
  { name: 'Rhinocon (Bikaner) — Faculty', year: '2023' },
  { name: 'Conference of The Association of Otolaryngologists, Hyderabad', year: '2019' },
  { name: 'PG Award Paper Presentation — AOI 2019', year: '2019' },
  { name: 'FESS Live Surgical & Cadaveric Dissection Workshop — Cooper Hospital, Mumbai', year: '2019' },
  { name: 'Workshop on Fascia Lata in Otology — Indorewala ENT Institute, Nashik', year: '2019' },
  { name: 'Dysphagia Conference — Cooper Hospital, Mumbai', year: '2019' },
  { name: 'MEDINSPIRE — DY Patil Medical College, Navi Mumbai', year: '2019' },
  { name: 'International Endoscopic Ear & FESS Live Surgical Workshop — Cooper Hospital, Mumbai', year: '2018' },
  { name: 'Temporal Bone Dissection Workshop — DY Patil Medical College, Navi Mumbai', year: '2018' },
  { name: 'Lateral Skull Base Workshop — DY Patil Medical College, Navi Mumbai', year: '2018' },
  { name: 'MENTCON 2017, Mumbai', year: '2017' },
  { name: 'MENTCOM 2017, Mumbai — ePoster Competition', year: '2017' },
];

const clinicProcedures = [
  'Ear / nose/ throat endoscopy',
  'Nasal bleed - endoscopy and cauterization',
  'All small cyst removal',
  'Ear lobe repair',
  'Tongue tie release',
  'Intratympanic steroid injection',
  'Vertigo testing and maneuvers',
  'Allergy testing and immunotherapy',
  'Small biopsies',
  'Foreign body ear/nose/ throat removal',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-16">
      {/* Realistic Header Banner */}
      <div className="relative bg-[#093537] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80" alt="Clinic Setup" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#093537] via-[#093537]/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-100 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Know Your Doctor
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            About Dr. Aditi Garg
          </h1>
          <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            MBBS, DNB (ENT) — Associate Consultant, Department of ENT at Sir Ganga Ram Hospital. A compassionate and highly skilled Otorhinolaryngologist dedicated to providing advanced ENT care with a patient-first approach.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: Award, stat: '11+ Years', label: 'Clinical Experience', color: 'text-amber-600', bg: 'bg-amber-50' },
            { icon: FileText, stat: '6', label: 'Research Publications', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: HeartPulse, stat: '35+', label: 'Surgeries Performed Independently', color: 'text-red-600', bg: 'bg-red-50' },
            { icon: Building2, stat: '2 Centers', label: 'SGRH & Shivasha Clinic', color: 'text-teal-600', bg: 'bg-teal-50' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.stat}</h3>
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <AboutSection />

      {/* Work Experience Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#0e4e50]">Professional Journey</h2>
          <p className="text-slate-500 mt-3">Complete work experience & career progression</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10"></div>

          <div className="space-y-0">
            {workExperience.map((item, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 shrink-0 ${
                    item.current
                      ? 'bg-[#0e4e50] text-white shadow-teal-900/20'
                      : 'bg-slate-100 text-slate-500 shadow-slate-200/50'
                  }`}>
                    <Briefcase className="w-4 h-4" />
                  </div>
                  {idx < workExperience.length - 1 && (
                    <div className="w-px h-full bg-slate-200 mt-1"></div>
                  )}
                </div>
                <div className="pb-8">
                  <span className={`text-xs font-bold tracking-wider uppercase ${
                    item.current ? 'text-teal-600' : 'text-slate-400'
                  }`}>
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{item.role}</h3>
                  <p className="text-slate-600 font-medium mt-0.5">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Surgeries Performed Independently */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#0e4e50]">Surgeries Performed Independently</h2>
          <p className="text-slate-500 mt-3">Comprehensive surgical expertise across ENT & Head-Neck specialties</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 sm:p-10 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {independentSurgeries.map((surgery, idx) => (
              <div key={idx} className="flex items-start gap-2.5 py-2 group hover:translate-x-1 transition-transform duration-200">
                <Scissors className="w-3.5 h-3.5 text-[#0e4e50] shrink-0 mt-0.5" />
                <span className="text-[13px] text-slate-700 font-medium leading-snug">{surgery}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Surgeries Assisted */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#0e4e50]">Surgeries Assisted</h2>
          <p className="text-slate-500 mt-3">Extensive experience assisting in complex surgical procedures</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 sm:p-10 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {assistedSurgeries.map((surgery, idx) => (
              <div key={idx} className="flex items-start gap-2.5 py-2 group hover:translate-x-1 transition-transform duration-200">
                <Scissors className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-[13px] text-slate-600 font-medium leading-snug">{surgery}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clinic Procedures */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#0e4e50]">Procedures at Shivasha ENT Clinic</h2>
          <p className="text-slate-500 mt-3">In-clinic procedures available at Mayur Vihar Phase 1</p>
        </div>

        <div className="bg-[#0e4e50] rounded-3xl shadow-xl p-8 sm:p-10 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {clinicProcedures.map((proc, idx) => (
              <div key={idx} className="flex items-start gap-2.5 py-2">
                <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                <span className="text-[13.5px] text-white/90 font-medium">{proc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Publications */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#0e4e50]">Research & Publications</h2>
          <p className="text-slate-500 mt-3">
            Thesis: A Prospective Study of Role of MRI in Obstructive Sleep Apnea
          </p>
        </div>

        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      pub.status === 'Published'
                        ? 'bg-green-50 text-green-700'
                        : pub.status === 'Accepted'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {pub.status}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0e4e50] bg-[#f0f8f7] px-2 py-0.5 rounded-full">
                      {pub.role}
                    </span>
                    {pub.year && (
                      <span className="text-[11px] text-slate-400 font-semibold">{pub.year}</span>
                    )}
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-900 leading-snug">{pub.title}</h3>
                  <p className="text-[12px] text-slate-500 mt-1 italic">{pub.journal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CME & Conferences */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#0e4e50]">CME & Conferences</h2>
          <p className="text-slate-500 mt-3">Continuous medical education, workshops & presentations</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-8 sm:p-10 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {cmeList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 py-2 group hover:translate-x-1 transition-transform duration-200">
                <Mic2 className="w-4 h-4 text-[#0e4e50] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[13px] text-slate-700 font-medium leading-snug">{item.name}</span>
                  <span className="text-[11px] text-slate-400 font-semibold ml-2">({item.year})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Memberships */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-[#0e4e50]">Professional Memberships</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-[#0e4e50]" />
            </div>
            <div>
              <h3 className="text-[14px] font-bold text-slate-900">Association of Otorhinolaryngologists of India</h3>
              <p className="text-[12px] text-slate-500">Life Member — LM No: 5972</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-[#0e4e50]" />
            </div>
            <div>
              <h3 className="text-[14px] font-bold text-slate-900">Delhi AOI Membership</h3>
              <p className="text-[12px] text-slate-500">Member since 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Personal & Contact Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
        <div className="bg-[#0e4e50] rounded-3xl p-8 sm:p-10 shadow-xl text-white">
          <h2 className="text-2xl font-serif font-bold mb-6 border-b border-teal-600/50 pb-4">Personal & Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[14px]">
            <div className="space-y-3">
              <p><strong className="text-teal-200">Date of Birth:</strong> 18th July 1990</p>
              <p><strong className="text-teal-200">Marital Status:</strong> Married</p>
              <p><strong className="text-teal-200">Mobile:</strong> +91-8076268531</p>
              <p><strong className="text-teal-200">Email:</strong> draditigarg90@gmail.com</p>
            </div>
            <div className="space-y-3">
              <p>
                <strong className="text-teal-200 block mb-1">Residence Address:</strong> 
                46 A, Pocket 3, Mayur Vihar Phase 1, Delhi 91
              </p>
              <p>
                <strong className="text-teal-200 block mb-1">Clinic Address:</strong> 
                Shivasha ENT Clinic. Pocket 4, Main Road, Mayur Vihar Phase 1.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TestimonialsFaq />
      
      <div className="bg-white pb-16">
        <InstagramFeed />
      </div>
    </div>
  );
}
