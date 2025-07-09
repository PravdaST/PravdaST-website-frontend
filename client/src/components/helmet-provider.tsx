import { HelmetProvider } from 'react-helmet-async';
import { ReactNode } from 'react';

interface HelmetAppProviderProps {
  children: ReactNode;
}

export function HelmetAppProvider({ children }: HelmetAppProviderProps) {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
}