import { motion } from "framer-motion";

export const SalesEngineBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--pravdast-yellow)]/2 to-transparent opacity-30"></div>
      
      {/* Rotating gears and cogs */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-12 h-12 border border-[var(--pravdast-yellow)]/20 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, transparent 70deg, var(--pravdast-yellow)/10 80deg, transparent 90deg, var(--pravdast-yellow)/10 100deg, transparent 110deg)`
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-8 h-8 border border-[var(--pravdast-yellow)]/15 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, transparent 60deg, var(--pravdast-yellow)/8 70deg, transparent 80deg, var(--pravdast-yellow)/8 90deg, transparent 100deg)`
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-6 h-6 border border-[var(--pravdast-yellow)]/25 rounded-full opacity-60"
        style={{
          background: `conic-gradient(from 0deg, transparent 80deg, var(--pravdast-yellow)/12 90deg, transparent 100deg)`
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Flowing particles representing sales funnel */}
      <motion.div
        className="absolute bottom-0 left-1/6 w-1 h-1 bg-[var(--pravdast-yellow)]/40 rounded-full"
        animate={{
          y: [0, -200, -400, -600],
          x: [0, 20, -10, 30],
          opacity: [0, 0.8, 0.6, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-1 h-1 bg-[var(--pravdast-yellow)]/35 rounded-full"
        animate={{
          y: [0, -180, -360, -540],
          x: [0, -15, 25, -20],
          opacity: [0, 0.7, 0.5, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-1 h-1 bg-[var(--pravdast-yellow)]/30 rounded-full"
        animate={{
          y: [0, -220, -440, -660],
          x: [0, 10, -30, 15],
          opacity: [0, 0.6, 0.4, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeOut",
          delay: 4
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/6 w-1 h-1 bg-[var(--pravdast-yellow)]/25 rounded-full"
        animate={{
          y: [0, -190, -380, -570],
          x: [0, -25, 5, -10],
          opacity: [0, 0.5, 0.3, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeOut",
          delay: 6
        }}
      />
    </div>
  );
};