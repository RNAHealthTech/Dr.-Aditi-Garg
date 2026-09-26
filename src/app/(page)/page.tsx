'use client';

import React from 'react';
import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
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

      {/* About Doctor Section */}
      <AboutSection />

      {/* Clinical Expertise & Procedures */}
      <ExpertiseDetails />

      {/* Why Choose Dr. Aditi */}
      <WhyChooseUs />

      {/* Clinic Locations */}
      <Affiliations />

      {/* Patient Stories & FAQs */}
      <TestimonialsFaq />

      {/* From the Clinic */}
      <InstagramFeed />

      {/* Final CTA */}
      <CtaBanner />
    </>
  );
};

export default HomePage;
