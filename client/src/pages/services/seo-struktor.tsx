import { motion, useInView } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { UnifiedCTASection } from "@/components/unified-cta-section";
import { useRef, useState, useEffect } from "react";
import { seoStruktorSchema, injectStructuredData } from "@/lib/seo-schemas";
import { trackServiceView, trackCTAClick } from "@/lib/tracking";
import { Link } from "wouter";
import { pageSEOData } from "@/data/seo-pages";
import {
  ArrowRight,
  ArrowLeft,
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
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      {/* SEO Structure Grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="seo-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="var(--pravdast-yellow)"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle
              cx="40"
              cy="40"
              r="2"
              fill="var(--pravdast-yellow)"
              opacity="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seo-grid)" />
      </svg>

      {/* SEO Keywords floating */}
      {["SEO", "STRUCTURE", "SYSTEM", "RANKING", "TRAFFIC", "AUTHORITY"].map(
        (keyword, i) => (
          <motion.div
            key={keyword}
            className="absolute text-[var(--pravdast-yellow)] font-mono text-xs opacity-20"
            style={{
              left: `${15 + i * 12}%`,
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
              opacity: { duration: 3, repeat: Infinity },
            }}
          >
            {keyword}
          </motion.div>
        ),
      )}

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
        <circle
          cx="50%"
          cy="50%"
          r="4"
          fill="var(--pravdast-yellow)"
          opacity="0.6"
        />

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
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev === 0 ? 1 : 0));
      }, 3000); // Switch every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            За да е стабилна една сграда, тя се нуждае от инженерен план.
          </motion.h2>

          {/* Mobile-first single column design */}
          <div className="space-y-12">
            {/* Transformation Visualization */}
            <motion.div
              className="relative bg-slate-800/80 rounded-2xl p-8 border border-slate-600/30 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 md:grid-cols-12 gap-1 h-full p-4">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`rounded-sm h-2 ${
                        currentStep === 0
                          ? "bg-red-400"
                          : "bg-[var(--pravdast-yellow)]"
                      }`}
                      initial={{
                        rotate:
                          currentStep === 0 ? Math.random() * 180 - 90 : 0,
                        scale:
                          currentStep === 0 ? Math.random() * 0.8 + 0.6 : 1,
                      }}
                      animate={{
                        rotate:
                          currentStep === 1 ? 0 : Math.random() * 180 - 90,
                        scale:
                          currentStep === 1 ? 1 : Math.random() * 0.8 + 0.6,
                        backgroundColor:
                          currentStep === 1
                            ? "rgb(236, 182, 40)"
                            : "rgb(248, 113, 113)",
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.005,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="relative z-10 text-center mb-8">
                <motion.div
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                    currentStep === 0
                      ? "bg-red-500/20 text-red-300 border border-red-500/30"
                      : "bg-[var(--pravdast-yellow)]/20 text-[var(--pravdast-yellow)] border border-[var(--pravdast-yellow)]/30"
                  }`}
                  animate={{
                    backgroundColor:
                      currentStep === 1
                        ? "rgba(236, 182, 40, 0.2)"
                        : "rgba(239, 68, 68, 0.2)",
                  }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className={`w-2 h-2 rounded-full mr-2 ${
                      currentStep === 0
                        ? "bg-red-400"
                        : "bg-[var(--pravdast-yellow)]"
                    }`}
                    animate={{
                      backgroundColor:
                        currentStep === 1
                          ? "rgb(236, 182, 40)"
                          : "rgb(248, 113, 113)",
                    }}
                    transition={{ duration: 1 }}
                  />
                  {currentStep === 0 ? "БЕЗ СИСТЕМА" : "СЪС СИСТЕМА"}
                </motion.div>
              </div>

              {/* Progress Arrow */}
              <div className="relative z-10 flex justify-center mb-8">
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    className="w-16 h-0.5"
                    animate={{
                      background:
                        currentStep === 0
                          ? "linear-gradient(to right, rgb(248, 113, 113), rgb(239, 68, 68))"
                          : "linear-gradient(to right, rgb(248, 113, 113), rgb(236, 182, 40))",
                    }}
                    transition={{ duration: 1.5 }}
                  />
                  <motion.div
                    animate={{
                      x: currentStep === 1 ? [0, 10, 0] : [0, -10, 0],
                      color:
                        currentStep === 1
                          ? "rgb(236, 182, 40)"
                          : "rgb(248, 113, 113)",
                      scale: currentStep === 1 ? [1, 1.2, 1] : [1, 0.8, 1],
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
                    className="w-16 h-0.5"
                    animate={{
                      background:
                        currentStep === 1
                          ? "linear-gradient(to right, rgb(236, 182, 40), rgb(236, 182, 40))"
                          : "linear-gradient(to right, rgb(236, 182, 40), rgb(248, 113, 113))",
                    }}
                    transition={{ duration: 1.5 }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content Cards */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Problem Card */}
              <motion.div
                className="bg-slate-800/60 rounded-xl p-6 border border-red-500/20"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                  <h3 className="text-lg font-bold text-red-300">Проблемът</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Повечето уебсайтове се развиват хаотично – добавя се страница
                  тук, пише се статия там. Липсва единна, централна структура.
                  Точно това е причината резултатите да са непредсказуеми и
                  краткотрайни.
                </p>
              </motion.div>

              {/* Solution Card */}
              <motion.div
                className="bg-slate-800/60 rounded-xl p-6 border border-[var(--pravdast-yellow)]/20"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full mr-3"></div>
                  <h3 className="text-lg font-bold text-[var(--pravdast-yellow)]">
                    Решението
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Ние подхождаме към вашия сайт като архитекти. Преди да
                  поставим и една "тухла" (съдържание), ние създаваме цялостния
                  инженерен план (SEO Struktor™), който гарантира, че всеки
                  елемент работи в синхрон с останалите, за да се постигне
                  крайната цел – доминация в Google.
                </p>
              </motion.div>
            </div>
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
      description:
        "Преди да строим, проверяваме терена. Ако вашият сайт е бавен или технически неизправен, ние го изграждаме наново. Това е фундаментът, без който всяка конструкция е нестабилна.",
      duration: "2-3 седмици",
      deliverable: "Технически одит + оптимизиран сайт",
    },
    {
      number: "1",
      title: "Архитектурен план",
      description:
        'Проектираме перфектната вътрешна архитектура, за да може Google лесно да "разбере" и оцени стойността на вашия сайт. Това е чертежът, който следваме.',
      duration: "1-2 седмици",
      deliverable: "SEO архитектура + URL структура",
    },
    {
      number: "2",
      title: "Архитектура на съдържанието",
      description:
        "Създаваме съдържание, което отговаря на въпросите на клиентите ви и демонстрира вашата експертиза. Всяка страница е структурен елемент, който допринася за здравината и стойността на цялата сграда.",
      duration: "4-6 седмици",
      deliverable: "Content стратегия + оптимизирани страници",
    },
    {
      number: "3",
      title: "Външен авторитет",
      description:
        "Систематично изграждаме репутацията на вашия сайт в интернет, превръщайки го в авторитетен източник. Това му придава по-висока стойност и стабилност в очите на Google и пазара.",
      duration: "Непрекъснато",
      deliverable: "Link building + brand mentions",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-slate-800/30 relative overflow-hidden"
    >
      {/* Dynamic Blueprint Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-12 gap-4 h-full p-8">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-[var(--pravdast-yellow)] rounded-sm h-1"
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? {
                      opacity: Math.random() * 0.3 + 0.1,
                      scale: Math.random() * 0.8 + 0.4,
                    }
                  : {}
              }
              transition={{
                duration: 2,
                delay: i * 0.01,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[var(--pravdast-yellow)]/10 rounded-full border border-[var(--pravdast-yellow)]/20 mb-6">
              <span className="text-[var(--pravdast-yellow)] text-sm font-semibold">
                СИСТЕМЕН ПРОЦЕС
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              От основите до покрива
            </h2>
            <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
              Нашият четирифазен инженерен процес на изграждане
            </p>
          </motion.div>

          {/* Modern Card-Based Timeline */}
          <div className="grid gap-8 md:gap-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                {/* Connection Line */}
                {index < phases.length - 1 && (
                  <motion.div
                    className="absolute left-6 md:left-10 top-24 w-0.5 h-20 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 z-0"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                  />
                )}

                <motion.div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-600/30 overflow-hidden transition-all duration-300">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Phase Number Circle */}
                      <motion.div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[var(--pravdast-yellow)] to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-black font-bold text-xl md:text-2xl">
                              {phase.number}
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                            {phase.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            {phase.description}
                          </p>
                        </div>

                        {/* Phase Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-600/30">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                            <span className="text-sm text-gray-400">
                              Времетраене:
                            </span>
                            <span className="text-sm font-semibold text-white">
                              {phase.duration}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
                            <span className="text-sm text-gray-400">
                              Резултат:
                            </span>
                            <span className="text-sm font-semibold text-white">
                              {phase.deliverable}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Progress indicator */}
                      <div className="flex-shrink-0 hidden md:block">
                        <motion.div
                          className="w-1 h-20 bg-slate-700 rounded-full overflow-hidden"
                          initial={{ height: 0 }}
                          animate={isInView ? { height: 80 } : {}}
                          transition={{
                            duration: 1,
                            delay: index * 0.15 + 0.8,
                          }}
                        >
                          <motion.div
                            className="w-full bg-gradient-to-t from-[var(--pravdast-yellow)] to-yellow-400"
                            initial={{ height: "0%" }}
                            animate={isInView ? { height: "100%" } : {}}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.15 + 1,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Connection line from last phase */}
          <motion.div
            className="w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 mx-auto"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          />
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
      title: "Предвидим поток от качествени запитвания",
      description: "От клиенти, които активно търсят вашите решения",
      metric: "10x повече запитвания",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Дълготраен дигитален актив",
      description: "С нарастваща стойност, който работи за вас 24/7",
      metric: "365 дни работа",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Намалена зависимост",
      description: "От постоянни и рискови рекламни бюджети",
      metric: "60% по-малко разходи",
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Установен пазарен авторитет",
      description: "И разпознаваемост на вашия бранд като експерт в нишата",
      metric: "Топ 3 позиции",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-slate-900/40 relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 md:grid-cols-16 gap-2 h-full p-6">
          {Array.from({ length: 128 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-[var(--pravdast-yellow)] rounded-full"
              style={{ height: Math.random() * 4 + 1 + "px" }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={
                isInView
                  ? {
                      opacity: Math.random() * 0.6 + 0.2,
                      scaleY: Math.random() * 2 + 0.5,
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                delay: i * 0.01,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[var(--pravdast-yellow)]/10 rounded-full border border-[var(--pravdast-yellow)]/20 mb-6">
              <span className="text-[var(--pravdast-yellow)] text-sm font-semibold">
                ИЗМЕРИМИ РЕЗУЛТАТИ
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Крайният резултат: Повече от просто "позиции"
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Системата SEO Struktor™ създава дълготрайна стойност за вашия
              бизнес
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <motion.div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-3xl border border-slate-600/30 h-full transition-all duration-300 overflow-hidden relative">
                  {/* Floating elements background */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--pravdast-yellow)]/5 rounded-full -translate-y-10 translate-x-10" />

                  <div className="relative z-10">
                    {/* Icon with enhanced styling */}
                    <motion.div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--pravdast-yellow)] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg relative">
                        <div className="text-black">{benefit.icon}</div>
                      </div>
                    </motion.div>

                    {/* Metric badge */}
                    <motion.div
                      className="inline-block px-3 py-1 bg-[var(--pravdast-yellow)]/20 border border-[var(--pravdast-yellow)]/30 rounded-full mb-4"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    >
                      <span className="text-[var(--pravdast-yellow)] text-sm font-semibold">
                        {benefit.metric}
                      </span>
                    </motion.div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {benefit.description}
                    </p>

                    {/* Enhanced dual progress indicators */}
                    <motion.div
                      className="mt-6 space-y-4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                    >
                      {/* Before progress bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 font-medium">
                            Преди
                          </span>
                          <span className="text-xs text-gray-400">25%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-red-500/70 to-red-400/70 relative"
                            initial={{ width: "0%" }}
                            animate={isInView ? { width: "25%" } : {}}
                            transition={{
                              duration: 1.2,
                              delay: index * 0.15 + 0.8,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
                          </motion.div>
                        </div>
                      </div>

                      {/* After progress bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-[var(--pravdast-yellow)] font-medium">
                            След SEO Struktor™
                          </span>
                          <span className="text-xs text-[var(--pravdast-yellow)]">
                            85%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[var(--pravdast-yellow)] via-yellow-400 to-[var(--pravdast-yellow)] relative"
                            initial={{ width: "0%" }}
                            animate={isInView ? { width: "85%" } : {}}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.15 + 1.2,
                            }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
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

  const principles = [
    {
      number: "1",
      title: "Персонализирано решение",
      description:
        "Всяка система SEO Struktor™ се проектира и изгражда спрямо уникалните цели и състояние на вашия бизнес.",
    },
    {
      number: "2",
      title: "Бюджетна рамка",
      description:
        "За ориентация, базовите инженерни проекти започват от 1980 лв./месечно.",
    },
    {
      number: "3",
      title: "Техническа спецификация",
      description:
        "Финалната инвестиция се определя след задължителна техническа диагностика. Вие получавате детайлно инженерно предложение, в което всеки компонент е ясно описан и стойностен.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-slate-900/70 relative overflow-hidden"
    >
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="tech-pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="10"
                cy="10"
                r="1"
                fill="var(--pravdast-yellow)"
                opacity="0.3"
              />
              <path
                d="M0,10 L20,10 M10,0 L10,20"
                stroke="var(--pravdast-yellow)"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-pattern)" />
        </svg>
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
              <span className="text-[var(--pravdast-yellow)] text-sm font-semibold">
                ПРОЗРАЧНО ЦЕНООБРАЗУВАНЕ
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Структура на инвестицията
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Инженерно проектиране изисква прецизност и в техническата
              спецификация
            </p>
          </motion.div>

          {/* Price Display */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="inline-block p-8 bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-slate-600/30 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-sm text-[var(--pravdast-yellow)] font-semibold mb-2 tracking-wider">
                  ЗАПОЧВА ОТ
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <span className="text-[var(--pravdast-yellow)]">
                    1980 лв.
                  </span>
                  <span className="text-white text-3xl">/месечно</span>
                </div>
                <div className="text-gray-400 text-sm">
                  *Финалната цена се определя след техническа диагностика
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Principles Grid */}
          <div className="grid gap-8 md:gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Number Circle */}
                  <motion.div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[var(--pravdast-yellow)] to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-black font-bold text-2xl">
                          {principle.number}
                        </span>
                      </div>
                      {/* Connection line to next */}
                      {index < principles.length - 1 && (
                        <motion.div
                          className="absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 hidden md:block"
                          initial={{ scaleY: 0 }}
                          animate={isInView ? { scaleY: 1 } : {}}
                          transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <motion.div className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {principle.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {principle.description}
                      </p>

                      {/* Decorative element */}
                      <motion.div
                        className="mt-6 w-full h-1 bg-slate-700 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-[var(--pravdast-yellow)] to-yellow-400"
                          initial={{ width: "0%" }}
                          animate={isInView ? { width: "100%" } : {}}
                          transition={{ duration: 1.5, delay: index * 0.2 + 1 }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Connection line from last principle */}
            <motion.div
              className="w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 mx-auto mb-8"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            />
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
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Enhanced Technical Background */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="final-cta-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="20"
                cy="20"
                r="2"
                fill="var(--pravdast-yellow)"
                opacity="0.4"
              />
              <path
                d="M0,20 L40,20 M20,0 L20,40"
                stroke="var(--pravdast-yellow)"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <circle
                cx="5"
                cy="5"
                r="0.5"
                fill="var(--pravdast-yellow)"
                opacity="0.6"
              />
              <circle
                cx="35"
                cy="35"
                r="0.5"
                fill="var(--pravdast-yellow)"
                opacity="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#final-cta-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--pravdast-yellow)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Connection line from previous section */}
          <motion.div
            className="w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 mx-auto mb-16"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-3 bg-[var(--pravdast-yellow)]/10 rounded-full border border-[var(--pravdast-yellow)]/20 mb-8">
              <span className="text-[var(--pravdast-yellow)] text-sm font-semibold tracking-wider">
                ФИНАЛНА СТЪПКА
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Готови ли сте да спрете да импровизирате?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-600/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-white">Проблемът</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Нашият инженерен процес е задълбочен и изисква пълна
                    отдаденост. Затова работим с ограничен брой нови клиенти
                    всеки месец.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/40 rounded-2xl border border-[var(--pravdast-yellow)]/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-white">Решението</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Първата стъпка е нашата експертна диагностика. С нейна помощ
                    ще научите повече за скритите проблеми на вашия сайт и ще
                    получите ясна представа за потенциала му.
                  </p>
                </div>
              </div>

              {/* Urgency indicators */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                  <div className="text-2xl font-bold text-[var(--pravdast-yellow)] mb-1">
                    48h
                  </div>
                  <div className="text-xs text-gray-400">Отговор</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                  <div className="text-2xl font-bold text-[var(--pravdast-yellow)] mb-1">
                    5min
                  </div>
                  <div className="text-xs text-gray-400">Процес</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                  <div className="text-2xl font-bold text-[var(--pravdast-yellow)] mb-1">
                    100%
                  </div>
                  <div className="text-xs text-gray-400">Безплатно</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Enhanced CTA */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl border border-[var(--pravdast-yellow)]/30 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--pravdast-yellow)]/5 to-transparent"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10 text-center space-y-6">
                  <div className="space-y-4">
                    <div className="inline-block px-4 py-2 bg-[var(--pravdast-yellow)]/20 border border-[var(--pravdast-yellow)]/40 rounded-full">
                      <span className="text-[var(--pravdast-yellow)] text-sm font-semibold">
                        ОГРАНИЧЕНИ МЕСТА
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      Започнѵте диагностиката днес
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      Безплатна техническа диагностика с детайлен анализ на
                      потенциала на вашия сайт
                    </p>
                  </div>

                  {/* CTA removed - unified CTA at page bottom */}

                  {/* Trust indicators */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-600/30">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-400">
                        Без ангажименти
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-400">
                        100% поверително
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mt-4">
                    Ще се свържем с вас в рамките на 48 часа, ако имаме свободен
                    капацитет за този месец.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom urgency message */}
          <motion.div
            className="text-center p-6 bg-slate-800/30 rounded-2xl border border-red-500/20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-400 text-sm font-semibold tracking-wider">
                ВАЖНО
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Всеки ден на изчакване е изгубена възможност. Вашите конкуренти не
              спят.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function SeoStruktor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)] text-white">
      <SEOHead
        seo={pageSEOData["services/seo-struktor"]}
        pageSlug="services/seo-struktor"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-10 relative min-h-screen flex items-center overflow-hidden">
        <SeoStruktorBackground />

        {/* Enhanced floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-[var(--pravdast-yellow)] rounded-full animate-pulse opacity-80"></div>
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full animate-bounce opacity-40"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[var(--pravdast-yellow)] rounded-full animate-ping opacity-70"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/40 backdrop-blur-sm border border-[var(--pravdast-yellow)]/20 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-60"></div>
              </div>
              <span className="text-white text-sm font-semibold">
                <span className="text-[var(--pravdast-yellow)]">Ново</span> -
                Приемаме проекти за 2025
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
              предвидим и измерим начин. Вижте нашите{" "}
              <Link
                href="/case-studies"
                className="text-[var(--pravdast-yellow)] hover:underline"
              >
                реални резултати
              </Link>{" "}
              или{" "}
              <Link
                href="/calculators"
                className="text-[var(--pravdast-yellow)] hover:underline"
              >
                изчислете вашата възвръщаемост
              </Link>
              .
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-[var(--pravdast-yellow)]/25 hover:shadow-[var(--pravdast-yellow)]/40 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick("seo-struktor", "hero-primary")}
                >
                  Изпревари конкуренцията
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
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

      {/* Unified CTA Section */}
      <UnifiedCTASection
        buttonText="Започнете диагностиката"
        headline="Готови ли сте да спрете да импровизирате?"
        description="Започнете систематичния подход към SEO с безплатна техническа диагностика."
      />

      <Footer />
    </div>
  );
}
