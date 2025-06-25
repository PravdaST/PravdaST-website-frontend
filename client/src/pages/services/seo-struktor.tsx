import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Target, TrendingUp, BarChart3, CheckCircle, Clock, ArrowLeft, Zap, Users, Settings } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";

// Unique SEO Blueprint Background
const SEOStruktorBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {/* SEO Blueprint Grid */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* SEO Network Pattern */}
          <pattern id="seo-blueprint" width="140" height="140" patternUnits="userSpaceOnUse">
            {/* Central Search Hub */}
            <circle cx="70" cy="70" r="3" fill="#ECB629" opacity="0.8"/>
            
            {/* SEO Elements (8 points around hub) */}
            <circle cx="70" cy="20" r="1.5" fill="#ECB629" opacity="0.5"/>
            <circle cx="110" cy="35" r="1.5" fill="#ECB629" opacity="0.5"/>
            <circle cx="120" cy="70" r="1.5" fill="#ECB629" opacity="0.5"/>
            <circle cx="110" cy="105" r="1.5" fill="#ECB629" opacity="0.5"/>
            <circle cx="70" cy="120" r="1.5" fill="#ECB629" opacity="0.5"/>
            <circle cx="30" cy="105" r="1.5" fill="#ECB629" opacity="0.5"/>
            <circle cx="20" cy="70" r="1.5" fill="#ECB629" opacity="0.5"/>
            <circle cx="30" cy="35" r="1.5" fill="#ECB629" opacity="0.5"/>
            
            {/* Hub Connection Lines */}
            <path d="M 70 70 L 70 20" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 70 70 L 110 35" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 70 70 L 120 70" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 70 70 L 110 105" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 70 70 L 70 120" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 70 70 L 30 105" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 70 70 L 20 70" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 70 70 L 30 35" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            
            {/* SEO Ranking Flow */}
            <path d="M 70 20 Q 95 25 110 35" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 110 35 Q 125 50 120 70" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 120 70 Q 125 90 110 105" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 110 105 Q 95 115 70 120" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 70 120 Q 45 115 30 105" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 30 105 Q 15 90 20 70" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 20 70 Q 15 50 30 35" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 30 35 Q 45 25 70 20" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
          </pattern>
          
          {/* SEO Signal Flow */}
          <linearGradient id="seoFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ECB629" stopOpacity="0"/>
            <stop offset="50%" stopColor="#ECB629" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#ECB629" stopOpacity="0"/>
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#seo-blueprint)" />
      </svg>

      {/* Floating SEO Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + (i * 14)}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {/* SEO Technique Icons */}
            <div className="w-7 h-7 rounded-lg border border-[#ECB629]/30 bg-[#ECB629]/5 flex items-center justify-center backdrop-blur-sm">
              {i % 3 === 0 && <Search className="w-3 h-3 text-[#ECB629]/60" />}
              {i % 3 === 1 && <Target className="w-3 h-3 text-[#ECB629]/60" />}
              {i % 3 === 2 && <BarChart3 className="w-3 h-3 text-[#ECB629]/60" />}
            </div>
          </motion.div>
        ))}
      </div>

      {/* SEO Ranking Waves */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 400 + 100} 200 Q ${i * 400 + 250} 150 ${i * 400 + 400} 200 Q ${i * 400 + 550} 250 ${i * 400 + 700} 200`}
            fill="none"
            stroke="url(#seoFlow)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default function SEOStruktorPage() {
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

  const [transformationState, setTransformationState] = useState<'chaos' | 'system'>('chaos');

  useEffect(() => {
    const interval = setInterval(() => {
      setTransformationState(prev => prev === 'chaos' ? 'system' : 'chaos');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData["services/seo-struktor"]} pageSlug="services/seo-struktor" />
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden">
        <SEOStruktorBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 bg-[#ECB629] rounded-full"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(236, 182, 40, 0.7)",
                        "0 0 0 4px rgba(236, 182, 40, 0)",
                        "0 0 0 0 rgba(236, 182, 40, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-gray-300 font-medium">
                    SEO Struktor™ <span className="text-[#ECB629] font-bold">система</span>
                  </span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Спрете да <span className="text-red-400">импровизирате</span> <br />
                с <span className="text-[#ECB629]">SEO</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                SEO Struktor™ е инженерната система, която превръща SEO хаоса в предсказуеми първи позиции в Google.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="group relative bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-[#ECB629]/25 transition-all duration-300 overflow-hidden"
                  asChild
                >
                  <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">Започнете безплатната диагностика</span>
                    <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#ECB629]/10 border border-[#ECB629]/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={philosophyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-2 h-2 bg-[#ECB629] rounded-full animate-pulse" />
                <span className="text-[#ECB629] font-semibold text-sm">ИНЖЕНЕРЕН</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                От хаос към система
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Повечето компании правят SEO като хобисти. Ние го правим като инженери.
              </motion.p>
            </div>

            {/* Transformation Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <Card className="bg-slate-800/50 border-slate-600/30 p-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-8"
                    animate={transformationState === 'chaos' ? { opacity: 1 } : { opacity: 0.6 }}
                    transition={{ duration: 1 }}
                  >
                    {/* Chaos State */}
                    <div className="flex-1 text-center">
                      <motion.div
                        className={`w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-1000 ${
                          transformationState === 'chaos' 
                            ? 'bg-red-600/20 border-2 border-red-600/50' 
                            : 'bg-slate-700/20 border-2 border-slate-600/30'
                        }`}
                      >
                        <Zap className={`w-10 h-10 transition-colors duration-1000 ${
                          transformationState === 'chaos' ? 'text-red-400' : 'text-slate-500'
                        }`} />
                      </motion.div>
                      <motion.div
                        className={`inline-flex items-center px-4 py-2 rounded-full border transition-all duration-1000 ${
                          transformationState === 'chaos'
                            ? 'bg-red-600/10 border-red-600/30 text-red-400'
                            : 'bg-slate-700/10 border-slate-600/30 text-slate-400'
                        }`}
                      >
                        БЕЗ СИСТЕМА
                      </motion.div>
                      <p className="text-gray-400 text-sm mt-4">
                        Случайни keywords, непоследователни действия, неизмерими резултати
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      className="flex items-center justify-center"
                      animate={{
                        x: transformationState === 'system' ? [0, 10, 0] : [0, -10, 0],
                      }}
                      transition={{ duration: 0.8 }}
                    >
                      {transformationState === 'system' ? (
                        <ArrowRight className={`w-8 h-8 transition-colors duration-1000 text-[#ECB629]`} />
                      ) : (
                        <ArrowLeft className={`w-8 h-8 transition-colors duration-1000 text-red-400`} />
                      )}
                    </motion.div>

                    {/* System State */}
                    <div className="flex-1 text-center">
                      <motion.div
                        className={`w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-1000 ${
                          transformationState === 'system' 
                            ? 'bg-[#ECB629]/20 border-2 border-[#ECB629]/50' 
                            : 'bg-slate-700/20 border-2 border-slate-600/30'
                        }`}
                      >
                        <Settings className={`w-10 h-10 transition-colors duration-1000 ${
                          transformationState === 'system' ? 'text-[#ECB629]' : 'text-slate-500'
                        }`} />
                      </motion.div>
                      <motion.div
                        className={`inline-flex items-center px-4 py-2 rounded-full border transition-all duration-1000 ${
                          transformationState === 'system'
                            ? 'bg-[#ECB629]/10 border-[#ECB629]/30 text-[#ECB629]'
                            : 'bg-slate-700/10 border-slate-600/30 text-slate-400'
                        }`}
                      >
                        СЪС СИСТЕМА
                      </motion.div>
                      <p className="text-gray-400 text-sm mt-4">
                        Точни данни, инженерен подход, предсказуеми резултати
                      </p>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            {/* Problems Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Search,
                  title: "Импровизация с keywords",
                  description: "Избирате думи \"на око\" без данни за търсенията",
                  status: "ПРОБЛЕМ",
                },
                {
                  icon: Target,
                  title: "Липса на стратегия",
                  description: "Правите SEO дейности без ясен план и цели",
                  status: "ПРОБЛЕМ",
                },
                {
                  icon: BarChart3,
                  title: "Неизмерими резултати",
                  description: "Не знаете дали SEO усилията ви дават резултат",
                  status: "ПРОБЛЕМ",
                }
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                >
                  <Card className="relative bg-slate-800/50 border-red-600/30 h-full group hover:border-red-500/50 transition-all duration-300">
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive" className="bg-red-600/20 text-red-400 border-red-600/30">
                        {problem.status}
                      </Badge>
                    </div>
                    <div className="p-8">
                      <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <problem.icon className="w-8 h-8 text-red-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{problem.title}</h3>
                      <p className="text-gray-300">{problem.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <Card className="relative bg-slate-800/60 border-[#ECB629]/20 max-w-4xl mx-auto overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#ECB629]/20 text-[#ECB629] border-[#ECB629]/30">
                    РЕШЕНИЕ
                  </Badge>
                </div>
                <div className="p-12">
                  <div className="w-20 h-20 bg-[#ECB629]/20 rounded-full flex items-center justify-center mb-8 mx-auto">
                    <CheckCircle className="w-10 h-10 text-[#ECB629]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    SEO Struktor™ ви дава система
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Инженерен подход към SEO, който превръща всяка дейност в измерим резултат
                  </p>
                  
                  <div className="text-center">
                    <motion.div
                      className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-700/30 border border-slate-600/30"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={philosophyInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <Settings className="w-4 h-4 text-[#ECB629]" />
                      <span className="text-[#ECB629] font-semibold text-sm">ОТ ОСНОВИТЕ ДО ПОКРИВА</span>
                    </motion.div>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      Изграждаме цялостна SEO архитектура, която работи като часовников механизъм - всеки компонент има своята роля в постигането на първи позиции.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-slate-800/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#ECB629]/10 border border-[#ECB629]/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={processInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Settings className="w-4 h-4 text-[#ECB629]" />
                <span className="text-[#ECB629] font-semibold text-sm">4-ЕТАПНА СИСТЕМА</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Инженерният процес на SEO Struktor™
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Четири точни етапа, които превръщат вашия сайт в машина за първи позиции
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  phase: "01",
                  title: "Техническа диагностика",
                  duration: "1-2 седмици",
                  description: "Пълен технически audit на сайта - от Core Web Vitals до архитектурата на информацията. Идентифицираме всички технически бариери пред ранжирането.",
                  deliverables: ["120+ технически проверки", "Page Speed оптимизация план", "Mobile-first анализ", "Структурирани данни audit"]
                },
                {
                  phase: "02", 
                  title: "Keyword Architecture",
                  duration: "2-3 седмици",
                  description: "Изграждаме цялостната keyword стратегия базирана на реални данни за търсенията, конкурентния анализ и бизнес целите.",
                  deliverables: ["Keyword mapping", "Search intent анализ", "Competitor gap analysis", "Content strategy roadmap"]
                },
                {
                  phase: "03",
                  title: "Content Engineering",
                  duration: "4-6 седмици", 
                  description: "Създаваме SEO-оптимизирано съдържание, което отговаря точно на потребителските заявки и удовлетворява Google алгоритмите.",
                  deliverables: ["Technical content creation", "On-page optimization", "Internal linking strategy", "E-A-T signals implementation"]
                },
                {
                  phase: "04",
                  title: "Authority Building",
                  duration: "Постоянно",
                  description: "Изграждаме авторитета на сайта чрез качествени backlink-ове, местно SEO (ако е приложимо) и непрекъсната оптимизация.",
                  deliverables: ["Link building campaigns", "Local SEO optimization", "Performance monitoring", "Algorithm updates adaptation"]
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                >
                  <Card className="relative bg-slate-800/50 border-slate-600/30 h-full group hover:border-[#ECB629]/50 transition-all duration-300">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#ECB629] rounded-full flex items-center justify-center font-bold text-black text-lg">
                      {step.phase}
                    </div>
                    <div className="p-8 pt-12">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <Badge variant="outline" className="border-[#ECB629]/30 text-[#ECB629]">
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-gray-300 mb-6">{step.description}</p>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Ключови deliverable-и:</h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={resultsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold text-sm">КРАЙНИЯТ РЕЗУЛТАТ</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Повече от просто позиции
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                SEO Struktor™ не само ви изкарва на първа страница - превръща органичния трафик в реален бизнес растеж
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  metric: "300%+",
                  label: "Увеличение на органичния трафик",
                  description: "В първите 6 месеца от стартиране на системата",
                  timeline: "6-месечен период",
                  progress: 85
                },
                {
                  metric: "120%",
                  label: "Растеж на конверсиите",
                  description: "Качественият трафик се превръща в клиенти",
                  timeline: "9-месечен период", 
                  progress: 70
                },
                {
                  metric: "50+",
                  label: "Първи позиции в Google",
                  description: "За ключови търсения във вашата ниша",
                  timeline: "12-месечен период",
                  progress: 95
                }
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                >
                  <Card className="bg-slate-800/50 border-slate-600/30 h-full text-center group hover:border-[#ECB629]/50 transition-all duration-300 relative overflow-hidden">
                    <div className="p-8">
                      <motion.div 
                        className="text-5xl font-bold text-[#ECB629] mb-4"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={resultsInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                      >
                        {result.metric}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-4">{result.label}</h3>
                      <p className="text-gray-300 mb-6">{result.description}</p>
                      
                      {/* Progress Indicator */}
                      <div className="mb-4">
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <motion.div 
                            className="bg-[#ECB629] h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={resultsInView ? { width: `${result.progress}%` } : {}}
                            transition={{ duration: 1.5, delay: 0.8 + index * 0.3 }}
                          />
                        </div>
                        <div className="text-xs text-gray-400 mt-2">{result.progress}% постижение</div>
                      </div>
                      
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
                        {result.timeline}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={resultsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <Card className="bg-slate-800/60 border-[#ECB629]/20 max-w-4xl mx-auto">
                <div className="p-12">
                  <div className="w-20 h-20 bg-[#ECB629]/20 rounded-full flex items-center justify-center mb-8 mx-auto">
                    <Users className="w-10 h-10 text-[#ECB629]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Вашите клиенти ви намират сами
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Вместо да изразходвате бюджет за реклами, хората ви търсят директно в Google когато имат нужда от вашите услуги
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Target className="w-6 h-6 text-[#ECB629] mr-3" />
                        Sustainable Growth
                      </h4>
                      <p className="text-gray-300">
                        SEO работи 24/7 и носи дългосрочни резултати, за разлика от платените реклами.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <BarChart3 className="w-6 h-6 text-[#ECB629] mr-3" />
                        Higher Conversion Rates
                      </h4>
                      <p className="text-gray-300">
                        Хората, които ви намират чрез търсене, са с 3-5 пъти по-склонни да станат клиенти.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Section */}
      <section ref={investmentRef} className="py-20 bg-slate-800/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={investmentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={investmentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Инвестиция в дългосрочния успех
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={investmentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                SEO Struktor™ е инвестиция, която се изплаща многократно чрез устойчив органичен растеж
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={investmentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="bg-slate-800/60 border-[#ECB629]/20 p-12 text-center">
                  <div className="mb-8">
                    <div className="text-6xl font-bold text-[#ECB629] mb-4">1980 лв.</div>
                    <div className="text-xl text-gray-300">месечно</div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 text-left mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Персонализирано решение:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Индивидуален SEO план
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Нишова стратегия
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Конкурентен анализ
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Местно SEO (при нужда)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">В рамките на бюджета:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Без скрити такси
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Прозрачно ценообразуване
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          ROI-базирани резултати
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Flexible договорни условия
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Техническа спецификация:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Core Web Vitals оптимизация
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Technical SEO audit
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Schema markup
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Performance мониторинг
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-[#ECB629] text-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Готови ли сте да спрете <br />
              да <span className="text-black">импровизирате?</span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Безплатната ни диагностика ще ви покаже точно какво се случва с вашето SEO и как да стигнете до първа страница.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="group relative bg-black text-[#ECB629] hover:bg-black/90 font-bold text-xl px-6 py-4 md:px-12 md:py-6 rounded-lg shadow-lg hover:shadow-black/30 transition-all duration-300 overflow-hidden"
                asChild
              >
                <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Започнете безплатната диагностика</span>
                  <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ECB629]/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}