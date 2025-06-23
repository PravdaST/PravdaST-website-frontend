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
  {
    name: "Zapier",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Zapier_logo.svg",
  },
  {
    name: "Mailchimp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Mailchimp_Logo.svg",
  },
];

export const PartnersCarousel = () => {
  return (
    <section className="py-20 bg-[var(--pravdast-dark)] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--pravdast-yellow)]/10 to-transparent transform -skew-y-1"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[var(--pravdast-yellow)]/10 rounded-full border border-[var(--pravdast-yellow)]/20 mb-4">
            <span className="text-[var(--pravdast-yellow)] text-sm font-semibold tracking-wide">
              ТЕХНОЛОГИИ
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Интегрираме с водещите платформи
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Използваме най-добрите инструменти на пазара, за да изградим системи, които работят безпроблемно
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="w-full inline-flex flex-nowrap overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            {/* First set */}
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-infinite-scroll">
              {partners.map((partner, index) => (
                <li key={`first-${index}`} className="flex-shrink-0">
                  <div className="group relative p-6 bg-[var(--pravdast-dark-gray)]/50 rounded-xl border border-[var(--pravdast-medium-gray)]/30 hover:border-[var(--pravdast-yellow)]/30 transition-all duration-500 hover:bg-[var(--pravdast-dark-gray)]/80">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} лого`}
                      loading="lazy"
                      className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.7] opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--pravdast-yellow)]/0 via-[var(--pravdast-yellow)]/5 to-[var(--pravdast-yellow)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Second set for seamless loop */}
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-infinite-scroll"
              aria-hidden="true"
            >
              {partners.map((partner, index) => (
                <li key={`second-${index}`} className="flex-shrink-0">
                  <div className="group relative p-6 bg-[var(--pravdast-dark-gray)]/50 rounded-xl border border-[var(--pravdast-medium-gray)]/30 hover:border-[var(--pravdast-yellow)]/30 transition-all duration-500 hover:bg-[var(--pravdast-dark-gray)]/80">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} лого`}
                      loading="lazy"
                      className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.7] opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--pravdast-yellow)]/0 via-[var(--pravdast-yellow)]/5 to-[var(--pravdast-yellow)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Third set for extra smoothness */}
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-infinite-scroll"
              aria-hidden="true"
            >
              {partners.map((partner, index) => (
                <li key={`third-${index}`} className="flex-shrink-0">
                  <div className="group relative p-6 bg-[var(--pravdast-dark-gray)]/50 rounded-xl border border-[var(--pravdast-medium-gray)]/30 hover:border-[var(--pravdast-yellow)]/30 transition-all duration-500 hover:bg-[var(--pravdast-dark-gray)]/80">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} лого`}
                      loading="lazy"
                      className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.7] opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--pravdast-yellow)]/0 via-[var(--pravdast-yellow)]/5 to-[var(--pravdast-yellow)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom description */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm max-w-3xl mx-auto">
            Всяка система, която изграждаме, се интегрира безпроблемно с инструментите, които вече използвате. 
            Няма нужда да променяте работния си процес – ние адаптираме технологията към вашите нужди.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
