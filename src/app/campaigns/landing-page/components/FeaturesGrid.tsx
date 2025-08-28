import React, { useState, useEffect } from 'react';
import { 
  Zap, Shield, Smartphone, Globe, BarChart3, Settings, 
  Clock, Users, Star, ArrowRight, ChevronDown, ChevronUp, 
  Check, TrendingUp, Award, Headphones 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturesGrid = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [visibleStats, setVisibleStats] = useState(false);
  const [activeTab, setActiveTab] = useState('technical');

  const featureTabs = {
    technical: {
      name: 'Техническо',
      icon: Settings,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    business: {
      name: 'Бизнес',
      icon: TrendingUp,
      color: 'text-green-600',  
      bgColor: 'bg-green-50'
    },
    support: {
      name: 'Поддръжка',
      icon: Headphones,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  };

  const allFeatures = {
    technical: [
      {
        id: 'speed',
        icon: Zap,
        title: 'Светкавично бързо',
        shortDescription: 'Зареждане под 3 секунди',
        fullDescription: 'Нашите сайтове са оптимизирани за максимална скорост с най-новите технологии за кеширане, компресия на изображения и CDN доставка.',
        metrics: { value: '2.1с', label: 'средно зареждане' },
        benefits: [
          'По-добро SEO класиране',
          'По-ниско напускане на посетители',
          'По-високи конверсии',
          'Подобрено потребителско преживяване'
        ],
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200'
      },
      {
        id: 'security',
        icon: Shield,
        title: 'Пълна сигурност',
        shortDescription: 'SSL, защита от хакери',
        fullDescription: 'Всички сайтове включват SSL сертификат, защита от DDoS атаки, автоматични backup-и и мониторинг на сигурността 24/7.',
        metrics: { value: '99.9%', label: 'време без проблеми' },
        benefits: [
          'SSL сертификат включен',
          'Автоматични backup-и',
          'Защита от DDoS',
          '24/7 мониторинг'
        ],
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
      },
      {
        id: 'mobile',
        icon: Smartphone,
        title: 'Мобилна оптимизация',
        shortDescription: 'Перфектен изглед на всички устройства',
        fullDescription: 'Responsive дизайн който гарантира отлично изживяване на телефони, таблети и компютри с автоматично адаптиране на съдържанието.',
        metrics: { value: '98%', label: 'мобилна съвместимост' },
        benefits: [
          'Responsive дизайн',
          'Touch-friendly навигация',
          'Оптимизирани изображения',
          'Бързо зареждане на мобилни'
        ],
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
      },
      {
        id: 'seo',
        icon: Globe,
        title: 'SEO готов',
        shortDescription: 'Оптимизиран за търсачки',
        fullDescription: 'Вграденa SEO оптимизация с structured data, meta tags, sitemap и всичко необходимо за висока позиция в Google.',
        metrics: { value: 'Top 3', label: 'позиция в Google' },
        benefits: [
          'On-page SEO оптимизация',
          'Structured data markup',
          'XML sitemap',
          'Google Analytics интеграция'
        ],
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200'
      }
    ],
    business: [
      {
        id: 'analytics',
        icon: BarChart3,
        title: 'Детайлна аналитика',
        shortDescription: 'Следете всеки клик и конверсия',
        fullDescription: 'Подробни отчети за посещения, конверсии, най-популярни страници и поведение на потребителите с интеграция към Google Analytics.',
        metrics: { value: '15+', label: 'метрики за следене' },
        benefits: [
          'Реално време статистики',
          'Конверсионни фуниди', 
          'Демографски анализи',
          'Месечни отчети'
        ],
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200'
      },
      {
        id: 'growth',
        icon: TrendingUp,
        title: 'Растежни инструменти',
        shortDescription: 'Вградени инструменти за маркетинг',
        fullDescription: 'Email subscription, social media интеграция, A/B testing възможности и инструменти за lead generation.',
        metrics: { value: '+45%', label: 'среден растеж на клиенти' },
        benefits: [
          'Email маркетинг',
          'Social media feeds',
          'Lead capture форми',
          'A/B тестване'
        ],
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200'
      },
      {
        id: 'customers',
        icon: Users,
        title: 'Управление клиенти',
        shortDescription: 'CRM интеграция',
        fullDescription: 'Автоматично събиране на клиентски данни, интеграция с популярни CRM системи и инструменти за customer journey tracking.',
        metrics: { value: '500+', label: 'доволни клиенти' },
        benefits: [
          'CRM интеграция',
          'Customer journey tracking',
          'Автоматично lead scoring',
          'Сегментация на клиенти'
        ],
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-50',
        borderColor: 'border-cyan-200'
      },
      {
        id: 'quality',
        icon: Award,
        title: 'Премиум качество',
        shortDescription: 'Професионален дизайн и код',
        fullDescription: 'Всеки сайт е създаден с най-високите стандарти за качество, тестван на множество устройства и браузъри.',
        metrics: { value: '5★', label: 'средна оценка' },
        benefits: [
          'Професионален дизайн',
          'Clean code стандарти',
          'Cross-browser тестване',
          'Performance оптимизация'
        ],
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200'
      }
    ],
    support: [
      {
        id: 'delivery',
        icon: Clock,
        title: '24-часова доставка',
        shortDescription: 'Готов сайт за един ден',
        fullDescription: 'Благодарение на нашите автоматизирани системи и готови шаблони, вашият сайт ще бъде готов за максимум 24 часа.',
        metrics: { value: '24ч', label: 'време за доставка' },
        benefits: [
          'Бърза доставка',
          'Готови шаблони',
          'Автоматизиран процес',
          'Качествена проверка'
        ],
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200'
      },
      {
        id: 'support',
        icon: Headphones,
        title: 'Експертна поддръжка',
        shortDescription: '24/7 техническа помощ',
        fullDescription: 'Нашият екип от експерти е винаги на разположение за всякакви въпроси, промени или техническа помощ.',
        metrics: { value: '24/7', label: 'поддръжка' },
        benefits: [
          'Директна връзка с експерти',
          'Бърз отговор под 2 часа',
          'Безплатни малки промени',
          'Обучение как да ползвате сайта'
        ],
        color: 'text-pink-600',
        bgColor: 'bg-pink-50', 
        borderColor: 'border-pink-200'
      },
      {
        id: 'satisfaction',
        icon: Star,
        title: 'Гаранция за качество',
        shortDescription: '100% гаранция за доволство',
        fullDescription: 'Ако не сте напълно доволни от резултата, връщаме парите ви или правим промените безплатно.',
        metrics: { value: '100%', label: 'гаранция' },
        benefits: [
          'Пълна гаранция за парите',
          'Неограничени ревизии',
          'Качествена проверка',
          'Доволни клиенти'
        ],
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200'
      }
    ]
  };

  const businessStats = [
    { icon: Users, value: '500+', label: 'Доволни клиенти', color: 'text-blue-600' },
    { icon: TrendingUp, value: '+45%', label: 'Среден растеж', color: 'text-green-600' },
    { icon: Clock, value: '24ч', label: 'Време за доставка', color: 'text-orange-600' },
    { icon: Star, value: '4.9/5', label: 'Клиентска оценка', color: 'text-yellow-600' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFeature = (featureId) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  const currentFeatures = allFeatures[activeTab];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Всичко което <span className="text-yellow-600">бизнесът ви</span> се нуждае
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Професионални функции, които правят разликата между обикновен сайт и мощен бизнес инструмент
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(featureTabs).map(([tabId, tab]) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tabId}
                onClick={() => setActiveTab(tabId)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg ${
                  activeTab === tabId
                    ? `${tab.bgColor} ${tab.color} scale-105 ring-2 ring-offset-2`
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <IconComponent size={24} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {currentFeatures.map((feature) => {
            const IconComponent = feature.icon;
            const isExpanded = expandedFeature === feature.id;

            return (
              <div
                key={feature.id}
                className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 cursor-pointer ${
                  isExpanded ? 'ring-4 ring-yellow-400 ring-opacity-30 scale-105' : 'hover:shadow-2xl hover:-translate-y-2'
                }`}
                onClick={() => toggleFeature(feature.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center`}>
                    <IconComponent size={32} className={feature.color} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${feature.color} mb-1`}>
                      {feature.metrics.value}
                    </div>
                    <div className="text-sm text-gray-500">{feature.metrics.label}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isExpanded ? feature.fullDescription : feature.shortDescription}
                </p>

                {/* Expandable Benefits */}
                {isExpanded && (
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-900">Включени предимства:</h4>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, index) => (
                        <li 
                          key={index} 
                          className="flex items-center space-x-3 transition-all duration-300"
                          style={{ 
                            opacity: isExpanded ? 1 : 0,
                            transform: isExpanded ? 'translateX(0)' : 'translateX(-20px)',
                            transitionDelay: `${index * 100}ms`
                          }}
                        >
                          <div className={`w-2 h-2 ${feature.color.replace('text-', 'bg-')} rounded-full`} />
                          <span className="text-gray-700">{benefit}</span>
                          <Check size={16} className="text-green-600 ml-auto" />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    className={`${feature.color} hover:${feature.bgColor} font-semibold`}
                  >
                    Научи повече
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                  
                  <div className={`${feature.color} transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Stats */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Резултати, които говорят сами за себе си
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {businessStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${
                    visibleStats 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white text-opacity-90 text-sm">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              Започни сега - само 299лв
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;