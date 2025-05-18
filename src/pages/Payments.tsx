import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  PlusCircle, 
  Settings, 
  Shield, 
  Clock, 
  Download, 
  ChevronRight, 
  FileText, 
  Receipt, 
  CheckCircle,
  Car
} from "lucide-react";

const Payments = () => {
  const [activeTab, setActiveTab] = useState("payments");

  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Payments & Insurance</h1>
        <p className="text-muted-foreground mb-8">Manage your payment methods and insurance claims</p>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="payments" className="flex gap-2">
              <CreditCard className="h-4 w-4" />
              Payments
            </TabsTrigger>
            <TabsTrigger value="insurance" className="flex gap-2">
              <Shield className="h-4 w-4" />
              Insurance
            </TabsTrigger>
            <TabsTrigger value="history" className="flex gap-2">
              <Clock className="h-4 w-4" />
              History
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="payments" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Payment Methods</CardTitle>
                      <Button size="sm" className="gap-1 h-8">
                        <PlusCircle className="h-3.5 w-3.5" />
                        Add Method
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          type: "visa",
                          last4: "4242",
                          expiry: "05/25",
                          isDefault: true
                        },
                        {
                          type: "mastercard",
                          last4: "8752",
                          expiry: "12/24",
                          isDefault: false
                        }
                      ].map((card, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-xl">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-white font-bold">
                              {card.type === "visa" ? "VISA" : "MC"}
                            </div>
                            <div>
                              <div className="font-medium">•••• •••• •••• {card.last4}</div>
                              <div className="text-sm text-muted-foreground">Expires {card.expiry}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {card.isDefault && (
                              <div className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                                Default
                              </div>
                            )}
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <div className="mt-2">
                        <Button variant="outline" className="flex items-center justify-center gap-2 p-4 border border-dashed rounded-xl w-full">
                          <PlusCircle className="h-4 w-4" />
                          Add New Payment Method
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader className="pb-2">
                    <CardTitle>Upcoming Payments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Premium Subscription",
                          amount: 19.99,
                          date: "Jun 15, 2023",
                          status: "upcoming"
                        },
                        {
                          name: "Roadside Assistance Plan",
                          amount: 8.99,
                          date: "Jul 01, 2023",
                          status: "upcoming"
                        }
                      ].map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-xl">
                          <div>
                            <div className="font-medium">{payment.name}</div>
                            <div className="text-sm text-muted-foreground">Due on {payment.date}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">${payment.amount.toFixed(2)}</div>
                            <div className="text-xs text-blue-600 font-medium">
                              Automatic payment scheduled
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Billing Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Current Plan</span>
                        <span className="font-medium">Premium</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Billing Cycle</span>
                        <span className="font-medium">Monthly</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Next Billing Date</span>
                        <span className="font-medium">Jun 15, 2023</span>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center font-bold">
                          <span>Total Due</span>
                          <span>$19.99</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-2">
                      <Button variant="outline" className="w-full gap-2">
                        <FileText className="h-4 w-4" />
                        View Billing Details
                      </Button>
                      <Button variant="outline" className="w-full gap-2">
                        <Download className="h-4 w-4" />
                        Download Invoices
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-10 w-10" />
                      <div>
                        <h3 className="text-lg font-bold">Premium Protection</h3>
                        <p className="text-primary-foreground/80">You're fully covered!</p>
                      </div>
                    </div>
                    <p className="mb-4">
                      Your Premium plan includes unlimited roadside assistance, priority service, and AI diagnostics.
                    </p>
                    <Button variant="secondary" className="w-full">Manage Plan</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="insurance" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Insurance Claims</CardTitle>
                      <Button size="sm" className="gap-1 h-8">
                        <PlusCircle className="h-3.5 w-3.5" />
                        New Claim
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          id: "CLM-1234",
                          date: "May 10, 2023",
                          type: "Accident Repair",
                          amount: 1250.00,
                          status: "approved"
                        },
                        {
                          id: "CLM-9876",
                          date: "Apr 22, 2023",
                          type: "Windshield Replacement",
                          amount: 450.00,
                          status: "processing"
                        },
                        {
                          id: "CLM-5432",
                          date: "Mar 15, 2023",
                          type: "Battery Replacement",
                          amount: 750.00,
                          status: "paid"
                        }
                      ].map((claim, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-xl hover:bg-muted/30 transition-colors cursor-pointer">
                          <div className="flex gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <FileText className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="font-medium">{claim.type} <span className="text-sm text-muted-foreground">#{claim.id}</span></div>
                              <div className="text-sm text-muted-foreground">Submitted on {claim.date}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">${claim.amount.toFixed(2)}</div>
                            <div className={`text-xs font-medium rounded-full px-2 py-0.5 inline-block
                              ${claim.status === 'approved' ? 'bg-green-100 text-green-700' : 
                                claim.status === 'processing' ? 'bg-blue-100 text-blue-700' : 
                                'bg-gray-100 text-gray-700'}`}
                            >
                              {claim.status === 'approved' ? 'Approved' : 
                               claim.status === 'processing' ? 'Processing' : 'Paid'}
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View All Claims
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader className="pb-2">
                    <CardTitle>Submit New Claim</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Quick submission process for roadside assistance, repairs, and part replacements covered by your policy.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="border rounded-xl p-4 text-center hover:border-primary cursor-pointer transition-colors">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18.37 2.63 14 7l-1.37-1.37a1 1 0 0 0-1.41 0l-8.01 8.01a1 1 0 0 0 0 1.41l1.37 1.37a1 1 0 0 0 1.41 0L14 8.42a1 1 0 0 0 0-1.41L12.63 5.6 17 1.23a.48.48 0 0 1 .76.11l.7 1.81c.19.5.18 1.05-.04 1.53L17 8l1.03 1.03 4.29-4.29a1 1 0 0 0 0-1.41l-2.53-2.53a1 1 0 0 0-1.41 0Z"/><path d="M5 15 2 22l7-3"/><path d="M18 15v6h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1Z"/></svg>
                          </div>
                          <div className="font-medium">Roadside Assistance</div>
                          <div className="text-xs text-muted-foreground mt-1">Towing, battery, tires</div>
                        </div>
                        
                        <div className="border rounded-xl p-4 text-center hover:border-primary cursor-pointer transition-colors">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                            <Car className="h-6 w-6" />
                          </div>
                          <div className="font-medium">Accident Repair</div>
                          <div className="text-xs text-muted-foreground mt-1">Collision & damage</div>
                        </div>
                        
                        <div className="border rounded-xl p-4 text-center hover:border-primary cursor-pointer transition-colors">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                            <Settings className="h-6 w-6" />
                          </div>
                          <div className="font-medium">Part Replacement</div>
                          <div className="text-xs text-muted-foreground mt-1">Components & parts</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Insurance Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Provider</span>
                        <span className="font-medium">GreenRoad Protect</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Policy Number</span>
                        <span className="font-medium">POL-12345678</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Coverage Type</span>
                        <span className="font-medium">Comprehensive</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Policy Start</span>
                        <span className="font-medium">Jan 01, 2023</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Policy End</span>
                        <span className="font-medium">Dec 31, 2023</span>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center font-bold">
                          <span>Status</span>
                          <span className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button variant="outline" className="w-full">
                        View Policy Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Covered Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Roadside Assistance (Unlimited)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Towing Service (Up to 100 miles)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Battery Jump Start</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Flat Tire Service</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Lockout Assistance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Fuel Delivery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Major Component Coverage</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Payment & Claim History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "TRX-7890",
                      date: "May 15, 2023",
                      description: "Premium Subscription",
                      amount: 19.99,
                      type: "payment"
                    },
                    {
                      id: "CLM-1234",
                      date: "May 10, 2023",
                      description: "Accident Repair Claim",
                      amount: 1250.00,
                      type: "claim"
                    },
                    {
                      id: "TRX-6543",
                      date: "Apr 15, 2023",
                      description: "Premium Subscription",
                      amount: 19.99,
                      type: "payment"
                    },
                    {
                      id: "CLM-9876",
                      date: "Apr 22, 2023",
                      description: "Windshield Replacement Claim",
                      amount: 450.00,
                      type: "claim"
                    },
                    {
                      id: "TRX-5432",
                      date: "Mar 15, 2023",
                      description: "Premium Subscription",
                      amount: 19.99,
                      type: "payment"
                    },
                    {
                      id: "CLM-5432",
                      date: "Mar 15, 2023",
                      description: "Battery Replacement Claim",
                      amount: 750.00,
                      type: "claim"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-xl hover:bg-muted/30 transition-colors cursor-pointer">
                      <div className="flex gap-4">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center
                          ${item.type === 'payment' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}
                        >
                          {item.type === 'payment' ? <CreditCard className="h-5 w-5" /> : <Receipt className="h-5 w-5" />}
                        </div>
                        <div>
                          <div className="font-medium">{item.description}</div>
                          <div className="text-sm text-muted-foreground">{item.date} • #{item.id}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">
                          {item.type === 'payment' ? '-' : '+'} ${item.amount.toFixed(2)}
                        </div>
                        <div className="text-xs font-medium text-muted-foreground">
                          {item.type === 'payment' ? 'Payment Completed' : 'Claim Processed'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                  <Button variant="outline" size="sm">Previous</Button>
                  <div className="text-sm text-muted-foreground">Page 1 of 3</div>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Payments;
