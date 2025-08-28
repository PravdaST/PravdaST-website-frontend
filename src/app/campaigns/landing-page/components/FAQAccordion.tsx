"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState([0]); // First item open by default

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const faqItems = [
    {
      question: 'Колко време отнема да получа готовия уебсайт?',
      answer: 'Вашият професионален уебсайт ще бъде готов за максимум 24 часа след потвърждаване на поръчката. В повечето случаи го доставяме за 12-18 часа, включително всички персонализации с вашето съдържание и брандинг.'
    },
    {
      question: 'Нужни ли са ми технически знания за управление?',
      answer: 'Абсолютно не! Всички наши решения са създадени да бъдат управлявани лесно от всеки. Ще получите подробна инструкция и неограничена поддръжка за всички промени, които искате да направите.'
    },
    {
      question: 'Какво е включено в цената от 299 лв?',
      answer: 'В базовата цена е включено: професионален дизайн, QR меню система, мобилна оптимизация, SEO настройки, SSL сертификат, хостинг за първата година и техническа поддръжка. Няма скрити такси!'
    },
    {
      question: 'Мога ли да променям съдържанието след това?',
      answer: 'Да, разбира се! Ще можете лесно да променяте менюто, цените, снимките, работното време и всяка друга информация. Ще ви покажем как се прави и ще ви подкрепяме при нужда.'
    },
    {
      question: 'Работи ли на всички телефони и таблети?',
      answer: 'Да, всички наши уебсайтове са напълно оптимизирани за мобилни устройства. Работят перфектно на iPhone, Android, таблети и компютри без нужда от изтегляне на приложения.'
    },
    {
      question: 'Има ли гаранция и какво включва тя?',
      answer: 'Предлагаме 30-дневна гаранция "Доволни или парите назад". Ако не сте напълно доволни от резултата, ще ви върнем цялата сума без въпроси.'
    },
    {
      question: 'Мога ли да видя примери от реални клиенти?',
      answer: 'Естествено! Имаме портфолио с над 487 успешни проекта. Можете да видите живи примери от различни индустрии - ресторанти, кафенета, услуги, магазини и други.'
    },
    {
      question: 'Ще се появява ли сайтът ми в Google търсенията?',
      answer: 'Да! Всички наши уебсайтове са SEO оптимизирани от самото начало. Включваме правилните настройки, мета тагове и структура, за да се появявате по-високо в търсенията на Google.'
    },
    {
      question: 'Какво става след изтичане на първата година хостинг?',
      answer: 'Хостингът струва само 120 лв годишно след първата година. Това включва всички актуализации, поддръжка на сигурността и техническа поддръжка. Няма задължителни договори - можете да прекратите по всяко време.'
    },
    {
      question: 'Мога ли да имам собствен домейн като www.моят-ресторант.bg?',
      answer: 'Абсолютно! Можете да използвате съществуващ домейн или ние ще ви помогнем да регистрирате нов .bg или .com домейн. Настройката е включена в услугата без допълнителна такса.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Често задавани въпроси
          </h2>
          <p className="text-xl text-gray-600">
            Отговори на най-честите въпроси за нашите услуги
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Не намерихте отговора на въпроса си?
            </h3>
            <p className="text-gray-600 mb-6">
              Свържете се с нас и ще получите персонален отговор за максимум 30 минути
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+359879282299" 
                className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
              >
                📞 Обадете се: +359 879 282 299
              </a>
              <a 
                href="mailto:contact@pravdast.agency" 
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-semibold rounded-lg transition-colors"
              >
                ✉️ contact@pravdast.agency
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;