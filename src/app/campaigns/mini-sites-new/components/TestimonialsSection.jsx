import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Георги Петров',
      business: 'Ресторант "Старата къща"',
      location: 'София',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: `След като получихме сайта с QR меню, поръчките ни се увеличиха с 60%. Клиентите харесват, че могат да видят менюто преди да дойдат в ресторанта.`,
      results: {
        before: '150 клиента/месец',
        after: '240 клиента/месец',
        increase: '+60%'
      }
    },
    {
      id: 2,
      name: 'Мария Димитрова',
      business: 'Салон за красота "Елеганс"',
      location: 'Пловдив',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: `Сайтът ни помогна да се откроим от конкуренцията. Сега клиентите могат да видят нашите работи и да се записват онлайн. Записванията се удвоиха!`,
      results: {
        before: '80 записвания/месец',
        after: '160 записвания/месец',
        increase: '+100%'
      }
    },
    {
      id: 3,
      name: 'Иван Стоянов',
      business: 'Автосервиз "Експерт"',
      location: 'Варна',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: `Преди сайта получавахме 2-3 обаждания седмично. Сега имаме по 15-20 запитвания седмично. Инвестицията се върна за 2 месеца.`,
      results: {
        before: '10 запитвания/месец',
        after: '65 запитвания/месец',
        increase: '+550%'
      }
    },
    {
      id: 4,
      name: 'Елена Николова',
      business: 'Кафе "Уют"',
      location: 'Бургас',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: `QR менюто беше революция за нашето кафе. Клиентите обичат да разглеждат менюто на телефона си. Продажбите се увеличиха значително.`,
      results: {
        before: '200 лв/ден',
        after: '320 лв/ден',
        increase: '+60%'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Какво казват нашите клиенти
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Реални истории от български бизнеси, които трансформираха успеха си с нашите сайтове
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-elevation-2 p-8 lg:p-12 relative overflow-hidden">
            {/* Background Quote */}
            <div className="absolute top-8 right-8 text-6xl text-primary/10 font-serif">
              "
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Avatar and Info */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto lg:mx-0 mb-4">
                    <Image
                      src={current?.image}
                      alt={current?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{current?.name}</h3>
                  <p className="text-primary font-medium">{current?.business}</p>
                  <p className="text-text-secondary text-sm">{current?.location}</p>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start space-x-1 mt-2">
                    {Array.from({ length: current?.rating })?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote and Results */}
                <div className="flex-1 space-y-6">
                  <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed italic">
                    "{current?.quote}"
                  </blockquote>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-lg p-6">
                    <h4 className="font-bold text-text-primary mb-4">Резултати:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-text-secondary">Преди</div>
                        <div className="font-bold text-text-primary">{current?.results?.before}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-text-secondary">След</div>
                        <div className="font-bold text-success">{current?.results?.after}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-text-secondary">Увеличение</div>
                        <div className="font-bold text-accent text-xl">{current?.results?.increase}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-elevation-1 hover:shadow-elevation-2 flex items-center justify-center transition-smooth"
            >
              <Icon name="ChevronLeft" size={20} className="text-text-primary" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-elevation-1 hover:shadow-elevation-2 flex items-center justify-center transition-smooth"
            >
              <Icon name="ChevronRight" size={20} className="text-text-primary" />
            </button>
          </div>

          {/* All Testimonials Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {testimonials?.map((testimonial, index) => (
              <button
                key={testimonial?.id}
                onClick={() => setCurrentTestimonial(index)}
                className={`bg-white rounded-lg p-4 shadow-elevation-1 hover:shadow-elevation-2 transition-smooth text-left ${
                  index === currentTestimonial ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial?.image}
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-text-primary text-sm truncate">
                      {testimonial?.name}
                    </h4>
                    <p className="text-xs text-text-secondary truncate">
                      {testimonial?.location}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-accent">
                    {testimonial?.results?.increase}
                  </div>
                  <div className="text-xs text-text-secondary">увеличение</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;