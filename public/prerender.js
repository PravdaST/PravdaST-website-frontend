// Prerender SEO Script - Shows H1/H2 content before React loads
(function() {
  'use strict';
  
  // Show SEO content immediately for crawlers
  const seoContent = document.getElementById('seo-content');
  if (seoContent) {
    seoContent.style.opacity = '1';
    seoContent.style.height = 'auto';
    seoContent.style.overflow = 'visible';
    seoContent.style.position = 'absolute';
    seoContent.style.top = '0';
    seoContent.style.left = '0';
    seoContent.style.width = '100%';
    seoContent.style.zIndex = '9999';
    seoContent.style.backgroundColor = '#0f172a';
    seoContent.style.color = 'white';
    seoContent.style.padding = '20px';
  }
  
  // Hide SEO content after React loads
  window.addEventListener('load', function() {
    setTimeout(function() {
      if (seoContent && document.getElementById('root').children.length > 0) {
        seoContent.style.opacity = '0';
        seoContent.style.height = '0';
        seoContent.style.overflow = 'hidden';
        seoContent.style.position = 'static';
      }
    }, 100);
  });
  
  // Fallback for React mount
  const checkReactMount = setInterval(function() {
    const root = document.getElementById('root');
    if (root && root.children.length > 0) {
      if (seoContent) {
        seoContent.style.opacity = '0';
        seoContent.style.height = '0';
        seoContent.style.overflow = 'hidden';
        seoContent.style.position = 'static';
      }
      clearInterval(checkReactMount);
    }
  }, 50);
  
  // Clear interval after 5 seconds to prevent infinite checking
  setTimeout(function() {
    clearInterval(checkReactMount);
  }, 5000);
})();