
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "driver",
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!formData.agreeTerms) {
      toast.error("You must agree to the terms and conditions");
      return;
    }
    // Normally would handle registration here
    toast.success("Registration successful");
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/" className="flex items-center justify-center gap-2 mb-8">
            <div className="rounded-full bg-primary/10 p-1">
              <div className="rounded-full bg-primary h-8 w-8 flex items-center justify-center text-primary-foreground font-bold">
                GR
              </div>
            </div>
            <span className="font-display text-xl font-semibold">GreenRoad</span>
          </Link>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Join thousands of drivers using AI for better vehicle care
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <div className="mt-2 relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="pl-10"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-2 relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="name@example.com"
                  className="pl-10"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <div className="mt-2 relative">
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="+1 (555) 123-4567"
                  className="pl-10"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Account Type</Label>
              <RadioGroup
                defaultValue="driver"
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, accountType: value }))
                }
                className="grid grid-cols-3 gap-4"
              >
                <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:border-primary transition-colors">
                  <RadioGroupItem value="driver" id="driver" />
                  <Label htmlFor="driver" className="cursor-pointer">Driver</Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:border-primary transition-colors">
                  <RadioGroupItem value="mechanic" id="mechanic" />
                  <Label htmlFor="mechanic" className="cursor-pointer">Mechanic</Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:border-primary transition-colors">
                  <RadioGroupItem value="provider" id="provider" />
                  <Label htmlFor="provider" className="cursor-pointer">Provider</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="mt-2 relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="pl-10"
                  value={formData.password}
                  onChange={handleChange}
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

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="mt-2 relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="pl-10"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-start">
              <Checkbox
                id="terms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))
                }
                className="mt-1"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-muted-foreground"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div>
              <Button type="submit" className="w-full rounded-xl gap-2">
                Create Account <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary hover:text-primary/90"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617470122047-55b2710d2e7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        <div className="h-full w-full backdrop-brightness-75 p-8 flex flex-col justify-end">
          <div className="glass-card p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                <div className="text-white font-bold text-lg">4.9</div>
                <div className="flex ml-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-gray-300">|</div>
              <div className="text-white">10,000+ Active Users</div>
            </div>
            <p className="text-white text-xl font-medium">
              Join our community of drivers and mechanics who are transforming vehicle care with AI technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
