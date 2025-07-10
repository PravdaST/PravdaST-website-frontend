'use client';

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Clock, Shield, Zap } from "lucide-react";

export default function CTASection() {
  const trustIndicators = [
    { icon: CheckCircle, text: "Безплатна консултация" },
    { icon: Shield, text: "Без ангажименти" },
    { icon: Clock, text: "Отговор в 48 часа" },
    { icon: Zap, text: "Процес 5 минути" },
  ];

  return (
    <section className="py-20 bg-[#ECB629] relative overflow-hidden">
      {/* Complex Background System */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Connection Networks */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-black rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Premium Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-black/10 border border-black/20 rounded-full mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <motion.div
                    className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full opacity-30"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <span className="text-black font-bold text-sm">
                  Остават 3 места за 2025
                </span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Приемаме до{" "}
                <span className="relative">
                  <span className="text-6xl md:text-7xl font-black">3</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-2 bg-black/20 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>{" "}
                нови партньори за следващото тримесечие
              </motion.h2>

              <motion.p
                className="text-lg text-black/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Работим с ограничен брой клиенти, за да осигурим максимално внимание и качество на всеки проект. Нашият персонализиран подход изисква време и ресурси, които посвещаваме изцяло на вашия успех.
              </motion.p>

              {/* Trust Indicators Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {trustIndicators.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-black/5 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent className="w-5 h-5 text-green-600" />
                      <span className="text-black font-medium text-sm">{item.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right CTA */}
            <div className="text-center md:text-left">
              <motion.div
                className="bg-black/5 backdrop-blur-sm border border-black/10 rounded-2xl p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-black mb-6">
                  Готови ли сте да спрете да залагате на късмет?
                </h3>
                
                <p className="text-black/80 mb-8">
                  Започнете с безплатна диагностика на вашия текущ маркетинг и разберете точно какво можете да подобрите.
                </p>

                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <a
                    href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-800 transition-all duration-300 group"
                  >
                    Започни диагностика
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>

                <div className="text-center">
                  <p className="text-black/60 text-sm">
                    * Диагностиката е напълно безплатна и без ангажименти
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}