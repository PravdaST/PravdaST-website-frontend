import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Search, Target, TrendingUp, BarChart, Eye, Brain, Rocket, Crown, Diamond, Gem, HeartHandshake, Infinity, Users, CheckCircle, Star, Award, Shield, Layers, Database, Server, Code, Magnet, Zap, Clock, Network, Settings } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";

export default function SEOStruktor() {
  const heroRef = useRef(null);
  const philosophyRef = useRef(null);
  const processRef = useRef(null);
  const resultsRef = useRef(null);
  const investmentRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const philosophyInView = useInView(philosophyRef, { once: true });
  const processInView = useInView(processRef, { once: true });
  const resultsInView = useInView(resultsRef, { once: true });
  const investmentInView = useInView(investmentRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });

  const engineeringPhases = [
    {
      phase: "АНАЛИЗ",
      icon: Eye,
      title: "Техническа диагностика",
      description: "Дълбок технически одит на сайта, анализ на конкуренцията и идентифициране на възможностите за оптимизация.",
      duration: "5-7 дни",
      deliverables: "Пълен технически одит, анализ на ключови думи, конкурентен анализ",
      color: "from-blue-500 to-cyan-400"
    },
    {
      phase: "АРХИТЕКТУРА", 
      icon: Settings,
      title: "SEO фундамент",
      description: "Изграждане на техническата основа - оптимизация на скоростта, структурата и технически SEO елементи.",
      duration: "10-14 дни",
      deliverables: "Технически оптимизации, URL структура, schema markup, sitemap",
      color: "from-indigo-500 to-purple-400"
    },
    {
      phase: "СЪДЪРЖАНИЕ",
      icon: Brain,
      title: "Стратегическо съдържание", 
      description: "Създаване на оптимизирано съдържание, което отговаря на потребностите на аудиторията и изискванията на Google.",
      duration: "Ongoing",
      deliverables: "20+ оптимизирани страници, блог стратегия, локално SEO",
      color: "from-green-500 to-emerald-400"
    },
    {
      phase: "ВЛАСТ",
      icon: Crown,
      title: "Авторитет и връзки",
      description: "Изграждане на авторитет чрез качествени backlinks, PR активности и стратегическо позициониране.",
      duration: "Ongoing",
      deliverables: "Link building кампания, PR активности, локална популярност",
      color: "from-orange-500 to-red-400"
    }
  ];

  const expectedResults = [
    {
      icon: Search,
      title: "Търсене видимост",
      metric: "300%+ увеличение",
      description: "Драматично подобрение в позициите за таргетирани ключови думи",
      timeframe: "3-6 месеца"
    },
    {
      icon: Users,
      title: "Органичен трафик", 
      metric: "250%+ растеж",
      description: "Стабилно увеличение на качествени посетители от Google",
      timeframe: "4-8 месеца"
    },
    {
      icon: Target,
      title: "Конверсии",
      metric: "180%+ подобрение",
      description: "Повече потенциални клиенти и продажби от органичен трафик",
      timeframe: "2-4 месеца"
    },
    {
      icon: Crown,
      title: "Авторитет",
      metric: "Top 3 позиции",
      description: "Доминация в търсенията за основните ви услуги",
      timeframe: "6-12 месеца"
    }
  ];

  const investmentPrinciples = [
    {
      icon: Target,
      title: "Персонализирано решение",
      description: "Всеки проект започва с детайлна диагностика и стратегия, адаптирана към вашите специфични нужди и конкуренция."
    },
    {
      icon: Shield,
      title: "Бюджетна рамка",
      description: "Прозрачна ценова структура с ясни очаквания - знаете точно какво получавате за всеки вложен лев."
    },
    {
      icon: Settings,
      title: "Техническа спецификация",
      description: "Детайлни месечни отчети с конкретни метрики, за да виждате реалния прогрес и възвръщаемост на инвестицията."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData["services/seo-struktor"]} pageSlug="services/seo-struktor" />
      <Navigation />
      
      {/* Revolutionary Hero Section */}
      <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Next-Gen SEO Background System */}
        <div className="absolute inset-0">
          {/* SEO Network Grid */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.4) 2px, transparent 2px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.4) 2px, transparent 2px),
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.2) 2px, transparent 2px)
              `,
              backgroundSize: '120px 120px, 120px 120px, 60px 60px, 80px 80px'
            }}></div>
          </div>

          {/* Search Algorithm Streams */}
          <div className="absolute inset-0 opacity-35">
            {/* Ranking Flow Lines */}
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={`ranking-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${4 + i * 5.5}%`,
                  top: `${8 + (i % 6) * 15}%`,
                  width: '4px',
                  height: '70%',
                  background: `linear-gradient(to bottom, 
                    rgba(59, 130, 246, ${0.3 + (i % 3) * 0.2}), 
                    rgba(99, 102, 241, ${0.2 + (i % 3) * 0.1}), 
                    transparent)`
                }}
                animate={{
                  scaleY: [0.2, 1.8, 0.2],
                  opacity: [0.1, 0.9, 0.1],
                  background: [
                    'linear-gradient(to bottom, rgba(59, 130, 246, 0.5), rgba(99, 102, 241, 0.3), transparent)',
                    'linear-gradient(to bottom, rgba(99, 102, 241, 0.5), rgba(59, 130, 246, 0.3), transparent)',
                    'linear-gradient(to bottom, rgba(59, 130, 246, 0.5), rgba(99, 102, 241, 0.3), transparent)'
                  ]
                }}
                transition={{
                  duration: 3.5 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* SEO Signal Nodes */}
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={`seo-node-${i}`}
                className="absolute rounded-full border-2"
                style={{
                  left: `${6 + i * 4}%`,
                  top: `${12 + (i % 7) * 12}%`,
                  width: `${10 + (i % 5) * 4}px`,
                  height: `${10 + (i % 5) * 4}px`,
                  borderColor: i % 2 === 0 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(99, 102, 241, 0.6)'
                }}
                animate={{
                  scale: [0.4, 2.2, 0.4],
                  opacity: [0.2, 1, 0.2],
                  borderWidth: [1, 4, 1],
                  rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                  borderColor: [
                    'rgba(59, 130, 246, 0.6)',
                    'rgba(99, 102, 241, 0.9)',
                    'rgba(59, 130, 246, 0.6)'
                  ]
                }}
                transition={{
                  duration: 4 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Authority Amplifiers */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`authority-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${12 + i * 10}%`,
                  top: `${18 + (i % 3) * 25}%`,
                  width: `${16 + (i % 3) * 8}px`,
                  height: `${16 + (i % 3) * 8}px`,
                  background: `radial-gradient(circle, 
                    rgba(59, 130, 246, 0.${4 + i % 3}), 
                    rgba(99, 102, 241, 0.${2 + i % 3}), 
                    transparent)`
                }}
                animate={{
                  scale: [1, 3.5, 1],
                  opacity: [0.3, 1, 0.3],
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.2)',
                    '0 0 80px rgba(59, 130, 246, 0.8)',
                    '0 0 20px rgba(59, 130, 246, 0.2)'
                  ],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Atmospheric Enhancement */}
          <div className="absolute inset-0 opacity-12">
            <motion.div 
              className="absolute top-1/5 left-1/5 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/60 via-indigo-500/50 to-purple-500/40 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.08, 0.35, 0.08],
                x: [0, 60, 0],
                y: [0, -40, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/5 right-1/5 w-[500px] h-[500px] bg-gradient-to-l from-purple-500/70 via-blue-500/50 to-indigo-500/40 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.08, 0.3, 0.08],
                x: [0, -50, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />
            <motion.div 
              className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/50 to-blue-500/40 rounded-full blur-3xl"
              animate={{
                scale: [1, 2.2, 1],
                opacity: [0.05, 0.25, 0.05],
                rotate: [0, 360],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={heroRef}
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Revolutionary Status Badge */}
            <motion.div
              className="flex justify-center mb-12"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              >
                {/* SEO system glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-purple-500/40 blur-2xl"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 1, 0.4],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 via-blue-500/30 to-purple-500/30 blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                    rotate: [360, 180, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
                
                {/* Main badge container */}
                <div className="relative inline-flex items-center gap-6 px-16 py-8 rounded-full bg-gradient-to-r from-blue-500/25 via-indigo-500/25 to-purple-500/25 backdrop-blur-lg border-2 border-blue-500/50 shadow-2xl">
                  {/* SEO ranking indicator */}
                  <div className="relative flex items-center gap-4">
                    <div className="relative">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                      <motion.div
                        className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        animate={{
                          scale: [1, 3, 1],
                          opacity: [0.9, 0, 0.9],
                        }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        animate={{
                          scale: [1, 2.5, 1],
                          opacity: [0.7, 0, 0.7],
                        }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.9 }}
                      />
                    </div>
                    <motion.div
                      className="w-3 h-10 bg-gradient-to-t from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                      animate={{
                        scaleY: [1, 1.6, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Revolutionary brand text */}
                  <motion.span 
                    className="text-xl text-white font-black tracking-[0.2em] uppercase"
                    animate={{
                      textShadow: [
                        '0 0 30px rgba(59, 130, 246, 0.4)',
                        '0 0 50px rgba(59, 130, 246, 0.8)',
                        '0 0 30px rgba(59, 130, 246, 0.4)'
                      ],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    SEO STRUKTOR™ СИСТЕМА
                  </motion.span>

                  {/* Authority level indicators */}
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-4 h-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                        animate={{
                          scale: [0.5, 1.6, 0.5],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Quantum corner accents */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-l-3 border-t-3 border-blue-500 rounded-tl-2xl"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 border-r-3 border-t-3 border-indigo-500 rounded-tr-2xl"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-3 border-b-3 border-indigo-500 rounded-bl-2xl"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-3 border-b-3 border-purple-500 rounded-br-2xl"></div>
              </motion.div>
            </motion.div>

            <div className="text-center">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-10 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Спрете да се крие от Google.{" "}
                <motion.span
                  className="relative inline-block"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={heroInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.7, type: "spring", bounce: 0.4 }}
                  whileHover={{ scale: 1.08 }}
                >
                  {/* Multi-dimensional emphasis */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-purple-500/40 rounded-[2rem] blur-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.9, 0.4],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 px-8 py-4 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 rounded-[2rem] border-3 border-blue-500/40 backdrop-blur-lg">
                    Доминирайте го
                  </span>
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-gray-200 mb-16 max-w-5xl mx-auto leading-relaxed font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Инженерна система за SEO, която ви извежда на първа страница и задържа там. Не гадаене - точна наука.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="relative"
                >
                  {/* SEO system button glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-purple-500/50 blur-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl border-2 border-blue-400/50 backdrop-blur-sm"
                    asChild
                  >
                    <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-white/15 opacity-0 group-hover:opacity-100 rounded-2xl"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop' }}
                      />
                      <span className="relative z-10 flex items-center gap-4">
                        <Search className="w-6 h-6" />
                        Безплатна SEO диагностика
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Chaos vs System Background */}
        <div className="absolute inset-0 opacity-20">
          {/* Strategic Philosophy Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.3) 2px, transparent 2px),
              linear-gradient(45deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 120px 120px, 40px 40px, 40px 40px'
          }}></div>

          {/* Dynamic Chaos/System Elements */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`philosophy-${i}`}
              className="absolute"
              style={{
                left: `${10 + i * 7}%`,
                top: `${20 + (i % 4) * 20}%`,
                width: `${8 + (i % 3) * 4}px`,
                height: `${8 + (i % 3) * 4}px`,
              }}
              animate={{
                scale: [0.5, 2.5, 0.5],
                opacity: [0.2, 0.8, 0.2],
                rotate: [0, 360],
                background: i < 6 ? [
                  'radial-gradient(circle, rgba(239, 68, 68, 0.6), transparent)',
                  'radial-gradient(circle, rgba(239, 68, 68, 0.8), transparent)',
                  'radial-gradient(circle, rgba(239, 68, 68, 0.6), transparent)'
                ] : [
                  'radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent)',
                  'radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)',
                  'radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent)'
                ]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
              className="rounded-full bg-gradient-to-r from-red-500/40 to-blue-500/40"
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={philosophyRef}
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Philosophy Header */}
            <div className="text-center mb-20">
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-8 py-4 rounded-full bg-gradient-to-r from-slate-500/20 to-slate-400/20 border border-slate-500/30 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={philosophyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="w-4 h-4 bg-gradient-to-r from-slate-500 to-slate-400 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(100, 116, 139, 0.5)',
                      '0 0 25px rgba(100, 116, 139, 0.9)',
                      '0 0 10px rgba(100, 116, 139, 0.5)'
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="text-slate-300 font-semibold text-lg uppercase tracking-wider">Философията</span>
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  Хаос
                </span>
                {" "}или{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                  система
                </span>
                ?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Повечето компании правят SEO на случаен принцип. Ние го третираме като точна инженерна наука.
              </motion.p>
            </div>

            {/* Transformation Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={philosophyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-700/60 border-2 border-slate-600/40 shadow-2xl rounded-3xl p-12">
                {/* Transformation background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(239, 68, 68, 0.2) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(59, 130, 246, 0.2) 25%, transparent 25%)
                    `,
                    backgroundSize: '60px 60px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Chaos State */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, x: -50 }}
                      animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <motion.div
                        className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border-2 border-red-500/30 flex items-center justify-center"
                        animate={{
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            '0 0 20px rgba(239, 68, 68, 0.3)',
                            '0 0 40px rgba(239, 68, 68, 0.6)',
                            '0 0 20px rgba(239, 68, 68, 0.3)'
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <div className="text-red-400 text-3xl font-bold">БЕЗ СИСТЕМА</div>
                      </motion.div>
                      
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Случайни оптимизации</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Непредсказуеми резултати</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Постоянни промени в стратегията</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Слаби дългосрочни резултати</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Transformation Arrow */}
                    <motion.div
                      className="flex justify-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={philosophyInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <motion.div
                        className="relative"
                        animate={{
                          x: [0, 10, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <motion.div
                          className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center shadow-lg"
                          animate={{
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              '0 0 20px rgba(59, 130, 246, 0.3)',
                              '0 0 40px rgba(59, 130, 246, 0.6)',
                              '0 0 20px rgba(59, 130, 246, 0.3)'
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRight className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* System State */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, x: 50 }}
                      animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      <motion.div
                        className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border-2 border-blue-500/30 flex items-center justify-center"
                        animate={{
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            '0 0 20px rgba(59, 130, 246, 0.3)',
                            '0 0 40px rgba(59, 130, 246, 0.6)',
                            '0 0 20px rgba(59, 130, 246, 0.3)'
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      >
                        <div className="text-blue-400 text-3xl font-bold">СЪС СИСТЕМА</div>
                      </motion.div>
                      
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Структуриран подход</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Предсказуеми резултати</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Измерим прогрес</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Дългосрочно доминиране</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Process Section */}
      <section className="py-32 bg-slate-800/30 relative overflow-hidden">
        {/* Advanced Engineering Background */}
        <div className="absolute inset-0 opacity-25">
          {/* Engineering Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 2px, transparent 2px),
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 3px, transparent 3px)
            `,
            backgroundSize: '100px 100px, 25px 25px, 150px 150px'
          }}></div>

          {/* Engineering Data Flow */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`engineering-flow-${i}`}
              className="absolute"
              style={{
                left: `${5 + i * 12}%`,
                top: `${30 + (i % 3) * 20}%`,
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, 
                  rgba(59, 130, 246, 0.${3 + i % 4}), 
                  rgba(99, 102, 241, 0.${2 + i % 3}), 
                  transparent)`
              }}
              animate={{
                scaleX: [0.2, 1.5, 0.2],
                opacity: [0.3, 1, 0.3],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className="rounded-full"
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={processRef}
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Process Header */}
            <div className="text-center mb-20">
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={processInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(59, 130, 246, 0.5)',
                      '0 0 25px rgba(59, 130, 246, 0.9)',
                      '0 0 10px rgba(59, 130, 246, 0.5)'
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="text-blue-300 font-semibold text-lg uppercase tracking-wider">Процесът</span>
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                От основите до{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                  покрива
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Четири последователни фази на инженерен SEO процес, който води до доминация в Google.
              </motion.p>
            </div>

            {/* Engineering Timeline */}
            <div className="relative">
              {/* Timeline Background */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`timeline-bg-${i}`}
                    className="absolute"
                    style={{
                      left: `${10 + i * 15}%`,
                      top: `${20 + (i % 3) * 30}%`,
                      width: '40px',
                      height: '2px',
                      background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.3), transparent)'
                    }}
                    animate={{
                      scaleX: [0.5, 1.5, 0.5],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Timeline Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {engineeringPhases.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={processInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                    className="relative"
                  >
                    {/* Phase glow effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${phase.color} opacity-20 blur-xl`}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 3 + index * 0.5, 
                        repeat: Infinity, 
                        delay: index * 0.8,
                        ease: "easeInOut" 
                      }}
                    />
                    
                    <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-700/60 border-2 border-slate-600/40 hover:border-blue-500/50 transition-all duration-500 group backdrop-blur-lg shadow-2xl rounded-3xl h-full">
                      {/* Phase pattern overlay */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `
                            radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2) 2px, transparent 2px),
                            radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.15) 2px, transparent 2px)
                          `,
                          backgroundSize: '40px 40px, 60px 60px'
                        }}></div>
                      </div>

                      {/* Phase number badge */}
                      <div className="absolute top-6 right-6">
                        <motion.div 
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </motion.div>
                      </div>

                      <CardContent className="p-8 relative z-10 h-full flex flex-col">
                        {/* Phase indicator */}
                        <motion.div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${phase.color} mb-6 self-start`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-white font-bold text-sm uppercase tracking-wider">{phase.phase}</span>
                        </motion.div>

                        {/* Enhanced icon container */}
                        <motion.div
                          className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${phase.color} opacity-20 flex items-center justify-center mb-8 group-hover:opacity-30 transition-all duration-300`}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <phase.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <div className="flex-grow">
                          <motion.h3 
                            className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            {phase.title}
                          </motion.h3>
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {phase.description}
                          </p>

                          {/* Timeline info */}
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3">
                              <Clock className="w-4 h-4 text-blue-400" />
                              <span className="text-blue-300 font-semibold">{phase.duration}</span>
                            </div>
                            <div className="text-gray-400 text-sm">
                              {phase.deliverables}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Bottom CTA */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 p-12 backdrop-blur-sm">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        45deg,
                        rgba(59, 130, 246, 0.2) 0px,
                        rgba(59, 130, 246, 0.2) 10px,
                        transparent 10px,
                        transparent 20px
                      )
                    `
                  }}></div>
                </div>

                <div className="relative z-10">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(59, 130, 246, 0.3)',
                        '0 0 30px rgba(59, 130, 246, 0.5)',
                        '0 0 20px rgba(59, 130, 246, 0.3)'
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Готови ли сте да спрете да се <span className="text-blue-400">крие</span> от Google?
                  </motion.h3>
                  <p className="text-gray-300 text-xl mb-8">
                    Започнете с безплатна техническа диагностика и открийте възможностите за SEO доминация
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 to-indigo-500/40 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <Button 
                      size="lg"
                      className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 font-bold text-xl px-10 py-6 rounded-2xl shadow-2xl"
                      asChild
                    >
                      <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 rounded-2xl"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                        />
                        <span className="relative z-10 flex items-center gap-3">
                          <Search className="w-6 h-6" />
                          Започнете SEO трансформацията
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expected Results Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Results Background */}
        <div className="absolute inset-0 opacity-20">
          {/* Success Metrics Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 2px, transparent 2px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.2) 3px, transparent 3px),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.2) 3px, transparent 3px)
            `,
            backgroundSize: '90px 90px, 90px 90px, 120px 120px, 150px 150px'
          }}></div>

          {/* Success Indicators */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`results-${i}`}
              className="absolute"
              style={{
                left: `${8 + i * 9}%`,
                top: `${25 + (i % 4) * 18}%`,
                width: `${6 + (i % 3) * 3}px`,
                height: `${6 + (i % 3) * 3}px`,
              }}
              animate={{
                scale: [0.3, 2.8, 0.3],
                opacity: [0.2, 0.9, 0.2],
                rotate: [0, 360],
                background: [
                  'radial-gradient(circle, rgba(34, 197, 94, 0.7), transparent)',
                  'radial-gradient(circle, rgba(16, 185, 129, 0.9), transparent)',
                  'radial-gradient(circle, rgba(34, 197, 94, 0.7), transparent)'
                ]
              }}
              transition={{
                duration: 3.5 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="rounded-full bg-gradient-to-r from-green-500/40 to-emerald-500/40"
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={resultsRef}
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Results Header */}
            <div className="text-center mb-20">
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={resultsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(34, 197, 94, 0.5)',
                      '0 0 25px rgba(34, 197, 94, 0.9)',
                      '0 0 10px rgba(34, 197, 94, 0.5)'
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="text-green-300 font-semibold text-lg uppercase tracking-wider">Очаквани резултати</span>
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Крайният резултат:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                  Повече от просто позиции
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Измерими подобрения, които директно влияят на вашия бизнес растеж и конкурентна позиция.
              </motion.p>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expectedResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  className="relative"
                >
                  {/* Result glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/15 to-emerald-500/10 blur-xl"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 4 + index * 0.5, 
                      repeat: Infinity, 
                      delay: index * 0.6,
                      ease: "easeInOut" 
                    }}
                  />
                  
                  <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-700/60 border-2 border-slate-600/40 hover:border-green-500/50 transition-all duration-500 group backdrop-blur-lg shadow-2xl rounded-3xl h-full">
                    {/* Result pattern overlay */}
                    <div className="absolute inset-0 opacity-8">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `
                          radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.15) 2px, transparent 2px),
                          radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.1) 2px, transparent 2px)
                        `,
                        backgroundSize: '50px 50px, 70px 70px'
                      }}></div>
                    </div>

                    <CardContent className="p-8 relative z-10 text-center h-full flex flex-col justify-between">
                      {/* Enhanced icon container */}
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-3xl flex items-center justify-center border-2 border-green-500/30 group-hover:border-green-500/50 transition-all duration-300 mb-6 mx-auto"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <result.icon className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      
                      <div>
                        <motion.h3 
                          className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300"
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.3 }}
                        >
                          {result.title}
                        </motion.h3>

                        {/* Metric display */}
                        <motion.div
                          className="mb-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-2xl font-bold text-green-400 mb-2">{result.metric}</div>
                          <div className="text-gray-300 text-sm leading-relaxed">{result.description}</div>
                        </motion.div>

                        {/* Timeframe */}
                        <motion.div
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="text-green-300 font-semibold text-sm">{result.timeframe}</span>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-32 bg-slate-800/30 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={investmentRef}
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={investmentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Investment Header */}
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={investmentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(245, 158, 11, 0.5)',
                      '0 0 25px rgba(245, 158, 11, 0.9)',
                      '0 0 10px rgba(245, 158, 11, 0.5)'
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="text-yellow-300 font-semibold text-lg uppercase tracking-wider">Инвестицията</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Цената на{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                  доминацията
                </span>
              </h2>
            </div>

            {/* Investment Display */}
            <Card className="bg-slate-800/60 border-slate-600/30 p-12 backdrop-blur-sm mb-12 rounded-3xl text-center">
              <motion.div 
                className="text-7xl md:text-8xl font-bold text-yellow-500 mb-6"
                animate={{
                  textShadow: [
                    '0 0 30px rgba(245, 158, 11, 0.5)',
                    '0 0 50px rgba(245, 158, 11, 0.8)',
                    '0 0 30px rgba(245, 158, 11, 0.5)'
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                1980 лв.
              </motion.div>
              <p className="text-2xl text-gray-300 mb-8">месечна инвестиция в SEO доминация</p>
              <p className="text-lg text-gray-400">минимален период на договор – 3 месеца</p>
            </Card>

            {/* Investment Principles */}
            <div className="grid md:grid-cols-3 gap-8">
              {investmentPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={investmentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  className="relative"
                >
                  <Card className="bg-slate-700/50 rounded-3xl p-8 border border-slate-600/30 h-full">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded-2xl flex items-center justify-center border-2 border-yellow-500/30 mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <principle.icon className="w-8 h-8 text-yellow-500" />
                    </motion.div>
                    
                    <h4 className="text-white font-bold text-xl mb-4">{principle.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{principle.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={investmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/40 to-orange-500/40 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <Button 
                  size="lg"
                  className="relative bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-600 hover:to-orange-600 font-bold text-xl px-10 py-6 rounded-2xl shadow-2xl"
                  asChild
                >
                  <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 rounded-2xl"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      <Search className="w-6 h-6" />
                      Започнете доминацията
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ultra-Enhanced Final CTA Section */}
      <section className="py-32 bg-[#ECB629] text-black relative overflow-hidden">
        {/* Ultra-Enhanced Background System */}
        <div className="absolute inset-0">
          {/* Advanced Grid Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.1) 2px, transparent 2px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.1) 2px, transparent 2px),
                linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 100px 100px, 25px 25px, 25px 25px'
            }}></div>
          </div>

          {/* Dynamic SEO Algorithm Network */}
          <div className="absolute inset-0 opacity-25">
            {/* Algorithm Stream Lines */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`algorithm-stream-${i}`}
                className="absolute bg-black/30 rounded-full"
                style={{
                  left: `${8 + i * 8}%`,
                  top: `${20 + (i % 4) * 20}%`,
                  width: '3px',
                  height: '60px',
                  transformOrigin: 'center',
                }}
                animate={{
                  scaleY: [0.4, 1.8, 0.4],
                  opacity: [0.2, 0.8, 0.2],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* SEO Ranking Nodes */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`ranking-node-${i}`}
                className="absolute rounded-full border-2 border-black/40"
                style={{
                  left: `${5 + i * 6}%`,
                  top: `${10 + (i % 5) * 18}%`,
                  width: `${8 + (i % 3) * 4}px`,
                  height: `${8 + (i % 3) * 4}px`,
                }}
                animate={{
                  scale: [0.8, 1.6, 0.8],
                  opacity: [0.3, 0.9, 0.3],
                  borderWidth: [1, 3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 5 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Authority Signal Cores */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`authority-signal-${i}`}
                className="absolute w-10 h-10 rounded-full bg-gradient-to-r from-black/40 to-orange-600/30"
                style={{
                  left: `${12 + i * 16}%`,
                  top: `${15 + (i % 2) * 70}%`,
                }}
                animate={{
                  scale: [1, 2.4, 1],
                  opacity: [0.4, 0.9, 0.4],
                  boxShadow: [
                    '0 0 30px rgba(0,0,0,0.2)',
                    '0 0 60px rgba(0,0,0,0.6)',
                    '0 0 30px rgba(0,0,0,0.2)'
                  ],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 opacity-8">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-black/40 to-orange-600/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1],
                x: [0, 30, 0],
                y: [0, -15, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-l from-orange-600/50 to-black/40 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.25, 0.1],
                x: [0, -25, 0],
                y: [0, 20, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div 
              className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-r from-red-600/30 to-black/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.05, 0.2, 0.05],
                rotate: [0, 360],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={ctaRef}
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Ultra-Premium Status Badge */}
            <motion.div
              className="flex justify-center mb-16"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Multi-layer glow system */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/30 to-red-500/30 blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-black/20 to-black/10 blur-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                
                {/* Main badge container */}
                <div className="relative inline-flex items-center gap-4 px-12 py-6 rounded-full bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-md border-2 border-black/40 shadow-2xl">
                  {/* SEO readiness indicator system */}
                  <div className="relative flex items-center gap-3">
                    <div className="relative">
                      <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
                      <motion.div
                        className="absolute inset-0 w-5 h-5 bg-orange-500 rounded-full"
                        animate={{
                          scale: [1, 2.5, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 w-5 h-5 bg-orange-500 rounded-full"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
                      />
                    </div>
                    <motion.div
                      className="w-2 h-8 bg-gradient-to-t from-orange-500 to-red-500 rounded-full"
                      animate={{
                        scaleY: [1, 1.4, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Enhanced SEO readiness text */}
                  <motion.span 
                    className="text-lg text-black font-black tracking-widest uppercase"
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(0,0,0,0.3)',
                        '0 0 30px rgba(0,0,0,0.5)',
                        '0 0 20px rgba(0,0,0,0.3)'
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ГОТОВИ ЗА ДОМИНАЦИЯ
                  </motion.span>

                  {/* SEO level indicators */}
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                        animate={{
                          scale: [0.6, 1.4, 0.6],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Premium corner accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-orange-500 rounded-tl-xl"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-red-500 rounded-tr-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-red-500 rounded-bl-xl"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-orange-500 rounded-br-xl"></div>
              </motion.div>
            </motion.div>

            {/* Premium Main Content Card */}
            <div className="relative">
              {/* Outer SEO dominance glow */}
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-black/25 via-orange-500/15 to-black/25 blur-2xl"
                animate={{
                  opacity: [0.5, 0.9, 0.5],
                  scale: [1, 1.03, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Main CTA Card */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-black/20 via-black/10 to-black/15 border-2 border-black/30 backdrop-blur-lg p-12 md:p-20 shadow-2xl">
                {/* Premium pattern system */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 opacity-8" style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(0, 0, 0, 0.15) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(0, 0, 0, 0.15) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.05) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.05) 75%)
                    `,
                    backgroundSize: '80px 80px, 80px 80px, 80px 80px, 80px 80px',
                    backgroundPosition: '0 0, 0 40px, 40px -40px, -40px 0px'
                  }}></div>

                  {/* SEO optimization elements */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`seo-element-${i}`}
                      className="absolute opacity-20"
                      style={{
                        left: `${5 + i * 12}%`,
                        top: `${15 + (i % 4) * 25}%`,
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [0.7, 1.3, 0.7],
                        opacity: [0.1, 0.4, 0.1],
                      }}
                      transition={{
                        duration: 10 + i * 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 1,
                      }}
                    >
                      <div className="w-10 h-10 border-2 border-black/40 transform rotate-45"></div>
                    </motion.div>
                  ))}
                </div>

                <div className="relative z-10 text-center">
                  {/* Enhanced main headline */}
                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Готови ли сте да спрете да{" "}
                    <motion.span
                      className="relative inline-block"
                      initial={{ scale: 0.9 }}
                      animate={ctaInView ? { scale: 1 } : {}}
                      transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Multi-layer SEO emphasis */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <span className="relative z-10 px-4 py-2 bg-gradient-to-r from-black/20 to-black/10 rounded-2xl border-2 border-black/30">
                        импровизирате
                      </span>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-3 bg-black/20 rounded-b-xl"
                        initial={{ scaleX: 0 }}
                        animate={ctaInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      />
                    </motion.span>
                    ?
                  </motion.h2>
                  
                  {/* Enhanced description */}
                  <motion.p 
                    className="text-xl mb-12 leading-relaxed max-w-4xl mx-auto font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Безплатната ни диагностика ще ви покаже точно какво се случва с вашето SEO и как да стигнете до първа страница. Процесът отнема 5 минути, анализът - 48 часа. Приемаме само 3 нови партньора за следващото тримесечие.
                  </motion.p>

                  {/* Premium CTA Button */}
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      {/* Button glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/40 to-black/20 blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      <Button
                        size="lg"
                        className="relative bg-gradient-to-r from-black to-gray-800 text-[#ECB629] hover:from-black/90 hover:to-gray-800/90 font-bold text-2xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-black/30 transition-all duration-300 border-2 border-black/20"
                        asChild
                      >
                        <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/10 via-transparent to-[#ECB629]/10 opacity-0 group-hover:opacity-100 rounded-2xl"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
                          />
                          <span className="relative z-10 flex items-center gap-4">
                            <Search className="w-8 h-8" />
                            Започнете безплатната диагностика
                            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                          </span>
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
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