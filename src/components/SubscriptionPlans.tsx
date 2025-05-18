
import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SubscriptionPlans = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: "Free",
      price: annual ? "₹0" : "₹0",
      description: "Basic vehicle monitoring with limited features",
      features: [
        "Basic diagnostics scans",
        "Emergency roadside calling",
        "Community forum access",
      ],
      cta: "Start Free",
      popular: false,
      color: "bg-card",
    },
    {
      name: "Pro",
      price: annual ? "₹1,499" : "₹149",
      period: annual ? "/year" : "/month",
      description: "Full diagnostics and priority assistance",
      features: [
        "Everything in Free plan",
        "Unlimited diagnostics scans",
        "Priority roadside assistance",
        "Smart maintenance alerts",
        "Service history tracking",
      ],
      cta: "Go Pro",
      popular: true,
      color: "bg-primary",
    },
    {
      name: "Premium",
      price: annual ? "₹4,999" : "₹499",
      period: annual ? "/year" : "/month",
      description: "Enhanced coverage with premium benefits",
      features: [
        "Everything in Pro plan",
        "AI-powered repair estimates",
        "Vehicle value tracking",
        "Concierge service booking",
        "Family plan (up to 3 vehicles)",
        "24/7 dedicated support",
      ],
      cta: "Go Premium",
      popular: false,
      color: "bg-card",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-green-50">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-10 md:mb-16 animate-in animate-fade-in" style={{ "--index": 1 } as React.CSSProperties}>
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get the perfect vehicle care package to meet your needs.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-muted rounded-full p-1 inline-flex">
              <button
                onClick={() => setAnnual(true)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  annual ? "bg-white shadow-sm text-foreground" : "text-muted-foreground"
                }`}
              >
                Annual
                <span className="ml-1 text-xs text-primary font-bold">(Save 20%)</span>
              </button>
              <button
                onClick={() => setAnnual(false)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  !annual ? "bg-white shadow-sm text-foreground" : "text-muted-foreground"
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`${
                plan.popular
                  ? "relative ring-2 ring-primary rounded-2xl shadow-xl"
                  : "border rounded-2xl shadow-lg"
              } ${plan.color} flex flex-col overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className={`p-6 flex-grow ${plan.popular ? "text-primary-foreground" : ""}`}>
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-primary-foreground" : ""}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-sm opacity-80">{plan.period}</span>}
                </div>
                <p className={`mb-6 text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check 
                        className={`h-5 w-5 shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} 
                      />
                      <span className={`text-sm ${plan.popular ? "text-primary-foreground" : ""}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0">
                <Link to="/register">
                  <Button 
                    className="w-full justify-center"
                    variant={plan.popular ? "secondary" : "default"}
                  >
                    {plan.cta}
                    {plan.popular && <Zap className="ml-2 h-4 w-4" />}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
