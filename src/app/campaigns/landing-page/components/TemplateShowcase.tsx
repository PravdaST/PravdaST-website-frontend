import React, { useState, useRef, useEffect } from 'react';
import { Monitor, Smartphone, Tablet, Palette, Edit3, Eye, ArrowRight, Play, Pause, RefreshCw, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const TemplateShowcase = () => {
  const [selectedDevice, setSelectedDevice] = useState('desktop');
  const [selectedTemplate, setSelectedTemplate] = useState('restaurant');
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [customizationStep, setCustomizationStep] = useState(0);
  const [previewMode, setPreviewMode] = useState('static');
  
  const customizationSteps = ['Цветове', 'Логотип', 'Съдържание', 'Менюто', 'Финализиране'];

  const templates = {
    restaurant: {
      name: 'Ресторант "Вкус"',
      category: 'Ресторанти',
      color: '#ef4444',
      images: {
        desktop: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600',
        mobile: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=600',
        tablet: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=800'
      },
      features: ['QR меню', 'Онлайн резервации', 'Галерия ястия', 'Контакти'],
      stats: { pages: 5, load: '2.1s', mobile: '98%' }
    },
    cafe: {
      name: 'Кафе "Аромат"',
      category: 'Кафенета',
      color: '#f59e0b',
      images: {
        desktop: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600',
        mobile: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=600',
        tablet: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=800'
      },
      features: ['Дигитално меню', 'Социални мрежи', 'Програма лоялност', 'Събития'],
      stats: { pages: 4, load: '1.8s', mobile: '97%' }
    },
    services: {
      name: 'Автосервиз "Професионал"',
      category: 'Услуги',
      color: '#3b82f6',
      images: {
        desktop: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600',
        mobile: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=600',
        tablet: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=800'
      },
      features: ['Каталог услуги', 'Онлайн записване', 'Ценови листи', 'Портфолио'],
      stats: { pages: 6, load: '2.4s', mobile: '96%' }
    }
  };

  const devices = [
    { id: 'desktop', name: 'Десктоп', icon: Monitor, width: 'w-full max-w-4xl', height: 'h-96' },
    { id: 'tablet', name: 'Таблет', icon: Tablet, width: 'w-80', height: 'h-96' },
    { id: 'mobile', name: 'Мобилен', icon: Smartphone, width: 'w-64', height: 'h-96' }
  ];

  const customizationOptions = [
    {
      step: 0,
      title: 'Изберете цветова схема',
      options: [
        { color: '#ef4444', name: 'Червена', gradient: 'from-red-500 to-red-600' },
        { color: '#f59e0b', name: 'Жълта', gradient: 'from-amber-500 to-amber-600' },
        { color: '#10b981', name: 'Зелена', gradient: 'from-green-500 to-green-600' },
        { color: '#3b82f6', name: 'Синя', gradient: 'from-blue-500 to-blue-600' },
        { color: '#8b5cf6', name: 'Лилава', gradient: 'from-purple-500 to-purple-600' }
      ]
    },
    {
      step: 1,
      title: 'Качете вашето лого',
      description: 'Поддържани формати: PNG, JPG, SVG до 2MB'
    },
    {
      step: 2,
      title: 'Персонализирайте съдържанието',
      fields: ['Име на бизнеса', 'Описание', 'Адрес', 'Телефон', 'Email']
    },
    {
      step: 3,
      title: 'Конфигурирайте менюто/услугите',
      description: 'Добавете вашите продукти или услуги'
    }
  ];

  const currentTemplate = templates[selectedTemplate];

  const startCustomization = () => {
    setIsCustomizing(true);
    setCustomizationStep(0);
  };

  const nextCustomizationStep = () => {
    if (customizationStep < customizationSteps.length - 1) {
      setCustomizationStep(customizationStep + 1);
    } else {
      // Финализиране
      setIsCustomizing(false);
      setCustomizationStep(0);
    }
  };

  const togglePreview = () => {
    setPreviewMode(previewMode === 'static' ? 'live' : 'static');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Вашият сайт на <span className="text-yellow-600">всички устройства</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Всички наши шаблони са напълно адаптивни и изглеждат перфектно на всяко устройство
          </p>
        </div>

        {/* Template Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(templates).map(([key, template]) => (
            <button
              key={key}
              onClick={() => setSelectedTemplate(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedTemplate === key
                  ? 'bg-yellow-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {template.category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Device Preview */}
          <div className="lg:col-span-2">
            {/* Device Selector */}
            <div className="flex justify-center space-x-4 mb-8">
              {devices.map((device) => {
                const IconComponent = device.icon;
                return (
                  <button
                    key={device.id}
                    onClick={() => setSelectedDevice(device.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedDevice === device.id
                        ? 'bg-gray-900 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent size={20} />
                    <span>{device.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Preview Controls */}
            <div className="flex justify-center space-x-4 mb-8">
              <Button
                onClick={togglePreview}
                variant="outline"
                className="flex items-center space-x-2"
              >
                {previewMode === 'static' ? <Play size={16} /> : <Pause size={16} />}
                <span>{previewMode === 'static' ? 'Live Demo' : 'Static View'}</span>
              </Button>
              <Button
                onClick={() => window.open('#', '_blank')}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Eye size={16} />
                <span>Пълен преглед</span>
              </Button>
            </div>

            {/* Device Frame */}
            <div className="flex justify-center">
              <div className={`${devices.find(d => d.id === selectedDevice)?.width} transition-all duration-500`}>
                <div className={`bg-gray-900 rounded-3xl p-4 shadow-2xl ${
                  selectedDevice === 'desktop' ? 'rounded-2xl p-8' :
                  selectedDevice === 'tablet' ? 'rounded-3xl p-6' : 'rounded-3xl p-4'
                }`}>
                  <div className={`bg-white rounded-2xl overflow-hidden shadow-xl ${devices.find(d => d.id === selectedDevice)?.height}`}>
                    {/* Website Content Simulation */}
                    <div className="h-full relative">
                      <Image
                        src={currentTemplate.images[selectedDevice]}
                        alt={`${currentTemplate.name} - ${selectedDevice} view`}
                        fill
                        className="object-cover"
                        sizes={selectedDevice === 'desktop' ? '800px' : selectedDevice === 'tablet' ? '600px' : '400px'}
                      />
                      
                      {/* Interactive Overlay for Live Demo */}
                      {previewMode === 'live' && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <div className="bg-white rounded-xl p-6 text-center max-w-xs">
                            <div className="animate-spin w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                            <p className="text-gray-600">Зареждане на live demo...</p>
                          </div>
                        </div>
                      )}

                      {/* Template Info Overlay */}
                      <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="text-sm font-semibold text-gray-900">{currentTemplate.name}</div>
                        <div className="text-xs text-gray-600">{currentTemplate.category}</div>
                      </div>

                      {/* Performance Indicators */}
                      <div className="absolute top-4 right-4 space-y-2">
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          {currentTemplate.stats.mobile} мобилна
                        </div>
                        <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                          {currentTemplate.stats.load} зареждане
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Device Details */}
                  {selectedDevice === 'mobile' && (
                    <div className="mt-4 text-center">
                      <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Customization Panel */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Персонализиране
              </h3>

              {!isCustomizing ? (
                <>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Страници:</span>
                      <span className="font-semibold">{currentTemplate.stats.pages}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Време зареждане:</span>
                      <span className="font-semibold text-green-600">{currentTemplate.stats.load}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Мобилна оптимизация:</span>
                      <span className="font-semibold text-green-600">{currentTemplate.stats.mobile}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Включени функции:</h4>
                    <ul className="space-y-2">
                      {currentTemplate.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle size={16} className="text-green-600" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={startCustomization}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Edit3 size={20} />
                      <span>Започни персонализиране</span>
                      <ArrowRight size={20} />
                    </span>
                  </Button>
                </>
              ) : (
                <>
                  {/* Progress Indicator */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-gray-600">
                        Стъпка {customizationStep + 1} от {customizationSteps.length}
                      </span>
                      <span className="text-sm text-gray-500">
                        {Math.round(((customizationStep + 1) / customizationSteps.length) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-yellow-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${((customizationStep + 1) / customizationSteps.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Current Step */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {customizationOptions[customizationStep]?.title || customizationSteps[customizationStep]}
                    </h4>
                    
                    {customizationStep === 0 && (
                      <div className="grid grid-cols-2 gap-3">
                        {customizationOptions[0].options.map((option, index) => (
                          <button
                            key={index}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                              currentTemplate.color === option.color
                                ? 'border-yellow-400 bg-yellow-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className={`w-full h-8 bg-gradient-to-r ${option.gradient} rounded-lg mb-2`} />
                            <span className="text-sm font-medium">{option.name}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {customizationStep === 1 && (
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Palette size={24} className="text-gray-400" />
                        </div>
                        <p className="text-gray-600 mb-4">Плъзнете логото си тук</p>
                        <p className="text-sm text-gray-500">PNG, JPG, SVG до 2MB</p>
                      </div>
                    )}

                    {customizationStep === 2 && (
                      <div className="space-y-4">
                        {customizationOptions[2].fields.map((field, index) => (
                          <div key={index}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              {field}
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                              placeholder={`Въведете ${field.toLowerCase()}`}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {customizationStep === 4 && (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle size={32} className="text-green-600" />
                        </div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">
                          Готово!
                        </h5>
                        <p className="text-gray-600 mb-6">
                          Вашият сайт е готов за публикуване
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    {customizationStep > 0 && (
                      <Button
                        onClick={() => setCustomizationStep(customizationStep - 1)}
                        variant="outline"
                        className="flex-1"
                      >
                        Назад
                      </Button>
                    )}
                    <Button
                      onClick={nextCustomizationStep}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white"
                    >
                      {customizationStep === customizationSteps.length - 1 ? 'Финализиране' : 'Напред'}
                    </Button>
                  </div>
                </>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">24ч</div>
                <div className="text-sm text-green-700">готов сайт</div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">299лв</div>
                <div className="text-sm text-blue-700">еднократно</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;