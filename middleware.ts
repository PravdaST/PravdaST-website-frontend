import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Edge-safe middleware - only checks cookies, no database calls
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if this is an admin route (but not the login page)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Get session token from cookie - basic presence check only
    const sessionToken = request.cookies.get('admin-session')?.value
    
    if (!sessionToken) {
      console.log('No admin session cookie found, redirecting to login')
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // Cookie exists - let the request continue
    // Real session verification will happen in server components
    return NextResponse.next()
  }

  // Check if accessing login page while having a session cookie
  if (pathname === '/admin/login') {
    const sessionToken = request.cookies.get('admin-session')?.value
    
    if (sessionToken) {
      // Has session cookie - redirect to admin dashboard
      // Real session validation will happen there
      console.log('Admin cookie found, redirecting to dashboard')
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  // For all other routes, continue normally
  return NextResponse.next()
}

// Narrow matcher to only admin routes for better performance
export const config = {
  matcher: [
    '/admin/:path*',
  ],
}