"use client";

import React from 'react';
import { Users, Clock, Star, TrendingUp } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Доволни клиенти",
      subtext: "в цяла България"
    },
    {
      icon: Clock,
      number: "24ч",
      label: "Време за доставка",
      subtext: "гарантирано"
    },
    {
      icon: Star,
      number: "4.9★",
      label: "Рейтинг",
      subtext: "от клиенти"
    },
    {
      icon: TrendingUp,
      number: "+40%",
      label: "Повече продажби",
      subtext: "в първия месец"
    }
  ];

  return (
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
          {stats.map((stat, index) => (
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

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Готови да се присъедините към успешните български бизнеси?
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-full font-semibold">
            🚀 Започнете още днес
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;