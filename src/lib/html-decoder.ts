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
  return html.replace(/<img([^>]*?)(\/)?>/gi, (match, attributes, closing) => {
    // More robust check for alt attribute (could be alt="" or alt='' or alt=something)
    const hasAlt = /alt\s*=\s*["'][^"']*["']/i.test(attributes);
    
    if (hasAlt) {
      // Check if alt is empty and replace with meaningful text
      const emptyAltMatch = attributes.match(/alt\s*=\s*["']\s*["']/i);
      if (emptyAltMatch) {
        // Replace empty alt with meaningful text
        const srcMatch = attributes.match(/src\s*=\s*["']([^"']*)["']/i);
        const src = srcMatch ? srcMatch[1] : '';
        const altText = generateAltText(src);
        const updatedAttributes = attributes.replace(/alt\s*=\s*["']\s*["']/i, `alt="${altText}"`);
        return `<img${updatedAttributes}${closing || ''}>`; 
      }
      return match; // Keep original if alt has content
    }
    
    // Extract src for generating alt text
    const srcMatch = attributes.match(/src\s*=\s*["']([^"']*)["']/i);
    const src = srcMatch ? srcMatch[1] : '';
    const altText = generateAltText(src);
    
    // Add alt attribute at the beginning to ensure it's included
    return `<img alt="${altText}"${attributes}${closing || ''}>`;
  });
}

// Helper function to generate meaningful alt text from image URL
function generateAltText(src: string): string {
  if (!src) return 'Pravda Agency - Business Engineering Visual';
  
  const filename = src.split('/').pop()?.toLowerCase() || '';
  
  // Handle WordPress-specific image names
  if (src.includes('admin.pravdagency.eu')) {
    // Extract meaningful parts from WordPress uploads
    const cleanName = filename
      .replace(/\-\d+x\d+/, '') // Remove dimensions like -1024x683
      .replace(/\.webp|\.jpg|\.jpeg|\.png|\.gif/, '') // Remove extensions
      .replace(/[_-]/g, ' ') // Replace underscores and hyphens with spaces
      .replace(/\d{8}_\d{4}_/, '') // Remove date/time stamps
      .trim();
    
    // Generate context-aware alt text
    if (cleanName.includes('seo') || cleanName.includes('struktor')) {
      return `SEO Struktor™ система - ${cleanName} - Pravda ST Agency`;
    } else if (cleanName.includes('trend') || cleanName.includes('lab')) {
      return `Trendlab™ съдържание - ${cleanName} - Pravda ST Agency`;
    } else if (cleanName.includes('click') || cleanName.includes('starter')) {
      return `Clickstarter™ реклами - ${cleanName} - Pravda ST Agency`;
    } else if (cleanName.includes('client') || cleanName.includes('omat')) {
      return `Clientomat™ автоматизация - ${cleanName} - Pravda ST Agency`;
    } else if (cleanName.includes('marketing') || cleanName.includes('маркетинг')) {
      return `Маркетинг стратегия - ${cleanName} - Pravda ST Agency`;
    } else if (cleanName.includes('biznes') || cleanName.includes('бизнес')) {
      return `Бизнес инженерство - ${cleanName} - Pravda ST Agency`;
    } else if (cleanName.includes('image')) {
      // Generic numbered images from WordPress
      return 'Инфографика за бизнес растеж - Pravda ST Agency';
    } else {
      return `${cleanName.charAt(0).toUpperCase() + cleanName.slice(1)} - Pravda ST Agency`;
    }
  }
  
  // Handle other Pravda images
  if (filename.includes('pravda')) {
    return 'Pravda ST Agency - Бизнес инженерство визуализация';
  } else if (filename.includes('client')) {
    return 'Успешен клиентски проект - Pravda ST Agency';
  } else if (filename.includes('trend')) {
    return 'Trendlab™ система за съдържание - Pravda ST Agency';
  } else if (filename.includes('seo')) {
    return 'SEO Struktor™ система - Pravda ST Agency';
  } else if (filename.includes('click')) {
    return 'Clickstarter™ рекламна система - Pravda ST Agency';
  } else {
    return 'Бизнес инженеринг илюстрация - Pravda ST Agency';
  }
}

// Clean WordPress content by removing HTML document structure
export function cleanWordPressContent(content: string): string {
  // Remove HTML document structure that shouldn't be in content
  let cleaned = content
    .replace(/<!DOCTYPE[^>]*>/gi, '')
    .replace(/<html[^>]*>/gi, '')
    .replace(/<\/html>/gi, '')
    .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '') // Remove entire head section with title
    .replace(/<body[^>]*>/gi, '')
    .replace(/<\/body>/gi, '');
  
  return cleaned.trim();
}

// Extract clean text from HTML (removes tags and entities)
export function extractTextFromHtml(htmlString: string): string {
  return cleanHtmlText(htmlString);
}