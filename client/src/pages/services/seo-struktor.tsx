import { motion, useInView } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  BarChart3,
  TrendingDown,
  Crown,
  Zap,
} from "lucide-react";

// SEO Struktor Background Component
const SeoStruktorBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      {/* SEO Structure Grid */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="seo-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="var(--pravdast-yellow)" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="40" cy="40" r="2" fill="var(--pravdast-yellow)" opacity="0.4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seo-grid)" />
      </svg>
      
      {/* SEO Keywords floating */}
      {['SEO', 'STRUCTURE', 'SYSTEM', 'RANKING', 'TRAFFIC', 'AUTHORITY'].map((keyword, i) => (
        <motion.div
          key={keyword}
          className="absolute text-[var(--pravdast-yellow)] font-mono text-xs opacity-20"
          style={{
            left: `${15 + (i * 12)}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            x: mousePosition.x * 0.015 * (i % 2 === 0 ? 1 : -1),
            y: mousePosition.y * 0.015 * (i % 2 === 0 ? -1 : 1),
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            type: "spring", 
            stiffness: 30, 
            damping: 10,
            opacity: { duration: 3, repeat: Infinity }
          }}
        >
          {keyword}
        </motion.div>
      ))}
      
      {/* Network connections representing SEO structure */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        animate={{
          x: mousePosition.x * 0.008,
          y: mousePosition.y * 0.008,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 15 }}
      >
        {/* Central hub */}
        <circle cx="50%" cy="50%" r="4" fill="var(--pravdast-yellow)" opacity="0.6"/>
        
        {/* Connecting lines to represent SEO structure */}
        <path
          d="M 20% 30% Q 50% 20% 80% 30%"
          fill="none"
          stroke="var(--pravdast-yellow)"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path
          d="M 20% 70% Q 50% 80% 80% 70%"
          fill="none"
          stroke="var(--pravdast-yellow)"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path
          d="M 30% 20% L 50% 50% L 70% 20%"
          fill="none"
          stroke="var(--pravdast-yellow)"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M 30% 80% L 50% 50% L 70% 80%"
          fill="none"
          stroke="var(--pravdast-yellow)"
          strokeWidth="1"
          opacity="0.3"
        />
      </motion.svg>
    </div>
  );
};

// Philosophy Section Component
const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            За да е стабилна една сграда, тя се нуждае от инженерен план.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Chaos */}
            <motion.div
              className="flex flex-col h-full"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative p-8 bg-slate-700/50 rounded-lg border border-red-500/30 h-64 flex flex-col justify-center mb-6">
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-6 gap-2 h-full p-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-red-400 rounded-sm h-4"
                        style={{
                          transform: `rotate(${Math.random() * 90}deg) translate(${Math.random() * 20}px, ${Math.random() * 20}px)`,
                        }}
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-400 relative z-10 text-center">
                  БЕЗ СИСТЕМА
                </h3>
                <div className="text-center text-red-300 text-sm relative z-10">
                  Хаотичен подход
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed flex-1">
                Повечето уебсайтове се развиват хаотично – добавя се страница
                тук, пише се статия там. Липсва единна, централна структура.
                Точно това е причината резултатите да са непредсказуеми и
                краткотрайни.
              </p>
            </motion.div>

            {/* Right Column - Structure */}
            <motion.div
              className="flex flex-col h-full"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative p-8 bg-slate-700/50 rounded-lg border border-[var(--pravdast-yellow)]/30 h-64 flex flex-col justify-center mb-6">
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-6 gap-2 h-full p-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-[var(--pravdast-yellow)] rounded-sm h-4"
                        initial={{
                          rotate: Math.random() * 90,
                          x: Math.random() * 20,
                          y: Math.random() * 20,
                        }}
                        animate={isInView ? {
                          rotate: 0,
                          x: 0,
                          y: 0,
                        } : {}}
                        transition={{
                          duration: 2,
                          delay: 0.6 + i * 0.05,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--pravdast-yellow)] relative z-10 text-center">
                  СЪС СИСТЕМА
                </h3>
                <div className="text-center text-yellow-300 text-sm relative z-10">
                  Структуриран подход
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed flex-1">
                Ние подхождаме към вашия сайт като архитекти. Преди да
                поставим и една „тухла" (съдържание), ние създаваме цялостния
                инженерен план (SEO Struktor™), който гарантира, че всеки
                елемент работи в синхрон с останалите, за да се постигне
                крайната цел – доминация в Google.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Engineering Process Section Component
const EngineeringProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const phases = [
    {
      number: "0",
      title: "Здравият фундамент (Pagekraft™)",
      description: "Техническа оптимизация и скоростна структура за стабилна основа.",
      icon: "🏗️"
    },
    {
      number: "1", 
      title: "Архитектурен план",
      description: "Проектиране на информационната архитектура и URL структура.",
      icon: "📐"
    },
    {
      number: "2",
      title: "Архитектура на съдържанието", 
      description: "Стратегическо планиране и създаване на оптимизирано съдържание.",
      icon: "📝"
    },
    {
      number: "3",
      title: "Външен авторитет",
      description: "Изграждане на доверие чрез качествени препратки и партньорства.",
      icon: "🔗"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="timeline-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="var(--pravdast-yellow)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#timeline-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[var(--pravdast-yellow)]/10 rounded-full border border-[var(--pravdast-yellow)]/20 mb-6">
              <span className="text-[var(--pravdast-yellow)] text-sm font-semibold">СИСТЕМЕН ПРОЦЕС</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              От основите до покрива:<br />
              <span className="text-[var(--pravdast-yellow)]">Нашият четирифазен процес</span>
            </h2>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              Всеки етап е съобразен с предишния за максимална ефективност
            </p>
          </motion.div>

          <div className="relative">
            {/* Modern Timeline Structure */}
            <div className="grid gap-8 md:gap-12">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                >
                  <div className="flex items-center gap-8 md:gap-12">
                    {/* Phase Number & Icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[var(--pravdast-yellow)] to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <span className="text-2xl font-bold text-black">{phase.number}</span>
                      </div>
                      {index < phases.length - 1 && (
                        <motion.div
                          className="absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-transparent"
                          initial={{ scaleY: 0 }}
                          animate={isInView ? { scaleY: 1 } : {}}
                          transition={{ duration: 1, delay: 1 + index * 0.3 }}
                          style={{ transformOrigin: "top" }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-[var(--pravdast-yellow)]/30 transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                          <span className="text-[var(--pravdast-yellow)] text-sm font-semibold tracking-wider">
                            ФАЗА {phase.number}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">
                          {phase.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connection Flow Visualization */}
            <motion.svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.3 } : {}}
              transition={{ duration: 2, delay: 1.5 }}
            >
              <path
                d="M 100 100 Q 200 50 300 100 T 500 100"
                fill="none"
                stroke="var(--pravdast-yellow)"
                strokeWidth="1"
                opacity="0.2"
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
};

// Results Section Component
const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Предвидим поток",
      description: "Стабилен и измерим растеж на органичния трафик"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Дългосрочен актив",
      description: "Вашият сайт става все по-ценен с времето"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "По-малко реклами",
      description: "Намалена зависимост от платена реклама"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Пазарен авторитет", 
      description: "Водеща позиция в индустрията ви"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--pravdast-yellow)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--pravdast-yellow)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[var(--pravdast-yellow)]/10 rounded-full border border-[var(--pravdast-yellow)]/20 mb-6">
              <span className="text-[var(--pravdast-yellow)] text-sm font-semibold">ИЗМЕРИМИ РЕЗУЛТАТИ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Очаквани резултати
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Всяко действие в нашата система води към конкретни, измерими подобрения
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <div className="h-full p-8 bg-gradient-to-b from-slate-700/40 to-slate-800/60 rounded-2xl border border-slate-600/30 hover:border-[var(--pravdast-yellow)]/40 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-[var(--pravdast-yellow)]/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[var(--pravdast-yellow)]/20 transition-colors duration-300">
                      <div className="text-[var(--pravdast-yellow)] group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                    </div>
                    {/* Animated dot */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white text-center group-hover:text-[var(--pravdast-yellow)] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-600/30">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                      <div className="text-xs text-[var(--pravdast-yellow)] font-semibold">
                        {index === 0 && "30-90 дни"}
                        {index === 1 && "6-12 месеца"}
                        {index === 2 && "3-6 месеца"}
                        {index === 3 && "12+ месеца"}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA hint */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-gray-400 text-sm">
              Всички резултати се проследяват и отчитат ежемесечно
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Investment Section Component  
const InvestmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)] relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid-investment" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid-investment)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Техническа спецификация на инвестицията
          </motion.h2>

          <motion.div
            className="bg-slate-800/50 p-8 rounded-lg border border-slate-600/30 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-4"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <span className="text-[var(--pravdast-yellow)]">1980 лв.</span>
              <span className="text-white">/месечно</span>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-4 bg-slate-700/30 rounded">
                <h4 className="font-semibold mb-2 text-white">✓ Без скрити разходи</h4>
                <p className="text-gray-300 text-sm">Прозрачно ценообразуване без допълнителни такси</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded">
                <h4 className="font-semibold mb-2 text-white">✓ Измерими резултати</h4>
                <p className="text-gray-300 text-sm">Ежемесечни отчети с ясни KPI метрики</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded">
                <h4 className="font-semibold mb-2 text-white">✓ Дългосрочна стойност</h4>
                <p className="text-gray-300 text-sm">Всяка инвестиция се натрупва като актив</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section Component
const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Готови ли сте да изградите система, която работи?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Започваме с безплатна диагностика на вашето текущо състояние. 
            Ще получите детайлен план за подобрение и ясна roadmap за постигане на целите ви.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-12 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Кандидатствайте за диагностика
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function SeoStruktor() {
  const seoData = {
    title: "SEO Struktor™ - Инженерен подход към SEO оптимизация | Pravdast",
    description: "Изграждаме вашето онлайн присъствие като инженерно съоръжение. Структуриран SEO подход за предвидими резултати в Google.",
    keywords: "SEO оптимизация, SEO услуги България, структуриран SEO, инженерен SEO подход",
    ogImage: "/og-images/seo-struktor.svg"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)] text-white">
      <SEOHead seo={seoData} pageSlug="services/seo-struktor" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <SeoStruktorBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Вашите конкуренти не са по-добри.{" "}
              <span className="text-[var(--pravdast-yellow)]">
                Просто имат по-добра система.
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              В Google битката се печели не от най-големия, а от най-добре
              структурирания. SEO Struktor™ изгражда вашето онлайн присъствие
              като инженерно съоръжение, проектирано да доминира в търсенето по
              предвидим и измерим начин.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Изпреварете конкуренцията
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Engineering Process Section */}
      <EngineeringProcessSection />

      {/* Results Section */}
      <ResultsSection />

      {/* Investment Section */}
      <InvestmentSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      <Footer />
    </div>
  );
}