import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Eye, Star } from "lucide-react";
import { useRef } from "react";

const caseStudies = [
  {
    id: "bacho-iliya",
    company: "Бачо Илия",
    industry: "Млечна индустрия",
    tagline: "Марка с обичан вкус и богата история, но без изградена дигитална връзка със своите потребители.",
    challenge: "Традиционен млечен производител разчиташе основно на традиционни канали за продажба и имаше слаба онлайн видимост.",
    solution: "Изградихме цялостна система за съдържание и бранд позициониране, фокусирана върху автентичността и качеството на продуктите.",
    results: [
      { metric: "5 000 000", description: "гледания на месец с минимален бюджет" },
      { metric: "+243%", description: "ръст на месечната бранд аудитория" },
      { metric: "70%", description: "ръст на запитванията от дистрибутори" }
    ],
    systems: ["Trendlab™", "SEO Struktor™"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "euphoria-beauty",
    company: "Euphoria Beauty",
    industry: "Козметични услуги",
    tagline: "Салон с репутация. Без дигитална визия.",
    challenge: "Успешен козметичен салон във Варна разчиташе изцяло на препоръки от уста на уста и нямаше видимост в Google.",
    solution: "Внедрихме SEO Struktor™ система, фокусирана върху локални търсения и оптимизирахме Google My Business профила.",
    results: [
      { metric: "+280%", description: "повече запитвания онлайн" },
      { metric: "+137%", description: "нови клиенти от Google" },
      { metric: "+42%", description: "разпознаваемост на бранд" }
    ],
    systems: ["SEO Struktor™", "Clientomat™"],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "tech-startup",
    company: "Tech Startup",
    industry: "SaaS платформа",
    tagline: "Иновативен продукт. Нулева видимост на пазара.",
    challenge: "Стартъп с отличен продукт нямаше ефективна стратегия за привличане на клиенти и растеше много бавно.",
    solution: "Комбинирахме Clickstarter™ за бърз растеж с Clientomat™ за задържане на клиентите и изградихме пълна sales система.",
    results: [
      { metric: "+450%", description: "ръст на регистрациите" },
      { metric: "+320%", description: "повече платени абонаменти" },
      { metric: "85%", description: "retention rate на клиентите" }
    ],
    systems: ["Clickstarter™", "Clientomat™"],
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: "legal-firm",
    company: "Адвокатска кантора",
    industry: "Правни услуги",
    tagline: "Експертност в правото. Липса на клиенти.",
    challenge: "Водеща адвокатска кантора с високо качество услуги, но ниска онлайн видимост и малко нови клиенти.",
    solution: "Приложихме SEO Struktor™ за локални търсения и Trendlab™ за позициониране като правни експерти чрез съдържание.",
    results: [
      { metric: "+190%", description: "увеличение на запитванията" },
      { metric: "+85%", description: "повече нови клиенти" },
      { metric: "Top 3", description: "позиции за ключови думи" }
    ],
    systems: ["SEO Struktor™", "Trendlab™"],
    gradient: "from-green-500/20 to-emerald-500/20"
  }
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      {/* Modern Hero Section */}
      <section ref={ref} className="pt-32 pb-24 relative overflow-hidden">
        {/* Enhanced Technical Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="case-studies-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="var(--pravdast-yellow)" opacity="0.4"/>
                <path d="M0,20 L40,20 M20,0 L20,40" stroke="var(--pravdast-yellow)" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="5" cy="5" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
                <circle cx="35" cy="35" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#case-studies-pattern)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-slate-800/60 backdrop-blur-sm rounded-full border border-[var(--pravdast-yellow)]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full animate-ping opacity-30"></div>
              </div>
              <span className="text-gray-300 text-sm font-medium">
                <span className="text-[var(--pravdast-yellow)] font-semibold">Доказани</span> - Реални резултати от клиенти
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Казуси на успеха
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Реални резултати от реални клиенти. Ето как системният подход променя бизнесите.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Започнете диагностиката
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Connection line from hero */}
        <motion.div
          className="w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 mx-auto mb-16"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-600/30 overflow-hidden group hover:border-[var(--pravdast-yellow)]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated background elements */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-[var(--pravdast-yellow)]/20 border border-[var(--pravdast-yellow)]/40 rounded-full mb-3">
                      <span className="text-[var(--pravdast-yellow)] text-xs font-semibold">{study.industry.toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.company}</h3>
                    <p className="text-gray-300 text-sm italic">{study.tagline}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-[var(--pravdast-yellow)] font-semibold mb-2">Предизвикателство:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-[var(--pravdast-yellow)] font-semibold mb-2">Решение:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-[var(--pravdast-yellow)] font-semibold mb-4">Резултати:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <span className="text-2xl font-bold text-[var(--pravdast-yellow)]">{result.metric}</span>
                          <span className="text-gray-300 text-sm text-right">{result.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Systems Used */}
                  <div className="mb-6">
                    <h4 className="text-[var(--pravdast-yellow)] font-semibold mb-3">Използвани системи:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.systems.map((system, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[var(--pravdast-yellow)]/10 border border-[var(--pravdast-yellow)]/20 rounded-full text-xs text-[var(--pravdast-yellow)]">
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative p-12 bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-[var(--pravdast-yellow)]/30 overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--pravdast-yellow)]/10 to-[var(--pravdast-yellow)]/5 opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                  Готови за вашия успех?
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                  Заявете безплатна диагностика и открийте как можем да постигнем подобни резултати за вашия бизнес
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    >
                      <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                        <span className="relative z-10 flex items-center gap-2">
                          Започнете диагностиката
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)]/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
                  >
                    <a href="/contact">Свържете се с нас</a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}