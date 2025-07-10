// Prerender SEO content for crawlers
(function() {
  // Only show SEO content for crawlers, hide when React loads
  const isBot = /bot|crawler|spider|crawling/i.test(navigator.userAgent);
  
  if (isBot || !document.getElementById('root').hasChildNodes()) {
    // Show noscript SEO content for crawlers
    const noscriptContent = document.querySelector('noscript');
    if (noscriptContent) {
      const div = document.createElement('div');
      div.innerHTML = noscriptContent.innerHTML;
      div.style.display = 'block';
      document.body.insertBefore(div, document.body.firstChild);
    }
  }
  
  // Hide SEO content once React app loads
  window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      const seoContent = document.querySelector('.seo-prerender');
      if (seoContent && document.getElementById('root').hasChildNodes()) {
        seoContent.style.display = 'none';
      }
    }, 100);
  });
})();