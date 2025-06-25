import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[#ECB629] relative overflow-hidden">
      {/* Ultra-Modern Animated Background System */}
      <div className="absolute inset-0">
        {/* Dynamic Grid Pattern with Depth */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.15) 2px, transparent 2px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.15) 2px, transparent 2px),
              linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px'
          }}></div>
        </div>

        {/* Floating Connection Network */}
        <div className="absolute inset-0 opacity-25">
          {/* Connection Lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute bg-black/20 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                width: '2px',
                height: '60px',
                transformOrigin: 'center',
              }}
              animate={{
                scaleY: [0.5, 1.2, 0.5],
                opacity: [0.2, 0.8, 0.2],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Dynamic Data Nodes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute rounded-full border-2 border-black/30"
              style={{
                left: `${8 + i * 8}%`,
                top: `${15 + (i % 4) * 20}%`,
                width: `${12 + (i % 3) * 8}px`,
                height: `${12 + (i % 3) * 8}px`,
              }}
              animate={{
                scale: [0.8, 1.4, 0.8],
                opacity: [0.3, 0.9, 0.3],
                borderWidth: [1, 3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Pulsing Energy Cores */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`core-${i}`}
              className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-black/40 to-black/20"
              style={{
                left: `${20 + i * 20}%`,
                top: `${25 + (i % 2) * 50}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.4, 0.8, 0.4],
                boxShadow: [
                  '0 0 20px rgba(0,0,0,0.2)',
                  '0 0 40px rgba(0,0,0,0.4)',
                  '0 0 20px rgba(0,0,0,0.2)'
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Background Elements with Animation */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-black/60 to-orange-600/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-orange-600/50 to-red-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-yellow-600/30 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Ultra-Modern Status Badge */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/30 to-orange-500/30 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main badge */}
              <div className="relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-md border-2 border-black/40 shadow-2xl">
                {/* Animated urgency indicator */}
                <div className="relative flex items-center gap-2">
                  <div className="relative">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <motion.div
                      className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.8, 0, 0.8],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                    />
                  </div>
                  <motion.div
                    className="w-1 h-6 bg-gradient-to-t from-red-500 to-orange-500 rounded-full"
                    animate={{
                      scaleY: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Enhanced text with shimmer effect */}
                <motion.span 
                  className="text-base text-black font-black tracking-widest uppercase bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                >
                  ОГРАНИЧЕНИ МЕСТА ЗА Q1 2025
                </motion.span>

                {/* Trailing elements */}
                <div className="flex items-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      animate={{
                        scale: [0.5, 1.2, 0.5],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-red-500 rounded-tl-lg"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-orange-500 rounded-tr-lg"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-orange-500 rounded-bl-lg"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-red-500 rounded-br-lg"></div>
            </motion.div>
          </motion.div>

          {/* Ultra-Premium Main Content Card */}
          <div className="relative">
            {/* Outer glow effect */}
            <motion.div
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-black/20 via-orange-500/10 to-black/20 blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main CTA Card */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-black/15 via-black/8 to-black/12 border-2 border-black/30 backdrop-blur-lg p-10 md:p-16 shadow-2xl">
              {/* Advanced Background Pattern System */}
              <div className="absolute inset-0">
                {/* Primary diamond pattern */}
                <div className="absolute inset-0 opacity-8" style={{
                  backgroundImage: `
                    linear-gradient(45deg, rgba(0, 0, 0, 0.15) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(0, 0, 0, 0.15) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.05) 75%),
                    linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.05) 75%)
                  `,
                  backgroundSize: '60px 60px, 60px 60px, 60px 60px, 60px 60px',
                  backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
                }}></div>

                {/* Floating geometric elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`geo-${i}`}
                    className="absolute opacity-20"
                    style={{
                      left: `${10 + i * 15}%`,
                      top: `${20 + (i % 3) * 30}%`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.8,
                    }}
                  >
                    <div className="w-8 h-8 border-2 border-black/40 transform rotate-45"></div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Status Badge */}
              <div className="absolute top-8 right-8">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/40 to-red-500/40 blur-lg"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/30 to-red-500/30 border-2 border-orange-500/50 backdrop-blur-sm">
                    <motion.div 
                      className="w-3 h-3 bg-orange-500 rounded-full"
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(249, 115, 22, 0.5)',
                          '0 0 20px rgba(249, 115, 22, 0.8)',
                          '0 0 10px rgba(249, 115, 22, 0.5)'
                        ],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-orange-500 rounded-full"
                        animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      />
                    </motion.div>
                    <span className="text-sm text-orange-800 font-bold tracking-wide uppercase">
                      🔥 URGENT
                    </span>
                  </div>
                </motion.div>
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
                    className="text-4xl md:text-6xl font-bold text-black leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Приемаме до{" "}
                    <motion.span
                      className="inline-block relative mx-4"
                      initial={{ scale: 0.8, rotate: -5 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                      {/* Multiple glow layers */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-3xl blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-lg"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      />
                      
                      {/* Main number container */}
                      <span className="relative z-10 inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-black/20 via-orange-500/10 to-black/20 border-3 border-black/30 backdrop-blur-sm text-7xl md:text-8xl font-black text-black shadow-2xl">
                        <motion.span
                          animate={{
                            textShadow: [
                              '0 0 20px rgba(0,0,0,0.3)',
                              '0 0 30px rgba(0,0,0,0.5)',
                              '0 0 20px rgba(0,0,0,0.3)'
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          3
                        </motion.span>
                      </span>

                      {/* Orbiting elements */}
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                          style={{
                            top: '50%',
                            left: '50%',
                            originX: 0.5,
                            originY: 0.5,
                          }}
                          animate={{
                            rotate: [0, 360],
                            x: Math.cos((i * Math.PI) / 2) * 50,
                            y: Math.sin((i * Math.PI) / 2) * 50,
                            scale: [0.5, 1, 0.5],
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.25,
                          }}
                        />
                      ))}

                      {/* Corner sparkles */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                        animate={{
                          scale: [0, 1.2, 0],
                          rotate: [0, 180, 360],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                        animate={{
                          scale: [0, 1, 0],
                          rotate: [360, 180, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
