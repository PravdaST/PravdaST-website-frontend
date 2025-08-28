import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Иван Петров',
      business: 'Ресторант "Старата къща"',
      location: 'София',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      rating: 5,
      text: `След като получихме мини-сайта, поръчките се увеличиха с 45% за първия месец. Клиентите обожават QR менюто - вече не чакат сервитьор, а поръчват директно от телефона си. Инвестицията се възвърна за 3 седмици!`,
      results: {
        increase: '+45%',
        metric: 'поръчки',
        timeframe: '1 месец'
      },
      beforeAfter: {
        before: '120 поръчки/месец',
        after: '174 поръчки/месец'
      }
    },
    {
      id: 2,
      name: 'Мария Георгиева',
      business: 'Кафе "Аромат"',
      location: 'Пловдив',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      rating: 5,
      text: `Младите хора харесват да сканират QR кода вместо да чакат меню. Продажбите ни се увеличиха значително, особено в обедната почивка. Сайтът изглежда много професионално и клиентите ни го хвалят постоянно.`,
      results: {
        increase: '+38%',
        metric: 'продажби',
        timeframe: '6 седмици'
      },
      beforeAfter: {
        before: '2,800 лв/месец',
        after: '3,864 лв/месец'
      }
    },
    {
      id: 3,
      name: 'Георги Стоянов',
      business: 'Автосервиз "Експерт"',
      location: 'Стара Загора',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 5,
      text: `Клиентите вече могат да видят всичките ни услуги и цени онлайн. Записванията се удвоиха! Много хора ни намират в Google и се обаждат директно. Сайтът работи 24/7 като наш най-добър продавач.`,
      results: {
        increase: '+42%',
        metric: 'записвания',
        timeframe: '2 месеца'
      },
      beforeAfter: {
        before: '85 клиенти/месец',
        after: '121 клиенти/месец'
      }
    },
    {
      id: 4,
      name: 'Елена Димитрова',
      business: 'Салон "Красота"',
      location: 'Русе',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 5,
      text: `Сайтът ни помогна да привлечем нови клиенти. Особено харесват галерията с нашите работи! Онлайн записванията са много удобни и за нас, и за клиентите. Препоръчвам на всички колеги в бранша.`,
      results: {
        increase: '+40%',
        metric: 'нови клиенти',
        timeframe: '1.5 месеца'
      },
      beforeAfter: {
        before: '60 клиенти/месец',
        after: '84 клиенти/месец'
      }
    },
    {
      id: 5,
      name: 'Петър Николов',
      business: 'Пицария "Белла"',
      location: 'Бургас',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      rating: 5,
      text: `QR менюто е революция! Клиентите поръчват много по-бързо, а ние обработваме повече поръчки. Особено през лятото с туристите - те много харесват технологията. Приходите ни скочиха с 50%!`,
      results: {
        increase: '+50%',
        metric: 'приходи',
        timeframe: '2 месеца'
      },
      beforeAfter: {
        before: '8,500 лв/месец',
        after: '12,750 лв/месец'
      }
    },
    {
      id: 6,
      name: 'Анна Стефанова',
      business: 'Фризьорски салон "Стил"',
      location: 'Варна',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      rating: 5,
      text: `Клиентите могат да видят нашите работи в галерията и да се запишат онлайн. Това спести много време и на двете страни. Социалните мрежи са интегрирани перфектно - последователите ни се увеличиха драстично.`,
      results: {
        increase: '+35%',
        metric: 'записвания',
        timeframe: '1 месец'
      },
      beforeAfter: {
        before: '95 клиенти/месец',
        after: '128 клиенти/месец'
      }
    }
  ];

  const currentTestimonialData = testimonials?.[currentTestimonial];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(prev => prev === 0 ? testimonials?.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(prev => (prev + 1) % testimonials?.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 })?.map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={20}
        className={i < rating ? 'text-warning fill-current' : 'text-muted'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Какво казват <span className="text-accent">нашите клиенти</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реални истории от български бизнеси, които увеличиха продажбите си
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-gradient-to-br from-muted to-white rounded-3xl p-8 lg:p-12 conversion-shadow">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                {/* Quote */}
                <div className="mb-8">
                  <Icon name="Quote" size={48} className="text-accent mb-6" />
                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed">
                    "{currentTestimonialData?.text}"
                  </blockquote>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={currentTestimonialData?.avatar}
                      alt={currentTestimonialData?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {currentTestimonialData?.name}
                    </h4>
                    <p className="text-muted-foreground">
                      {currentTestimonialData?.business}
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Icon name="MapPin" size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {currentTestimonialData?.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex space-x-1">
                    {renderStars(currentTestimonialData?.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({currentTestimonialData?.rating}.0/5.0)
                  </span>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                {/* Main Result */}
                <div className="bg-white rounded-2xl p-6 conversion-shadow text-center">
                  <div className="text-4xl font-bold text-success mb-2">
                    {currentTestimonialData?.results?.increase}
                  </div>
                  <div className="text-muted-foreground mb-1">
                    {currentTestimonialData?.results?.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    за {currentTestimonialData?.results?.timeframe}
                  </div>
                </div>

                {/* Before/After */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-xl p-4 text-center">
                    <div className="text-sm text-muted-foreground mb-1">ПРЕДИ</div>
                    <div className="font-bold text-foreground">
                      {currentTestimonialData?.beforeAfter?.before}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <div className="text-sm text-muted-foreground mb-1">СЛЕД</div>
                    <div className="font-bold text-success">
                      {currentTestimonialData?.beforeAfter?.after}
                    </div>
                  </div>
                </div>

                {/* Business Type Badge */}
                <div className="text-center">
                  <span className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    <Icon name="Store" size={16} className="mr-2" />
                    {currentTestimonialData?.business?.split(' ')?.[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full p-0"
              iconName="ChevronLeft"
            />

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-accent scale-125' :'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={handleNext}
              className="w-12 h-12 rounded-full p-0"
              iconName="ChevronRight"
            />
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Доволни клиенти</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">4.9★</div>
              <div className="text-muted-foreground">Средна оценка</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">42%</div>
              <div className="text-muted-foreground">Средно увеличение</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning mb-2">98%</div>
              <div className="text-muted-foreground">Препоръчват ни</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 conversion-shadow max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Готови сте да станете следващата успешна история?
            </h3>
            <p className="text-muted-foreground mb-6">
              Присъединете се към 500+ български бизнеса, които вече увеличиха продажбите си
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Започни сега - 299 лв
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Безплатна консултация
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;