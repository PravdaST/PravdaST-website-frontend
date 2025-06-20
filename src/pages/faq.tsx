import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SEOHead } from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
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
    answer: "Бизнес инженерингът е системен подход към изграждане на предсказуеми и мащабируеми бизнес процеси. Вместо да разчитаме на късмет, създаваме структурирани системи за постигане на конкретни резултати."
  },
  {
    category: "Общи въпроси", 
    question: "За какви компании са подходящи вашите услуги?",
    answer: "Работим основно с B2B компании в България, които искат да преминат от хаотичен към системен растеж. Особено подходящо за компании с оборот над 100,000 лв. годишно."
  },
  {
    category: "SEO Struktor™",
    question: "Колко време отнема да видя резултати от SEO?",
    answer: "Първите резултати се виждат между 3-6 месеца, но значителни подобрения обикновено се постигат в рамките на 6-12 месеца. SEO е дългосрочна инвестиция, не бърза поправка."
  },
  {
    category: "SEO Struktor™",
    question: "Какво включва SEO Struktor™ системата?",
    answer: "Техническа оптимизация, keyword research, съдържание стратегия, link building, локално SEO, анализ на конкуренцията и месечни отчети с конкретни препоръки."
  },
  {
    category: "Clientomat™",
    question: "Как Clientomat™ автоматизира клиентските процеси?",
    answer: "Чрез CRM интеграция, автоматизирани email кампании, lead scoring, автоматично проследяване на взаимодействията и персонализирани комуникации базирани на поведението на клиентите."
  },
  {
    category: "Clientomat™",
    question: "Ще се интегрира ли с моята CRM система?",
    answer: "Да, работим с най-популярните CRM системи като HubSpot, Salesforce, Pipedrive и други. Правим и custom интеграции при необходимост."
  },
  {
    category: "Sales Engine™",
    question: "Какви резултати мога да очаквам от Sales Engine™?",
    answer: "Типично виждаме 30-50% увеличение на conversion rate, 25-40% намаляване на времето за затваряне на сделки и 2-3x подобряване на lead qualification качеството."
  },
  {
    category: "Sales Engine™",
    question: "Как измервате ефективността на продажбната система?",
    answer: "Чрез KPI като conversion rates, average deal size, sales cycle length, lead quality score, customer acquisition cost и customer lifetime value."
  },
  {
    category: "Ценообразуване",
    question: "Какви са вашите цени?",
    answer: "Цените варират в зависимост от обхвата на проекта и спецификите на бизнеса. Започваме с безплатна консултация за оценка на нуждите и изготвяне на персонализирано предложение."
  },
  {
    category: "Ценообразуване",
    question: "Предлагате ли месечни пакети?",
    answer: "Да, предлагаме както еднократни проекти, така и месечни retainer договори за продължаваща поддръжка и оптимизация на системите."
  },
  {
    category: "Процес",
    question: "Как започваме сътрудничеството?",
    answer: "Започваме с 30-минутна безплатна консултация, следвана от анализ на текущото състояние, изготвяне на стратегия и план за изпълнение с ясни етапи и дати."
  },
  {
    category: "Процес",
    question: "Колко време отнема имплементацията?",
    answer: "В зависимост от обхвата: SEO Struktor™ - 2-3 месеца, Clientomat™ - 4-6 седмици, Sales Engine™ - 6-8 седмици. Комплексни проекти могат да отнемат 3-6 месеца."
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Всички");

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQ = selectedCategory === "Всички" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  // Генериране на FAQ Schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        seo={{
          title: "Често задавани въпроси - Pravdast Business Engineering",
          description: "Отговори на най-честите въпроси за бизнес инженеринг услугите: SEO Struktor™, Clientomat™, Sales Engine™. Научете повече за процесите и резултатите.",
          keywords: "FAQ, въпроси отговори, бизнес инженеринг, SEO услуги, автоматизация, продажбени системи"
        }}
        pageSlug="/faq"
      />
      
      {/* FAQ Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Navigation />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 pt-24">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="w-20 h-20 mx-auto mb-8 bg-[var(--pravdast-yellow)]/10 rounded-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <HelpCircle className="text-[var(--pravdast-yellow)]" size={40} />
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Често задавани <span className="text-[var(--pravdast-yellow)]">въпроси</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Отговори на най-честите въпроси за нашите бизнес инженеринг услуги
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <button
                onClick={() => setSelectedCategory("Всички")}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === "Всички"
                    ? "bg-[var(--pravdast-yellow)] text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Всички
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-[var(--pravdast-yellow)] text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFAQ.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-[var(--pravdast-yellow)]/30 transition-colors">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                      >
                        <div>
                          <div className="text-sm text-[var(--pravdast-yellow)] mb-2">
                            {item.category}
                          </div>
                          <h3 className="text-lg font-semibold text-white">
                            {item.question}
                          </h3>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            openItems.includes(index) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {openItems.includes(index) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <div className="pt-4 border-t border-gray-800">
                            <p className="text-gray-300 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--pravdast-yellow)]/10 to-[var(--pravdast-yellow)]/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Не намерихте отговор на въпроса си?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свържете се с нас за персонализирана консултация и отговори на всички ваши въпроси.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--pravdast-yellow)] text-black font-semibold rounded-lg hover:bg-[var(--pravdast-yellow)]/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Свържете се с нас
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}