
import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

// Simple file-based storage for admin operations when DB is down
const BLOG_DIR = join(process.cwd(), 'Blog post')

function savePostToFile(post: any) {
  if (!existsSync(BLOG_DIR)) {
    mkdirSync(BLOG_DIR, { recursive: true })
  }
  
  const filename = `${post.slug}.md`
  const filePath = join(BLOG_DIR, filename)
  
  const content = `---
title: ${post.title}
slug: ${post.slug}
excerpt: ${post.excerpt}
author: ${post.author}
category: ${post.category}
tags: ${Array.isArray(post.tags) ? post.tags.join(', ') : post.tags}
published: ${post.isPublished}
created: ${new Date().toISOString()}
---

${post.content}
`
  
  writeFileSync(filePath, content, 'utf8')
  return post
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Generate slug if not provided
    if (!body.slug) {
      body.slug = body.title
        .toLowerCase()
        .replace(/[^\u0400-\u04FF\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim()
    }
    
    // Save to file as backup
    const savedPost = savePostToFile(body)
    
    return NextResponse.json({
      ...savedPost,
      id: Date.now(), // Simple ID generation
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, { status: 201 })
    
  } catch (error) {
    console.error('Error in admin API:', error)
    return NextResponse.json({ error: 'Failed to save post' }, { status: 500 })
  }
}
