import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[#ECB629] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-black rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Urgency Badge */}
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-black/10 backdrop-blur-sm border border-black/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm text-black font-semibold">
                Ограничени места за 2025
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Готови ли сте да спрете да залагате на късмет?
          </motion.h2>

          <motion.p
            className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Приемаме до 3 нови партньори за следващото тримесечие. Започнете с безплатна консултация.
          </motion.p>

          {/* Trust Signals */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-black/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Безплатна консултация</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Без ангажименти</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>100% поверителност</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Отговор в 48 часа</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Процес 5 минути</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-[#ECB629] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Безплатна консултация</span>
              <ArrowRight className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="tel:+359879282299"
              className="block w-full max-w-sm mx-auto bg-slate-800/80 border-2 border-slate-600/50 hover:border-[#ECB629]/50 hover:bg-slate-700/80 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-xl"
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
              <div className="text-gray-600 font-medium">
                Ние работим прецизно и внимателно преценяваме всеки случай.
              </div>
              <div className="text-sm text-gray-700 max-w-2xl mx-auto">
                Процесът на консултация не е просто услуга, а детайлна оценка на възможностите за партньорство.
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};