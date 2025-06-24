import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect } from "react";
import Home from "@/pages/home";
import Services from "@/pages/services";
import SeoStruktor from "@/pages/services/seo-struktor";
import SeoStruktorNew from "@/pages/seo-structor-new";
import Clientomat from "@/pages/services/clientomat";
import SalesEngine from "@/pages/services/sales-engine";
import CaseStudies from "@/pages/case-studies";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Компонент за управление на document title за 404 страници
function DocumentTitleManager() {
  const [location] = useLocation();
  
  useEffect(() => {
    const validRoutes = [
      '/',
      '/services',
      '/services/seo-struktor',
      '/seo-structor-new',
      '/services/clientomat', 
      '/services/sales-engine',
      '/case-studies',
      '/about',
      '/contact',
      '/strapi-test'
    ];
    
    if (!validRoutes.includes(location)) {
      document.title = '404 - Страницата не е намерена | Pravda ST';
    }
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <DocumentTitleManager />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services/seo-struktor" component={SeoStruktor} />
        <Route path="/seo-structor-new" component={SeoStruktorNew} />
        <Route path="/services/clientomat" component={Clientomat} />
        <Route path="/services/sales-engine" component={SalesEngine} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <SpeedInsights />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
