import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Import your home page
import Home from "@/pages/home";

// Simple fallback components for other routes
const Contact = () => <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center"><h1>Contact Page</h1></div>;
const Services = () => <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center"><h1>Services Page</h1></div>;
const About = () => <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center"><h1>About Page</h1></div>;
const Blog = () => <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center"><h1>Blog Page</h1></div>;
const NotFound = () => <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center"><h1>Page not found</h1></div>;

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;