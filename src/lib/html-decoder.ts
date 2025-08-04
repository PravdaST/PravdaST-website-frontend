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