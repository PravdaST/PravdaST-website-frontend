import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle, AlertCircle, Zap } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,var(--pravdast-dark)_1px,transparent_1px)] bg-[length:32px_32px] opacity-5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--pravdast-dark)_1px,transparent_1px)] bg-[length:64px_64px] opacity-3"></div>
        
        {/* Floating Tech Elements */}
        <motion.div
          className="absolute top-16 left-8 w-20 h-20 border border-[var(--pravdast-dark)]/10 rounded-lg"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 45, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-12 w-16 h-16"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full border-2 border-[var(--pravdast-dark)]/8 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[var(--pravdast-dark)]/5 rounded-full"></div>
        </motion.div>
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--pravdast-yellow)]/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Premium Urgency Badge */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500/90 to-orange-500/90 border border-red-400/50 rounded-full backdrop-blur-sm shadow-lg">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <AlertCircle className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-white font-bold text-sm uppercase tracking-wider drop-shadow-sm">
                  Ограничени места
                </span>
              </div>
            </div>
          </motion.div>

          {/* Epic Main Headline */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-[var(--pravdast-dark)]">
              Приемаме до{" "}
              <motion.span 
                className="inline-block relative mx-2"
                initial={{ scale: 0.3, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.5, type: "spring", bounce: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-7xl md:text-8xl font-black text-[var(--pravdast-dark)] relative z-10 drop-shadow-xl">
                  3
                </span>
                
                {/* Multi-dimensional glow system */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-[var(--pravdast-dark)]/10 rounded-xl blur-lg"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                {/* Success indicator */}
                <motion.div
                  className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2, type: "spring", bounce: 0.8 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </motion.div>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.span>{" "}
              нови партньори за следващото тримесечие.
            </h2>
          </motion.div>

          {/* Advanced Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Enhanced Description + Trust Signals */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Premium Description Card */}
              <div className="relative group">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[var(--pravdast-dark)]/20 to-[var(--pravdast-dark)]/10 rounded-3xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative bg-[var(--pravdast-dark)]/5 backdrop-blur-sm rounded-3xl p-8 border border-[var(--pravdast-dark)]/15 shadow-lg">
                  <p className="text-xl text-[var(--pravdast-dark)]/90 leading-relaxed font-medium">
                    Нашият инженерен подход изисква пълна отдаденост и дълбок фокус върху бизнеса на всеки наш клиент. Затова работим с ограничен брой компании едновременно, за да гарантираме реални резултати. Разберете дали вашият бизнес е подходящ за нашата система.
                  </p>
                </div>
              </div>

              {/* Elegant Trust Indicators */}
              <div className="space-y-5">
                {[
                  { icon: CheckCircle, text: "Безплатна консултация", color: "text-green-600" },
                  { icon: CheckCircle, text: "Без ангажименти", color: "text-green-600" },
                  { icon: CheckCircle, text: "100% поверителност", color: "text-green-600" },
                  { icon: Clock, text: "Отговор в 48 часа", color: "text-[var(--pravdast-dark)]", highlight: "48 часа" },
                  { icon: Zap, text: "Процес само 5 минути", color: "text-[var(--pravdast-dark)]", highlight: "5 минути" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                  >
                    <motion.div
                      className={`w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg border border-[var(--pravdast-dark)]/10`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </motion.div>
                    <span className="text-lg text-[var(--pravdast-dark)]/85 font-medium group-hover:text-[var(--pravdast-dark)] transition-colors duration-200">
                      {item.highlight ? (
                        <>
                          {item.text.split(item.highlight)[0]}
                          <span className="font-bold text-[var(--pravdast-dark)]">{item.highlight}</span>
                          {item.text.split(item.highlight)[1]}
                        </>
                      ) : (
                        item.text
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Ultra-Premium CTA */}
            <motion.div
              className="flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Epic Multi-Layer Glow System */}
                <motion.div
                  className="absolute -inset-6 bg-gradient-to-r from-amber-400/40 via-orange-400/40 to-red-400/40 rounded-3xl blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -inset-3 bg-gradient-to-r from-[var(--pravdast-dark)]/30 to-[var(--pravdast-dark)]/20 rounded-2xl blur-lg"
                  animate={{
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                {/* The Ultimate CTA Button */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{ perspective: 1000 }}
                >
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-[var(--pravdast-dark)] via-slate-800 to-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] hover:from-slate-800 hover:via-[var(--pravdast-dark)] hover:to-slate-800 text-xl font-bold py-8 px-10 rounded-2xl shadow-2xl hover:shadow-[0_0_60px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden group border-2 border-[var(--pravdast-dark)]/20 min-w-[300px]"
                    onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      Кандидатствайте за място
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                      </motion.div>
                    </span>
                    
                    {/* Revolutionary Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--pravdast-yellow)]/30 to-transparent skew-x-12"
                      initial={{ x: "-200%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Breathing Border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-[var(--pravdast-yellow)]/40"
                      animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Corner Accent Elements */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[var(--pravdast-yellow)]/60 rounded-tl-lg"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[var(--pravdast-yellow)]/60 rounded-br-lg"></div>
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