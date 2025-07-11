'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import CTASection from '@/components/sections/CTASection';
import { ArrowRight, ArrowLeft, BarChart3, TrendingDown, Crown, Zap, Phone, CheckCircle } from "lucide-react";

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
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle
              cx="40"
              cy="40"
              r="2"
              fill="#ECB629"
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
          fill="#ECB629"
          opacity="0.6"
        />

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
      </motion.svg>
    </div>
  );
};

// Philosophy Section Component
const PhilosophySection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            От хаос към <span className="text-[#ECB629]">система</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Вижте трансформацията от неструктурирано SEO към инженерен подход
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Transformation Visualization */}
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {currentStep === 0 ? (
                // Chaos State
                <div>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-400 font-bold text-lg">БЕЗ СИСТЕМА</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Хаотично SEO</h3>
                  <p className="text-gray-300 mb-6">
                    Безредни ключови думи, несвързано съдържание, технически проблеми, липса на стратегия
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-8 bg-red-500/20 rounded"
                        animate={{
                          opacity: [0.2, 0.8, 0.2],
                          scale: [0.9, 1.1, 0.9],
                        }}
                        transition={{
                          duration: 1 + Math.random(),
                          repeat: Infinity,
                          delay: Math.random(),
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                // System State
                <div>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-3 h-3 bg-[#ECB629] rounded-full animate-pulse"></div>
                    <span className="text-[#ECB629] font-bold text-lg">СЪС СИСТЕМА</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Структурирано SEO</h3>
                  <p className="text-gray-300 mb-6">
                    Организирана архитектура, целенасочено съдържание, техническо съвършенство, ясна стратегия
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-8 bg-[#ECB629]/30 rounded"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Arrow with direction switching */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{
                  x: currentStep === 0 ? -20 : 20,
                  color: currentStep === 0 ? "#ef4444" : "#ECB629",
                }}
                transition={{ duration: 0.5 }}
                className="text-4xl"
              >
                {currentStep === 0 ? <ArrowLeft /> : <ArrowRight />}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function SeoStruktorPage() {
  return (
    <>


      <div className="min-h-screen bg-slate-900">
        <Navigation />
        
        <main className="pt-10 sm:pt-0">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
            <SeoStruktorBackground />
            
            <div className="container mx-auto px-4 sm:px-6 relative z-1">
              <div className="max-w-4xl mx-auto text-center">
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
                    SEO система за доминация
                  </span>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  SEO <span className="text-[#ECB629]">Struktor™</span>
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Системата, която превръща вашия сайт в авторитета, който Google показва на първо място
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                >
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                    <a
                      href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black bg-[#ECB629] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#d4af37] hover:shadow-xl"
                    >
                      <span className="relative z-10">Изпревари конкуренцията</span>
                    </a>
                  </motion.div>

                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                    <a
                      href="tel:+359879282299"
                      className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-[#ECB629] border-2 border-[#ECB629] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#ECB629] hover:text-black"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="relative z-10">Обади се сега</span>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          <PhilosophySection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}