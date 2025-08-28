import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UrgencyCTASection = ({ onGetStarted }) => {
  const [spotsLeft, setSpotsLeft] = useState(15);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 23,
    seconds: 45
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate spots decreasing
  useEffect(() => {
    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev > 8) {
          return prev - 1;
        }
        return prev;
      });
    }, 45000); // Decrease every 45 seconds

    return () => clearInterval(spotsTimer);
  }, []);

  const urgencyReasons = [
    {
      icon: 'TrendingDown',
      title: 'Губите клиенти всеки ден',
      description: 'Без онлайн присъствие губите 5-10 потенциални клиента дневно'
    },
    {
      icon: 'Users',
      title: 'Конкурентите ви изпреварват',
      description: 'Бизнесите с уеб сайтове привличат 40% повече клиенти'
    },
    {
      icon: 'Clock',
      title: 'Времето работи срещу вас',
      description: 'Всеки изгубен ден означава изгубени възможности за продажби'
    }
  ];

  const benefits = [
    'Готов професионален сайт за 24 часа',
    'QR меню система включена',
    'Мобилна оптимизация',
    'SEO настройки за Google',
    '30-дневна гаранция',
    'Безплатна техническа поддръжка'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Urgency Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-error text-white rounded-full font-bold text-lg mb-6 animate-pulse">
            <Icon name="AlertTriangle" size={24} className="mr-3" />
            ОГРАНИЧЕНА ОФЕРТА
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Само <span className="text-error">{spotsLeft} места</span> останаха този месец!
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Не чакайте повече! Всеки ден без сайт означава загубени клиенти и приходи.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white rounded-2xl shadow-elevation-2 p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Офертата изтича след:
            </h3>
            <p className="text-text-secondary">
              Възползвайте се от специалната цена преди да е късно
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { label: 'Дни', value: timeLeft?.days },
              { label: 'Часа', value: timeLeft?.hours },
              { label: 'Мин', value: timeLeft?.minutes },
              { label: 'Сек', value: timeLeft?.seconds }
            ]?.map((unit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-lg p-4 mb-2">
                  <div className="text-2xl lg:text-3xl font-bold">
                    {unit?.value?.toString()?.padStart(2, '0')}
                  </div>
                </div>
                <div className="text-sm font-medium text-text-secondary">
                  {unit?.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Urgency Reasons */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Защо да не чакате повече?
            </h3>

            {urgencyReasons?.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-elevation-1">
                <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={reason?.icon} size={24} className="text-error" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary mb-2">
                    {reason?.title}
                  </h4>
                  <p className="text-text-secondary">
                    {reason?.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Social Proof */}
            <div className="bg-success/10 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="TrendingUp" size={24} className="text-success" />
                <h4 className="font-bold text-text-primary">Реални резултати</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">+40%</div>
                  <div className="text-sm text-text-secondary">средно увеличение</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">500+</div>
                  <div className="text-sm text-text-secondary">доволни клиенти</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="bg-white rounded-2xl shadow-elevation-2 p-8 border-2 border-primary/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Започнете още днес!
              </h3>
              <p className="text-text-secondary">
                Получете професионален сайт за по-малко от 24 часа
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits?.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-text-secondary">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-3xl font-bold text-primary">299 лв</span>
                <div className="text-left">
                  <div className="text-sm text-text-secondary line-through">399 лв</div>
                  <div className="text-sm font-medium text-success">-25% отстъпка</div>
                </div>
              </div>
              <p className="text-sm text-text-secondary">
                + 49 лв/месец поддръжка
              </p>
            </div>

            {/* CTA Button */}
            <Button
              variant="default"
              size="lg"
              fullWidth
              onClick={onGetStarted}
              iconName="ArrowRight"
              iconPosition="right"
              className="text-lg py-4 mb-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
            >
              ЗАПОЧНЕТЕ СЕГА - САМО {spotsLeft} МЕСТА
            </Button>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={16} className="text-success" />
                <span>Сигурно плащане</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>24ч доставка</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Award" size={16} className="text-warning" />
                <span>Гаранция</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Warning */}
        <div className="text-center mt-12 p-6 bg-warning/10 border border-warning/30 rounded-xl">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Icon name="AlertCircle" size={20} className="text-warning" />
            <span className="font-bold text-text-primary">Внимание!</span>
          </div>
          <p className="text-text-secondary">
            След изчерпване на местата, следващата възможност ще бъде чак следващия месец с по-висока цена.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencyCTASection;