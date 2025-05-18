import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t">
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10">
                <img 
                  src="/lovable-uploads/54e37fc4-0fac-4c53-88aa-e324fed121b8.png" 
                  alt="Pitstop AI Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-display text-xl font-semibold">Pitstop AI</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI-powered roadside assistance and predictive vehicle maintenance platform. 
              Prevent breakdowns before they happen and get instant help when you need it.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/roadmap" className="text-muted-foreground hover:text-primary transition-colors">Roadmap</Link></li>
              <li><Link to="/changelog" className="text-muted-foreground hover:text-primary transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="/guides" className="text-muted-foreground hover:text-primary transition-colors">Guides</Link></li>
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/legal" className="text-muted-foreground hover:text-primary transition-colors">Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Pitstop AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
