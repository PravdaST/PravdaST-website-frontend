import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Network, Users, Clock, Handshake, Magnet, Microscope, FileText, Settings, CheckCircle, Target, TrendingUp } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";

// Unique Client Network Background
const ClientomatBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {/* Client Ecosystem Network */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Central Hub Pattern */}
          <pattern id="client-ecosystem" width="150" height="150" patternUnits="userSpaceOnUse">
            {/* Central Client Hub */}
            <circle cx="75" cy="75" r="4" fill="#ECB629" opacity="0.8"/>
            
            {/* Client Journey Stages (6 points around hub) */}
            <circle cx="75" cy="25" r="2" fill="#ECB629" opacity="0.5"/>
            <circle cx="115" cy="50" r="2" fill="#ECB629" opacity="0.5"/>
            <circle cx="115" cy="100" r="2" fill="#ECB629" opacity="0.5"/>
            <circle cx="75" cy="125" r="2" fill="#ECB629" opacity="0.5"/>
            <circle cx="35" cy="100" r="2" fill="#ECB629" opacity="0.5"/>
            <circle cx="35" cy="50" r="2" fill="#ECB629" opacity="0.5"/>
            
            {/* Connection Lines from Central Hub */}
            <path d="M 75 75 L 75 25" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 75 75 L 115 50" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 75 75 L 115 100" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 75 75 L 75 125" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 75 75 L 35 100" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <path d="M 75 75 L 35 50" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            
            {/* Client Journey Flow (connecting outer points) */}
            <path d="M 75 25 Q 95 30 115 50" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 115 50 Q 120 75 115 100" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 115 100 Q 95 120 75 125" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 75 125 Q 55 120 35 100" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 35 100 Q 30 75 35 50" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
            <path d="M 35 50 Q 55 30 75 25" stroke="#ECB629" strokeWidth="0.3" opacity="0.2" fill="none"/>
          </pattern>
          
          {/* Client Data Flow Gradient */}
          <linearGradient id="clientFlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ECB629" stopOpacity="0"/>
            <stop offset="30%" stopColor="#ECB629" stopOpacity="0.4"/>
            <stop offset="70%" stopColor="#ECB629" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#ECB629" stopOpacity="0"/>
          </linearGradient>
          
          {/* Pulsing Hub Effect */}
          <radialGradient id="hubPulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ECB629" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#ECB629" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#ECB629" stopOpacity="0"/>
          </radialGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#client-ecosystem)" />
      </svg>

      {/* Floating Client Touchpoints */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            {/* Client Touchpoint Icons */}
            <div className="w-8 h-8 rounded-lg border border-[#ECB629]/30 bg-[#ECB629]/5 flex items-center justify-center backdrop-blur-sm">
              {i % 4 === 0 && <Users className="w-3 h-3 text-[#ECB629]/60" />}
              {i % 4 === 1 && <Network className="w-3 h-3 text-[#ECB629]/60" />}
              {i % 4 === 2 && <Target className="w-3 h-3 text-[#ECB629]/60" />}
              {i % 4 === 3 && <Handshake className="w-3 h-3 text-[#ECB629]/60" />}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Client Journey Flow Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 300 + 50} 150 Q ${i * 300 + 200} 250 ${i * 300 + 350} 150 Q ${i * 300 + 500} 50 ${i * 300 + 650} 150`}
            fill="none"
            stroke="url(#clientFlow)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              delay: i * 1.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default function ClientomatPage() {
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

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData["services/clientomat"]} pageSlug="services/clientomat" />
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden">
        <ClientomatBackground />
        
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
                    Clientomat™ <span className="text-[#ECB629] font-bold">система</span>
                  </span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Превърнете всеки контакт <br />
                в <span className="text-[#ECB629]">лоялен клиент</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Clientomat™ е системата, която автоматизира цялата клиентска екосистема - от първия контакт до доживотна лоялност.
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
                    <span className="relative z-10">Заявете експертна диагностика</span>
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
                <span className="text-[#ECB629] font-semibold text-sm">СИСТЕМНА</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Защо губите клиенти?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Повечето компании фокусират само върху привличането на нови клиенти. Истинският растеж идва от системното управление на целия клиентски цикъл.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Network,
                  title: "Разпокъсана комуникация",
                  description: "Клиентите получават непоследователни съобщения",
                  status: "ПРОБЛЕМ",
                  color: "red"
                },
                {
                  icon: Clock,
                  title: "Забавени отговори",
                  description: "Дълги времена за реакция на запитвания",
                  status: "ПРОБЛЕМ", 
                  color: "red"
                },
                {
                  icon: Target,
                  title: "Липса на проследяване",
                  description: "Не знаете къде точно губите клиенти",
                  status: "ПРОБЛЕМ",
                  color: "red"
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
                    Clientomat™ ви дава контрол
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Единна система, която превръща хаоса в клиентското обслужване в предсказуем, автоматизиран процес за растеж
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#ECB629]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Magnet className="w-4 h-4 text-[#ECB629]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Привличане на клиенти</h4>
                        <p className="text-gray-300 text-sm">
                          Автоматизирани системи за генериране на качествени leads
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#ECB629]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Handshake className="w-4 h-4 text-[#ECB629]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Nurturing процеси</h4>
                        <p className="text-gray-300 text-sm">
                          Персонализирани journey-та за всеки клиентски сегмент
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#ECB629]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <TrendingUp className="w-4 h-4 text-[#ECB629]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Retention & Growth</h4>
                        <p className="text-gray-300 text-sm">
                          Системи за задържане и увеличаване стойността на клиента
                        </p>
                      </div>
                    </div>
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
                <span className="text-[#ECB629] font-semibold text-sm">ИНЖЕНЕРЕН ПРОЦЕС</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Как работи Clientomat™?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Четири инженерни етапа, които превръщат всеки touchpoint в система за растеж
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  phase: "01",
                  title: "Audit & Discovery",
                  duration: "2 седмици",
                  description: "Анализираме вашия клиентски journey от A до Z. Идентифицираме всички точки на търкане и възможности за оптимизация.",
                  deliverables: ["Пълен анализ на клиентския цикъл", "Идентификация на bottleneck-ове", "Mapping на customer journey", "Конкурентен анализ"]
                },
                {
                  phase: "02", 
                  title: "System Architecture",
                  duration: "3 седмици",
                  description: "Проектираме персонализираната екосистема от инструменти и процеси, която ще автоматизира и оптимизира всеки етап.",
                  deliverables: ["Техническа архитектура", "Integration план", "Workflow диаграми", "ROI прогнози"]
                },
                {
                  phase: "03",
                  title: "Implementation",
                  duration: "4-6 седмици", 
                  description: "Внедряваме системата поетапно. Всеки компонент се тества и оптимизира преди да премине към следващия етап.",
                  deliverables: ["CRM setup & optimization", "Marketing automation", "Lead nurturing sequences", "Analytics dashboard"]
                },
                {
                  phase: "04",
                  title: "Optimization",
                  duration: "Постоянно",
                  description: "Непрекъсната оптимизация базирана на данни. Всяка седмица анализираме performance-а и правим подобрения.",
                  deliverables: ["Performance отчети", "A/B тестване", "Conversion optimization", "Scaling стратегии"]
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
                        <h4 className="text-lg font-bold text-white mb-3">Ключови Deliverable-и:</h4>
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
                <span className="text-green-400 font-semibold text-sm">ПРОВЕРЕНИ РЕЗУЛТАТИ</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Какви резултати да очаквате?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Реални метрики от клиенти, които вече използват Clientomat™ системата
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  metric: "60%+",
                  label: "Увеличение на клиентската база",
                  description: "За първите 6 месеца от внедряването",
                  timeline: "6-месечен период",
                  color: "green"
                },
                {
                  metric: "85%",
                  label: "По-висок retention rate",
                  description: "Клиентите остават по-дълго време",
                  timeline: "12-месечен период", 
                  color: "blue"
                },
                {
                  metric: "40%",
                  label: "Намаление на Customer Acquisition Cost",
                  description: "Оптимизирани процеси = по-ниски разходи",
                  timeline: "3-месечен период",
                  color: "purple"
                }
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                >
                  <Card className="bg-slate-800/50 border-slate-600/30 h-full text-center group hover:border-[#ECB629]/50 transition-all duration-300">
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
                      <p className="text-gray-300 mb-4">{result.description}</p>
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
                    Вашият клиентски портфейл става ваш най-голям актив
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Вместо да разчитате на постоянно привличане на нови клиенти, изграждате система, която превръща всеки контакт в дългосрочна стойност
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Microscope className="w-6 h-6 text-[#ECB629] mr-3" />
                        Predictable Growth
                      </h4>
                      <p className="text-gray-300">
                        Знаете точно колко нови клиенти ще привлечете всеки месец и каква ще бъде тяхната lifetime value.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <FileText className="w-6 h-6 text-[#ECB629] mr-3" />
                        Automated Excellence
                      </h4>
                      <p className="text-gray-300">
                        Всеки клиент получава върхово обслужване без да се налага ръчна намеса във всеки процес.
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
                Инвестиция в бъдещето
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={investmentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Clientomat™ не е разход - това е инвестиция, която се изплаща многократно чрез увеличаване стойността на всеки клиент
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={investmentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="bg-slate-800/60 border-[#ECB629]/20 p-12 text-center">
                  <div className="mb-8">
                    <div className="text-6xl font-bold text-[#ECB629] mb-4">2750 лв.</div>
                    <div className="text-xl text-gray-300">месечно</div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 text-left mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Какво включва:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Пълен системен audit
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Custom CRM настройка
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Marketing automation
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Lead nurturing system
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Support & Optimization:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Седмични отчети
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Постоянна оптимизация
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          A/B тестване
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Performance monitoring
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Гаранции:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          ROI в първите 6 месеца
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Измерими резултати
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Пълна прозрачност
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#ECB629] mr-2" />
                          Flexible terms
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
              Готови ли сте да превърнете <br />
              всеки контакт в <span className="text-black">успех?</span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Започнете с безплатна експертна диагностика на вашата клиентска екосистема. Ще ви покажем точно къде губите възможности и как да ги превърнете в растеж.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="group relative bg-black text-[#ECB629] hover:bg-black/90 font-bold text-xl px-12 py-6 rounded-lg shadow-lg hover:shadow-black/30 transition-all duration-300 overflow-hidden"
                asChild
              >
                <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Заявете експертна диагностика</span>
                  <ArrowRight className="ml-3 w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
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