import React from 'react';
import { Metadata } from 'next';
import AboutContent from '@/components/about/about-content';

export const metadata: Metadata = {
  title: 'About Dr. Aditi Garg | ENT Specialist & Head-Neck Surgeon',
  description: 'Learn about Dr. Aditi Garg, MBBS, DNB (ENT) — Associate Consultant, Department of ENT at Sir Ganga Ram Hospital and Director of Shivasha ENT Clinic, New Delhi. Education, work experience, publications, awards.',
};

export default function AboutPage() {
  return <AboutContent />;
}
