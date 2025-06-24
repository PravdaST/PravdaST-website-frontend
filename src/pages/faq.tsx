import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Какво включват вашите SEO услуги?",
      answer: "SEO Struktor™ включва пълно техническо одитиране, keyword research, on-page и off-page оптимизация, link building, създаване на съдържание и месечно проследяване на резултатите. Работим с всички аспекти на SEO за да осигурим устойчиви резултати."
    },
    {
      question: "Колко време отнема да видя резултати?",
      answer: "Първите подобрения в SEO се виждат обикновено в рамките на 2-3 месеца, но значителните резултати идват след 4-6 месеца. За автоматизацията с Clientomat™ и Sales Engine™ резултатите са по-бързи - 2-4 седмици."
    },
    {
      question: "Работите ли с малки бизнеси?",
      answer: "Да, работим с компании от всички размери. Имаме специални пакети за малки и средни предприятия, които са адаптирани към техните нужди и бюджет."
    },
    {
      question: "Каква е разликата между вашите системи?",
      answer: "SEO Struktor™ се фокусира върху органичен трафик, Clientomat™ автоматизира клиентския процес от лид до продажба, а Sales Engine™ изгражда предсказуема машина за продажби. Всяка система може да работи самостоятелно или в комбинация."
    },
    {
      question: "Предлагате ли гаранция за резултатите?",
      answer: "Да, предлагаме гаранция за резултатите въз основа на ясно дефинирани KPI-та. Ако не постигнем договорените цели в определения срок, продължаваме работата без допълнително заплащане."
    },
    {
      question: "Мога ли да откажа услугата по всяко време?",
      answer: "Да, можете да прекратите сътрудничеството с 30-дневно предизвестие. Няма скрити такси или дългосрочни задължения."
    },
    {
      question: "Как проследявате прогреса?",
      answer: "Предоставяме месечни детайлни репорти с всички важни метрики, тенденции и препоръки. Също така имате достъп до реално време дашборд където можете да следите прогреса."
    },
    {
      question: "Работите ли с международни клиенти?",
      answer: "Да, работим с клиенти от цял свят. Имаме опит с различни пазари и можем да адаптираме стратегиите според местните особености."
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Често задавани <span className="text-[#ECB628]">въпроси</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Отговори на най-честите въпроси за нашите услуги и процеси
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openItems.includes(index);
                return (
                  <Card key={index} className="bg-slate-700 border-slate-600">
                    <CardHeader 
                      className="cursor-pointer hover:bg-slate-600/50 transition-colors"
                      onClick={() => toggleItem(index)}
                    >
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-lg pr-4">
                          {faq.question}
                        </CardTitle>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#ECB628] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#ECB628] flex-shrink-0" />
                        )}
                      </div>
                    </CardHeader>
                    {isOpen && (
                      <CardContent className="pt-0">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Не намерихте отговор на <span className="text-[#ECB628]">въпроса си</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свържете се с нас директно и ще отговорим на всички ваши въпроси
          </p>
          <Button 
            size="lg"
            className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black font-semibold px-8 py-4"
          >
            Свържете се с нас
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}