'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Нещо се обърка</h2>
            <p className="text-gray-300 mb-6">
              Възникна неочаквана грешка. Моля, опреснете страницата.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#ECB629] text-black font-bold rounded-lg hover:bg-[#d4af37] transition-colors"
            >
              Опресни страницата
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}