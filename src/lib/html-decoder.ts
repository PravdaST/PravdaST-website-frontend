// Comprehensive HTML entity decoder utility
export function decodeHtmlEntities(text: string): string {
  if (typeof window !== 'undefined') {
    // Client-side: Use browser's built-in HTML decoding
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  } else {
    // Server-side: Use comprehensive entity map
    const entityMap: { [key: string]: string } = {
      // Numeric entities
      '&#8220;': '"',
      '&#8221;': '"',
      '&#8216;': "'",
      '&#8217;': "'",
      '&#8211;': '–',
      '&#8212;': '—',
      '&#8230;': '…',
      '&#8594;': '→',
      '&#8592;': '←',
      '&#8593;': '↑',
      '&#8595;': '↓',
      '&#8203;': '', // Zero-width space
      '&#160;': ' ', // Non-breaking space
      
      // Named entities
      '&hellip;': '…',
      '&mdash;': '—',
      '&ndash;': '–',
      '&ldquo;': '"',
      '&rdquo;': '"',
      '&lsquo;': "'",
      '&rsquo;': "'",
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&apos;': "'",
      '&nbsp;': ' ',
      '&euro;': '€',
      '&pound;': '£',
      '&yen;': '¥',
      '&cent;': '¢',
      '&copy;': '©',
      '&reg;': '®',
      '&trade;': '™',
      '&deg;': '°',
      '&plusmn;': '±',
      '&times;': '×',
      '&divide;': '÷',
      '&rarr;': '→',
      '&larr;': '←',
      '&uarr;': '↑',
      '&darr;': '↓',
      '&hearts;': '♥',
      '&clubs;': '♣',
      '&diamonds;': '♦',
      '&spades;': '♠'
    };

    return text.replace(/&#?\w+;/g, (entity) => {
      return entityMap[entity] || entity;
    });
  }
}

// Clean text by removing HTML tags and decoding entities
export function cleanHtmlText(html: string): string {
  const textWithoutTags = html.replace(/<[^>]*>/g, '').trim();
  return decodeHtmlEntities(textWithoutTags);
}

// Function to add alt text to images that don't have it
export function addAltTextToImages(html: string): string {
  return html.replace(/<img([^>]*)>/gi, (match, attributes) => {
    // Check if image already has alt attribute
    if (attributes.includes('alt=')) {
      return match; // Keep original if alt exists
    }
    
    // Extract src for generating alt text
    const srcMatch = attributes.match(/src=["']([^"']*)["']/);
    const src = srcMatch ? srcMatch[1] : '';
    
    // Generate meaningful alt text based on filename or context
    let altText = 'Image';
    if (src) {
      const filename = src.split('/').pop()?.split('.')[0] || '';
      if (filename.includes('pravda')) {
        altText = 'Pravda Agency - Business Engineering Image';
      } else if (filename.includes('client')) {
        altText = 'Client Success Story - Pravda Agency';
      } else if (filename.includes('trend')) {
        altText = 'Trendlab Business System - Pravda Agency';
      } else if (filename.includes('seo')) {
        altText = 'SEO Struktor System - Pravda Agency';
      } else if (filename.includes('click')) {
        altText = 'Clickstarter System - Pravda Agency';
      } else {
        altText = 'Business Engineering Illustration - Pravda Agency';
      }
    }
    
    return `<img${attributes} alt="${altText}">`;
  });
}

// Extract clean text from HTML (removes tags and entities)
export function extractTextFromHtml(htmlString: string): string {
  return cleanHtmlText(htmlString);
}