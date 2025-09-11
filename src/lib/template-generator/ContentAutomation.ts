import { BusinessData, GeneratedContent, Feature, CustomerReview, ColorScheme, ImageryConfig } from './types';

export class ContentAutomation {
  
  /**
   * Generate taglines based on business type and name
   */
  generateTagline(businessData: BusinessData): string {
    const { name, businessType, templateType } = businessData;
    
    const templates: Record<string, string[]> = {
      restaurant: [
        `Автентични вкусове в ${this.extractLocation(businessData)}`,
        `Качествена храна и уютна атмосфера`,
        `Традиционна кухня с модерен подход`,
        `Вашето любимо място за вкусна храна`,
        `Семейни традиции на масата`
      ],
      cafe: [
        `Където всяка чаша разказва история`,
        `Специално кафе и уютна атмосфера`,
        `Вашето ежедневно кафе убежище`,
        `Перфектното кафе за всеки ден`,
        `Качествено кафе и приятелска атмосфера`
      ],
      shop: [
        `Качествени продукти на достъпни цени`,
        `Всичко необходимо на едно място`,
        `Вашия надежден търговски партньор`,
        `Широк избор от качествени продукти`,
        `Модерен магазин с лично отношение`
      ],
      services: [
        `Професионални услуги с гарантирано качество`,
        `Вашия експерт в областта`,
        `Надеждност и качество на първо място`,
        `Професионални решения за всяка нужда`,
        `Опит, качество и отлични резултати`
      ],
      beauty: [
        `Красота и грижа на най-високо ниво`,
        `Вашето място за релакс и красота`,
        `Професионални процедури за вашата красота`,
        `Където красотата се среща с професионализма`,
        `Грижа за вашата красота и самочувствие`
      ],
      education: [
        `Знания, които променят живота`,
        `Вашият път към успеха започва тук`,
        `Качествено образование за бъдещето`,
        `Обучение на най-високо ниво`,
        `Знания и умения за реалния живот`
      ]
    };

    const businessTemplates = templates[templateType] || templates.services;
    const randomIndex = Math.floor(Math.random() * businessTemplates.length);
    
    return businessTemplates[randomIndex];
  }

  /**
   * Generate business description
   */
  generateDescription(businessData: BusinessData): string {
    const { name, businessType, templateType, message } = businessData;
    
    // If custom message provided, use it as basis
    if (message && message.trim().length > 10) {
      return message.trim();
    }

    const templates: Record<string, string[]> = {
      restaurant: [
        `Семеен ресторант с традиции и съвременно качество от 2020 година`,
        `Предлагаме автентична кухня в приятна и семейна атмосфера`,
        `Качествена храна, приготвена с любов и внимание към детайла`,
        `Ресторант, където традициите се срещат с модерността`
      ],
      cafe: [
        `Specialty кафе и уютна атмосфера от 2021 година`,
        `Място за качествено кафе и приятни моменти`,
        `Уютно кафене с внимание към всеки детайл`,
        `Кафе, където се създават прекрасни спомени`
      ],
      shop: [
        `Модерен магазин с широк избор и отлично обслужване`,
        `Качествени продукти и професионално отношение`,
        `Вашия надежден търговски партньор от 2020 година`,
        `Магазин, където клиентите са на първо място`
      ],
      services: [
        `Професионални услуги с дългогодишен опит и отлични резултати`,
        `Компания, специализирана в предоставянето на качествени услуги`,
        `Професионален екип с богат опит и съвременни методи`,
        `Услуги на най-високо ниво с индивидуален подход`
      ],
      beauty: [
        `Салон за красота с професионални процедури и релаксираща атмосфера`,
        `Място за грижа, красота и пълно релаксиране`,
        `Професионални процедури за красота с модерно оборудване`,
        `Салон, където красотата и грижата са на първо място`
      ],
      education: [
        `Образователен център с фокус върху практическите знания и умения`,
        `Курсове и обучения, подготвящи за реалния живот`,
        `Качествено образование с опитни преподаватели`,
        `Учебен център, където се изгражда бъдещето`
      ]
    };

    const businessTemplates = templates[templateType] || templates.services;
    const randomIndex = Math.floor(Math.random() * businessTemplates.length);
    
    return businessTemplates[randomIndex];
  }

  /**
   * Generate realistic contact information
   */
  generateContactInfo(businessData: BusinessData): any {
    const { customerPhone, customerEmail, name } = businessData;
    const location = this.extractLocation(businessData);
    
    return {
      phone: customerPhone,
      email: customerEmail,
      address: this.generateAddress(location),
      hours: this.generateBusinessHours(businessData.templateType),
      rating: this.generateRating(),
      reviews: this.generateReviewCount()
    };
  }

  /**
   * Generate business address
   */
  private generateAddress(location: string): string {
    const streets = [
      'ул. Витоша', 'бул. Виtoша', 'ул. Граф Игнатиев', 'бул. Цар Борис III',
      'ул. Солунска', 'бул. България', 'ул. Г. С. Раковски', 'ул. Пиротска',
      'бул. Христо Ботев', 'ул. Московска', 'ул. Оборище', 'ул. Шипка'
    ];
    
    const streetNumber = Math.floor(Math.random() * 200) + 1;
    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    
    return `${randomStreet} ${streetNumber}, ${location} 1000`;
  }

  /**
   * Generate business hours based on type
   */
  private generateBusinessHours(templateType: string): { weekdays: string; weekend: string } {
    const schedules: Record<string, { weekdays: string; weekend: string }> = {
      restaurant: {
        weekdays: "11:00 - 23:00",
        weekend: "10:00 - 24:00"
      },
      cafe: {
        weekdays: "07:00 - 22:00", 
        weekend: "08:00 - 23:00"
      },
      shop: {
        weekdays: "09:00 - 19:00",
        weekend: "10:00 - 18:00"
      },
      services: {
        weekdays: "08:00 - 18:00",
        weekend: "09:00 - 16:00"
      },
      beauty: {
        weekdays: "09:00 - 20:00",
        weekend: "10:00 - 19:00"
      },
      education: {
        weekdays: "08:00 - 20:00",
        weekend: "09:00 - 18:00"
      }
    };

    return schedules[templateType] || schedules.services;
  }

  /**
   * Generate realistic rating
   */
  private generateRating(): number {
    // Generate ratings between 4.2 and 4.9
    return Math.round((4.2 + Math.random() * 0.7) * 10) / 10;
  }

  /**
   * Generate review count
   */
  private generateReviewCount(): number {
    return Math.floor(Math.random() * 800) + 50;
  }

  /**
   * Generate customer reviews
   */
  generateReviews(businessData: BusinessData): CustomerReview[] {
    const { templateType, name } = businessData;
    
    const reviewTemplates: Record<string, Array<{ template: string; names: string[] }>> = {
      restaurant: [{
        template: `Най-доброто място за {type} в {location}! {food} е като при баба ми.`,
        names: ['Мария Петрова', 'Стоян Димитров', 'Елена Георгиева', 'Иван Николов']
      }, {
        template: `Отлична храна, приятна атмосфера. Препоръчвам {specialty}!`,
        names: ['Петя Иванова', 'Димитър Тодоров', 'Анна Василева']
      }],
      cafe: [{
        template: `Най-доброто кафе в {location}! Атмосферата е невероятна, а {drink} - перфектно.`,
        names: ['Анна Василева', 'Петър Христов', 'Мила Георгиева']
      }],
      shop: [{
        template: `Отлично обслужване и качествени продукти. Препоръчвам топло!`,
        names: ['Георги Петров', 'Цветелина Димитрова', 'Владимир Стоянов']
      }],
      services: [{
        template: `Професионални услуги на високо ниво. Много съм доволен от резултата!`,
        names: ['Николай Тодоров', 'Силвия Георгиева', 'Красимир Петков']
      }],
      beauty: [{
        template: `Прекрасни процедури и отлично отношение. Чувствам се невероятно!`,
        names: ['Мария Стефанова', 'Десислава Николова', 'Виктория Петрова']
      }],
      education: [{
        template: `Отлични курсове с практическа насоченост. Научих много полезни неща!`,
        names: ['Стефан Иванов', 'Радослава Димитрова', 'Александър Петков']
      }]
    };

    const templates = reviewTemplates[templateType] || reviewTemplates.services;
    const reviews: CustomerReview[] = [];

    for (let i = 0; i < 3; i++) {
      const template = templates[Math.floor(Math.random() * templates.length)];
      const name = template.names[Math.floor(Math.random() * template.names.length)];
      const rating = Math.random() > 0.2 ? 5 : 4; // 80% five stars, 20% four stars
      
      let reviewText = template.template
        .replace('{type}', this.getBusinessTypeDisplay(templateType))
        .replace('{location}', this.extractLocation(businessData))
        .replace('{food}', this.getSpecialtyItem(templateType))
        .replace('{drink}', this.getSpecialtyItem(templateType))
        .replace('{specialty}', this.getSpecialtyItem(templateType));

      reviews.push({
        name,
        rating,
        text: reviewText,
        date: this.generateRandomDate()
      });
    }

    return reviews;
  }

  /**
   * Generate features based on business type
   */
  generateFeatures(templateType: string): Feature[] {
    const featureMap: Record<string, Feature[]> = {
      restaurant: [
        { icon: 'Clock', title: 'Отворени всеки ден', desc: '11:00 - 23:00 ч.' },
        { icon: 'Car', title: 'Безплатен паркинг', desc: 'За нашите гости' },
        { icon: 'CreditCard', title: 'Всички карти', desc: 'Visa, Mastercard, В-pay' },
        { icon: 'Users', title: 'До 80 места', desc: 'Семейни маси и салони' },
        { icon: 'Utensils', title: 'Меню дегустация', desc: 'Специални предложения' },
        { icon: 'Camera', title: 'Фотосесии', desc: 'Идеално за събития' }
      ],
      cafe: [
        { icon: 'Wifi', title: 'Безплатен WiFi', desc: 'Високоскоростен интернет' },
        { icon: 'Laptop', title: 'Work-friendly', desc: 'Контакти за лаптопи' },
        { icon: 'Car', title: 'Паркинг', desc: 'Удобно паркиране' },
        { icon: 'CreditCard', title: 'Всички карти', desc: 'Visa, Mastercard' },
        { icon: 'Coffee', title: 'Specialty кафе', desc: 'Arabica beans' },
        { icon: 'Camera', title: 'Insta-worthy', desc: 'Перфектно за снимки' }
      ],
      shop: [
        { icon: 'ShoppingCart', title: 'Онлайн поръчки', desc: 'Бърза доставка' },
        { icon: 'CreditCard', title: 'Сигурно плащане', desc: 'Всички карти' },
        { icon: 'Truck', title: 'Безплатна доставка', desc: 'Над 50 лв в града' },
        { icon: 'Phone', title: 'Поддръжка', desc: '24/7 клиентска грижа' },
        { icon: 'Award', title: 'Гарантирано качество', desc: '30 дни гаранция' },
        { icon: 'Users', title: 'Лоялни клиенти', desc: 'Отстъпки и бонуси' }
      ],
      services: [
        { icon: 'Award', title: 'Професионално качество', desc: 'Гарантирани резултати' },
        { icon: 'Clock', title: 'Срочност', desc: 'В договорените срокове' },
        { icon: 'Phone', title: '24/7 поддръжка', desc: 'Винаги на разположение' },
        { icon: 'Shield', title: 'Застраховка', desc: 'Пълна отговорност' },
        { icon: 'Users', title: 'Опитен екип', desc: 'Професионалисти' },
        { icon: 'CreditCard', title: 'Гъвкаво плащане', desc: 'По договаряне' }
      ],
      beauty: [
        { icon: 'Sparkles', title: 'Професионални процедури', desc: 'Сертифицирани специалисти' },
        { icon: 'Clock', title: 'Гъвкави часове', desc: 'И в почивните дни' },
        { icon: 'Heart', title: 'Индивидуален подход', desc: 'Грижа за всеки клиент' },
        { icon: 'Shield', title: 'Качествени продукти', desc: 'Само проверени марки' },
        { icon: 'Users', title: 'Опитни специалисти', desc: 'Над 10 години опит' },
        { icon: 'Camera', title: 'Преди и след', desc: 'Видими резултати' }
      ],
      education: [
        { icon: 'GraduationCap', title: 'Сертифицирани курсове', desc: 'Признати дипломи' },
        { icon: 'Users', title: 'Малки групи', desc: 'Персонално внимание' },
        { icon: 'Clock', title: 'Гъвкав график', desc: 'Вечерни и уикенд курсове' },
        { icon: 'Laptop', title: 'Онлайн обучение', desc: 'Дистанционни курсове' },
        { icon: 'Award', title: 'Опитни преподаватели', desc: 'Практически опит' },
        { icon: 'BookOpen', title: 'Практически знания', desc: 'Реални проекти' }
      ]
    };

    return featureMap[templateType] || featureMap.services;
  }

  /**
   * Generate color scheme based on business type
   */
  generateColorScheme(templateType: string): ColorScheme {
    const colorSchemes: Record<string, ColorScheme> = {
      restaurant: {
        primary: '#dc2626', // red-600
        secondary: '#ea580c', // orange-600  
        accent: '#f59e0b', // amber-500
        background: '#fef7cd', // amber-50
        text: '#374151', // gray-700
        light: '#fef3c7' // amber-100
      },
      cafe: {
        primary: '#d97706', // amber-600
        secondary: '#f59e0b', // amber-500
        accent: '#fbbf24', // amber-400
        background: '#fffbeb', // amber-50
        text: '#374151', // gray-700
        light: '#fef3c7' // amber-100
      },
      shop: {
        primary: '#059669', // emerald-600
        secondary: '#10b981', // emerald-500
        accent: '#34d399', // emerald-400
        background: '#ecfdf5', // emerald-50
        text: '#374151', // gray-700
        light: '#d1fae5' // emerald-100
      },
      services: {
        primary: '#2563eb', // blue-600
        secondary: '#3b82f6', // blue-500
        accent: '#60a5fa', // blue-400
        background: '#eff6ff', // blue-50
        text: '#374151', // gray-700
        light: '#dbeafe' // blue-100
      },
      beauty: {
        primary: '#db2777', // pink-600
        secondary: '#ec4899', // pink-500
        accent: '#f472b6', // pink-400
        background: '#fdf2f8', // pink-50
        text: '#374151', // gray-700
        light: '#fce7f3' // pink-100
      },
      education: {
        primary: '#7c3aed', // violet-600
        secondary: '#8b5cf6', // violet-500
        accent: '#a78bfa', // violet-400
        background: '#f5f3ff', // violet-50
        text: '#374151', // gray-700
        light: '#ede9fe' // violet-100
      }
    };

    return colorSchemes[templateType] || colorSchemes.services;
  }

  /**
   * Extract location from business data
   */
  private extractLocation(businessData: BusinessData): string {
    // Try to extract from customization data, business name, or default to Sofia
    const customData = businessData.customizationData || {};
    
    if (customData.location) {
      return customData.location;
    }
    
    // Look for common city names in business name
    const cityNames = ['София', 'Пловдив', 'Варна', 'Бургас', 'Русе', 'Стара Загора', 'Плевен', 'Благоевград'];
    for (const city of cityNames) {
      if (businessData.name.includes(city)) {
        return city;
      }
    }
    
    return 'София'; // Default
  }

  /**
   * Get display name for business type
   */
  private getBusinessTypeDisplay(templateType: string): string {
    const displayNames: Record<string, string> = {
      restaurant: 'българска кухня',
      cafe: 'кафе',
      shop: 'магазин',
      services: 'услуги',
      beauty: 'красота',
      education: 'образование'
    };
    
    return displayNames[templateType] || 'услуги';
  }

  /**
   * Get specialty item for business type
   */
  private getSpecialtyItem(templateType: string): string {
    const specialties: Record<string, string[]> = {
      restaurant: ['мусаката', 'агнешкото', 'кавармата', 'шопската салата'],
      cafe: ['еспресото', 'капучиното', 'латето', 'тирамисуто'],
      shop: ['продуктите', 'обслужването', 'качеството', 'доставката'],
      services: ['услугата', 'професионализма', 'резултата', 'отношението'],
      beauty: ['процедурата', 'резултата', 'отношението', 'атмосферата'],
      education: ['курса', 'обучението', 'преподавателите', 'материалите']
    };
    
    const items = specialties[templateType] || specialties.services;
    return items[Math.floor(Math.random() * items.length)];
  }

  /**
   * Generate random recent date
   */
  private generateRandomDate(): string {
    const now = new Date();
    const daysAgo = Math.floor(Math.random() * 30) + 1; // 1-30 days ago
    const date = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
    
    if (daysAgo === 1) return 'вчера';
    if (daysAgo === 2) return 'позавчера';
    if (daysAgo <= 7) return `преди ${daysAgo} дни`;
    if (daysAgo <= 14) return 'преди седмица';
    if (daysAgo <= 21) return 'преди 2 седмици';
    return 'преди 3 седмици';
  }
}