
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Heart, 
  MapPin, 
  Users, 
  CreditCard, 
  Settings, 
  LogOut, 
  Car
} from "lucide-react";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarLink = ({ to, icon, label, active }: SidebarLinkProps) => (
  <li>
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-primary/10 hover:text-primary",
        active && "bg-primary/10 text-primary font-medium"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  </li>
);

const DashboardSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const links = [
    { to: "/dashboard", icon: <Home className="h-5 w-5" />, label: "Home" },
    { to: "/dashboard/vehicle-health", icon: <Heart className="h-5 w-5" />, label: "Vehicle Health" },
    { to: "/dashboard/assistance", icon: <MapPin className="h-5 w-5" />, label: "Assistance" },
    { to: "/dashboard/vehicles", icon: <Car className="h-5 w-5" />, label: "My Vehicles" },
    { to: "/dashboard/community", icon: <Users className="h-5 w-5" />, label: "Community" },
    { to: "/dashboard/payments", icon: <CreditCard className="h-5 w-5" />, label: "Payments" },
    { to: "/dashboard/settings", icon: <Settings className="h-5 w-5" />, label: "Settings" },
  ];

  return (
    <aside className="hidden lg:flex flex-col h-screen w-64 border-r bg-card">
      <div className="p-4 border-b">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="h-10 w-10">
            <img 
              src="/lovable-uploads/54e37fc4-0fac-4c53-88aa-e324fed121b8.png" 
              alt="Pitstop AI Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-display text-xl font-semibold">Pitstop AI</span>
        </Link>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {links.map((link) => (
            <SidebarLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
              active={currentPath === link.to}
            />
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <Link 
          to="/logout" 
          className="flex items-center gap-3 rounded-xl px-3 py-2 w-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
