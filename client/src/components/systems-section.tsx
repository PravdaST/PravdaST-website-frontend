import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const systems = [
  {
    id: "seo",
    title: "SEO Struktor™",
    subtitle: "Система за онлайн доминация",
    description:
      "Изграждаме вашето онлайн присъствие като инженерно съоръжение. Прецизна структура и съдържание, което отговаря на клиентските нужди - за доминация в Google.",
    price: "от 1980 лв. / месец",
    period: "минимален период 3 месеца",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    link: "/services/seo-struktor",
    features: [
      "Технически изрядна основа",
      "Съдържание за доверие", 
      "Постоянна оптимизация"
    ],
  },
  {
    id: "trendlab",
    title: "Trendlab™",
    subtitle: "Система за въздействащо съдържание",
    description:
      "Създаваме горивото за растежа ви. Видеа, статии и визуални материали, които разказват историята ви, демонстрират експертизата и изграждат общност.",
    price: "от 1350 лв. / месец",
    period: "минимален период 3 месеца",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    link: "/services/sales-engine",
    features: [
      "Видео съдържание за ангажираност",
      "Социални канали управление",
      "Съдържание което продава"
    ],
  },
  {
    id: "clickstarter",
    title: "Clickstarter™",
    subtitle: "Система за ускорен растеж",
    description:
      "За бързи и предвидими резултати. Платени канали поставят посланието ви директно пред идеалните клиенти - в точния момент за покупка.",
    price: "от 2250 лв. / месец",
    period: "минимален период 3 месеца",
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    link: "/services/sales-engine",
    features: [
      "Прецизно насочване към аудитория",
      "Ясно измерване на ROI",
      "Оптимизация за конверсии"
    ],
  },
  {
    id: "clientomat",
    title: "Clientomat™",
    subtitle: "Система за клиентско задържане",
    description:
      "Превръщаме еднократните купувачи в лоялни клиенти. Интелигентни последователности, персонализирани препоръки и автоматизирани процеси за максимални приходи.",
    price: "от 1650 лв. / месец",
    period: "минимален период 3 месеца",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    link: "/services/clientomat",
    features: [
      "Система за връщащи се клиенти",
      "Автоматизирани продажби",
      "Максимизиране на приходите"
    ],
  },
];

export const SystemsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="systems" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Technical Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="systems-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="var(--pravdast-yellow)" opacity="0.4"/>
              <path d="M0,20 L40,20 M20,0 L20,40" stroke="var(--pravdast-yellow)" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="5" cy="5" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
              <circle cx="35" cy="35" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#systems-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--pravdast-yellow)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Connection line from previous section */}
        <motion.div
          className="w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 mx-auto mb-16"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-6 py-3 bg-[var(--pravdast-yellow)]/10 rounded-full border border-[var(--pravdast-yellow)]/20 mb-8">
            <span className="text-[var(--pravdast-yellow)] text-sm font-semibold tracking-wider">ПРОВЕРЕНИ СИСТЕМИ</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Бизнес инженеринг системи
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Всяка система решава конкретен проблем и носи измерими резултати. 
            Избирате само това, което ви трябва.
          </p>
        </motion.div>

        {/* Modern System Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {systems.map((system, index) => (
            <motion.div
              key={system.id}
              className="relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-600/30 overflow-hidden group hover:border-[var(--pravdast-yellow)]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated background elements */}
              <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                {/* System header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-[var(--pravdast-yellow)]/20 border border-[var(--pravdast-yellow)]/40 rounded-full mb-3">
                      <span className="text-[var(--pravdast-yellow)] text-xs font-semibold">{system.subtitle.toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{system.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--pravdast-yellow)] mb-1">{system.price}</div>
                    <div className="text-xs text-gray-400">{system.period}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{system.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {system.features.map((feature, idx) => (
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
                    <Link href={system.link}>
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
  );
};