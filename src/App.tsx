import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { lazy } from "react";
import Home from "@/pages/home";
import Services from "@/pages/services";
import SeoStruktor from "@/pages/services/seo-struktor";
import Clientomat from "@/pages/services/clientomat";
import SalesEngine from "@/pages/services/sales-engine";
import CaseStudies from "@/pages/case-studies";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/seo-struktor" component={SeoStruktor} />
      <Route path="/services/clientomat" component={Clientomat} />
      <Route path="/services/sales-engine" component={SalesEngine} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/strapi-test" component={lazy(() => import("@/pages/strapi-test"))} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
        <SpeedInsights />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
