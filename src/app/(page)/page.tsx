'use client';

import React from 'react';
import HeroSection from '@/components/home/hero-section';
import CtaBanner from '@/components/home/cta-banner';
import TestimonialsFaq from '@/components/home/testimonials-faq';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Patient Reviews & FAQs */}
      <TestimonialsFaq />

      {/* Bottom CTA Banner */}
      <CtaBanner />
    </>
  );
};

export default HomePage;