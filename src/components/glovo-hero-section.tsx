"use client";

import { motion } from "framer-motion";
import PravdaHeading from "@/components/typography/PravdaHeading";
import PravdaText from "@/components/typography/PravdaText";
import { Button } from "@/components/ui/button";
import { Calculator, Shield, Smartphone, Flag } from "lucide-react";
import Image from "next/image";
import { BulgarianCitiesSlider } from "@/components/bulgarian-cities-slider";

export const GlovoHeroSection = () => {
  return (
    <section className="relative py-20 bg-black">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <PravdaHeading
              as="h1" 
              size="7xl"
              className="leading-tight"
            >
            <span className="text-white">
              Знаете ли, че всеки месец
            </span>
            <br />
            <span className="text-red-600 font-black text-4xl sm:text-6xl md:text-7xl">
              подарявате на Glovo
            </span>
            <br />
            <span className="text-blue-900 text-4xl sm:text-6xl md:text-7xl">
              хиляди левове?
            </span>
            </PravdaHeading>
          </motion.div>

          <motion.div
            className="mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PravdaText size="xl" className="md:text-2xl mb-6 leading-relaxed text-center text-gray-300">
              <span className="text-blue-400 font-bold">Безплатен калкулатор:</span> Вижте точно колко ви струва Glovo месечно + получете персонализиран план за освобождаване за 90 дни
            </PravdaText>
          </motion.div>

          {/* Hero Visual with Generated Image */}
          <motion.div
            className="mb-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/glovo/Glovo_commission_comparison_visual_16961ca4.png"
                  alt="GLOVO комисионни срещу спестени пари - визуално сравнение"
                  fill
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border border-red-400/30 rounded-lg p-6">
                <h3 className="text-red-600 font-bold text-lg mb-4">
                  Преди - Glovo фактура
                </h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    2,400 лв
                  </div>
                  <div className="text-gray-400">
                    Месечни комисионни (30%)
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 border border-green-400/30 rounded-lg p-6">
                <h3 className="text-green-600 font-bold text-lg mb-4">
                  След - Директни поръчки
                </h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    1,000 лв
                  </div>
                  <div className="text-gray-600">Запазени приходи</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            <Button
              size="lg"
              className="group bg-blue-900 hover:bg-blue-800 text-white transition-all duration-300 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold shadow-sm rounded-lg"
              onClick={() =>
                document
                  .getElementById("calculator")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Calculator className="mr-3 w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="hidden sm:inline">Изчислете разходите си за Glovo (Безплатно)</span>
              <span className="sm:hidden">Глово калкулатор</span>
            </Button>
            
            {/* Trust Indicators - професионални икони */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>100% безплатен анализ - не се изисква плащане</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-blue-600" />
                <span>Резултати доставени за 2 минути</span>
              </div>
              <div className="flex items-center gap-2">
                <Flag className="w-4 h-4 text-red-600" />
                <span>Специализирани в български ресторанти</span>
              </div>
            </div>

            {/* Bulgarian Cities Slider */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="relative mt-8"
            >
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">
                  Работим с ресторанти в цялата страна:
                </p>
              </div>
              <BulgarianCitiesSlider />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};