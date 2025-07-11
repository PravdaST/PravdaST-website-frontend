
'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export const HeroSection = () => {
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

          {/* Tech Lines - Static positioning matching original */}
          <div className="tech-lines">
            <div
              className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
              style={{
                top: "20%",
                width: "200px",
                left: "10%",
                right: "auto",
                transform: "scaleX(1.08012)",
              }}
            />
            <div
              className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
              style={{
                top: "35%",
                width: "250px",
                left: "auto",
                right: "10%",
                transform: "scaleX(0.91262)",
              }}
            />
            <div
              className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
              style={{
                top: "50%",
                width: "300px",
                left: "10%",
                right: "auto",
                transform: "scaleX(0.815011)",
              }}
            />
            <div
              className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
              style={{
                top: "65%",
                width: "350px",
                left: "auto",
                right: "10%",
                transform: "scaleX(0.919878)",
              }}
            />
            <div
              className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
              style={{
                top: "80%",
                width: "400px",
                left: "10%",
                right: "auto",
                transform: "scaleX(1.08738)",
              }}
            />
            <div
              className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
              style={{
                top: "95%",
                width: "450px",
                left: "auto",
                right: "10%",
                transform: "scaleX(1.18499)",
              }}
            />
          </div>

          {/* Floating Tech Elements - Static positioning matching original */}
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "73.6156%", top: "46.4188%", transform: "scale(1.49989)" }} />
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "83.3216%", top: "22.9405%", transform: "scale(1.35655)" }} />
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "59.9797%", top: "68.0345%", transform: "scale(1.40433)" }} />
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "18.5343%", top: "81.2257%", transform: "scale(1.4524)" }} />
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "11.7245%", top: "74.7094%", transform: "scale(1.09596)" }} />
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "7.91195%", top: "25.8146%", transform: "scale(1.13481)" }} />
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "23.263%", top: "90.7202%", transform: "scale(1.03466)" }} />
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "68.4081%", top: "24.5754%", transform: "scale(1.38795)" }} />
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "85.3689%", top: "66.4324%", transform: "scale(1.15019)" }} />
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "45.998%", top: "29.8833%", transform: "scale(1.49493)" }} />
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "12.8586%", top: "32.6526%", transform: "scale(1.00428)" }} />
          <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: "44.8438%", top: "57.1638%", transform: "scale(1.20175)" }} />
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
            <Link href="/services">
              <span className="text-[#ECB629] hover:underline cursor-pointer">
                проверени системи
              </span>
            </Link>{" "}
            и{" "}
            <Link href="/case-studies">
              <span className="text-[#ECB629] hover:underline cursor-pointer">
                реални резултати
              </span>
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
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto relative overflow-hidden group min-h-[56px]"
                asChild
              >
                <Link href="https://form.typeform.com/to/GXLaGY98" target="_blank" rel="noopener noreferrer">
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                  <span className="relative z-10">Започнете днес</span>
                </Link>
              </Button>
            </motion.div>

            <Button
              size="lg"
              variant="outline"
              className="border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629]/10 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold transition-all duration-300 w-full sm:w-auto min-h-[56px]"
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
              className="relative flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl border border-[#ECB629]/30 overflow-hidden group"
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
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ECB629]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Animated background pulse */}
              <motion.div
                className="absolute inset-0 bg-[#ECB629]/5 rounded-xl"
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
                  className="w-2 h-2 bg-[#ECB629] rounded-full relative z-10"
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
                  className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full"
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
                <span className="text-[#ECB629] text-base">
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
