import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
        seo={{
          title: "Clickstarter™ - Оптимизация на рекламния бюджет | Pravdast",
          description: "Прецизна настройка на вашия рекламен процес за максимална възвръщаемост. Елиминирайте загубите и максимизирайте резултата от всеки лев.",
          ogImage: "/og-clickstarter.png",
        }}
        pageSlug="services/clickstarter"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
          {/* Enhanced Tech Background - Clickstarter Theme */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0">
              {/* Ad Optimization Grid Pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}></div>
              
              {/* Tech Lines for Ad Flow */}
              <div className="tech-lines">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
                    style={{
                      top: `${20 + i * 15}%`,
                      width: `${200 + i * 50}px`,
                      left: i % 2 === 0 ? '10%' : 'auto',
                      right: i % 2 === 1 ? '10%' : 'auto',
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
              {['ROI', 'CTR', 'CPC', 'ROAS', 'CLICKS', 'TARGET', 'CONVERT', 'OPTIMIZE'].map((keyword, i) => (
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
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <span className="text-white text-sm font-semibold">
                  <span className="text-[#ECB629] font-bold">Прецизна</span> оптимизация
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Вашият рекламен бюджет е мощен двигател.{" "}
                <span className="text-[#ECB629] relative">
                  Работи ли на пълни обороти?
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
                Много компании харчат пари за реклама, но малко от тях извличат максималната възвръщаемост от всеки лев. Нашата система Clickstarter™ е инженерното решение, което прецизно настройва вашия рекламен процес, за да елиминира загубите и да максимизира резултата.
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
                      <span className="relative z-10">Започнете оптимизацията</span>
                    </a>
                  </Button>
                </motion.div>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)] hover:text-black px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold transition-all duration-300 w-full md:w-auto"
                  asChild
                >
                  <a href="/services">Всички услуги</a>
                </Button>
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
                  Двигателят на вашия растеж има нужда от настройка, а не само от повече гориво.
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Problem vs Solution Visualization */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Problem */}
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
                          <h3 className="text-xl font-semibold text-white">Неоптимизиран двигател</h3>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        Разпилени монети, шумен процес, хабене на гориво без движение напред
                      </p>
                    </CardContent>
                  </Card>

                  {/* Solution */}
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
                          <h3 className="text-xl font-semibold text-white">Прецизна настройка</h3>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        Инженерска оптимизация с ръката на експерт за максимална ефективност
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
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Да наливате повече пари (гориво) в рекламен процес, който не е прецизно настроен, е най-бързият начин да ги изхабите. Повечето кликове не винаги означават повече печалба. Това е като да форсирате двигателя, без да сте на скорост – шумно е, хаби гориво, но не ви движи напред.
                    </p>
                    
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30">
                      <h4 className="text-xl font-semibold text-[#ECB629] mb-4">Нашият подход:</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Ние не просто „доставяме гориво". Ние сме инженерите, които разглобяват, анализират и настройват всеки компонент на вашия двигател за растеж – от рекламното послание до процеса след клика. Целта ни е всяка капка гориво (всеки лев) да се превърне в максимална, измерима мощност.
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
                    description: "Анализираме вашите цели, конкуренцията и идеалния ви клиент, за да идентифицираме къде двигателят \"губи мощност\" и какъв е потенциалът за оптимизация.",
                    icon: Eye,
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    phase: "2", 
                    title: "Анализ и оптимизация на \"горивото\"",
                    description: "Ние анализираме вашите съществуващи рекламни послания. При нужда, ако те не са достатъчно ефективни, активираме системата Trendlab™, за да създадем ново, по-въздействащо \"гориво\".",
                    icon: Activity,
                    color: "from-green-500 to-green-600"
                  },
                  {
                    phase: "3",
                    title: "Оптимизация на потока след клика", 
                    description: "Всеки клик трябва да води към ясен и ефективен процес. Ние анализираме и оптимизираме целия път на клиента след рекламата. За максимални резултати и пълна автоматизация силно препоръчваме интеграцията на системата Clientomat™.",
                    icon: Target,
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    phase: "4",
                    title: "Активация, измерване и фини настройки",
                    description: "Пускаме цялостната система в действие и чрез непрекъснат анализ на данните я настройваме в реално време за максимална ефективност и възвръщаемост.",
                    icon: Settings,
                    color: "from-[#ECB629] to-yellow-500"
                  }
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
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold text-lg`}>
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
                    description: "върху рекламния ви бюджет"
                  },
                  {
                    icon: TrendingUp,
                    title: "Ясен, измерим \"Мултипликатор на инвестицията\"",
                    description: "за всеки вложен лев"
                  },
                  {
                    icon: Zap,
                    title: "Елиминиране на \"разхищението на аудитория\"",
                    description: "чрез хирургически прецизно таргетиране"
                  },
                  {
                    icon: Crown,
                    title: "Ускорен растеж",
                    description: "и бързо валидиране на пазарни хипотези с минимален риск"
                  }
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
                          <CheckCircle className="w-5 h-5 text-green-400" />
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
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Инвестиция по чертеж, а не на сляпо.
                </h2>
                
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-600/30 mb-8">
                  <div className="flex justify-center items-center gap-4 mb-6">
                    <FileText className="w-12 h-12 text-[#ECB629]" />
                    <DollarSign className="w-8 h-8 text-[#ECB629]" />
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Базовата инвестиция за този инженерен проект започва от 
                    <span className="text-[#ECB629] font-bold"> 1570 лв./месец + рекламен бюджет</span>. 
                    Крайната стойност се дефинира след техническата диагностика. Вие получавате прозрачен инженерен план, където всеки компонент и всеки лев са напълно обосновани.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#ECB629] text-black relative overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 0, 0, 0.15) 2px, transparent 2px),
                  linear-gradient(90deg, rgba(0, 0, 0, 0.15) 2px, transparent 2px),
                  linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px'
              }}></div>
            </div>
            
            {/* Floating Elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-black/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            
            {/* Optimization Flow */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M 0 50% Q 25% 30% 50% 50% T 100% 50%"
                fill="none"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="3"
                strokeDasharray="20,10"
                animate={{
                  strokeDashoffset: [0, -30],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                {/* Premium Badge */}
                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full mb-8 bg-black/10 border-2 border-black/20 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-4 h-4 bg-black rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="absolute inset-0 w-4 h-4 bg-black rounded-full opacity-30 animate-ping"></div>
                  </div>
                  <span className="text-black text-lg font-bold">ЕКСКЛУЗИВНО</span>
                </motion.div>

                <motion.h2
                  className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Готови ли сте да превърнете разходите в{" "}
                  <span className="relative">
                    предвидима инвестиция?
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-2 bg-black/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                    />
                  </span>
                </motion.h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="bg-black/10 rounded-2xl p-8 border border-black/20">
                    <h3 className="text-2xl font-bold mb-4 text-black">Ограничен капацитет</h3>
                    <p className="text-lg text-black/80 leading-relaxed">
                      Нашият инженерен процес е задълбочен и изисква пълна отдаденост, за да гарантираме реални резултати. Поради тази причина, за следващия месец имаме капацитет да приемем само{" "}
                      <span className="font-bold text-black text-xl">3 нови проекта</span>{" "}
                      за техническа диагностика.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: CheckCircle, text: "Безплатна консултация" },
                      { icon: Clock, text: "Отговор в 48 часа" },
                      { icon: Target, text: "Без ангажименти" },
                      { icon: Crown, text: "100% поверителност" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-black/5 rounded-xl border border-black/10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <item.icon className="w-5 h-5 text-black" />
                        <span className="font-medium text-black text-sm">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left"
                >
                  <div className="bg-black/15 rounded-3xl p-8 border-2 border-black/20 relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 opacity-10">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    <div className="relative z-10">
                      <motion.div
                        className="text-6xl font-bold text-black mb-4 relative"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        3
                        <motion.div
                          className="absolute -top-2 -right-2 w-4 h-4 bg-black rounded-full"
                          animate={{ scale: [0, 1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        />
                      </motion.div>
                      
                      <p className="text-xl font-semibold text-black mb-8">
                        Оставащи места за януари 2025
                      </p>

                      <a 
                        href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block w-full"
                      >
                        <Button className="bg-black text-[#ECB629] hover:bg-gray-900 px-8 py-6 text-xl font-bold w-full mb-6 relative overflow-hidden group shadow-xl">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            style={{ opacity: 0.3 }}
                          />
                          <span className="relative z-10">Запазете едно от 3-те места</span>
                        </Button>
                      </a>

                      <div className="flex items-center justify-center gap-2 text-black/70">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Ще се свържем с вас в рамките на 48 часа
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}