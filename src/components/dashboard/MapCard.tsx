
import { useState } from "react";
import { MapPin, Navigation, Compass, PhoneCall } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MapCard = () => {
  const [isAssistanceRequested, setIsAssistanceRequested] = useState(false);
  
  return (
    <Card className="overflow-hidden hover-card">
      <CardHeader className="pb-2">
        <CardTitle>Nearby Assistance</CardTitle>
        <CardDescription>Locate help in your area</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-[300px] bg-gray-200 overflow-hidden">
          {/* Static map image instead of interactive map */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="h-8 w-8 bg-primary/50 rounded-full absolute top-0 left-0 animate-ping" />
            </div>
          </div>
          
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            {isAssistanceRequested ? (
              <div className="text-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-green-500 rounded-full relative">
                      <span className="absolute inset-0 h-3 w-3 bg-green-500 rounded-full animate-ping"></span>
                    </div>
                    <span className="font-medium">Assistance on the way</span>
                  </div>
                  <span className="text-sm">ETA: 12 min</span>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 gap-2 bg-white/20 hover:bg-white/30 text-white border-white/20">
                    <PhoneCall className="h-4 w-4" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 gap-2 bg-white/20 hover:bg-white/30 text-white border-white/20">
                    <Navigation className="h-4 w-4" />
                    Track
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 gap-2 bg-white/20 hover:bg-white/30 text-white border-white/20">
                    <Compass className="h-4 w-4" />
                    Directions
                  </Button>
                </div>
              </div>
            ) : (
              <Button 
                className="w-full gap-2" 
                onClick={() => setIsAssistanceRequested(true)}
              >
                <MapPin className="h-4 w-4" />
                Request Assistance
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapCard;
