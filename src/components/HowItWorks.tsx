
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Your Vehicle",
      description: "Link your vehicle through our OBD device or smartphone app for real-time monitoring and diagnostics.",
      image: "/lovable-uploads/c0784281-fc93-4836-83d7-25d36c900b45.png",
      features: [
        "Quick and easy setup",
        "Works with all vehicle models after 2010",
        "24/7 monitoring and support"
      ]
    },
    {
      number: "02",
      title: "Receive AI Predictions",
      description: "Our AI analyzes your vehicle's data to predict potential issues before they cause breakdowns.",
      image: "/lovable-uploads/118ea4c7-8e6a-4034-85f4-bd9ae4131984.png",
      features: [
        "Quick and easy setup",
        "Works with all vehicle models after 2010",
        "24/7 monitoring and support"
      ]
    },
    {
      number: "03",
      title: "Get Instant Support",
      description: "If you experience a breakdown, request assistance with one tap and track help in real-time.",
      image: "/lovable-uploads/c3e962b7-a434-4094-b985-8889fadca8ae.png",
      features: [
        "Quick and easy setup",
        "Works with all vehicle models after 2010",
        "24/7 monitoring and support"
      ]
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-green-50">
      <div className="container-tight">
        <div className="text-center mb-12 animate-in animate-fade-in" style={{ "--index": 1 } as React.CSSProperties}>
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform makes vehicle maintenance and roadside assistance simpler and more reliable through cutting-edge technology.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-primary/20 -translate-x-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-16 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className={`w-full md:w-5/12 order-2 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className={`space-y-4 ${index % 2 !== 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                      
                      <ul className={`space-y-2 py-2 ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                        {step.features.map((feature, i) => (
                          <li key={i} className={`flex items-center gap-2 text-sm ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                            {index % 2 !== 0 && <span className="md:order-2">{feature}</span>}
                            <Check className={`h-4 w-4 text-primary flex-shrink-0 ${index % 2 !== 0 ? 'md:order-1' : ''}`} />
                            {index % 2 === 0 && <span>{feature}</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className={`w-full md:w-7/12 order-1 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full aspect-[16/9] object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
