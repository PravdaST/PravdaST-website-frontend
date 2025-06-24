import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { 
  PlusCircle, 
  Edit3, 
  Trash2, 
  FileText, 
  FolderPlus, 
  Save, 
  Eye, 
  Calendar,
  User,
  LogOut
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { BlogPost, Category } from '../../../shared/schema';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch data
  const { data: posts = [], isLoading: postsLoading } = useQuery({
    queryKey: ['/api/admin/posts'],
  });

  const { data: categories = [], isLoading: categoriesLoading } = useQuery({
    queryKey: ['/api/admin/categories'],
  });

  // Post mutations
  const createPostMutation = useMutation({
    mutationFn: async (data: any) => await apiRequest('/api/admin/posts', 'POST', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/posts'] });
      setIsCreating(false);
      setSelectedPost(null);
      toast({ title: "Постът е създаден успешно!" });
    },
  });

  const updatePostMutation = useMutation({
    mutationFn: async ({ id, ...data }: any) => await apiRequest(`/api/admin/posts/${id}`, 'PUT', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/posts'] });
      setSelectedPost(null);
      toast({ title: "Постът е обновен успешно!" });
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: async (id: number) => await apiRequest(`/api/admin/posts/${id}`, 'DELETE'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/posts'] });
      toast({ title: "Постът е изтрит успешно!" });
    },
  });

  const publishPostMutation = useMutation({
    mutationFn: async (id: number) => await apiRequest(`/api/admin/posts/${id}/publish`, 'PUT'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/posts'] });
      toast({ title: "Постът е публикуван успешно!" });
    },
  });

  // Category mutations
  const createCategoryMutation = useMutation({
    mutationFn: async (data: any) => await apiRequest('/api/admin/categories', 'POST', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/categories'] });
      setIsCreatingCategory(false);
      setSelectedCategory(null);
      toast({ title: "Категорията е създадена успешно!" });
    },
  });

  const updateCategoryMutation = useMutation({
    mutationFn: async ({ id, ...data }: any) => await apiRequest(`/api/admin/categories/${id}`, 'PUT', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/categories'] });
      setSelectedCategory(null);
      toast({ title: "Категорията е обновена успешно!" });
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: async (id: number) => await apiRequest(`/api/admin/categories/${id}`, 'DELETE'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/categories'] });
      toast({ title: "Категорията е изтрита успешно!" });
    },
  });

  const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get('title'),
      slug: formData.get('slug'),
      excerpt: formData.get('excerpt'),
      content: formData.get('content'),
      categoryId: formData.get('categoryId') ? parseInt(formData.get('categoryId') as string) : null,
      tags: formData.get('tags') ? (formData.get('tags') as string).split(',').map(tag => tag.trim()) : [],
      readTime: parseInt(formData.get('readTime') as string) || 5,
      published: formData.get('published') === 'on',
    };

    if (selectedPost) {
      updatePostMutation.mutate({ id: selectedPost.id, ...data });
    } else {
      createPostMutation.mutate(data);
    }
  };

  const handleCategorySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      slug: formData.get('slug'),
      description: formData.get('description'),
    };

    if (selectedCategory) {
      updateCategoryMutation.mutate({ id: selectedCategory.id, ...data });
    } else {
      createCategoryMutation.mutate(data);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#ECB629]">CRM Dashboard</h1>
            <Button 
              variant="outline" 
              onClick={onLogout}
              className="border-slate-600 text-gray-300 hover:bg-slate-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Изход
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="posts" className="data-[state=active]:bg-[#ECB629] data-[state=active]:text-black">
              <FileText className="h-4 w-4 mr-2" />
              Блог постове
            </TabsTrigger>
            <TabsTrigger value="categories" className="data-[state=active]:bg-[#ECB629] data-[state=active]:text-black">
              <FolderPlus className="h-4 w-4 mr-2" />
              Категории
            </TabsTrigger>
          </TabsList>

          {/* Blog Posts Tab */}
          <TabsContent value="posts" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Управление на блог постове</h2>
              <Button
                onClick={() => {
                  setIsCreating(true);
                  setSelectedPost(null);
                }}
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Нов пост
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Posts List */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Всички постове</CardTitle>
                  <CardDescription>Общо {posts.length} поста</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {postsLoading ? (
                    <div>Зареждане...</div>
                  ) : (
                    posts.map((post: BlogPost) => (
                      <div
                        key={post.id}
                        className="p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-slate-500 cursor-pointer"
                        onClick={() => {
                          setSelectedPost(post);
                          setIsCreating(false);
                        }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-white mb-1">{post.title}</h4>
                            <p className="text-sm text-gray-400 mb-2 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.createdAt).toLocaleDateString('bg-BG')}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <Badge variant={post.published ? "default" : "secondary"}>
                              {post.published ? "Публикуван" : "Чернова"}
                            </Badge>
                            <div className="flex gap-1">
                              {!post.published && (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    publishPostMutation.mutate(post.id);
                                  }}
                                  className="h-6 w-6 p-0 text-green-400 hover:text-green-300"
                                >
                                  <Eye className="h-3 w-3" />
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (confirm('Сигурни ли сте че искате да изтриете този пост?')) {
                                    deletePostMutation.mutate(post.id);
                                  }
                                }}
                                className="h-6 w-6 p-0 text-red-400 hover:text-red-300"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>

              {/* Post Editor */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    {isCreating ? 'Създай нов пост' : selectedPost ? 'Редактирай пост' : 'Избери пост'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(isCreating || selectedPost) ? (
                    <form onSubmit={handlePostSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title" className="text-white">Заглавие</Label>
                        <Input
                          id="title"
                          name="title"
                          defaultValue={selectedPost?.title || ''}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="slug" className="text-white">URL Slug</Label>
                        <Input
                          id="slug"
                          name="slug"
                          defaultValue={selectedPost?.slug || ''}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="excerpt" className="text-white">Кратко описание</Label>
                        <Textarea
                          id="excerpt"
                          name="excerpt"
                          defaultValue={selectedPost?.excerpt || ''}
                          className="bg-slate-700 border-slate-600 text-white"
                          rows={3}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="content" className="text-white">Съдържание</Label>
                        <Textarea
                          id="content"
                          name="content"
                          defaultValue={selectedPost?.content || ''}
                          className="bg-slate-700 border-slate-600 text-white min-h-[200px]"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="categoryId" className="text-white">Категория</Label>
                          <Select name="categoryId" defaultValue={selectedPost?.categoryId?.toString()}>
                            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                              <SelectValue placeholder="Избери категория" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-700 border-slate-600">
                              {categories.map((cat: Category) => (
                                <SelectItem key={cat.id} value={cat.id.toString()}>
                                  {cat.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="readTime" className="text-white">Време за четене (мин)</Label>
                          <Input
                            id="readTime"
                            name="readTime"
                            type="number"
                            defaultValue={selectedPost?.readTime || 5}
                            className="bg-slate-700 border-slate-600 text-white"
                            min="1"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tags" className="text-white">Тагове (разделени със запетая)</Label>
                        <Input
                          id="tags"
                          name="tags"
                          defaultValue={selectedPost?.tags?.join(', ') || ''}
                          className="bg-slate-700 border-slate-600 text-white"
                          placeholder="seo, маркетинг, бизнес"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="published" 
                          name="published"
                          defaultChecked={selectedPost?.published || false}
                        />
                        <Label htmlFor="published" className="text-white">Публикувай веднага</Label>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          type="submit"
                          className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
                          disabled={createPostMutation.isPending || updatePostMutation.isPending}
                        >
                          <Save className="h-4 w-4 mr-2" />
                          {selectedPost ? 'Запиши промените' : 'Създай пост'}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setSelectedPost(null);
                            setIsCreating(false);
                          }}
                          className="border-slate-600 text-gray-300 hover:bg-slate-700"
                        >
                          Отказ
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center text-gray-400 py-8">
                      Избери пост от списъка или създай нов
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Categories Tab */}
          <TabsContent value="categories" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Управление на категории</h2>
              <Button
                onClick={() => {
                  setIsCreatingCategory(true);
                  setSelectedCategory(null);
                }}
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Нова категория
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Categories List */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Всички категории</CardTitle>
                  <CardDescription>Общо {categories.length} категории</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categoriesLoading ? (
                    <div>Зареждане...</div>
                  ) : (
                    categories.map((category: Category) => (
                      <div
                        key={category.id}
                        className="p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-slate-500 cursor-pointer"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsCreatingCategory(false);
                        }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-white mb-1">{category.name}</h4>
                            <p className="text-sm text-gray-400 mb-2">{category.description}</p>
                            <code className="text-xs text-[#ECB629] bg-slate-800 px-2 py-1 rounded">
                              /{category.slug}
                            </code>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm('Сигурни ли сте че искате да изтриете тази категория?')) {
                                deleteCategoryMutation.mutate(category.id);
                              }
                            }}
                            className="h-6 w-6 p-0 text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>

              {/* Category Editor */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    {isCreatingCategory ? 'Създай нова категория' : selectedCategory ? 'Редактирай категория' : 'Избери категория'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(isCreatingCategory || selectedCategory) ? (
                    <form onSubmit={handleCategorySubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Име на категорията</Label>
                        <Input
                          id="name"
                          name="name"
                          defaultValue={selectedCategory?.name || ''}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="slug" className="text-white">URL Slug</Label>
                        <Input
                          id="slug"
                          name="slug"
                          defaultValue={selectedCategory?.slug || ''}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-white">Описание</Label>
                        <Textarea
                          id="description"
                          name="description"
                          defaultValue={selectedCategory?.description || ''}
                          className="bg-slate-700 border-slate-600 text-white"
                          rows={3}
                        />
                      </div>

                      <div className="flex gap-2">
                        <Button
                          type="submit"
                          className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
                          disabled={createCategoryMutation.isPending || updateCategoryMutation.isPending}
                        >
                          <Save className="h-4 w-4 mr-2" />
                          {selectedCategory ? 'Запиши промените' : 'Създай категория'}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setSelectedCategory(null);
                            setIsCreatingCategory(false);
                          }}
                          className="border-slate-600 text-gray-300 hover:bg-slate-700"
                        >
                          Отказ
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center text-gray-400 py-8">
                      Избери категория от списъка или създай нова
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}