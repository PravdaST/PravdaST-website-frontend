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
        <motion.div
          className="absolute top-1/2 right-10 w-16 h-16 border border-[var(--pravdast-yellow)]/30 rounded-full"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--pravdast-yellow)] to-amber-400 rounded-xl blur-xl opacity-20"
                  animate={{
                    rotate: [0, 360],
                    scale: [0.9, 1.1, 0.9]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
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

                {/* Floating Sparkles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.span>{" "}
              нови партньори за следващото тримесечие.
            </h2>
          </motion.div>

          {/* Two-Column Advanced Layout */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Description and Trust Elements */}
            <motion.div
              className="lg:col-span-3 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Main Description Card */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/50 to-slate-700/50 rounded-3xl blur"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl p-10 border border-slate-600/30 backdrop-blur-sm">
                  <p className="text-2xl text-gray-200 leading-relaxed font-medium">
                    Нашият инженерен подход изисква пълна отдаденост и дълбок фокус върху бизнеса на всеки наш клиент. Затова работим с ограничен брой компании едновременно, за да гарантираме реални резултати. Разберете дали вашият бизнес е подходящ за нашата система.
                  </p>
                </div>
              </div>

              {/* Trust Indicators Grid */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-6 border border-slate-700/40 backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--pravdast-yellow)]/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[var(--pravdast-yellow)]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Отговор в</p>
                      <p className="text-xl font-bold text-[var(--pravdast-yellow)]">48 часа</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-6 border border-slate-700/40 backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Процес само</p>
                      <p className="text-xl font-bold text-green-400">5 минути</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Premium CTA Card */}
            <motion.div
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Multi-Layer Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--pravdast-yellow)] via-amber-400 to-[var(--pravdast-yellow)] rounded-4xl blur-xl opacity-25"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--pravdast-yellow)]/40 to-amber-400/40 rounded-3xl blur opacity-50"></div>
              
              <div className="relative bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 rounded-3xl p-10 border border-[var(--pravdast-yellow)]/20 backdrop-blur-sm shadow-2xl">
                {/* Premium CTA Button */}
                <motion.div
                  className="mb-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-[var(--pravdast-yellow)] via-amber-400 to-[var(--pravdast-yellow)] text-slate-900 hover:from-amber-400 hover:via-[var(--pravdast-yellow)] hover:to-amber-400 text-2xl font-bold py-8 px-8 rounded-2xl shadow-2xl hover:shadow-[0_0_60px_rgba(236,182,40,0.4)] transition-all duration-500 relative overflow-hidden group border-0"
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
                
                {/* Status and Guarantees */}
                <div className="text-center space-y-6">
                  {/* Primary Status */}
                  <div className="flex items-center justify-center gap-3">
                    <motion.div 
                      className="w-4 h-4 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <p className="text-[var(--pravdast-yellow)] font-bold text-lg">
                      Ще се свържем с вас в рамките на 48 часа,
                    </p>
                  </div>
                  
                  {/* Secondary Info */}
                  <p className="text-gray-300 text-base">
                    целият процес отнема само 5 минути
                  </p>
                  
                  {/* Security and Trust Badges */}
                  <div className="pt-6 border-t border-slate-700/50 space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-400">Безплатна консултация</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-400">Без ангажименти</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-400">100% поверителност</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};