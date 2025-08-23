'use client'

import { motion } from "framer-motion"
import ScaleOnHover from "@/components/motion/ScaleOnHover"
import SlideIn from "@/components/motion/SlideIn";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Settings, TrendingUp } from "lucide-react";
import PravdaHeading from "@/components/typography/PravdaHeading";

const steps = [
  {
    icon: Search,
    title: "Диагностика",
    description: "Анализираме вашия бизнес и данни, за да открием къде точно губите ефективност и потенциални приходи."
  },
  {
    icon: Settings,
    title: "Изграждане", 
    description: "Проектираме и изграждаме нужната система (или комбинация от системи), за да решим конкретния, диагностициран проблем."
  },
  {
    icon: TrendingUp,
    title: "Оптимизация",
    description: "Следим данните в реално време и правим постоянни подобрения, за да увеличим максимално вашата възвръщаемост."
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0">
          {/* Process Flow Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Process Connection Lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 20}%`,
                width: `${15 + i * 10}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SlideIn
          direction="up"
          distance={30}
          duration={0.6}
          className="text-center mb-12 sm:mb-16"
        >
          <SlideIn
            direction="up"
            distance={20}
            duration={0.6}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full glassmorphism"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                <div className="absolute inset-0 bg-[#ECB629] rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Контролиран</span> процес за предвидими резултати
              </span>
            </div>
          </SlideIn>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <PravdaHeading as="h2" size="4xl" className="md:text-5xl mb-6">
            Прозрачен процес.{" "}
            <span className="text-[#ECB629]">Предвидими резултати.</span>
            </PravdaHeading>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ние не работим с предположения. Следваме строго дефиниран инженерен процес в 3 стъпки, който гарантира, че всяко решение е базирано на данни.
          </motion.p>
        </SlideIn>

        {/* Modern Card-Based Timeline */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <Card className="bg-slate-700 border-slate-600/30 h-full relative overflow-hidden group-hover:border-[#ECB629]/50 transition-all duration-300">
                {/* Step Number Badge */}
                <div className="absolute top-6 right-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#ECB629] rounded-full">
                    <span className="text-lg font-bold text-black">{index + 1}</span>
                  </div>
                </div>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(236, 182, 40, 0.15) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(236, 182, 40, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                <CardContent className="p-8 relative z-10">
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 bg-[#ECB629] rounded-xl mb-6 text-black"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <step.icon />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>

                {/* Hover Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ECB629]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Connection Line (except last item) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#ECB629] to-transparent hidden md:block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: (index + 1) * 0.3 }}
                    viewport={{ once: true }}
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};