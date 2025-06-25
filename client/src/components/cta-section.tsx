import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[#ECB629] relative overflow-hidden">
      {/* Enhanced Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* CTA Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Floating Connection Nodes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-black/30 rounded-full"
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.6, 0.2],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-black rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Urgency Badge */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-sm border border-black/30 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <motion.div
                    className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full opacity-40"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <span className="text-sm text-black font-bold tracking-wide">
                  ОГРАНИЧЕНИ МЕСТА ЗА Q1 2025
                </span>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Main Content - Modern Card Layout */}
          <div className="relative">
            {/* Main CTA Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/10 to-black/5 border border-black/20 backdrop-blur-sm p-8 md:p-12">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%)
                  `,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40">
                  <div className="w-2 h-2 bg-orange-500 rounded-full">
                    <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-xs text-orange-700 font-medium">URGENT</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Column - Enhanced Text Content */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-black leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Приемаме до{" "}
                    <motion.span
                      className="inline-block relative"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-6xl md:text-7xl font-black text-black relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-black/20">
                        3
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.span>{" "}
                    нови партньори за следващото тримесечие.
                  </motion.h2>

                  <motion.div
                    className="bg-gradient-to-r from-black/10 to-black/5 backdrop-blur-sm rounded-2xl p-6 border border-black/15 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-lg text-black/90 leading-relaxed font-medium">
                      Нашият инженерен подход изисква пълна отдаденост и дълбок
                      фокус върху бизнеса на всеки наш клиент. Затова работим с
                      ограничен брой компании едновременно.
                    </p>
                  </motion.div>

                  {/* Enhanced Trust Indicators */}
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {[
                      "Безплатна консултация",
                      "Без ангажименти", 
                      "100% поверителност",
                      "Отговор в 48 часа",
                      "Процес само 5 минути",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-1 bg-white rounded-full rotate-45"></div>
                        </div>
                        <span className="text-black font-semibold text-sm">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Right Column - Enhanced Action Buttons */}
                <motion.div
                  className="flex flex-col items-center justify-center space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {/* Primary Button - Enhanced */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full max-w-sm"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-black to-gray-800 text-[#ECB629] hover:from-black/90 hover:to-gray-800/90 text-xl font-bold py-8 px-10 rounded-2xl shadow-2xl hover:shadow-black/30 transition-all duration-300 relative overflow-hidden group border border-black/20"
                      asChild
                    >
                      <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/10 via-transparent to-[#ECB629]/10 opacity-0 group-hover:opacity-100"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          Безплатна консултация
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                      </a>
                    </Button>
                  </motion.div>

                  {/* Secondary Button - Enhanced */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full max-w-sm"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-black text-black hover:bg-black hover:text-[#ECB629] text-lg font-semibold py-6 px-8 rounded-2xl transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm"
                      asChild
                    >
                      <a href="/case-studies" className="flex items-center justify-center gap-3">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                        />
                        <Eye className="w-5 h-5" />
                        Вижте казуси
                      </a>
                    </Button>
                  </motion.div>

                  {/* Visual Enhancement */}
                  <div className="text-center mt-4">
                    <div className="flex items-center justify-center gap-2 text-black/60 text-sm">
                      <div className="w-8 h-px bg-black/20"></div>
                      <span className="font-medium">Или</span>
                      <div className="w-8 h-px bg-black/20"></div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Success Elements */}
              <div className="absolute bottom-6 left-6 opacity-20">
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-black/40 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom urgency message */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 p-8 backdrop-blur-sm">
              {/* Warning Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      45deg,
                      rgba(239, 68, 68, 0.1) 0px,
                      rgba(239, 68, 68, 0.1) 10px,
                      transparent 10px,
                      transparent 20px
                    )
                  `
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div 
                    className="w-4 h-4 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-red-600 text-sm font-bold tracking-wider uppercase">
                    Важно предупреждение
                  </span>
                  <motion.div 
                    className="w-4 h-4 bg-orange-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
                <p className="text-black/80 text-lg font-medium leading-relaxed">
                  Всеки ден на изчакване е изгубена възможност. Вашите конкуренти не спят.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
