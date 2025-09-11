"use client";

import React, { useState } from 'react';
import { ArrowRight, Check, Phone, Mail, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LeadGenerationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    businessName: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderInfo, setOrderInfo] = useState<{ id: number; status: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const businessTypes = [
    'Ресторант',
    'Кафене/Бар', 
    'Фаст фууд',
    'Пицария',
    'Автосервиз',
    'Фризьорски салон',
    'Козметичен салон',
    'Фитнес център',
    'Магазин',
    'Друго'
  ];

  // Map business types to template types for the API
  const getTemplateType = (businessType: string): string => {
    const mapping: Record<string, string> = {
      'Ресторант': 'restaurant',
      'Кафене/Бар': 'cafe',
      'Фаст фууд': 'restaurant',
      'Пицария': 'restaurant',
      'Автосервиз': 'services',
      'Фризьорски салон': 'beauty',
      'Козметичен салон': 'beauty',
      'Фитнес център': 'services',
      'Магазин': 'shop',
      'Друго': 'services'
    };
    return mapping[businessType] || 'services';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone || !formData.businessName || !formData.businessType) {
        throw new Error('Моля попълнете всички задължителни полета');
      }

      // Prepare order data for API
      const orderData = {
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        businessName: formData.businessName,
        businessType: formData.businessType,
        message: formData.message,
        templateType: getTemplateType(formData.businessType),
        customizationData: {
          source: 'landing-page-form',
          submittedAt: new Date().toISOString()
        }
      };

      // Submit order to API
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Възникна грешка при изпращане на заявката');
      }

      if (!result.success) {
        throw new Error(result.message || 'Възникна грешка при обработка на заявката');
      }

      // Success - store order info and show success state
      setOrderInfo({
        id: result.orderId,
        status: result.order?.status || 'pending'
      });
      setIsSubmitted(true);
      
      console.log('Order submitted successfully:', {
        orderId: result.orderId,
        customerEmail: formData.email,
        businessName: formData.businessName
      });

    } catch (error) {
      console.error('Order submission error:', error);
      setError(error instanceof Error ? error.message : 'Възникна грешка при изпращане на заявката');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Благодарим ви за заявката!
            </h2>
            
            <p className="text-xl text-gray-600 mb-4">
              Ще се свържем с вас в рамките на 15 минути, за да обсъдим детайлите за вашия професионален уебсайт.
            </p>
            
            {orderInfo && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Номер на поръчката:</strong> #{orderInfo.id} | <strong>Статус:</strong> {orderInfo.status === 'pending' ? 'В обработка' : orderInfo.status}
                </p>
              </div>
            )}
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-600 mb-1">15 мин</div>
                <div className="text-gray-600">за обаждане</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">24 ч</div>
                <div className="text-gray-600">готов сайт</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">30 дни</div>
                <div className="text-gray-600">гаранция</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Готови за повече клиенти?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Оставете заявка и ще получите персонална оферта за вашия бизнес за максимум 15 минути.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Бърз отговор
                  </h3>
                  <p className="text-gray-600">
                    Ще се свържем с вас за максимум 15 минути от изпращане на заявката
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Персонализирана оферта
                  </h3>
                  <p className="text-gray-600">
                    Ще получите точна цена според нуждите на вашия бизнес
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Готов за 24 часа
                  </h3>
                  <p className="text-gray-600">
                    Вашият професионален уебсайт ще бъде готов за максимум 24 часа
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Име и фамилия *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Въведете име и фамилия"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="+359 8XX XXX XXX"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Имейл адрес *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                    Име на бизнеса *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Име на вашия бизнес"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                    Тип бизнес *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Изберете тип бизнес</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Допълнителна информация (опционално)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Разкажете ни повече за нуждите на вашия бизнес..."
                />
              </div>

              {/* Error Display */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-800">{error}</p>
                    </div>
                    <div className="ml-auto pl-3">
                      <button
                        type="button"
                        onClick={() => setError(null)}
                        className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    Изпращане...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Получи персонална оферта
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                )}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Ще се свържем с вас за максимум 15 минути. Без спам, без задължения.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenerationForm;