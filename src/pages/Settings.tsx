
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Check, PlusCircle, User, Bell, Globe, Shield, LockKeyhole } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const handleSaveProfile = () => {
    toast.success("Profile updated successfully");
  };
  
  const handleSaveNotifications = () => {
    toast.success("Notification preferences updated");
  };
  
  const handleSaveSecurity = () => {
    toast.success("Security settings updated");
  };
  
  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground mb-8">Manage your account settings and preferences</p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="h-24 w-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg">Michael Johnson</h3>
                    <p className="text-muted-foreground">Premium Member</p>
                  </div>
                  <Button variant="outline" className="mt-4 w-full">
                    Change Photo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-3/4">
            <Tabs defaultValue="profile">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Security</span>
                </TabsTrigger>
                <TabsTrigger value="plans" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>Plans</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input 
                            id="fullName" 
                            defaultValue="Michael Johnson"
                            className="h-10" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="displayName">Display Name</Label>
                          <Input 
                            id="displayName" 
                            defaultValue="Michael" 
                            className="h-10"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            defaultValue="michael.johnson@example.com" 
                            className="h-10"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            defaultValue="+1 (555) 123-4567" 
                            className="h-10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input 
                          id="address" 
                          defaultValue="123 Main Street, Apt 4B" 
                          className="h-10"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input 
                            id="city" 
                            defaultValue="New York" 
                            className="h-10"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input 
                            id="state" 
                            defaultValue="NY" 
                            className="h-10"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input 
                            id="zipCode" 
                            defaultValue="10001" 
                            className="h-10"
                          />
                        </div>
                      </div>
                      
                      <Button onClick={handleSaveProfile}>Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Vehicles</CardTitle>
                      <Button size="sm" className="gap-1 h-8">
                        <PlusCircle className="h-3.5 w-3.5" />
                        Add Vehicle
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          model: "Tesla Model 3",
                          year: "2022",
                          type: "Electric",
                          vin: "5YJ3E1EA8JF000123"
                        },
                        {
                          model: "Toyota RAV4",
                          year: "2021",
                          type: "Hybrid",
                          vin: "JTMW1RFV8MD001234"
                        }
                      ].map((vehicle, index) => (
                        <div key={index} className="flex justify-between items-center p-4 border rounded-xl">
                          <div className="flex gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <Car className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="font-medium">{vehicle.model}</div>
                              <div className="text-sm text-muted-foreground">{vehicle.year} • {vehicle.type}</div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">Email Notifications</h3>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <div className="font-medium">Maintenance Reminders</div>
                            <div className="text-sm text-muted-foreground">Receive notifications about upcoming maintenance</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <div className="font-medium">Vehicle Alerts</div>
                            <div className="text-sm text-muted-foreground">Get notified about critical vehicle issues</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <div className="font-medium">Community Mentions</div>
                            <div className="text-sm text-muted-foreground">Receive notifications when someone mentions you</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <div className="font-medium">Promotional Emails</div>
                            <div className="text-sm text-muted-foreground">Get updates on new features and promotions</div>
                          </div>
                          <Switch />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-medium">Push Notifications</h3>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <div className="font-medium">Maintenance Alerts</div>
                            <div className="text-sm text-muted-foreground">Receive alerts on your mobile device</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <div className="font-medium">Roadside Assistance Updates</div>
                            <div className="text-sm text-muted-foreground">Get real-time updates on assistance requests</div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <div className="font-medium">Community Activity</div>
                            <div className="text-sm text-muted-foreground">Get notified about replies to your posts</div>
                          </div>
                          <Switch />
                        </div>
                      </div>
                      
                      <Button onClick={handleSaveNotifications}>Save Preferences</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Password & Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">Change Password</h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input 
                            id="currentPassword" 
                            type="password" 
                            className="h-10"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input 
                            id="newPassword" 
                            type="password" 
                            className="h-10"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input 
                            id="confirmPassword" 
                            type="password" 
                            className="h-10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-medium">Two-Factor Authentication</h3>
                        
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <div className="font-medium">Enable 2FA</div>
                            <div className="text-sm text-muted-foreground">Secure your account with two-factor authentication</div>
                          </div>
                          <Switch />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-medium">Login Sessions</h3>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-4 border rounded-xl">
                            <div className="flex gap-4">
                              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <LockKeyhole className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="font-medium">Current Session</div>
                                <div className="text-sm text-muted-foreground">MacBook Pro • New York, USA</div>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-green-600 flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-green-600"></div>
                              Active Now
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center p-4 border rounded-xl">
                            <div className="flex gap-4">
                              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                <LockKeyhole className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="font-medium">iPhone 13</div>
                                <div className="text-sm text-muted-foreground">iOS 15 • New York, USA</div>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Logout
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <Button onClick={handleSaveSecurity}>Save Security Settings</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="plans">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Subscription Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-primary/5 border-primary/20 border rounded-xl p-6 relative">
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                          CURRENT PLAN
                        </div>
                        <h3 className="text-xl font-bold">Premium Plan</h3>
                        <div className="flex items-baseline gap-1 mt-2">
                          <span className="text-3xl font-bold">$19.99</span>
                          <span className="text-muted-foreground">/ month</span>
                        </div>
                        <div className="space-y-3 mt-4">
                          <div className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span>Unlimited roadside assistance requests</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span>Priority service (faster response times)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span>Unlimited AI diagnostics</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span>Advanced vehicle health monitoring</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5" />
                            <span>Direct access to certified mechanics</span>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button className="w-full">Manage Subscription</Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border rounded-xl p-6">
                          <h3 className="text-xl font-bold">Basic Plan</h3>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-3xl font-bold">$9.99</span>
                            <span className="text-muted-foreground">/ month</span>
                          </div>
                          <div className="space-y-3 mt-4">
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5" />
                              <span>5 roadside assistance requests / year</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5" />
                              <span>Standard service response times</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5" />
                              <span>10 AI diagnostics / month</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5" />
                              <span>Basic vehicle health monitoring</span>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Button variant="outline" className="w-full">Downgrade</Button>
                          </div>
                        </div>
                        
                        <div className="border rounded-xl p-6">
                          <h3 className="text-xl font-bold">Family Plan</h3>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-3xl font-bold">$29.99</span>
                            <span className="text-muted-foreground">/ month</span>
                          </div>
                          <div className="space-y-3 mt-4">
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5" />
                              <span>Unlimited roadside assistance for all family vehicles</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5" />
                              <span>Priority service (fastest response times)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5" />
                              <span>Unlimited AI diagnostics for up to 5 vehicles</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5" />
                              <span>Premium vehicle health monitoring</span>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Button variant="outline" className="w-full">Upgrade</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
