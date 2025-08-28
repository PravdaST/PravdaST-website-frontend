"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Иван Петров',
      business: 'Ресторант "Старата къща"',
      location: 'София',
      rating: 5,
      text: 'След като получихме мини-сайта с QR меню, поръчките се увеличиха с 45% за първия месец. Клиентите обожават че могат да сканират кода и да видят цялото меню с цени. Много по-бързо обслужване!',
      revenue: '+1,800лв месечно',
      timeframe: '2 седмици'
    },
    {
      id: 2,
      name: 'Мария Георгиева',
      business: 'Кафе "Аромат"',
      location: 'Пловдив',
      rating: 5,
      text: 'Младите хора харесват да сканират QR кода вместо да чакат меню. Продажбите ни се увеличиха значително и спестяваме време на персонала. Инвестицията се върна за по-малко от месец.',
      revenue: '+1,200лв месечно', 
      timeframe: '3 седмици'
    },
    {
      id: 3,
      name: 'Георги Стоянов',
      business: 'Автосервиз "Експерт"',
      location: 'Стара Загора',
      rating: 5,
      text: 'Клиентите вече могат да видят всичките ни услуги и цени онлайн преди да дойдат. Записванията се удвоиха! Много практично и професионално изглежда.',
      revenue: '+2,500лв месечно',
      timeframe: '1 месец'
    },
    {
      id: 4,
      name: 'Елена Димитрова',
      business: 'Салон "Красота"',
      location: 'Варна',
      rating: 5,
      text: 'Сайтът ни помогна да привлечем нови клиенти. Особено харесват галерията с нашите работи и че могат да си резервират час директно онлайн. Страхотно решение!',
      revenue: '+950лв месечно',
      timeframe: '2 седмици'
    },
    {
      id: 5,
      name: 'Петър Иванов',
      business: 'Пицария "Белла"',
      location: 'Бургас',
      rating: 5,
      text: 'QR менюто ни спести много време. Клиентите поръчват директно от телефона си, а ние се фокусираме върху готвенето. Доставчиците също много лесно намират информацията.',
      revenue: '+1,650лв месечно',
      timeframe: '3 седмици'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Какво казват нашите клиенти
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реални отзиви от бизнеси, които вече използват нашите решения
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={goToPrev}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              "{currentTestimonial.text}"
            </blockquote>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="font-bold text-xl text-gray-900 mb-1">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-600 mb-1">
                  {currentTestimonial.business}
                </div>
                <div className="text-gray-500 text-sm">
                  📍 {currentTestimonial.location}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {currentTestimonial.revenue}
                  </div>
                  <div className="text-sm text-green-700">
                    допълнителен приход
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {currentTestimonial.timeframe}
                  </div>
                  <div className="text-sm text-blue-700">
                    до първите резултати
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-600 mb-2">487+</div>
            <div className="text-gray-600">Доволни клиенти</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">42%</div>
            <div className="text-gray-600">Среден ръст на продажбите</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">24ч</div>
            <div className="text-gray-600">Готов уебсайт</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
            <div className="text-gray-600">Препоръчителност</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;