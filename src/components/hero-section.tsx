import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "./animated-background";

export const HeroSection = () => {
  return (
    <>
      {/* Business Engineering Header */}
      {/* <div className="bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] text-center py-3">
        <p className="text-sm font-medium">Бизнес инженеринг за предвидим растеж</p>
      </div> */}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)]">
        <AnimatedBackground />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-3 h-3 flex items-center justify-center">
                {/* Radar outer ring */}
                <div className="absolute inset-0 w-3 h-3 bg-green-500/30 rounded-full animate-ping opacity-80"></div>
                {/* Core dot */}
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">
                Бизнес инженеринг за предвидим растеж
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
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
              Изграждаме системи, които ви дават контрол, носят предвидими
              приходи и пестят времето ви.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--pravdast-yellow)] via-amber-400 to-[var(--pravdast-yellow)] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
              <Button
                size="lg"
                className="relative bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] text-lg font-semibold px-8 py-4 transition-all duration-300 hover:-translate-y-1 border border-[var(--pravdast-yellow)]"
                onClick={() =>
                  window.open("https://form.typeform.com/to/GXLaGY98", "_blank")
                }
              >
                Заявете експертна диагностика
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
