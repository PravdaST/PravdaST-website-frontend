import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PricingSection = ({ onGetStarted }) => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(5000);
  const [currentCustomers, setCurrentCustomers] = useState(100);

  // ROI Calculations
  const websiteCost = 299;
  const monthlyCost = 49;
  const expectedGrowth = 0.4; // 40%
  const newMonthlyRevenue = monthlyRevenue * (1 + expectedGrowth);
  const monthlyIncrease = newMonthlyRevenue - monthlyRevenue;
  const yearlyIncrease = monthlyIncrease * 12;
  const totalYearlyCost = websiteCost + (monthlyCost * 12);
  const netYearlyProfit = yearlyIncrease - totalYearlyCost;
  const paybackMonths = Math.ceil(websiteCost / monthlyIncrease);

  const pricingFeatures = [
    'Професионален дизайн',
    'QR меню система',
    'Мобилна оптимизация',
    'SEO оптимизация',
    'Google Maps интеграция',
    'Click-to-call функция',
    'Контактна форма',
    'Галерия със снимки',
    'Работно време',
    'Социални мрежи',
    'SSL сертификат',
    'Техническа поддръжка'
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Прозрачни цени, гарантиран резултат
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Без скрити такси, без дълги договори. Плащате веднъж и получавате всичко необходимо.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl shadow-elevation-2 p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                  <Icon name="Star" size={16} className="mr-2" />
                  Най-популярен пакет
                </div>
                <h3 className="text-3xl font-bold mb-2">Стартов пакет</h3>
                <p className="text-white/80">Всичко необходимо за успешен старт</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-5xl font-bold">299</span>
                  <div className="text-left">
                    <div className="text-xl font-medium">лв</div>
                    <div className="text-sm text-white/80">еднократно</div>
                  </div>
                </div>
                <div className="text-white/80">
                  + 49 лв/месец поддръжка
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {pricingFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-white" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="secondary" 
                size="lg" 
                fullWidth 
                onClick={onGetStarted}
                iconName="ArrowRight" 
                iconPosition="right"
                className="bg-white text-primary hover:bg-gray-100"
              >
                ЗАПОЧНЕТЕ СЕГА
              </Button>

              {/* Guarantee */}
              <div className="text-center mt-6 p-4 bg-white/10 rounded-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Icon name="Shield" size={20} />
                  <span className="font-medium">30-дневна гаранция</span>
                </div>
                <p className="text-sm text-white/80">
                  Ако не сте доволни, връщаме парите без въпроси
                </p>
              </div>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-surface rounded-2xl shadow-elevation-1 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Калкулатор на възвръщаемостта
              </h3>
              <p className="text-text-secondary">
                Вижте колко ще спечелите с нашия сайт
              </p>
            </div>

            <div className="space-y-6">
              {/* Input Fields */}
              <div className="space-y-4">
                <Input
                  label="Текущ месечен оборот (лв)"
                  type="number"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e?.target?.value))}
                  placeholder="5000"
                />
                <Input
                  label="Брой клиенти месечно"
                  type="number"
                  value={currentCustomers}
                  onChange={(e) => setCurrentCustomers(Number(e?.target?.value))}
                  placeholder="100"
                />
              </div>

              {/* Results */}
              <div className="bg-white rounded-lg p-6 space-y-4">
                <h4 className="font-bold text-text-primary text-lg mb-4">
                  Прогнозни резултати:
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">
                      +{monthlyIncrease?.toLocaleString('bg-BG')} лв
                    </div>
                    <div className="text-sm text-text-secondary">месечно увеличение</div>
                  </div>

                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {paybackMonths} мес.
                    </div>
                    <div className="text-sm text-text-secondary">възвръщаемост</div>
                  </div>
                </div>

                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent">
                    +{netYearlyProfit?.toLocaleString('bg-BG')} лв
                  </div>
                  <div className="text-sm text-text-secondary">нетна печалба за година</div>
                </div>

                <div className="text-center text-sm text-text-secondary pt-4 border-t border-gray-200">
                  * Базирано на средно 40% увеличение на продажбите при нашите клиенти
                </div>
              </div>

              {/* Action */}
              <Button 
                variant="outline" 
                size="lg" 
                fullWidth 
                onClick={onGetStarted}
                iconName="Calculator" 
                iconPosition="left"
              >
                Започнете спестяването
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <Icon name="CreditCard" size={32} className="text-primary mx-auto" />
              <h4 className="font-bold text-text-primary">Лесно плащане</h4>
              <p className="text-sm text-text-secondary">
                Банков превод, карта или на части
              </p>
            </div>
            <div className="space-y-2">
              <Icon name="Clock" size={32} className="text-success mx-auto" />
              <h4 className="font-bold text-text-primary">Бърз старт</h4>
              <p className="text-sm text-text-secondary">
                Готов сайт за 24 часа
              </p>
            </div>
            <div className="space-y-2">
              <Icon name="Headphones" size={32} className="text-accent mx-auto" />
              <h4 className="font-bold text-text-primary">Пълна поддръжка</h4>
              <p className="text-sm text-text-secondary">
                Техническа помощ 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;