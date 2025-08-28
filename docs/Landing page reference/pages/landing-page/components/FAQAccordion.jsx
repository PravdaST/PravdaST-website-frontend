import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQAccordion = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'Колко струва и има ли скрити такси?',
      answer: `Цената е точно 299 лв еднократно - без скрити такси, без месечни абонаменти, без допълнителни разходи. Това включва:\n\n• Професионален дизайн и разработка\n• QR меню система\n• Мобилна оптимизация\n• Google Maps интеграция\n• SEO оптимизация\n• Социални мрежи интеграция\n• 24-часова доставка\n• Безплатна поддръжка първия месец\n\nЕдинствените допълнителни разходи са по ваш избор - професионална фотография (150 лв), писане на съдържание (100 лв) или други специализирани услуги.`,
      objection: 'cost',
      icon: 'DollarSign'
    },
    {
      id: 2,
      question: 'Сложно ли е да управлявам сайта? Не разбирам от технологии.',
      answer: `Абсолютно не! Сайтът е направен да бъде максимално лесен за управление:\n\n• Не се изисква техническо знание\n• Промените се правят с няколко клика\n• Предоставяме видео обучение (15 минути)\n• Безплатна поддръжка първия месец\n• Телефонна поддръжка на български език\n• Можем да правим промените вместо вас\n\nПовечето наши клиенти са на възраст 40-60 години и всички се справят отлично. Ако въпреки всичко имате затруднения, ние ще ви помогнем безплатно.`,
      objection: 'complexity',
      icon: 'HelpCircle'
    },
    {
      id: 3,
      question: 'Наистина ли ще увелича продажбите си? Как мога да бъда сигурен?',
      answer: `Да, гарантираме резултати! Ето защо сме толкова сигурни:\n\n• 500+ успешни проекта в България\n• Средно увеличение от 40% за първия месец\n• 98% от клиентите препоръчват услугата\n• Гаранция за връщане на парите (30 дни)\n• Безплатни корекции до пълно удовлетворение\n\nАко не сте доволни от резултатите в първите 30 дни, връщаме парите ви изцяло. Това е нашата гаранция за качество. Освен това можете да видите примери от реални клиенти и техните резултати.`,
      objection: 'results',
      icon: 'TrendingUp'
    },
    {
      id: 4,
      question: 'Колко време отнема и кога ще е готов сайтът?',
      answer: `Гарантираме 24-часова доставка!\n\n• Ден 1: Поръчка и събиране на информация\n• Ден 2: Готов сайт, онлайн и функционален\n• Ден 3-7: Финални корекции (ако са нужни)\n\nОт ваша страна се изисква само:\n• 30 минути за попълване на информацията\n• Предоставяне на лого и снимки (ако имате)\n• Одобрение на финалния вариант\n\nАко нямате готови материали, можем да ви помогнем с всичко - от създаване на лого до професионална фотография. Дори в най-сложните случаи сайтът е готов за максимум 3 дни.`,
      objection: 'time',
      icon: 'Clock'
    }
  ];

  const handleFAQClick = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const getIconColor = (objection) => {
    const colors = {
      cost: 'text-red-500',
      complexity: 'text-blue-500',
      results: 'text-green-500',
      time: 'text-orange-500'
    };
    return colors?.[objection] || 'text-accent';
  };

  const getBgColor = (objection) => {
    const colors = {
      cost: 'bg-red-50',
      complexity: 'bg-blue-50',
      results: 'bg-green-50',
      time: 'bg-orange-50'
    };
    return colors?.[objection] || 'bg-accent/5';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted via-white to-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Често задавани <span className="text-accent">въпроси</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Отговори на най-честите съмнения и въпроси на нашите клиенти
          </p>
        </div>

        <div className="space-y-6">
          {faqs?.map((faq) => (
            <div
              key={faq?.id}
              className={`bg-white rounded-2xl conversion-shadow overflow-hidden transition-all duration-300 ${
                openFAQ === faq?.id ? 'ring-2 ring-accent' : ''
              }`}
            >
              {/* Question */}
              <button
                onClick={() => handleFAQClick(faq?.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${getBgColor(faq?.objection)} rounded-xl flex items-center justify-center`}>
                    <Icon name={faq?.icon} size={24} className={getIconColor(faq?.objection)} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground pr-4">
                    {faq?.question}
                  </h3>
                </div>
                <Icon
                  name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                  size={24}
                  className="text-muted-foreground flex-shrink-0"
                />
              </button>

              {/* Answer */}
              <div className={`transition-all duration-500 overflow-hidden ${
                openFAQ === faq?.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-16">
                    <div className="prose prose-sm max-w-none">
                      {faq?.answer?.split('\n')?.map((paragraph, index) => {
                        if (paragraph?.trim() === '') return <br key={index} />;
                        
                        if (paragraph?.startsWith('•')) {
                          return (
                            <div key={index} className="flex items-start space-x-2 mb-2">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{paragraph?.substring(2)}</span>
                            </div>
                          );
                        }
                        
                        return (
                          <p key={index} className="text-muted-foreground mb-3 leading-relaxed">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 bg-white rounded-3xl p-8 conversion-shadow text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={32} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Все още имате въпроси?
            </h3>
            <p className="text-muted-foreground">
              Свържете се с нас за безплатна консултация и персонализирани отговори
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Phone" size={20} className="text-success" />
              <div>
                <div className="font-semibold text-foreground">0888 123 456</div>
                <div className="text-sm text-muted-foreground">Пон-Пет 9:00-18:00</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Mail" size={20} className="text-primary" />
              <div>
                <div className="font-semibold text-foreground">info@mini-sites.bg</div>
                <div className="text-sm text-muted-foreground">Отговор до 2 часа</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="MessageSquare" size={20} className="text-accent" />
              <div>
                <div className="font-semibold text-foreground">Live Chat</div>
                <div className="text-sm text-muted-foreground">Онлайн поддръжка</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors">
              Безплатна консултация
            </button>
            <button className="px-8 py-3 border border-muted-foreground text-muted-foreground rounded-xl font-semibold hover:bg-muted transition-colors">
              Вижте примери
            </button>
          </div>
        </div>

        {/* Guarantee Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-success/10 to-accent/10 px-6 py-3 rounded-full">
            <Icon name="Shield" size={24} className="text-success" />
            <div>
              <div className="font-bold text-foreground">30-дневна гаранция</div>
              <div className="text-sm text-muted-foreground">Връщане на парите при неудовлетвореност</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;