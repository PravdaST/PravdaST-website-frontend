// Critical CSS Component for Above-the-fold Content
export function CriticalCSS() {
  const css = `
    /* Critical CSS for Above-the-fold Content */
    :root {
      --pravda-yellow: #ECB628;
      --pravda-yellow-light: #F4D03F;
      --pravda-yellow-dark: #D4A017;
      --pravda-dark: #000000;
      --pravda-green: #10B981;
      --pravda-red: #EF4444;
    }
    
    /* Hero Section Critical Styles */
    .hero-gradient {
      background: radial-gradient(circle at 20% 80%, rgba(236, 182, 40, 0.3) 0%, transparent 50%);
    }
    
    .glassmorphism {
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(236, 182, 40, 0.3);
    }
    
    .text-gradient {
      background: linear-gradient(90deg, #ECB628 0%, #FFF 50%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
    
    /* Loading States */
    .skeleton {
      animation: skeleton-loading 1s linear infinite alternate;
    }
    
    @keyframes skeleton-loading {
      0% { background-color: rgba(255, 255, 255, 0.05); }
      100% { background-color: rgba(255, 255, 255, 0.1); }
    }
    
    /* Mobile Optimizations */
    @media (max-width: 768px) {
      .glassmorphism {
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }
    }
  `;
  
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}