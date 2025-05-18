
import { useState } from "react";
import { Bell, Menu, User, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel,
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface DashboardHeaderProps {
  toggleMobileSidebar: () => void;
}

const DashboardHeader = ({ toggleMobileSidebar }: DashboardHeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="h-16 border-b flex items-center px-4 justify-between sticky top-0 z-30 bg-background/95 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden" 
          onClick={toggleMobileSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        {isSearchOpen ? (
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Input 
              placeholder="Search..." 
              className="h-9 md:w-[300px] w-full"
              autoFocus
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9" 
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:flex h-9 w-9" 
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px]">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start gap-1 cursor-pointer">
              <span className="font-medium">Maintenance Reminder</span>
              <span className="text-xs text-muted-foreground">Your oil change is due in 500 miles</span>
              <span className="text-xs text-muted-foreground">10 min ago</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start gap-1 cursor-pointer">
              <span className="font-medium">Battery Alert</span>
              <span className="text-xs text-muted-foreground">Battery voltage is lower than normal</span>
              <span className="text-xs text-muted-foreground">2 hours ago</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-primary cursor-pointer">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Subscriptions</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
