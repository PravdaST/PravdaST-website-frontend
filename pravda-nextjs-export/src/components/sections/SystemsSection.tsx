'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export function SystemsSection() {
  const systems = [
    {
      icon: TrendingUp,
      title: "SEO Struktor",
      description: "Автоматизирана SEO система за устойчив органичен трафик",
      features: ["Keyword research", "Content optimization", "Technical SEO", "Link building"],
      color: "from-green-500 to-emerald-600",
      href: "/services/seo-struktor"
    },
    {
      icon: Users,
      title: "Clientomat",
      description: "Пълна автоматизация на lead generation и nurturing процеси",
      features: ["Lead generation", "Email automation", "CRM integration", "Sales tracking"],
      color: "from-blue-500 to-cyan-600",
      href: "/services/clientomat"
    },
    {
      icon: BarChart3,
      title: "TrendLab",
      description: "Анализ на пазарни тенденции и потребителско поведение",
      features: ["Market analysis", "Competitor research", "Trend forecasting", "Consumer insights"],
      color: "from-orange-500 to-red-600",
      href: "/services/trendlab"
    }
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
            Нашите системи за растеж
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Три мощни инструмента, които работят заедно за създаване на предсказуем и устойчив растеж
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 h-full group hover:border-slate-600 transition-colors">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${system.color} flex items-center justify-center mb-4`}>
                    <system.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">{system.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">{system.description}</p>
                  <ul className="space-y-2">
                    {system.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                        <span className="text-slate-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 group-hover:border-slate-500">
                    <Link href={system.href}>
                      Научи повече
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}