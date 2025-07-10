import { useEffect } from 'react'

interface SEOData {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonical?: string
  noindex?: boolean
}

export function useSEO(seoData: SEOData) {
  useEffect(() => {
    // Update title
    if (seoData.title) {
      document.title = seoData.title
    }

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = name
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    if (seoData.description) {
      updateMetaTag('description', seoData.description)
      updatePropertyTag('og:description', seoData.description)
      updateMetaTag('twitter:description', seoData.description)
    }

    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords)
    }

    if (seoData.ogImage) {
      updatePropertyTag('og:image', seoData.ogImage)
      updateMetaTag('twitter:image', seoData.ogImage)
    }

    if (seoData.ogType) {
      updatePropertyTag('og:type', seoData.ogType)
    }

    if (seoData.twitterCard) {
      updateMetaTag('twitter:card', seoData.twitterCard)
    }

    if (seoData.canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = seoData.canonical
    }

    if (seoData.noindex) {
      updateMetaTag('robots', 'noindex, nofollow')
    } else {
      updateMetaTag('robots', 'index, follow')
    }

    // Always update og:title and twitter:title if title exists
    if (seoData.title) {
      updatePropertyTag('og:title', seoData.title)
      updateMetaTag('twitter:title', seoData.title)
    }

    // Update og:url to current page
    updatePropertyTag('og:url', window.location.href)

  }, [seoData])
}

export function useStructuredData(data: object) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    script.id = 'structured-data'

    // Remove existing structured data
    const existing = document.getElementById('structured-data')
    if (existing) {
      existing.remove()
    }

    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [data])
}