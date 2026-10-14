import React from 'react';

export default function SchemaMarkup() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Physician Schema
      {
        '@type': 'Physician',
        '@id': 'https://draditigarg.com/#physician',
        name: 'Dr. Aditi Garg',
        jobTitle: 'Associate Consultant - ENT & Head-Neck Surgeon',
        description:
          'Dr. Aditi Garg (MBBS, DNB - ENT) is an ENT Specialist and Surgeon at Sir Ganga Ram Hospital and Director at Shivasha ENT Clinic, New Delhi. Specializing in ear, nose, throat, endoscopic sinus surgery, vertigo, and paediatric ENT.',
        image: 'https://draditigarg.com/images/dr-aditi-garg-portrait.jpg',
        telephone: '+91-9289300329',
        email: 'draditi.garg90@gmail.com',
        url: 'https://draditigarg.com',
        priceRange: '₹₹',
        medicalSpecialty: [
          'https://schema.org/Otolaryngologic',
          'Otolaryngology',
          'Head and Neck Surgery',
          'Pediatric Otolaryngology',
        ],
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'Coimbatore Medical College, Dr. MGR Medical University',
            award: 'MBBS',
          },
          {
            '@type': 'EducationalOrganization',
            name: 'Dr. R.N. Cooper Hospital & HBT Medical College, Mumbai',
            award: 'DNB (ENT)',
          },
        ],
        memberOf: [
          {
            '@type': 'Organization',
            name: 'Association of Otorhinolaryngologists of India (AOI)',
          },
          {
            '@type': 'Organization',
            name: 'Delhi Medical Council',
          },
        ],
        worksFor: [
          {
            '@type': 'Hospital',
            name: 'Sir Ganga Ram Hospital',
            url: 'https://sgrh.com',
          },
          {
            '@type': 'MedicalClinic',
            name: 'Shivasha ENT Clinic',
          },
        ],
        address: [
          {
            '@type': 'PostalAddress',
            streetAddress: 'Room No. F-87, Department of ENT, Sir Ganga Ram Hospital Marg, Old Rajinder Nagar',
            addressLocality: 'New Delhi',
            addressRegion: 'Delhi',
            postalCode: '110060',
            addressCountry: 'IN',
          },
          {
            '@type': 'PostalAddress',
            streetAddress: '148 B, Pocket 4, Main Road, Opp. Arya Samaj Mandir, Mayur Vihar Phase 1',
            addressLocality: 'New Delhi',
            addressRegion: 'Delhi',
            postalCode: '110091',
            addressCountry: 'IN',
          },
        ],
      },

      // 2. Medical Clinic - Shivasha ENT Clinic
      {
        '@type': 'MedicalClinic',
        '@id': 'https://draditigarg.com/#shivasha-clinic',
        name: 'Shivasha ENT Clinic',
        description: 'Private Evening ENT Clinic led by Dr. Aditi Garg in Mayur Vihar Phase-1, New Delhi.',
        telephone: '+91-9289300329',
        email: 'draditi.garg90@gmail.com',
        url: 'https://draditigarg.com',
        priceRange: '₹₹',
        medicalSpecialty: 'Otolaryngology',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '148 B, Pocket 4, Main Road, Opp. Arya Samaj Mandir, Mayur Vihar Phase 1',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110091',
          addressCountry: 'IN',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '18:30',
            closes: '20:30',
          },
        ],
      },

      // 3. Hospital Department - Sir Ganga Ram Hospital OPD
      {
        '@type': 'Hospital',
        '@id': 'https://draditigarg.com/#sgrh-ent',
        name: 'Sir Ganga Ram Hospital - Department of ENT',
        description: 'Primary Hospital OPD consultation with Dr. Aditi Garg, Associate Consultant ENT.',
        telephone: '+91-9289300329',
        url: 'https://appointment.sgrh.com',
        medicalSpecialty: 'Otolaryngology',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Room No. F-87, Department of ENT, Sir Ganga Ram Hospital Marg, Old Rajinder Nagar',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110060',
          addressCountry: 'IN',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Wednesday', 'Friday'],
            opens: '08:00',
            closes: '15:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Thursday', 'Saturday'],
            opens: '09:00',
            closes: '15:00',
          },
        ],
      },

      // 4. WebSite Schema
      {
        '@type': 'WebSite',
        '@id': 'https://draditigarg.com/#website',
        url: 'https://draditigarg.com',
        name: 'Dr. Aditi Garg | ENT Specialist & Surgeon',
        description:
          'Official website of Dr. Aditi Garg (MBBS, DNB - ENT), Associate Consultant at Sir Ganga Ram Hospital and Director at Shivasha ENT Clinic, New Delhi.',
        inLanguage: 'en-US',
      },

      // 5. FAQPage Schema for Rich Snippets
      {
        '@type': 'FAQPage',
        '@id': 'https://draditigarg.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How can I book an appointment with Dr. Aditi Garg at Sir Ganga Ram Hospital?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dr. Aditi Garg is available at Sir Ganga Ram Hospital (Room F-87, Department of ENT) on Monday, Wednesday, and Friday from 8:00 AM to 3:00 PM, and on Tuesday, Thursday, and Saturday from 9:00 AM to 3:00 PM. You can book an appointment directly by calling +91-9289300329 or through the Sir Ganga Ram Hospital appointment portal.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the consultation timings for Shivasha ENT Clinic in Mayur Vihar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'At Shivasha ENT Clinic (148-B Pocket-4, Opp. Arya Samaj Mandir, Mayur Vihar Phase-1, New Delhi), Dr. Aditi Garg is available Monday through Saturday from 6:30 PM to 8:30 PM. Call +91-9289300329 for appointments.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Dr. Aditi Garg treat paediatric (children) ENT conditions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Dr. Garg has extensive experience treating paediatric ENT disorders including paediatric airway conditions, chronic tonsillitis, adenoid hypertrophy, mouth breathing, glue ear/otitis media, and paediatric foreign body removal with gentle, child-friendly care.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are ENT surgeries covered under health insurance at Sir Ganga Ram Hospital?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, major ENT surgical procedures such as FESS, Tympanoplasty, Mastoidectomy, Septoplasty, and Microlaryngeal surgeries conducted at Sir Ganga Ram Hospital are eligible for cashless insurance and TPA reimbursements as per policy terms.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
