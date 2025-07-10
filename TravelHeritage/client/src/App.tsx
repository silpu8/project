import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Pages
import Home from "@/pages/home";
import Ladakh from "@/pages/ladakh";
import Karnataka from "@/pages/karnataka";
import Culture from "@/pages/culture";
import TravelGuide from "@/pages/travel-guide";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ladakh" component={Ladakh} />
      <Route path="/karnataka" component={Karnataka} />
      <Route path="/culture" component={Culture} />
      <Route path="/travel-guide" component={TravelGuide} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
