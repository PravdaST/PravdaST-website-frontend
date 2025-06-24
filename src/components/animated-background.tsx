import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="tech-grid-bg absolute inset-0"></div>
      <div className="tech-lines">
        {/* Animated lines using CSS animations */}
        <div 
          className="tech-line animate-pulse"
          style={{ top: "20%", width: "300px", animationDelay: "0s" }}
        />
        <div 
          className="tech-line animate-pulse"
          style={{ top: "40%", width: "200px", animationDelay: "2s" }}
        />
        <div 
          className="tech-line animate-pulse"
          style={{ top: "60%", width: "250px", animationDelay: "4s" }}
        />
        <div 
          className="tech-line animate-pulse"
          style={{ top: "80%", width: "180px", animationDelay: "6s" }}
        />
      </div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#ECB628] rounded-full opacity-60 animate-bounce"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      ))}
    </div>
  );
};