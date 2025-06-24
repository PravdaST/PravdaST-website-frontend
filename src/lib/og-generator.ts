// Open Graph Image Generator за всяка страница

export interface OGImageOptions {
  title: string;
  description?: string;
  category?: string;
  color?: string;
  logo?: boolean;
}

export class OGImageGenerator {
  private baseUrl: string;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;

  constructor(baseUrl: string = 'https://www.pravdagency.eu') {
    this.baseUrl = baseUrl;
    if (typeof window !== 'undefined') {
      this.canvas = document.createElement('canvas');
      this.canvas.width = 1200;
      this.canvas.height = 630;
      this.ctx = this.canvas.getContext('2d');
    }
  }

  // Генерира Open Graph изображение за страница
  generateOGImage(options: OGImageOptions): string {
    if (!this.canvas || !this.ctx) {
      // Fallback за server-side или когато canvas не е достъпен
      return `${this.baseUrl}/og-default.png`;
    }

    const { title, description, category, color = '#ECB628', logo = true } = options;
    const ctx = this.ctx;

    // Почистване на canvas
    ctx.clearRect(0, 0, 1200, 630);

    // Градиент фон
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, '#0f0f23');
    gradient.addColorStop(1, '#1a1a2e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);

    // Технически grid pattern
    ctx.strokeStyle = 'rgba(236, 182, 40, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 1200; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 630);
      ctx.stroke();
    }
    for (let i = 0; i < 630; i += 50) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(1200, i);
      ctx.stroke();
    }

    // Лого (ако е включено)
    if (logo) {
      ctx.fillStyle = color;
      ctx.fillRect(80, 80, 60, 60);
      ctx.fillStyle = '#0f0f23';
      ctx.font = 'bold 36px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('P', 110, 120);
    }

    // Категория badge
    if (category) {
      ctx.fillStyle = color;
      ctx.fillRect(80, 180, 200, 40);
      ctx.fillStyle = '#0f0f23';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(category.toUpperCase(), 90, 205);
    }

    // Заглавие
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'left';
    const maxWidth = 1000;
    const lineHeight = 60;
    const words = title.split(' ');
    let line = '';
    let y = 280;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, 80, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 80, y);

    // Описание
    if (description) {
      ctx.fillStyle = '#cccccc';
      ctx.font = '24px Arial';
      const descY = y + 60;
      const descWords = description.split(' ');
      let descLine = '';
      let descCurrentY = descY;

      for (let n = 0; n < descWords.length; n++) {
        const testLine = descLine + descWords[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(descLine, 80, descCurrentY);
          descLine = descWords[n] + ' ';
          descCurrentY += 36;
          if (descCurrentY > 500) break; // Ограничаваме височината
        } else {
          descLine = testLine;
        }
      }
      if (descCurrentY <= 500) {
        ctx.fillText(descLine, 80, descCurrentY);
      }
    }

    // Pravdast брандинг в долния ъгъл
    ctx.fillStyle = color;
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('pravdagency.eu', 1120, 580);

    return this.canvas.toDataURL('image/png');
  }

  // Предефинирани OG изображения за основните страници
  getPageOGConfig(slug: string): OGImageOptions {
    const configs: Record<string, OGImageOptions> = {
      '/': {
        title: 'Pravdast - Business Engineering Platform',
        description: 'Създаваме предсказуеми системи за растеж на B2B компании в България',
        category: 'Business Engineering'
      },
      '/services': {
        title: 'Бизнес Инженеринг Услуги',
        description: 'SEO Struktor™, Clientomat™ и Sales Engine™ за системен растеж',
        category: 'Услуги'
      },
      '/services/seo-struktor': {
        title: 'SEO Struktor™',
        description: 'Системен подход към SEO оптимизация за устойчив органичен растеж',
        category: 'SEO Система'
      },
      '/services/clientomat': {
        title: 'Clientomat™',
        description: 'Автоматизация на клиентските процеси за ефективност и качество',
        category: 'Автоматизация'
      },
      '/services/sales-engine': {
        title: 'Sales Engine™',
        description: 'Продажбена система за предсказуеми резултати и растеж',
        category: 'Продажби'
      },
      '/case-studies': {
        title: 'Казуси за Успех',
        description: 'Истории за клиенти, които постигнаха предсказуем растеж',
        category: 'Казуси'
      },
      '/blog': {
        title: 'Експертен Блог',
        description: 'Стратегии и тактики за бизнес растеж от експертите в Pravdast',
        category: 'Блог'
      },
      '/about': {
        title: 'За Pravdast',
        description: 'Екипът зад бизнес инженеринг решенията за българските компании',
        category: 'За нас'
      },
      '/contact': {
        title: 'Свържете се с нас',
        description: 'Започнете вашето пътуване към предсказуем бизнес растеж',
        category: 'Контакт'
      }
    };

    return configs[slug] || {
      title: 'Pravdast Business Engineering',
      description: 'Системи за предсказуем растеж на B2B компании',
      category: 'Business Engineering'
    };
  }

  // Static OG images за по-добра производителност
  getStaticOGImageUrl(slug: string): string {
    const imageMap: Record<string, string> = {
      '/': '/og-images/home.svg',
      '/services': '/og-images/services.svg',
      '/services/seo-struktor': '/og-images/seo-struktor.svg',
      '/services/clientomat': '/og-images/clientomat.svg',
      '/services/sales-engine': '/og-images/sales-engine.svg',
      '/case-studies': '/og-images/case-studies.svg',
      '/blog': '/og-images/blog.svg',
      '/about': '/og-images/about.svg',
      '/contact': '/og-images/contact.svg'
    };

    return `${this.baseUrl}${imageMap[slug] || '/og-images/default.svg'}`;
  }
}

// Export singleton instance
export const ogImageGenerator = new OGImageGenerator();