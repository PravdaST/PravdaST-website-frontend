# Neon Database Setup for Vercel Integration

## Problem
The current Neon database connection is causing JSON parsing errors in Vercel serverless functions. This indicates compatibility issues between the database configuration and Vercel's environment.

## Solution: Create New Vercel-Integrated Neon Database

### Step 1: Create Database via Vercel Integration
1. Go to your Vercel Dashboard
2. Navigate to Integrations → Neon
3. Click "Accept and Create" 
4. This will automatically:
   - Create a new Neon database optimized for Vercel
   - Add DATABASE_URL to your environment variables
   - Configure proper network settings

### Step 2: Set Up Database Schema
After the new database is created, run these SQL commands:

```sql
-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create admin_sessions table
CREATE TABLE IF NOT EXISTS admin_sessions (
  id SERIAL PRIMARY KEY,
  session_token VARCHAR(255) NOT NULL UNIQUE,
  user_id INTEGER NOT NULL REFERENCES users(id),
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  tags TEXT[] DEFAULT '{}',
  is_published BOOLEAN DEFAULT false,
  author_id INTEGER NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  website VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert admin user (password: pravda2025)
INSERT INTO users (username, password) 
VALUES ('admin', '$2b$10$l5asUAKIwifoyCGGadyEWuB.O7nT31VYfFtVZOg2dCgqYwqHs0fSC') 
ON CONFLICT (username) DO UPDATE SET password = EXCLUDED.password;
```

### Step 3: Test the Setup
Run the test script to verify everything works:
```bash
node test-database-connection.js
```

### Step 4: Deploy and Test
1. Redeploy your Vercel application
2. Test the admin login at `/admin-pravda`
3. Credentials: `admin` / `pravda2025`

## Why This Will Fix the Issue

1. **Native Integration**: Vercel-Neon integration ensures optimal compatibility
2. **Proper Environment Variables**: Automatic setup prevents configuration errors
3. **Network Optimization**: Direct connection paths reduce latency and parsing issues
4. **Serverless Optimization**: Database configured specifically for serverless functions

## Backup Note
Your current database data can be migrated later if needed, but for now we're focusing on getting the admin system working in production.