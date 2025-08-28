"use client";

import React, { useState } from 'react';
import { Calculator, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingCalculator = () => {
  const [businessType, setBusinessType] = useState('restaurant');
  const [features, setFeatures] = useState({
    qrMenu: true,
    analytics: false,
    bookings: false,
    gallery: false,
    seo: true
  });

  const basePrice = 299;
  const featurePrices = {
    analytics: 50,
    bookings: 80,
    gallery: 30
  };

  const calculateTotal = () => {
    let total = basePrice;
    Object.entries(features).forEach(([feature, enabled]) => {
      if (enabled && featurePrices[feature]) {
        total += featurePrices[feature];
      }
    });
    return total;
  };

  const businessTypes = [
    { id: 'restaurant', name: 'Ресторант', icon: '🍴' },
    { id: 'cafe', name: 'Кафене', icon: '☕' },
    { id: 'services', name: 'Услуги', icon: '🔧' },
    { id: 'retail', name: 'Магазин', icon: '🛍️' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            Калкулатор за цена
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Изчислете цената за вашия уебсайт
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Персонализирайте функциите според нуждите на вашия бизнес
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Configuration */}
          <div className="space-y-8">
            {/* Business Type Selection */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Тип на бизнеса
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {businessTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setBusinessType(type.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-colors ${
                      businessType === type.id
                        ? 'border-yellow-400 bg-yellow-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="font-semibold text-gray-900">{type.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Selection */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Допълнителни функции
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">QR Меню система</div>
                    <div className="text-sm text-gray-600">Включено в базовата цена</div>
                  </div>
                  <Check className="w-5 h-5 text-green-600" />
                </div>

                <div className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">Анализи и статистики</div>
                    <div className="text-sm text-gray-600">Следене на посещения и поведение</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">+50лв</span>
                    <input
                      type="checkbox"
                      checked={features.analytics}
                      onChange={(e) => setFeatures(prev => ({...prev, analytics: e.target.checked}))}
                      className="w-5 h-5 text-yellow-600"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">Онлайн резервации</div>
                    <div className="text-sm text-gray-600">Система за записване на часове</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">+80лв</span>
                    <input
                      type="checkbox"
                      checked={features.bookings}
                      onChange={(e) => setFeatures(prev => ({...prev, bookings: e.target.checked}))}
                      className="w-5 h-5 text-yellow-600"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">Галерия със снимки</div>
                    <div className="text-sm text-gray-600">Професионална галерия с ваши снимки</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">+30лв</span>
                    <input
                      type="checkbox"
                      checked={features.gallery}
                      onChange={(e) => setFeatures(prev => ({...prev, gallery: e.target.checked}))}
                      className="w-5 h-5 text-yellow-600"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">SEO оптимизация</div>
                    <div className="text-sm text-gray-600">Включено в базовата цена</div>
                  </div>
                  <Check className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Обща цена
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Базова цена</span>
                  <span className="font-semibold text-gray-900">{basePrice}лв</span>
                </div>
                
                {features.analytics && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Анализи</span>
                    <span className="font-semibold text-gray-900">+{featurePrices.analytics}лв</span>
                  </div>
                )}
                
                {features.bookings && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Резервации</span>
                    <span className="font-semibold text-gray-900">+{featurePrices.bookings}лв</span>
                  </div>
                )}
                
                {features.gallery && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Галерия</span>
                    <span className="font-semibold text-gray-900">+{featurePrices.gallery}лв</span>
                  </div>
                )}
                
                <div className="border-t border-yellow-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">Общо</span>
                    <span className="text-3xl font-bold text-yellow-600">{calculateTotal()}лв</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Еднократно плащане, без абонаменти
                  </p>
                </div>
              </div>

              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 text-lg">
                Поръчай сега
              </Button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                Готов уебсайт за 24 часа • Гаранция 30 дни • Техническа поддръжка
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;