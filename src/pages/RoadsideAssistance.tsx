
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Car, Clock, MapPin, Phone, PhoneCall, Truck, User } from "lucide-react";
import { toast } from "sonner";

const RoadsideAssistance = () => {
  const [assistanceType, setAssistanceType] = useState("");
  const [location, setLocation] = useState("Current Location");
  const [requestSent, setRequestSent] = useState(false);
  const [eta, setEta] = useState("15 min");

  const handleRequestAssistance = () => {
    if (!assistanceType) {
      toast.error("Please select assistance type");
      return;
    }
    
    setRequestSent(true);
    toast.success("Assistance request sent successfully", {
      description: `Help is on the way! ETA: ${eta}`,
    });
  };

  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Roadside Assistance</h1>
        <p className="text-muted-foreground mb-8">Request immediate help for your vehicle</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Request Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>Emergency Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                {!requestSent ? (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="assistance-type">Assistance Type</Label>
                      <Select value={assistanceType} onValueChange={setAssistanceType}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="towing">Vehicle Towing</SelectItem>
                          <SelectItem value="jump-start">Battery Jump-Start</SelectItem>
                          <SelectItem value="tire">Flat Tire Service</SelectItem>
                          <SelectItem value="fuel">Fuel Delivery</SelectItem>
                          <SelectItem value="lockout">Vehicle Lockout</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="location">Your Location</Label>
                      <div className="relative mt-2">
                        <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <Input 
                          id="location" 
                          value={location} 
                          onChange={(e) => setLocation(e.target.value)} 
                          className="pl-10"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        We've detected your current location. Edit if needed.
                      </p>
                    </div>

                    <div>
                      <Label>Vehicle Details</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        <div className="flex items-center p-3 border rounded-lg">
                          <Car className="h-5 w-5 text-primary mr-2" />
                          <div>
                            <div className="font-medium">BMW M340i</div>
                            <div className="text-sm text-muted-foreground">2022 • Electric</div>
                          </div>
                        </div>
                        <div className="flex items-center p-3 border rounded-lg border-dashed">
                          <Button variant="ghost" size="sm" className="w-full">
                            + Add another vehicle
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label>Additional Information (Optional)</Label>
                      <textarea
                        className="mt-2 w-full h-24 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Describe your situation or add any details that might help the service provider..."
                      ></textarea>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full rounded-xl gap-2"
                      onClick={handleRequestAssistance}
                    >
                      <AlertTriangle className="h-5 w-5" />
                      Request Emergency Assistance
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                        <Truck className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">Help is on the way!</h3>
                      <p className="text-muted-foreground">
                        Your {assistanceType === "towing" ? "towing" : 
                               assistanceType === "jump-start" ? "battery jump-start" : 
                               assistanceType === "tire" ? "flat tire service" : 
                               assistanceType === "fuel" ? "fuel delivery" : 
                               "vehicle lockout"} request has been confirmed.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                          <span className="text-sm">Estimated arrival time</span>
                        </div>
                        <span className="font-medium">{eta}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                    <div className="border rounded-xl p-4">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <img 
                            src="https://randomuser.me/api/portraits/men/42.jpg"
                            alt="Service provider"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">Robert Williams</div>
                          <div className="text-sm text-muted-foreground">Premium Towing Services</div>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-4 h-4 text-yellow-400"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground ml-2">4.9 (120 reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <Button className="w-full gap-2">
                          <PhoneCall className="h-4 w-4" />
                          Call Provider
                        </Button>
                        <Button variant="outline" className="w-full gap-2">
                          Cancel Request
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right column - Map and info */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[300px] bg-gray-200 relative">
                  {/* Map image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+22c55e(-73.935242,40.730610)/-73.935242,40.730610,13,0/600x300?access_token=pk.eyJ1IjoibG92YWJsZS1haS1kZXYiLCJhIjoiY2xxaWo3bnJrMHFvajJrcWVpdGZudm42dyJ9.CjsqQA_Cet6KpgzAmqQb-Q')" }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Emergency Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Emergency Services</div>
                      <div className="text-sm text-muted-foreground">911</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">GreenRoad Support</div>
                      <div className="text-sm text-muted-foreground">1-800-555-1234</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Car className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Tesla Roadside Assistance</div>
                      <div className="text-sm text-muted-foreground">1-877-798-3752</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RoadsideAssistance;
