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
  SkipToMainContent,
} from "@/components/accessibility-panel";
import { ErrorBoundary, PageErrorBoundary } from "@/components/error-boundary";
import { lazy, useEffect, Suspense } from "react";
import { FullPageLoading } from "@/components/loading-states";
import usePageTracking from "./hooks/usePageTracking";
import KlaviyoSetup from "@/components/klaviyo-setup";
import Home from "@/pages/home";
import Services from "@/pages/services";
import SeoStruktor from "@/pages/services/seo-struktor";
import Clientomat from "@/pages/services/clientomat";
import Trendlab from "@/pages/services/trendlab";
import SalesEngine from "@/pages/services/sales-engine";
import CaseStudies from "@/pages/case-studies";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import FAQ from "@/pages/faq";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import AdminPanel from "@/pages/admin";
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
          <Route path="/services/sales-engine" component={SalesEngine} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/faq" component={FAQ} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={AdminPanel} />
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
        <SkipToMainContent />
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
