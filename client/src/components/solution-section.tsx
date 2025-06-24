import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Technical Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="solution-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="var(--pravdast-yellow)" opacity="0.4"/>
              <path d="M0,20 L40,20 M20,0 L20,40" stroke="var(--pravdast-yellow)" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="5" cy="5" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
              <circle cx="35" cy="35" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#solution-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Connection line from previous section */}
        <motion.div
          className="w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 mx-auto mb-16"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-6 py-3 bg-[var(--pravdast-yellow)]/10 rounded-full border border-[var(--pravdast-yellow)]/20 mb-8">
            <span className="text-[var(--pravdast-yellow)] text-sm font-semibold tracking-wider">ИНЖЕНЕРЕН ПОДХОД</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Спрете да залагате. Време е за система
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ние не предлагаме маркетинг. Нашият подход е бизнес инженеринг. Разликата е в резултата:
          </p>
        </motion.div>
        
        {/* Enhanced Comparison */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          <motion.div
            className="relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-red-500/30 overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/5 opacity-50"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full -translate-y-12 translate-x-12"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-4 h-4 mx-auto mb-6 bg-red-500 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-bold mb-6 text-white comparison-strikethrough">
                Маркетинг
              </h3>
              <p className="text-gray-300 italic leading-relaxed">
                Предположения, неясни резултати, рискови разходи.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-[var(--pravdast-yellow)]/30 overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--pravdast-yellow)]/10 to-[var(--pravdast-yellow)]/5 opacity-50"></div>
            <div className="absolute top-0 left-0 w-24 h-24 bg-[var(--pravdast-yellow)]/10 rounded-full -translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-4 h-4 mx-auto mb-6 bg-[var(--pravdast-yellow)] rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-bold mb-6 text-[var(--pravdast-yellow)]">
                Бизнес инженеринг
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Данни, структура, измерими резултати, предвидимост.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
