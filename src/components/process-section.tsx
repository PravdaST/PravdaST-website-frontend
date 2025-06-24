import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Cog, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Стъпка 1: Диагностика",
    description: "Анализираме вашия бизнес и данни, за да открием къде точно губите ефективност и потенциални приходи."
  },
  {
    icon: Cog,
    title: "Стъпка 2: Изграждане",
    description: "Проектираме и изграждаме нужната система (или комбинация от системи), за да решим конкретния, диагностициран проблем."
  },
  {
    icon: TrendingUp,
    title: "Стъпка 3: Оптимизация",
    description: "Следим данните в реално време и правим постоянни подобрения, за да увеличим максимално вашата възвръщаемост."
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-slate-800/30 relative overflow-hidden">
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
            <div div
              key={i}
              className="absolute w-24 h-px bg-gradient-to-r from-[#ECB629] to-transparent"
              style={{
                left: `${25 + i * 25}%`,
                top: '50%',
                transform: 'translateY(-50%)',
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                <div
                  className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full opacity-20 animate-ping"
                />
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Контролиран</span> процес за предвидим растеж
              </span>
            </div>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Прозрачен процес. <br />
            <span className="text-[#ECB629] relative">
              Предвидими резултати.
              <div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
              />
            </span>
          </h2>

          <p 
            className="text-xl text-gray-300 max-w-4xl mx-auto"
          >
            Ние не работим с предположения. Следваме строго дефиниран инженерен процес в 3 стъпки, който гарантира, че всяко решение е базирано на данни.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-[#ECB629]/30 transition-all duration-300 h-full relative group">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-[#ECB629]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-[#ECB629] rounded-full flex items-center justify-center mx-auto relative">
                      <step.icon className="text-black text-2xl" size={32} />
                    </div>
                    <div
                      className="absolute inset-0 bg-[#ECB629] rounded-full opacity-5"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[#ECB629]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#ECB629] font-bold text-sm">{index + 1}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
