import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';


const FeaturesGrid = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  const features = [
    {
      id: 1,
      icon: 'MapPin',
      title: 'Google Maps интеграция',
      description: 'Клиентите ви намират лесно с интегрирана карта',
      color: 'bg-red-500',
      stats: '+25% нови клиенти',
      example: 'Ресторант "Старата къща" - София',
      details: `Автоматично добавяме вашия бизнес в Google Maps с точна локация, работно време и контакти. Клиентите могат да получат указания директно от сайта ви.`,
      benefits: [
        'Точна GPS локация',
        'Работно време',
        'Телефон за контакт',
        'Указания за пътуване'
      ]
    },
    {
      id: 2,
      icon: 'Smartphone',
      title: 'Мобилна оптимизация',
      description: '100% адаптивен дизайн за всички устройства',
      color: 'bg-blue-500',
      stats: '85% мобилен трафик',
      example: 'Кафе "Аромат" - Пловдив',
      details: `Вашият сайт изглежда перфектно на телефони, таблети и компютри. Бързо зареждане и лесна навигация на всички устройства.`,
      benefits: [
        'Адаптивен дизайн',
        'Бързо зареждане',
        'Touch-friendly интерфейс',
        'Кросбраузърна съвместимост'
      ]
    },
    {
      id: 3,
      icon: 'QrCode',
      title: 'QR меню система',
      description: 'Безконтактно поръчване директно от телефона',
      color: 'bg-green-500',
      stats: '+40% поръчки',
      example: 'Пицария "Белла" - Бургас',
      details: `Клиентите сканират QR код и виждат менюто на телефона си. Могат да поръчват директно без чакане на сервитьор.`,
      benefits: [
        'Безконтактно меню',
        'Директни поръчки',
        'Актуални цени',
        'Многоезично меню'
      ]
    },
    {
      id: 4,
      icon: 'Clock',
      title: '24-часова доставка',
      description: 'Готов сайт за един работен ден',
      color: 'bg-orange-500',
      stats: 'Гарантирано 24ч',
      example: 'Автосервиз "Експерт" - Стара Загора',
      details: `След потвърждение на поръчката, вашият сайт е готов и онлайн за максимум 24 часа. Без чакане, без забавяне.`,
      benefits: [
        'Експресна доставка',
        'Готово съдържание',
        'Тестван дизайн',
        'Веднага онлайн'
      ]
    },
    {
      id: 5,
      icon: 'Search',
      title: 'SEO оптимизация',
      description: 'Намират ви лесно в Google търсенето',
      color: 'bg-purple-500',
      stats: 'Топ 3 в Google',
      example: 'Салон "Красота" - Русе',
      details: `Оптимизираме сайта ви за търсачките с правилни заглавия, описания и структура. Клиентите ви намират първи в Google.`,
      benefits: [
        'Google оптимизация',
        'Локално SEO',
        'Бързо индексиране',
        'Аналитика трафик'
      ]
    },
    {
      id: 6,
      icon: 'Share2',
      title: 'Социални мрежи',
      description: 'Интеграция с Facebook, Instagram и други',
      color: 'bg-pink-500',
      stats: '+30% последователи',
      example: 'Фризьорски салон "Стил" - Варна',
      details: `Свързваме сайта ви с всички социални мрежи. Клиентите могат да споделят, харесват и следват бизнеса ви директно.`,
      benefits: [
        'Facebook интеграция',
        'Instagram галерия',
        'Споделяне съдържание',
        'Социални бутони'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureId = parseInt(entry.target.dataset.featureId);
            setVisibleFeatures(prev => [...new Set([...prev, featureId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    features?.forEach((feature) => {
      const element = document.querySelector(`[data-feature-id="${feature?.id}"]`);
      if (element) observer?.observe(element);
    });

    return () => observer?.disconnect();
  }, []);

  const handleFeatureClick = (featureId) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted via-white to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Всичко необходимо за <span className="text-accent">вашия успех</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            6 ключови функции, които ще увеличат продажбите ви от първия ден
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <div
              key={feature?.id}
              data-feature-id={feature?.id}
              onClick={() => handleFeatureClick(feature?.id)}
              className={`group relative bg-white rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:conversion-shadow ${
                visibleFeatures?.includes(feature?.id) 
                  ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'
              } ${
                expandedFeature === feature?.id 
                  ? 'scale-105 ring-2 ring-accent z-10' :'hover:scale-102'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature?.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={feature?.icon} size={32} color="white" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{feature?.title}</h3>
                <p className="text-muted-foreground mb-4">{feature?.description}</p>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 ${feature?.color} text-white rounded-full text-sm font-semibold`}>
                    {feature?.stats}
                  </div>
                  <Icon 
                    name={expandedFeature === feature?.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground group-hover:text-accent transition-colors" 
                  />
                </div>

                {/* Example */}
                <div className="text-sm text-muted-foreground">
                  <Icon name="MapPin" size={14} className="inline mr-1" />
                  {feature?.example}
                </div>
              </div>

              {/* Expanded Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                expandedFeature === feature?.id 
                  ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-muted pt-6">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {feature?.details}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Включва:</h4>
                    {feature?.benefits?.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 ${feature?.color} rounded-full`}></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white rounded-3xl p-8 conversion-shadow">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Доволни клиенти</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">40%</div>
              <div className="text-muted-foreground">Средно увеличение</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24ч</div>
              <div className="text-muted-foreground">Време за доставка</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning mb-2">4.9★</div>
              <div className="text-muted-foreground">Средна оценка</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent to-primary rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Готови сте да увеличите продажбите си?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Всички тези функции са включени в цената от 299 лв. Без скрити такси.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-accent rounded-xl font-semibold hover:bg-gray-50 transition-colors text-lg">
                Започни сега - 299 лв
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors text-lg">
                Безплатна консултация
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;