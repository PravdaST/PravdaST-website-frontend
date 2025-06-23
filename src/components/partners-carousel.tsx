import { motion } from "framer-motion";

const partners = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "HubSpot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
  },
  {
    name: "Klaviyo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Klaviyo_logo.svg",
  },
  {
    name: "WordPress",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
];

export const PartnersCarousel = () => {
  // Дублираме партньорите два пъти за перфектен безкраен цикъл
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">
            Our Core Technologies
          </p>
        </div>

        <div
          className="relative h-20 overflow-hidden" // overflow-hidden е важен
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <motion.div
            className="flex items-center gap-20 absolute left-0 top-0 h-full"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 40, // По-бавна скорост
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Рендираме дублирания масив само веднъж */}
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-full flex items-center justify-center" // w-40 = 160px
              >
                <img
                  src={partner.logo}
                  alt={partner.name} // Запазваме alt тага за по-добро SEO и достъпност
                  loading="lazy"
                  // Ето я и магията за "сивичкото"
                  className="h-10 object-contain filter grayscale brightness-[0.7] opacity-50 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
