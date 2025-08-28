"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
// Temporary comment out missing components
// import ProblemSolutionSection from './components/ProblemSolutionSection';
// import CategorySelector from './components/CategorySelector';
// import InteractiveDemo from './components/InteractiveDemo';
// import FeaturesSection from './components/FeaturesSection';
// import PricingSection from './components/PricingSection';
// import TestimonialsSection from './components/TestimonialsSection';
// import LeadCaptureForm from './components/LeadCaptureForm';
// import FAQSection from './components/FAQSection';
// import UrgencyCTASection from './components/UrgencyCTASection';
// import Footer from './components/Footer';

const MiniSitesNewContent = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Could trigger demo modal or scroll to demo
    handleViewDemo();
  };

  const handleFormSubmit = (formData: any) => {
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
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection 
          onStartNow={handleStartNow}
          onViewDemo={handleViewDemo}
        />
        
        <StatsSection />
        
        {/* Temporary sections while adapting components */}
        <div className="py-20 bg-gray-50 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Специализирани темплейти
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a 
                href="/campaigns/mini-sites-new/restaurants"
                className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ресторанти</h3>
                <p className="text-gray-600">QR меню, резервации, отзиви</p>
              </a>
              
              <a 
                href="/campaigns/mini-sites-new/cafes"
                className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-6xl mb-4">☕</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Кафенета</h3>
                <p className="text-gray-600">Онлайн меню, уютна атмосфера</p>
              </a>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-orange-500 to-blue-500 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8">
              Готови за вашия професионален сайт?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Получете готов уеб сайт за 24 часа - само 299лв
            </p>
            <Button 
              size="lg"
              onClick={handleStartNow}
              className="bg-white text-orange-500 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-2xl"
            >
              ЗАПОЧНЕТЕ СЕГА
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MiniSitesNewContent;