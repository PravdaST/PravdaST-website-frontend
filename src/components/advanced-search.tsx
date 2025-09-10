'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, Filter, Clock, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import PravdaHeading from '@/components/typography/PravdaHeading'
import PravdaText from '@/components/typography/PravdaText'

interface SearchResult {
  id: string
  title: string
  description: string
  category: 'service' | 'page' | 'calculator' | 'blog'
  url: string
  relevance: number
}

const searchableContent: SearchResult[] = [
  // Services
  {
    id: 'seo-struktor',
    title: 'SEO Struktor™ - Техническа SEO оптимизация',
    description: 'Систематична SEO оптимизация за предвидими резултати в Google',
    category: 'service',
    url: '/services/seo-struktor',
    relevance: 10
  },
  {
    id: 'trendlab',
    title: 'Trendlab™ - Създаване на съдържание',
    description: 'Стратегическо създаване на съдържание и storytelling',
    category: 'service',
    url: '/services/trendlab',
    relevance: 9
  },
  {
    id: 'clickstarter',
    title: 'Clickstarter™ - Платени рекламни кампании',
    description: 'Оптимизация на Google Ads и Facebook реклами',
    category: 'service',
    url: '/services/clickstarter',
    relevance: 8
  },
  {
    id: 'clientomat',
    title: 'Clientomat™ - Автоматизация на комуникацията',
    description: 'Email маркетинг и CRM автоматизация',
    category: 'service',
    url: '/services/clientomat',
    relevance: 7
  },
  // Pages
  {
    id: 'case-studies',
    title: 'Case Studies - Успешни проекти',
    description: 'Реални резултати от наши клиенти',
    category: 'page',
    url: '/case-studies',
    relevance: 5
  },
  {
    id: 'contact',
    title: 'Контакти - Свържете се с нас',
    description: 'Безплатна консултация и оферта',
    category: 'page',
    url: '/contact',
    relevance: 4
  }
]

interface AdvancedSearchProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvancedSearch({ isOpen, onClose }: AdvancedSearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  // Load recent searches from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pravda-recent-searches')
      if (saved) {
        setRecentSearches(JSON.parse(saved))
      }
    }
  }, [])

  // Focus input when search opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Search functionality
  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    const filtered = searchableContent
      .filter(item => {
        const matchesQuery = 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
        
        return matchesQuery && matchesCategory
      })
      .sort((a, b) => {
        // Boost exact title matches
        const aExactMatch = a.title.toLowerCase().includes(query.toLowerCase())
        const bExactMatch = b.title.toLowerCase().includes(query.toLowerCase())
        
        if (aExactMatch && !bExactMatch) return -1
        if (!aExactMatch && bExactMatch) return 1
        
        return b.relevance - a.relevance
      })
      .slice(0, 6)

    setResults(filtered)
  }, [query, selectedCategory])

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      // Save to recent searches
      const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5)
      setRecentSearches(updated)
      localStorage.setItem('pravda-recent-searches', JSON.stringify(updated))
    }
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('pravda-recent-searches')
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-slate-900 border border-[#ECB629]/20 rounded-xl w-full max-w-2xl mx-4 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-6 border-b border-[#ECB629]/10">
          <div className="relative flex items-center gap-4">
            <Search className="w-5 h-5 text-[#ECB629]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Търсете услуги, страници, съдържание..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && query.trim()) {
                  handleSearch(query)
                }
              }}
            />
            <button
              onClick={onClose}
              className="p-1 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          
          {/* Category filters */}
          <div className="flex gap-2 mt-4">
            {[
              { key: 'all', label: 'Всички' },
              { key: 'service', label: 'Услуги' },
              { key: 'calculator', label: 'Калкулатори' },
              { key: 'page', label: 'Страници' }
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedCategory === category.key
                    ? 'bg-[#ECB629] text-black'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {query.length >= 2 && results.length > 0 && (
            <div className="p-4">
              <h3 className="text-sm text-gray-400 mb-3">Резултати</h3>
              <div className="space-y-2">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={result.url}
                    onClick={() => {
                      handleSearch(query)
                      onClose()
                    }}
                    className="block p-3 rounded-lg hover:bg-slate-800 transition-colors group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-white font-medium group-hover:text-[#ECB629] transition-colors">
                          {result.title}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                          {result.description}
                        </p>
                        <span className="inline-block mt-2 px-2 py-1 text-xs bg-slate-700 text-gray-300 rounded">
                          {result.category === 'service' && 'Услуга'}
                          {result.category === 'calculator' && 'Калкулатор'}
                          {result.category === 'page' && 'Страница'}
                          {result.category === 'blog' && 'Статия'}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#ECB629] transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="p-6 text-center">
              <p className="text-gray-400">Няма намерени резултати за "{query}"</p>
              <p className="text-gray-500 text-sm mt-2">
                Опитайте с различни ключови думи или разгледайте нашите услуги
              </p>
            </div>
          )}

          {/* Recent Searches */}
          {query.length < 2 && recentSearches.length > 0 && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm text-gray-400">Последни търсения</h3>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-gray-500 hover:text-gray-400"
                >
                  Изчисти
                </button>
              </div>
              <div className="space-y-1">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-slate-800 transition-colors text-left"
                  >
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-300">{search}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick suggestions when empty */}
          {query.length < 2 && recentSearches.length === 0 && (
            <div className="p-4">
              <h3 className="text-sm text-gray-400 mb-3">Популярни търсения</h3>
              <div className="space-y-1">
                {['SEO оптимизация', 'Google реклами', 'ROI калкулатор', 'Email маркетинг'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="block w-full p-2 rounded-lg hover:bg-slate-800 transition-colors text-left text-gray-300"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// Search trigger button component
export function SearchTrigger() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-gray-300 hover:text-white"
      >
        <Search className="w-4 h-4" />
        <span className="hidden md:inline">Търсене</span>
        <span className="hidden md:inline text-xs text-gray-500">⌘K</span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <AdvancedSearch isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}