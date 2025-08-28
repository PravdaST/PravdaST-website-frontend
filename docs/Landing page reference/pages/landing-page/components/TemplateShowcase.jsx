import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const TemplateShowcase = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [businessName, setBusinessName] = useState('');
  const [previewMode, setPreviewMode] = useState('desktop');
  const [isCustomizing, setIsCustomizing] = useState(false);

  const templates = [
    {
      id: 1,
      name: 'Елегант',
      category: 'Ресторант',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
      preview: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
      color: 'red',
      features: ['QR Меню', 'Резервации', 'Галерия', 'Контакти'],
      description: 'Класически дизайн за традиционни ресторанти'
    },
    {
      id: 2,
      name: 'Модерн',
      category: 'Кафе',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600',
      preview: 'https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=400',
      color: 'amber',
      features: ['Дигитално меню', 'Лоялност', 'События', 'Социални'],
      description: 'Съвременен стил за модерни кафенета'
    },
    {
      id: 3,
      name: 'Професионал',
      category: 'Услуги',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600',
      preview: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
      color: 'blue',
      features: ['Каталог', 'Записване', 'Портфолио', 'Отзиви'],
      description: 'Бизнес дизайн за професионални услуги'
    },
    {
      id: 4,
      name: 'Луксозен',
      category: 'Красота',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
      preview: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
      color: 'pink',
      features: ['Портфолио', 'Записване', 'Екип', 'Услуги'],
      description: 'Елегантен дизайн за салони за красота'
    },
    {
      id: 5,
      name: 'Минимал',
      category: 'Универсален',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
      preview: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
      color: 'gray',
      features: ['Чист дизайн', 'Бърз', 'Адаптивен', 'SEO'],
      description: 'Минималистичен дизайн за всякакъв бизнес'
    },
    {
      id: 6,
      name: 'Креативен',
      category: 'Изкуство',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600',
      preview: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400',
      color: 'purple',
      features: ['Галерия', 'Блог', 'Контакти', 'Социални'],
      description: 'Креативен дизайн за артисти и дизайнери'
    }
  ];

  const currentTemplate = templates?.[selectedTemplate];

  const handleBusinessNameChange = (e) => {
    setBusinessName(e?.target?.value);
    setIsCustomizing(true);
    setTimeout(() => setIsCustomizing(false), 1000);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      red: { bg: 'bg-red-500', text: 'text-red-600', border: 'border-red-200' },
      amber: { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200' },
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-600', border: 'border-pink-200' },
      gray: { bg: 'bg-gray-500', text: 'text-gray-600', border: 'border-gray-200' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200' }
    };
    return colorMap?.[color] || colorMap?.blue;
  };

  return (
    <section id="templates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Готови <span className="text-accent">шаблони</span> за вашия бизнес
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Изберете дизайн, добавете вашето име и сайтът е готов за 24 часа
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Template Grid */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {templates?.map((template, index) => (
                <div
                  key={template?.id}
                  onClick={() => setSelectedTemplate(index)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedTemplate === index
                      ? `${getColorClasses(template?.color)?.border} border-2 bg-gradient-to-r from-${template?.color}-50 to-white conversion-shadow`
                      : 'border border-muted hover:border-muted-foreground bg-white hover:conversion-shadow'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={template?.image}
                        alt={template?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-bold text-foreground">{template?.name}</h3>
                        {selectedTemplate === index && (
                          <Icon name="CheckCircle" size={16} className={getColorClasses(template?.color)?.text} />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{template?.category}</p>
                      <div className="flex flex-wrap gap-1">
                        {template?.features?.slice(0, 2)?.map((feature, i) => (
                          <span key={i} className={`text-xs px-2 py-1 rounded-full ${
                            selectedTemplate === index 
                              ? `${getColorClasses(template?.color)?.bg} text-white`
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Customization Panel */}
            <div className="mt-8 bg-muted rounded-2xl p-6">
              <h4 className="font-bold text-foreground mb-4">Персонализиране</h4>
              <Input
                label="Име на бизнеса"
                placeholder="Въведете името на вашия бизнес"
                value={businessName}
                onChange={handleBusinessNameChange}
                className="mb-4"
              />
              <div className="text-sm text-muted-foreground">
                Вижте как ще изглежда с вашето име в реално време
              </div>
            </div>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2">
            <div className="bg-muted rounded-3xl p-8">
              {/* Preview Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Преглед: {currentTemplate?.name}
                  </h3>
                  {isCustomizing && (
                    <div className="flex items-center space-x-1 text-accent">
                      <Icon name="Loader2" size={16} className="animate-spin" />
                      <span className="text-sm">Актуализиране...</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setPreviewMode('desktop')}
                    className={`p-2 rounded-lg transition-colors ${
                      previewMode === 'desktop' ?'bg-accent text-accent-foreground' :'bg-white text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name="Monitor" size={20} />
                  </button>
                  <button
                    onClick={() => setPreviewMode('mobile')}
                    className={`p-2 rounded-lg transition-colors ${
                      previewMode === 'mobile' ?'bg-accent text-accent-foreground' :'bg-white text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name="Smartphone" size={20} />
                  </button>
                </div>
              </div>

              {/* Preview Frame */}
              <div className={`bg-white rounded-2xl overflow-hidden conversion-shadow ${
                previewMode === 'mobile' ? 'max-w-sm mx-auto' : 'w-full'
              }`}>
                {/* Mock Browser/Phone Frame */}
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                  {previewMode === 'desktop' ? (
                    <>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-muted-foreground">
                        {businessName || currentTemplate?.name?.toLowerCase()}.mini-sites.bg
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 text-center">
                      <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto"></div>
                    </div>
                  )}
                </div>

                {/* Mock Website Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className={`text-center mb-6 p-4 rounded-xl ${getColorClasses(currentTemplate?.color)?.bg}`}>
                    <h1 className="text-2xl font-bold text-white mb-2">
                      {businessName || `${currentTemplate?.category} "Демо"`}
                    </h1>
                    <p className="text-white/90 text-sm">{currentTemplate?.description}</p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {currentTemplate?.features?.map((feature, index) => (
                      <div key={index} className="bg-muted rounded-lg p-3 text-center">
                        <div className={`w-8 h-8 ${getColorClasses(currentTemplate?.color)?.bg} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                          <Icon name="Check" size={16} color="white" />
                        </div>
                        <div className="text-sm font-medium text-foreground">{feature}</div>
                      </div>
                    ))}
                  </div>

                  {/* Sample Content */}
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <Button
                      fullWidth
                      className={`${getColorClasses(currentTemplate?.color)?.bg} hover:opacity-90 text-white font-semibold`}
                    >
                      Свържете се с нас
                    </Button>
                  </div>
                </div>
              </div>

              {/* Template Info */}
              <div className="mt-6 bg-white rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {currentTemplate?.name} - {currentTemplate?.category}
                    </h4>
                    <p className="text-muted-foreground mb-4">{currentTemplate?.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {currentTemplate?.features?.map((feature, index) => (
                        <span key={index} className={`px-3 py-1 rounded-full text-sm ${
                          getColorClasses(currentTemplate?.color)?.bg
                        } text-white`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent mb-1">299 лв</div>
                    <div className="text-sm text-muted-foreground">еднократно</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Харесва ви този дизайн?
            </h3>
            <p className="text-muted-foreground mb-6">
              Започнете сега и получете готов сайт за 24 часа с вашето съдържание
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Започни с този дизайн
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
                iconName="Eye"
                iconPosition="left"
              >
                Виж всички шаблони
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;