// Service Worker за Pravdast Business Engineering Platform
// Версия 1.0 - Performance Caching и Offline Support

const CACHE_NAME = 'pravdast-v1';
const STATIC_CACHE = 'pravdast-static-v1';
const DYNAMIC_CACHE = 'pravdast-dynamic-v1';

// Критични ресурси за caching
const STATIC_ASSETS = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/favicon.ico'
];

// API endpoints за caching
const API_CACHE_PATTERNS = [
  '/api/health',
  '/sitemap.xml',
  '/robots.txt',
  '/api/schema/organization'
];

// Install event - кеширане на статични ресурси
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install Event');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching Static Assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - почистване на стари кешове
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate Event');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Service Worker: Deleting Old Cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - стратегия за кеширане
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Пропускаме chrome-extension заявки
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  // Обработваме само GET заявки
  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(
    handleFetchRequest(request)
  );
});

async function handleFetchRequest(request) {
  const url = new URL(request.url);
  
  // Статични файлове - Cache First
  if (STATIC_ASSETS.includes(url.pathname) || isStaticAsset(url.pathname)) {
    return cacheFirst(request, STATIC_CACHE);
  }
  
  // API заявки - Network First с fallback
  if (isAPIRequest(url.pathname)) {
    return networkFirst(request, DYNAMIC_CACHE);
  }
  
  // HTML страници - Network First с offline fallback
  if (isHTMLRequest(request)) {
    return networkFirstWithOfflineFallback(request);
  }
  
  // За всичко останало - Network Only
  return fetch(request);
}

// Cache First стратегия
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // Връщаме кешираната версия
      return cachedResponse;
    }
    
    // Ако няма в кеша, правим network заявка
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Cache First Error:', error);
    return new Response('Network Error', { status: 503 });
  }
}

// Network First стратегия
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback към кеша при network грешка
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('Offline - Content Not Available', { 
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Network First с offline fallback за HTML
async function networkFirstWithOfflineFallback(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Търсим в кеша
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback към основната страница
    const fallbackResponse = await cache.match('/');
    if (fallbackResponse) {
      return fallbackResponse;
    }
    
    // Offline страница
    return new Response(generateOfflinePage(), {
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

// Помощни функции за идентификация на заявки
function isStaticAsset(pathname) {
  return pathname.match(/\.(js|css|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|ico)$/);
}

function isAPIRequest(pathname) {
  return pathname.startsWith('/api/') || 
         API_CACHE_PATTERNS.some(pattern => pathname.includes(pattern));
}

function isHTMLRequest(request) {
  return request.headers.get('Accept')?.includes('text/html');
}

// Генерира offline страница
function generateOfflinePage() {
  return `
    <!DOCTYPE html>
    <html lang="bg">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Офлайн - Pravdast Business Engineering</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
          color: white;
          margin: 0;
          padding: 20px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .offline-container {
          max-width: 500px;
          padding: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }
        .offline-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }
        h1 {
          color: #ECB628;
          margin-bottom: 20px;
        }
        .retry-btn {
          background: #ECB628;
          color: #0f0f23;
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 20px;
        }
        .retry-btn:hover {
          background: #d4a526;
        }
      </style>
    </head>
    <body>
      <div class="offline-container">
        <div class="offline-icon">📶</div>
        <h1>Няма интернет връзка</h1>
        <p>Изглежда че сте офлайн. Моля проверете интернет връзката си и опитайте отново.</p>
        <button class="retry-btn" onclick="window.location.reload()">
          Опитай отново
        </button>
      </div>
    </body>
    </html>
  `;
}

// Performance tracking
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Background sync за офлайн form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForms());
  }
});

async function syncContactForms() {
  const contactForms = await getStoredContactForms();
  
  for (const form of contactForms) {
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.data)
      });
      
      if (response.ok) {
        await removeStoredContactForm(form.id);
        console.log('Contact form synced successfully');
      }
    } catch (error) {
      console.error('Failed to sync contact form:', error);
    }
  }
}

// IndexedDB операции за offline forms
async function getStoredContactForms() {
  // Simplified - в production ще използваме IndexedDB
  return [];
}

async function removeStoredContactForm(id) {
  // Simplified - в production ще използваме IndexedDB
  return Promise.resolve();
}