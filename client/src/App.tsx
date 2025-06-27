import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SpeedInsights } from "@vercel/speed-insights/react";
import {
  registerServiceWorker,
  preloadCriticalResources,
} from "@/lib/performance";

import {
  AccessibilityPanel,
} from "@/components/accessibility-panel";
import { ErrorBoundary, PageErrorBoundary } from "@/components/error-boundary";
import { lazy, useEffect, Suspense } from "react";
import { FullPageLoading } from "@/components/loading-states";
import usePageTracking from "./hooks/usePageTracking";
import KlaviyoSetup from "@/components/klaviyo-setup";
import { KlaviyoIntegration } from "@/components/klaviyo-integration";
import { PixelIntegration } from "@/components/pixel-integration";
import { ProgressiveProiling } from "@/components/progressive-profiling";
import Home from "@/pages/home";
import Services from "@/pages/services";
import SeoStruktor from "@/pages/services/seo-struktor";
import Clientomat from "@/pages/services/clientomat";
import Trendlab from "@/pages/services/trendlab";
import Clickstarter from "@/pages/services/clickstarter";

import CaseStudies from "@/pages/case-studies";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import AdminPravda from "@/pages/admin-pravda";
import FAQ from "@/pages/faq";
import About from "@/pages/about";
import Contact from "@/pages/contact-new";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import Calculators from "@/pages/calculators-new-fixed";
import AnalyticsDashboard from "@/pages/analytics-dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <PageErrorBoundary>
      <Suspense fallback={<FullPageLoading message="Зарежда страницата..." />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/seo-struktor" component={SeoStruktor} />
          <Route path="/services/clientomat" component={Clientomat} />
          <Route path="/services/trendlab" component={Trendlab} />
          <Route path="/services/clickstarter" component={Clickstarter} />

          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/faq" component={FAQ} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/calculators" component={Calculators} />
          <Route path="/analytics" component={AnalyticsDashboard} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route
            path="/strapi-test"
            component={lazy(() => import("@/pages/strapi-test"))}
          />
          <Route
            path="/seo-monitor"
            component={lazy(() => import("@/pages/seo-monitor"))}
          />
          <Route
            path="/performance-monitor"
            component={lazy(() => import("@/pages/performance-monitor"))}
          />
          <Route path="/admin-pravda" component={AdminPravda} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </PageErrorBoundary>
  );
}

function App() {
  usePageTracking(); // Activate page tracking here

  useEffect(() => {
    // Инициализация на performance оптимизации
    registerServiceWorker();
    preloadCriticalResources();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <KlaviyoSetup />
        <KlaviyoIntegration />
        <PixelIntegration />
        {/* <ProgressiveProiling trigger="time" delay={45000} /> */}
        <ScrollToTop />
        <Toaster />
        <Router />
        <AccessibilityPanel />
        <SpeedInsights />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
