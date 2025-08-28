import React from 'react';
import Icon from '../../../components/AppIcon';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'Search',
      title: 'SEO оптимизация',
      description: 'Вашият сайт ще се показва първи в Google търсенията за вашия район',
      beforeAfter: {
        before: 'Страница 5+ в Google',
        after: 'Топ 3 резултата'
      },
      color: 'text-primary'
    },
    {
      icon: 'Smartphone',
      title: 'Мобилна оптимизация',
      description: 'Перфектно изглежда на телефони, таблети и компютри',
      beforeAfter: {
        before: 'Не работи на мобилни',
        after: '100% мобилно съвместим'
      },
      color: 'text-success'
    },
    {
      icon: 'Clock',
      title: '24 часа доставка',
      description: 'Получавате готовия сайт за по-малко от един работен ден',
      beforeAfter: {
        before: '2-3 месеца разработка',
        after: '24 часа готов сайт'
      },
      color: 'text-accent'
    },
    {
      icon: 'MapPin',
      title: 'Google Maps интеграция',
      description: 'Клиентите ви намират лесно с вградена карта и навигация',
      beforeAfter: {
        before: 'Трудно намиране',
        after: 'Лесна навигация'
      },
      color: 'text-warning'
    },
    {
      icon: 'Phone',
      title: 'Click-to-call функция',
      description: 'Директно обаждане с едно докосване от мобилния телефон',
      beforeAfter: {
        before: 'Записване на номера',
        after: 'Директно обаждане'
      },
      color: 'text-purple-600'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика и статистики',
      description: 'Следете посетителите, запитванията и конверсиите в реalno време',
      beforeAfter: {
        before: 'Няма данни',
        after: 'Пълна аналитика'
      },
      color: 'text-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Всичко необходимо за успешен онлайн бизнес
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Нашите мини-сайтове включват всички ключови функции за привличане и задържане на клиенти
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-elevation-1 hover:shadow-elevation-2 transition-smooth p-8 group">
              <div className="space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-smooth ${feature?.color}`}>
                  <Icon name={feature?.icon} size={32} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-text-primary">
                    {feature?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature?.description}
                  </p>
                </div>

                {/* Before/After */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Icon name="X" size={16} className="text-error" />
                    <span className="text-sm text-text-secondary">
                      Преди: {feature?.beforeAfter?.before}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm font-medium text-success">
                      След: {feature?.beforeAfter?.after}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-white rounded-2xl shadow-elevation-1 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Допълнителни предимства включени в цената
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Shield', text: 'SSL сертификат за сигурност' },
              { icon: 'Zap', text: 'Бързо зареждане под 3 секунди' },
              { icon: 'Globe', text: 'Професионален домейн .bg' },
              { icon: 'Headphones', text: 'Безплатна техническа поддръжка' }
            ]?.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Icon name={benefit?.icon} size={20} className="text-primary" />
                <span className="text-sm font-medium text-text-primary">{benefit?.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;