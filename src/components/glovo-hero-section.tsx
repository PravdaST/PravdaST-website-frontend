"use client";

import { motion } from "framer-motion";
import PravdaHeading from "@/components/typography/PravdaHeading";
import PravdaText from "@/components/typography/PravdaText";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import Image from "next/image";

export const GlovoHeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Mobile-optimized Background - reduced blur on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 md:w-72 md:h-72 bg-yellow-400/20 rounded-full blur-xl md:blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 md:w-96 md:h-96 bg-green-500/15 rounded-full blur-xl md:blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <PravdaHeading
              as="h1" 
              size="7xl"
              className="leading-tight"
            >
            <span className="text-white">
              Знаете ли, че всеки месец
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-black text-4xl sm:text-6xl md:text-7xl">
              подарявате на Glovo
            </span>
            <br />
            <span className="text-yellow-400 text-4xl sm:text-6xl md:text-7xl">
              хиляди левове?
            </span>
            </PravdaHeading>
          </motion.div>

          <motion.div
            className="mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PravdaText size="xl" className="md:text-2xl mb-6 leading-relaxed text-center">
              <span className="text-yellow-400 font-bold">Безплатен калкулатор:</span> Вижте точно колко ви струва Glovo месечно + получете персонализиран план за освобождаване за 90 дни
            </PravdaText>
          </motion.div>

          {/* Hero Visual with Generated Image */}
          <motion.div
            className="mb-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glassmorphism border border-yellow-400/30 rounded-2xl p-6 mb-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/glovo/Glovo_commission_comparison_visual_16961ca4.png"
                  alt="GLOVO комисионни срещу спестени пари - визуално сравнение"
                  fill
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glassmorphism border border-red-500/30 rounded-2xl p-6">
                <h3 className="text-red-400 font-bold text-lg mb-4">
                  Преди - Glovo фактура
                </h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">
                    2,400 лв
                  </div>
                  <div className="text-gray-400">
                    Месечни комисионни (30%)
                  </div>
                </div>
              </div>
              <div className="glassmorphism border border-green-400/30 rounded-2xl p-6">
                <h3 className="text-green-400 font-bold text-lg mb-4">
                  След - Директни поръчки
                </h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    1,000 лв
                  </div>
                  <div className="text-gray-400">Запазени приходи</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:scale-105 transition-all duration-300 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold shadow-2xl shadow-yellow-400/25 rounded-xl"
              onClick={() =>
                document
                  .getElementById("calculator")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Calculator className="mr-3 w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="hidden sm:inline">Изчислете разходите си за Glovo (Безплатно)</span>
              <span className="sm:hidden">Глово калкулатор</span>
            </Button>
            
            {/* Clean Trust Indicators - 2025 Style */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
              <div className="text-center">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-400 text-lg">🔒</span>
                </div>
                <span className="text-gray-300">100% безплатен анализ - не се изисква плащане</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-400 text-lg">📱</span>
                </div>
                <span className="text-gray-300">Резултати доставени за 2 минути</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-400 text-lg">🇧🇬</span>
                </div>
                <span className="text-gray-300">Специализирани в български ресторанти</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};