import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../../server/storage';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const post = await storage.getBlogPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Only return published posts for public API
    if (!post.isPublished) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Blog post API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}