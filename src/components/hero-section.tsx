'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useState, useEffect, useMemo } from "react"

export const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Фиксирани позиции за избягване на hydration mismatch
  const techElements = useMemo(() => [
    { left: 15, top: 20, delay: 0.1, duration: 2.3 },
    { left: 85, top: 35, delay: 0.5, duration: 2.8 },
    { left: 25, top: 70, delay: 1.2, duration: 2.1 },
    { left: 70, top: 15, delay: 0.8, duration: 2.6 },
    { left: 45, top: 85, delay: 1.5, duration: 2.4 },
    { left: 90, top: 60, delay: 0.3, duration: 2.9 },
    { left: 10, top: 50, delay: 1.8, duration: 2.2 },
    { left: 60, top: 25, delay: 0.6, duration: 2.7 },
    { left: 30, top: 40, delay: 1.1, duration: 2.5 },
    { left: 80, top: 80, delay: 0.9, duration: 2.3 },
    { left: 50, top: 10, delay: 1.6, duration: 2.8 },
    { left: 20, top: 90, delay: 0.4, duration: 2.1 },
  ], []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Hero Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>

          {/* Tech Lines */}
          <div className="tech-lines">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
                style={{
                  top: `${20 + i * 15}%`,
                  width: `${200 + i * 50}px`,
                  left: i % 2 === 0 ? "10%" : "auto",
                  right: i % 2 === 1 ? "10%" : "auto",
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scaleX: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Floating Tech Elements - само за клиент */}
          {isClient && techElements.map((element, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#ECB629] rounded-full"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
              }}
            />
          ))}

          {/* Floating Keywords */}
          {[
            { keyword: "ROI", left: "15%", top: "20%" },
            { keyword: "CTR", left: "75%", top: "35%" }, 
            { keyword: "CPC", left: "25%", top: "60%" },
            { keyword: "ROAS", left: "85%", top: "15%" },
            { keyword: "CLICKS", left: "45%", top: "80%" },
            { keyword: "TARGET", left: "65%", top: "70%" },
            { keyword: "CONVERT", left: "30%", top: "40%" },
            { keyword: "OPTIMIZE", left: "80%", top: "55%" },
          ].map((item, i) => (
            <motion.div
              key={item.keyword}
              className="absolute text-[#ECB629] font-bold text-xs tracking-wider opacity-30"
              style={{
                left: item.left,
                top: item.top,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 4 + (i * 0.5),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {item.keyword}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ECB629] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-1 pt-10 sm:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Status Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-[#ECB629]/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <motion.div
                className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span className="text-white text-sm font-semibold">
              <span className="text-[#ECB629] font-bold">Ново</span> - Приемаме
              проекти за 2025
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Престанете да залагате на маркетинг.{" "}
            <span className="text-[#ECB629] relative">
              Започнете да изграждате растеж.
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Изграждаме системи, които ви дават контрол, носят предвидими приходи
            и пестят времето ви. Разгледайте нашите{" "}
            <Link href="/services" className="text-[#ECB629] hover:underline cursor-pointer">
              проверени системи
            </Link>{" "}
            и{" "}
            <Link href="/case-studies" className="text-[#ECB629] hover:underline cursor-pointer">
              реални резултати
            </Link>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto relative overflow-hidden group min-h-[56px]"
                asChild
              >
                <a href="https://form.typeform.com/to/GXLaGY98">
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                  <span className="relative z-10">Започнете днес</span>
                </a>
              </Button>
            </motion.div>

            <Button
              size="lg"
              variant="outline"
              className="border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)]/10 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold transition-all duration-300 w-full sm:w-auto min-h-[56px]"
              asChild
            >
              <Link href="/services">Научи повече</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 gap-3 sm:gap-6 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl border border-[var(--pravdast-yellow)]/30 overflow-hidden group"
              animate={{
                borderColor: [
                  "rgba(236, 182, 40, 0.3)",
                  "rgba(236, 182, 40, 0.6)",
                  "rgba(236, 182, 40, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--pravdast-yellow)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Animated background pulse */}
              <motion.div
                className="absolute inset-0 bg-[var(--pravdast-yellow)]/5 rounded-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Pulsing dot with ring */}
              <div className="relative">
                <motion.div
                  className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full relative z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"
                  animate={{
                    scale: [1, 2, 2.5],
                    opacity: [0.8, 0.4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>

              <span className="text-white text-sm font-semibold relative z-10">
                Оставащи места -{" "}
                <span className="text-[var(--pravdast-yellow)] text-base">
                  3
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};