// Critical CSS component for above-the-fold content
export const CriticalCSS = () => {
  return (
    <style jsx>{`
      /* Critical CSS for LCP optimization */
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .hero-title {
        font-size: clamp(2rem, 8vw, 4rem);
        line-height: 1.1;
        font-weight: 700;
        margin-bottom: 1.5rem;
      }
      
      .hero-subtitle {
        font-size: clamp(1rem, 4vw, 1.25rem);
        line-height: 1.6;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
      
      /* Prevent layout shift */
      .aspect-video {
        aspect-ratio: 16 / 9;
      }
      
      .aspect-square {
        aspect-ratio: 1 / 1;
      }
      
      /* Glassmorphism base styles */
      .glassmorphism {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      @media (max-width: 768px) {
        .glassmorphism {
          backdrop-filter: blur(5px); /* Reduced blur for mobile */
        }
      }
    `}</style>
  );
};