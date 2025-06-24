import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
// Removed framer-motion for Vercel compatibility
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;

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

  // Генериране на FAQ Schema markup
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
    <div className="min-h-screen">
      <SEOHead
        seo={{
          title: "Често задавани въпроси - Pravdast Business Engineering",
          description:
            "Отговори на най-честите въпроси за бизнес инженеринг услугите: SEO Struktor™, Clientomat™, Sales Engine™. Научете повече за процесите и резултатите.",
          keywords:
            "FAQ, въпроси отговори, бизнес инженеринг, SEO услуги, автоматизация, продажбени системи",
        pageSlug="/faq"
      />

      {/* FAQ Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status Badge */}
              <div className="relative">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">
                Отговаряме в рамките на 48 часа
              </span>
            </div className=">

              <HelpCircle className="text-[var(--pravdast-yellow)]" size={40} />
            </div className=">

            <div className="h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              Често задавани{" "}
              <span className="text-[var(--pravdast-yellow)]">въпроси</span>
            </div className="h1>

            <div className="p
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
              Отговори на най-честите въпроси за нашите бизнес инженеринг
              услуги. Всичко което трябва да знаете за системния подход към
              растеж.
            </div className="p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedCategory("Всички")}
                  selectedCategory === "Всички"
                    ? "bg-[var(--pravdast-yellow)] text-black shadow-lg shadow-[var(--pravdast-yellow)]/20"
                    : "bg-slate-800/80 text-gray-300 hover:bg-slate-700/80 border border-slate-700"
                }`}
                Всички
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                    selectedCategory === category
                      ? "bg-[var(--pravdast-yellow)] text-black shadow-lg shadow-[var(--pravdast-yellow)]/20"
                      : "bg-slate-800/80 text-gray-300 hover:bg-slate-700/80 border border-slate-700"
                  }`}
                  {category}
                </button>
              ))}
            </div className=">
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="pb-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFAQ.map((item, index) => (
                  className="h-full"
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                        <span className="text-xs text-[var(--pravdast-yellow)] font-medium uppercase tracking-wider">
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
                </div className=">
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Не намерихте отговор на{" "}
              <span className="text-[var(--pravdast-yellow)]">въпроса си?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Свържете се с нас за персонализирана консултация и отговори на
              всички ваши въпроси. Експертите ни са на разположение.
            </p>

              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              <a
                href="/contact"
                Заявете безплатна консултация
              </a>
            </div className=">

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Отговаряме в рамките на 48 часа</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Безплатна консултация</span>
              </div>
            </div>
          </div className=">
        </div>
      </section>

      <Footer />
    </div>
  );
