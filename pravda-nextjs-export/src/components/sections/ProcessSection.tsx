'use client';

import { motion } from "framer-motion";
import { Search, Wrench, BarChart, Repeat } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Диагностика",
    subtitle: "Анализираме текущото състояние",
    description: "Извършваме задълбочен анализ на вашия бизнес, конкуренция и пазарни възможности. Идентифицираме ключовите проблеми и възможности за растеж.",
    icon: Search,
    duration: "1-2 седмици",
    deliverables: ["Бизнес анализ", "Конкурентен анализ", "Стратегически план"]
  },
  {
    number: "02", 
    title: "Изграждане",
    subtitle: "Създаваме системите за растеж",
    description: "Разработваме и внедряваме персонализирани системи за маркетинг, автоматизация и оптимизация според специфичните нужди на вашия бизнес.",
    icon: Wrench,
    duration: "2-4 седмици",
    deliverables: ["Технически настройки", "Съдържателна стратегия", "Автоматизирани процеси"]
  },
  {
    number: "03",
    title: "Оптимизация", 
    subtitle: "Непрекъснато подобряване",
    description: "Мониторираме резултатите, анализираме данните и непрекъснато оптимизираме системите за постигане на максимална ефективност.",
    icon: BarChart,
    duration: "Непрекъснато",
    deliverables: ["Месечни отчети", "A/B тестове", "Препоръки за подобрение"]
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ECB629]/10 border border-[#ECB629]/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-[#ECB629] rounded-full animate-pulse"></div>
            <span className="text-[#ECB629] font-semibold text-sm">Контролиран</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Нашият <span className="text-[#ECB629]">процес</span> от 3 стъпки
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Системен подход, който превръща хаоса в предвидими резултати
          </motion.p>
        </div>

        {/* Process Steps - Modern Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <motion.div
                key={index}
                className="relative bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-[#ECB629]/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-[#ECB629]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#ECB629] font-bold text-lg">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#ECB629]/10 rounded-xl flex items-center justify-center group-hover:bg-[#ECB629]/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-[#ECB629]" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#ECB629] font-medium text-lg mb-4">{step.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{step.description}</p>
                  
                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 bg-[#ECB629]/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm font-medium">{step.duration}</span>
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Резултати:</h4>
                  <ul className="space-y-2">
                    {step.deliverables.map((item, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                        <div className="w-1 h-1 bg-[#ECB629] rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ECB629]/5 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
            );
          })}

          {/* Enhanced CTA Card */}
          <motion.div
            className="md:col-span-2 bg-gradient-to-r from-[#ECB629]/10 to-[#ECB629]/5 border border-[#ECB629]/20 rounded-2xl p-8 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#ECB629] rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Готови ли сте да започнем вашата трансформация?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Започнете с безплатна диагностика и разберете точно какви системи ще трансформират вашия бизнес
              </p>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <a
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#ECB629] text-black font-bold rounded-lg hover:bg-[#d4af37] transition-colors"
                >
                  Започни диагностика
                  <Repeat className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}