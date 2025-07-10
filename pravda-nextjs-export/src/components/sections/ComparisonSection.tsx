'use client';

import { motion } from 'framer-motion';
import { Check, X, AlertTriangle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ComparisonSection() {
  const problems = [
    "Неясни маркетинг цели",
    "Разхвърляни усилия",
    "Липса на данни за решения",
    "Неизмерими резултати",
    "Хаотично планиране",
    "Непредсказуем ROI"
  ];

  const solutions = [
    "Точно дефинирани KPI-та",
    "Фокусирани системи",
    "Данни-базирани решения",
    "Измерими резултати",
    "Системно планиране",
    "Предсказуем растеж"
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Маркетинг vs <span className="text-[#ECB629]">Business Engineering</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Разликата между традиционния маркетинг и нашия систематичен подход
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problems Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Card className="h-full bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-50"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30">
                    ПРОБЛЕМ
                  </Badge>
                  <AlertTriangle className="h-8 w-8 text-red-400" />
                </div>
                <CardTitle className="text-2xl text-white">
                  Традиционен маркетинг
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <X className="w-3 h-3 text-red-400" />
                      </div>
                      <span className="text-gray-300">{problem}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solutions Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Card className="h-full bg-gradient-to-br from-[#ECB629]/10 to-green-500/10 border-[#ECB629]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ECB629]/5 to-green-500/5 opacity-50"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-[#ECB629]/20 text-[#ECB629] border-[#ECB629]/30">
                    РЕШЕНИЕ
                  </Badge>
                  <TrendingUp className="h-8 w-8 text-[#ECB629]" />
                </div>
                <CardTitle className="text-2xl text-white">
                  Business Engineering
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-[#ECB629]/20 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-[#ECB629]" />
                      </div>
                      <span className="text-gray-300">{solution}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Готови ли сте да преминете от <span className="text-red-400">проблем</span> към <span className="text-[#ECB629]">решение</span>?
            </h3>
            <p className="text-gray-300 mb-8">
              Започнете с безплатна диагностика и разберете как можем да трансформираме вашия маркетинг
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}