import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[#ECB629] relative overflow-hidden">
      <div className="absolute inset-0">
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

        <div className="absolute inset-0 opacity-25">
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
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-md border-2 border-black/40 shadow-2xl">
              <div className="relative flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-1 h-6 bg-gradient-to-t from-red-500 to-orange-500 rounded-full"></div>
              </div>
              <span className="text-base text-black font-black tracking-widest uppercase">
                ОГРАНИЧЕНИ МЕСТА ЗА Q1 2025
              </span>
              <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-black/15 via-black/8 to-black/12 border-2 border-black/30 backdrop-blur-lg p-10 md:p-16 shadow-2xl">
              <div className="absolute inset-0">
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

              <div className="absolute top-8 right-8">
                <div className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/30 to-red-500/30 border-2 border-orange-500/50 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-orange-800 font-bold tracking-wide uppercase">
                    🔥 URGENT
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
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
                    <span className="inline-block relative mx-4">
                      <span className="relative z-10 inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-black/20 via-orange-500/10 to-black/20 border-3 border-black/30 backdrop-blur-sm text-7xl md:text-8xl font-black text-black shadow-2xl">
                        3
                      </span>
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: '50% 50%',
                            transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-${20 + i * 5}px)`,
                          }}
                        />
                      ))}
                    </span>
                    {" "}нови партньори за следващото тримесечие.
                  </motion.h2>

                  <motion.div 
                    className="bg-gradient-to-r from-black/10 to-black/5 backdrop-blur-sm rounded-2xl p-6 border border-black/15 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-lg text-black/90 leading-relaxed font-medium">
                      Нашият инженерен подход изисква пълна отдаденост и дълбок фокус върху бизнеса на всеки наш клиент. Затова работим с ограничен брой компании едновременно.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {[
                      "Безплатна консултация",
                      "Без ангажименти", 
                      "100% поверителност",
                      "Отговор в 48 часа",
                      "Процес само 5 минути"
                    ].map((text, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-black font-semibold text-sm">{text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center justify-center space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full max-w-sm space-y-4">
                    <motion.a
                      href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full bg-gradient-to-r from-black to-gray-800 text-[#ECB629] hover:from-black/90 hover:to-gray-800/90 text-xl font-bold py-8 px-10 rounded-2xl shadow-2xl hover:shadow-black/30 transition-all duration-300 relative overflow-hidden group border border-black/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="relative z-10">Започнете сега</span>
                    </motion.a>
                    
                    <motion.a
                      href="tel:+359879282299"
                      className="inline-flex items-center justify-center gap-3 w-full bg-transparent border-2 border-black/30 hover:border-black/50 text-black hover:bg-black/5 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-5 h-5" />
                      <span>Обадете се сега</span>
                    </motion.a>
                  </div>

                  <motion.div
                    className="text-center space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-sm text-black/70 font-medium">Отговаряме на всички запитвания</div>
                    <div className="flex items-center justify-center gap-4 text-xs text-black/60">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span>24h максимум</span>
                      </div>
                      <div className="w-1 h-1 bg-black/30 rounded-full"></div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span>100% поверителност</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};