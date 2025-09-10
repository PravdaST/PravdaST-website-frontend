"use client";

import { MotionDiv, MotionSection, MotionH1, MotionH2, MotionP, MotionA, MotionSvg } from "@/hooks/useSharedFramerMotion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMouseTracking } from "@/hooks/useMouseTracking";
import {
  ArrowRight,
  ArrowLeft,
  BarChart3,
  TrendingDown,
  Crown,
  Zap,
  Phone,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

// SEO Struktor Background Component
const SeoStruktorBackground = () => {
  const mousePosition = useMouseTracking();

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
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle cx="40" cy="40" r="2" fill="#ECB629" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seo-grid)" />
      </svg>

      {/* SEO Keywords floating */}
      {["SEO", "STRUCTURE", "SYSTEM", "RANKING", "TRAFFIC", "AUTHORITY"].map(
        (keyword, i) => (
          <MotionDiv
            key={keyword}
            className="absolute text-[#ECB629] font-mono text-xs opacity-20"
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
          </MotionDiv>
        ),
      )}

      {/* Network connections representing SEO structure */}
      <MotionSvg
        className="absolute inset-0 w-full h-full"
        animate={{
          x: mousePosition.x * 0.008,
          y: mousePosition.y * 0.008,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 15 }}
      >
        {/* Central hub */}
        <circle cx="50%" cy="50%" r="4" fill="#ECB629" opacity="0.6" />

        {/* Connecting lines to represent SEO structure */}
        <path
          d="M 200 300 Q 500 200 800 300"
          fill="none"
          stroke="#ECB629"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path
          d="M 200 700 Q 500 800 800 700"
          fill="none"
          stroke="#ECB629"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path
          d="M 300 200 L 500 500 L 700 200"
          fill="none"
          stroke="#ECB629"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M 300 800 L 500 500 L 700 800"
          fill="none"
          stroke="#ECB629"
          strokeWidth="1"
          opacity="0.3"
        />
      </MotionSvg>
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
    <section ref={ref} className="py-12 sm:py-16 md:py-20 glass-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <MotionH2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            За да е стабилна една сграда, тя се нуждае от инженерен план.
          </MotionH2>

          {/* Mobile-first single column design */}
          <div className="space-y-12">
            {/* Transformation Visualization */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard
                padding="lg"
                rounded="2xl"
                className="relative overflow-hidden"
              >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 md:grid-cols-12 gap-1 h-full p-4">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <MotionDiv
                      key={i}
                      className={`rounded-sm h-2 ${
                        currentStep === 0 ? "bg-red-400" : "bg-[#ECB629]"
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
                <MotionDiv
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                    currentStep === 0
                      ? "bg-red-500/20 text-red-300 border border-red-500/30"
                      : "bg-[#ECB629]/20 text-[#ECB629] border border-[#ECB629]/30"
                  }`}
                  animate={{
                    backgroundColor:
                      currentStep === 1
                        ? "rgba(236, 182, 40, 0.2)"
                        : "rgba(239, 68, 68, 0.2)",
                  }}
                  transition={{ duration: 1 }}
                >
                  <MotionDiv
                    className={`w-2 h-2 rounded-full mr-2 ${
                      currentStep === 0 ? "bg-red-400" : "bg-[#ECB629]"
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
                </MotionDiv>
              </div>

              {/* Progress Arrow */}
              <div className="relative z-10 flex justify-center mb-8">
                <MotionDiv
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <MotionDiv
                    className="w-16 h-0.5"
                    animate={{
                      background:
                        currentStep === 0
                          ? "linear-gradient(to right, rgb(248, 113, 113), rgb(239, 68, 68))"
                          : "linear-gradient(to right, rgb(248, 113, 113), rgb(236, 182, 40))",
                    }}
                    transition={{ duration: 1.5 }}
                  />
                  <MotionDiv
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
                  </MotionDiv>
                  <MotionDiv
                    className="w-16 h-0.5"
                    animate={{
                      background:
                        currentStep === 1
                          ? "linear-gradient(to right, rgb(236, 182, 40), rgb(236, 182, 40))"
                          : "linear-gradient(to right, rgb(236, 182, 40), rgb(248, 113, 113))",
                    }}
                    transition={{ duration: 1.5 }}
                  />
                </MotionDiv>
              </div>
              </GlassCard>
            </MotionDiv>

            {/* Content Cards */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Problem Card */}
              <MotionDiv
                className="glassmorphism rounded-xl p-6 border border-red-500/20"
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
              </MotionDiv>

              {/* Solution Card */}
              <MotionDiv
                className="glassmorphism rounded-xl p-6 border border-[#ECB629]/20"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-[#ECB629] rounded-full mr-3"></div>
                  <h3 className="text-lg font-bold text-[#ECB629]">
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
              </MotionDiv>
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
      className="py-20 glass-section relative overflow-hidden"
    >
      {/* Dynamic Blueprint Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-12 gap-4 h-full p-8">
          {Array.from({ length: 144 }).map((_, i) => (
            <MotionDiv
              key={i}
              className="bg-[#ECB629] rounded-sm h-1"
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
          <MotionDiv
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#ECB629]/10 rounded-full border border-[#ECB629]/20 mb-6">
              <span className="text-[#ECB629] text-sm font-semibold">
                СИСТЕМЕН ПРОЦЕС
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              От основите до покрива
            </h2>
            <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
              Нашият четирифазен инженерен процес на изграждане
            </p>
          </MotionDiv>

          {/* Modern Card-Based Timeline */}
          <div className="grid gap-8 md:gap-12">
            {phases.map((phase, index) => (
              <MotionDiv
                key={phase.number}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                {/* Connection Line */}
                {index < phases.length - 1 && (
                  <MotionDiv
                    className="absolute left-6 md:left-10 top-24 w-0.5 h-20 bg-gradient-to-b from-[#ECB629] to-slate-600 z-0"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                  />
                )}

                <MotionDiv className="glassmorphism rounded-2xl overflow-hidden transition-all duration-300">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Phase Number Circle */}
                      <MotionDiv className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#ECB629] to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-black font-bold text-xl md:text-2xl">
                              {phase.number}
                            </span>
                          </div>
                        </div>
                      </MotionDiv>

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
                            <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                            <span className="text-sm text-gray-400">
                              Времетраене:
                            </span>
                            <span className="text-sm font-semibold text-white">
                              {phase.duration}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
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
                        <MotionDiv
                          className="w-1 h-20 glassmorphism rounded-full overflow-hidden"
                          initial={{ height: 0 }}
                          animate={isInView ? { height: 80 } : {}}
                          transition={{
                            duration: 1,
                            delay: index * 0.15 + 0.8,
                          }}
                        >
                          <MotionDiv
                            className="w-full bg-gradient-to-t from-[#ECB629] to-yellow-400"
                            initial={{ height: "0%" }}
                            animate={isInView ? { height: "100%" } : {}}
                            transition={{
                              duration: 1.5,
                              delay: index * 0.15 + 1,
                            }}
                          />
                        </MotionDiv>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              </MotionDiv>
            ))}
          </div>

          {/* Connection line from last phase */}
          <MotionDiv
            className="w-0.5 h-16 bg-gradient-to-b from-[#ECB629] to-slate-600 mx-auto"
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
      beforeProgress: 25,
      afterProgress: 85,
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Дълготраен дигитален актив",
      description: "С нарастваща стойност, който работи за вас 24/7",
      metric: "365 дни работа",
      beforeProgress: 20,
      afterProgress: 90,
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Намалена зависимост",
      description: "От постоянни и рискови рекламни бюджети",
      metric: "60% по-малко разходи",
      beforeProgress: 30,
      afterProgress: 80,
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Установен пазарен авторитет",
      description: "И разпознаваемост на вашия бранд като експерт в нишата",
      metric: "Топ 3 позиции",
      beforeProgress: 15,
      afterProgress: 85,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 glass-section relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 md:grid-cols-16 gap-2 h-full p-6">
          {Array.from({ length: 128 }).map((_, i) => (
            <MotionDiv
              key={i}
              className="bg-[#ECB629] rounded-full"
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
          <MotionDiv
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#ECB629]/10 rounded-full border border-[#ECB629]/20 mb-6">
              <span className="text-[#ECB629] text-sm font-semibold">
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
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <MotionDiv
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <MotionDiv className="glassmorphism p-8 rounded-3xl h-full transition-all duration-300 overflow-hidden relative">
                  {/* Floating elements background */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#ECB629]/5 rounded-full -translate-y-10 translate-x-10" />

                  <div className="relative z-10">
                    {/* Icon with enhanced styling */}
                    <MotionDiv className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#ECB629] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg relative">
                        <div className="text-black">{benefit.icon}</div>
                      </div>
                    </MotionDiv>

                    {/* Metric badge */}
                    <MotionDiv
                      className="inline-block px-3 py-1 bg-[#ECB629]/20 border border-[#ECB629]/30 rounded-full mb-4"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      <span className="text-[#ECB629] text-xs font-semibold">
                        {benefit.metric}
                      </span>
                    </MotionDiv>

                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Progress Visualization with Before/After */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-red-400 font-medium">преди</span>
                        <span className="text-[#ECB629] font-medium">след</span>
                      </div>

                      {/* Before Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-red-400">Преди системата</span>
                          <span className="text-red-400">
                            {benefit.beforeProgress}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <MotionDiv
                            className="h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full"
                            initial={{ width: "0%" }}
                            animate={
                              isInView
                                ? { width: `${benefit.beforeProgress}%` }
                                : {}
                            }
                            transition={{
                              duration: 1.5,
                              delay: index * 0.2 + 1,
                            }}
                          />
                        </div>
                      </div>

                      {/* After Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#ECB629]">След системата</span>
                          <span className="text-[#ECB629]">
                            {benefit.afterProgress}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <MotionDiv
                            className="h-2 bg-gradient-to-r from-[#ECB629] to-yellow-400 rounded-full"
                            initial={{ width: "0%" }}
                            animate={
                              isInView
                                ? { width: `${benefit.afterProgress}%` }
                                : {}
                            }
                            transition={{
                              duration: 1.5,
                              delay: index * 0.2 + 1.5,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              </MotionDiv>
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

  const principles = [
    {
      number: "1",
      title: "Персонализирано решение",
      description:
        "Всеки проект започва с дълбока диагностика на вашия бизнес, конкуренцията и техническото състояние на сайта. Това ни позволява да създадем индивидуален план, който точно отговаря на вашите цели и бюджет.",
    },
    {
      number: "2",
      title: "Рамка за бюджетиране",
      description:
        "Началната цена от 1980 лв./месец е отправна точка за стандартни проекти. Финалната инвестиция се определя въз основа на сложността на вашия пазар, обема на работа и желаните резултати.",
    },
    {
      number: "3",
      title: "Техническа спецификация",
      description:
        "След диагностиката получавате подробен план с ясно дефинирани етапи, времеви рамки и очаквани резултати. Всичко е прозрачно - знаете точно какво плащате и какво получавате.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-16 gap-2 h-full p-4">
          {Array.from({ length: 256 }).map((_, i) => (
            <MotionDiv
              key={i}
              className="bg-[#ECB629] rounded-sm"
              style={{ height: Math.random() * 6 + 2 + "px" }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={
                isInView
                  ? {
                      opacity: Math.random() * 0.4 + 0.1,
                      scaleY: Math.random() * 1.5 + 0.3,
                    }
                  : {}
              }
              transition={{
                duration: 2,
                delay: i * 0.005,
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
          <MotionDiv
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#ECB629]/10 rounded-full border border-[#ECB629]/20 mb-6">
              <span className="text-[#ECB629] text-sm font-semibold">
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
          </MotionDiv>

          {/* Price Display */}
          <MotionDiv
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionDiv className="inline-block p-8 bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-slate-600/30 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-sm text-[#ECB629] font-semibold mb-2 tracking-wider">
                  ЗАПОЧВА ОТ
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <span className="text-[#ECB629]">1980 лв.</span>
                  <span className="text-white text-3xl">/месечно</span>
                </div>
                <div className="text-gray-400 text-sm">
                  *Финалната цена се определя след техническа диагностика
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* Principles Grid */}
          <div className="grid gap-8 md:gap-12">
            {principles.map((principle, index) => (
              <MotionDiv
                key={principle.number}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <MotionDiv
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Number Circle */}
                  <MotionDiv className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#ECB629] to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-black font-bold text-2xl">
                          {principle.number}
                        </span>
                      </div>
                      {/* Connection line to next */}
                      {index < principles.length - 1 && (
                        <MotionDiv
                          className="absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#ECB629] to-slate-600 hidden md:block"
                          initial={{ scaleY: 0 }}
                          animate={isInView ? { scaleY: 1 } : {}}
                          transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                        />
                      )}
                    </div>
                  </MotionDiv>

                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <MotionDiv className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {principle.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {principle.description}
                      </p>

                      {/* Decorative element */}
                      <MotionDiv
                        className="mt-6 w-full h-1 bg-slate-700 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                      >
                        <MotionDiv
                          className="h-full bg-gradient-to-r from-[#ECB629] to-yellow-400"
                          initial={{ width: "0%" }}
                          animate={isInView ? { width: "100%" } : {}}
                          transition={{ duration: 1.5, delay: index * 0.2 + 1 }}
                        />
                      </MotionDiv>
                    </MotionDiv>
                  </div>
                </MotionDiv>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function SeoStruktor() {
  return (
    <div className="min-h-screen text-white">

      {/* Hero Section */}
      <section className="pt-10 relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Glassmorphism Background */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ECB629] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-15"></div>
          <div className="absolute top-2/3 left-2/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        </div>
        <SeoStruktorBackground />

        {/* Enhanced floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#ECB629] rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-[#ECB629] rounded-full animate-pulse opacity-80"></div>
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#ECB629] rounded-full animate-bounce opacity-40"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[#ECB629] rounded-full animate-ping opacity-70"></div>
        </div>

        <div className="container mx-auto px-6 relative z-1">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <MotionDiv
              className="inline-flex items-center gap-3 px-6 py-3 glassmorphism rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-60"></div>
              </div>
              <span className="text-white text-sm font-semibold">
                <span className="text-[#ECB629]">Ново</span> - Приемаме проекти
                за 2025
              </span>
            </MotionDiv>

            <MotionH1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Вашите конкуренти не са по-добри.{" "}
              <span className="text-[#ECB629]">
                Просто имат по-добра система.
              </span>
            </MotionH1>

            <MotionP
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
                className="text-[#ECB629] hover:underline"
              >
                реални резултати
              </Link>
              .
            </MotionP>

            <MotionDiv
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-[#ECB629]/25 hover:shadow-[#ECB629]/40 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdast.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Изпревари конкуренцията
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </MotionDiv>
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

      {/* CTA Section */}
      <section className="py-20 bg-[#ECB629] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full border border-black/20 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-black font-medium">
                Остават 3 места за 2025
              </span>
            </div>

            <MotionH2
              className="text-4xl md:text-5xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Готови ли сте да спрете да импровизирате?
            </MotionH2>

            <MotionP
              className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Започнете систематичния подход към SEO с безплатна техническа
              диагностика.
            </MotionP>

            {/* Trust Signals */}
            <MotionDiv
              className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-black/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Безплатна диагностика</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Без ангажименти</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>48 часа отговор</span>
              </div>
            </MotionDiv>

            <MotionDiv
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <MotionA
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdast.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Започнете диагностиката</span>
                <ArrowRight className="w-5 h-5" />
              </MotionA>

              <MotionA
                href="tel:+359879282299"
                className="inline-flex items-center gap-3 border-2 border-black text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-black hover:text-white"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Обади се сега</span>
              </MotionA>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

    </div>
  );
}
