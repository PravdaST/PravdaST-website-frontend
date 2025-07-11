'use client'

import { motion } from "framer-motion";

const partners = [
  {
    name: "Claude",
    logo: "https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png",
  },
  {
    name: "Make",
    logo: "https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png",
  },
  {
    name: "Open AI",
    logo: "https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png",
  },
  {
    name: "N8N",
    logo: "https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png",
  },
  {
    name: "Elevenlabs",
    logo: "https://framerusercontent.com/images/aEfuAatqNA9OPAwEZa6f4GuCgU.png",
  },
];

export const PartnersCarousel = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-900 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          {/* Trust Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(236, 182, 40, 0.2) 1px, transparent 0)
            `,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Partnership Lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
              style={{
                top: `${30 + i * 20}%`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-2 h-2 bg-[#ECB629] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-[#ECB629] font-semibold text-sm">
              ПАРТНЬОРИ И ТЕХНОЛОГИИ
            </span>
          </motion.div>
        </motion.div>

        {/* Continuous Logo Carousel */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div className="flex">
            {/* First Set */}
            <motion.div
              className="flex min-w-full gap-8 justify-between items-center"
              animate={{
                x: [0, -1200], // Move one full width
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="relative group flex-shrink-0 w-60 h-20 flex items-center justify-center bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(30, 41, 59, 0.8)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ECB629]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};