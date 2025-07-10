'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-600/10 border border-orange-600/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Business Engineering Platform
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-orange-100 bg-clip-text text-transparent">
              Предсказуем растеж за <span className="text-orange-400">B2B компании</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Създаваме системи за устойчив растеж с нашите три продукта: 
              <span className="text-orange-400 font-semibold"> SEO Struktor™</span>, 
              <span className="text-orange-400 font-semibold"> Clientomat™</span> и 
              <span className="text-orange-400 font-semibold"> TrendLab™</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/contact">
                Безплатна консултация
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Link href="/services">
                Виж услугите
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                metric: "300%",
                description: "Средно увеличение на leads"
              },
              {
                metric: "6 месеца",
                description: "До първите резултати"
              },
              {
                metric: "50+",
                description: "Успешни B2B проекта"
              }
            ].map((stat, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <div className="text-3xl font-bold text-orange-400 mb-2">{stat.metric}</div>
                <div className="text-slate-300">{stat.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}