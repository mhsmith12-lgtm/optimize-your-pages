import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dorothy M.",
      quote: "This workshop saved me from making a $3,000 mistake! Michael explained everything so clearly.",
      rating: 5,
    },
    {
      name: "Robert K.",
      quote: "I was completely lost with Medicare until I attended this workshop. Now I feel confident about my choice.",
      rating: 5,
    },
    {
      name: "Susan L.",
      quote: "No pressure, just helpful information. I finally understand what Medicare covers and what it doesn't.",
      rating: 5,
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
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
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
          <p className="text-blue-100 text-sm">
            ⭐⭐⭐⭐⭐ Trusted by 1,000+ people who've attended this workshop
          </p>
        </div>
      </div>
    </section>
  );
};