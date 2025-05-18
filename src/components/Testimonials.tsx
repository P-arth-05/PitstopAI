
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "GreenRoad's predictive maintenance saved me from a breakdown during a critical business trip. The app alerted me about a battery issue days before it would have failed.",
      author: "Sarah Johnson",
      position: "Business Owner",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      quote: "When my car broke down on a remote highway, the instant roadside assistance feature was a lifesaver. I could track the tow truck in real-time and felt safe the entire time.",
      author: "Michael Chen",
      position: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "I used the AI diagnostics to identify a strange noise in my engine. Uploaded a quick video and got an accurate assessment within minutes. Saved me an unnecessary trip to the mechanic!",
      author: "Emily Rodriguez",
      position: "Teacher",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-tight">
        <div className="text-center mb-16 animate-in animate-fade-in" style={{ "--index": 1 } as React.CSSProperties}>
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thousands of drivers rely on GreenRoad to keep their vehicles running smoothly and for peace of mind on the road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 hover-card animate-in animate-fade-in"
              style={{ "--index": index + 2 } as React.CSSProperties}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <blockquote className="mb-6 text-muted-foreground italic">"{testimonial.quote}"</blockquote>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
