import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CustomBot from "./pages/CustomBot";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

// English versions of the pages
import EnCustomBot from "./pages/en/CustomBot";
import EnIndex from "./pages/en/Index";
import EnProduct from "./pages/en/Product";

const queryClient = new QueryClient();

// Helper to detect preferred language
const getPreferredLanguage = () => {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage) return savedLanguage;

  const browserLang = navigator.language;
  return browserLang.startsWith("pt") ? "pt" : "en";
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Root redirect based on preferred language */}
          <Route
            path="/"
            element={<Navigate to={`/${getPreferredLanguage()}`} replace />}
          />

          {/* Portuguese routes (current content) */}
          <Route path="/pt" element={<Index />} />
          <Route path="/pt/product" element={<Product />} />
          <Route path="/pt/custom-bot" element={<CustomBot />} />

          {/* English routes */}
          <Route path="/en" element={<EnIndex />} />
          <Route path="/en/product" element={<EnProduct />} />
          <Route path="/en/custom-bot" element={<EnCustomBot />} />

          {/* Legacy routes - redirect to Portuguese */}
          <Route
            path="/product"
            element={<Navigate to="/pt/product" replace />}
          />
          <Route
            path="/custom-bot"
            element={<Navigate to="/pt/custom-bot" replace />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
