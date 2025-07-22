"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Zap,
  Clock,
  Shield,
} from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/5 via-transparent to-[#ECB629]/5"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(236, 182, 40, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Geometric Accents */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-[#ECB629]/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border border-blue-400/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-slate-600/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Premium Status Badge */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-slate-800/80 backdrop-blur-xl border border-[#ECB629]/30 rounded-full px-8 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-[#ECB629] rounded-full"></div>
                  <motion.div
                    className="absolute inset-0 w-3 h-3 bg-[#ECB629] rounded-full opacity-40"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <Zap className="w-5 h-5 text-[#ECB629]" />
              </div>
              <span className="text-white font-bold text-base tracking-wide">
                Ограничени места за 2025
              </span>
            </div>
          </motion.div>

          {/* Modern Content Layout */}
          <div className="text-center space-y-16">
            {/* Headline Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Готови ли сте да спрете</span>
                <br />
                <span className="text-white">да залагате на </span>
                <span className="text-[#ECB629] relative">
                  късмет?
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>

              <motion.div
                className="max-w-3xl mx-auto space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Приемаме до{" "}
                  <span className="text-[#ECB629] font-bold">
                    3 нови партньори
                  </span>{" "}
                  за следващото тримесечие.
                </p>

                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Работим с ограничен брой клиенти, за да осигурим максимално
                  внимание и резултати за всеки проект.
                </p>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { icon: CheckCircle, text: "Безплатна консултация" },
                { icon: Shield, text: "Без ангажименти" },
                { icon: Clock, text: "Отговор в 48 часа" },
                { icon: Zap, text: "Процес 5 минути" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 group hover:border-[#ECB629]/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-8 h-8 text-[#ECB629] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-300 text-center">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Primary CTA */}
              <motion.button
                className="group relative bg-[#ECB629] text-black px-12 py-6 rounded-2xl font-bold text-xl hover:bg-[#ECB629]/90 transition-all duration-300 shadow-2xl hover:shadow-[#ECB629]/25 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  window.open(
                    "https://form.typeform.com/to/GXLaGY98",
                    "_blank",
                  );
                }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse" />
                <span className="relative z-10 flex items-center gap-3">
                  Започнете с безплатна диагностика
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                className="group flex items-center justify-center gap-3 text-[#ECB629] hover:text-white transition-colors duration-300 mx-auto"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  window.open("tel:+359879282299", "_self");
                }}
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">
                  Или се обадете: +359 879 282 299
                </span>
              </motion.button>
            </motion.div>

            {/* Warning Section */}
            {/*<motion.div
              className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
            </motion.div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};
