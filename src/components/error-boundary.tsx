import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, RefreshCw, Home, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: Math.random().toString(36).substr(2, 9)
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
      errorId: Math.random().toString(36).substr(2, 9)
    });

    // Логване на грешката
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Изпращане на грешката към analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false,
        error_id: this.state.errorId
      });

    // Callback за допълнително error handling
    if (this.props.onError) {
      this.props.onError(error, errorInfo);

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  }

  handleReload = () => {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // Ако има custom fallback компонент
      if (this.props.fallback) {
        return this.props.fallback;

      const { error, errorId } = this.state;
      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-xl">Възникна неочаквана грешка</CardTitle>
              <CardDescription>
                Извиняваме се за неудобството. Нещо се обърка в системата.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Код на грешката:</strong> {errorId}
                  <br />
                  Моля запишете този код при контакт с поддръжката.
                </AlertDescription>
              </Alert>

              {isDevelopment && error && (
                <Alert className="bg-muted">
                  <AlertDescription>
                    <strong>Техническа информация (development):</strong>
                    <pre className="mt-2 text-xs overflow-auto max-h-32 bg-background p-2 rounded">
                      {error.toString()}
                    </pre>
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={this.handleRetry}
                  className="flex-1"
                  variant="default"
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Опитай отново
                </Button>
                
                <Button 
                  onClick={this.handleReload}
                  variant="outline"
                  className="flex-1"
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Презареди страницата
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Home className="w-4 h-4 mr-2" />
                    Към началната страница
                  </Button>
                </Link>
                
                <Link href="/contact" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Свързване с поддръжката
                  </Button>
                </Link>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Ако проблемът продължава, моля свържете се с нас на{' '}
                <a 
                  href="mailto:contact@pravdast.agency" 
                  className="text-primary hover:underline"
                  contact@pravdast.agency
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      );

    return this.props.children;

// Hook за error handling във functional компоненти
export function useErrorHandler() {
  const handleError = (error: Error, errorInfo?: any) => {
    console.error('Error caught by useErrorHandler:', error);
    
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false
      });
  };

  return handleError;

// Специализирани error boundaries за различни части от приложението
export function PageErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <Card className="w-full max-w-md text-center">
            <CardHeader>
              <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <CardTitle>Грешка при зареждане</CardTitle>
              <CardDescription>
                Страницата не може да се зареди правилно
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => window.location.reload()}>
                Презареди страницата
              </Button>
            </CardContent>
          </Card>
        </div>
      {children}
    </ErrorBoundary>
  );

export function ComponentErrorBoundary({ children, componentName }: { 
  children: ReactNode; 
  componentName?: string;
}) {
  return (
    <ErrorBoundary
      fallback={
        <Alert className="my-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {componentName ? `Компонентът "${componentName}"` : 'Този компонент'} не може да се зареди правилно.
            <Button 
              variant="link" 
              size="sm" 
              onClick={() => window.location.reload()}
              className="ml-2 h-auto p-0"
              Презареди страницата
            </Button>
          </AlertDescription>
        </Alert>
      {children}
    </ErrorBoundary>
  );
