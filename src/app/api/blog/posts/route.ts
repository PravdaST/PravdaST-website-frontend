import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../../server/storage';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');

    let posts;
    if (published === 'true') {
      posts = await storage.getPublishedBlogPosts();
    } else {
      posts = await storage.getAllBlogPosts();
    }

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Blog posts API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}