const partners = [
  {
    name: "n8n",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/N8n-logo.svg",
  },
  {
    name: "Make",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Make_com_logo.svg",
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "Klaviyo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Klaviyo_logo.svg",
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
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Airtable",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Airtable_logo.svg",
  },
];

export const PartnersCarousel = () => {
  // Създаваме един масив, който съдържа логата ДВА пъти.
  // Това е ключово за плавния, безкраен ефект.
  const extendedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">
            Our Core Technologies & Partners
          </p>
        </div>

        <div
          className="w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {/* Анимацията се прилага на този вътрешен div */}
          <div className="flex w-max animate-infinite-scroll-reworked">
            {/* Мапваме през удължения масив, за да създадем дългата лента */}
            {extendedPartners.map((partner, index) => (
              <div key={index} className="mx-8 flex-shrink-0">
                {" "}
                {/* mx-8 създава разстоянието */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-10 w-auto filter grayscale brightness-75 opacity-60 transition-colors duration-300 hover:filter-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
