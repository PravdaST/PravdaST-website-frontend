"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight, Play, Star, Shield, Clock, Users, TrendingUp, Eye } from 'lucide-react';

const LandingPageMain: React.FC = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const handleStartNow = () => {
    // Scroll to contact form or CTA
    const formElement = document.getElementById('contact-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDemo = () => {
    // Scroll to demo section
    const demoElement = document.getElementById('demo-section');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-medium">
                  <Clock size={16} className="mr-2" />
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
                  onClick={handleStartNow}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-xl"
                >
                  ЗАПОЧНЕТЕ СЕГА
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleViewDemo}
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
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                {/* Mock Website Preview */}
                <div className="space-y-4">
                  <div className="h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center px-4">
                    <div className="text-white text-sm font-medium">ресторант-софия.bg</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-orange-200 rounded w-3/4"></div>
                    <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center text-orange-600 font-semibold">QR Меню</div>
                    <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-blue-600 font-semibold">Резервации</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                  Готов!
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                  299лв
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Резултати, които говорят сами за себе си
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Над 500 български бизнеса вече използват нашите Mini-Sites за да увеличат продажбите си
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Доволни клиенти", subtext: "в цяла България" },
              { icon: Clock, number: "24ч", label: "Време за доставка", subtext: "гарантирано" },
              { icon: Star, number: "4.9★", label: "Рейтинг", subtext: "от клиенти" },
              { icon: TrendingUp, number: "+40%", label: "Повече продажби", subtext: "в първия месец" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Templates Section */}
      <section id="demo-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Специализирани темплейти
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Вижте как ще изглежда вашият професионален сайт
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              href="/campaigns/mini-sites-new/restaurants"
              className="group block p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300"
            >
              <div className="text-6xl mb-4 text-center">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                Ресторанти
              </h3>
              <p className="text-gray-600 mb-4">
                QR меню система, онлайн резервации, отзиви от клиенти
              </p>
              <div className="flex items-center text-orange-500 font-semibold">
                <Eye className="w-4 h-4 mr-2" />
                Вижте демо
              </div>
            </Link>
            
            <Link 
              href="/campaigns/mini-sites-new/cafes"
              className="group block p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-amber-300"
            >
              <div className="text-6xl mb-4 text-center">☕</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                Кафенета
              </h3>
              <p className="text-gray-600 mb-4">
                Онлайн меню, уютна атмосфера, work-friendly среда
              </p>
              <div className="flex items-center text-amber-600 font-semibold">
                <Eye className="w-4 h-4 mr-2" />
                Вижте демо
              </div>
            </Link>

            <div className="group p-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-6xl mb-4 text-center opacity-50">✂️</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Салони за красота
              </h3>
              <p className="text-gray-500 mb-4">
                Онлайн резервации, галерия, екип и услуги
              </p>
              <div className="text-gray-400 font-semibold">
                Скоро...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-20 bg-gradient-to-r from-orange-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Готови за вашия професионален сайт?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Получете готов уеб сайт за 24 часа - само 299лв
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-2xl"
            >
              ЗАПОЧНЕТЕ СЕГА
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-12 py-6 text-xl font-bold rounded-2xl"
            >
              СВЪРЖЕТЕ СЕ С НАС
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageMain;