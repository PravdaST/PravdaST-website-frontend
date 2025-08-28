"use client";

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TemplateShowcase = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);

  const templates = [
    {
      id: 1,
      name: 'Ресторант "Елегант"',
      category: 'Ресторанти',
      image: '/images/template-restaurant.jpg',
      preview: 'https://template-restaurant.demo',
      features: ['QR Меню', 'Резервации', 'Галерия', 'Контакти'],
      colors: ['#8B5A2B', '#D4AF37', '#FFF8DC'],
      style: 'Елегантен, топъл дизайн с класически елементи'
    },
    {
      id: 2,
      name: 'Кафе "Модерно"',
      category: 'Кафенета',
      image: '/images/template-cafe.jpg',
      preview: 'https://template-cafe.demo',
      features: ['Дигитално Меню', 'Лоялност', 'Instagram', 'События'],
      colors: ['#6F4E37', '#F4E4BC', '#FFFFFF'],
      style: 'Минималистичен, съвременен дизайн за младежи'
    },
    {
      id: 3,
      name: 'Автосервиз "Професионал"',
      category: 'Услуги',
      image: '/images/template-auto.jpg',
      preview: 'https://template-auto.demo',
      features: ['Услуги', 'Записване', 'Галерия', 'Контакти'],
      colors: ['#1E3A8A', '#3B82F6', '#E5F3FF'],
      style: 'Професионален, технологичен дизайн'
    },
    {
      id: 4,
      name: 'Козметичен салон "Стил"',
      category: 'Красота',
      image: '/images/template-beauty.jpg',
      preview: 'https://template-beauty.demo',
      features: ['Процедури', 'Записване', 'Портфолио', 'Отзиви'],
      colors: ['#EC4899', '#F9FAFB', '#FDF2F8'],
      style: 'Изискан, женствен дизайн с нежни цветове'
    },
    {
      id: 5,
      name: 'Фитнес център "Сила"',
      category: 'Фитнес',
      image: '/images/template-fitness.jpg',
      preview: 'https://template-fitness.demo',
      features: ['Програми', 'Абонаменти', 'Тренировки', 'Съвети'],
      colors: ['#7C3AED', '#A855F7', '#F3E8FF'],
      style: 'Енергичен, спортен дизайн с ярки акценти'
    }
  ];

  const nextTemplate = () => {
    setCurrentTemplate((prev) => (prev + 1) % templates.length);
  };

  const prevTemplate = () => {
    setCurrentTemplate((prev) => (prev - 1 + templates.length) % templates.length);
  };

  const currentData = templates[currentTemplate];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Готови шаблони за всеки бизнес
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Професионално изработени дизайни, готови за използване в рамките на 24 часа
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Template Preview */}
          <div className="relative">
            <div className="bg-gray-900 p-4 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden" style={{ aspectRatio: '9/16' }}>
                {/* Mock Mobile Screen */}
                <div className="p-6 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900">
                      {currentData.name}
                    </h3>
                    <span className="text-yellow-500 text-sm">
                      ⭐⭐⭐⭐⭐
                    </span>
                  </div>

                  {/* Color Palette */}
                  <div className="flex space-x-2 mb-6">
                    {currentData.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-gray-200"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {currentData.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">{feature}</span>
                        <span className="text-green-600 text-sm">✓ Включено</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                      Разгледай още
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTemplate}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTemplate}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Template Details */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                {currentData.category}
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentData.name}
              </h3>
              <p className="text-gray-600 text-lg">
                {currentData.style}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-semibold text-gray-900">
                Включени функции:
              </h4>
              <ul className="space-y-2">
                {currentData.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-white w-full sm:w-auto"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Виж демо версия
              </Button>
              
              <p className="text-sm text-gray-500">
                * Всички шаблони се персонализират с вашето съдържание и брандинг
              </p>
            </div>

            {/* Template Indicators */}
            <div className="flex space-x-2 mt-8">
              {templates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTemplate(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTemplate ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;