
import { AlertTriangle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SOSButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleSOSPress = () => {
    if (!isPressed) {
      setIsPressed(true);
      setIsConfirming(true);
      
      setTimeout(() => {
        if (isConfirming) {
          setIsConfirming(false);
          setIsPressed(false);
        }
      }, 3000);
    } else if (isConfirming) {
      // Confirm SOS
      setIsConfirming(false);
      toast.success("Emergency services notified. Help is on the way.", {
        description: "Your location has been shared with emergency services.",
        duration: 5000,
      });
      
      // Reset after some time
      setTimeout(() => {
        setIsPressed(false);
      }, 5000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        className={`sos-button ${isPressed ? 'scale-110 bg-red-700' : ''} ${isConfirming ? 'animate-pulse' : ''}`}
        onClick={handleSOSPress}
        aria-label="Emergency SOS"
      >
        <AlertTriangle className="h-6 w-6" />
      </button>
      
      {isConfirming && (
        <div className="absolute -top-16 right-0 glass-card p-2 rounded-lg text-sm text-center min-w-[120px] animate-fade-in">
          Press again to confirm
        </div>
      )}
    </div>
  );
};

export default SOSButton;
