import { BusinessData, GeneratedContent, TemplateFile, BusinessTypeHandler, ColorScheme, Feature } from '../types';
import { ContentAutomation } from '../ContentAutomation';

export abstract class BaseHandler implements BusinessTypeHandler {
  protected contentAutomation: ContentAutomation;

  constructor() {
    this.contentAutomation = new ContentAutomation();
  }

  /**
   * Generate content for the business type
   */
  async generateContent(businessData: BusinessData): Promise<GeneratedContent> {
    try {
      console.log(`Generating content for ${businessData.templateType}: ${businessData.name}`);

      const contactInfo = this.contentAutomation.generateContactInfo(businessData);
      
      const content: GeneratedContent = {
        businessInfo: {
          name: businessData.name,
          tagline: this.contentAutomation.generateTagline(businessData),
          description: this.contentAutomation.generateDescription(businessData),
          phone: contactInfo.phone,
          address: contactInfo.address,
          email: contactInfo.email,
          hours: contactInfo.hours,
          rating: contactInfo.rating,
          reviews: contactInfo.reviews
        },
        menuCategories: await this.generateMenuCategories(businessData),
        features: this.contentAutomation.generateFeatures(businessData.templateType),
        reviews: this.contentAutomation.generateReviews(businessData),
        colorScheme: this.contentAutomation.generateColorScheme(businessData.templateType),
        imagery: this.generateImageryConfig(businessData)
      };

      console.log(`Content generated successfully for ${businessData.name}`);
      return content;

    } catch (error) {
      console.error(`Content generation failed for ${businessData.name}:`, error);
      throw new Error(`Failed to generate content: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Generate template files (to be implemented by specific handlers)
   */
  abstract generateTemplate(content: GeneratedContent, businessData: BusinessData): Promise<TemplateFile[]>;

  /**
   * Generate menu categories (to be implemented by specific handlers)
   */
  abstract generateMenuCategories(businessData: BusinessData): Promise<any[]>;

  /**
   * Get color scheme for business type
   */
  getColorScheme(businessType: string): ColorScheme {
    return this.contentAutomation.generateColorScheme(businessType);
  }

  /**
   * Get default features for business type
   */
  getDefaultFeatures(): Feature[] {
    return this.contentAutomation.generateFeatures('services'); // Default fallback
  }

  /**
   * Generate imagery configuration
   */
  protected generateImageryConfig(businessData: BusinessData): any {
    const { templateType } = businessData;
    
    const imageryMap: Record<string, any> = {
      restaurant: {
        heroBackground: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080',
        logoPlaceholder: '/images/restaurant-logo-placeholder.png',
        menuImages: [
          'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
          'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
          'https://images.unsplash.com/photo-1505253213348-cd54c92b37ed?w=400'
        ],
        galleryImages: [
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
          'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600'
        ]
      },
      cafe: {
        heroBackground: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=1080',
        logoPlaceholder: '/images/cafe-logo-placeholder.png',
        menuImages: [
          'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
          'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400'
        ],
        galleryImages: [
          'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600',
          'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600'
        ]
      },
      shop: {
        heroBackground: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080',
        logoPlaceholder: '/images/shop-logo-placeholder.png',
        menuImages: [],
        galleryImages: [
          'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600'
        ]
      },
      services: {
        heroBackground: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080',
        logoPlaceholder: '/images/services-logo-placeholder.png',
        menuImages: [],
        galleryImages: [
          'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600'
        ]
      },
      beauty: {
        heroBackground: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080',
        logoPlaceholder: '/images/beauty-logo-placeholder.png',
        menuImages: [],
        galleryImages: [
          'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600'
        ]
      },
      education: {
        heroBackground: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080',
        logoPlaceholder: '/images/education-logo-placeholder.png',
        menuImages: [],
        galleryImages: [
          'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600'
        ]
      }
    };

    return imageryMap[templateType] || imageryMap.services;
  }

  /**
   * Generate base HTML structure
   */
  protected generateBaseHTML(content: GeneratedContent, businessData: BusinessData): string {
    const { businessInfo, colorScheme } = content;
    
    return `<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessInfo.name} - ${businessInfo.tagline}</title>
    <meta name="description" content="${businessInfo.description}">
    <meta name="keywords" content="${businessData.name}, ${businessData.businessType}, ${this.extractLocation(businessData)}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${businessInfo.name}">
    <meta property="og:description" content="${businessInfo.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://${this.generateSlug(businessData.name)}.pravda-sites.com">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link rel="stylesheet" href="/styles.css">
    
    <!-- Custom CSS Variables -->
    <style>
        :root {
            --color-primary: ${colorScheme.primary};
            --color-secondary: ${colorScheme.secondary};
            --color-accent: ${colorScheme.accent};
            --color-background: ${colorScheme.background};
            --color-text: ${colorScheme.text};
            --color-light: ${colorScheme.light};
        }
    </style>
</head>
<body>
    <!-- Content will be inserted here by specific handlers -->
    
    <!-- Scripts -->
    <script src="/scripts.js"></script>
    
    <!-- Analytics -->
    <script>
        // Google Analytics or other tracking can be added here
        console.log('Site generated by Pravda Agency Template Generator');
    </script>
</body>
</html>`;
  }

  /**
   * Generate base CSS
   */
  protected generateBaseCSS(content: GeneratedContent): string {
    return `/* Generated by Pravda Agency Template Generator */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--color-text);
    background-color: #ffffff;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

@media (min-width: 640px) {
    .container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
    .container { padding: 0 2rem; }
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

@media (min-width: 768px) {
    h1 { font-size: 3.5rem; }
    h2 { font-size: 2.5rem; }
    h3 { font-size: 1.75rem; }
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 2rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background-color: var(--color-primary);
    color: white;
}

.btn-primary:hover {
    background-color: var(--color-secondary);
    transform: translateY(-2px);
}

.btn-outline {
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}

.btn-outline:hover {
    background-color: var(--color-primary);
    color: white;
}

/* Cards */
.card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.card:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
}

/* Sections */
.section {
    padding: 4rem 0;
}

@media (min-width: 768px) {
    .section { padding: 6rem 0; }
}

/* Utilities */
.text-center { text-align: center; }
.text-primary { color: var(--color-primary); }
.bg-light { background-color: var(--color-light); }
.mb-4 { margin-bottom: 1rem; }
.mb-8 { margin-bottom: 2rem; }
.mt-8 { margin-top: 2rem; }

/* Grid */
.grid {
    display: grid;
    gap: 2rem;
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }

@media (max-width: 768px) {
    .grid-2, .grid-3 { grid-template-columns: 1fr; }
}

/* Responsive */
.hidden-mobile { display: block; }
@media (max-width: 768px) {
    .hidden-mobile { display: none; }
}

.visible-mobile { display: none; }
@media (max-width: 768px) {
    .visible-mobile { display: block; }
}`;
  }

  /**
   * Generate base JavaScript
   */
  protected generateBaseJS(): string {
    return `// Generated by Pravda Agency Template Generator

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links with hash
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll-to-top functionality
    const scrollToTop = document.createElement('button');
    scrollToTop.innerHTML = '↑';
    scrollToTop.className = 'scroll-to-top';
    scrollToTop.style.cssText = \`
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: var(--color-primary);
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    \`;
    
    document.body.appendChild(scrollToTop);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTop.style.opacity = '1';
            scrollToTop.style.visibility = 'visible';
        } else {
            scrollToTop.style.opacity = '0';
            scrollToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('loading')) return;
            
            this.classList.add('loading');
            const originalText = this.textContent;
            this.textContent = 'Зареждане...';
            
            setTimeout(() => {
                this.classList.remove('loading');
                this.textContent = originalText;
            }, 2000);
        });
    });
    
    console.log('Template initialized by Pravda Agency');
});

// Contact form handling (if present)
function handleContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.phone) {
        alert('Моля попълнете всички задължителни полета');
        return;
    }
    
    // Show success message
    alert('Благодарим ви за съобщението! Ще се свържем с вас възможно най-скоро.');
    
    // Reset form
    event.target.reset();
    
    console.log('Contact form submitted:', data);
}

// Phone number formatting
function formatPhoneNumber(phone) {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\\D/g, '');
    
    // Format Bulgarian phone numbers
    if (cleaned.startsWith('359')) {
        return \`+\${cleaned.substring(0, 3)} \${cleaned.substring(3, 4)} \${cleaned.substring(4, 7)} \${cleaned.substring(7, 10)}\`;
    } else if (cleaned.startsWith('0')) {
        return \`\${cleaned.substring(0, 4)} \${cleaned.substring(4, 7)} \${cleaned.substring(7, 10)}\`;
    }
    
    return phone;
}`;
  }

  /**
   * Extract location from business data
   */
  protected extractLocation(businessData: BusinessData): string {
    return businessData.customizationData?.location || 'София';
  }

  /**
   * Generate URL-safe slug from business name
   */
  private generateSlug(name: string): string {
    return name.toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }
}