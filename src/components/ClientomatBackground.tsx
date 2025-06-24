import { motion } from "framer-motion";

export const ClientomatBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--pravdast-dark-gray)]/30 to-transparent"></div>
      
      {/* Curved data stream lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-0.5 bg-gradient-to-r from-transparent via-[var(--pravdast-yellow)]/25 to-transparent"
        style={{
          clipPath: "ellipse(200px 10px at 50% 50%)"
        }}
        animate={{
          x: [-200, 1400],
          opacity: [0, 0.6, 0.8, 0.6, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
      />
      <motion.div
        className="absolute top-1/2 left-0 w-80 h-0.5 bg-gradient-to-r from-transparent via-[var(--pravdast-yellow)]/20 to-transparent"
        style={{
          clipPath: "ellipse(160px 8px at 50% 50%)"
        }}
        animate={{
          x: [-180, 1300],
          opacity: [0, 0.5, 0.7, 0.5, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      <motion.div
        className="absolute top-3/4 left-0 w-72 h-0.5 bg-gradient-to-r from-transparent via-[var(--pravdast-yellow)]/30 to-transparent"
        style={{
          clipPath: "ellipse(180px 12px at 50% 50%)"
        }}
        animate={{
          x: [-160, 1200],
          opacity: [0, 0.7, 0.9, 0.7, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
      />
      
      {/* Smooth floating particles */}
      <motion.div
        className="absolute top-1/4 left-0 w-2 h-2 bg-[var(--pravdast-yellow)]/30 rounded-full"
        animate={{
          x: [-20, 1400],
          y: [0, -20, 0],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-[var(--pravdast-yellow)]/25 rounded-full"
        animate={{
          x: [-15, 1300],
          y: [0, 15, 0],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      <motion.div
        className="absolute top-3/4 left-0 w-2 h-2 bg-[var(--pravdast-yellow)]/35 rounded-full"
        animate={{
          x: [-20, 1200],
          y: [0, -10, 0],
          opacity: [0, 0.7, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
      />
      
      {/* Additional automation indicators */}
      <motion.div
        className="absolute top-1/6 right-1/4 w-1 h-1 bg-[var(--pravdast-yellow)]/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/6 left-1/5 w-1 h-1 bg-[var(--pravdast-yellow)]/25 rounded-full"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.25, 0.7, 0.25]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </div>
  );
};