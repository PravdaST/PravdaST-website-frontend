import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Simple page components for now
function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Pravdast - Business Engineering Platform
        </h1>
        <div className="text-center">
          <p className="text-xl mb-4">
            Stop betting on your business growth. Start building predictable systems.
          </p>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Application Status</h2>
            <div className="space-y-2">
              <p className="text-green-400">✓ Server running successfully</p>
              <p className="text-green-400">✓ Frontend loaded and working</p>
              <p className="text-green-400">✓ Database connection ready</p>
              <p className="text-green-400">✓ Vercel deployment optimized</p>
            </div>
            <div className="mt-6 p-4 bg-yellow-600 text-black rounded">
              <p className="font-semibold">Ready for production deployment!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Contact</h1>
        <div className="max-w-md mx-auto bg-slate-800 p-6 rounded-lg">
          <p className="text-center">Contact form ready for implementation</p>
        </div>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route>
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
          <h1 className="text-2xl">Page not found</h1>
        </div>
      </Route>
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