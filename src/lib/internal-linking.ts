// Internal linking system for contextual service links in blog posts

export interface ServiceLink {
  service: string;
  url: string;
  keywords: string[];
  title: string;
  description: string;
}

// Service definitions with their keywords and linking info
export const PRAVDA_SERVICES: ServiceLink[] = [
  {
    service: 'seo-struktor',
    url: '/services/seo-struktor',
    title: 'SEO Struktor™',
    description: 'Системност в SEO оптимизацията',
    keywords: [
      'SEO', 'seo', 'оптимизация', 'търсачки', 'Google', 'органичен трафик', 
      'ключови думи', 'мета тагове', 'структурирани данни', 'schema',
      'индексиране', 'crawling', 'sitemap', 'robots.txt', 'canonical',
      'техническо SEO', 'PageSpeed', 'Core Web Vitals', 'оптимизиране'
    ]
  },
  {
    service: 'clickstarter',
    url: '/services/clickstarter',
    title: 'Clickstarter™',
    description: 'Рекламни кампании които генерират ROI',
    keywords: [
      'реклама', 'рекламни кампании', 'PPC', 'Google Ads', 'Facebook Ads',
      'конверсия', 'CTR', 'CPC', 'ROAS', 'ROI', 'conversion rate',
      'lead generation', 'landing page', 'A/B тестване', 'ретаргетинг',
      'display реклама', 'remarketing', 'качествен score', 'bid strategy'
    ]
  },
  {
    service: 'clientomat',
    url: '/services/clientomat',
    title: 'Clientomat™',
    description: 'Автоматизирана система за управление на клиенти',
    keywords: [
      'автоматизация', 'CRM', 'клиенти', 'процеси', 'workflow',
      'email автоматизация', 'lead nurturing', 'sales funnel',
      'customer journey', 'персонализация', 'сегментация',
      'lifecycle marketing', 'retention', 'клиентски данни', 'интеграции'
    ]
  },
  {
    service: 'trendlab',
    url: '/services/trendlab',
    title: 'Trendlab™',
    description: 'Анализ на пазарни трендове и конкуренция',
    keywords: [
      'анализ', 'данни', 'трендове', 'пазарен анализ', 'конкурентен анализ',
      'business intelligence', 'KPI', 'метрики', 'аналитика',
      'market research', 'competitor analysis', 'trend analysis',
      'data insights', 'reporting', 'dashboard', 'performance анализ'
    ]
  }
];

/**
 * Adds contextual internal links to WordPress content
 * Links relevant services based on keyword matching
 */
export function addContextualServiceLinks(htmlContent: string): string {
  let processedContent = htmlContent;

  // Keep track of which services have been linked to avoid over-linking
  const linkedServices = new Set<string>();

  PRAVDA_SERVICES.forEach(service => {
    // Skip if this service is already linked in this post
    if (linkedServices.has(service.service)) return;

    // Find the first occurrence of any keyword for this service
    for (const keyword of service.keywords) {
      // Create case-insensitive regex that matches whole words
      const regex = new RegExp(`\\b(${keyword})\\b(?![^<]*>)`, 'i');
      const match = processedContent.match(regex);

      if (match) {
        // Replace the first occurrence with a link
        const replacement = `<a href="${service.url}" class="text-[#ECB629] hover:text-[#ECB629]/80 underline font-semibold transition-colors" title="${service.description}">${match[1]}</a>`;
        
        processedContent = processedContent.replace(regex, replacement);
        linkedServices.add(service.service);
        
        // Only link once per service per post
        break;
      }
    }
  });

  return processedContent;
}

/**
 * Generates contextual call-to-action sections based on post content
 */
export function generateContextualCTAs(htmlContent: string, postTitle: string): ServiceLink[] {
  const relevantServices: ServiceLink[] = [];
  const textContent = htmlContent.replace(/<[^>]*>/g, '').toLowerCase();
  const titleContent = postTitle.toLowerCase();

  PRAVDA_SERVICES.forEach(service => {
    // Count keyword matches in content and title
    let matchCount = 0;
    
    service.keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      if (textContent.includes(keywordLower)) matchCount += 1;
      if (titleContent.includes(keywordLower)) matchCount += 2; // Title matches are more important
    });

    // Include services with 2+ matches
    if (matchCount >= 2) {
      relevantServices.push({
        ...service,
        // Add match count for sorting
        matchCount
      } as ServiceLink & { matchCount: number });
    }
  });

  // Sort by relevance (match count) and return top 2
  return relevantServices
    .sort((a, b) => (b as any).matchCount - (a as any).matchCount)
    .slice(0, 2);
}

/**
 * Creates a contextual services recommendation box
 */
export function createServicesRecommendationBox(relevantServices: ServiceLink[]): string {
  if (relevantServices.length === 0) return '';

  return `
    <div class="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-[#ECB629]/20 rounded-lg p-6 my-8">
      <h3 class="text-lg font-semibold text-[#ECB629] mb-4">📈 Свързани услуги от Pravda Agency</h3>
      <div class="grid gap-4 ${relevantServices.length > 1 ? 'md:grid-cols-2' : ''}">
        ${relevantServices.map(service => `
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <h4 class="font-semibold text-white mb-2">${service.title}</h4>
            <p class="text-gray-300 text-sm mb-3">${service.description}</p>
            <a href="${service.url}" class="inline-flex items-center text-[#ECB629] hover:text-[#ECB629]/80 font-medium text-sm transition-colors">
              Научете повече 
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}