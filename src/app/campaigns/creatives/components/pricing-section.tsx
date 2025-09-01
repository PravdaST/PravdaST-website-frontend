"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Star, Play, Image as ImageIcon, Video, Layers } from 'lucide-react';

export const PricingSection = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const packages = [
    {
      id: 'basic',
      name: 'Basic Package',
      price: '299',
      originalPrice: '499',
      description: 'Идеален старт за малки бизнеси',
      icon: ImageIcon,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      deliveryTime: '3-5 работни дни',
      revisions: '2 ревизии',
      includes: [
        '3 статични креативa за Facebook/Instagram',
        '1 carousel креатив (5 slides)',
        'Копирайт за всички креативи',
        'A/B test варианти',
        'Оптимизация за различни формати',
      ]
    },
    {
      id: 'standard',
      name: 'Standard Package',
      price: '599',
      originalPrice: '899',
      description: 'Най-популярният избор за растящи бизнеси',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      deliveryTime: '5-7 работни дни',
      revisions: '3 ревизии',
      includes: [
        'Всичко от Basic Package',
        '2 видео креатива (15-30 сек)',
        '2 UGC стил видеа', 
        'Motion graphics и анимации',
        '5 carousel креатива',
        'Stories формати',
        'Стратегия за креативно тестване',
      ]
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: '999',
      originalPrice: '1499',
      description: 'Пълно креативно решение за амбициозни брандове',
      icon: Layers,
      color: 'from-green-500 to-teal-500',
      popular: false,
      deliveryTime: '7-10 работни дни',
      revisions: '5 ревизии',
      includes: [
        'Всичко от Standard Package',
        '5 професионални видео креатива',
        'UGC кампания с 3 различни персони',
        'Брандиране и visual identity',
        'Креативна стратегия и roadmap',
        'Месечен план за контент',
        'Консултация с креативен директор',
        'Приоритетна поддръжка',
      ]
    }
  ];

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Креативни пакети за всеки бюджет
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Изберете пакета, който най-добре отговаря на вашите нужди. 
              Всички пакети включват професионални креативи, готови за реклами.
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span>150+ доволни клиенти</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Play className="w-5 h-5 text-green-500" />
                <span>500+ креатива създадени</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Check className="w-5 h-5 text-blue-500" />
                <span>Средно +280% ROI</span>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  pkg.popular 
                    ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-white' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-green-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      🔥 Най-популярен
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon & Name */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <pkg.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-xl text-gray-900">лв</span>
                      <span className="text-lg text-gray-400 line-through">{pkg.originalPrice} лв</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      <div>{pkg.deliveryTime} • {pkg.revisions}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.includes.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check size={16} className="text-green-500 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToCalculator}
                    className={`w-full py-3 text-lg font-bold rounded-xl transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {pkg.popular ? 'Започни сега 🚀' : 'Избери този пакет'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Solutions CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Нужда от нещо специално? 
            </h3>
            <p className="text-gray-300 mb-6">
              Създаваме персонализирани креативни решения за уникални проекти.
              Свържете се с нас за оферта по мярка.
            </p>
            <Button 
              onClick={scrollToCalculator}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Заявка за персонализирана оферта
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};