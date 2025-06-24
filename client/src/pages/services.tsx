import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";
import { useRef } from "react";

const services = [
  {
    id: "seo-struktor",
    title: "SEO Struktor™",
    subtitle: "Система за онлайн доминация",
    description: "Изграждаме вашето онлайн присъствие като инженерно съоръжение. Прецизна структура и съдържание, което отговаря на клиентските нужди - за доминация в Google.",
    price: "от 1980 лв. / месец",
    period: "минимален период 3 месеца",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    slug: "seo-struktor",
    features: [
      "Технически изрядна основа",
      "Съдържание за доверие", 
      "Постоянна оптимизация"
    ]
  },
  {
    id: "trendlab",
    title: "Trendlab™",
    subtitle: "Система за въздействащо съдържание",
    description: "Създаваме горивото за растежа ви. Видеа, статии и визуални материали, които разказват историята ви, демонстрират експертизата и изграждат общност.",
    price: "от 1350 лв. / месец",
    period: "минимален период 3 месеца",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    slug: "sales-engine",
    features: [
      "Видео съдържание за ангажираност",
      "Социални канали управление",
      "Съдържание което продава"
    ]
  },
  {
    id: "clickstarter",
    title: "Clickstarter™",
    subtitle: "Система за ускорен растеж",
    description: "За бързи и предвидими резултати. Платени канали поставят посланието ви директно пред идеалните клиенти - в точния момент за покупка.",
    price: "от 2250 лв. / месец",
    period: "минимален период 3 месеца",
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    slug: "sales-engine",
    features: [
      "Прецизно насочване към аудитория",
      "Ясно измерване на ROI",
      "Оптимизация за конверсии"
    ]
  },
  {
    id: "clientomat",
    title: "Clientomat™",
    subtitle: "Система за клиентско задържане",
    description: "Превръщаме еднократните купувачи в лоялни клиенти. Интелигентни последователности, персонализирани препоръки и автоматизирани процеси за максимални приходи.",
    price: "от 1650 лв. / месец",
    period: "минимален период 3 месеца",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    slug: "clientomat",
    features: [
      "Система за връщащи се клиенти",
      "Автоматизирани продажби",
      "Максимизиране на приходите"
    ]
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEOHead seo={pageSEOData.services} pageSlug="services" />
      <Navigation />
      
      {/* Modern Hero Section */}
      <section ref={ref} className="pt-32 pb-24 relative overflow-hidden">
        {/* Enhanced Technical Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="var(--pravdast-yellow)" opacity="0.4"/>
                <path d="M0,20 L40,20 M20,0 L20,40" stroke="var(--pravdast-yellow)" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="5" cy="5" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
                <circle cx="35" cy="35" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-hero-pattern)" />
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
                <span className="text-[var(--pravdast-yellow)] font-semibold">Ново</span> - Приемаме проекти за 2025
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Бизнес инженеринг услуги
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Всяка услуга е проектирана да решава конкретен проблем и да носи измерими резултати
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
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
                    <span className="relative z-10">Започнете диагностиката</span>
                  </a>
                </Button>
              </motion.div>
              
              <Button
                asChild
                variant="outline"
                className="border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)]/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <a href="#services">Разгледайте услугите</a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-600/20">
                <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                <span className="text-gray-300 text-sm font-medium">Безплатна диагностика</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-600/20">
                <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                <span className="text-gray-300 text-sm font-medium">Отговор в 48 часа</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-600/20">
                <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                <span className="text-gray-300 text-sm font-medium">Процес 5 минути</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Services Grid */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Connection line from hero */}
        <motion.div
          className="w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 mx-auto mb-16"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-600/30 overflow-hidden group hover:border-[var(--pravdast-yellow)]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated background elements */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  {/* Service header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="inline-block px-3 py-1 bg-[var(--pravdast-yellow)]/20 border border-[var(--pravdast-yellow)]/40 rounded-full mb-3">
                        <span className="text-[var(--pravdast-yellow)] text-xs font-semibold">{service.subtitle.toUpperCase()}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[var(--pravdast-yellow)] mb-1">{service.price}</div>
                      <div className="text-xs text-gray-400">{service.period}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-[var(--pravdast-yellow)] flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className="w-full bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 font-semibold py-3 rounded-xl transition-all duration-300 relative overflow-hidden group"
                    >
                      <Link href={`/services/${service.slug}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Научете повече
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}