'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { pageSEOData } from "@/data/seo-pages";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Общи въпроси",
    question: "Как точно работи тази работа с \"бизнес инженеринг\"?",
    answer:
      "Ха! Добър въпрос. Представи си, че вместо да хвърляш пари на случаен принцип в реклами и да се надяваш нещо да се получи, имаш систем. Като машина, която работи 24/7 и ти носи клиенти. Точно това правим - превръщаме хаоса в твоя фирма в предвидими системи, които работят дори когато спиш.",
  },
  {
    category: "Общи въпроси",
    question: "За какви фирми е това? Ще стане ли при мен?",
    answer:
      "Ако фирмата ти прави над 100 хиляди лева годишно и си уморен от това да чакаш телефонът да звъни - тогава да. Работим основно с B2B-та, но сме помагали и на ресторанти, и на производители, и на услуги. Важното е да искаш да растеш системно, а не на случаен принцип.",
  },
  {
    category: "Общи въпроси", 
    question: "Какво правите различно от другите агенции?",
    answer:
      "Другите правят кампании. Ние правим системи. Разликата? Кампанията свършва - системата работи години. Вместо да платиш 5000 лева за един проект и да чакаш резултати, изграждаме автоматизирана машина, която ти носи клиенти месец след месец. Фокусът не е върху \"красивия сайт\", а върху това колко пари ти носи.",
  },
  {
    category: "SEO Struktor™",
    question: "Кога ще започна да виждам първите клиенти от Google?",
    answer:
      "Честно? Първите сигнали идват след 2-3 месеца. Реалните резултати (повече обаждания, повече поръчки) - между 4-6 месеца. Не сме от тези, които обещават чудеса за 30 дни. SEO е като фитнес - резултатите идват с време, но когато дойдат, са устойчиви. И безплатни - не плащаш на Google за всеки клик.",
  },
  {
    category: "SEO Struktor™", 
    question: "Какво точно правите за тези пари всеки месец?",
    answer:
      "Всеки месец: пишем съдържание, което хората търсят в Google, поправяме техническите проблеми на сайта ти (които не си знаел че има), изграждаме връзки с други сайтове, следим конкуренцията ти и ти казваме какво правят зад кулисите. Получаваш детайлен отчет с това какво е направено и какви са резултатите.",
  },
  {
    category: "SEO Struktor™",
    question: "Работите ли със сайтове на английски?",
    answer:
      "Да, работим и на английски, но ни е най-силно българския пазар. Защо? Защото го познаваме като дланта си - знаем как хората търсят, какви думи използват, къде купуват. Ако имаш международен бизнес, няма проблем, но специалността ни е да те направим номер 1 в България.",
  },
  {
    category: "Clientomat™",
    question: "Как ще ми помогнеш да не губя клиенти зад ъгъла?",
    answer:
      "Просто - правим система, която помни всеки клиент и го следи автоматично. Някой попълни форма в сайта - веднага влиза в системата и получава поредица имейли. Не се обадил 3 дни - автоматично получава SMS. Клиентите не се губят в хартиите или забравени в емайлите. Всичко е автоматизирано и проследимо.",
  },
  {
    category: "Clientomat™",
    question: "Работи ли със системата, която вече имам?",
    answer:
      "Много вероятно да. Работили сме с HubSpot, Salesforce, Pipedrive, Klaviyo и още куп други. Ако имаш нещо специфично, не е проблем - правим интеграция. Идеята е да подобрим това, което имаш, а не да ти разбиваме цялата работа и да започваме отначало.",
  },
  {
    category: "Clientomat™",
    question: "Какви резултати да очаквам реално?",
    answer:
      "От опит можем да кажем: обикновено клиентите ни виждат 40-60% повече затворени сделки, продажбите се затварят с 30-50% по-бързо, и най-важното - спират да губят време с \"мъртви\" запитвания. Преди да работим заедно, 1 от 10 запитвания се превръщат в клиент. След системата - 3-5 от 10.",
  },
  {
    category: "Clickstarter™",
    question: "Как правите рекламите да работят, а не само да изгарят пари?",
    answer:
      "Много просто - първо намираме точно къде са твоите клиенти (Facebook, Google, LinkedIn), после тестваме различни съобщения докато не намерим това, което работи. След това автоматизираме всичко и следим резултатите всеки ден. Не хвърляме пари на принципа \"да видим какво ще стане\". Всеки лев има причина да се похарчи.",
  },
  {
    category: "Clickstarter™",
    question: "В кои платформи правите реклами?",
    answer:
      "Зависи къде са твоите клиенти. Google Ads за хора, които търсят твоите услуги. Facebook/Instagram за B2C. LinkedIn за B2B. YouTube ако имаме видео съдържание. Не разпръскваме бюджета на 10 места - фокусираме се там, където сме сигурни, че ще работи.",
  },
  {
    category: "Clickstarter™", 
    question: "Колко пари трябва да давам за реклами месечно?",
    answer:
      "Минимум 2000 лева месечно за да има смисъл. Под тази сума се получава както в анекдота - \"малко бременна\". Нямаш достатъчно данни за оптимизация, нямаш обхват, нямаш резултати. Ако не можеш да отделиш 2000 лева месечно, по-добре започни с SEO или Clientomat.",
  },
  {
    category: "Trendlab™",
    question: "Какво точно е това Trendlab™? Правите ли Instagram?",
    answer:
      "Ха-ха, не! Instagram е само едно от местата. Trendlab е цяла система за това как да създаваш съдържание, което хората наистина искат да четат/гледат. Следим какво става в индустрията ти, какво правят конкурентите, какви са трендовете и ти казваме точно какво да публикуваш, кога и къде. Не е за лайкове - е за клиенти.",
  },
  {
    category: "Trendlab™",
    question: "Ще ми помогне ли да се открояе от конкуренцията?",
    answer:
      "100%. Работата е следната - повечето фирми казват едно и също скучно нещо: \"ние сме най-добрите, имаме опит, качество, бла-бла\". Ние ти намираме какво уникално имаш и как да го кажеш по начин, по който хората ще те запомнят. После градим цяла стратегия около това. Резултат - не си \"още една фирма\", а си \"ТЯ фирма\".",
  },
  {
    category: "Trendlab™",
    question: "Пишете ли на български или само на английски?",
    answer:
      "Главно на български. Знаем как пишат, как мислят и как реагират българите. На английски също можем, ама българската аудитория има свои специфики - друг хумор, други болки, други начини да се изразява. И това е нашата суперсила.",
  },
  {
    category: "Ценообразуване",
    question: "Колко струва тая работа? Дай конкретни цифри!",
    answer:
      "Ок, ето конкретните цифри: SEO Struktor™ от 1500 лв./месец, Clientomat™ от 2000 лв./месец, Clickstarter™ от 1200 лв./месец (плюс рекламният бюджет), Trendlab™ от 1800 лв./месец. Ако искаш 2-3 системи заедно, има отстъпка. Но ако търсиш \"най-евтино\", не сме ние. Търсим качество на работата, не количество клиенти.",
  },
  {
    category: "Ценообразуване",
    question: "Работиш ли срещу проценти или само фиксирана такса?",
    answer:
      "Основно фиксирана такса месечно. Защо? Защото искаме да се фокусираме върху това да ти правим добри системи, а не да се притесняваме дали тоя месец ще има пари. При определени проекти можем и на проценти, но обикновено месечната такса е по-честна за двамата ни.",
  },
  {
    category: "Ценообразуване",
    question: "Има ли някакви скрити такси или изненади в сметката?",
    answer:
      "Абсолютно не. Мразя скритите такси. Всичко е ясно и прозрачно в договора преди да започнем. Единственото, което може да се добави, са специални платформи или инструменти (тип Klaviyo, специфичен софтуер), но винаги ще се съгласуваме преди това. Ненавиждам изненадите в сметките.",
  },
  {
    category: "Процес",
    question: "Ок, решено. Как започваме?",
    answer:
      "Много просто: попълваш формата тук, после си говорим 30 минути безплатно по Zoom. Не е продажен разговор - искам да разбера точно какво правиш и къде са проблемите. После ти изпращам конкретен план с етапи, срокове и цени. Ако ти харесва - започваме. Ако не - поне си спестил пари за консултант.",
  },
  {
    category: "Процес",
    question: "Колко време отнема да сложим системите в движение?",
    answer:
      "Зависи коя система: Clickstarter™ - 2-3 седмици (рекламите се пускат бързо). Clientomat™ - около месец. SEO Struktor™ - 2-3 месеца за пълната настройка. Trendlab™ - 3-4 седмици. Ако искаш всичко наведнъж - между 3-6 месеца. Не бързам - искам да стане качествено.",
  },
  {
    category: "Процес",
    question: "Как разбирам дали работи или просто хабя пари?",
    answer:
      "Всеки месец получаваш детайлен отчет с конкретни числа: колко нови клиенти, колко повече трафик, колко повече приходи. Не скрива нищо. Ако не работи - ще го видиш веднага в числата. И аз ще ти кажа честно какво да променим или дали да спрем.",
  },
  {
    category: "Поддръжка",
    question: "Ако имам въпрос или нещо не работи, мога ли да ви намеря?",
    answer:
      "100%. Отговаряме на имейли всеки ден (освен неделите - офисът не работи в почивни дни). При спешни неща се обаждаме. Всеки месец си говорим по телефона за резултатите. Ако нещо се счупи - поправяме го. Не сме от агенциите, които изчезват след като получат парите.",
  },
  {
    category: "Поддръжка",
    question: "Мога ли самият да управлявам системите след време?",
    answer:
      "Разбира се! Всъщност това е целта. Не искам да зависиш от мен завинаги. Всичко е направено да е лесно за използване. Ще те науча как работи, ще ти дам инструкции, ще отговарям на въпросите ти. След време можеш сам да поемеш всичко (ако искаш).",
  },
];

const categories = Array.from(new Set(faqData.map((item) => item.category)));

export default function FAQClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Всички");

  const filteredFAQ =
    selectedCategory === "Всички"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  // FAQ Schema за по-добра SEO видимост
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema);
    script.setAttribute('data-schema-source', 'faq-component');
    script.id = 'faq-schema';
    
    // Премахни съществуващи FAQ schema ако има
    const existingFAQSchema = document.getElementById('faq-schema');
    if (existingFAQSchema) {
      existingFAQSchema.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const schemaToRemove = document.getElementById('faq-schema');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <StructuredData data={pageSEOData.faq.structuredData} />

      {/* Modern Hero Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 md:w-72 md:h-72 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-48 h-48 md:w-96 md:h-96 bg-yellow-400/5 rounded-full blur-3xl"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Имате въпроси?</span><br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Ето честните отговори
              </span>
            </motion.h1>

            <motion.div
              className="mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                Години наред помагаме на български бизнеси да растат системно. 
                Ето най-честите въпроси, които получаваме:
              </p>
              <div className="bg-gray-800/50 border border-yellow-400/30 rounded-xl p-6 mb-6 italic">
                <p className="text-lg text-yellow-300">
                  "Как точно работят вашите системи?" <br />
                  "Колко време ще отнеме?" <br />
                  "Ще се получи ли при мен?"
                </p>
              </div>
              <p className="text-lg text-gray-300">
                Всичко е тук долу - <span className="text-yellow-400 font-semibold">без корпоративна демагогия</span>, 
                само честни, практични отговори от реален опит.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => setSelectedCategory("Всички")}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === "Всички"
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg hover:scale-105"
                    : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-700 hover:border-yellow-400/30"
                }`}
              >
                Всички въпроси
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg hover:scale-105"
                      : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-700 hover:border-yellow-400/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Items - Modern Design */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFAQ.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Card className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/5 transition-all duration-300 h-full flex flex-col rounded-2xl">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-xs text-yellow-400 font-medium uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                          {item.question}
                        </h3>

                        <div className="flex-1">
                          <p className="text-gray-300 leading-relaxed text-sm">
                            {item.answer}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Humanized CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 md:w-72 md:h-72 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Още въпроси? <span className="text-yellow-400">Пишете ми директно</span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ако не намерихте отговора, който търсите, просто ми пишете. 
              Обичам да говоря с хора, които искат да развиват бизнеса си системно.
              <br /><br />
              <span className="text-yellow-400 font-semibold">100% честен разговор, без продажен натиск.</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdast.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-yellow-400/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <HelpCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Безплатен 30-мин разговор</span>
              </motion.a>
              
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white font-semibold rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Контакти</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}