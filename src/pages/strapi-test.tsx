import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { strapiAPI } from '@/lib/strapi-api';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function StrapiTest() {
  const [connectionStatus, setConnectionStatus] = useState<'loading' | 'connected' | 'failed'>('loading');
  const [testResults, setTestResults] = useState<any>({});

  useEffect(() => {
    testStrapiConnection();
  }, []);

  const testStrapiConnection = async () => {
    setConnectionStatus('loading');
    
    try {
      const isConnected = await strapiAPI.testConnection();
      
      if (isConnected) {
        setConnectionStatus('connected');
        
        // Тестваме различни endpoints
        const results: any = {};
        
        try {
          results.pages = await strapiAPI.getPageSEO('home');
        } catch (e) {
          results.pages = { error: 'Content type не съществува' };
        }
        
        try {
          results.blogPosts = await strapiAPI.getBlogPosts();
        } catch (e) {
          results.blogPosts = { error: 'Content type не съществува' };
        }
        
        try {
          results.services = await strapiAPI.getServices();
        } catch (e) {
          results.services = { error: 'Content type не съществува' };
        }
        
        setTestResults(results);
      } else {
        setConnectionStatus('failed');
      }
    } catch (error) {
      setConnectionStatus('failed');
      console.error('Connection test failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--pravdast-dark)] text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--pravdast-yellow)] mb-8">
            Strapi CMS Интеграция - Тест
          </h1>
          
          <Card className="bg-gray-900 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {connectionStatus === 'loading' && <Loader2 className="h-5 w-5 animate-spin" />}
                {connectionStatus === 'connected' && <CheckCircle className="h-5 w-5 text-green-500" />}
                {connectionStatus === 'failed' && <XCircle className="h-5 w-5 text-red-500" />}
                
                Статус на връзката с Strapi
              </CardTitle>
              <CardDescription>
                Тестване на API connection и достъпни endpoints
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant={connectionStatus === 'connected' ? 'default' : 'destructive'}>
                  {connectionStatus === 'loading' && 'Тествам...'}
                  {connectionStatus === 'connected' && 'Свързан успешно'}
                  {connectionStatus === 'failed' && 'Неуспешна връзка'}
                </Badge>
                
                <Button onClick={testStrapiConnection} variant="outline" size="sm">
                  Тествай отново
                </Button>
              </div>
              
              {connectionStatus === 'connected' && (
                <div className="space-y-4">
                  <div className="text-sm text-gray-400">
                    <strong>Strapi URL:</strong> https://talented-oasis-899b2552b2.strapiapp.com
                  </div>
                  
                  <div className="grid gap-4">
                    <div className="border border-gray-700 rounded p-4">
                      <h4 className="font-semibold mb-2">Pages Content Type</h4>
                      <pre className="text-xs bg-gray-800 p-2 rounded overflow-auto">
                        {JSON.stringify(testResults.pages, null, 2)}
                      </pre>
                    </div>
                    
                    <div className="border border-gray-700 rounded p-4">
                      <h4 className="font-semibold mb-2">Blog Posts Content Type</h4>
                      <pre className="text-xs bg-gray-800 p-2 rounded overflow-auto">
                        {JSON.stringify(testResults.blogPosts, null, 2)}
                      </pre>
                    </div>
                    
                    <div className="border border-gray-700 rounded p-4">
                      <h4 className="font-semibold mb-2">Services Content Type</h4>
                      <pre className="text-xs bg-gray-800 p-2 rounded overflow-auto">
                        {JSON.stringify(testResults.services, null, 2)}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
              
              {connectionStatus === 'failed' && (
                <div className="text-red-400 text-sm">
                  Не можах да се свържа със Strapi. Моля проверете:
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>API Token е валиден</li>
                    <li>Strapi инстанцията е активна</li>
                    <li>Network connectivity</li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle>Следващи стъпки</CardTitle>
              <CardDescription>
                За пълна интеграция със Strapi CMS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">API Connection успешно настроен</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border-2 border-yellow-500" />
                  <span className="text-sm">Създаване на Content Types в Strapi Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border-2 border-gray-500" />
                  <span className="text-sm">Настройка на SEO данни</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border-2 border-gray-500" />
                  <span className="text-sm">Content migration от статични данни</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}