
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { AlertCircle, Battery, Car, Download, Gauge, Settings, Thermometer, Wrench, Upload } from "lucide-react";

const VehicleHealth = () => {
  const [activeVehicle, setActiveVehicle] = useState("tesla");
  
  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Vehicle Health</h1>
        <p className="text-muted-foreground mb-8">Monitor and maintain your vehicle's condition</p>
        
        <Tabs defaultValue={activeVehicle} onValueChange={setActiveVehicle} className="mb-8">
          <TabsList className="grid grid-cols-2 w-full max-w-md">
            <TabsTrigger value="tesla" className="flex gap-2">
              <Car className="h-4 w-4" />
              BMW M340i
            </TabsTrigger>
            <TabsTrigger value="toyota" className="flex gap-2">
              <Car className="h-4 w-4" />
              Toyota Fortuner
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tesla" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Health Overview Card */}
              <Card className="md:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    <span>Health Overview</span>
                    <div className="text-sm font-normal flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      <span className="block h-2 w-2 rounded-full bg-green-500"></span>
                      Excellent
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-6">94%</div>
                  
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Battery className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Battery Health</span>
                        </div>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Thermometer className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Motor Temperature</span>
                        </div>
                        <span className="text-sm font-medium">75°F</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Gauge className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Tire Pressure (Avg)</span>
                        </div>
                        <span className="text-sm font-medium">36 PSI</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Settings className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Braking System</span>
                        </div>
                        <span className="text-sm font-medium">97%</span>
                      </div>
                      <Progress value={97} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Report
                    </Button>
                    <Button className="gap-2">
                      <Wrench className="h-4 w-4" />
                      Run Diagnostics
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Alerts Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Alerts & Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                          <AlertCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Software Update Available</div>
                          <div className="text-sm text-muted-foreground mt-1">Version 2023.38.25 includes improved climate control efficiency</div>
                          <Button size="sm" variant="outline" className="mt-3 text-xs h-8">
                            Schedule Update
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Wrench className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">Tire Rotation Recommended</div>
                          <div className="text-sm text-muted-foreground mt-1">Last rotation was 6,500 miles ago</div>
                          <Button size="sm" variant="outline" className="mt-3 text-xs h-8">
                            Schedule Service
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Battery className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">12V Battery Check</div>
                          <div className="text-sm text-muted-foreground mt-1">Last check was 6 months ago</div>
                          <Button size="sm" variant="outline" className="mt-3 text-xs h-8">
                            Schedule Service
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* AI Diagnostics Section */}
            <div className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>AI-Powered Diagnostics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Upload images or videos of your vehicle issue for AI analysis, or describe a problem you're experiencing.
                      </p>
                      
                      <div className="border-2 border-dashed border-muted rounded-xl h-40 flex flex-col items-center justify-center">
                        <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground text-center mb-2">
                          Drag & drop files here or click to browse
                        </p>
                        <Button size="sm">Upload File</Button>
                      </div>
                      
                      <div className="pt-2">
                        <textarea
                          className="w-full h-24 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                          placeholder="Describe any issues you're experiencing (e.g., 'Strange noise when braking', 'Car pulls to left when driving')..."
                        ></textarea>
                      </div>
                      
                      <Button className="w-full">Analyze</Button>
                    </div>
                    
                    <div className="border rounded-xl p-4">
                      <h3 className="font-bold text-lg mb-4">Previous Diagnostics</h3>
                      
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-muted-foreground">
                            <Settings className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium">Brake Pad Wear Analysis</div>
                            <div className="text-sm text-muted-foreground">Analyzed 2 days ago</div>
                            <div className="text-sm text-primary mt-1 cursor-pointer">View Report</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-muted-foreground">
                            <Settings className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium">Suspension Noise Check</div>
                            <div className="text-sm text-muted-foreground">Analyzed 1 week ago</div>
                            <div className="text-sm text-primary mt-1 cursor-pointer">View Report</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-muted-foreground">
                            <Settings className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium">Battery Degradation Analysis</div>
                            <div className="text-sm text-muted-foreground">Analyzed 1 month ago</div>
                            <div className="text-sm text-primary mt-1 cursor-pointer">View Report</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="toyota" className="mt-4">
            <div className="h-40 flex items-center justify-center border rounded-xl">
              <p className="text-muted-foreground">Toyota Fortuner data loading...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default VehicleHealth;

