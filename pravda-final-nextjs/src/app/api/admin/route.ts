import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../server/storage';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { insertBlogPostSchema } from '../../../../shared/schema';

// Helper to generate random token
function generateToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Helper to verify admin token
async function verifyAdminToken(token: string): Promise<boolean> {
  if (!token) return false;
  const session = await storage.getAdminSession(token);
  return !!session;
}

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    if (action === 'login') {
      const body = await request.json();
      const { username, password } = body;

      if (!username || !password) {
        return NextResponse.json({ error: 'Username and password required' }, { status: 400 });
      }

      const user = await storage.getAdminUserByUsername(username);
      if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      // Create session
      const token = generateToken();
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

      await storage.createAdminSession({
        userId: user.id,
        token,
        expiresAt,
      });

      return NextResponse.json({ token, user: { id: user.id, username: user.username } });
    }

    if (action === 'blog-posts') {
      const token = request.headers.get('Authorization')?.replace('Bearer ', '');
      if (!await verifyAdminToken(token)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      const body = await request.json();
      const validatedData = insertBlogPostSchema.parse(body);

      const post = await storage.createBlogPost(validatedData);
      return NextResponse.json(post);
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!await verifyAdminToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (action === 'blog-posts') {
      const posts = await storage.getAllBlogPosts();
      return NextResponse.json(posts);
    }

    if (action === 'contacts') {
      const contacts = await storage.getAllContacts();
      return NextResponse.json(contacts);
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const id = searchParams.get('id');
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!await verifyAdminToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (action === 'blog-post' && id) {
      const body = await request.json();
      const validatedData = insertBlogPostSchema.partial().parse(body);
      
      const post = await storage.updateBlogPost(parseInt(id), validatedData);
      return NextResponse.json(post);
    }

    if (action === 'publish' && id) {
      const post = await storage.publishBlogPost(parseInt(id));
      return NextResponse.json(post);
    }

    if (action === 'unpublish' && id) {
      const post = await storage.unpublishBlogPost(parseInt(id));
      return NextResponse.json(post);
    }

    return NextResponse.json({ error: 'Invalid action or missing ID' }, { status: 400 });
  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const id = searchParams.get('id');
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!await verifyAdminToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (action === 'blog-post' && id) {
      await storage.deleteBlogPost(parseInt(id));
      return NextResponse.json({ success: true });
    }

    if (action === 'logout') {
      if (token) {
        await storage.deleteAdminSession(token);
      }
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action or missing ID' }, { status: 400 });
  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}