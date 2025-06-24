import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Уверете се, че импортвате вашия Button компонент
import { AnimatedBackground } from "./animated-background"; // И вашия анимиран фон

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)]">
      <AnimatedBackground />

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-[var(--pravdast-yellow)] rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[var(--pravdast-yellow)] rounded-full animate-ping opacity-70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Status Badge */}
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
              <span className="text-[var(--pravdast-yellow)]">Ново</span> - Приемаме проекти за 2025
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white" // Добавен text-white за по-добра четимост, ако не идва от родителски елемент
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Престанете да залагате на маркетинг.{" "}
            <span className="text-[var(--pravdast-yellow)]">
              Започнете да изграждате растеж.
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
