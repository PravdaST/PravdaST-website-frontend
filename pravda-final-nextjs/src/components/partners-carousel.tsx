
'use client'

import { motion } from "framer-motion"

const partners = [
  {
    name: "Claude",
    src: "https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png",
    alt: "Claude"
  },
  {
    name: "Make",
    src: "https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png", 
    alt: "Make"
  },
  {
    name: "OpenAI",
    src: "https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png",
    alt: "Open AI"
  },
  {
    name: "N8N", 
    src: "https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png",
    alt: "N8N"
  },
  {
    name: "ElevenLabs",
    src: "https://framerusercontent.com/images/aEfuAatqNA9OPAwEZa6f4GuCgU.png",
    alt: "Elevenlabs"
  }
]

export const PartnersCarousel = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-900 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          {/* Radial Dot Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(236, 182, 40, 0.2) 1px, transparent 0px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>

          {/* Horizontal Lines */}
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
            style={{
              top: "30%",
              transform: "scaleX(1.1621)",
            }}
          ></div>
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
            style={{
              top: "50%",
              transform: "scaleX(0.950226)",
            }}
          ></div>
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
            style={{
              top: "70%",
              transform: "scaleX(0.837901)",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
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
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                <div className="absolute inset-0 bg-[#ECB629] rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Проверени</span> партньорства с водещи платформи
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Partners Carousel */}
        <div className="relative overflow-hidden max-w-6xl mx-auto">
          <div 
            className="flex animate-infinite-scroll"
            style={{ width: "3600px" }}
          >
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ width: "240px" }}
              >
                <div className="relative p-4">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    loading="lazy"
                    className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.4] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[#ECB629] rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}

            {/* Second set (duplicated for infinite scroll) */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ width: "240px" }}
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  loading="lazy"
                  className="h-10 w-auto max-w-[120px] filter grayscale brightness-[0.5] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                />
              </div>
            ))}

            {/* Third set (duplicated for infinite scroll) */}
            {partners.map((partner, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ width: "240px" }}
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  loading="lazy"
                  className="h-10 w-auto max-w-[120px] filter grayscale brightness-[0.5] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-1200px);
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};
