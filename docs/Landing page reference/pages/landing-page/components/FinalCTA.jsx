import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FinalCTA = () => {
  const [spotsLeft, setSpotsLeft] = useState(20);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        // Add urgency when time is low
        if (hours < 2) {
          setIsUrgent(true);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    // Simulate spots decreasing
    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev > 5 && Math.random() > 0.7) {
          return prev - 1;
        }
        return prev;
      });
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(spotsTimer);
    };
  }, []);

  const handleStartNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatTime = (time) => {
    return time?.toString()?.padStart(2, '0');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-warning rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-success rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgency Banner */}
        <div className={`text-center mb-8 transition-all duration-500 ${isUrgent ? 'animate-pulse' : ''}`}>
          <div className="inline-flex items-center space-x-2 bg-warning text-warning-foreground px-6 py-3 rounded-full font-bold">
            <Icon name="AlertTriangle" size={20} />
            <span>ОГРАНИЧЕНА ОФЕРТА - САМО {spotsLeft} МЕСТА ОСТАНАХА!</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Не чакайте повече!
            <br />
            <span className="text-accent">Започнете днес</span>
          </h2>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Всеки ден без онлайн присъствие означава загубени клиенти и приходи. 
            Вашите конкуренти вече действат - не оставайте назад!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              Специалната цена изтича след:
            </h3>
            <p className="text-primary-foreground/80">
              След това цената се връща на 399 лв
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-4 text-center">
              <div className={`text-3xl font-bold mb-1 ${isUrgent ? 'text-error' : 'text-accent'}`}>
                {formatTime(timeLeft?.hours)}
              </div>
              <div className="text-sm text-muted-foreground">Часа</div>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center">
              <div className={`text-3xl font-bold mb-1 ${isUrgent ? 'text-error' : 'text-accent'}`}>
                {formatTime(timeLeft?.minutes)}
              </div>
              <div className="text-sm text-muted-foreground">Минути</div>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center">
              <div className={`text-3xl font-bold mb-1 ${isUrgent ? 'text-error' : 'text-accent'}`}>
                {formatTime(timeLeft?.seconds)}
              </div>
              <div className="text-sm text-muted-foreground">Секунди</div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="bg-whiterounded-3xl p-8 lg:p-12 conversion-shadow max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Offer Details */}
            <div>
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} color="white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    Всичко за <span className="text-accent">299 лв</span>
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  Пълен пакет без скрити такси или месечни абонаменти
                </p>
              </div>

              {/* What's Included */}
              <div className="space-y-4 mb-8">
                {[
                  'QR меню система за безконтактно поръчване',
                  'Професионален мобилно-оптимизиран дизайн',
                  'Google Maps интеграция и SEO оптимизация',
                  'Социални мрежи и галерия със снимки',
                  '24-часова доставка - гарантирано!',
                  'Безплатна поддръжка първия месец',
                  '30-дневна гаранция за връщане на парите'
                ]?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={20} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Value Comparison */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6">
                <h4 className="font-bold text-foreground mb-4">Сравнение на стойността:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Уеб дизайнер (минимум):</span>
                    <span className="font-semibold text-foreground">800+ лв</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">QR система:</span>
                    <span className="font-semibold text-foreground">200+ лв</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SEO оптимизация:</span>
                    <span className="font-semibold text-foreground">300+ лв</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-bold text-foreground">Обща стойност:</span>
                    <span className="font-bold text-foreground">1300+ лв</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-accent">Вашата цена:</span>
                    <span className="font-bold text-accent">299 лв</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-accent to-primary rounded-3xl p-8 text-white mb-6">
                <div className="mb-6">
                  <div className="text-5xl font-bold mb-2">299 лв</div>
                  <div className="text-white/80 line-through text-xl mb-2">399 лв</div>
                  <div className="text-white/90">Спестявате 100 лв!</div>
                </div>

                <Button
                  onClick={handleStartNow}
                  size="lg"
                  fullWidth
                  className="bg-white text-accent hover:bg-gray-50 font-bold text-lg py-4 mb-4"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  ЗАПОЧНИ СЕГА - 299 ЛВ
                </Button>

                <div className="text-white/80 text-sm">
                  ✓ Без месечни такси ✓ 24ч доставка ✓ Гаранция
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Icon name="Shield" size={16} />
                  <span className="text-sm">SSL защитено плащане</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Icon name="Users" size={16} />
                  <span className="text-sm">500+ доволни клиенти</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Icon name="Star" size={16} />
                  <span className="text-sm">4.9/5 средна оценка</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="Shield" size={32} className="text-success" />
              <h3 className="text-2xl font-bold text-primary-foreground">
                100% Гаранция за качество
              </h3>
            </div>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Ако не сте напълно доволни от резултатите в първите 30 дни, 
              връщаме парите ви изцяло. Без въпроси, без условия. 
              Това е нашето обещание за качество.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-8 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={20} />
              <span>+40% средно увеличение</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} />
              <span>24ч гарантирана доставка</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} />
              <span>98% препоръчват ни</span>
            </div>
          </div>
        </div>

        {/* Final Urgency */}
        <div className="mt-12 text-center">
          <div className="bg-warning/20 border border-warning rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Icon name="AlertCircle" size={24} className="text-warning" />
              <h4 className="text-xl font-bold text-primary-foreground">
                Последно предупреждение!
              </h4>
            </div>
            <p className="text-primary-foreground/90">
              Всеки ден чакане означава загубени клиенти за вашите конкуренти. 
              Не оставайте назад - действайте сега!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;