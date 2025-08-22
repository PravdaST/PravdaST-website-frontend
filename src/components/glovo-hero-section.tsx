"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import Image from "next/image";

export const GlovoHeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background - GLOVO colors */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/15 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
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
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-red-500">
              Спрете да плащате на Glovo 30%
            </span>
            <br />
            <span className="text-white">
              - Този ресторант в София спести
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              1,400 лв/месец
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <strong className="text-green-400">Безплатен калкулатор:</strong>{" "}
            Вижте точно колко ви струва Glovo месечно + получете
            персонализиран план за освобождаване
          </motion.p>

          {/* Hero Visual with Generated Image */}
          <motion.div
            className="mb-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glassmorphism border border-yellow-400/30 rounded-2xl p-6 mb-8">
              <Image
                src="/images/glovo/Glovo_commission_comparison_visual_16961ca4.png"
                alt="GLOVO комисионни срещу спестени пари - визуално сравнение"
                width={800}
                height={450}
                className="w-full h-auto rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
                quality={90}
                priority
              />
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
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 px-12 py-6 text-xl font-bold shadow-2xl shadow-yellow-400/25"
              onClick={() =>
                document
                  .getElementById("calculator")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Calculator className="mr-3 w-6 h-6" />
              Изчисли моите Glovo разходи (Безплатно)
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};