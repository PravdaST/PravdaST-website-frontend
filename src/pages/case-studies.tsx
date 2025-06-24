import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Eye, Star } from "lucide-react";

const caseStudies = [
  {
    id: "bacho-iliya",
    company: "Бачо Илия",
    industry: "Млечна индустрия",
    tagline:
      "Mарка с обичан вкус и богата история, но без изградена дигитална връзка със своите потребители и търговски партньори.",
    description:
      "Традиционен млечен производител с богата история, който се нуждаеше от модерна дигитална присъствие за достигане до нови аудитории.",
    challenge:
      "Компанията разчиташе основно на традиционни канали за продажба и имаше слаба онлайн видимост. Нуждаеше се от система за изграждане на бранд авторитет и привличане на по-млада аудитория.",
    solution:
      "Изградихме цялостна система за съдържание и бранд позициониране, фокусирана върху автентичността и качеството на продуктите. Създадохме видео съдържание, което разказва историята на бранда и демонстрира производствения процес.",
    results: [
      {
        metric: "5 000 000",
        description: "гледания на месец с минимален бюджет",
      },
      { metric: "+243%", description: "ръст на месечната бранд аудитория" },
      { metric: "70%", description: "ръст на запитванията от дистрибутори" },
    ],
    systems: ["Trendlab™", "SEO Struktor™"],
    testimonial:
      "Pravdast ни помогна да превърнем традиционния ни бизнес в модерен бранд, без да загубим автентичността си.",
    image: "/api/placeholder/600/400",
  },
  {
    id: "euphoria-beauty",
    company: "Euphoria Beauty",
    industry: "Козметични услуги",
    tagline: "Салон с репутация. Без дигитална визия.",
    description:
      "Успешен козметичен салон във Варна с отлична репутация сред съществуващите клиенти, но липса на онлайн присъствие.",
    challenge:
      "Салонът разчиташе изцяло на препоръки от уста на уста и нямаше видимост в Google. Нуждаеше се от локална SEO стратегия и система за привличане на нови клиенти.",
    solution:
      "Внедрихме SEO Struktor™ система, фокусирана върху локални търсения. Оптимизирахме Google My Business профила и създадохме съдържание, насочено към местната аудитория във Варна.",
    results: [
      { metric: "+280%", description: "повече запитвания онлайн" },
      { metric: "+137%", description: "нови клиенти от Google" },
      { metric: "+42%", description: "разпознаваемост на бранд" },
    ],
    systems: ["SEO Struktor™", "Clientomat™"],
    testimonial:
      "За първи път имаме постоянен поток от нови клиенти, които ни намират онлайн. Системата работи сама.",
    image: "/api/placeholder/600/400",
  },
  {
    id: "ice-tub-co",
    company: "Ice Tub Co.",
    industry: "Фитнес оборудване",
    tagline: "От нулева SEO стратегия до 1.1M оборот.",
    description:
      "Британска компания за ледени вани, която търсеше систематичен подход за навлизане на европейския пазар.",
    challenge:
      "Компанията нямаше SEO стратегия и беше невидима в Google търсенията. Нуждаеше се от изграждане на авторитет в нишата и система за генериране на продажби.",
    solution:
      "Разработихме цялостна SEO стратегия с фокус върху нишови ключови думи. Създадохме експертно съдържание и внедрихме Sales Engine™ за автоматизиране на продажбения процес.",
    results: [
      { metric: "13.9K", description: "месечни посещения (от 2.3K)" },
      { metric: "£1.5M", description: "месечен приход (от £400K)" },
      { metric: "+27%", description: "поръчки с Clientomat™" },
    ],
    systems: ["SEO Struktor™", "Sales Engine™", "Clientomat™"],
    testimonial:
      "Pravdast ни помогна да изградим предсказуема система за растеж. Резултатите превъзхождат очакванията ни.",
    image: "/api/placeholder/600/400",
  },
  {
    id: "dejavu-gym",
    company: "DeJaVu Gym",
    industry: "Фитнес",
    tagline: "Популярен фитнес. Никаква система.",
    description:
      "Установен фитнес център с лоялни членове, но без система за привличане на нови клиенти и задържане на съществуващите.",
    challenge:
      "Залата разчиташе на сарафанно радио и нямаше автоматизирани процеси за задържане на членове. Високо отпадане и липса на предсказуеми приходи.",
    solution:
      "Внедрихме Clientomat™ система за автоматизирано задържане на членове и препоръчителни програми. Създадохме персонализирани комуникационни потоци за различни типове клиенти.",
    results: [
      { metric: "+41%", description: "повече активни абонаменти" },
      { metric: "+66%", description: "повече препоръки" },
      {
        metric: "53.13%",
        description: "96,000 лв. → 147,000 лв. ръст на оборота",
      },
    ],
    systems: ["Clientomat™", "Trendlab™"],
    testimonial:
      "Сега имаме ясна система, която работи автоматично. Членовете остават по-дълго и препоръчват повече приятели.",
    image: "/api/placeholder/600/400",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Спрете да мечтаете.{" "}
              <span className="text-[var(--pravdast-yellow)]">
                Вижте фактите
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Вместо обещания и теории - конкретни резултати от системи, които
              работят предвидимо.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-[var(--pravdast-dark)]">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[var(--pravdast-dark-gray)] border-[var(--pravdast-yellow)] overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2">
                      {/* Left Column - Content */}
                      <div className="p-12">
                        <div className="mb-6">
                          <h2 className="text-3xl font-bold mb-2">
                            {study.company}
                          </h2>
                          <p className="text-[var(--pravdast-yellow)] text-lg font-semibold mb-2">
                            {study.tagline}
                          </p>
                          <span className="text-sm text-gray-400 bg-[var(--pravdast-dark)] px-3 py-1 rounded-full">
                            {study.industry}
                          </span>
                        </div>

                        <p className="text-gray-300 mb-8">
                          {study.description}
                        </p>

                        {/* Results Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="text-center">
                              <div className="text-2xl md:text-3xl font-bold text-[var(--pravdast-yellow)] mb-2">
                                {result.metric}
                              </div>
                              <div className="text-sm text-gray-400">
                                {result.description}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Systems Used */}
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-gray-400 mb-3">
                            ИЗПОЛЗВАНИ СИСТЕМИ:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {study.systems.map((system, systemIndex) => (
                              <span
                                key={systemIndex}
                                className="text-xs bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] px-3 py-1 rounded-full font-semibold"
                              >
                                {system}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <blockquote className="border-l-4 border-[var(--pravdast-yellow)] pl-6 mb-8">
                          <p className="text-gray-300 italic">
                            "{study.testimonial}"
                          </p>
                        </blockquote>

                        <Button
                          className="bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] font-semibold group"
                          onClick={() =>
                            window.open(
                              "https://form.typeform.com/to/GXLaGY98",
                              "_blank",
                            )
                          }
                        >
                          Искам подобни резултати
                          <ArrowRight
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                            size={20}
                          />
                        </Button>
                      </div>

                      {/* Right Column - Visual */}
                      <div className="bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-medium-gray)] flex items-center justify-center p-12">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <TrendingUp
                              className="text-[var(--pravdast-yellow)] text-6xl"
                              size={64}
                            />
                          </div>
                          <h3 className="text-xl font-semibold mb-4">
                            {study.company}
                          </h3>
                          <div className="flex justify-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="text-[var(--pravdast-yellow)] fill-current"
                                size={20}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge and Solution Details */}
      <section className="py-20 bg-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Как постигаме тези резултати?
              </h2>
              <p className="text-xl text-gray-300">
                Всеки проект следва нашия проверен инженерен процес
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Диагностика",
                  description:
                    "Анализираме данните и открываме къде точно се губят приходи",
                },
                {
                  step: "02",
                  title: "Изграждане",
                  description:
                    "Проектираме и внедряваме системата за решаване на проблема",
                },
                {
                  step: "03",
                  title: "Оптимизация",
                  description:
                    "Следим резултатите и постоянно подобряваме системата",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl font-bold text-[var(--pravdast-yellow)] mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)]">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Готови за вашия успех?
          </motion.h2>

          <motion.p
            className="text-xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Започнете с безплатна диагностика и вижте как можем да постигнем
            подобни резултати за вашия бизнес.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-dark-gray)] text-lg font-semibold px-8 py-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() =>
                window.open("https://form.typeform.com/to/GXLaGY98", "_blank")
              }
            >
              Заявете вашата диагностика
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
