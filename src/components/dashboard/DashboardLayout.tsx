
import { ReactNode, useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SOSButton from "@/components/dashboard/SOSButton";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      
      <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <DashboardSidebar />
        </SheetContent>
      </Sheet>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader toggleMobileSidebar={toggleMobileSidebar} />
        <main className="flex-1 overflow-y-auto bg-background/95">
          {children}
        </main>
      </div>
      
      <SOSButton />
    </div>
  );
};

export default DashboardLayout;
