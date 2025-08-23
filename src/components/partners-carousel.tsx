'use client'

const logos = [
  { name: "Claude", logo: "https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png" },
  { name: "Make", logo: "https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png" },
  { name: "OpenAI", logo: "https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png" },
  { name: "N8N", logo: "https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png" },
  { name: "Elevenlabs", logo: "https://framerusercontent.com/images/aEfuAatqNA9OPAwEZa6f4GuCgU.png" },
];

function LogoRow({
  logos,
  animation,
}: {
  logos: Array<{ name: string; logo: string }>;
  animation: string;
}) {
  const loop = [...logos, ...logos]; // seamless loop
  return (
    <div
      className={`
        flex w-max gap-8 
        ${animation}
        motion-reduce:animate-none 
        hover:[animation-play-state:paused]
      `}
      aria-hidden="true"
    >
      {loop.map((logo, i) => (
        <div
          key={i}
          className="relative group flex-shrink-0 h-16 w-60 flex items-center justify-center glassmorphism rounded-xl p-4 hover:scale-105 hover:bg-slate-700/80 transition-all duration-300"
        >
          <img
            src={logo.logo}
            alt={logo.name}
            className="h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ECB629]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}

export const PartnersCarousel = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glassmorphism">
            <span className="w-2 h-2 rounded-full bg-[#ECB629] animate-pulse" />
            <span className="text-[#ECB629] font-semibold text-sm">
              ПАРТНЬОРИ И ТЕХНОЛОГИИ
            </span>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div className="space-y-6">
            <LogoRow logos={logos} animation="animate-marqueeL-30 sm:animate-marqueeL-45" />
            <LogoRow logos={logos} animation="animate-marqueeR-35 sm:animate-marqueeR-50" />
          </div>

          {/* Gradient Fade Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0D0D0F] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0D0D0F] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};