import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import CategorySelector from './components/CategorySelector';
import InteractiveDemo from './components/InteractiveDemo';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import LeadCaptureForm from './components/LeadCaptureForm';
import FAQSection from './components/FAQSection';
import UrgencyCTASection from './components/UrgencyCTASection';
import Footer from './components/Footer';

const LandingPage = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleStartNow = () => {
    // Scroll to lead capture form
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDemo = () => {
    // Scroll to demo section
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Could trigger demo modal or scroll to demo
    handleViewDemo();
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    setShowSuccessMessage(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);

    // In a real app, this would send data to backend
    // and redirect to onboarding or thank you page
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection 
          onStartNow={handleStartNow}
          onViewDemo={handleViewDemo}
        />
        
        <StatsSection />
        
        <ProblemSolutionSection />
        
        <CategorySelector 
          onCategorySelect={handleCategorySelect}
        />
        
        <InteractiveDemo />
        
        <FeaturesSection />
        
        <PricingSection 
          onGetStarted={handleStartNow}
        />
        
        <TestimonialsSection />
        
        <div id="lead-form">
          <LeadCaptureForm 
            onFormSubmit={handleFormSubmit}
          />
        </div>
        
        <FAQSection />
        
        <UrgencyCTASection 
          onGetStarted={handleStartNow}
        />
      </main>
      
      <Footer />

      {/* Success Message Modal */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-elevation-2 p-8 max-w-md mx-4 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Заявката е изпратена успешно!
            </h3>
            <p className="text-text-secondary mb-6">
              Ще се свържем с вас в рамките на 1 час за да обсъдим детайлите на вашия проект.
            </p>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-smooth"
            >
              Затвори
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;