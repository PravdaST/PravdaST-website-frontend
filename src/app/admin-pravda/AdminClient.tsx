'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
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
  Mail,
  User,
  Calendar,
  Building,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string | null;
  readTime: number;
  category: string;
  slug: string;
  tags: string[];
  featuredImage?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  website?: string;
  message: string;
  createdAt: string;
}

export default function AdminClient() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'posts' | 'contacts'>('posts');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // New post form state
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Бизнес инженеринг',
    slug: '',
    tags: '',
    readTime: 5,
  });

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    console.log('Saved token:', savedToken);
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      loadData();
    }
    console.log('isAuthenticated:', savedToken ? true : false);
  }, []);

  const login = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin?action=login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        localStorage.setItem('adminToken', data.token);
        setIsAuthenticated(true);
        loadData();
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
    setLoading(false);
  };

  const logout = async () => {
    if (token) {
      await fetch('/api/admin?action=logout', {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
    }
    localStorage.removeItem('adminToken');
    setToken(null);
    setIsAuthenticated(false);
  };

  const loadData = async () => {
    if (!token) return;

    try {
      // Load posts
      const postsResponse = await fetch('/api/admin?action=blog-posts', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (postsResponse.ok) {
        const postsData = await postsResponse.json();
        setPosts(postsData);
      }

      // Load contacts
      const contactsResponse = await fetch('/api/admin?action=contacts', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (contactsResponse.ok) {
        const contactsData = await contactsResponse.json();
        setContacts(contactsData);
      }
    } catch (error) {
      console.error('Failed to load data:', error);
    }
  };

  const createPost = async () => {
    if (!token) return;

    setLoading(true);
    try {
      const response = await fetch('/api/admin?action=blog-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...newPost,
          tags: newPost.tags.split(',').map(tag => tag.trim()),
        }),
      });

      if (response.ok) {
        setShowNewPostForm(false);
        setNewPost({
          title: '',
          excerpt: '',
          content: '',
          category: 'Бизнес инженеринг',
          slug: '',
          tags: '',
          readTime: 5,
        });
        loadData();
      } else {
        alert('Failed to create post');
      }
    } catch (error) {
      console.error('Create post error:', error);
      alert('Failed to create post');
    }
    setLoading(false);
  };

  const togglePublish = async (post: BlogPost) => {
    if (!token) return;

    const action = post.isPublished ? 'unpublish' : 'publish';
    try {
      const response = await fetch(`/api/admin?action=${action}&id=${post.id}`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        loadData();
      } else {
        alert(`Failed to ${action} post`);
      }
    } catch (error) {
      console.error(`${action} error:`, error);
      alert(`Failed to ${action} post`);
    }
  };

  const deletePost = async (postId: number) => {
    if (!token || !confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`/api/admin?action=blog-post&id=${postId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        loadData();
      } else {
        alert('Failed to delete post');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete post');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">
                Admin Login
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
                onKeyPress={(e) => e.key === 'Enter' && login()}
              />
              <Button
                onClick={login}
                disabled={loading}
                className="w-full bg-[#ECB629] hover:bg-[#ECB629]/90 text-black"
              >
                <LogIn className="w-4 h-4 mr-2" />
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
          <Button onClick={logout} variant="outline" className="text-white border-slate-600">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <Button
            onClick={() => setActiveTab('posts')}
            variant={activeTab === 'posts' ? 'default' : 'outline'}
            className={activeTab === 'posts' ? 'bg-[#ECB629] text-black' : 'text-white border-slate-600'}
          >
            Blog Posts ({posts.length})
          </Button>
          <Button
            onClick={() => setActiveTab('contacts')}
            variant={activeTab === 'contacts' ? 'default' : 'outline'}
            className={activeTab === 'contacts' ? 'bg-[#ECB629] text-black' : 'text-white border-slate-600'}
          >
            Contacts ({contacts.length})
          </Button>
        </div>

        {/* Blog Posts Tab */}
        {activeTab === 'posts' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Blog Posts</h2>
              <Button
                onClick={() => setShowNewPostForm(true)}
                className="bg-[#ECB629] hover:bg-[#ECB629]/90 text-black"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>

            {/* New Post Form */}
            {showNewPostForm && (
              <Card className="bg-slate-800 border-slate-700 mb-6">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">Create New Post</CardTitle>
                    <Button
                      onClick={() => setShowNewPostForm(false)}
                      variant="ghost"
                      size="sm"
                      className="text-gray-400"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Post Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                  <Input
                    placeholder="URL Slug"
                    value={newPost.slug}
                    onChange={(e) => setNewPost({ ...newPost, slug: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                  <Textarea
                    placeholder="Excerpt"
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={3}
                  />
                  <Textarea
                    placeholder="Content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={10}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Category"
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                    <Input
                      type="number"
                      placeholder="Read Time (minutes)"
                      value={newPost.readTime}
                      onChange={(e) => setNewPost({ ...newPost, readTime: parseInt(e.target.value) || 5 })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <Input
                    placeholder="Tags (comma separated)"
                    value={newPost.tags}
                    onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                  <Button
                    onClick={createPost}
                    disabled={loading}
                    className="bg-[#ECB629] hover:bg-[#ECB629]/90 text-black"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? 'Creating...' : 'Create Post'}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Posts List */}
            <div className="grid gap-4">
              {posts.map((post) => (
                <Card key={post.id} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                          <Badge 
                            variant={post.isPublished ? "default" : "secondary"}
                            className={post.isPublished ? "bg-green-600 text-white" : "bg-gray-600 text-white"}
                          >
                            {post.isPublished ? 'Published' : 'Draft'}
                          </Badge>
                        </div>
                        <p className="text-gray-300 mb-3 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>Category: {post.category}</span>
                          <span>Read Time: {post.readTime} min</span>
                          <span>Created: {new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          onClick={() => togglePublish(post)}
                          variant="outline"
                          size="sm"
                          className="text-white border-slate-600"
                        >
                          {post.isPublished ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button
                          onClick={() => setEditingPost(post)}
                          variant="outline"
                          size="sm"
                          className="text-white border-slate-600"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => deletePost(post.id)}
                          variant="outline"
                          size="sm"
                          className="text-red-400 border-red-600 hover:bg-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">Contact Messages</h2>
            <div className="grid gap-4">
              {contacts.map((contact) => (
                <Card key={contact.id} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-[#ECB629]" />
                        <h3 className="text-lg font-semibold text-white">{contact.name}</h3>
                      </div>
                      <span className="text-sm text-gray-400">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{contact.company}</span>
                      </div>
                      {contact.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{contact.website}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <p className="text-gray-300">{contact.message}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}