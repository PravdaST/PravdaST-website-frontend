import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle, AlertCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,182,40,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(236,182,40,0.08)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 border-2 border-[var(--pravdast-yellow)]/20 rounded-xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-24 right-16 w-20 h-20 bg-[var(--pravdast-yellow)]/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Urgency Badge */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600/25 to-orange-600/25 border border-red-500/40 rounded-full backdrop-blur-sm shadow-lg">
              <AlertCircle className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-300 font-bold text-base uppercase tracking-wider">
                Ограничени места
              </span>
            </div>
          </motion.div>

          {/* Main Headline with Massive Emphasis */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Приемаме до{" "}
              <motion.span 
                className="inline-block relative mx-4"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-8xl md:text-9xl font-black text-[var(--pravdast-yellow)] relative z-10 drop-shadow-2xl">
                  3
                </span>
                
                {/* Multiple Glow Layers */}
                <motion.div
                  className="absolute inset-0 bg-[var(--pravdast-yellow)] rounded-2xl blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Success Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-xl"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                </motion.div>
              </motion.span>{" "}
              нови партньори за следващото тримесечие.
            </h2>
          </motion.div>

          {/* Two-Column Clean Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            {/* Left: Description and Trust Elements */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Main Description */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <p className="text-xl text-gray-200 leading-relaxed">
                  Нашият инженерен подход изисква пълна отдаденост и дълбок фокус върху бизнеса на всеки наш клиент. Затова работим с ограничен брой компании едновременно, за да гарантираме реални резултати. Разберете дали вашият бизнес е подходящ за нашата система.
                </p>
              </div>

              {/* Trust Indicators List */}
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">Безплатна консултация</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">Без ангажименти</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">100% поверителност</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Clock className="w-6 h-6 text-[var(--pravdast-yellow)] flex-shrink-0" />
                  <span className="text-lg text-gray-300">Отговор в <span className="text-[var(--pravdast-yellow)] font-semibold">48 часа</span></span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">Процес само <span className="text-green-400 font-semibold">5 минути</span></span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Premium CTA Button */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Multi-Layer Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--pravdast-yellow)] via-amber-400 to-[var(--pravdast-yellow)] rounded-3xl blur-2xl opacity-30"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--pravdast-yellow)]/50 to-amber-400/50 rounded-2xl blur-lg opacity-40"></div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-[var(--pravdast-yellow)] via-amber-400 to-[var(--pravdast-yellow)] text-slate-900 hover:from-amber-400 hover:via-[var(--pravdast-yellow)] hover:to-amber-400 text-2xl font-bold py-8 px-12 rounded-2xl shadow-2xl hover:shadow-[0_0_80px_rgba(236,182,40,0.5)] transition-all duration-500 relative overflow-hidden group border-0 min-w-[320px]"
                    onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      Кандидатствайте за място
                      <ArrowRight className="w-7 h-7 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                    </span>
                    
                    {/* Animated Shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      initial={{ x: "-200%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 1 }}
                    />
                    
                    {/* Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-white/30"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};