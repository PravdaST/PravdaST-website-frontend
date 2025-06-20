// Script за автоматично създаване на Content Types в локален Strapi
// Изпълни с: node strapi-setup-script.js

const STRAPI_URL = 'http://127.0.0.1:1337';
const API_TOKEN = '076d680706abf17d1baeb8c86597c6f006aa82537b94726eb219d12caa056b729554866dc5408827d6d027a8bc7330a125788f8048574eaa38daea1a586ecf5f728bb6d294509d68c26b3c8574811c7c632b32d90096d2250d55e1da7fbcb1f75f92d4ba6b07e3121078003fa7cfe982b79965ddb074c001591714ed7057ea7b';

async function makeRequest(endpoint, method = 'GET', data = null) {
  const options = {
    method,
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${STRAPI_URL}${endpoint}`, options);
    const result = await response.json();
    
    if (!response.ok) {
      console.error(`Грешка при ${method} ${endpoint}:`, result);
      return null;
    }
    
    return result;
  } catch (error) {
    console.error(`Network грешка при ${endpoint}:`, error.message);
    return null;
  }
}

// 1. Създаваме SEO Component първо
async function createSEOComponent() {
  console.log('Създавам SEO Component...');
  
  const seoComponent = {
    component: {
      displayName: 'SEO',
      category: 'shared',
      attributes: {
        meta_title: {
          type: 'string',
          maxLength: 60,
        },
        meta_description: {
          type: 'text',
          maxLength: 160,
        },
        keywords: {
          type: 'string',
        },
        canonical_url: {
          type: 'string',
        },
        og_title: {
          type: 'string',
          maxLength: 60,
        },
        og_description: {
          type: 'text',
          maxLength: 160,
        },
        og_image: {
          type: 'media',
          multiple: false,
          allowedTypes: ['images'],
        },
        no_index: {
          type: 'boolean',
          default: false,
        },
      },
    },
  };

  return await makeRequest('/api/content-type-builder/components', 'POST', seoComponent);
}

// 2. Създаваме Pages Content Type
async function createPagesContentType() {
  console.log('Създавам Pages Content Type...');
  
  const pagesContentType = {
    contentType: {
      kind: 'collectionType',
      collectionName: 'pages',
      info: {
        singularName: 'page',
        pluralName: 'pages',
        displayName: 'Pages',
        description: 'Страници на сайта',
      },
      options: {
        draftAndPublish: true,
      },
      attributes: {
        title: {
          type: 'string',
          required: true,
        },
        slug: {
          type: 'uid',
          targetField: 'title',
          required: true,
        },
        content: {
          type: 'richtext',
        },
        excerpt: {
          type: 'text',
          maxLength: 200,
        },
        seo: {
          type: 'component',
          repeatable: false,
          component: 'shared.seo',
        },
        featured_image: {
          type: 'media',
          multiple: false,
          allowedTypes: ['images'],
        },
      },
    },
  };

  return await makeRequest('/api/content-type-builder/content-types', 'POST', pagesContentType);
}

// 3. Създаваме Services Content Type
async function createServicesContentType() {
  console.log('Създавам Services Content Type...');
  
  const servicesContentType = {
    contentType: {
      kind: 'collectionType',
      collectionName: 'services',
      info: {
        singularName: 'service',
        pluralName: 'services',
        displayName: 'Services',
        description: 'Услуги на компанията',
      },
      options: {
        draftAndPublish: true,
      },
      attributes: {
        name: {
          type: 'string',
          required: true,
        },
        slug: {
          type: 'uid',
          targetField: 'name',
          required: true,
        },
        description: {
          type: 'richtext',
        },
        short_description: {
          type: 'text',
          maxLength: 300,
        },
        price: {
          type: 'string',
        },
        features: {
          type: 'json',
        },
        icon: {
          type: 'string',
        },
        seo: {
          type: 'component',
          repeatable: false,
          component: 'shared.seo',
        },
      },
    },
  };

  return await makeRequest('/api/content-type-builder/content-types', 'POST', servicesContentType);
}

// 4. Създаваме Blog Posts Content Type
async function createBlogPostsContentType() {
  console.log('Създавам Blog Posts Content Type...');
  
  const blogPostsContentType = {
    contentType: {
      kind: 'collectionType',
      collectionName: 'blog_posts',
      info: {
        singularName: 'blog-post',
        pluralName: 'blog-posts',
        displayName: 'Blog Posts',
        description: 'Блог статии',
      },
      options: {
        draftAndPublish: true,
      },
      attributes: {
        title: {
          type: 'string',
          required: true,
        },
        slug: {
          type: 'uid',
          targetField: 'title',
          required: true,
        },
        content: {
          type: 'richtext',
        },
        excerpt: {
          type: 'text',
          maxLength: 300,
        },
        author: {
          type: 'string',
          default: 'Pravda ST',
        },
        published_at: {
          type: 'datetime',
        },
        featured_image: {
          type: 'media',
          multiple: false,
          allowedTypes: ['images'],
        },
        tags: {
          type: 'json',
        },
        seo: {
          type: 'component',
          repeatable: false,
          component: 'shared.seo',
        },
      },
    },
  };

  return await makeRequest('/api/content-type-builder/content-types', 'POST', blogPostsContentType);
}

// 5. Създаваме Contact Messages Content Type
async function createContactMessagesContentType() {
  console.log('Създавам Contact Messages Content Type...');
  
  const contactMessagesContentType = {
    contentType: {
      kind: 'collectionType',
      collectionName: 'contact_messages',
      info: {
        singularName: 'contact-message',
        pluralName: 'contact-messages',
        displayName: 'Contact Messages',
        description: 'Съобщения от контактната форма',
      },
      options: {
        draftAndPublish: false,
      },
      attributes: {
        name: {
          type: 'string',
          required: true,
        },
        email: {
          type: 'email',
          required: true,
        },
        phone: {
          type: 'string',
        },
        company: {
          type: 'string',
        },
        message: {
          type: 'text',
          required: true,
        },
        service_interest: {
          type: 'string',
        },
        status: {
          type: 'enumeration',
          enum: ['new', 'contacted', 'converted'],
          default: 'new',
        },
      },
    },
  };

  return await makeRequest('/api/content-type-builder/content-types', 'POST', contactMessagesContentType);
}

// Главна функция за изпълнение
async function setupStrapi() {
  console.log('🚀 Започвам настройка на Strapi Content Types...\n');

  // Тестваме връзката
  console.log('Тествам връзката със Strapi...');
  const healthCheck = await makeRequest('/api');
  if (!healthCheck) {
    console.error('❌ Не мога да се свържа със Strapi. Моля стартирай локалния Strapi на порт 1337');
    return;
  }
  console.log('✅ Връзката със Strapi успешна\n');

  // Създаваме Content Types в правилната последователност
  const results = [];
  
  // 1. SEO Component (първо)
  results.push(await createSEOComponent());
  
  // Малка пауза за да се обработи
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // 2. Останалите Content Types
  results.push(await createPagesContentType());
  results.push(await createServicesContentType());
  results.push(await createBlogPostsContentType());
  results.push(await createContactMessagesContentType());

  // Проверяваме резултатите
  const successful = results.filter(result => result !== null).length;
  const total = results.length;

  console.log(`\n📊 Резултати: ${successful}/${total} Content Types създадени успешно`);
  
  if (successful === total) {
    console.log('🎉 Всички Content Types са създадени успешно!');
    console.log('\n📝 Следващи стъпки:');
    console.log('1. Отвори Strapi Admin: http://localhost:1337/admin');
    console.log('2. Настрой Permissions в Settings > Roles > Public');
    console.log('3. Добави малко тестово съдържание');
    console.log('4. Тествай интеграцията в /strapi-test');
  } else {
    console.log('⚠️  Някои Content Types не са създадени. Провери грешките по-горе.');
  }
}

// Изпълни setup
setupStrapi().catch(console.error);