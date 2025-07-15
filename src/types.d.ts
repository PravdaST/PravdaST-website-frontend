// Global TypeScript definitions for Next.js 15 project
export {};

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: { [key: string]: any }
    ) => void;
    fbq: (
      command: 'track' | 'init',
      eventOrPixelId: string,
      parameters?: { [key: string]: any }
    ) => void;
    _learnq?: any[];
    clarity?: (...args: any[]) => void;
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
  }
}