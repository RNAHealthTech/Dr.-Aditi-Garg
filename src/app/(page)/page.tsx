'use client';

import React from 'react';
import HeroSection from '@/components/home/hero-section';
import ExpertiseDetails from '@/components/home/expertise-details';
import WhyChooseUs from '@/components/home/why-choose-us';
import Affiliations from '@/components/home/affiliations';
import TestimonialsFaq from '@/components/home/testimonials-faq';
import InstagramFeed from '@/components/home/instagram-feed';
import CtaBanner from '@/components/home/cta-banner';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Expertise & Services Section */}
      <ExpertiseDetails />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Clinic Locations & Affiliations */}
      <Affiliations />

      {/* Patient Reviews & FAQs */}
      <TestimonialsFaq />

      {/* Instagram Feed / Gallery */}
      <InstagramFeed />

      {/* Bottom CTA Banner */}
      <CtaBanner />
    </>
  );
};

export default HomePage;