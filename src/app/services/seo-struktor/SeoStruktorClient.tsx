"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  LineChart, 
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Rocket,
  Brain,
  Globe,
  Database,
  Layers,
  ChevronRight
} from "lucide-react";

export default function SeoStruktorClient() {
  return (
    <>
      {/* Why SEO Struktor Works Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #ECB629 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, #ECB629 0%, transparent 50%)`
          }}></div>
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
              Защо <span className="text-[#ECB629]">SEO Struktor™</span> работи?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Инженерен подход към SEO, който превръща хаоса в предсказуеми резултати
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without System */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glassmorphism border-red-500/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-red-500/10 rounded-lg">
                      <Shield className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-400">Без система</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Хаотично добавяне на съдържание",
                      "Непредсказуеми резултати",
                      "Краткотрайни подобрения",
                      "Високи разходи, ниска ефективност",
                      "Зависимост от агенции",
                      "Няма контрол върху процеса"
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

            {/* With System */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glassmorphism border-[#ECB629]/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-[#ECB629]/10 rounded-lg">
                      <Rocket className="w-6 h-6 text-[#ECB629]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#ECB629]">С нашата система</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Инженерен план за всеки елемент",
                      "Предвидими и устойчиви резултати",
                      "Дългосрочна доминация в Google",
                      "Максимална ROI ефективност",
                      "Пълна автономност и контрол",
                      "Измерими резултати всеки месец"
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

      {/* Features Section */}
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
              Какво <span className="text-[#ECB629]">включва</span> системата
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Пълен набор от инструменти и процеси за доминация в Google
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Technical SEO",
                description: "Пълна техническа оптимизация на сайта",
                benefits: ["Core Web Vitals", "Schema markup", "XML sitemaps", "Crawl optimization"]
              },
              {
                icon: Database,
                title: "Content Strategy",
                description: "Стратегическо създаване на съдържание",
                benefits: ["Keyword mapping", "Content calendars", "Topic clusters", "E-A-T optimization"]
              },
              {
                icon: TrendingUp,
                title: "Link Building",
                description: "Изграждане на авторитет чрез връзки",
                benefits: ["High-quality backlinks", "Guest posting", "Digital PR", "Brand mentions"]
              },
              {
                icon: Target,
                title: "Local SEO",
                description: "Доминация в локалните търсения",
                benefits: ["Google My Business", "Local citations", "Reviews management", "Local content"]
              },
              {
                icon: LineChart,
                title: "Analytics & Reporting",
                description: "Детайлни анализи и отчети",
                benefits: ["Monthly reports", "Rank tracking", "Traffic analysis", "ROI measurement"]
              },
              {
                icon: Zap,
                title: "Page Speed",
                description: "Оптимизация на скоростта",
                benefits: ["Image optimization", "Code minification", "CDN setup", "Lazy loading"]
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="glassmorphism h-full hover:border-[#ECB629]/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-[#ECB629]/10 rounded-lg group-hover:bg-[#ECB629]/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-[#ECB629]" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="flex items-center gap-2 text-sm text-gray-300">
                          <ChevronRight className="w-4 h-4 text-[#ECB629]" />
                          <span>{benefit}</span>
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
              Постигнати <span className="text-[#ECB629]">резултати</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Реални резултати от клиенти, използващи SEO Struktor™
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { metric: "+380%", label: "Органичен трафик", subtext: "средно за 6 месеца" },
              { metric: "250+", label: "Keywords в топ 10", subtext: "за клиент" },
              { metric: "67%", label: "Намаление на CPA", subtext: "спрямо платени канали" },
              { metric: "12x", label: "ROI", subtext: "възвръщаемост на инвестицията" }
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
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
                price: "1,500",
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
                price: "3,000",
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

      {/* FAQ Section */}
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
              Често задавани <span className="text-[#ECB629]">въпроси</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Колко време отнема да видя резултати?",
                a: "Обикновено първите значими резултати се виждат между 3-6 месец. SEO е дългосрочна инвестиция, която носи устойчиви резултати."
              },
              {
                q: "Какво ако вече имам SEO агенция?",
                a: "Можем да направим безплатен одит и да покажем пропуските в текущата ви стратегия. Нашият инженерен подход често открива възможности, които традиционните агенции пропускат."
              },
              {
                q: "Гарантирате ли резултати?",
                a: "Гарантираме прилагането на всички best practices и доказани методи. Средно клиентите ни виждат 380% ръст на органичния трафик за 12 месеца."
              },
              {
                q: "Работите ли с международни проекти?",
                a: "Да, имаме опит с multi-language и multi-region SEO стратегии. Можем да ви помогнем да навлезете на нови пазари."
              },
              {
                q: "Включва ли услугата създаване на съдържание?",
                a: "В Growth и Enterprise плановете - да. За Starter план предлагаме content strategy и можем да препоръчаме проверени копирайтъри."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="glassmorphism">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-[#ECB629]">{faq.q}</h3>
                    <p className="text-gray-300">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/20 via-transparent to-[#ECB629]/20"></div>
        
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
                <Link href="/contact">
                  Поискайте безплатен одит
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629]/10 text-lg px-8"
                asChild
              >
                <Link href="/case-studies">
                  Вижте резултати
                </Link>
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