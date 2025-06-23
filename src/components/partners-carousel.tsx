import { motion } from "framer-motion";

const partners = [
  {
    name: "Google Analytics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
    width: 120,
    height: 35
  },
  {
    name: "Meta Business",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    width: 120,
    height: 35
  },
  {
    name: "HubSpot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
    width: 120,
    height: 35
  },
  {
    name: "Klaviyo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Klaviyo_logo.svg",
    width: 120,
    height: 35
  },
  {
    name: "WordPress",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
    width: 120,
    height: 35
  }
];

export const PartnersCarousel = () => {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--pravdast-yellow)]/20 to-[var(--pravdast-yellow)]/10 border border-[var(--pravdast-yellow)]/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-slate-700 font-medium">
              <span className="text-[var(--pravdast-yellow)] font-bold">Проверени</span> партньори
            </span>
          </motion.div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Работим с водещите платформи
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Интегрираме вашия бизнес с най-добрите технологии за максимални резултати
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative">
          <div 
            className="flex items-center justify-center overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)"
            }}
          >
            <motion.div
              className="flex items-center gap-12 whitespace-nowrap"
              animate={{
                x: [0, -1200]
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
                  style={{ width: "160px", height: "80px" }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplicated set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
                  style={{ width: "160px", height: "80px" }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
              
              {/* Third set for extra smoothness */}
              {partners.map((partner, index) => (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
                  style={{ width: "160px", height: "80px" }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};