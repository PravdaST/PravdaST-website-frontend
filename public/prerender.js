// Prerender script for better SEO crawling
// This ensures critical content is available even before React loads

document.addEventListener('DOMContentLoaded', function() {
  // Show SEO content temporarily for crawlers
  const seoContent = document.getElementById('seo-content');
  if (seoContent && !document.getElementById('root').hasChildNodes()) {
    seoContent.style.opacity = '1';
    seoContent.style.height = 'auto';
    seoContent.style.overflow = 'visible';
    seoContent.style.padding = '20px';
    seoContent.style.textAlign = 'center';
    seoContent.style.fontFamily = 'Arial, sans-serif';
    seoContent.style.backgroundColor = '#0f172a';
    seoContent.style.color = '#ffffff';
    seoContent.style.minHeight = '100vh';
    
    // Hide once React loads
    setTimeout(() => {
      if (document.getElementById('root').hasChildNodes()) {
        seoContent.style.display = 'none';
      }
    }, 1000);
  }
});