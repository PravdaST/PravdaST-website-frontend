import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExternalLink, CheckCircle, AlertTriangle, XCircle, TrendingUp, Search, Globe } from 'lucide-react';
import { checkPageSEOHealth } from '@/lib/search-console';
import { SEOHead } from '@/components/seo-head';

interface SEOHealthCheck {
  url: string;
  score: number;
  checks: Record<string, boolean>;
  recommendations: string[];

export default function SEOMonitor() {
  const [seoHealth, setSeoHealth] = useState<SEOHealthCheck | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Автоматична проверка при зареждане
    handleSEOCheck();
  }, []);

  const handleSEOCheck = () => {
    setLoading(true);
    setTimeout(() => {
      const health = checkPageSEOHealth(window.location.href);
      setSeoHealth(health);
      setLoading(false);
    }, 1000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return <Badge className="bg-green-100 text-green-800">Отличен</Badge>;
    if (score >= 70) return <Badge className="bg-yellow-100 text-yellow-800">Добър</Badge>;
    return <Badge className="bg-red-100 text-red-800">Нужда от подобрение</Badge>;
  };

  const sitemapFiles = [
    { name: 'Основен Sitemap', url: '/sitemap.xml', description: 'Всички основни страници' },
    { name: 'Блог Sitemap', url: '/blog-sitemap.xml', description: 'Всички блог статии' },
    { name: 'Услуги Sitemap', url: '/services-sitemap.xml', description: 'Всички услуги страници' },
    { name: 'Sitemap Index', url: '/sitemap-index.xml', description: 'Индекс на всички sitemap файлове' }
  ];

  const verificationSteps = [
    {
      step: 1,
      title: 'Добавете сайта в Google Search Console',
      description: 'Отидете на https://search.google.com/search-console и добавете правдагency.eu',
      status: 'manual'
    },
    {
      step: 2, 
      title: 'Потвърдете собственост',
      description: 'Използвайте HTML meta tag или файл за потвърждение',
      status: 'ready'
    },
    {
      step: 3,
      title: 'Изпратете sitemap файловете',
      description: 'Добавете всички sitemap URL адреси в Search Console',
      status: 'ready'
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        seo={{
          title: 'SEO Мониторинг | Pravdast Business Engineering',
          description: 'Мониторинг на SEO здравето, Google Search Console интеграция и проследяване на производителността за правдагency.eu',
          keywords: 'SEO мониторинг, Google Search Console, sitemap, български SEO'
        }} 
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              SEO Мониторинг
            </h1>
            <p className="text-lg text-muted-foreground">
              Проследяване на SEO здравето и Google Search Console интеграция
            </p>
          </div>

          <Tabs defaultValue="health" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="health">SEO Здраве</TabsTrigger>
              <TabsTrigger value="sitemaps">Sitemap Файлове</TabsTrigger>
              <TabsTrigger value="search-console">Search Console</TabsTrigger>
              <TabsTrigger value="keywords">Ключови Думи</TabsTrigger>
            </TabsList>

            <TabsContent value="health" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    SEO Здравословна Проверка
                  </CardTitle>
                  <CardDescription>
                    Анализ на текущата страница за SEO оптимизация
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={handleSEOCheck} disabled={loading}>
                    {loading ? 'Проверявам...' : 'Проверка на SEO здравето'}
                  </Button>

                  {seoHealth && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">SEO Резултат</h3>
                          <p className="text-sm text-muted-foreground">{seoHealth.url}</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${getScoreColor(seoHealth.score)}`}>
                            {seoHealth.score}%
                          </div>
                          {getScoreBadge(seoHealth.score)}
                        </div>
                      </div>

                      <Progress value={seoHealth.score} className="h-3" />

                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-sm">Успешни Проверки</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            {Object.entries(seoHealth.checks)
                              .filter(([_, passed]) => passed)
                              .map(([check]) => (
                                <div key={check} className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-sm">{check}</span>
                                </div>
                              ))}
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-sm">Препоръки за Подобрение</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            {seoHealth.recommendations.map((rec, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                                <span className="text-sm">{rec}</span>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sitemaps" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {sitemapFiles.map((sitemap) => (
                  <Card key={sitemap.url}>
                    <CardHeader>
                      <CardTitle className="text-base">{sitemap.name}</CardTitle>
                      <CardDescription>{sitemap.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          pravdagency.eu{sitemap.url}
                        </code>
                      </div>
                      <Button
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(sitemap.url, '_blank')}
                        className="w-full"
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Преглед на Sitemap
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="search-console" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Google Search Console Настройка</CardTitle>
                  <CardDescription>
                    Стъпки за настройка на Google Search Console за правдагency.eu
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {verificationSteps.map((step) => (
                    <div key={step.step} className="flex items-start gap-3 p-4 border rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        {step.status === 'ready' && (
                          <Badge className="bg-green-100 text-green-800">Готово за настройка</Badge>
                        )}
                        {step.status === 'manual' && (
                          <Badge className="bg-blue-100 text-blue-800">Ръчна стъпка</Badge>
                        )}
                      </div>
                    </div>
                  ))}

                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      След потвърждаване на собственост в Google Search Console, добавете следните sitemap URL адреси:
                      <ul className="mt-2 space-y-1">
                        {sitemapFiles.map((sitemap) => (
                          <li key={sitemap.url} className="text-sm">
                            • https://www.pravdagency.eu{sitemap.url}
                          </li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="keywords" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Таргетирани Ключови Думи
                  </CardTitle>
                  <CardDescription>
                    Основни SEO ключови думи за български B2B пазар
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Основни Услуги</h4>
                      <div className="space-y-1 text-sm">
                        <p>• бизнес инженеринг България</p>
                        <p>• SEO оптимизация български</p>
                        <p>• автоматизация продажби</p>
                        <p>• системи за растеж</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Локални Термини</h4>
                      <div className="space-y-1 text-sm">
                        <p>• SEO услуги Варна</p>
                        <p>• дигитален маркетинг България</p>
                        <p>• консултации бизнес София</p>
                        <p>• уеб оптимизация БГ</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">B2B Фокус</h4>
                      <div className="space-y-1 text-sm">
                        <p>• B2B маркетинг България</p>
                        <p>• корпоративни клиенти SEO</p>
                        <p>• бизнес консултации</p>
                        <p>• растеж на приходи</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
