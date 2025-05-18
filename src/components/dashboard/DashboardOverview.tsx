
import { Car, Wrench, Calendar, UploadCloud } from "lucide-react";
import VehicleHealthCard from "./VehicleHealthCard";
import MapCard from "./MapCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DashboardOverview = () => {
  const upcomingServices = [
    { 
      title: "Oil Change", 
      date: "April 15, 2023", 
      status: "upcoming",
      description: "Regular maintenance - Full synthetic oil" 
    },
    { 
      title: "Tire Rotation", 
      date: "May 2, 2023", 
      status: "scheduled",
      description: "Recommended based on wear pattern" 
    },
    { 
      title: "Brake Inspection", 
      date: "June 10, 2023", 
      status: "recommended",
      description: "AI detected unusual brake noise" 
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-muted-foreground mb-8">Welcome back, John! Here's your vehicle overview.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <VehicleHealthCard 
          status="good" 
          score={94}
          battery={87}
          temperature={88}
          oilLife={65}
        />
        
        <MapCard />
        
        <Card className="hover-card">
          <CardHeader className="pb-2">
            <CardTitle>Upload Diagnostics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-muted rounded-xl h-[232px] flex flex-col items-center justify-center">
              <UploadCloud className="h-10 w-10 text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-center max-w-xs mb-4">
                Upload images or videos of your vehicle issue for AI analysis
              </p>
              <Button>Upload File</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Upcoming Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingServices.map((service, index) => (
            <Card key={index} className="hover-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                    service.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                    service.status === 'scheduled' ? 'bg-green-100 text-green-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {service.status === 'upcoming' ? 'Due Soon' :
                     service.status === 'scheduled' ? 'Scheduled' :
                     'Recommended'}
                  </div>
                </div>
                <h3 className="font-medium mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {service.date}
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 px-3 text-xs">
                    Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">My Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">BMW M340i</h3>
                  <p className="text-sm text-muted-foreground">2022 • Electric • Active</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-semibold">94%</div>
                  <div className="text-xs text-muted-foreground">Health</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">12K</div>
                  <div className="text-xs text-muted-foreground">Miles</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">87%</div>
                  <div className="text-xs text-muted-foreground">Battery</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Toyota Fortuner</h3>
                  <p className="text-sm text-muted-foreground">2021 • Hybrid • Active</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-semibold">89%</div>
                  <div className="text-xs text-muted-foreground">Health</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">25K</div>
                  <div className="text-xs text-muted-foreground">Miles</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">74%</div>
                  <div className="text-xs text-muted-foreground">Oil Life</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
