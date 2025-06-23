import { motion } from "framer-motion";

// Данните си остават същите
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
  // 1. Дублираме партньорите само веднъж, за да създадем илюзията за безкрайност.
  // Това е много по-ефективно от повтарянето на .map() 4 пъти.
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            Our core technologies
          </p>
        </div>

        <div
          className="relative h-20" // Даваме фиксирана височина на контейнера
          // Стилът с маската за плавно изчезване в краищата е запазен - отличен е!
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <motion.div
            className="flex items-center gap-20 absolute left-0" // Използваме absolute позициониране
            // 2. Променяме анимацията, за да е напълно безшевна.
            // Анимираме от 0 до -100% от ширината на контейнера.
            // Когато анимацията се повтори, тя мигновено се връща на 0, но понеже имаме дублиран списък,
            // потребителят не вижда "прескачане".
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              // 3. Увеличаваме времетраенето на 40 секунди за по-бавна скорост.
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* 4. Рендираме дублирания масив само веднъж */}
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index} // Вече не са нужни сложни key-ове
                className="flex-shrink-0"
                style={{ width: "160px" }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  // 5. Подобрени стилове за логата - напълно черно-бели, леко затъмнени.
                  // Добавен е и transition и hover ефект, за да "светват" при посочване с мишка.
                  className="h-10 w-full object-contain filter grayscale brightness-75 opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
