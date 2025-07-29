'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  Save, 
  Eye, 
  EyeOff, 
  Edit, 
  Trash2, 
  Plus, 
  Calendar,
  User,
  Tag,
  Image as ImageIcon,
  BarChart3,
  Settings
} from 'lucide-react'
import { motion } from 'framer-motion'

// Blog post schema
const blogPostSchema = z.object({
  title: z.string().min(5, 'Заглавието трябва да е поне 5 символа'),
  slug: z.string().min(1, 'URL slug е задължителен'),
  excerpt: z.string().min(20, 'Извлечението трябва да е поне 20 символа'),
  content: z.string().min(100, 'Съдържанието трябва да е поне 100 символа'),
  author: z.string().min(1, 'Авторът е задължителен'),
  category: z.string().min(1, 'Категорията е задължителна'),
  tags: z.string().min(1, 'Поне един таг е задължителен'),
  featuredImage: z.string().optional(),
  // Meta fields removed - using title and excerpt instead
  isPublished: z.boolean(),
  publishedAt: z.string().optional()
})

type BlogPostForm = z.infer<typeof blogPostSchema>

interface BlogPost extends BlogPostForm {
  id: number
  createdAt: string
  updatedAt: string
  readTime: number
  views?: number
}

const categories = [
  'SEO оптимизация',
  'Дигитален маркетинг', 
  'Реклама',
  'Email маркетинг',
  'Content маркетинг',
  'Социални мрежи',
  'Web Development',
  'Бизнес стратегии'
]

export function AdminBlogClient() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'posts' | 'analytics' | 'settings'>('posts')

  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<BlogPostForm>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      isPublished: false,
      author: 'Pravda Agency Team'
    }
  })

  // Generate slug from title
  const watchedTitle = watch('title')
  useEffect(() => {
    if (watchedTitle && !editingPost) {
      const slug = watchedTitle
        .toLowerCase()
        .replace(/[^\u0400-\u04FF\w\s-]/g, '') // Keep Cyrillic, Latin, numbers, spaces, hyphens
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
      setValue('slug', slug)
    }
  }, [watchedTitle, setValue, editingPost])

  // Load posts
  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog/posts')
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: BlogPostForm) => {
    try {
      const url = editingPost ? `/api/blog/posts/${editingPost.id}` : '/api/blog/posts'
      const method = editingPost ? 'PUT' : 'POST'
      
      // Process tags
      const processedData = {
        ...data,
        tags: data.tags.split(',').map(tag => tag.trim()),
        readTime: calculateReadTime(data.content),
        publishedAt: data.isPublished ? (data.publishedAt || new Date().toISOString()) : null
      }

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(processedData)
      })

      if (response.ok) {
        await fetchPosts()
        resetForm()
        alert(editingPost ? 'Статията е обновена успешно!' : 'Статията е създадена успешно!')
      } else {
        throw new Error('Failed to save post')
      }
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Грешка при запазване на статията')
    }
  }

  const deletePost = async (id: number) => {
    if (!confirm('Сигурни ли сте, че искате да изтриете тази статия?')) return

    try {
      const response = await fetch(`/api/blog/posts/${id}`, { method: 'DELETE' })
      if (response.ok) {
        await fetchPosts()
        alert('Статията е изтрита успешно!')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Грешка при изтриване на статията')
    }
  }

  const editPost = (post: BlogPost) => {
    setEditingPost(post)
    setIsCreating(true)
    reset({
      ...post,
      tags: Array.isArray(post.tags) ? post.tags.join(', ') : post.tags
    })
  }

  const resetForm = () => {
    setEditingPost(null)
    setIsCreating(false)
    reset({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author: 'Pravda Agency Team',
      category: '',
      tags: '',
      featuredImage: '',
      // Meta fields removed from schema
      isPublished: false,
      publishedAt: ''
    })
  }

  const calculateReadTime = (content: string): number => {
    const wordsPerMinute = 200
    const words = content.split(/\s+/).length
    return Math.ceil(words / wordsPerMinute)
  }

  const togglePublish = async (post: BlogPost) => {
    try {
      const response = await fetch(`/api/blog/posts/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...post,
          isPublished: !post.isPublished,
          publishedAt: !post.isPublished ? new Date().toISOString() : null
        })
      })

      if (response.ok) {
        await fetchPosts()
      }
    } catch (error) {
      console.error('Error toggling publish status:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Зареждане...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#ECB629]">Blog Administration</h1>
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2 bg-[#ECB629] text-black px-4 py-2 rounded-lg hover:bg-[#d4a017] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Нова статия
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8">
          {[
            { key: 'posts', label: 'Статии', icon: Edit },
            { key: 'analytics', label: 'Аналитика', icon: BarChart3 },
            { key: 'settings', label: 'Настройки', icon: Settings }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
                activeTab === key
                  ? 'bg-slate-800 text-[#ECB629]'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Posts Tab */}
        {activeTab === 'posts' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Posts List */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Всички статии ({posts.length})</h2>
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-800 p-4 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-white line-clamp-1">{post.title}</h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => togglePublish(post)}
                        className={`p-1 rounded ${
                          post.isPublished 
                            ? 'text-green-400 hover:text-green-300' 
                            : 'text-gray-400 hover:text-gray-300'
                        }`}
                        title={post.isPublished ? 'Публикувана' : 'Чернова'}
                      >
                        {post.isPublished ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => editPost(post)}
                        className="p-1 text-blue-400 hover:text-blue-300"
                        title="Редактирай"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="p-1 text-red-400 hover:text-red-300"
                        title="Изтрий"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.createdAt).toLocaleDateString('bg-BG')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    {post.views && (
                      <span>{post.views} прегледи</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Create/Edit Form */}
            {isCreating && (
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">
                    {editingPost ? 'Редактирай статия' : 'Създай нова статия'}
                  </h2>
                  <button
                    onClick={resetForm}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Заглавие</label>
                    <input
                      {...register('title')}
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-[#ECB629] focus:outline-none"
                      placeholder="Въведете заглавие..."
                    />
                    {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>}
                  </div>

                  {/* Slug */}
                  <div>
                    <label className="block text-sm font-medium mb-1">URL Slug</label>
                    <input
                      {...register('slug')}
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-[#ECB629] focus:outline-none"
                      placeholder="url-slug"
                    />
                    {errors.slug && <p className="text-red-400 text-sm mt-1">{errors.slug.message}</p>}
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Извлечение</label>
                    <textarea
                      {...register('excerpt')}
                      rows={3}
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-[#ECB629] focus:outline-none"
                      placeholder="Кратко описание на статията..."
                    />
                    {errors.excerpt && <p className="text-red-400 text-sm mt-1">{errors.excerpt.message}</p>}
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Съдържание</label>
                    <textarea
                      {...register('content')}
                      rows={10}
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-[#ECB629] focus:outline-none"
                      placeholder="Пълно съдържание на статията..."
                    />
                    {errors.content && <p className="text-red-400 text-sm mt-1">{errors.content.message}</p>}
                  </div>

                  {/* Category & Tags */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Категория</label>
                      <select
                        {...register('category')}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-[#ECB629] focus:outline-none"
                      >
                        <option value="">Изберете категория</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Тагове (разделени със запетая)</label>
                      <input
                        {...register('tags')}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-[#ECB629] focus:outline-none"
                        placeholder="SEO, маркетинг, реклама"
                      />
                      {errors.tags && <p className="text-red-400 text-sm mt-1">{errors.tags.message}</p>}
                    </div>
                  </div>

                  {/* SEO Note */}
                  <div className="border-t border-slate-600 pt-4">
                    <p className="text-sm text-slate-400">
                      SEO: Заглавието и извлечението ще се използват автоматично за meta tags
                    </p>
                  </div>

                  {/* Publish Options */}
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        {...register('isPublished')}
                        className="w-4 h-4 text-[#ECB629] bg-slate-700 border-slate-600 rounded focus:ring-[#ECB629]"
                      />
                      <span>Публикувай веднага</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-[#ECB629] text-black px-6 py-2 rounded-lg hover:bg-[#d4a017] transition-colors font-medium"
                  >
                    <Save className="w-4 h-4" />
                    {editingPost ? 'Обнови статията' : 'Създай статията'}
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Blog Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-[#ECB629]">Общо статии</h3>
                <p className="text-3xl font-bold">{posts.length}</p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-[#ECB629]">Публикувани</h3>
                <p className="text-3xl font-bold">{posts.filter(p => p.isPublished).length}</p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-[#ECB629]">Чернови</h3>
                <p className="text-3xl font-bold">{posts.filter(p => !p.isPublished).length}</p>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Blog Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Default Author</label>
                <input
                  defaultValue="Pravda Agency Team"
                  className="w-full max-w-md bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-[#ECB629] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Posts per page</label>
                <select className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-[#ECB629] focus:outline-none">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}