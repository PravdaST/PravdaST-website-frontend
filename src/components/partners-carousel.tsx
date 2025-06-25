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
    <section className="py-16 bg-slate-900 relative overflow-hidden">
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
            <div div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
              style={{
                top: `${30 + i * 20}%`,
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Проверени</span> партньорства с водещи платформи
              </span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden max-w-6xl mx-auto">
          <div
            style={{
              width: `${partners.length * 3 * 240}px`,
            {/* First set */}
            {partners.map((partner, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ width: "240px" }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#ECB629]/20 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
            {/* Second set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ width: "240px" }}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                />
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {partners.map((partner, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ width: "240px" }}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
