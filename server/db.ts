import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from "../shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Global connection cache to survive Next.js HMR restarts
declare global {
  var __drizzleClient: ReturnType<typeof postgres> | undefined;
  var __drizzleDb: ReturnType<typeof drizzle> | undefined;
}

// Create postgres connection (compatible with Supabase)
function createClient() {
  return postgres(process.env.DATABASE_URL!, {
    prepare: false, // Required for Supabase connection pooling
    ssl: 'require', // Required for Supabase
  });
}

// Reuse client and db instances globally
export const client = globalThis.__drizzleClient ?? createClient();
export const db = globalThis.__drizzleDb ?? drizzle(client, { schema });

if (process.env.NODE_ENV !== 'production') {
  globalThis.__drizzleClient = client;
  globalThis.__drizzleDb = db;
}

// Test connection function with postgres
export async function testConnection(retries = 3): Promise<boolean> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await client`SELECT 1`;
      console.log('Database connection test successful');
      return true;
    } catch (error) {
      console.error(`Database connection test failed (attempt ${attempt}/${retries}):`, error instanceof Error ? error.message : error);
      if (attempt === retries) {
        return false;
      }
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
  return false;
}