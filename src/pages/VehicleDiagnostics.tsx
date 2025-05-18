
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Check, CheckCircle, Circle, Info, Upload, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const VehicleDiagnostics = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  const handleUpload = () => {
    setIsAnalyzing(true);
    toast.info("Analyzing your image...");
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      toast.success("Analysis complete");
    }, 3000);
  };
  
  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">AI Diagnostics</h1>
        <p className="text-muted-foreground mb-8">Upload images or videos of your vehicle issues for AI analysis</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upload Vehicle Issue</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="image" className="mb-6">
                  <TabsList className="grid grid-cols-3 w-full max-w-md">
                    <TabsTrigger value="image" className="flex gap-2">
                      <Camera className="h-4 w-4" />
                      Image
                    </TabsTrigger>
                    <TabsTrigger value="video" className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
                      Video
                    </TabsTrigger>
                    <TabsTrigger value="audio" className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 6v12"/><path d="M6 12h12"/></svg>
                      Description
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="image" className="mt-4">
                    <div className="border-2 border-dashed border-muted rounded-xl h-56 flex flex-col items-center justify-center">
                      <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground text-center max-w-sm mb-4">
                        Drag and drop images of your vehicle issue or click to browse
                      </p>
                      <Button onClick={handleUpload}>Upload Image</Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Supported formats: JPG, PNG, HEIC - Max file size: 10MB
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="video" className="mt-4">
                    <div className="border-2 border-dashed border-muted rounded-xl h-56 flex flex-col items-center justify-center">
                      <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground text-center max-w-sm mb-4">
                        Drag and drop videos of your vehicle issue or click to browse
                      </p>
                      <Button>Upload Video</Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Supported formats: MP4, MOV - Max file size: 100MB - Max duration: 1 minute
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="audio" className="mt-4">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Describe the issue you're experiencing with your vehicle in detail:
                      </p>
                      <textarea
                        className="w-full h-32 p-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Example: My car makes a grinding noise when I brake, especially at low speeds. The noise started about a week ago and seems to be coming from the front right wheel..."
                      ></textarea>
                      <Button className="w-full sm:w-auto">Analyze Description</Button>
                    </div>
                  </TabsContent>
                </Tabs>
                
                {isAnalyzing && (
                  <div className="mt-6 p-6 border rounded-xl">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                      <h3 className="text-lg font-medium mb-2">Analyzing Your Image</h3>
                      <p className="text-muted-foreground text-center">
                        Our AI is examining the image to identify vehicle issues...
                      </p>
                    </div>
                  </div>
                )}
                
                {analysisComplete && (
                  <div className="mt-6 border rounded-xl overflow-hidden">
                    <div className="p-4 bg-green-50 border-b flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Analysis Complete</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-4">AI Diagnosis Results</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <Info className="h-5 w-5 text-amber-600 mt-0.5" />
                          <div>
                            <div className="font-medium">Brake Pad Wear Detected</div>
                            <div className="text-sm text-muted-foreground mt-1">The image shows significant wear on the front right brake pad (approximately 80% worn). This explains the grinding noise when braking.</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mt-4">
                          <h4 className="font-medium">Recommended Actions:</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5" />
                              <span>Replace front brake pads (both sides recommended for even braking)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5" />
                              <span>Inspect brake rotors for scoring or damage</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5" />
                              <span>Check brake fluid level and condition</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Nearest Service Options:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="border rounded-lg p-3">
                              <div className="font-medium">QuickStop Brake Service</div>
                              <div className="text-sm text-muted-foreground">1.2 miles away • ⭐⭐⭐⭐⭐ (128)</div>
                              <div className="font-bold text-lg mt-1">$180 - $240</div>
                              <Button size="sm" className="mt-2 w-full">Book Appointment</Button>
                            </div>
                            <div className="border rounded-lg p-3">
                              <div className="font-medium">Main Street Auto Shop</div>
                              <div className="text-sm text-muted-foreground">2.7 miles away • ⭐⭐⭐⭐☆ (86)</div>
                              <div className="font-bold text-lg mt-1">$150 - $200</div>
                              <Button size="sm" className="mt-2 w-full">Book Appointment</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-medium">Upload Media</div>
                      <div className="text-sm text-muted-foreground">
                        Share images or videos of your vehicle issue, or describe the symptoms you're experiencing.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-medium">AI Analysis</div>
                      <div className="text-sm text-muted-foreground">
                        Our AI compares your issue with millions of vehicle problems to identify the most likely cause.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-medium">Expert Review</div>
                      <div className="text-sm text-muted-foreground">
                        Certified mechanics review the AI diagnosis for complex issues to ensure accuracy.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-medium">Get Solutions</div>
                      <div className="text-sm text-muted-foreground">
                        Receive a detailed report with repair options, cost estimates, and nearby service providers.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Common Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                    <Circle className="h-2 w-2 fill-current text-primary" />
                    <span>Check Engine Light On</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                    <Circle className="h-2 w-2 fill-current text-primary" />
                    <span>Strange Noises When Braking</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                    <Circle className="h-2 w-2 fill-current text-primary" />
                    <span>Vehicle Pulling to One Side</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                    <Circle className="h-2 w-2 fill-current text-primary" />
                    <span>Engine Overheating</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                    <Circle className="h-2 w-2 fill-current text-primary" />
                    <span>Transmission Slipping</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                    <Circle className="h-2 w-2 fill-current text-primary" />
                    <span>Battery Not Holding Charge</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">View All Common Issues</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6" />
                  <h3 className="text-lg font-bold">Premium Diagnostics</h3>
                </div>
                <p className="mb-6">
                  Upgrade to Premium for unlimited AI diagnostics, priority mechanic reviews, and detailed repair guides.
                </p>
                <Button variant="secondary" className="w-full">Upgrade Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VehicleDiagnostics;
