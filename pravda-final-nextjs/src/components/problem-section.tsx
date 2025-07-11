import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: TrendingUp,
    title: "Инвестиция или разход?",
    description: "Наливате пари в маркетинг, но не виждате ясна възвръщаемост.",
  },
  {
    icon: Clock,
    title: "Оперативен хаос?",
    description:
      "Вместо да работите върху бизнеса си, вие работите в него и нямате време за растеж.",
  },
  {
    icon: HelpCircle,
    title: "Празни обещания?",
    description:
      "Омръзнало ви е от агенции, които обещават много, а постигат малко.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Problem Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Warning Lines */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
              style={{
                left: `${i * 25}%`,
                top: `${20 + i * 20}%`,
                width: `${20 + i * 10}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#ECB629] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-red-400 font-bold">Проблем</span> в повечето компании
              </span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Познава ли ви се?
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Проблемите са едни и същи, но повечето собственици мислят, че са уникални и няма решение.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <Card className="bg-slate-800/60 border-slate-600/30 backdrop-blur-sm h-full transition-all duration-300 hover:bg-slate-700/60 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10">
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white">
                      <problem.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed flex-grow text-sm sm:text-base">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>

              {/* Animated problem indicators */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;