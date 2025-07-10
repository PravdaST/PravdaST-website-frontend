'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, TrendingUp, Target, Users } from "lucide-react";

export default function SystemsSection() {
  const systems = [
    {
      id: "seo-struktor",
      title: "SEO Struktor™",
      subtitle: "SEO оптимизация и растеж",
      description: "Системен подход за SEO, който носи предвидими резултати и устойчив растеж на трафика.",
      price: "1980 лв./месечно",
      icon: Search,
      features: ["Техническо SEO", "Съдържателна стратегия", "Линк билдинг", "Аналитика и отчети"],
      href: "/services/seo-struktor",
      status: "Активна система",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "trendlab",
      title: "Trendlab™",
      subtitle: "Съдържание и авторитет",
      description: "Изграждане на авторитет чрез качествено съдържание и стратегическо позициониране.",
      price: "3450 лв./месечно",
      icon: TrendingUp,
      features: ["Съдържателна стратегия", "Видео продукция", "Социални мрежи", "PR кампании"],
      href: "/services/trendlab",
      status: "Премиум система",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "clickstarter",
      title: "Clickstarter™",
      subtitle: "Реклами и конверсии",
      description: "Оптимизация на рекламни кампании за максимални конверсии и възвръщаемост на инвестицията.",
      price: "1570 лв./месечно",
      icon: Target,
      features: ["Google Ads", "Facebook Ads", "Конверсионна оптимизация", "A/B тестване"],
      href: "/services/clickstarter",
      status: "Ефективна система",
      bgGradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: "clientomat",
      title: "Clientomat™",
      subtitle: "Автоматизация на клиенти",
      description: "Автоматизирани системи за привличане, обработка и задържане на клиенти.",
      price: "2890 лв./месечно",
      icon: Users,
      features: ["CRM интеграция", "Email маркетинг", "Автоматизация", "Lead nurturing"],
      href: "/services/clientomat",
      status: "Автоматизирана система",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
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
            <span className="text-[#ECB629] font-semibold text-sm">Системна</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Нашите <span className="text-[#ECB629]">системи</span> за растеж
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Четири проверени системи, които трансформират хаотичния маркетинг в предсказуем растеж
          </motion.p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((system, index) => {
            const IconComponent = system.icon;
            
            return (
              <motion.div
                key={system.id}
                className={`relative bg-gradient-to-br ${system.bgGradient} bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#ECB629]/30 transition-all duration-300 group hover:transform hover:scale-105`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-2 py-1 bg-[#ECB629]/20 text-[#ECB629] text-xs font-semibold rounded-full">
                    {system.status}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#ECB629]/10 rounded-lg flex items-center justify-center group-hover:bg-[#ECB629]/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-[#ECB629]" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{system.title}</h3>
                  <p className="text-[#ECB629] text-sm font-medium mb-3">{system.subtitle}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{system.description}</p>
                  
                  {/* Price */}
                  <div className="text-white font-bold text-lg mb-4">{system.price}</div>
                  
                  {/* Features */}
                  <ul className="space-y-1 mb-6">
                    {system.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 text-xs flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#ECB629] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href={system.href}
                  className="inline-flex items-center gap-2 text-[#ECB629] hover:text-white transition-colors group/btn"
                >
                  <span className="font-semibold">Научи повече</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                {/* Animated Background */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ECB629]/5 to-transparent rounded-xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ECB629] text-black font-semibold rounded-lg hover:bg-[#d4af37] transition-colors"
          >
            Разгледай всички системи
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}