import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Modern SVG Icons
const DiagnosticIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C18.7614 2 21 4.23858 21 7C21 9.76142 18.7614 12 16 12C13.2386 12 11 9.76142 11 7C11 4.23858 13.2386 2 16 2Z" fill="currentColor"/>
    <path d="M4 16C4 15.4477 4.44772 15 5 15H11C11.5523 15 12 15.4477 12 16C12 16.5523 11.5523 17 11 17H5C4.44772 17 4 16.5523 4 16Z" fill="currentColor"/>
    <path d="M20 16C20 15.4477 20.4477 15 21 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H21C20.4477 17 20 16.5523 20 16Z" fill="currentColor"/>
    <path d="M8.5 22.5C8.5 21.9477 8.94772 21.5 9.5 21.5H15.5C16.0523 21.5 16.5 21.9477 16.5 22.5C16.5 23.0523 16.0523 23.5 15.5 23.5H9.5C8.94772 23.5 8.5 23.0523 8.5 22.5Z" fill="currentColor"/>
    <path d="M22.5 9.5C22.5 8.94772 22.9477 8.5 23.5 8.5H29.5C30.0523 8.5 30.5 8.94772 30.5 9.5C30.5 10.0523 30.0523 10.5 29.5 10.5H23.5C22.9477 10.5 22.5 10.0523 22.5 9.5Z" fill="currentColor"/>
    <circle cx="16" cy="26" r="3" fill="currentColor"/>
  </svg>
);

const BuildIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4C4 2.89543 4.89543 2 6 2H26C27.1046 2 28 2.89543 28 4V8C28 9.10457 27.1046 10 26 10H6C4.89543 10 4 9.10457 4 8V4Z" fill="currentColor"/>
    <path d="M4 14C4 12.8954 4.89543 12 6 12H12C13.1046 12 14 12.8954 14 14V18C14 19.1046 13.1046 20 12 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor"/>
    <path d="M18 14C18 12.8954 18.8954 12 20 12H26C27.1046 12 28 12.8954 28 14V28C28 29.1046 27.1046 30 26 30H20C18.8954 30 18 29.1046 18 28V14Z" fill="currentColor"/>
    <path d="M4 24C4 22.8954 4.89543 22 6 22H12C13.1046 22 14 22.8954 14 24V28C14 29.1046 13.1046 30 12 30H6C4.89543 30 4 29.1046 4 28V24Z" fill="currentColor"/>
  </svg>
);

const OptimizeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 26L10 22L14 26L18 20L22 24L26 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="6" cy="26" r="2" fill="currentColor"/>
    <circle cx="10" cy="22" r="2" fill="currentColor"/>
    <circle cx="14" cy="26" r="2" fill="currentColor"/>
    <circle cx="18" cy="20" r="2" fill="currentColor"/>
    <circle cx="22" cy="24" r="2" fill="currentColor"/>
    <circle cx="26" cy="18" r="2" fill="currentColor"/>
    <path d="M24 8L28 4L24 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M28 4H16C13.7909 4 12 5.79086 12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const steps = [
  {
    icon: DiagnosticIcon,
    title: "Диагностика",
    description: "Анализираме вашия бизнес и данни, за да открием къде точно губите ефективност и потенциални приходи."
  },
  {
    icon: BuildIcon,
    title: "Изграждане", 
    description: "Проектираме и изграждаме нужната система (или комбинация от системи), за да решим конкретния, диагностициран проблем."
  },
  {
    icon: OptimizeIcon,
    title: "Оптимизация",
    description: "Следим данните в реално време и правим постоянни подобрения, за да увеличим максимално вашата възвръщаемост."
  }
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
            <motion.div
              key={i}
              className="absolute w-24 h-px bg-gradient-to-r from-[#ECB629] to-transparent"
              style={{
                left: `${25 + i * 25}%`,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.7,
              }}
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
        <motion.div
          className="text-center mb-16"
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
                <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                <motion.div
                  className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full opacity-20"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Контролиран</span> процес за предвидим растеж
              </span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Прозрачен процес. <br />
            <span className="text-[#ECB629] relative">
              Предвидими резултати.
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ние не работим с предположения. Следваме строго дефиниран инженерен процес в 3 стъпки, който гарантира, че всяко решение е базирано на данни.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group overflow-hidden h-full">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-[#ECB629] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-[#ECB629] rounded-full opacity-5"
                      animate={{ scale: [1.2, 1.4, 1.2] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 1 }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ECB629] transition-colors">
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
