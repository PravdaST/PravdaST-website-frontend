'use client';

import { generateMetadata } from '@/lib/metadata';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import FAQSchema from '@/components/seo/FAQSchema';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQPage() {
  const pageMetadata = generateMetadata({
    title: 'Често Задавани Въпроси - Pravdast | FAQ',
    description: 'Отговори на най-често задаваните въпроси за нашите SEO услуги, автоматизация на клиенти и дигитален маркетинг.',
    canonical: 'https://www.pravdagency.eu/faq',
    ogImage: '/og-images/default.svg',
  });

  const faqData = [
    {
      question: 'Какво е SEO Struktor™ и как работи?',
      answer: 'SEO Struktor™ е нашата собствена система за SEO оптимизация, която включва техническо SEO, създаване на съдържание и линкбилдинг. Системата работи в три етапа: първо анализираме вашия сайт, след това оптимизираме техническите аспекти и накрая създаваме качествено съдържание за устойчив растеж.'
    },
    {
      question: 'Колко време отнема да видя резултати от SEO?',
      answer: 'SEO е дългосрочна стратегия. Първите резултати обикновено се виждат след 3-6 месеца, но значителни подобрения в позициите и трафика се постигат след 6-12 месеца. Това зависи от конкуренцията в вашата ниша и текущото състояние на сайта.'
    },
    {
      question: 'Какво включва Clientomat™ системата?',
      answer: 'Clientomat™ включва пълна автоматизация на клиентския цикъл: CRM система, автоматизирани email кампании, lead scoring, персонализация на съдържанието и интеграция с вашите існуващи системи. Всичко това работи 24/7 за генериране и нуртуриране на лийдове.'
    },
    {
      question: 'Подходящи ли са вашите услуги за малки бизнеси?',
      answer: 'Да, нашите системи са мащабируеми и подходящи за бизнеси от всякакъв размер. Имаме различни пакети, които се адаптират към нуждите и бюджета на всяка компания - от стартъпи до големи корпорации.'
    },
    {
      question: 'Предлагате ли безплатна консултация?',
      answer: 'Да, предлагаме безплатна 30-минутна консултация, в която анализираме вашия текущ маркетинг, идентифицираме възможностите за подобрение и препоръчваме най-подходящите решения за вашия бизнес.'
    },
    {
      question: 'Как се определя цената на услугите?',
      answer: 'Цените се определят въз основа на обхвата на проекта, сложността на изискванията и времето за изпълнение. Имаме стандартни пакети, но можем да създадем и персонализирани решения според вашите специфични нужди.'
    },
    {
      question: 'Работите ли с международни клиенти?',
      answer: 'Да, работим с клиенти от цяла Европа. Нашите системи са проектирани да работят на различни пазари и езици. Имаме опит с многоезични SEO проекти и международни маркетинг кампании.'
    },
    {
      question: 'Какви гаранции предлагате?',
      answer: 'Предлагаме гаранция за качество на работата и 30-дневна гаранция за възстановяване на средства, ако не сте доволни от резултатите. Също така осигуряваме безплатна поддръжка и корекции в рамките на договорения период.'
    },
    {
      question: 'Мога ли да спра услугата по всяко време?',
      answer: 'Да, можете да прекратите услугата с 30-дневно предизвестие. Не работим с дългосрочни договори, които ви ограничават. Вярваме, че качеството на нашата работа е това, което ще ви задържи като клиент.'
    },
    {
      question: 'Как мога да проследявам напредъка?',
      answer: 'Предоставяме подробни месечни отчети с всички важни метрики, достъп до dashboard с real-time данни и редовни срещи за преглед на напредъка. Прозрачността е важна част от нашия подход.'
    },
    {
      question: 'Работите ли само с B2B компании?',
      answer: 'Макар специализацията ни да е в B2B сектора, работим и с B2C компании, които имат сложни продукти или услуги. Нашите системи са особено ефективни за бизнеси с по-дълъг цикъл на продажба.'
    },
    {
      question: 'Какво се случва с данните ми, ако спра да работя с вас?',
      answer: 'Всички данни са ваша собственост. При прекратяване на сътрудничеството ще получите пълен експорт на всички данни, настройки и материали. Ние не задържаме данните ви като "заложници".'
    }
  ];

  return (
    <>
      <EnhancedSEO
        title={pageMetadata.title?.toString() || ''}
        description={pageMetadata.description || ''}
        canonical="https://www.pravdagency.eu/faq"
        ogImage="/og-images/default.svg"
      />

      <FAQSchema faqData={faqData} />

      <div className="min-h-screen bg-slate-900 text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Често Задавани <span className="text-[var(--pravdast-yellow)]">Въпроси</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Отговори на най-често задаваните въпроси за нашите услуги и процеси
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem 
                      value={`item-${index}`}
                      className="bg-slate-800/50 border border-slate-700 rounded-xl px-6 data-[state=open]:border-[var(--pravdast-yellow)]/50"
                    >
                      <AccordionTrigger className="text-left py-6 hover:text-[var(--pravdast-yellow)] transition-colors [&[data-state=open]]:text-[var(--pravdast-yellow)]">
                        <span className="text-lg font-semibold pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 pt-2">
                        <p className="text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Не намерихте отговор на вашия въпрос?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Свържете се с нас за безплатна консултация
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-[var(--pravdast-yellow)] text-black font-semibold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Свържете се с нас
                </a>
                <a
                  href="tel:+359879282299"
                  className="border border-slate-600 text-white font-semibold py-3 px-8 rounded-lg hover:border-[var(--pravdast-yellow)] hover:text-[var(--pravdast-yellow)] transition-colors"
                >
                  +359 879 282 299
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}