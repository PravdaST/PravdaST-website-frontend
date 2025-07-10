
'use client';

import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface UnifiedCTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'primary' | 'secondary' | 'success';
  className?: string;
}

const UnifiedCTASection: React.FC<UnifiedCTASectionProps> = ({
  title = "Готови за следващото ниво?",
  subtitle = "Заявете безплатна консултация и открийте как можем да ускорим растежа на вашия бизнес.",
  buttonText = "Заявете консултация",
  buttonLink = "https://form.typeform.com/to/GXLaGY98",
  variant = 'primary',
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-slate-800 border-slate-600';
      case 'success':
        return 'bg-emerald-900/20 border-emerald-600';
      default:
        return 'bg-gradient-to-r from-[#ECB628]/10 to-[#ECB628]/5 border-[#ECB628]/20';
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center p-8 rounded-2xl border ${getVariantStyles()}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Button
            size="lg"
            className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black font-semibold px-8 py-4 text-lg group"
            onClick={() => window.open(buttonLink, '_blank')}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UnifiedCTASection;
