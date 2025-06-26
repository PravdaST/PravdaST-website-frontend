import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Zap, Clock, Shield } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[#ECB629] relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-15 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`floating-${i}`}
            className="absolute w-2 h-2 bg-black/20 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Status Badge */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-black/20 backdrop-blur-sm border border-black/30 rounded-full px-6 py-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <Zap className="w-4 h-4 text-black" />
              </div>
              <span className="text-black font-bold text-sm uppercase tracking-wide">
                Ограничени места за Q1 2025
              </span>
            </div>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            className="bg-black/10 backdrop-blur-sm rounded-3xl border border-black/20 p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-black leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Приемаме до{" "}
                  <span className="relative inline-block mx-2">
                    <span className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-black/20 border-2 border-black/40 rounded-2xl text-5xl md:text-6xl font-black text-black shadow-xl">
                      3
                    </span>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </span>
                  нови партньори за следващото тримесечие.
                </motion.h2>

                <motion.div 
                  className="bg-black/10 border border-black/20 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-black/90 leading-relaxed font-medium">
                    Нашият инженерен подход изисква пълна отдаденост и дълбок фокус върху бизнеса на всеки наш клиент. Затова работим с ограничен брой компании едновременно.
                  </p>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {[
                    { text: "Безплатна консултация", icon: CheckCircle },
                    { text: "Без ангажименти", icon: Shield }, 
                    { text: "100% поверителност", icon: Shield },
                    { text: "Отговор в 48 часа", icon: Clock },
                    { text: "Процес само 5 минути", icon: Zap }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-black/5 border border-black/15 rounded-xl hover:bg-black/10 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-black font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Content - CTA */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-center space-y-4">
                  <motion.a
                    href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full bg-black hover:bg-black/90 text-[#ECB629] text-xl font-bold py-6 px-8 rounded-2xl shadow-2xl hover:shadow-black/40 transition-all duration-300 group border border-black/30"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Започнете сега</span>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+359879282299"
                    className="inline-flex items-center justify-center gap-3 w-full bg-transparent border-2 border-black/40 hover:border-black/60 hover:bg-black/10 text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Обадете се сега</span>
                  </motion.a>
                </div>

                {/* Response Promise */}
                <motion.div
                  className="text-center space-y-3 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm text-black/70 font-medium">
                    Отговаряме на всички запитвания
                  </div>
                  <div className="flex items-center justify-center gap-6 text-xs text-black/60">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-medium">24h максимум</span>
                    </div>
                    <div className="w-1 h-1 bg-black/40 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="font-medium">100% поверителност</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};