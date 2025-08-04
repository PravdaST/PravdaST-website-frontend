import { NextResponse } from 'next/server'

export async function GET() {
  // All blog posts now come from WordPress Headless CMS
  // No local blog posts exist
  return NextResponse.json([])
}