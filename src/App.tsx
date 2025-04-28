
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NotificationScreen from "./pages/NotificationScreen";
import KitChecklistScreen from "./pages/KitChecklistScreen";
import SearchLocateScreen from "./pages/SearchLocateScreen";
import KitVerificationScreen from "./pages/KitVerificationScreen";
import SuccessScreen from "./pages/SuccessScreen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/notification" element={<NotificationScreen />} />
          <Route path="/kit-checklist" element={<KitChecklistScreen />} />
          <Route path="/search-locate" element={<SearchLocateScreen />} />
          <Route path="/kit-verification" element={<KitVerificationScreen />} />
          <Route path="/success" element={<SuccessScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
