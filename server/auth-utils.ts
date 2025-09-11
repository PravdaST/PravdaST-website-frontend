import bcrypt from 'bcrypt';
import crypto from 'crypto';

// Security configuration
const SALT_ROUNDS = 12; // High security salt rounds
const TOKEN_LENGTH = 32; // 256 bits of entropy
const SESSION_DURATION_HOURS = 24; // 24 hour session timeout

/**
 * Generate a cryptographically secure random token
 * @returns {string} - Base64 encoded secure random token
 */
export function generateSecureToken(): string {
  return crypto.randomBytes(TOKEN_LENGTH).toString('base64url');
}

/**
 * Hash a token using bcrypt with high security salt rounds
 * @param token - The plaintext token to hash
 * @returns {Promise<string>} - The bcrypt hash of the token
 */
export async function hashToken(token: string): Promise<string> {
  try {
    return await bcrypt.hash(token, SALT_ROUNDS);
  } catch (error) {
    console.error('Token hashing failed:', error);
    throw new Error('Failed to secure token');
  }
}

/**
 * Verify a token against its hash using constant-time comparison
 * @param token - The plaintext token to verify
 * @param hash - The stored bcrypt hash
 * @returns {Promise<boolean>} - True if token matches hash
 */
export async function verifyToken(token: string, hash: string): Promise<boolean> {
  try {
    return await bcrypt.compare(token, hash);
  } catch (error) {
    console.error('Token verification failed:', error);
    return false;
  }
}

/**
 * Generate session expiration date
 * @returns {Date} - Expiration date for new sessions
 */
export function generateSessionExpiration(): Date {
  return new Date(Date.now() + SESSION_DURATION_HOURS * 60 * 60 * 1000);
}

/**
 * Create a new secure session token with hash
 * @returns {Promise<{token: string, hash: string, expiresAt: Date}>}
 */
export async function createSecureSessionToken(): Promise<{
  token: string;
  hash: string;
  expiresAt: Date;
}> {
  const token = generateSecureToken();
  const hash = await hashToken(token);
  const expiresAt = generateSessionExpiration();
  
  return { token, hash, expiresAt };
}