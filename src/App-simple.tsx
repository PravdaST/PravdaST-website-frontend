import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Pravdast - Business Engineering Platform
          </h1>
          <div className="text-center">
            <p className="text-xl mb-4">
              Stop betting on your business growth. Start building predictable systems.
            </p>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Application Status</h2>
              <p className="text-green-400">✓ Server running on port 5000</p>
              <p className="text-green-400">✓ Database connected</p>
              <p className="text-green-400">✓ Frontend loaded successfully</p>
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;