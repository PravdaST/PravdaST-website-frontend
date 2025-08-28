"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Play, Star, Shield, Clock } from 'lucide-react';

interface HeroSectionProps {
  onStartNow: () => void;
  onViewDemo: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartNow, onViewDemo }) => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-medium">
                <Zap size={16} className="mr-2" />
                Готов за 24 часа
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Получете професионален сайт за{' '}
                <span className="text-orange-500">24 часа</span>
                {' '}- само{' '}
                <span className="text-blue-600">299лв</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Помогнете на вашия бизнес да се откроява онлайн с готови уеб сайтове, 
                специално създадени за български малки бизнеси. QR меню система включена!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onStartNow}
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-xl"
              >
                ЗАПОЧНЕТЕ СЕГА
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={onViewDemo}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-xl"
              >
                <Play className="mr-2 w-5 h-5" />
                ВИЖТЕ ДЕМО
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">5.0 рейтинг</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">100% сигурност</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600">Бърза доставка</span>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ✅ Какво получавате:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Готов професионален уеб сайт
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  QR Code меню система за ресторанти
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Мобилна оптимизация
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  SEO оптимизация за Google
                </li>
              </ul>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              {/* Mock Website Preview */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-100 rounded-lg"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-orange-200 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg"></div>
                  <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                </div>
                <div className="h-6 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                Готов!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                299лв
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-orange-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute bottom-10 -right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;