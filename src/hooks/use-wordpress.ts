// React 19 use() hook for WordPress data fetching with RSC
import { use } from 'react';
import { cache } from 'react';
import { getWordPressPosts, getWordPressPost, getWordPressCategories } from '@/lib/wordpress';

// Cache WordPress data fetching functions
export const getCachedPosts = cache(async (params?: any) => {
  return getWordPressPosts(params);
});

export const getCachedPost = cache(async (slug: string) => {
  return getWordPressPost(slug);
});

export const getCachedCategories = cache(async () => {
  return getWordPressCategories();
});

// Hook for using WordPress data with React 19 use()
export function useWordPressPosts(params?: any) {
  return use(getCachedPosts(params));
}

export function useWordPressPost(slug: string) {
  return use(getCachedPost(slug));
}

export function useWordPressCategories() {
  return use(getCachedCategories());
}