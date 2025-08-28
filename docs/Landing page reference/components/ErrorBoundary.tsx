import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  private handleReload = (): void => {
    window.location.reload();
  };

  private handleGoHome = (): void => {
    window.location.href = '/';
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8">
              <AlertTriangle className="w-20 h-20 text-red-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Нещо се обърка!
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Възникна неочаквана грешка. Моля, опитайте отново или се върнете на началната страница.
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left mb-6">
                  <details>
                    <summary className="font-medium text-red-800 cursor-pointer">
                      Технически детайли (само за разработчици)
                    </summary>
                    <div className="mt-4 text-sm text-red-700">
                      <p className="font-medium">Грешка:</p>
                      <p className="mb-2 font-mono">{this.state.error.message}</p>
                      {this.state.errorInfo && (
                        <>
                          <p className="font-medium">Stack Trace:</p>
                          <pre className="whitespace-pre-wrap font-mono text-xs">
                            {this.state.errorInfo.componentStack}
                          </pre>
                        </>
                      )}
                    </div>
                  </details>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Презареди страницата
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Home className="w-5 h-5 mr-2" />
                Начална страница
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;