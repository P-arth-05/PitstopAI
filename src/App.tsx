
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoadsideAssistance from "./pages/RoadsideAssistance";
import VehicleDiagnostics from "./pages/VehicleDiagnostics";
import Community from "./pages/Community";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";
import VehicleHealth from "./pages/VehicleHealth";
import Vehicles from "./pages/Vehicles";

const queryClient = new QueryClient();

// Initialize React Query with defaults
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/vehicle-health" element={<VehicleHealth />} />
            <Route path="/dashboard/assistance" element={<RoadsideAssistance />} />
            <Route path="/dashboard/community" element={<Community />} />
            <Route path="/dashboard/payments" element={<Payments />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/diagnostics" element={<VehicleDiagnostics />} />
            <Route path="/dashboard/vehicles" element={<Vehicles />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
