import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemVisualization from './components/ProblemVisualization';
import InteractiveQRDemo from './components/InteractiveQRDemo';
import BusinessCategorySelector from './components/BusinessCategorySelector';
import TemplateShowcase from './components/TemplateShowcase';
import FeaturesGrid from './components/FeaturesGrid';
import PricingCalculator from './components/PricingCalculator';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import FAQAccordion from './components/FAQAccordion';
import LeadGenerationForm from './components/LeadGenerationForm';
import FinalCTA from './components/FinalCTA';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Visualization */}
      <ProblemVisualization />
      
      {/* Interactive QR Demo */}
      <InteractiveQRDemo />
      
      {/* Business Category Selector */}
      <BusinessCategorySelector />
      
      {/* Template Showcase */}
      <TemplateShowcase />
      
      {/* Features Grid */}
      <FeaturesGrid />
      
      {/* Pricing Calculator */}
      <PricingCalculator />
      
      {/* Testimonials Carousel */}
      <TestimonialsCarousel />
      
      {/* FAQ Accordion */}
      <FAQAccordion />
      
      {/* Lead Generation Form */}
      <LeadGenerationForm />
      
      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};

export default LandingPage;