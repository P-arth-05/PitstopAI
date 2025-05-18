
import { 
  AlertTriangle, 
  MapPin, 
  Camera, 
  BrainCircuit, 
  Car, 
  Clock, 
  Users, 
  Wrench 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      title: "Predictive Maintenance Alerts",
      description: "AI-driven insights analyze your vehicle data to detect and prevent potential failures before they happen."
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Instant Roadside Assistance",
      description: "GPS-based support connects you with the nearest service providers for quick help during breakdowns."
    },
    {
      icon: <Camera className="h-6 w-6 text-primary" />,
      title: "AI Diagnostics & Community Support",
      description: "Upload images/videos for quick issue detection by our AI and get advice from expert mechanics."
    },
    {
      icon: <Car className="h-6 w-6 text-primary" />,
      title: "Vehicle Health Monitoring",
      description: "Real-time stats on engine status, battery level, tire pressure, and other critical components."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: "Emergency SOS",
      description: "One-tap emergency assistance with automatic location sharing for critical situations."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Scheduled Maintenance",
      description: "Smart scheduling for regular vehicle maintenance based on your driving patterns and vehicle needs."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Expert Community",
      description: "Connect with certified mechanics and other vehicle owners to share experiences and solutions."
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary" />,
      title: "DIY Repair Guides",
      description: "Step-by-step guides for common issues you can fix yourself, with detailed instructions and videos."
    },
  ];

  return (
    <section className="section bg-white" id="features">
      <div className="container-tight">
        <div className="text-center mb-16 animate-in animate-fade-in" style={{ "--index": 1 } as React.CSSProperties}>
          <h2 className="text-3xl font-bold mb-4">Cutting-Edge Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines AI technology with expert human support to keep your vehicle running smoothly and provide immediate assistance when needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover-card animate-in animate-fade-in" 
              style={{ "--index": index + 2 } as React.CSSProperties}
            >
              <div className="rounded-full bg-primary/10 h-12 w-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
