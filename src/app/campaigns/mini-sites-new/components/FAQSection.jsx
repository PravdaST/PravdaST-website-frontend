import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: 'Трябва ли да имам технически знания за да управлявам сайта?',
      answer: `Абсолютно не! Нашите сайтове са създадени да бъдат изключително лесни за управление. Получавате:\n\n• Подробно ръководство стъпка по стъпка\n• Видео обучения на български език\n• Безплатна техническа поддръжка 24/7\n• Възможност за промени чрез обикновен текстов редактор\n\nПовечето наши клиенти правят първите си промени за по-малко от 10 минути!`,
      videoLink: 'https://example.com/tutorial-video'
    },
    {
      question: 'Какво включва месечната поддръжка от 49 лв?',
      answer: `Месечната поддръжка включва всичко необходимо за безпроблемна работа:\n\n• Техническа поддръжка и отстраняване на проблеми\n• Редовни актуализации за сигурност\n• Backup копия на сайта всеки ден\n• Хостинг и домейн поддръжка\n• До 3 промени месечно (текст, снимки, цени)\n• Мониторинг на работоспособността 24/7\n• Месечен отчет за посещения и статистики\n\nБез скрити такси - всичко е включено в цената!`,
      caseStudyLink: '/case-study-maintenance'
    },
    {
      question: 'Мога ли да персонализирам дизайна според моя бизнес?',
      answer: `Разбира се! Въпреки че използваме готови шаблони за бързина, всеки сайт се персонализира:\n\n• Вашите цветове и лого\n• Специфични за индустрията функции\n• Персонализирани текстове и съдържание\n• Ваши снимки и галерии\n• Специфични контактни форми\n• Интеграция с вашите социални мрежи\n\nЗа по-сложни персонализации предлагаме премиум пакет от 499 лв с още повече възможности.`,
      examples: ['Ресторант с QR меню', 'Салон с онлайн записване', 'Автосервиз с калкулатор']
    },
    {
      question: 'Какво се случва ако не съм доволен от резултата?',
      answer: `Предлагаме 30-дневна гаранция "доволен или парите обратно":\n\n• Пълно възстановяване на парите в първите 30 дни\n• Без въпроси и без скрити условия\n• Запазвате всички създадени материали\n• Безплатни корекции до пълното ви удовлетворение\n\nОт 500+ клиента, по-малко от 1% са поискали възстановяване. Нашата цел е вашият успех!`,
      guarantee: '30-дневна гаранция',
      successRate: '99%+ доволни клиенти'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Често задавани въпроси
          </h2>
          <p className="text-xl text-text-secondary">
            Отговори на най-важните въпроси за нашите услуги
          </p>
        </div>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div key={index} className="bg-surface rounded-2xl shadow-elevation-1 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-smooth"
              >
                <h3 className="text-lg font-bold text-text-primary pr-4">
                  {faq?.question}
                </h3>
                <div className={`transform transition-smooth ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <Icon name="ChevronDown" size={24} className="text-text-secondary" />
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-8 pb-8">
                  <div className="border-t border-gray-200 pt-6">
                    <div className="prose prose-lg max-w-none">
                      {faq?.answer?.split('\n')?.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-text-secondary leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Additional Content */}
                    <div className="mt-6 space-y-4">
                      {faq?.videoLink && (
                        <div className="flex items-center space-x-3 p-4 bg-primary/10 rounded-lg">
                          <Icon name="Play" size={20} className="text-primary" />
                          <div>
                            <h4 className="font-medium text-text-primary">Видео обучение</h4>
                            <p className="text-sm text-text-secondary">
                              Гледайте как да управлявате сайта си
                            </p>
                          </div>
                        </div>
                      )}

                      {faq?.caseStudyLink && (
                        <div className="flex items-center space-x-3 p-4 bg-success/10 rounded-lg">
                          <Icon name="FileText" size={20} className="text-success" />
                          <div>
                            <h4 className="font-medium text-text-primary">Подробно описание</h4>
                            <p className="text-sm text-text-secondary">
                              Вижте точно какво получавате
                            </p>
                          </div>
                        </div>
                      )}

                      {faq?.examples && (
                        <div className="p-4 bg-accent/10 rounded-lg">
                          <h4 className="font-medium text-text-primary mb-2">Примери:</h4>
                          <div className="flex flex-wrap gap-2">
                            {faq?.examples?.map((example, eIndex) => (
                              <span key={eIndex} className="px-3 py-1 bg-white rounded-full text-sm text-text-secondary">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {faq?.guarantee && (
                        <div className="flex items-center justify-between p-4 bg-warning/10 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Icon name="Shield" size={20} className="text-warning" />
                            <span className="font-medium text-text-primary">{faq?.guarantee}</span>
                          </div>
                          {faq?.successRate && (
                            <span className="text-sm font-bold text-success">{faq?.successRate}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
          <h3 className="text-xl font-bold text-text-primary mb-4">
            Не намирате отговор на вашия въпрос?
          </h3>
          <p className="text-text-secondary mb-6">
            Свържете се с нас за персонализирана консултация
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-smooth">
              <Icon name="Phone" size={20} />
              <span>+359 888 123 456</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-smooth">
              <Icon name="Mail" size={20} />
              <span>info@mini-sites.bg</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;