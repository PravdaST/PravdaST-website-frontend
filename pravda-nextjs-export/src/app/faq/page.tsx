
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Често задавани въпроси - Pravda Agency',
  description: 'Отговори на най-честите въпроси за нашите SEO, продажбени и клиентски системи. Разберете повече за нашите услуги и процеси.',
  keywords: 'FAQ, въпроси, отговори, SEO въпроси, консултация, Pravda Agency'
}

export default function FAQPage() {
  const faqs = [
    {
      question: "Какво прави Pravda Agency различни от другите агенции?",
      answer: "Ние не правим 'творчески' маркетинг. Създаваме инженерни системи за предсказуем бизнес растеж. Всяка наша стратегия се базира на данни, измерими резултати и доказани методологии."
    },
    {
      question: "Колко време отнема да видя резултати?",
      answer: "При SEO Struktor™ първите подобрения се виждат след 2-3 месеца, значими резултати - след 6 месеца. При Clientomat първите leads идват още първата седмица след внедряване."
    },
    {
      question: "Работите ли с малки бизнеси?",
      answer: "Да, но имаме минимален бюджет от 1980 лв./месец за SEO услуги. Нашите системи са създадени за сериозни бизнеси, които искат устойчив растеж."
    },
    {
      question: "Гарантирате ли резултати?",
      answer: "Гарантираме процеса, не конкретните цифри. Ако следвате нашите препоръки и внедрите системите правилно, резултатите са неизбежни."
    },
    {
      question: "Колко струват вашите услуги?",
      answer: "SEO Struktor™ започва от 1980 лв./месец. Clientomat и Trendlab са с индивидуални оферти според сложността. Безплатна консултация за всички услуги."
    },
    {
      question: "Работите ли само с български компании?",
      answer: "Не, работим с компании от цяла Европа. Имаме опит с международни проекти на английски, немски и френски език."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Често задавани
            <span className="text-[#ECB628]"> въпроси</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Отговори на най-честите въпроси за нашите инженерни системи за предсказуем бизнес растеж
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                <details className="group">
                  <summary className="p-6 cursor-pointer list-none">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-white group-open:text-[#ECB628] transition-colors">
                        {faq.question}
                      </h3>
                      <div className="text-[#ECB628] transform group-open:rotate-180 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Не намерихте отговора?
            </h2>
            <p className="text-slate-300 mb-6">
              Свържете се с нас за безплатна консултация
            </p>
            <a 
              href="/contact"
              className="inline-block bg-[#ECB628] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#D4A524] transition-colors"
            >
              Безплатна консултация
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
import type { Metadata } from 'next';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';
import { FAQSchema } from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Често задавани въпроси | Pravda Agency',
  description: '🤔 Отговори на най-честите въпроси за SEO услугите, Clientomat™ и бизнес разработката. Научете повече за нашите решения.',
  openGraph: {
    title: 'FAQ - Често задавани въпроси | Pravda Agency',
    description: '🤔 Отговори на най-честите въпроси за SEO услугите, Clientomat™ и бизнес разработката.',
    url: 'https://www.pravdagency.eu/faq/',
  },
};

const faqData = [
  {
    question: "Какво включват вашите SEO услуги?",
    answer: "Нашите SEO услуги включват техническо SEO, оптимизация на съдържанието, ключови думи анализ, създаване на backlinks и месечни отчети за напредъка."
  },
  {
    question: "Колко време отнема да видя резултати?",
    answer: "Първите резултати могат да се видят след 3-6 месеца, докато значителни подобрения обикновено се постигат след 6-12 месеца постоянна работа."
  },
  {
    question: "Какво е Clientomat™?",
    answer: "Clientomat™ е нашата собствена система за автоматизиране на процесите по привличане и управление на клиенти чрез дигитални канали."
  },
  {
    question: "Работите ли само с B2B компании?",
    answer: "Специализираме се в B2B сектора, но работим и с B2C компании, които имат нужда от професионални дигитални решения."
  },
  {
    question: "Предлагате ли поддръжка след завършване на проекта?",
    answer: "Да, предлагаме различни пакети за поддръжка и развитие, адаптирани към нуждите на всеки клиент."
  }
];

export default function FAQPage() {
  return (
    <>
      <EnhancedSEO 
        title="FAQ - Често задавани въпроси | Pravda Agency"
        description="🤔 Отговори на най-честите въпроси за SEO услугите, Clientomat™ и бизнес разработката. Научете повече за нашите решения."
        canonical="https://www.pravdagency.eu/faq/"
        structuredData={{
          "@type": "FAQPage",
          "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        }}
      />
      <FAQSchema faqData={faqData} />
      
      <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Често задавани въпроси
            </h1>
            <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
              Намерете отговори на най-честите въпроси за нашите услуги и процеси
            </p>

            <div className="space-y-6">
              {faqData.map((item, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.question}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Имате други въпроси?
              </h2>
              <p className="text-slate-300 mb-8">
                Свържете се с нас и ще отговорим на всички ваши въпроси
              </p>
              <a 
                href="/contact/"
                className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Свържете се с нас
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
