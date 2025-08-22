'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
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
    question: "Какво е бизнес инженеринг и как работи?",
    answer:
      "Бизнес инженерингът е системен подход към изграждане на предсказуеми и мащабируеми бизнес процеси в България. Вместо да разчитаме на късмет, създаваме структурирани системи за постигане на конкретни резултати чрез SEO, автоматизация и дигитален маркетинг.",
  },
  {
    category: "Общи въпроси",
    question: "За какви компании са подходящи вашите услуги?",
    answer:
      "Работим основно с B2B компании в България, които искат да преминат от хаотичен към системен растеж. Особено подходящо за компании с оборот над 100,000 лв. годишно в сферите на услуги, производство и търговия.",
  },
  {
    category: "Общи въпроси",
    question: "Каква е разликата между вашите услуги и традиционните агенции?",
    answer:
      "Ние се фокусираме върху системи, а не кампании. Вместо да правим еднократни проекти, изграждаме автоматизирани процеси за дългосрочен, предсказуем растеж. Всяка наша услуга е интегрирана система за конкретни бизнес резултати.",
  },
  {
    category: "SEO Struktor™",
    question: "Колко време отнема да видя резултати от SEO Struktor™?",
    answer:
      "Първите резултати от SEO Struktor™ се виждат между 3-6 месеца, но значителни подобрения обикновено се постигат в рамките на 6-12 месеца. SEO е дългосрочна инвестиция за устойчив органичен растеж в Google.",
  },
  {
    category: "SEO Struktor™",
    question: "Какво включва SEO Struktor™ системата?",
    answer:
      "SEO Struktor™ включва: техническа оптимизация, keyword research за български пазар, стратегия за съдържание, link building, локално SEO за България, анализ на конкуренцията и месечни отчети с конкретни препоръки за подобрения.",
  },
  {
    category: "SEO Struktor™",
    question: "Работите ли със сайтове на английски език?",
    answer:
      "Да, SEO Struktor™ работи както с български, така и с английски сайтове. Имаме опит с международни пазари и можем да оптимизираме сайтове за глобални търсения, но специализацията ни е българския пазар.",
  },
  {
    category: "Clientomat™",
    question: "Как Clientomat™ автоматизира процесите с клиенти?",
    answer:
      "Clientomat™ автоматизира цялата клиентска воронка чрез: CRM интеграция, автоматизирани email кампании, lead scoring, автоматично проследяване на взаимодействията, персонализирани комуникации базирани на поведението и автоматично сегментиране на клиенти.",
  },
  {
    category: "Clientomat™",
    question: "Ще се интегрира ли Clientomat™ с моята CRM система?",
    answer:
      "Да, Clientomat™ се интегрира с най-популярните CRM системи като HubSpot, Salesforce, Pipedrive, Klaviyo и други. Правим и custom интеграции при необходимост за специфични бизнес нужди.",
  },
  {
    category: "Clientomat™",
    question: "Какви резултати мога да очаквам от Clientomat™?",
    answer:
      "Типично виждаме 40-60% увеличение на conversion rate, 30-50% намаляване на времето за затваряне на сделки, 3-5x подобряване на lead qualification и 25-35% намаляване на customer acquisition cost.",
  },
  {
    category: "Clickstarter™",
    question: "Как работи Clickstarter™ системата за реклами?",
    answer:
      "Clickstarter™ оптимизира рекламни кампании чрез: детайлен анализ на целевата аудитория, A/B тестване на креативи, автоматично управление на бюджети, real-time оптимизация на bidding стратегии и непрекъснато подобряване на резултатите.",
  },
  {
    category: "Clickstarter™",
    question: "На кои платформи работи Clickstarter™?",
    answer:
      "Clickstarter™ управлява кампании в Google Ads, Facebook Ads, Instagram, LinkedIn, YouTube и други релевантни платформи. Фокусираме се върху платформите, където вашата аудитория е най-активна.",
  },
  {
    category: "Clickstarter™",
    question: "Какъв е минимален рекламен бюджет за Clickstarter™?",
    answer:
      "Препоръчваме минимален месечен рекламен бюджет от 2,000 лв. за ефективни резултати. Под тази сума е трудно да се постигне значителен обхват и оптимизация на кампаниите.",
  },
  {
    category: "Trendlab™",
    question: "Какво представлява Trendlab™ услугата?",
    answer:
      "Trendlab™ е система за content marketing и trend analysis. Създаваме съдържание, което резонира с вашата аудитория, анализираме трендовете в индустрията и изграждаме стратегии за брандиране и позициониране на пазара.",
  },
  {
    category: "Trendlab™",
    question: "Как Trendlab™ помага за изграждането на бранд?",
    answer:
      "Trendlab™ изгражда бранд чрез: контент стратегия базирана на данни, анализ на конкурентни послания, създаване на уникално брандиране позициониране, social media стратегия и последователно комуникационно съобщение.",
  },
  {
    category: "Trendlab™",
    question: "Създавате ли съдържание на български език?",
    answer:
      "Да, Trendlab™ специализира в създаване на висококачествено съдържание на български език. Имаме опит с българската аудитория и разбираме културните нюанси, които правят съдържанието ефективно.",
  },
  {
    category: "Ценообразуване",
    question: "Какви са вашите цени за услугите?",
    answer:
      "Цените варират според обхвата и сложността на проекта. SEO Struktor™ започва от 1,500 лв./месец, Clientomat™ от 2,000 лв./месец, Clickstarter™ от 1,200 лв./месец + рекламен бюджет, Trendlab™ от 1,800 лв./месец. Предлагаме комбинирани пакети с отстъпки.",
  },
  {
    category: "Ценообразуване",
    question: "Предлагате ли месечни пакети или еднократни проекти?",
    answer:
      "Предлагаме както месечни retainer договори за продължаваща поддръжка, така и еднократни проекти за специфични нужди. Месечните пакети са по-ефективни за устойчиви резултати.",
  },
  {
    category: "Ценообразуване",
    question: "Има ли скрити такси или допълнителни разходи?",
    answer:
      "Не, всички разходи са ясно описани в договора. Единствените допълнителни разходи могат да бъдат за специфични третостранни услуги (premium tools, реклами), които винаги се одобряват предварително.",
  },
  {
    category: "Процес",
    question: "Как започваме сътрудничеството?",
    answer:
      "Започваме с 30-минутна безплатна консултация чрез Typeform, следвана от детайлен анализ на текущото състояние, изготвяне на персонализирана стратегия и план за изпълнение с ясни етапи, дати и очаквани резултати.",
  },
  {
    category: "Процес",
    question: "Колко време отнема имплементацията на системите?",
    answer:
      "Времевите рамки са: SEO Struktor™ - 2-3 месеца за първоначална настройка, Clientomat™ - 4-6 седмици, Clickstarter™ - 2-3 седмици, Trendlab™ - 3-4 седмици. Комплексни проекти могат да отнемат 3-6 месеца.",
  },
  {
    category: "Процес",
    question: "Как следите и докладвате резултатите?",
    answer:
      "Използваме advanced analytics tools за tracking на всички KPI. Получавате месечни детайлни отчети с визуализации, анализ на резултатите, препоръки за подобрения и план за следващия месец.",
  },
  {
    category: "Поддръжка",
    question: "Какъв тип поддръжка предлагате?",
    answer:
      "Предлагаме 24/7 email поддръжка, месечни консултации, экстренна поддръжка при технически проблеми, обучение на вашия екип и продължаваща оптимизация на системите.",
  },
  {
    category: "Поддръжка",
    question: "Можем ли да управляваме системите самостоятелно?",
    answer:
      "Да, всички системи са проектирани да бъдат user-friendly. Предоставяме подробно обучение, документация и продължаваща поддръжка, за да можете постепенно да поемете управлението.",
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
    <div className="min-h-screen bg-black">
      <StructuredData data={pageSEOData.faq.structuredData} />
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Floating elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ECB629]/30 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-1">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full glassmorphism"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                  <motion.div
                    className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full opacity-20"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="text-sm text-gray-300">
                  <span className="text-[#ECB629] font-bold">Експертни</span> отговори
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Често задавани <br />
              <span className="text-[#ECB629] relative">
                въпроси
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Отговори на най-честите въпроси за{" "}
              <Link href="/services/seo-struktor" className="text-[#ECB629] hover:underline">
                SEO Struktor™
              </Link>
              ,{" "}
              <Link href="/services/clientomat" className="text-[#ECB629] hover:underline">
                Clientomat™
              </Link>
              ,{" "}
              <Link href="/services/clickstarter" className="text-[#ECB629] hover:underline">
                Clickstarter™
              </Link>
              {" "}
              и{" "}
              <Link href="/services/trendlab" className="text-[#ECB629] hover:underline">
                Trendlab™
              </Link>
              . Всичко което трябва да знаете за нашите{" "}
              <Link href="/services" className="text-[#ECB629] hover:underline">
                бизнес инженеринг системи
              </Link>
              {" "}
              за растеж в България.
            </motion.p>

            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={() => setSelectedCategory("Всички")}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === "Всички"
                    ? "bg-[#ECB629] text-black shadow-lg"
                    : "glassmorphism text-gray-300 hover:border-[#ECB629]/30"
                }`}
              >
                Всички
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    selectedCategory === category
                      ? "bg-[#ECB629] text-black shadow-lg"
                      : "glassmorphism text-gray-300 hover:border-[#ECB629]/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFAQ.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="glassmorphism hover:border-[#ECB629]/30 transition-all duration-300 h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                        <span className="text-xs text-[#ECB629] font-medium uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-4 leading-tight">
                        {item.question}
                      </h3>

                      <div className="flex-1">
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {item.answer}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ECB629] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Не намерихте отговор на въпроса си?
            </h2>
            
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Свържете се с нас за персонализирана консултация и получете отговори на всички ваши въпроси за нашите бизнес инженеринг системи.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <HelpCircle className="w-5 h-5" />
                <span>Безплатна консултация</span>
              </motion.a>
              
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Контакти</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}