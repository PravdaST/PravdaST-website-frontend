import { motion } from "framer-motion";

export const SeoStruktorBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(var(--pravdast-yellow)_1px,transparent_1px),linear-gradient(90deg,var(--pravdast-yellow)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Animated network nodes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--pravdast-yellow)]/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[var(--pravdast-yellow)]/25 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[var(--pravdast-yellow)]/20 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Connecting lines between nodes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-[var(--pravdast-yellow)]/20 to-transparent origin-left rotate-45"
        animate={{
          scaleX: [0, 1, 0.3, 1, 0],
          opacity: [0, 0.4, 0.2, 0.4, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-24 h-0.5 bg-gradient-to-r from-[var(--pravdast-yellow)]/15 to-transparent origin-left -rotate-12"
        animate={{
          scaleX: [0, 1, 0.4, 1, 0],
          opacity: [0, 0.3, 0.15, 0.3, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
};