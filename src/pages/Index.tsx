
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import WhatsAppDemo from '@/components/WhatsAppDemo';
import BenefitsSection from '@/components/BenefitsSection';
import FaqSection from '@/components/FaqSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <WhatsAppDemo />
      <BenefitsSection />
      <FaqSection />
    </Layout>
  );
};

export default Index;
