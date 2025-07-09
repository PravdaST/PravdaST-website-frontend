import { SEOHelmet } from '@/components/seo-helmet';
import { SEOData } from '../../shared/seo-types';

interface UseSEOProps {
  seo?: Partial<SEOData>;
  pageSlug?: string;
}

export function useSEO({ seo, pageSlug }: UseSEOProps) {
  return <SEOHelmet seo={seo} pageSlug={pageSlug} />;
}