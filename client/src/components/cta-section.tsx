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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Premium Status Badge */}
          <motion.div
            className="text-center mb-16"
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
            {/* Main Headline */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Приемаме до{" "}
                <motion.span
                  className="relative inline-block mx-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#ECB629] to-[#F59E0B] rounded-3xl text-6xl md:text-7xl font-black text-black shadow-2xl border-4 border-white/20">
                    3
                  </span>
                  <motion.div
                    className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-white text-sm font-bold">!</span>
                  </motion.div>
                </motion.span>
                нови партньори за следващото тримесечие
              </h2>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Работим само с компании, които са готови за сериозен растеж. 
                Ние избираме партньорите си внимателно и 
                <span className="text-[#ECB629] font-semibold">
                  {" "}
                  оценяваме дали сте подходящи за нашите системи.
                </span>
              </motion.p>
            </motion.div>

            {/* Trust Indicators with Bounce Animation */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                "Без ангажименти",
                "48 часа отговор", 
                "100% поверителност"
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.5,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-2 h-1 bg-white rounded-full rotate-45"></div>
                  </motion.div>
                  <span className="text-white font-medium text-sm">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="space-y-6 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black text-white text-xl font-bold py-6 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center gap-3">
                  <span>Безплатна консултация</span>
                  <ArrowRight className="w-6 h-6" />
                </div>
              </motion.a>

              <motion.a
                href="tel:+359879282299"
                className="block w-full bg-slate-800/80 border-2 border-slate-600/50 hover:border-[#ECB629]/50 hover:bg-slate-700/80 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>Обадете се сега</span>
                </div>
              </motion.a>

              {/* Response Promise */}
              <motion.div
                className="text-center space-y-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="text-gray-400 font-medium">
                  Прецизна селекция на партньори
                </div>
                <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Детайлна оценка</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Взаимна подходящост</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
