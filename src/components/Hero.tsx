
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/8cfea802-b9ec-4e32-a247-3bca23118d56.png" 
          alt="Man fixing car engine at night" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>
      
      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                AI-Powered <span className="text-primary">Vehicle Care</span> & Roadside Assistance
              </h1>
              <p className="text-lg text-gray-200 md:text-xl max-w-md">
                Prevent breakdowns before they happen with our predictive maintenance and get instant help when you need it.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="rounded-xl h-12 px-8 font-medium w-full sm:w-auto">
                  Get Instant Help <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg" className="rounded-xl h-12 px-8 font-medium bg-white/10 text-white hover:bg-white/20 border-white/20 w-full sm:w-auto">
                  Check Vehicle Health
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white/30 bg-white/10 overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i * 15}.jpg`} 
                      alt="User avatar" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>Trusted by <span className="font-medium text-white">10,000+</span> drivers</div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="glass-card p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">
              <div className="text-white text-lg font-medium mb-4">Emergency Assistance</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18.37 2.63 14 7l-1.37-1.37a1 1 0 0 0-1.41 0l-8.01 8.01a1 1 0 0 0 0 1.41l1.37 1.37a1 1 0 0 0 1.41 0L14 8.42a1 1 0 0 0 0-1.41L12.63 5.6 17 1.23a.48.48 0 0 1 .76.11l.7 1.81c.19.5.18 1.05-.04 1.53L17 8l1.03 1.03 4.29-4.29a1 1 0 0 0 0-1.41l-2.53-2.53a1 1 0 0 0-1.41 0Z"/><path d="M5 15 2 22l7-3"/><path d="M18 15v6h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1Z"/></svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Smart Diagnostics</div>
                    <div className="text-gray-300 text-sm">Real-time issue detection</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Tire Service</div>
                    <div className="text-gray-300 text-sm">48 providers nearby</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 16V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v9"/><path d="M4 16h16"/><path d="M7 16v3h10v-3"/><path d="M9 8h1"/><path d="M14 8h1"/><path d="M9 12h1"/><path d="M14 12h1"/></svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Battery Jump</div>
                    <div className="text-gray-300 text-sm">Available 24/7</div>
                  </div>
                </div>
                <div className="pt-2">
                  <Link to="/register">
                    <Button className="w-full rounded-xl">Request Help Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
