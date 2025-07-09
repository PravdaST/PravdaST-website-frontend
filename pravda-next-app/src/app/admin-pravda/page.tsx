import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  LogIn, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Save,
  X,
  FileText,
  Users,
  BarChart3,
  Settings,
  Calendar
} from "lucide-react";

// Login form schema
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

// Blog post form schema
const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug must be lowercase with hyphens"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).default([]),
  isPublished: z.boolean().default(false),
});

type LoginForm = z.infer<typeof loginSchema>;
type BlogPostForm = z.infer<typeof blogPostSchema>;

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Contact {
  id: number;
  name: string;
  email: string;
  website: string;
  company?: string;
  message: string;
  createdAt: string;
}

export default function AdminPravdaPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'blog' | 'contacts'>('dashboard');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Check for stored token on load
  useEffect(() => {
    const storedToken = localStorage.getItem('admin_token');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  // Login form
  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Blog post form
  const blogForm = useForm<BlogPostForm>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "",
      tags: [],
      isPublished: false,
    },
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      const response = await fetch('/api/admin?action=login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
      }

      return response.json();
    },
    onSuccess: (data) => {
      setToken(data.token);
      setIsAuthenticated(true);
      localStorage.setItem('admin_token', data.token);
      toast({
        title: "Login successful",
        description: "Welcome to Pravda Agency CRM",
      });
    },
    onError: (error) => {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Logout function
  const logout = async () => {
    try {
      if (token) {
        await fetch('/api/admin?action=logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setToken(null);
      setIsAuthenticated(false);
      localStorage.removeItem('admin_token');
      queryClient.clear();
      toast({
        title: "Logged out",
        description: "You have been logged out successfully",
      });
    }
  };

  // Fetch blog posts
  const { data: blogPosts, isLoading: blogLoading } = useQuery({
    queryKey: ['/api/admin/blog/posts'],
    queryFn: async () => {
      const response = await fetch('/api/admin?action=blog-posts', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      
      return response.json();
    },
    enabled: isAuthenticated && token !== null,
  });

  // Fetch contacts
  const { data: contacts, isLoading: contactsLoading } = useQuery({
    queryKey: ['/api/admin/contacts'],
    queryFn: async () => {
      const response = await fetch('/api/admin?action=contacts', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      
      return response.json();
    },
    enabled: isAuthenticated && token !== null,
  });

  // Create blog post mutation
  const createPostMutation = useMutation({
    mutationFn: async (data: BlogPostForm) => {
      const response = await fetch('/api/admin?action=blog-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create post');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/blog/posts'] });
      setShowBlogForm(false);
      blogForm.reset();
      toast({
        title: "Blog post created",
        description: "The blog post has been created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error creating post",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Update blog post mutation
  const updatePostMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<BlogPostForm> }) => {
      const response = await fetch(`/api/admin?action=blog-post&id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update post');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/blog/posts'] });
      setEditingPost(null);
      setShowBlogForm(false);
      blogForm.reset();
      toast({
        title: "Blog post updated",
        description: "The blog post has been updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error updating post",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Delete blog post mutation
  const deletePostMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin?action=blog-post&id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete post');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/blog/posts'] });
      toast({
        title: "Blog post deleted",
        description: "The blog post has been deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error deleting post",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Publish/Unpublish mutations
  const publishMutation = useMutation({
    mutationFn: async ({ id, action }: { id: number; action: 'publish' | 'unpublish' }) => {
      const isPublished = action === 'publish';
      const response = await fetch(`/api/admin?action=blog-post&id=${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ published: isPublished }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Failed to ${action} post`);
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/blog/posts'] });
    },
  });

  // Handle form submissions
  const handleLogin = (data: LoginForm) => {
    loginMutation.mutate(data);
  };

  const handleBlogSubmit = (data: BlogPostForm) => {
    console.log('Submitting blog form data:', data);
    if (editingPost) {
      updatePostMutation.mutate({ id: editingPost.id, data });
    } else {
      createPostMutation.mutate(data);
    }
  };

  // Handle editing
  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    blogForm.reset({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags,
      isPublished: post.isPublished,
    });
    setShowBlogForm(true);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingPost(null);
    setShowBlogForm(false);
    blogForm.reset();
  };

  // Generate slug from title with Bulgarian transliteration
  const generateSlug = (title: string) => {
    // Bulgarian to Latin transliteration map
    const bgToLatin: { [key: string]: string } = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh', 'з': 'z',
      'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p',
      'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch',
      'ш': 'sh', 'щ': 'sht', 'ъ': 'a', 'ь': 'y', 'ю': 'yu', 'я': 'ya',
      'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ж': 'Zh', 'З': 'Z',
      'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P',
      'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'Ts', 'Ч': 'Ch',
      'Ш': 'Sh', 'Щ': 'Sht', 'Ъ': 'A', 'Ь': 'Y', 'Ю': 'Yu', 'Я': 'Ya'
    };

    return title
      .split('')
      .map(char => bgToLatin[char] || char) // Transliterate Bulgarian characters
      .join('')
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
      .trim();
  };

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="w-full max-w-md bg-slate-800/50 border-slate-600/30 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#ECB629]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-[#ECB629]" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Pravda Agency CRM</h1>
              <p className="text-gray-300">Administrator Login</p>
            </div>

            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-6">
                <FormField
                  control={loginForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Username</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="text" 
                          className="bg-slate-700/50 border-slate-600 text-white"
                          placeholder="Enter username"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Password</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="password" 
                          className="bg-slate-700/50 border-slate-600 text-white"
                          placeholder="Enter password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? "Logging in..." : "Login"}
                </Button>
              </form>
            </Form>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Main CRM interface
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 border-b border-slate-600/30 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Pravda Agency CRM</h1>
            <p className="text-gray-300">Content Management System</p>
          </div>
          <Button
            onClick={logout}
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-800/30 border-r border-slate-600/30 min-h-screen p-6">
          <nav className="space-y-2">
            <Button
              variant={currentView === 'dashboard' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setCurrentView('dashboard')}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button
              variant={currentView === 'blog' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setCurrentView('blog')}
            >
              <FileText className="w-4 h-4 mr-2" />
              Blog Posts
            </Button>
            <Button
              variant={currentView === 'contacts' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setCurrentView('contacts')}
            >
              <Users className="w-4 h-4 mr-2" />
              Contacts
            </Button>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {currentView === 'dashboard' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Dashboard</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-slate-800/50 border-slate-600/30 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Total Blog Posts</p>
                      <p className="text-3xl font-bold text-white">{blogPosts?.length || 0}</p>
                    </div>
                    <FileText className="w-8 h-8 text-[#ECB629]" />
                  </div>
                </Card>
                <Card className="bg-slate-800/50 border-slate-600/30 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Published Posts</p>
                      <p className="text-3xl font-bold text-white">
                        {blogPosts?.filter((post: BlogPost) => post.isPublished).length || 0}
                      </p>
                    </div>
                    <Eye className="w-8 h-8 text-green-400" />
                  </div>
                </Card>
                <Card className="bg-slate-800/50 border-slate-600/30 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Total Contacts</p>
                      <p className="text-3xl font-bold text-white">{contacts?.length || 0}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                </Card>
              </div>
            </div>
          )}

          {currentView === 'blog' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">Blog Posts</h2>
                <Button
                  onClick={() => setShowBlogForm(true)}
                  className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </div>

              {showBlogForm && (
                <Card className="bg-slate-800/50 border-slate-600/30 p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">
                      {editingPost ? 'Edit Post' : 'Create New Post'}
                    </h3>
                    <Button variant="ghost" onClick={handleCancel}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <Form {...blogForm}>
                    <form onSubmit={blogForm.handleSubmit(handleBlogSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={blogForm.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Title</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-slate-700/50 border-slate-600 text-white"
                                  placeholder="Enter post title"
                                  onChange={(e) => {
                                    field.onChange(e);
                                    if (!editingPost) {
                                      blogForm.setValue('slug', generateSlug(e.target.value));
                                    }
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={blogForm.control}
                          name="slug"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Slug</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-slate-700/50 border-slate-600 text-white"
                                  placeholder="post-slug"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={blogForm.control}
                        name="excerpt"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Excerpt</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                className="bg-slate-700/50 border-slate-600 text-white"
                                placeholder="Brief description of the post"
                                rows={3}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={blogForm.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Content</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                className="bg-slate-700/50 border-slate-600 text-white"
                                placeholder="Write your blog post content here..."
                                rows={10}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={blogForm.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Category</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-slate-700/50 border-slate-600 text-white"
                                  placeholder="e.g. SEO, Marketing, Business"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={blogForm.control}
                          name="isPublished"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2 mt-8">
                              <FormControl>
                                <input
                                  type="checkbox"
                                  checked={field.value}
                                  onChange={field.onChange}
                                  className="w-4 h-4 text-[#ECB629] bg-slate-700 border-slate-600 rounded"
                                />
                              </FormControl>
                              <FormLabel className="text-white">Publish immediately</FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          type="submit" 
                          className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
                          disabled={createPostMutation.isPending || updatePostMutation.isPending}
                        >
                          <Save className="w-4 h-4 mr-2" />
                          {editingPost ? 'Update Post' : 'Create Post'}
                        </Button>
                        <Button type="button" variant="outline" onClick={handleCancel}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </Form>
                </Card>
              )}

              {blogLoading ? (
                <div className="text-center py-8">
                  <div className="text-gray-300">Loading blog posts...</div>
                </div>
              ) : (
                <div className="space-y-4">
                  {blogPosts?.map((post: BlogPost) => (
                    <Card key={post.id} className="bg-slate-800/50 border-slate-600/30 p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{post.title}</h3>
                            <Badge variant={post.isPublished ? "default" : "secondary"}>
                              {post.isPublished ? "Published" : "Draft"}
                            </Badge>
                          </div>
                          <p className="text-gray-300 mb-2">{post.excerpt}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>Category: {post.category}</span>
                            <span>•</span>
                            <span>Created: {new Date(post.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(post)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => publishMutation.mutate({ 
                              id: post.id, 
                              action: post.isPublished ? 'unpublish' : 'publish' 
                            })}
                          >
                            {post.isPublished ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deletePostMutation.mutate(post.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {currentView === 'contacts' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Messages</h2>
              
              {contactsLoading ? (
                <div className="text-center py-8">
                  <div className="text-gray-300">Loading contacts...</div>
                </div>
              ) : (
                <div className="space-y-4">
                  {contacts?.map((contact: Contact) => (
                    <Card key={contact.id} className="bg-slate-800/50 border-slate-600/30 p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                          <div className="space-y-1 text-gray-300">
                            <p><strong>Email:</strong> {contact.email}</p>
                            <p><strong>Website:</strong> {contact.website}</p>
                            {contact.company && <p><strong>Company:</strong> {contact.company}</p>}
                            <p><strong>Date:</strong> {new Date(contact.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-white font-semibold mb-2">Message:</p>
                          <p className="text-gray-300 bg-slate-700/50 p-4 rounded">{contact.message}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}