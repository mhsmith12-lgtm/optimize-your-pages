import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
export const TestimonialsSection = () => {
  const testimonials = [{
    name: "Dorothy M.",
    quote: "After my husband passed, I was suddenly making all the decisions on my own. Medicare was the last thing I wanted to deal with, and I was so scared I'd get locked into the wrong plan and have to live with it. Michael never once made me feel rushed or pressured. He patiently explained my choices and even checked in after to make sure I was comfortable. I felt like I had someone on my side instead of a salesperson. That trust meant everything to me.",
    rating: 5,
    image: "/placeholder-testimonial-1.jpg" // Replace with actual image
  }, {
    name: "Robert K.",
    quote: "I retired at 63 and was on COBRA. When I hit 65, I assumed I could just keep it until it ran out. Michael explained how that mistake could have cost me a lifetime penalty. He walked me through exactly when and how to transition from COBRA to Medicare without losing coverage for even a day. I dodged a huge financial bullet thanks to his guidance.",
    rating: 5,
    image: "/placeholder-testimonial-2.jpg" // Replace with actual image
  }, {
    name: "Susan L.",
    quote: "I'm a researcher by nature, so when I turned 65, I thought I'd be fine if I just read enough. I had piles of Medicare brochures, government websites bookmarked, and still felt like I was drowning in acronyms and fine print. Michael broke it all down in plain English. Within 20 minutes, I finally understood the two Medicare paths and which one actually fit my health needs and budget. He didn't push me—he gave me clarity. Now I feel confident in my choice, and I actually sleep at night knowing I didn't make a costly mistake.",
    rating: 5,
    image: "/placeholder-testimonial-3.jpg" // Replace with actual image
  }];
  return <section className="py-16 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Our Clients Are Saying...
        </h2>
        <p className="text-center mb-12 text-lg text-white">
          Real feedback from people who attended this workshop
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                <blockquote className="text-white/90 mb-4 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-blue-200 font-medium text-sm">- {testimonial.name}</cite>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-blue-100 text-sm mb-6">
            ⭐⭐⭐⭐⭐ Trusted by 1,000+ people who've attended this webinar
          </p>
          <Button variant="cta" size="lg">Save My Spot - It's FREE</Button>
        </div>
      </div>
    </section>;
};