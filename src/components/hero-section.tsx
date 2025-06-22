import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "./animated-background";

export const HeroSection = () => {
  return (
    <>
      {/* Business Engineering Header */}
      <div className="bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] text-center py-3">
        <p className="text-sm font-medium">Бизнес инженеринг за предвидим растеж</p>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)]">
        <AnimatedBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
              Изграждаме системи, които ви дават контрол, носят предвидими приходи и пестят времето ви.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] text-lg font-semibold px-8 py-4 hover:shadow-lg hover:shadow-[var(--pravdast-yellow)]/20 transition-all duration-300 hover:-translate-y-1"
                onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
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
