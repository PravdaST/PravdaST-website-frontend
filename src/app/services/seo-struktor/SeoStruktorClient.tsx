"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { 
  ArrowRight,
  ArrowLeft,
  BarChart3,
  TrendingDown,
  Crown,
  Zap,
  Phone,
  CheckCircle,
  Target,
  Search,
  TrendingUp,
  LineChart,
  Shield,
  Clock,
  Users,
  Award,
  Rocket,
  Brain,
  Globe,
  Database,
  Layers,
  ChevronRight
} from "lucide-react";

export default function SeoStruktorClient() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Philosophy Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #ECB629 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, #ECB629 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            За да е стабилна една сграда, тя се нуждае от <span className="text-[#ECB629]">инженерен план</span>
          </motion.h2>

          {/* Transformation Visualization */}
          <motion.div
            className="glassmorphism rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Status Indicator */}
            <div className="text-center mb-8">
              <motion.div
                className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-1000 ${
                  currentStep === 0
                    ? "bg-red-500/20 text-red-300 border border-red-500/30"
                    : "bg-[#ECB629]/20 text-[#ECB629] border border-[#ECB629]/30"
                }`}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    currentStep === 0 ? "bg-red-400" : "bg-[#ECB629]"
                  }`}
                />
                {currentStep === 0 ? "БЕЗ СИСТЕМА" : "СЪС СИСТЕМА"}
              </motion.div>
            </div>

            {/* Progress Arrow */}
            <div className="flex justify-center mb-8">
              <motion.div className="flex items-center space-x-4">
                <motion.div
                  className="w-16 h-0.5 transition-all duration-1500"
                  style={{
                    background: currentStep === 0
                      ? "linear-gradient(to right, rgb(248, 113, 113), rgb(239, 68, 68))"
                      : "linear-gradient(to right, rgb(248, 113, 113), rgb(236, 182, 40))"
                  }}
                />
                <motion.div
                  animate={{
                    x: currentStep === 1 ? [0, 10, 0] : [0, -10, 0],
                    color: currentStep === 1 ? "#ECB629" : "#f87171"
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  {currentStep === 1 ? (
                    <ArrowRight className="w-6 h-6" />
                  ) : (
                    <ArrowLeft className="w-6 h-6" />
                  )}
                </motion.div>
                <motion.div
                  className="w-16 h-0.5 transition-all duration-1500"
                  style={{
                    background: currentStep === 1
                      ? "linear-gradient(to right, #ECB629, #ECB629)"
                      : "linear-gradient(to right, #ECB629, rgb(248, 113, 113))"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glassmorphism border-red-500/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingDown className="w-8 h-8 text-red-500" />
                    <h3 className="text-2xl font-bold text-red-400">Хаотичен SEO</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Мислите, че имате SEO, а всъщност просто добавяте съдържание",
                      "Не знаете кои думи да таргетирате",
                      "Резултатите идват и си отиват",
                      "Няма система за измерване на успеха",
                      "Конкурентите ви изпреварват постоянно"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glassmorphism border-[#ECB629]/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Crown className="w-8 h-8 text-[#ECB629]" />
                    <h3 className="text-2xl font-bold text-[#ECB629]">SEO Struktor™</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Инженерен план преди първата публикация",
                      "Топографска карта на всички възможности",
                      "Предвидими резултати месец след месец",
                      "Система за доминация, не за участие",
                      "Превръщате Google в ваш търговски агент"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domination Section */}
      <section className="py-20 bg-gradient-to-b from-black via-slate-900/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #ECB629 25%, transparent 25%, transparent 75%, #ECB629 75%, #ECB629),
                             linear-gradient(45deg, #ECB629 25%, transparent 25%, transparent 75%, #ECB629 75%, #ECB629)`,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 15px 15px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Няма да <span className="text-red-500 line-through">участвате</span> в Google.
              <br />
              Ще <span className="text-[#ECB629]">доминирате</span>.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Докато другите се борят за крайчеца от баницата, ние строим фурната
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Топографска карта",
                description: "Виждаме всички възможности в вашата ниша и знаем точно кои да атакуваме първо"
              },
              {
                icon: BarChart3,
                title: "Инженерен план",
                description: "Всяка страница, всяка дума, всяка връзка е част от по-голяма система"
              },
              {
                icon: Zap,
                title: "Автопилот",
                description: "След първите 6 месеца системата работи сама и носи резултати години напред"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="glassmorphism h-full hover:border-[#ECB629]/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-[#ECB629]/10 rounded-lg group-hover:bg-[#ECB629]/20 transition-colors">
                        <feature.icon className="w-8 h-8 text-[#ECB629]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Как работи <span className="text-[#ECB629]">процесът</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              4-стъпков инженерен процес за превръщане на вашия сайт в машина за органичен трафик
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: "1. Анализ",
                description: "Дълбок технически одит и анализ на конкуренцията",
                features: ["200+ точки проверка", "Анализ на топ 10 конкуренти", "Keyword research"]
              },
              {
                icon: Brain,
                title: "2. Стратегия",
                description: "Създаване на детайлна SEO стратегия и пътна карта",
                features: ["Content pillars", "Link building план", "Technical roadmap"]
              },
              {
                icon: Layers,
                title: "3. Внедряване",
                description: "Системно изпълнение на всички оптимизации",
                features: ["On-page оптимизация", "Technical SEO", "Content създаване"]
              },
              {
                icon: BarChart3,
                title: "4. Оптимизация",
                description: "Постоянен мониторинг и подобрения",
                features: ["Месечни отчети", "A/B тестове", "Continuous improvement"]
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="glassmorphism h-full hover:border-[#ECB629]/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="p-3 bg-[#ECB629]/10 rounded-lg inline-block group-hover:bg-[#ECB629]/20 transition-colors">
                        <step.icon className="w-8 h-8 text-[#ECB629]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-400 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-b from-black via-slate-900/30 to-black relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Реални <span className="text-[#ECB629]">резултати</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Това постигат клиентите с SEO Struktor™
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { metric: "+380%", label: "Органичен трафик", subtext: "средно за 6 месеца" },
              { metric: "250+", label: "Keywords в топ 10", subtext: "за клиент" },
              { metric: "67%", label: "Намаление на CPA", subtext: "спрямо платени канали" },
              { metric: "12x", label: "ROI", subtext: "възвръщаемост" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="glassmorphism text-center hover:border-[#ECB629]/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-[#ECB629] mb-2">{stat.metric}</div>
                    <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.subtext}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Client Results Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glassmorphism">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#ECB629]">IceTubCo → £1.5M/месец</h3>
                  <p className="text-gray-300 mb-4">
                    От £400K до £1.5M месечни приходи за 8 месеца. Доминация в 
                    "cold plunge", "ice bath" и още 127 ключови думи.
                  </p>
                  <Link href="/case-studies" className="text-[#ECB629] hover:underline inline-flex items-center">
                    Виж case study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glassmorphism">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#ECB629]">Euphoria → +312% клиенти</h3>
                  <p className="text-gray-300 mb-4">
                    Beauty салон в София увеличи клиентите си с 312% и вече 
                    има 3-седмично чакане за резервация.
                  </p>
                  <Link href="/case-studies" className="text-[#ECB629] hover:underline inline-flex items-center">
                    Виж case study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ECB629] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Инвестиция в <span className="text-[#ECB629]">растеж</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Изберете план според вашите бизнес цели
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "2,500",
                description: "За малки бизнеси и стартъпи",
                features: [
                  "До 50 целеви ключови думи",
                  "Technical SEO audit",
                  "On-page оптимизация",
                  "Месечни отчети",
                  "Local SEO основи"
                ],
                cta: "Започни сега",
                highlighted: false
              },
              {
                name: "Growth",
                price: "5,000",
                description: "За бизнеси в активен растеж",
                features: [
                  "До 150 целеви ключови думи",
                  "Пълна technical оптимизация",
                  "Content strategy & creation",
                  "Link building кампании",
                  "Competitor monitoring",
                  "Bi-weekly отчети"
                ],
                cta: "Най-популярен",
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "За големи компании и брандове",
                features: [
                  "Неограничени ключови думи",
                  "Multi-domain стратегия",
                  "Dedicated SEO team",
                  "Advanced link building",
                  "International SEO",
                  "Weekly отчети и срещи"
                ],
                cta: "Свържи се",
                highlighted: false
              }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className={`glassmorphism h-full ${plan.highlighted ? 'border-[#ECB629] scale-105' : 'border-slate-700'}`}>
                  <CardContent className="p-8">
                    {plan.highlighted && (
                      <div className="bg-[#ECB629] text-black text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                        ПРЕПОРЪЧАН
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#ECB629]">
                        {plan.price === "Custom" ? plan.price : `${plan.price} лв`}
                      </span>
                      {plan.price !== "Custom" && <span className="text-gray-400">/месец</span>}
                    </div>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.highlighted ? 'bg-[#ECB629] text-black hover:bg-[#ECB629]/90' : 'bg-slate-800 hover:bg-slate-700'}`}
                      asChild
                    >
                      <Link href="/contact">
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ECB629]/10 via-transparent to-[#ECB629]/10 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готови за <span className="text-[#ECB629]">доминация</span> в Google?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Започнете с безплатен SEO одит и вижте потенциала на вашия сайт
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 text-lg px-8"
                asChild
              >
                <a 
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Започнете диагностиката
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629]/10 text-lg px-8"
                asChild
              >
                <a href="tel:+359879282299">
                  <Phone className="w-5 h-5 mr-2" />
                  Обади се сега
                </a>
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#ECB629]" />
                <span>Google Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#ECB629]" />
                <span>50+ доволни клиента</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#ECB629]" />
                <span>5+ години опит</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}