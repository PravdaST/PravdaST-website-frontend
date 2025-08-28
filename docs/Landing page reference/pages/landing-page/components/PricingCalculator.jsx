import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';


const PricingCalculator = () => {
  const [businessType, setBusinessType] = useState('restaurant');
  const [monthlyRevenue, setMonthlyRevenue] = useState('5000');
  const [customerCount, setCustomerCount] = useState('200');
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const businessTypes = [
    { value: 'restaurant', label: 'Ресторант', multiplier: 1.4, icon: 'UtensilsCrossed' },
    { value: 'cafe', label: 'Кафе', multiplier: 1.35, icon: 'Coffee' },
    { value: 'service', label: 'Услуги', multiplier: 1.45, icon: 'Wrench' },
    { value: 'beauty', label: 'Красота', multiplier: 1.38, icon: 'Scissors' }
  ];

  const revenueOptions = [
    { value: '2000', label: '2,000 лв - 3,000 лв' },
    { value: '3000', label: '3,000 лв - 5,000 лв' },
    { value: '5000', label: '5,000 лв - 8,000 лв' },
    { value: '8000', label: '8,000 лв - 12,000 лв' },
    { value: '12000', label: '12,000 лв - 20,000 лв' },
    { value: '20000', label: 'Над 20,000 лв' }
  ];

  const customerOptions = [
    { value: '50', label: '50 - 100 клиенти' },
    { value: '100', label: '100 - 200 клиенти' },
    { value: '200', label: '200 - 500 клиенти' },
    { value: '500', label: '500 - 1000 клиенти' },
    { value: '1000', label: 'Над 1000 клиенти' }
  ];

  const currentBusinessType = businessTypes?.find(bt => bt?.value === businessType);
  const currentRevenue = parseInt(monthlyRevenue);
  const projectedIncrease = Math.round(currentRevenue * (currentBusinessType?.multiplier - 1));
  const newRevenue = currentRevenue + projectedIncrease;
  const yearlyIncrease = projectedIncrease * 12;
  const roi = Math.round((yearlyIncrease / 299) * 100);
  const paybackDays = Math.round(299 / (projectedIncrease / 30));

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 2000);
  };

  useEffect(() => {
    if (showResults) {
      const timer = setTimeout(() => {
        const element = document.getElementById('calculator-results');
        if (element) {
          element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showResults]);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Изчислете вашата <span className="text-accent">възвръщаемост</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Вижте колко повече ще печелите с професионален мини-сайт
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <div className="bg-gradient-to-br from-muted to-white rounded-3xl p-8 conversion-shadow">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Калкулатор за ROI
              </h3>
              <p className="text-muted-foreground">
                Въведете данните за вашия бизнес за персонализирана прогноза
              </p>
            </div>

            <div className="space-y-6">
              {/* Business Type */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Тип бизнес
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {businessTypes?.map((type) => (
                    <button
                      key={type?.value}
                      onClick={() => setBusinessType(type?.value)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        businessType === type?.value
                          ? 'border-accent bg-accent/10 text-accent' :'border-muted hover:border-muted-foreground text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon name={type?.icon} size={20} />
                        <span className="font-medium">{type?.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Revenue */}
              <Select
                label="Месечни приходи"
                description="Приблизителни месечни приходи от бизнеса"
                options={revenueOptions}
                value={monthlyRevenue}
                onChange={setMonthlyRevenue}
              />

              {/* Customer Count */}
              <Select
                label="Брой клиенти месечно"
                description="Приблизителен брой клиенти на месец"
                options={customerOptions}
                value={customerCount}
                onChange={setCustomerCount}
              />

              {/* Calculate Button */}
              <Button
                onClick={handleCalculate}
                fullWidth
                size="lg"
                loading={isCalculating}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                iconName="Calculator"
                iconPosition="left"
              >
                {isCalculating ? 'Изчисляване...' : 'Изчисли възвръщаемостта'}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold text-accent">299лв</div>
                <div className="text-sm text-muted-foreground">еднократно</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold text-success">24ч</div>
                <div className="text-sm text-muted-foreground">готов сайт</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">поддръжка</div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8">
            {/* Current State */}
            <div className="bg-white rounded-3xl p-8 conversion-shadow border-l-4 border-muted">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                  <Icon name="TrendingDown" size={24} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Текущо състояние</h3>
                  <p className="text-muted-foreground">Без онлайн присъствие</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-muted-foreground mb-1">
                    {currentRevenue?.toLocaleString()} лв
                  </div>
                  <div className="text-sm text-muted-foreground">месечни приходи</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-muted-foreground mb-1">
                    {parseInt(customerCount)} клиенти
                  </div>
                  <div className="text-sm text-muted-foreground">на месец</div>
                </div>
              </div>
            </div>

            {/* Projected Results */}
            {showResults && (
              <div 
                id="calculator-results"
                className="bg-gradient-to-br from-success/10 to-accent/10 rounded-3xl p-8 conversion-shadow border-l-4 border-success animate-fade-in"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Прогнозирани резултати</h3>
                    <p className="text-muted-foreground">С професионален мини-сайт</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-success mb-1">
                      {newRevenue?.toLocaleString()} лв
                    </div>
                    <div className="text-sm text-muted-foreground">нови месечни приходи</div>
                    <div className="text-accent font-semibold">
                      +{projectedIncrease?.toLocaleString()} лв (+{Math.round((currentBusinessType?.multiplier - 1) * 100)}%)
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success mb-1">
                      {Math.round(parseInt(customerCount) * currentBusinessType?.multiplier)}
                    </div>
                    <div className="text-sm text-muted-foreground">нови клиенти месечно</div>
                    <div className="text-accent font-semibold">
                      +{Math.round(parseInt(customerCount) * (currentBusinessType?.multiplier - 1))} клиенти
                    </div>
                  </div>
                </div>

                {/* ROI Breakdown */}
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <h4 className="font-bold text-foreground mb-4">Анализ на възвръщаемостта</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Инвестиция:</span>
                      <span className="font-semibold text-foreground">299 лв</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Допълнителни приходи годишно:</span>
                      <span className="font-semibold text-success">+{yearlyIncrease?.toLocaleString()} лв</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">ROI:</span>
                      <span className="font-bold text-accent text-lg">{roi?.toLocaleString()}%</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-4">
                      <span className="text-muted-foreground">Възвръщане на инвестицията:</span>
                      <span className="font-bold text-primary text-lg">{paybackDays} дни</span>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-2xl p-6">
                  <h4 className="font-bold text-foreground mb-4">Времева линия</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <div className="font-semibold text-foreground">Ден 1: Поръчка и плащане</div>
                        <div className="text-sm text-muted-foreground">299 лв еднократно</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <div className="font-semibold text-foreground">Ден 2: Сайтът е готов</div>
                        <div className="text-sm text-muted-foreground">24 часа доставка</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-white text-sm font-bold">30</div>
                      <div>
                        <div className="font-semibold text-foreground">Ден 30: Първи резултати</div>
                        <div className="text-sm text-success">+{projectedIncrease?.toLocaleString()} лв допълнителни приходи</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            {showResults && (
              <div className="bg-gradient-to-r from-accent to-primary rounded-3xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Готови сте да започнете?
                </h3>
                <p className="text-white/90 mb-6">
                  Възвръщане на инвестицията за {paybackDays} дни с {roi?.toLocaleString()}% ROI
                </p>
                <Button
                  size="lg"
                  className="bg-white text-accent hover:bg-gray-50 font-semibold px-8"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Започни сега - 299 лв
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;