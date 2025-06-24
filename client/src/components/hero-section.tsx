import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Уверете се, че импортвате вашия Button компонент
import { AnimatedBackground } from "./animated-background"; // И вашия анимиран фон

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Hero Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Tech Lines */}
          <div className="tech-lines">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
                style={{
                  top: `${20 + i * 15}%`,
                  width: `${200 + i * 50}px`,
                  left: i % 2 === 0 ? '10%' : 'auto',
                  right: i % 2 === 1 ? '10%' : 'auto',
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

          {/* Floating Tech Elements */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#ECB629] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ECB629] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-white text-sm font-semibold">
              <span className="text-[#ECB629] font-bold">Ново</span> - Приемаме проекти за 2025
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
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
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Изграждаме системи, които ви дават контрол, носят предвидими приходи
            и пестят времето ви.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-auto relative overflow-hidden group"
                asChild
              >
                <a href="/contact">
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                  <span className="relative z-10">Започнете днес</span>
                </a>
              </Button>
            </motion.div>
            
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)]/10 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold transition-all duration-300 w-full md:w-auto"
              asChild
            >
              <a href="#systems">
                Научете повече
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-600/20">
              <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium">Безплатна консултация</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-600/20">
              <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium">Без ангажименти</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-600/20">
              <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium">Процес 5 минути</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
