import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Activity, Zap, Globe, Image, Code, AlertTriangle, CheckCircle } from 'lucide-react';
import { performanceMonitor } from '@/lib/performance';
import { SEOHead } from '@/components/seo-head';

interface ResourceAnalysis {
  totalSize: number;
  jsSize: number;
  cssSize: number;
  imageSize: number;
  recommendations: string[];

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<any>({});
  const [webVitals, setWebVitals] = useState<any>({ score: 0, status: 'poor' });
  const [resources, setResources] = useState<ResourceAnalysis>({
    totalSize: 0,
    jsSize: 0,
    cssSize: 0,
    imageSize: 0,
    recommendations: []
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Автоматично зареждане на метрики при отваряне
    loadPerformanceData();
  }, []);

  const loadPerformanceData = () => {
    setLoading(true);
    
    // Зареждане с малко delay за да се съберат всички метрики
    setTimeout(() => {
      const currentMetrics = performanceMonitor.getMetrics();
      const vitalsScore = performanceMonitor.getWebVitalsScore();
      const resourceData = performanceMonitor.analyzeResources();
      
      setMetrics(currentMetrics);
      setWebVitals(vitalsScore);
      setResources(resourceData);
      setLoading(false);
    }, 1000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'good':
        return <Badge className="bg-green-100 text-green-800">Отличен</Badge>;
      case 'needs-improvement':
        return <Badge className="bg-yellow-100 text-yellow-800">Нужда от подобрение</Badge>;
      default:
        return <Badge className="bg-red-100 text-red-800">Слаб</Badge>;
  };

  const formatTime = (ms: number) => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  const coreWebVitals = [
    {
      name: 'LCP (Largest Contentful Paint)',
      value: metrics.largestContentfulPaint,
      target: '< 2.5s',
      description: 'Време за зареждане на най-голямото съдържание'
    },
    {
      name: 'FID (First Input Delay)',
      value: metrics.firstInputDelay,
      target: '< 100ms',
      description: 'Време за първата интерактивност'
    },
    {
      name: 'CLS (Cumulative Layout Shift)',
      value: metrics.cumulativeLayoutShift,
      target: '< 0.1',
      description: 'Стабилност на визуалното съдържание'
  ];

  const performanceTips = [
    {
      icon: <Image className="h-5 w-5" />,
      title: 'Оптимизация на изображения',
      description: 'Използвайте WebP формат и responsive images',
      status: resources.imageSize < 500 ? 'good' : 'poor'
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: 'JavaScript bundle',
      description: 'Разделете кода на по-малки chunks',
      status: resources.jsSize < 300 ? 'good' : 'poor'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'CDN и Caching',
      description: 'Използвайте CDN за статични ресурси',
      status: 'good'
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Critical CSS',
      description: 'Inline critical CSS за по-бързо рендиране',
      status: 'good'
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        seo={{
          title: 'Performance Мониторинг | Pravdast Business Engineering',
          description: 'Мониторинг на Web Vitals, анализ на производителността и оптимизация за по-бързо зареждане',
          keywords: 'performance мониторинг, web vitals, оптимизация'
        }} 
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Performance Мониторинг
            </h1>
            <p className="text-lg text-muted-foreground">
              Анализ на производителността и Core Web Vitals
            </p>
          </div>

          {/* Общ Performance Score */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Общ Performance Score
              </CardTitle>
              <CardDescription>
                Базиран на Google Core Web Vitals метрики
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Button onClick={loadPerformanceData} disabled={loading}>
                    {loading ? 'Анализирам...' : 'Обнови метрики'}
                  </Button>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold ${getScoreColor(webVitals.score)}`}>
                    {webVitals.score}
                  </div>
                  {getStatusBadge(webVitals.status)}
                </div>
              </div>
              <Progress value={webVitals.score} className="h-3" />
            </CardContent>
          </Card>

          <Tabs defaultValue="vitals" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="vitals">Core Web Vitals</TabsTrigger>
              <TabsTrigger value="resources">Ресурси</TabsTrigger>
              <TabsTrigger value="optimization">Оптимизация</TabsTrigger>
              <TabsTrigger value="monitoring">Мониторинг</TabsTrigger>
            </TabsList>

            <TabsContent value="vitals" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                {coreWebVitals.map((vital, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-base">{vital.name}</CardTitle>
                      <CardDescription>{vital.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Цел:</span>
                        <span className="text-sm font-medium">{vital.target}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Текуща:</span>
                        <span className="text-sm font-bold">
                          {vital.value !== undefined ? formatTime(vital.value) : 'N/A'}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Допълнителни Метрики</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Load Time:</span>
                      <span className="font-medium">
                        {metrics.loadTime ? formatTime(metrics.loadTime) : 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>DOM Content Loaded:</span>
                      <span className="font-medium">
                        {metrics.domContentLoaded ? formatTime(metrics.domContentLoaded) : 'N/A'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Размер на ресурсите</CardTitle>
                    <CardDescription>Анализ на заредените файлове</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Общо:</span>
                        <span className="font-medium">{resources.totalSize}KB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>JavaScript:</span>
                        <span className="font-medium">{resources.jsSize}KB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CSS:</span>
                        <span className="font-medium">{resources.cssSize}KB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Изображения:</span>
                        <span className="font-medium">{resources.imageSize}KB</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Препоръки</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {resources.recommendations.length > 0 ? (
                      resources.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                          <span className="text-sm">{rec}</span>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Всички ресурси са оптимизирани</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="optimization" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {performanceTips.map((tip, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        {tip.icon}
                        {tip.title}
                      </CardTitle>
                      <CardDescription>{tip.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {tip.status === 'good' ? (
                        <Badge className="bg-green-100 text-green-800">Реализирано</Badge>
                      ) : (
                        <Badge className="bg-yellow-100 text-yellow-800">За подобрение</Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Alert>
                <Zap className="h-4 w-4" />
                <AlertDescription>
                  <strong>Реализирани оптимизации:</strong>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Service Worker за caching</li>
                    <li>• Lazy loading на изображения</li>
                    <li>• Critical resource preloading</li>
                    <li>• Bundle splitting с Vite</li>
                    <li>• Tailwind CSS purging</li>
                    <li>• Gzip компресия</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Real User Monitoring</CardTitle>
                  <CardDescription>
                    Мониторинг на реалните потребители в production
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {typeof window !== 'undefined' ? 
                          performance.navigation?.type === 0 ? 'Navigate' : 'Reload' 
                          : 'N/A'
                      </div>
                      <div className="text-sm text-muted-foreground">Navigation Type</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {typeof window !== 'undefined' ? 
                          (navigator as any).connection?.effectiveType || '4g'
                          : 'N/A'
                      </div>
                      <div className="text-sm text-muted-foreground">Connection</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {typeof window !== 'undefined' ? 
                          (navigator as any).deviceMemory || '4'
                          : 'N/A'
                        }GB
                      </div>
                      <div className="text-sm text-muted-foreground">Device Memory</div>
                    </div>
                  </div>

                  <Alert>
                    <Activity className="h-4 w-4" />
                    <AlertDescription>
                      Performance метриките се събират автоматично и се изпращат към 
                      Vercel Speed Insights за анализ и оптимизация.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
