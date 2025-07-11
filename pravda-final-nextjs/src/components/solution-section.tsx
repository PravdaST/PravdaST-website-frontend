'use client'

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const SolutionSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Solution Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Success Indicators */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-500 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 30}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#ECB629] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Инженерен</span> подход към бизнеса
              </span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Спрете да залагате. <br />
            <span className="text-[#ECB629] relative">
              Време е за система!
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Ние не предлагаме маркетинг. Нашият подход е бизнес инженеринг. Разликата е в резултата.
          </p>
        </motion.div>
        
        {/* Modern Comparison Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Marketing Card - Problem State */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-red-500/20 p-8 h-full backdrop-blur-sm">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(239, 68, 68, 0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(239, 68, 68, 0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* Problem Indicator */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-red-400 font-medium">ПРОБЛЕМ</span>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Традиционен маркетинг
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Разхищаване на бюджет за експерименти</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Непредвидими резултати</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Фокус върху метрики, а не върху растеж</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Зависимост от тактики и трендове</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Business Engineering Card - Solution State */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-[#ECB629]/30 p-8 h-full backdrop-blur-sm">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(34, 197, 94, 0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34, 197, 94, 0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* Solution Indicator */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">РЕШЕНИЕ</span>
                </div>
              </div>
              
              {/* Success Lines */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-px bg-gradient-to-r from-green-500 to-transparent"
                  style={{
                    left: `${10 + i * 20}%`,
                    top: `${20 + i * 30}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scaleX: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                Бизнес инженеринг
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#ECB629] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Предвидим ROI с инженерна точност</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#ECB629] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Системи, които работят дългосрочно</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#ECB629] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Фокус върху бизнес резултати</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#ECB629] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Мащабируема архитектура на растежа</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};