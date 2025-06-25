import { Request, Response } from "express";
import { db } from "./db";
import { blogViews, blogLikes, blogShares } from "@shared/schema";
import { eq, sql, and } from "drizzle-orm";

// Track blog post view
export async function trackBlogView(req: Request, res: Response) {
  try {
    const { slug } = req.params;
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    await db.insert(blogViews).values({
      postSlug: slug,
      ipAddress,
      userAgent,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error tracking blog view:', error);
    res.status(500).json({ error: 'Failed to track view' });
  }
}

// Track blog post like
export async function trackBlogLike(req: Request, res: Response) {
  try {
    const { slug } = req.params;
    const ipAddress = req.ip || req.connection.remoteAddress;

    // Check if already liked by this IP
    const existingLike = await db
      .select()
      .from(blogLikes)
      .where(and(
        eq(blogLikes.postSlug, slug),
        eq(blogLikes.ipAddress, ipAddress || '')
      ))
      .limit(1);

    if (existingLike.length > 0) {
      // Unlike - remove the like
      await db
        .delete(blogLikes)
        .where(and(
          eq(blogLikes.postSlug, slug),
          eq(blogLikes.ipAddress, ipAddress || '')
        ));
      
      res.json({ liked: false });
    } else {
      // Like - add new like
      await db.insert(blogLikes).values({
        postSlug: slug,
        ipAddress,
      });
      
      res.json({ liked: true });
    }
  } catch (error) {
    console.error('Error tracking blog like:', error);
    res.status(500).json({ error: 'Failed to track like' });
  }
}

// Track blog post share
export async function trackBlogShare(req: Request, res: Response) {
  try {
    const { slug } = req.params;
    const { platform } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;

    await db.insert(blogShares).values({
      postSlug: slug,
      platform,
      ipAddress,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error tracking blog share:', error);
    res.status(500).json({ error: 'Failed to track share' });
  }
}

// Get blog post statistics
export async function getBlogStats(req: Request, res: Response) {
  try {
    const { slug } = req.params;

    // Get view count
    const viewResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(blogViews)
      .where(eq(blogViews.postSlug, slug));
    
    const views = viewResult[0]?.count || 0;

    // Get like count
    const likeResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(blogLikes)
      .where(eq(blogLikes.postSlug, slug));
    
    const likes = likeResult[0]?.count || 0;

    // Get share count
    const shareResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(blogShares)
      .where(eq(blogShares.postSlug, slug));
    
    const shares = shareResult[0]?.count || 0;

    // Check if current user liked this post
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userLikeResult = await db
      .select()
      .from(blogLikes)
      .where(and(
        eq(blogLikes.postSlug, slug),
        eq(blogLikes.ipAddress, ipAddress || '')
      ));
    
    const isLiked = userLikeResult.length > 0;

    res.json({
      views: Number(views),
      likes: Number(likes),
      shares: Number(shares),
      isLiked,
    });
  } catch (error) {
    console.error('Error getting blog stats:', error);
    res.status(500).json({ error: 'Failed to get stats' });
  }
}