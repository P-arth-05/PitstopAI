
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally would handle authentication here
    toast.success("Login successful");
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/" className="flex items-center justify-center gap-2 mb-8">
            <div className="rounded-full bg-primary/10 p-1">
              <div className="rounded-full bg-primary h-8 w-8 flex items-center justify-center text-primary-foreground font-bold">
                GR
              </div>
            </div>
            <span className="font-display text-xl font-semibold">GreenRoad</span>
          </Link>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Sign in to your account to access your dashboard
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-2 relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="name@example.com"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-primary hover:text-primary/90"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="mt-2 relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="remember-me"
                checked={rememberMe}
                onCheckedChange={(checked) => 
                  setRememberMe(checked as boolean)
                }
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-muted-foreground"
              >
                Remember me
              </label>
            </div>

            <div>
              <Button type="submit" className="w-full rounded-xl gap-2">
                Sign in <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-primary hover:text-primary/90"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558234494-81d274cfaa55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        <div className="h-full w-full backdrop-brightness-75 p-8 flex flex-col justify-end">
          <div className="glass-card p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
            <p className="text-white text-xl font-medium mb-2">
              "GreenRoad has saved me multiple times during emergency breakdowns. Their AI predictions even helped prevent a major engine failure."
            </p>
            <div className="flex items-center mt-4">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Testimonial avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-3">
                <p className="text-white font-medium">Michael Johnson</p>
                <p className="text-gray-300 text-sm">Tesla Model 3 Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
