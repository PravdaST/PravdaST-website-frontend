import { motion } from "framer-motion";

export const SeoStruktorBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {/* Engineering blueprint grid */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 120 }).map((_, i) => (
            <div key={i} className="border-l border-[var(--pravdast-yellow)]"></div>
          ))}
        </div>
        <div className="absolute inset-0">
          <div className="grid grid-rows-8 gap-4 h-full">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-t border-[var(--pravdast-yellow)]"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating nodes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};