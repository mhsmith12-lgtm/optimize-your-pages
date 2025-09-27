import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dorothy M.",
      quote: "This webinar saved me from making a $3,000 mistake! Michael explained everything so clearly.",
      rating: 5,
      image: "/placeholder-testimonial-1.jpg" // Replace with actual image
    },
    {
      name: "Robert K.",
      quote: "I was completely lost with Medicare until I attended this webinar. Now I feel confident about my choice.",
      rating: 5,
      image: "/placeholder-testimonial-2.jpg" // Replace with actual image
    },
    {
      name: "Susan L.",
      quote: "No pressure, just helpful information. I finally understand what Medicare covers and what it doesn't.",
      rating: 5,
      image: "/placeholder-testimonial-3.jpg" // Replace with actual image
    },
  ];

  return (
    <section className="py-16 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Clients Are Saying...
        </h2>
        <p className="text-center text-blue-100 mb-12 text-lg">
          Real feedback from people who attended this workshop
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-white/90 mb-4 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-blue-200 font-medium text-sm">- {testimonial.name}</cite>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-blue-100 text-sm mb-6">
            ⭐⭐⭐⭐⭐ Trusted by 1,000+ people who've attended this webinar
          </p>
          <Button 
            variant="cta" 
            size="lg"
          >
            Save My Seat - It's FREE
          </Button>
        </div>
      </div>
    </section>
  );
};