'use client'

import { useState, useEffect } from 'react';

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
  // All useState hooks must be at the top level
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [activeTab, setActiveTab] = useState<'blog' | 'contacts'>('blog');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
    }
  }, []);

  // Load data when authenticated
  useEffect(() => {
    if (isAuthenticated && token) {
      loadBlogPosts();
      loadContacts();
    }
  }, [isAuthenticated, token]);

  const loadBlogPosts = async () => {
    try {
      const response = await fetch('/api/blog/posts', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  };

  const loadContacts = async () => {
    try {
      const response = await fetch('/api/admin?action=contacts', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
    }
  };

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
        alert('Login successful!');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
    setIsAuthenticated(false);
  };

  const togglePublish = async (postId: number, isPublished: boolean) => {
    try {
      const response = await fetch(`/api/blog/posts/${postId}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ isPublished: !isPublished })
      });
      if (response.ok) {
        loadBlogPosts();
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (postId: number) => {
    if (confirm('Сигурен ли сте, че искате да изтриете този пост?')) {
      try {
        const response = await fetch(`/api/blog/posts/${postId}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          loadBlogPosts();
        }
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h1 className="text-2xl font-bold text-white text-center mb-6">
              Admin Login
            </h1>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onKeyPress={(e) => e.key === 'Enter' && login()}
              />
              <button
                onClick={login}
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'blog'
                ? 'bg-yellow-500 text-black'
                : 'bg-slate-700 text-white hover:bg-slate-600'
            }`}
          >
            Blog Posts ({posts.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'contacts'
                ? 'bg-yellow-500 text-black'
                : 'bg-slate-700 text-white hover:bg-slate-600'
            }`}
          >
            Contacts ({contacts.length})
          </button>
        </div>

        {/* Blog Posts Tab */}
        {activeTab === 'blog' && (
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Blog Posts Management</h2>
              <button
                onClick={() => setIsCreating(true)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                + New Post
              </button>
            </div>

            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                          {post.category}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          post.isPublished ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                        }`}>
                          {post.isPublished ? 'Published' : 'Draft'}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs">
                        Author: {post.author} | Created: {new Date(post.createdAt).toLocaleDateString('bg-BG')}
                      </p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => togglePublish(post.id, post.isPublished)}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          post.isPublished
                            ? 'bg-orange-600 hover:bg-orange-700 text-white'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                      >
                        {post.isPublished ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        onClick={() => setEditingPost(post)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Contact Messages</h2>
            <div className="space-y-4">
              {contacts.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No contact messages yet.</p>
              ) : (
                contacts.map((contact) => (
                  <div key={contact.id} className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{contact.name}</h3>
                        <p className="text-gray-300 text-sm mb-2">
                          <strong>Email:</strong> {contact.email}
                        </p>
                        <p className="text-gray-300 text-sm mb-2">
                          <strong>Company:</strong> {contact.company}
                        </p>
                        {contact.website && (
                          <p className="text-gray-300 text-sm mb-2">
                            <strong>Website:</strong> {contact.website}
                          </p>
                        )}
                        <p className="text-gray-300 text-sm mb-2">
                          <strong>Message:</strong> {contact.message}
                        </p>
                        <p className="text-gray-400 text-xs">
                          Received: {new Date(contact.createdAt).toLocaleDateString('bg-BG')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}