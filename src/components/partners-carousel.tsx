// PartnersCarousel.jsx

// 1. Обновихме този масив с новите партньори и лога
const partners = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "Gemini",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Google_Gemini_logo.svg",
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  {
    name: "n8n",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/N8n-logo.svg",
  },
  {
    name: "Make",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Make_com_logo.svg",
  },
  {
    name: "Airtable",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Airtable_logo.svg",
  },
  {
    name: "Klaviyo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Klaviyo_logo.svg",
  },
];

export const PartnersCarousel = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">
            Our Core Technologies & Partners
          </p>
        </div>

        <div
          className="w-full inline-flex flex-nowrap overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {/* Използваме същата CSS анимация от tailwind.config.js */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
            {partners.map((partner, index) => (
              <li key={`first-${index}`}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-10 w-auto filter grayscale brightness-75 opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                />
              </li>
            ))}
          </ul>

          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
            aria-hidden="true"
          >
            {partners.map((partner, index) => (
              <li key={`second-${index}`}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-10 w-auto filter grayscale brightness-75 opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
