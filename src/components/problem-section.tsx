import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: TrendingUp,
    title: "Инвестиция или разход?",
    description: "Наливате пари в маркетинг, но не виждате ясна възвръщаемост."
  },
  {
    icon: Clock,
    title: "Оперативен хаос?",
    description: "Вместо да работите върху бизнеса си, Вие работите в него и нямате време за растеж."
  },
  {
    icon: HelpCircle,
    title: "Празни обещания?",
    description: "Омръзнало ви е от агенции, които обещават много, а постигат малко."
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Problem Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Warning Lines */}
          {[...Array(4)].map((_, i) => (
            <div div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
              style={{
                left: `${i * 25}%`,
                top: `${20 + i * 20}%`,
                width: `${20 + i * 10}%`,
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#ECB629] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div div
          className="text-center mb-16"
          <div div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div div
                  className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full opacity-20"
                />
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Системна</span> диагностика на проблемите
              </span>
            </div>
          </div div>

          <div h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            Още ли залагате на <br />
            <span className="text-[#ECB629] relative">
              маркетинг?
              <div div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
              />
            </span>
          </div h2>

          <div p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            Повечето компании губят време и пари, защото разчитат на случайни тактики вместо на системи.
          </div p>
        </div div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div div
              key={index}
                {/* Hover Glow Effect */}
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative mb-6">
                      <problem.icon className="w-8 h-8 text-red-500" />
                    </div>
                    <div div
                      className="absolute inset-0 bg-red-500 rounded-full opacity-5"
                    />
                  </div>
                  
                    {problem.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  {/* Problem Indicator */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            </div div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
