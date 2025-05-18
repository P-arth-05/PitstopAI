
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100 to-green-50 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 -z-10"></div>
      
      <div className="container-tight">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden animate-in animate-scale-in">
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold mb-4">Ready to experience smarter vehicle care?</h2>
                <p className="text-muted-foreground">
                  Join thousands of drivers who trust GreenRoad for predictive maintenance and roadside assistance. Get started for free.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="rounded-xl h-12 px-8 font-medium">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="lg" className="rounded-xl h-12 px-8 font-medium">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
