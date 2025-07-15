import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../../server/storage';

type Params = Promise<{ slug: string }>

export async function GET(
  request: NextRequest,
  props: { params: Params }
) {
  try {
    const params = await props.params;
    const { slug } = params;
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