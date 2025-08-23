"use client";

import { motion } from "framer-motion";
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
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-red-500 animate-pulse">
              Спрете да загубвате
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-black text-5xl sm:text-7xl md:text-8xl">
              30%
            </span>
            <br />
            <span className="text-white">
              от приходите си всеки месец
            </span>
          </motion.h1>

          <motion.div
            className="mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-2xl md:text-3xl text-white mb-4 font-semibold">
              Безплатен <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Glovo калкулатор</span>
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Вижте точно колко ви струва Glovo + получете персонализиран план за освобождаване за 90 дни
            </p>
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
              <span className="hidden sm:inline">Изчисли моите Glovo разходи (Безплатно)</span>
              <span className="sm:hidden">Безплатен калкулатор</span>
            </Button>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="text-green-400">✓</span>
                <span>Без регистрация</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-400">✓</span>
                <span>90 секунди</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-400">✓</span>
                <span>Персонализиран анализ</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};