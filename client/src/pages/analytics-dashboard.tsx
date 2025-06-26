import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign, 
  RefreshCw,
  Eye,
  MousePointer,
  UserCheck,
  Zap
} from "lucide-react";

interface AnalyticsData {
  overview: {
    total_users: number;
    total_conversions: number;
    avg_lead_score: number;
    qualified_leads: number;
  };
  conversion_funnel: {
    funnel_stages: Array<{
      stage: string;
      users: number;
      conversion_rate: number;
    }>;
    overall_conversion_rate: number;
  };
  attribution_summary: Array<{
    attribution_channel: string;
    total_users: number;
    avg_lead_score: number;
    total_conversions: number;
  }>;
  lead_segments: Array<{
    segment: string;
    count: number;
    avg_score: number;
  }>;
  top_leads: Array<{
    user_id: string;
    email: string;
    company: string;
    lead_score: number;
    attribution_channel: string;
    stage: string;
  }>;
  traffic_sources: Array<{
    source: string;
    attribution_channel: string;
    users: number;
    conversions: number;
  }>;
}

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('30d');
  const [selectedView, setSelectedView] = useState('dashboard');

  useEffect(() => {
    fetchAnalytics();
  }, [timeframe, selectedView]);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/tracking?action=analytics&type=${selectedView}&timeframe=${timeframe}`);
      const analyticsData = await response.json();
      setData(analyticsData);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-[#ECB629] animate-spin mx-auto mb-4" />
          <p className="text-white">Зарежда analytics данни...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
              <p className="text-gray-400">Conversion tracking и attribution analysis</p>
            </div>
            <div className="flex gap-4">
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-32 bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1d">Днес</SelectItem>
                  <SelectItem value="7d">7 дни</SelectItem>
                  <SelectItem value="30d">30 дни</SelectItem>
                  <SelectItem value="90d">90 дни</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={fetchAnalytics} variant="outline" size="icon">
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Overview Cards */}
          {data?.overview && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Общо потребители</p>
                      <p className="text-2xl font-bold text-white">{data.overview.total_users}</p>
                    </div>
                    <Users className="w-8 h-8 text-[#ECB629]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Конверсии</p>
                      <p className="text-2xl font-bold text-white">{data.overview.total_conversions}</p>
                    </div>
                    <Target className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Среден Lead Score</p>
                      <p className="text-2xl font-bold text-white">{data.overview.avg_lead_score?.toFixed(1)}</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Qualified Leads</p>
                      <p className="text-2xl font-bold text-white">{data.overview.qualified_leads}</p>
                    </div>
                    <UserCheck className="w-8 h-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Analytics Tabs */}
        <Tabs value={selectedView} onValueChange={setSelectedView}>
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="conversion_funnel">Conversion Funnel</TabsTrigger>
            <TabsTrigger value="attribution">Attribution</TabsTrigger>
            <TabsTrigger value="lead_scoring">Lead Scoring</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Conversion Funnel */}
              {data?.conversion_funnel && (
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-[#ECB629]" />
                      Conversion Funnel
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {data.conversion_funnel.funnel_stages.map((stage, index) => (
                        <div key={stage.stage} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#ECB629] rounded-full flex items-center justify-center text-black font-bold text-sm">
                              {index + 1}
                            </div>
                            <span className="text-white capitalize">{stage.stage}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-semibold">{stage.users} users</div>
                            <div className="text-gray-400 text-sm">{stage.conversion_rate}% conversion</div>
                          </div>
                        </div>
                      ))}
                      <div className="pt-4 border-t border-slate-700">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Overall Conversion Rate:</span>
                          <span className="text-[#ECB629] font-bold">{data.conversion_funnel.overall_conversion_rate}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Attribution Channels */}
              {data?.attribution_summary && (
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Eye className="w-5 h-5 text-[#ECB629]" />
                      Attribution Channels
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {data.attribution_summary.map((channel) => (
                        <div key={channel.attribution_channel} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <div>
                            <div className="text-white font-medium capitalize">{channel.attribution_channel}</div>
                            <div className="text-gray-400 text-sm">Score: {channel.avg_lead_score?.toFixed(1)}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-white">{channel.total_users} users</div>
                            <div className="text-green-500 text-sm">{channel.total_conversions} conversions</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="conversion_funnel" className="mt-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Подробен Conversion Funnel Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                {data?.conversion_funnel && (
                  <div className="space-y-6">
                    {data.conversion_funnel.funnel_stages.map((stage, index) => (
                      <motion.div 
                        key={stage.stage}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg">
                          <div className="w-12 h-12 bg-[#ECB629] rounded-full flex items-center justify-center text-black font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold capitalize text-lg">{stage.stage}</h3>
                            <div className="flex items-center gap-6 mt-2">
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-gray-400" />
                                <span className="text-white">{stage.users} потребители</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-gray-400" />
                                <span className="text-[#ECB629]">{stage.conversion_rate}% conversion</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">{stage.users}</div>
                            <div className="text-gray-400">users</div>
                          </div>
                        </div>
                        {index < data.conversion_funnel.funnel_stages.length - 1 && (
                          <div className="flex justify-center my-2">
                            <div className="w-px h-8 bg-gradient-to-b from-[#ECB629] to-transparent"></div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attribution" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Traffic Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  {data?.traffic_sources && (
                    <div className="space-y-3">
                      {data.traffic_sources.map((source) => (
                        <div key={`${source.source}-${source.attribution_channel}`} className="p-3 bg-slate-700/30 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-white font-medium">{source.source}</div>
                              <div className="text-gray-400 text-sm capitalize">{source.attribution_channel}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-white">{source.users} users</div>
                              <div className="text-green-500 text-sm">{source.conversions} conversions</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Channel Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  {data?.attribution_summary && (
                    <div className="space-y-4">
                      {data.attribution_summary.map((channel) => {
                        const conversionRate = channel.total_users > 0 ? 
                          ((channel.total_conversions / channel.total_users) * 100).toFixed(1) : '0';
                        
                        return (
                          <div key={channel.attribution_channel} className="p-4 bg-slate-700/30 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="text-white font-medium capitalize">{channel.attribution_channel}</h3>
                              <span className="text-[#ECB629] font-bold">{conversionRate}%</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <div className="text-gray-400">Users</div>
                                <div className="text-white font-semibold">{channel.total_users}</div>
                              </div>
                              <div>
                                <div className="text-gray-400">Conversions</div>
                                <div className="text-white font-semibold">{channel.total_conversions}</div>
                              </div>
                              <div>
                                <div className="text-gray-400">Avg Score</div>
                                <div className="text-white font-semibold">{channel.avg_lead_score?.toFixed(1)}</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="lead_scoring" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Lead Segments</CardTitle>
                </CardHeader>
                <CardContent>
                  {data?.lead_segments && (
                    <div className="space-y-4">
                      {data.lead_segments.map((segment) => (
                        <div key={segment.segment} className="p-4 bg-slate-700/30 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-white font-medium capitalize">{segment.segment}</h3>
                              <div className="text-gray-400 text-sm">Avg Score: {segment.avg_score?.toFixed(1)}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">{segment.count}</div>
                              <div className="text-gray-400 text-sm">leads</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Top Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  {data?.top_leads && (
                    <div className="space-y-3">
                      {data.top_leads.slice(0, 10).map((lead) => (
                        <div key={lead.user_id} className="p-3 bg-slate-700/30 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-white font-medium">{lead.email || 'Anonymous'}</div>
                              <div className="text-gray-400 text-sm">{lead.company || 'No company'}</div>
                              <div className="text-gray-400 text-xs capitalize">{lead.attribution_channel} • {lead.stage}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-[#ECB629] font-bold text-lg">{lead.lead_score}</div>
                              <div className="text-gray-400 text-sm">score</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}