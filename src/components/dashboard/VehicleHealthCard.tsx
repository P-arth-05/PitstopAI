
import { ArrowUp, Battery, Thermometer, Gauge } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface VehicleHealthCardProps {
  status: "good" | "warning" | "danger";
  score: number;
  battery: number;
  temperature: number;
  oilLife: number;
}

const VehicleHealthCard = ({ 
  status, 
  score, 
  battery, 
  temperature, 
  oilLife 
}: VehicleHealthCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-green-500";
      case "warning":
        return "text-amber-500";
      case "danger":
        return "text-red-500";
      default:
        return "text-muted-foreground";
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case "good":
        return "Good";
      case "warning":
        return "Needs Attention";
      case "danger":
        return "Critical";
      default:
        return "Unknown";
    }
  };

  return (
    <Card className="overflow-hidden hover-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Vehicle Health</CardTitle>
          <span className={`text-sm font-medium ${getStatusColor(status)}`}>
            {getStatusText(status)}
          </span>
        </div>
        <CardDescription>Real-time vehicle diagnostics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2 mt-2 mb-6">
          <div className="text-4xl font-bold">{score}</div>
          <div className="text-sm text-green-500 flex items-center pb-1">
            <ArrowUp className="h-3 w-3 mr-1" />
            2%
          </div>
          <div className="text-sm text-muted-foreground pb-1">from last week</div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Battery className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Battery</span>
              </div>
              <span className="text-sm font-medium">{battery}%</span>
            </div>
            <Progress value={battery} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Engine Temperature</span>
              </div>
              <span className="text-sm font-medium">{temperature}°C</span>
            </div>
            <Progress value={(temperature / 120) * 100} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Oil Life</span>
              </div>
              <span className="text-sm font-medium">{oilLife}%</span>
            </div>
            <Progress value={oilLife} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleHealthCard;
