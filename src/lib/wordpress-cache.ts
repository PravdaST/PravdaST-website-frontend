// In-memory cache for WordPress API responses
interface CacheItem {
  data: any;
  timestamp: number;
  expiry: number;
}

const cache = new Map<string, CacheItem>();

export function getCachedData(key: string): any | null {
  const item = cache.get(key);
  if (!item) return null;
  
  if (Date.now() > item.expiry) {
    cache.delete(key);
    return null;
  }
  
  return item.data;
}

export function setCachedData(key: string, data: any, ttlMinutes: number = 60): void {
  const expiry = Date.now() + (ttlMinutes * 60 * 1000);
  cache.set(key, {
    data,
    timestamp: Date.now(),
    expiry
  });
  
  // Clean old entries periodically
  if (cache.size > 100) {
    cleanExpiredCache();
  }
}

export function cleanExpiredCache(): void {
  const now = Date.now();
  for (const [key, item] of cache.entries()) {
    if (now > item.expiry) {
      cache.delete(key);
    }
  }
}