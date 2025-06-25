import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ErrorBoundary } from "@/components/error-boundary-clean";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import Services from "@/pages/services";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import CaseStudies from "@/pages/case-studies";
import FAQ from "@/pages/faq";
import SEOStruktor from "@/pages/services/seo-struktor";
import Clientomat from "@/pages/services/clientomat";
import SalesEngine from "@/pages/services/sales-engine";
import Trendlab from "@/pages/services/trendlab";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/faq" component={FAQ} />
      <Route path="/services/seo-struktor" component={SEOStruktor} />
      <Route path="/services/clientomat" component={Clientomat} />
      <Route path="/services/sales-engine" component={SalesEngine} />
      <Route path="/services/trendlab" component={Trendlab} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;