'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PravdaHeading from "@/components/typography/PravdaHeading";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "bacho-iliya",
    company: "Бачо Илия",
    industry: "Млечна индустрия",
    tagline: "Марка с обичан вкус и богата история, но без изградена дигитална връзка със своите потребители и търговски партньори.",
    description: "Вместо стандартна реклама, приложихме инженерен подход към емоциите — свързахме продукта със силно усещане за носталгия по истинската храна от едно време. Това изгради силно доверие и превърна марката в синоним на качество. Резултатите не закъсняха: телефонът на клиента започна да звъни от развълнувани потребители и заинтересовани търговски партньори.",
    results: [
      { metric: "5 000 000", description: "гледания на месец с минимален бюджет" },
      { metric: "+243%", description: "ръст на месечната бранд аудитория" },
      { metric: "70%", description: "ръст на запитванията от дистрибутори" },
    ],
    systems: ["Trendlab™", "SEO Struktor™"],
    testimonial: "Pravdast ни помогна да превърнем традиционния ни бизнес в модерен бранд, без да загубим автентичността си.",
  },
  {
    id: "euphoria-beauty",
    company: "Euphoria Beauty",
    industry: "Козметични услуги",
    tagline: "Салон с репутация. Без дигитална визия.",
    description: "Успешен козметичен салон във Варна с отлична репутация сред съществуващите клиенти, но липса на онлайн присъствие.",
    results: [
      { metric: "+280%", description: "повече запитвания онлайн" },
      { metric: "+137%", description: "нови клиенти от Google" },
      { metric: "+42%", description: "разпознаваемост на бранд" },
    ],
    systems: ["SEO Struktor™", "Clientomat™"],
    testimonial: "За първи път имаме постоянен поток от нови клиенти, които ни намират онлайн. Системата работи сама.",
  },
  {
    id: "ice-tub-co",
    company: "Ice Tub Co.",
    industry: "Фитнес оборудване",
    tagline: "От нулева SEO стратегия до 1.1M оборот.",
    description: "Британска компания за ледени вани, която търсеше систематичен подход за навлизане на европейския пазар.",
    results: [
      { metric: "13.9K", description: "месечни посещения (от 2.3K)" },
      { metric: "£1.5M", description: "месечен приход (от £400K)" },
      { metric: "+27%", description: "поръчки с Clientomat™" },
    ],
    systems: ["SEO Struktor™", "Clickstarter™", "Clientomat™"],
    testimonial: "Pravdast ни помогна да изградим предсказуема система за растеж. Резултатите превъзхождат очакванията ни.",
  },
  {
    id: "dejavu-gym",
    company: "DeJaVu Gym",
    industry: "Фитнес",
    tagline: "Популярен фитнес. Никаква система.",
    description: "Установен фитнес център с лоялни членове, но без система за привличане на нови клиенти и задържане на съществуващите.",
    results: [
      { metric: "+41%", description: "повече активни абонаменти" },
      { metric: "+66%", description: "повече препоръки" },
      { metric: "53.13%", description: "96,000 лв. → 147,000 лв. ръст на оборота" },
    ],
    systems: ["Clientomat™", "Trendlab™"],
    testimonial: "Сега имаме ясна система, която работи автоматично. Членовете остават по-дълго и препоръчват повече приятели.",
  },
  {
    id: "the-key-beer-bar",
    company: "The Key Beer Bar",
    industry: "Ресторантьорство",
    tagline: "Бира бар с уникален характер, но прекалено зависим от доставки на трети страни.",
    description: "The Key Beer Bar правеха 1050 поръчки месечно чрез Glovo на средна стойност 30 лв. Всеки месец плащаха 9450 лв комисионни - повече от половината от оборота си. Имаха лоялни клиенти, но Glovo притежаваше връзката с тях.",
    results: [
      { metric: "70%", description: "намаление на Glovo комисионни" },
      { metric: "6,615 лв", description: "месечно спестени средства" },
      { metric: "79,380 лв", description: "годишно - възвръщане на инвестицията" },
      { metric: "25 мин", description: "средно време за доставка (по-бързо от Glovo)" },
    ],
    systems: ["Clickstarter™", "Clientomat™"],
    testimonial: "За 3 месеца спестихме повече пари, отколкото сме инвестирали в барът за цяла година. Сега клиентите са НАШИ, не на Glovo.",
  },
  {
    id: "rosa-doro-pizza",
    company: "Rosa D'Oro Pizza",
    industry: "Ресторантьорство",
    tagline: "Автентична италианска пицария с две локации, но с ограничен контрол над клиентската база.",
    description: "Златко и Ники от Rosa D'Oro правеха 1500 поръчки месечно чрез Glovo по 43 лв средно. Всеки месец хвърляха 19,350 лв в комисионни. Въпреки отличното качество на храната и автентичните италиански рецепти, нямаха пряка връзка с клиентите си.",
    results: [
      { metric: "70%", description: "редукция на зависимостта от Glovo" },
      { metric: "13,545 лв", description: "месечно пестене" },
      { metric: "162,540 лв", description: "годишна икономия" },
      { metric: "1050", description: "директни поръчки спрямо 450 през Glovo" },
    ],
    systems: ["Clickstarter™", "Clientomat™"],
    testimonial: "Преди Glovo ни контролираше. Сега ние контролираме нашия бизнес. Клиентите обичат директното общуване и бързите доставки.",
  },
  {
    id: "best-burgers-varna",
    company: "Best Burgers Varna",
    industry: "Ресторантьорство",
    tagline: "Най-вкусните бургери във Варна с отлична репутация, но ограничени от високи комисионни.",
    description: "Best Burgers с техните веган, вегетариански и месни опции правеха 450 поръчки месечно чрез Glovo по 30 лв. Плащаха 4,050 лв месечно комисионни въпреки перфектните отзиви от клиентите.",
    results: [
      { metric: "70%", description: "намаление на Glovo зависимост" },
      { metric: "2,835 лв", description: "месечно пестене" },
      { metric: "34,020 лв", description: "годишна икономия" },
      { metric: "90%", description: "успешност на директната телефонна линия" },
    ],
    systems: ["Clickstarter™", "Clientomat™"],
    testimonial: "Нашите клиенти винаги са казвали, че правим най-добрите бургери във Варна. Сега и печалбата ни отразява това качество.",
  },
  {
    id: "atelier-60",
    company: "Atelier 60",
    industry: "Ресторантьорство",
    tagline: "Premium ресторант с модерна кухня, блокиран от intermediary platforms.",
    description: "Atelier 60 позиционираха себе си като premium дестинация с деликатни суши купи, специални смути и изисканото меню. При 240 поръчки месечно от 30 лв, отдаваха 2,160 лв на Glovo - пари които можеха да инвестират в още по-качествени съставки.",
    results: [
      { metric: "60%", description: "reduction в platform dependency" },
      { metric: "1,300 лв", description: "месечни спестявания" },
      { metric: "15,600 лв", description: "годишна печалба" },
      { metric: "+35%", description: "увеличение в средната стойност на поръчка" },
    ],
    systems: ["Clickstarter™", "Clientomat™"],
    testimonial: "Нашите клиенти търсят не просто храна, а culinary experience. Директната връзка ни позволява да им дадем точно това.",
  },
];

export const CaseStudiesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Success Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          ></div>

          {/* Success Indicators */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ECB629] rounded-full"
              style={{
                left: `${10 + i * 11}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full glassmorphism"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Проследими</span> резултати
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Реални резултати от{" "}
            <span className="text-[#ECB629]">реални клиенти</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Всеки проект е различен, но подходът е един - инженерни системи за измерим растеж.
          </motion.p>
        </motion.div>

        {/* Case Study Display */}
        <motion.div
          key={currentSlide}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glassmorphism overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Left Column - Company Info */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-4 py-2 bg-[#ECB629]/20 text-[#ECB629] rounded-full text-sm font-bold">
                      {currentCase.industry}
                    </div>
                  </div>

                  <PravdaHeading as="h3" size="4xl" className="mb-4">
                    {currentCase.company}
                  </PravdaHeading>

                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {currentCase.tagline}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Системи:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCase.systems.map((system, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 glassmorphism text-[#ECB629] rounded-full text-sm font-medium"
                        >
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-gray-300 italic text-lg leading-relaxed border-l-4 border-[#ECB629] pl-6">
                    "{currentCase.testimonial}"
                  </blockquote>
                </div>

                {/* Right Column - Results */}
                <div className="p-8 lg:p-12 border-l border-white/10">
                  <PravdaHeading as="h4" size="2xl" className="mb-8 text-center">
                    Резултати
                  </PravdaHeading>

                  <div className="space-y-4">
                    {currentCase.results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="glassmorphism rounded-lg p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-[#ECB629] font-bold text-xl">
                            {result.metric}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm ml-9">
                          {result.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full glassmorphism text-gray-300 hover:text-[#ECB629] transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#ECB629] scale-125"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-4 rounded-full glassmorphism text-gray-300 hover:text-[#ECB629] transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-[#ECB629]/25 transition-all duration-300 rounded-xl"
            onClick={() => {
              window.open("https://form.typeform.com/to/GXLaGY98", "_blank");
            }}
          >
            Искам същите резултати
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};