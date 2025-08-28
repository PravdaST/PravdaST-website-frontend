import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onStartNow, onViewDemo }) => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Icon name="Zap" size={16} className="mr-2" />
                Готов за 24 часа
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
                Получете професионален сайт за{' '}
                <span className="text-primary">24 часа</span>
                {' '}- само{' '}
                <span className="text-accent">299лв</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Помогнете на вашия бизнес да се откроява онлайн с готови уеб сайтове, 
                специално създадени за български малки бизнеси. QR меню система включена!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                onClick={onStartNow}
                iconName="ArrowRight" 
                iconPosition="right"
                className="text-lg px-8 py-4"
              >
                ЗАПОЧНЕТЕ СЕГА
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={onViewDemo}
                iconName="Play" 
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                ВИЖТЕ ДЕМО
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-success" />
                <span className="text-sm font-medium text-text-secondary">Гаранция за качество</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-primary" />
                <span className="text-sm font-medium text-text-secondary">24ч доставка</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={20} className="text-warning fill-current" />
                <span className="text-sm font-medium text-text-secondary">4.9★ рейтинг</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-elevation-2 p-8 transform rotate-3 hover:rotate-0 transition-smooth">
              <div className="space-y-6">
                {/* Mock Website Preview */}
                <div className="bg-gradient-to-r from-primary to-secondary h-12 rounded-lg flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-white text-sm font-medium">
                    ресторант-софия.bg
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg"></div>
                    <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-full text-sm font-bold shadow-elevation-2">
              +40% продажби
            </div>
            <div className="absolute -bottom-4 -left-4 bg-warning text-white px-4 py-2 rounded-full text-sm font-bold shadow-elevation-2">
              QR меню
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;