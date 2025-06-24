import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="tech-grid-bg absolute inset-0"></div>
      <div className="tech-lines">
        <motion.div
          className="tech-line"
          style={{ top: "20%", width: "300px" }}
          initial={{ x: "-100%" }}
          animate={{ x: "100vw" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 0,
          }}
        />
        <motion.div
          className="tech-line"
          style={{ top: "40%", width: "250px" }}
          initial={{ x: "-100%" }}
          animate={{ x: "100vw" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
        <motion.div
          className="tech-line"
          style={{ top: "60%", width: "400px" }}
          initial={{ x: "-100%" }}
          animate={{ x: "100vw" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
        />
        <motion.div
          className="tech-line"
          style={{ top: "80%", width: "200px" }}
          initial={{ x: "-100%" }}
          animate={{ x: "100vw" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 6,
          }}
        />
      </div>
    </div>
  );
};
