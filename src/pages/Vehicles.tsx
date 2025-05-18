
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Plus, 
  Battery, 
  Gauge, 
  Droplet, 
  RotateCw, 
  Wrench,
  HelpCircle,
  CheckCircle,
  AlertTriangle,
  XCircle
} from "lucide-react";

// Helper function to format numbers to Indian style (e.g., 1,00,000 instead of 100,000)
const formatIndianNumber = (num: number): string => {
  const str = num.toString();
  let result = '';
  
  // Handle numbers less than 1000
  if (num < 1000) {
    return str;
  }
  
  // Extract the last 3 digits
  const lastThree = str.substring(str.length - 3);
  // Get remaining digits
  const remaining = str.substring(0, str.length - 3);
  
  // Add commas to remaining digits in groups of 2
  if (remaining !== '') {
    result = remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
  } else {
    result = lastThree;
  }
  
  return result;
};

interface VehicleProps {
  id: string;
  name: string;
  type: string;
  year: number;
  status: "active" | "inactive";
  fuelType: string;
  healthScore: number;
  mileage: number;
  batteryHealth?: number;
  oilLife?: number;
  tireHealth: number;
  engineStatus: "good" | "warning" | "critical";
  maintenanceStatus: "up-to-date" | "due-soon" | "overdue";
  lastServiced: string;
  issues: Array<{
    id: string;
    type: string;
    severity: "low" | "medium" | "high";
    description: string;
    recommendedAction: string;
  }>;
}

const Vehicles = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const vehicles: VehicleProps[] = [
    {
      id: "v1",
      name: "BMW M340i",
      type: "Sedan",
      year: 2022,
      status: "active",
      fuelType: "Petrol",
      healthScore: 94,
      mileage: 12500,
      batteryHealth: 87,
      tireHealth: 92,
      engineStatus: "good",
      maintenanceStatus: "up-to-date",
      lastServiced: "2023-03-15",
      issues: []
    },
    {
      id: "v2",
      name: "Toyota Fortuner",
      type: "SUV",
      year: 2021,
      status: "active",
      fuelType: "Diesel",
      healthScore: 89,
      mileage: 25000,
      oilLife: 74,
      tireHealth: 85,
      engineStatus: "good",
      maintenanceStatus: "due-soon",
      lastServiced: "2022-11-20",
      issues: [
        {
          id: "i1",
          type: "Oil Change",
          severity: "medium",
          description: "Engine oil approaching end of useful life",
          recommendedAction: "Schedule oil change within next 500 kilometers"
        }
      ]
    },
    {
      id: "v3",
      name: "Honda Civic",
      type: "Sedan",
      year: 2018,
      status: "active",
      fuelType: "Petrol",
      healthScore: 77,
      mileage: 58000,
      oilLife: 32,
      tireHealth: 68,
      engineStatus: "warning",
      maintenanceStatus: "overdue",
      lastServiced: "2022-06-10",
      issues: [
        {
          id: "i2",
          type: "Brake Pads",
          severity: "high",
          description: "Front brake pads critically worn",
          recommendedAction: "Replace front brake pads immediately"
        },
        {
          id: "i3",
          type: "Air Filter",
          severity: "medium",
          description: "Air filter is dirty and restricting airflow",
          recommendedAction: "Replace air filter at next service"
        }
      ]
    }
  ];

  const getSeverityColor = (severity: "low" | "medium" | "high") => {
    switch (severity) {
      case "low": return "text-blue-500";
      case "medium": return "text-amber-500";
      case "high": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const getMaintenanceIcon = (status: "up-to-date" | "due-soon" | "overdue") => {
    switch (status) {
      case "up-to-date": return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "due-soon": return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "overdue": return <XCircle className="h-5 w-5 text-red-500" />;
      default: return <HelpCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: "good" | "warning" | "critical") => {
    switch (status) {
      case "good": return "text-green-500";
      case "warning": return "text-amber-500";
      case "critical": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">My Vehicles</h1>
            <p className="text-muted-foreground">View and manage your vehicles</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" /> Add Vehicle
          </Button>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Vehicles</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="issues">Has Issues</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 gap-6">
          {vehicles
            .filter(vehicle => {
              if (activeTab === "all") return true;
              if (activeTab === "active") return vehicle.status === "active";
              if (activeTab === "issues") return vehicle.issues.length > 0;
              return true;
            })
            .map(vehicle => (
              <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Car className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {vehicle.year} • {vehicle.type} • {vehicle.fuelType}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        vehicle.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}>
                        {vehicle.status === "active" ? (
                          <>
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            Active
                          </>
                        ) : (
                          <>
                            <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                            Inactive
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold">{vehicle.healthScore}%</div>
                      <div className="text-sm text-muted-foreground">Health Score</div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold">{formatIndianNumber(vehicle.mileage)}</div>
                      <div className="text-sm text-muted-foreground">Mileage</div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-1">
                        {getMaintenanceIcon(vehicle.maintenanceStatus)}
                        <span className="text-sm font-medium capitalize">
                          {vehicle.maintenanceStatus.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">Maintenance</div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                      <div className={`text-2xl font-bold ${getStatusColor(vehicle.engineStatus)}`}>
                        {vehicle.engineStatus.charAt(0).toUpperCase() + vehicle.engineStatus.slice(1)}
                      </div>
                      <div className="text-sm text-muted-foreground">Engine Status</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {vehicle.batteryHealth && (
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <div className="rounded-full bg-blue-100 p-2">
                          <Battery className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Battery Health</div>
                          <div className="text-xl font-semibold">{vehicle.batteryHealth}%</div>
                        </div>
                      </div>
                    )}
                    {vehicle.oilLife && (
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <div className="rounded-full bg-amber-100 p-2">
                          <Droplet className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Oil Life</div>
                          <div className="text-xl font-semibold">{vehicle.oilLife}%</div>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="rounded-full bg-green-100 p-2">
                        <RotateCw className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Tire Health</div>
                        <div className="text-xl font-semibold">{vehicle.tireHealth}%</div>
                      </div>
                    </div>
                  </div>

                  {vehicle.issues.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Issues Detected</h3>
                      <div className="space-y-3">
                        {vehicle.issues.map(issue => (
                          <div key={issue.id} className="p-3 border rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center gap-2">
                                <Wrench className={`h-5 w-5 ${getSeverityColor(issue.severity)}`} />
                                <span className="font-medium">{issue.type}</span>
                              </div>
                              <div className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                                issue.severity === "low" ? "bg-blue-100 text-blue-800" :
                                issue.severity === "medium" ? "bg-amber-100 text-amber-800" :
                                "bg-red-100 text-red-800"
                              }`}>
                                {issue.severity} severity
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{issue.description}</p>
                            <div className="text-sm font-medium">
                              Recommendation: {issue.recommendedAction}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                
                  <div className="flex justify-between items-center mt-6">
                    <div className="text-sm text-muted-foreground">
                      Last serviced: {new Date(vehicle.lastServiced).toLocaleDateString()}
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">Details</Button>
                      <Button size="sm">Service Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Vehicles;
