
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      color: "hsl(var(--primary))",
      transition: { 
        duration: 0.2, 
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <div className="w-full flex justify-center pt-4 px-4 fixed top-0 z-40">
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`
          w-full max-w-6xl rounded-full transition-all duration-300 
          ${isScrolled 
            ? 'bg-white/70 shadow-lg backdrop-blur-md py-2' 
            : 'bg-white/50 backdrop-blur-sm py-3'
          }
        `}
      >
        <div className="container-tight flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link to="/" className="flex items-center gap-2">
                <div className="h-10 w-10">
                  <img 
                    src="/lovable-uploads/54e37fc4-0fac-4c53-88aa-e324fed121b8.png" 
                    alt="Pitstop AI Logo" 
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-display text-xl font-semibold">Pitstop AI</span>
              </Link>
            </motion.div>
            
            <div className="hidden md:flex items-center gap-6">
              {['Home', 'Features', 'Pricing', 'About'].map((item) => (
                <motion.div 
                  key={item} 
                  whileHover="hover"
                  variants={linkVariants}
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm font-medium transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link to="/login">
                <Button variant="outline" className="rounded-full">Login</Button>
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 400 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/register">
                <Button className="rounded-full">Sign Up</Button>
              </Link>
            </motion.div>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="rounded-full"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 z-50 py-6 px-6 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-gray-100"
          >
            <div className="flex flex-col space-y-4">
              {['Home', 'Features', 'Pricing', 'About'].map((item) => (
                <motion.div 
                  key={item}
                  whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-sm font-medium transition-colors" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <hr className="border-border/50" />
              <div className="flex items-center gap-4 pt-2">
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full rounded-full" onClick={() => setIsMenuOpen(false)}>Login</Button>
                </Link>
                <Link to="/register" className="w-full">
                  <Button className="w-full rounded-full" onClick={() => setIsMenuOpen(false)}>Sign Up</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
