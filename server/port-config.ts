// Port configuration for development and production
export const PORT = process.env.PORT || 5000;
export const FRONTEND_PORT = 80;

// In development, the server runs on PORT and serves both API and frontend
// In production, this may be different based on deployment platform
export const isDevelopment = process.env.NODE_ENV === 'development';