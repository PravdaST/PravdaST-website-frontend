"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  Users,
  BarChart,
  Edit,
  Eye,
  Globe,
  Repeat,
  MessageCircle,
  Coins,
  Magnet,
  Filter,
  Cog,
} from "lucide-react";
import Link from "next/link";

const systems = [
  {
    id: "seo",
    title: "SEO Struktor™",
    subtitle: "Система за онлайн доминация",
    description:
      "Ние изграждаме вашето онлайн присъствие като крепост. Чрез прецизна структура на сайта и съдържание, което отговаря на въпросите на клиентите ви, ние ви превръщаме в авторитета, който Google показва на първо място.",
    price: "от 1980 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: Search,
    link: "/services/seo-struktor",
    features: [
      {
        icon: Eye,
        title: "Технически изрядна основа",
        description: "която Google разбира и харесва.",
      },
      {
        icon: Edit,
        title: "Съдържание, което изгражда доверие",
        description: "на реални клиентски въпроси.",
      },
      {
        icon: Globe,
        title: "Постоянна оптимизация",
        description: "за дългосрочно и стабилно присъствие на челни позиции.",
      },
    ],
  },
  {
    id: "trendlab",
    title: "Trendlab™",
    subtitle: "Система за създаване на въздействащо съдържание",
    description:
      "Ние създаваме горивото за вашия растеж. Продуцираме видеа, статии и визуални материали, които не просто изглеждат добре, а разказват вашата история, демонстрират експертизата ви и изграждат общност около вашия бранд.",
    price: "от 3450 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: Edit,
    link: "/services/trendlab",
    features: [
      {
        icon: Eye,
        title: "Видео съдържание",
        description: "което ангажира и образова.",
      },
      {
        icon: MessageCircle,
        title: "Управление на социални канали",
        description: "което ви позиционира като експерт.",
      },
      {
        icon: Globe,
        title: "Съдържание, което продава",
        description: "вашата уникална история.",
      },
    ],
  },
  {
    id: "clickstarter",
    title: "Clickstarter™",
    subtitle: "Система за ускорен растеж",
    description:
      "Когато имате нужда от бързи и предвидими резултати, тази система използва платени канали, за да постави вашето послание директно пред идеалните ви клиенти – в точния момент, когато те са готови да купят.",
    price: "от 1570 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: BarChart,
    link: "/services/clickstarter",
    features: [
      {
        icon: Filter,
        title: "Прецизно насочване",
        description: "към точната аудитория, без излишен разход.",
      },
      {
        icon: Coins,
        title: "Ясно измерване на възвръщаемостта",
        description: "от всеки лев, вложен в реклама.",
      },
      {
        icon: Magnet,
        title: "Бързо валидиране",
        description: "на оферти и пазарни хипотези.",
      },
    ],
  },
  {
    id: "clientomat",
    title: "Clientomat™",
    subtitle: "Система за автоматизирани връзки с клиенти",
    description:
      "Тази система създава автоматизиран процес, който превръща заинтересования посетител в лоялен клиент. Тя поддържа връзката, отговаря на въпроси и насочва към продажба, без да изисква вашето време.",
    price: "от 2750 лв. / месец",
    period: "минимален период на договор – 3 месеца",
    icon: Users,
    link: "/services/clientomat",
    features: [
      {
        icon: Cog,
        title: "Автоматизиране на комуникацията",
        description: "с клиенти.",
      },
      {
        icon: MessageCircle,
        title: "Персонализиран път за клиента",
        description: "който увеличава продажбите.",
      },
      {
        icon: Repeat,
        title: "Автоматично следене",
        description: "и възстановяване на пропуснати възможности.",
      },
    ],
  },
];

export const SystemsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          {/* Systems Grid Pattern */}
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

          {/* System Connection Lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ECB629] rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${25 + (i % 2) * 50}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
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
                <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                <motion.div
                  className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full opacity-20"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Контролиран</span>{" "}
                растеж с измерими резултати
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Нашите{" "}
            <span className="text-[#ECB629] relative">
              системи
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 sm:mb-16 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Всяка система е проектирана да решава конкретен бизнес проблем.
            Можете да започнете с една или да комбинирате няколко за максимален
            ефект.
          </motion.p>
        </motion.div>

        {/* Modern 4-Column Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {systems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card h-full group-hover:border-[#ECB629]/50 transition-all duration-300">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECB629]/20 border border-[#ECB629]/30">
                    <div className="w-1.5 h-1.5 bg-[#ECB629] rounded-full animate-pulse"></div>
                    <span className="text-xs text-[#ECB629] font-medium">
                      АКТИВНА
                    </span>
                  </div>
                </div>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                      linear-gradient(rgba(236, 182, 40, 0.15) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(236, 182, 40, 0.15) 1px, transparent 1px)
                    `,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                <div className="p-6 relative z-10 h-full flex flex-col">
                  {/* Icon and Header */}
                  <motion.div
                    className="flex items-center justify-center w-14 h-14 bg-[#ECB629]/20 rounded-xl mb-6 group-hover:bg-[#ECB629]/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <system.icon className="w-7 h-7 text-[#ECB629]" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {system.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4">
                    {system.subtitle}
                  </p>

                  {/* Price Display */}
                  <div className="mb-4 p-3 bg-slate-800/40 rounded-lg border border-slate-700/50">
                    <div className="text-[#ECB629] font-bold text-lg">
                      {system.price}
                    </div>
                    <div className="text-xs text-gray-400">{system.period}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {system.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="flex items-center justify-center w-6 h-6 bg-[#ECB629]/20 rounded-md mt-0.5 flex-shrink-0">
                          <feature.icon className="w-3 h-3 text-[#ECB629]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-white mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href={system.link}>
                    <Button className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold group-hover:scale-105 transition-all duration-300">
                      Научете повече
                    </Button>
                  </Link>
                </div>

                {/* Hover Effects */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-[#ECB629]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
