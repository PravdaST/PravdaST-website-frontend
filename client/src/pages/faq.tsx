import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { UnifiedCTASection } from "@/components/unified-cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Общи въпроси",
    question: "Какво е бизнес инженеринг?",
    answer:
      "Бизнес инженерингът е системен подход към изграждане на предсказуеми и мащабируеми бизнес процеси. Вместо да разчитаме на късмет, създаваме структурирани системи за постигане на конкретни резултати.",
  },
  {
    category: "Общи въпроси",
    question: "За какви компании са подходящи вашите услуги?",
    answer:
      "Работим основно с B2B компании в България, които искат да преминат от хаотичен към системен растеж. Особено подходящо за компании с оборот над 100,000 лв. годишно.",
  },
  {
    category: "SEO Struktor™",
    question: "Колко време отнема да видя резултати от SEO?",
    answer:
      "Първите резултати се виждат между 3-6 месеца, но значителни подобрения обикновено се постигат в рамките на 6-12 месеца. SEO е дългосрочна инвестиция, не бърза поправка.",
  },
  {
    category: "SEO Struktor™",
    question: "Какво включва SEO Struktor™ системата?",
    answer:
      "Техническа оптимизация, keyword research, съдържание стратегия, link building, локално SEO, анализ на конкуренцията и месечни отчети с конкретни препоръки.",
  },
  {
    category: "Clientomat™",
    question: "Как Clientomat™ автоматизира клиентските процеси?",
    answer:
      "Чрез CRM интеграция, автоматизирани email кампании, lead scoring, автоматично проследяване на взаимодействията и персонализирани комуникации базирани на поведението на клиентите.",
  },
  {
    category: "Clientomat™",
    question: "Ще се интегрира ли с моята CRM система?",
    answer:
      "Да, работим с най-популярните CRM системи като HubSpot, Salesforce, Pipedrive и други. Правим и custom интеграции при необходимост.",
  },
  {
    category: "Sales Engine™",
    question: "Какви резултати мога да очаквам от Sales Engine™?",
    answer:
      "Типично виждаме 30-50% увеличение на conversion rate, 25-40% намаляване на времето за затваряне на сделки и 2-3x подобряване на lead qualification качеството.",
  },
  {
    category: "Sales Engine™",
    question: "Как измервате ефективността на продажбната система?",
    answer:
      "Чрез KPI като conversion rates, average deal size, sales cycle length, lead quality score, customer acquisition cost и customer lifetime value.",
  },
  {
    category: "Ценообразуване",
    question: "Какви са вашите цени?",
    answer:
      "Цените варират в зависимост от обхвата на проекта и спецификите на бизнеса. Започваме с безплатна консултация за оценка на нуждите и изготвяне на персонализирано предложение.",
  },
  {
    category: "Ценообразуване",
    question: "Предлагате ли месечни пакети?",
    answer:
      "Да, предлагаме както еднократни проекти, така и месечни retainer договори за продължаваща поддръжка и оптимизация на системите.",
  },
  {
    category: "Процес",
    question: "Как започваме сътрудничеството?",
    answer:
      "Започваме с 30-минутна безплатна консултация, следвана от анализ на текущото състояние, изготвяне на стратегия и план за изпълнение с ясни етапи и дати.",
  },
  {
    category: "Процес",
    question: "Колко време отнема имплементацията?",
    answer:
      "В зависимост от обхвата: SEO Struktor™ - 2-3 месеца, Clientomat™ - 4-6 седмици, Sales Engine™ - 6-8 седмици. Комплексни проекти могат да отнемат 3-6 месеца.",
  },
];

const categories = Array.from(new Set(faqData.map((item) => item.category)));

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Всички");

  const filteredFAQ =
    selectedCategory === "Всички"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead
        seo={{
          title: "Често задавани въпроси - Pravdast Business Engineering",
          description:
            "Отговори на най-честите въпроси за бизнес инженеринг услугите: SEO Struktor™, Clientomat™, Clickstarter™, Trendlab™. Научете повече за процесите и резултатите.",
          keywords:
            "FAQ, въпроси отговори, бизнес инженеринг, SEO услуги, автоматизация, продажбени системи",
        }}
        pageSlug="/faq"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-600/30"
              initial={{ opacity: 0, y: 20 }}
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
              initial={{ opacity: 0, y: 20 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Отговори на най-честите въпроси за нашите бизнес инженеринг услуги. Всичко което трябва да знаете за системния подход към растеж. Разгледайте нашите{" "}
              <Link href="/services">
                <a className="text-[#ECB629] hover:underline cursor-pointer">услуги</a>
              </Link>{" "}
              или{" "}
              <Link href="/calculators">
                <a className="text-[#ECB629] hover:underline cursor-pointer">изчислете възвръщаемостта</a>
              </Link>.
            </motion.p>

            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={() => setSelectedCategory("Всички")}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === "Всички"
                    ? "bg-[#ECB629] text-black shadow-lg"
                    : "bg-slate-800/80 text-gray-300 hover:bg-slate-700/80 border border-slate-700"
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
                      : "bg-slate-800/80 text-gray-300 hover:bg-slate-700/80 border border-slate-700"
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
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFAQ.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="bg-slate-800/50 border-slate-700/50 hover:border-[#ECB629]/30 hover:shadow-lg hover:shadow-[#ECB629]/5 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
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
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Не намерихте отговор на въпроса си?
            </motion.h2>
            
            <motion.p
              className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Свържете се с нас за персонализирана консултация и отговори на всички ваши въпроси.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <HelpCircle className="w-5 h-5" />
                <span>Заявете консултация</span>
              </motion.a>
              
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Контакти</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unified CTA Section */}
      <UnifiedCTASection 
        buttonText="Получете отговори"
        headline="Остана ли ви въпрос?"
        description="Свържете се с нас за персонална консултация и получете отговори на всички въпроси за нашите системи."
      />

      <Footer />
    </div>
  );
}
