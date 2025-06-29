import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pageSEOData } from "@/data/seo-pages";
import {
  ArrowRight,
  CheckCircle,
  Settings,
  Zap,
  Target,
  TrendingUp,
  Wrench,
  Eye,
  Activity,
  Crown,
  FileText,
  DollarSign,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Clickstarter() {
  return (
    <>
      <SEOHead
        seo={pageSEOData["services/clickstarter"]}
        pageSlug="services/clickstarter"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="py-10 min-h-screen flex items-center relative overflow-hidden bg-slate-900">
          {/* Enhanced Tech Background - Clickstarter Theme */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0">
              {/* Ad Optimization Grid Pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
                `,
                  backgroundSize: "50px 50px",
                }}
              ></div>

              {/* Tech Lines for Ad Flow */}
              <div className="tech-lines">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
                    style={{
                      top: `${20 + i * 15}%`,
                      width: `${200 + i * 50}px`,
                      left: i % 2 === 0 ? "10%" : "auto",
                      right: i % 2 === 1 ? "10%" : "auto",
                    }}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      scaleX: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Floating Ad Performance Keywords */}
              {[
                "ROI",
                "CTR",
                "CPC",
                "ROAS",
                "CLICKS",
                "TARGET",
                "CONVERT",
                "OPTIMIZE",
              ].map((keyword, i) => (
                <motion.div
                  key={keyword}
                  className="absolute text-[#ECB629] font-bold text-xs tracking-wider opacity-30"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                >
                  {keyword}
                </motion.div>
              ))}

              {/* Floating Tech Elements */}
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
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ECB629] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Enhanced Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-[#ECB629]/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-[#ECB629] rounded-full"></div>
                  <motion.div
                    className="absolute inset-0 w-3 h-3 bg-[#ECB629] rounded-full opacity-30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <span className="text-white text-sm font-semibold">
                  <span className="text-[#ECB629] font-bold">Прецизна</span>{" "}
                  оптимизация
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Двигателят на вашия растеж има нужда от{" "}
                <span className="text-[#ECB629] relative">
                  настройка, а не само от повече гориво.
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Влагането на още пари в рекламен процес, който не е добре
                настроен, е най-бързият начин да ги похарчите напразно.
                По-големият брой кликове не винаги води до по-голяма печалба.
                Това прилича на форсиране на автомобилен двигател, без да сте
                включили на скорост – създава шум, изразходва гориво, но не ви
                придвижва напред.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-auto relative overflow-hidden group"
                    asChild
                  >
                    <a
                      href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                      <span className="relative z-10">
                        Започнете оптимизацията
                      </span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Нашият подход
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-1 gap-12 items-center">
                {/* Problem vs Solution Visualization */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Problem Card */}
                  <Card className="bg-red-900/20 border-red-500/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                          <Settings className="w-8 h-8 text-red-400 animate-pulse" />
                        </div>
                        <div>
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mb-2">
                            ПРОБЛЕМ
                          </Badge>
                          <h3 className="text-xl font-semibold text-white">
                            Неоптимизиран двигател
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        Влагането на още пари в рекламен процес, който не е
                        добре настроен, е най-бързият начин да ги похарчите
                        напразно. По-големият брой кликове не винаги води до
                        по-голяма печалба. Това прилича на форсиране на
                        автомобилен двигател, без да сте включили на скорост –
                        създава шум, изразходва гориво, но не ви придвижва
                        напред.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Solution Card */}
                  <Card className="bg-[#ECB629]/10 border-[#ECB629]/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-[#ECB629]/20 rounded-full flex items-center justify-center">
                          <Settings className="w-8 h-8 text-[#ECB629]" />
                        </div>
                        <div>
                          <Badge className="bg-[#ECB629]/20 text-[#ECB629] border-[#ECB629]/30 mb-2">
                            РЕШЕНИЕ
                          </Badge>
                          <h3 className="text-xl font-semibold text-white">
                            Прецизна настройка
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        Ние не просто „зареждаме с гориво". Ние сме като
                        инженери, които разглобяват, анализират и прецизно
                        настройват всеки елемент на вашия двигател за растеж –
                        от рекламното съобщение до процеса след клика.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6">
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30">
                      <h4 className="text-xl font-semibold text-[#ECB629] mb-4">
                        Нашата цел:
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        Всеки изразходван лев да донесе максимална и измерима
                        възвръщаемост.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Process */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Нашата техническа инспекция: Процесът на настройка в 4 фази
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    phase: "1",
                    title: "Диагностика и пазарен анализ",
                    description:
                      "Проучваме вашите бизнес цели, анализираме конкурентите и определяме профила на идеалния клиент. Така откриваме къде рекламата ви губи ефективност и как можем да я подобрим.",
                    icon: Eye,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    phase: "2",
                    title: "Подобряване на рекламните послания",
                    description:
                      "Оценяваме настоящите ви рекламни материали. Когато е необходимо, използваме нашата система Trendlab™ за създаване на по-ефективни и въздействащи реклами.",
                    icon: Activity,
                    color: "from-green-500 to-green-600",
                  },
                  {
                    phase: "3",
                    title: "Оптимизация след клика",
                    description:
                      "Подобряваме пътя, който клиентът изминава след като кликне върху рекламата ви. За най-добри резултати препоръчваме да интегрирате нашата система Clientomat™, която автоматизира процеса.",
                    icon: Target,
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    phase: "4",
                    title: "Стартиране и постоянно подобрение",
                    description:
                      "Пускаме оптимизираната реклама и непрекъснато следим резултатите. Правим корекции в реално време, за да постигнем максимална възвръщаемост на инвестицията ви.",
                    icon: Settings,
                    color: "from-[#ECB629] to-yellow-500",
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="relative bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Phase Number & Icon */}
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold text-lg`}
                          >
                            {phase.phase}
                          </div>
                          <phase.icon className="w-6 h-6 text-[#ECB629]" />
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#ECB629] transition-colors">
                          {phase.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed flex-grow">
                          {phase.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expected Results */}
        <section className="py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Спрете да се надявате. Започнете да изчислявате.
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Пълна финансова прозрачност и контрол",
                    description: "върху рекламния ви бюджет",
                  },
                  {
                    icon: TrendingUp,
                    title: 'Ясен, измерим "Мултипликатор на инвестицията"',
                    description: "за всеки вложен лев",
                  },
                  {
                    icon: Zap,
                    title: 'Елиминиране на "разхищението на аудитория"',
                    description: "чрез хирургически прецизно таргетиране",
                  },
                  {
                    icon: Crown,
                    title: "Ускорен растеж",
                    description:
                      "и бързо валидиране на пазарни хипотези с минимален риск",
                  },
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="relative bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group h-full">
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <div className="w-16 h-16 bg-[#ECB629]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ECB629]/30 transition-colors">
                          <result.icon className="w-8 h-8 text-[#ECB629]" />
                        </div>

                        <div className="flex items-center justify-center gap-2 mb-3">
                          <h3 className="text-lg font-semibold text-white">
                            {result.title}
                          </h3>
                        </div>

                        <p className="text-gray-400 text-sm">
                          {result.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Investment Structure */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-2 bg-slate-800/80 border border-[#ECB629] rounded-full mb-8">
                  <span className="text-[#ECB629] text-sm font-medium tracking-wide">
                    ПРОЗРАЧНО ЦЕНООБРАЗУВАНЕ
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Структура на инвестицията
                </h2>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Инженерно проектиране изисква прецизност и в техническата
                  спецификация
                </p>

                {/* Price Card */}
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-600/30 mb-16">
                  <div className="text-sm text-[#ECB629] mb-2 tracking-wide">
                    ЗАПОЧВА ОТ
                  </div>
                  <div className="text-6xl md:text-7xl font-bold text-[#ECB629] mb-4">
                    1570 лв.
                    <span className="text-2xl text-gray-400">/месечно</span>
                  </div>
                  <p className="text-gray-400">
                    *Финалната цена се определя след техническа диагностика
                  </p>
                </div>

                {/* Principles */}
                <div className="text-left space-y-8">
                  {[
                    {
                      number: "1",
                      title: "Персонализирано решение",
                      description:
                        "Всяка система Clickstarter™ се проектира и изгражда спрямо уникалните цели и състояние на вашия бизнес. Ние не предлагаме готови пакети.",
                    },
                    {
                      number: "2",
                      title: "Бюджетна рамка",
                      description:
                        "За ориентация, базовите инженерни проекти започват от 1570 лв./месечно + рекламен бюджет.",
                    },
                    {
                      number: "3",
                      title: "Техническа спецификация",
                      description:
                        "Финалната инвестиция се определя след задължителна техническа диагностика. Вие получавате детайлно инженерно предложение, в което всеки компонент е ясно описан и стойностен.",
                    },
                  ].map((principle, index) => (
                    <motion.div
                      key={principle.number}
                      className="flex gap-6"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#ECB629] rounded-full flex items-center justify-center text-black font-bold text-lg">
                          {principle.number}
                        </div>
                        {index < 2 && (
                          <div className="w-0.5 h-16 bg-[#ECB629] mx-auto mt-4"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {principle.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full border border-black/20 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-black font-medium">Остават 3 места за 2025</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Готови ли сте да оптимизирате рекламите си?
              </h2>
              
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Започнете системния подход към рекламите с безплатна консултация за вашите кампании.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-black/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Безплатна консултация</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Без ангажименти</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Отговор в 48 часа</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <span>Запишете консултация</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
