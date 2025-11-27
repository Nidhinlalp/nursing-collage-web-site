import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Admissions from "@/pages/Admissions";
import Facilities from "@/pages/Facilities";
import Placements from "@/pages/Placements";
import Contact from "@/pages/Contact";
import Faculty from "@/pages/Faculty";
import Policies from "@/pages/Policies";
import Downloads from "@/pages/Downloads";
import News from "@/pages/News";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={Programs} />
      <Route path="/programs/:id" component={Programs} />
      <Route path="/admissions" component={Admissions} />
      <Route path="/facilities" component={Facilities} />
      <Route path="/placements" component={Placements} />
      <Route path="/contact" component={Contact} />
      <Route path="/faculty" component={Faculty} />
      <Route path="/policies" component={Policies} />
      <Route path="/downloads" component={Downloads} />
      <Route path="/news" component={News} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">
            <Router />
          </div>
          <Footer />
          <WhatsAppButton />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
