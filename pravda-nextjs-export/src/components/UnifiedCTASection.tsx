
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
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

interface UnifiedCTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  features?: string[];
  backgroundColor?: string;
}

export function UnifiedCTASection({
  title = "Готови сте за следващата стъпка?",
  description = "Започнете безплатна консултация днес и открийте как можем да увеличим вашите продажби",
  primaryButtonText = "Безплатна консултация",
  secondaryButtonText = "Разгледайте услугите",
  features = [
    "Безплатна консултация",
    "Без ангажименти", 
    "100% поверителност",
    "Отговор в 48 часа",
    "Процес 5 минути"
  ],
  backgroundColor = "bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500"
}: UnifiedCTASectionProps) {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text and Features */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      {title}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Trust Signals */}
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - CTA Button */}
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="text-center space-y-6">
                    <Button 
                      size="lg"
                      className="bg-black text-yellow-400 hover:bg-gray-900 px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                    >
                      {primaryButtonText}
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button 
                      variant="outline"
                      size="lg"
                      className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                    >
                      {secondaryButtonText}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
