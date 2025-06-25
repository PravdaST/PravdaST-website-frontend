import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Users, Target, Zap, Network, BarChart, Settings, Repeat, TrendingUp, Clock, CheckCircle, Star, Award, Shield, Layers, Database, Server, Code, Magnet, Eye, Brain, Rocket, Crown, Diamond, Gem, HeartHandshake, Infinity } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";

export default function Clientomat() {
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const processRef = useRef(null);
  const transformationRef = useRef(null);
  const investmentRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const visionInView = useInView(visionRef, { once: true });
  const processInView = useInView(processRef, { once: true });
  const transformationInView = useInView(transformationRef, { once: true });
  const investmentInView = useInView(investmentRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });

  const systemStages = [
    {
      stage: "ANALYZE",
      icon: Eye,
      title: "Клиентски профилинг",
      description: "Анализираме поведението на вашите клиенти и идентифицираме възможностите за повторни продажби.",
      metrics: "360° клиентска карта",
      color: "from-blue-500 to-cyan-400"
    },
    {
      stage: "AUTOMATE", 
      icon: Settings,
      title: "Автоматизиране на процеси",
      description: "Създаваме автоматизирани системи за последващи продажби и клиентско задържане.",
      metrics: "24/7 работа",
      color: "from-green-500 to-emerald-400"
    },
    {
      stage: "ACTIVATE",
      icon: Rocket,
      title: "Кампании за задържане", 
      description: "Стартираме таргетирани кампании, които превръщат еднократни клиенти в постоянни купувачи.",
      metrics: "Персонализирани предложения",
      color: "from-orange-500 to-red-400"
    },
    {
      stage: "ACCELERATE",
      icon: TrendingUp,
      title: "Оптимизация на стойността",
      description: "Непрекъснато увеличаваме средната стойност на клиент чрез стратегически подходи.",
      metrics: "CLV растеж",
      color: "from-purple-500 to-pink-400"
    }
  ];

  const transformationResults = [
    {
      icon: Users,
      title: "Клиентско задържане",
      before: "Еднократни покупки и изгубени клиенти",
      after: "Лоялни клиенти с повторни покупки",
      impact: "85% increase in customer retention"
    },
    {
      icon: BarChart,
      title: "Стойност на клиент", 
      before: "Ниска средна стойност на поръчка",
      after: "Увеличена CLV и по-големи покупки",
      impact: "220% growth in customer lifetime value"
    },
    {
      icon: Zap,
      title: "Автоматизация",
      before: "Ръчно управление на клиентски отношения",
      after: "Автоматизирани системи и процеси",
      impact: "90% reduction in manual work"
    },
    {
      icon: Target,
      title: "Продажбена ефективност",
      before: "Случайни и непредсказуеми продажби",
      after: "Системни и предсказуеми резултати",
      impact: "300% improvement in sales predictability"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData.clientomat} pageSlug="services/clientomat" />
      <Navigation />
      
      {/* Revolutionary Hero Section */}
      <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Next-Gen Client Network Background */}
        <div className="absolute inset-0">
          {/* Client Network Grid */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.4) 2px, transparent 2px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.4) 2px, transparent 2px),
                radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.2) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.2) 2px, transparent 2px)
              `,
              backgroundSize: '120px 120px, 120px 120px, 60px 60px, 80px 80px'
            }}></div>
          </div>

          {/* Client Relationship Streams */}
          <div className="absolute inset-0 opacity-35">
            {/* Loyalty Flow Lines */}
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={`loyalty-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${4 + i * 5.5}%`,
                  top: `${8 + (i % 6) * 15}%`,
                  width: '4px',
                  height: '70%',
                  background: `linear-gradient(to bottom, 
                    rgba(34, 197, 94, ${0.3 + (i % 3) * 0.2}), 
                    rgba(16, 185, 129, ${0.2 + (i % 3) * 0.1}), 
                    transparent)`
                }}
                animate={{
                  scaleY: [0.2, 1.8, 0.2],
                  opacity: [0.1, 0.9, 0.1],
                  background: [
                    'linear-gradient(to bottom, rgba(34, 197, 94, 0.5), rgba(16, 185, 129, 0.3), transparent)',
                    'linear-gradient(to bottom, rgba(16, 185, 129, 0.5), rgba(34, 197, 94, 0.3), transparent)',
                    'linear-gradient(to bottom, rgba(34, 197, 94, 0.5), rgba(16, 185, 129, 0.3), transparent)'
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
            
            {/* Client Connection Nodes */}
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={`client-node-${i}`}
                className="absolute rounded-full border-2"
                style={{
                  left: `${6 + i * 4}%`,
                  top: `${12 + (i % 7) * 12}%`,
                  width: `${10 + (i % 5) * 4}px`,
                  height: `${10 + (i % 5) * 4}px`,
                  borderColor: i % 2 === 0 ? 'rgba(34, 197, 94, 0.6)' : 'rgba(16, 185, 129, 0.6)'
                }}
                animate={{
                  scale: [0.4, 2.2, 0.4],
                  opacity: [0.2, 1, 0.2],
                  borderWidth: [1, 4, 1],
                  rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                  borderColor: [
                    'rgba(34, 197, 94, 0.6)',
                    'rgba(16, 185, 129, 0.9)',
                    'rgba(34, 197, 94, 0.6)'
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

            {/* Retention Amplifiers */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`retention-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${12 + i * 10}%`,
                  top: `${18 + (i % 3) * 25}%`,
                  width: `${16 + (i % 3) * 8}px`,
                  height: `${16 + (i % 3) * 8}px`,
                  background: `radial-gradient(circle, 
                    rgba(34, 197, 94, 0.${4 + i % 3}), 
                    rgba(16, 185, 129, 0.${2 + i % 3}), 
                    transparent)`
                }}
                animate={{
                  scale: [1, 3.5, 1],
                  opacity: [0.3, 1, 0.3],
                  boxShadow: [
                    '0 0 20px rgba(34, 197, 94, 0.2)',
                    '0 0 80px rgba(34, 197, 94, 0.8)',
                    '0 0 20px rgba(34, 197, 94, 0.2)'
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
              className="absolute top-1/5 left-1/5 w-[600px] h-[600px] bg-gradient-to-r from-green-500/60 via-emerald-500/50 to-teal-500/40 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.08, 0.35, 0.08],
                x: [0, 60, 0],
                y: [0, -40, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/5 right-1/5 w-[500px] h-[500px] bg-gradient-to-l from-teal-500/70 via-green-500/50 to-emerald-500/40 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.08, 0.3, 0.08],
                x: [0, -50, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />
            <motion.div 
              className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/50 to-emerald-500/40 rounded-full blur-3xl"
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
                {/* Client system glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/40 via-emerald-500/40 to-teal-500/40 blur-2xl"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 1, 0.4],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/30 via-green-500/30 to-teal-500/30 blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                    rotate: [360, 180, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
                
                {/* Main badge container */}
                <div className="relative inline-flex items-center gap-6 px-16 py-8 rounded-full bg-gradient-to-r from-green-500/25 via-emerald-500/25 to-teal-500/25 backdrop-blur-lg border-2 border-green-500/50 shadow-2xl">
                  {/* Client retention indicator */}
                  <div className="relative flex items-center gap-4">
                    <div className="relative">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                      <motion.div
                        className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                        animate={{
                          scale: [1, 3, 1],
                          opacity: [0.9, 0, 0.9],
                        }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        animate={{
                          scale: [1, 2.5, 1],
                          opacity: [0.7, 0, 0.7],
                        }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.9 }}
                      />
                    </div>
                    <motion.div
                      className="w-3 h-10 bg-gradient-to-t from-green-500 via-emerald-500 to-teal-500 rounded-full"
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
                        '0 0 30px rgba(34, 197, 94, 0.4)',
                        '0 0 50px rgba(34, 197, 94, 0.8)',
                        '0 0 30px rgba(34, 197, 94, 0.4)'
                      ],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    CLIENTOMAT™ СИСТЕМА
                  </motion.span>

                  {/* Retention level indicators */}
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-4 h-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full"
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
                <div className="absolute -top-3 -left-3 w-6 h-6 border-l-3 border-t-3 border-green-500 rounded-tl-2xl"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 border-r-3 border-t-3 border-emerald-500 rounded-tr-2xl"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-3 border-b-3 border-emerald-500 rounded-bl-2xl"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-3 border-b-3 border-teal-500 rounded-br-2xl"></div>
              </motion.div>
            </motion.div>

            <div className="text-center">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-10 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Спрете да губите клиенти.{" "}
                <motion.span
                  className="relative inline-block"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={heroInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.7, type: "spring", bounce: 0.4 }}
                  whileHover={{ scale: 1.08 }}
                >
                  {/* Multi-dimensional emphasis */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-500/40 via-emerald-500/40 to-teal-500/40 rounded-[2rem] blur-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.9, 0.4],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 px-8 py-4 bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-teal-500/30 rounded-[2rem] border-3 border-green-500/40 backdrop-blur-lg">
                    Превърнете ги в приходи
                  </span>
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-gray-200 mb-16 max-w-5xl mx-auto leading-relaxed font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Превръщаме еднократните купувачи в редовни приходи. Система за максимизиране стойността от всеки клиент.
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
                  {/* Client system button glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/50 via-emerald-500/50 to-teal-500/50 blur-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl border-2 border-green-400/50 backdrop-blur-sm"
                    asChild
                  >
                    <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-white/15 opacity-0 group-hover:opacity-100 rounded-2xl"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop' }}
                      />
                      <span className="relative z-10 flex items-center gap-4">
                        <Users className="w-6 h-6" />
                        Заявете диагностика
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

      {/* Vision Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Client Problem-Solution Background */}
        <div className="absolute inset-0 opacity-20">
          {/* Strategic Vision Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 70% 70%, rgba(34, 197, 94, 0.3) 2px, transparent 2px),
              linear-gradient(45deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 120px 120px, 40px 40px, 40px 40px'
          }}></div>

          {/* Dynamic Problem/Solution Elements */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`vision-${i}`}
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
                  'radial-gradient(circle, rgba(34, 197, 94, 0.6), transparent)',
                  'radial-gradient(circle, rgba(34, 197, 94, 0.8), transparent)',
                  'radial-gradient(circle, rgba(34, 197, 94, 0.6), transparent)'
                ]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
              className="rounded-full bg-gradient-to-r from-red-500/40 to-green-500/40"
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={visionRef}
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Vision Header */}
            <div className="text-center mb-20">
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-8 py-4 rounded-full bg-gradient-to-r from-slate-500/20 to-slate-400/20 border border-slate-500/30 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={visionInView ? { opacity: 1, scale: 1 } : {}}
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
                <span className="text-slate-300 font-semibold text-lg uppercase tracking-wider">Проблемът</span>
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={visionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Губите ли пари след{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  първата продажба
                </span>
                ?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={visionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Повечето компании инвестират в привличане на клиенти, но ги губят завинаги след първата покупка
              </motion.p>
            </div>

            {/* Problem Points */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: Users,
                  title: "Клиентите ви купуват веднъж",
                  description: "и повече не се връщат"
                },
                {
                  icon: Target,
                  title: "Нямате система",
                  description: "за последващи продажби"
                },
                {
                  icon: TrendingUp,
                  title: "Искате да увеличите",
                  description: "стойността от всеки клиент"
                }
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={visionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  className="relative"
                >
                  <Card className="relative overflow-hidden bg-gradient-to-br from-red-900/20 to-red-800/10 border-2 border-red-500/30 shadow-2xl rounded-3xl h-full">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `
                          linear-gradient(45deg, rgba(239, 68, 68, 0.2) 25%, transparent 25%),
                          linear-gradient(-45deg, rgba(239, 68, 68, 0.2) 25%, transparent 25%)
                        `,
                        backgroundSize: '30px 30px'
                      }}></div>
                    </div>

                    <CardContent className="p-8 relative z-10 text-center">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(239, 68, 68, 0.3)',
                            '0 0 40px rgba(239, 68, 68, 0.6)',
                            '0 0 20px rgba(239, 68, 68, 0.3)'
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <point.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                      <p className="text-gray-300">{point.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Solution Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={visionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-center"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-900/20 to-emerald-800/10 border-2 border-green-500/30 shadow-2xl p-12">
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.3) 2px, transparent 2px),
                      radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.2) 2px, transparent 2px)
                    `,
                    backgroundSize: '40px 40px, 60px 60px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mb-8 mx-auto"
                    animate={{
                      boxShadow: [
                        '0 0 30px rgba(34, 197, 94, 0.4)',
                        '0 0 60px rgba(34, 197, 94, 0.8)',
                        '0 0 30px rgba(34, 197, 94, 0.4)'
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-4xl font-bold text-white mb-6">
                    Clientomat™ ви дава{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                      контрол
                    </span>
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Вместо да губите клиенти, превръщате ги в постоянен източник на приходи
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* System Process Section */}
      <section className="py-32 bg-slate-800/30 relative overflow-hidden">
        {/* Advanced System Background */}
        <div className="absolute inset-0 opacity-25">
          {/* Process Flow Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(34, 197, 94, 0.2) 2px, transparent 2px),
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.3) 3px, transparent 3px)
            `,
            backgroundSize: '100px 100px, 25px 25px, 150px 150px'
          }}></div>

          {/* System Data Flow */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`system-flow-${i}`}
              className="absolute"
              style={{
                left: `${5 + i * 12}%`,
                top: `${30 + (i % 3) * 20}%`,
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, 
                  rgba(34, 197, 94, 0.${3 + i % 4}), 
                  rgba(16, 185, 129, 0.${2 + i % 3}), 
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
                className="inline-flex items-center gap-3 mb-8 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={processInView ? { opacity: 1, scale: 1 } : {}}
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
                <span className="text-green-300 font-semibold text-lg uppercase tracking-wider">Системата</span>
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Четири стъпки до{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                  лоялни клиенти
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Проверена методология за превръщане на еднократни купувачи в дългосрочни клиенти.
              </motion.p>
            </div>

            {/* System Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {systemStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  className="relative"
                >
                  {/* Stage glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stage.color} opacity-20 blur-xl`}
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
                  
                  <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-700/60 border-2 border-slate-600/40 hover:border-green-500/50 transition-all duration-500 group backdrop-blur-lg shadow-2xl rounded-3xl h-full">
                    {/* Stage pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `
                          radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.2) 2px, transparent 2px),
                          radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.15) 2px, transparent 2px)
                        `,
                        backgroundSize: '40px 40px, 60px 60px'
                      }}></div>
                    </div>

                    {/* Stage number badge */}
                    <div className="absolute top-6 right-6">
                      <motion.div 
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </motion.div>
                    </div>

                    <CardContent className="p-8 relative z-10 h-full flex flex-col">
                      {/* Stage indicator */}
                      <motion.div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${stage.color} mb-6 self-start`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-white font-bold text-sm uppercase tracking-wider">{stage.stage}</span>
                      </motion.div>

                      {/* Enhanced icon container */}
                      <motion.div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${stage.color} opacity-20 flex items-center justify-center mb-8 group-hover:opacity-30 transition-all duration-300`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <stage.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <div className="flex-grow">
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {stage.title}
                        </motion.h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {stage.description}
                        </p>
                      </div>

                      {/* Metrics badge */}
                      <motion.div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${stage.color} opacity-20 self-start`}
                        whileHover={{ opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      >
                        <BarChart className="w-4 h-4 text-white" />
                        <span className="text-white font-semibold text-sm">{stage.metrics}</span>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Bottom CTA */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 p-12 backdrop-blur-sm">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        45deg,
                        rgba(34, 197, 94, 0.2) 0px,
                        rgba(34, 197, 94, 0.2) 10px,
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
                        '0 0 20px rgba(34, 197, 94, 0.3)',
                        '0 0 30px rgba(34, 197, 94, 0.5)',
                        '0 0 20px rgba(34, 197, 94, 0.3)'
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Клиенти, които се <span className="text-green-400">връщат</span>
                  </motion.h3>
                  <p className="text-gray-300 text-xl mb-8">
                    Автоматизирана система, която поддържа връзката с клиентите и ги насърчава за повторни покупки
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/40 to-emerald-500/40 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <Button 
                      size="lg"
                      className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 font-bold text-xl px-10 py-6 rounded-2xl shadow-2xl"
                      asChild
                    >
                      <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 rounded-2xl"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                        />
                        <span className="relative z-10 flex items-center gap-3">
                          <Repeat className="w-6 h-6" />
                          Съобщения, които продават отново
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

      {/* Transformation Results Section */}
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
              key={`success-${i}`}
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
            ref={transformationRef}
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={transformationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Results Header */}
            <div className="text-center mb-20">
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={transformationInView ? { opacity: 1, scale: 1 } : {}}
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
                <span className="text-green-300 font-semibold text-lg uppercase tracking-wider">Резултатите</span>
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={transformationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Всеки клиент носи{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                  повече приходи
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={transformationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Реални резултати от компании, които избраха да максимизират стойността от своите клиенти.
              </motion.p>
            </div>

            {/* Transformation Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {transformationResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={transformationInView ? { opacity: 1, y: 0 } : {}}
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
                  
                  <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-700/60 border-2 border-slate-600/40 hover:border-green-500/50 transition-all duration-500 group backdrop-blur-lg shadow-2xl rounded-3xl">
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

                    {/* Success indicator */}
                    <div className="absolute top-6 right-6">
                      <motion.div
                        className="w-4 h-4 bg-green-500 rounded-full"
                        animate={{
                          boxShadow: [
                            '0 0 10px rgba(34, 197, 94, 0.4)',
                            '0 0 20px rgba(34, 197, 94, 0.8)',
                            '0 0 10px rgba(34, 197, 94, 0.4)'
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-green-500 rounded-full"
                          animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: index * 0.5 }}
                        />
                      </motion.div>
                    </div>

                    <CardContent className="p-10 relative z-10">
                      {/* Enhanced icon container */}
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-3xl flex items-center justify-center border-2 border-green-500/30 group-hover:border-green-500/50 transition-all duration-300 mb-8"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <result.icon className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-3xl font-bold text-white mb-8 group-hover:text-green-300 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {result.title}
                      </motion.h3>

                      {/* Before/After Comparison */}
                      <div className="space-y-6 mb-8">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <div className="text-red-400 font-semibold text-sm uppercase tracking-wide mb-1">Преди</div>
                            <p className="text-gray-300">{result.before}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <div className="text-green-400 font-semibold text-sm uppercase tracking-wide mb-1">След</div>
                            <p className="text-white font-medium">{result.after}</p>
                          </div>
                        </div>
                      </div>

                      {/* Impact metric */}
                      <motion.div
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-green-300 font-bold text-lg">{result.impact}</span>
                      </motion.div>
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
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={investmentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
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
                лоялността
              </span>
            </h2>

            <Card className="bg-slate-800/60 border-slate-600/30 p-12 backdrop-blur-sm mb-12 rounded-3xl">
              <div className="text-center">
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
                  1350 лв.
                </motion.div>
                <p className="text-2xl text-gray-300 mb-8">месечна инвестиция в клиентската лоялност</p>
                
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/30">
                    <Repeat className="w-8 h-8 text-yellow-500 mb-3" />
                    <h4 className="text-white font-bold mb-2">Автоматизирани процеси</h4>
                    <p className="text-gray-400 text-sm">Системата работи 24/7 за задържане на клиентите</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/30">
                    <Target className="w-8 h-8 text-yellow-500 mb-3" />
                    <h4 className="text-white font-bold mb-2">Персонализирани кампании</h4>
                    <p className="text-gray-400 text-sm">Таргетирани съобщения за всеки клиентски сегмент</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/30">
                    <TrendingUp className="w-8 h-8 text-yellow-500 mb-3" />
                    <h4 className="text-white font-bold mb-2">Измерими резултати</h4>
                    <p className="text-gray-400 text-sm">Детайлни отчети за CLV и retention rate</p>
                  </div>
                </div>
              </div>
            </Card>

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
                    <Users className="w-6 h-6" />
                    Започнете системата
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </Button>
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

          {/* Dynamic Client Retention Network */}
          <div className="absolute inset-0 opacity-25">
            {/* Retention Stream Lines */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`retention-stream-${i}`}
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
            
            {/* Client Loyalty Nodes */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`loyalty-node-${i}`}
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

            {/* Client Relationship Cores */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`relationship-core-${i}`}
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
                  {/* Client retention indicator system */}
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

                  {/* Enhanced client retention text */}
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
                    ГОТОВИ ЗА АВТОПИЛОТ
                  </motion.span>

                  {/* Automation level indicators */}
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
              {/* Outer client retention glow */}
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

                  {/* Client automation elements */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`automation-element-${i}`}
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
                    Готови ли сте да включите бизнеса си на{" "}
                    <motion.span
                      className="relative inline-block"
                      initial={{ scale: 0.9 }}
                      animate={ctaInView ? { scale: 1 } : {}}
                      transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Multi-layer client emphasis */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <span className="relative z-10 px-4 py-2 bg-gradient-to-r from-black/20 to-black/10 rounded-2xl border-2 border-black/30">
                        автопилот
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
                    Нашата експертна диагностика ще покаже точно как да превърнете единични продажби в постоянен поток от лоялни клиенти.
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
                            <Settings className="w-8 h-8" />
                            Заявете експертна диагностика
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