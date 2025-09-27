import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SimpleRegistrationForm } from "@/components/SimpleRegistrationForm";
import { StickyCtaButton } from "@/components/StickyCtaButton";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Clock, Users, CheckCircle, FileText, MessageCircle, Video, Gift, ArrowDown, Shield, Star, AlertTriangle, Check } from "lucide-react";
import brokerHeadshot from "@/assets/broker-headshot.jpg";
const Index = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen bg-background">
      <StickyCtaButton onClick={scrollToForm} />
      <MobileStickyBar onClick={scrollToForm} />
      
      {/* Hero Section */}
      <header className="bg-gradient-hero text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <p className="text-blue-100 text-sm font-medium mb-2">Presented by Guardian Health & Wealth</p>
              <div className="flex items-center justify-center gap-2 text-blue-200 text-sm">
                <Shield className="w-4 h-4" />
                <span>Expert-led • No sales pitch • 100% educational</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              MEDICARE BREAKDOWN:
              <span className="block text-3xl md:text-5xl font-normal mt-2">Medicare Made Simple</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              What Most People Get Wrong About Medicare — 
              <strong className="text-white"> and How to Avoid Their Mistakes</strong>
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <h2 className="text-lg font-semibold mb-4 text-[#fafefa]">Medicare Doesn't Have<br />To Be Confusing</h2>
              <p className="mb-4 text-white">Finally feel confident about your Medicare choices — without the overwhelm, jargon, or sales pressure.</p>
              <Button onClick={scrollToForm} variant="cta" size="xl" className="w-full md:w-auto">
                Save My Seat - It's FREE
                <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
              </Button>
            </div>

            {/* Session Selection */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-lg p-4 md:p-6 mb-6 mx-4 md:mx-auto max-w-4xl">
              <h3 className="text-lg md:text-xl font-bold text-center mb-4 md:mb-6 text-white px-2">
                CHOOSE A SESSION <span className="text-cta">THAT WORKS FOR YOU</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-3 md:gap-4 bg-white/10 rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cta rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white font-semibold text-xs md:text-sm">
                      {`{{custom_value.session_1_day}}`},
                    </div>
                    <div className="text-white text-xs md:text-sm">
                      {`{{custom_value.session_1_date}}`}, at {`{{custom_value.session_1_time}}`}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 bg-white/10 rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cta rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white font-semibold text-xs md:text-sm">
                      {`{{custom_value.session_2_day}}`},
                    </div>
                    <div className="text-white text-sm">
                      {`{{custom_value.session_2_date}}`}, at {`{{custom_value.session_2_time}}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto text-sm">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                <span>Spots are limited
              </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Video className="w-4 h-4" />
                <span>Join from home</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick FAQ Above Form */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-card">
              <strong>Q: Is this a sales pitch?</strong>
              <p className="text-muted-foreground mt-1">A: Nope. 100% educational. No strings attached.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-card">
              <strong>Q: What happens after I register?</strong>
              <p className="text-muted-foreground mt-1">A: You'll get an email confirmation with the workshop link + reminders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reserve Your Spot Today</h2>
            <p className="text-lg text-muted-foreground mb-2">
              Totally free. No hidden agenda. Just the clarity you need.
            </p>
            <div className="flex items-center justify-center gap-2 text-warning text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              <span>Spots are limited!</span>
            </div>
          </div>
          
          <SimpleRegistrationForm />
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Why This Workshop is Different */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How This Workshop is Different
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-success/20 bg-success/5">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Expert-Led</h3>
                <p className="text-muted-foreground">Learn from a Medicare Broker with 15+ years experience</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Sales Pitch</h3>
                <p className="text-muted-foreground">Pure education — we're here to help, not sell</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-warning/20 bg-warning/5">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-warning mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Real Answers</h3>
                <p className="text-muted-foreground">Not just surface-level info — get the details that matter</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What You Will Learn About
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Covers everything you need to choose the right Medicare plan with confidence
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Medicare Parts A, B, C & D</h3>
                <p className="text-sm text-muted-foreground">Understand what each part covers and costs</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Avoid Common Mistakes</h3>
                <p className="text-sm text-muted-foreground">Discover the #1 pitfall people encounter when turning 65 and how to avoid it.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-warning" />
                </div>
                <h3 className="font-semibold mb-2">Enrollment Periods</h3>
                <p className="text-sm text-muted-foreground">Know exactly when to sign up</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cta" />
                </div>
                <h3 className="font-semibold mb-2">Which Plan is Right</h3>
                <p className="text-sm text-muted-foreground">Find the best plan for your specific situation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get When You Register */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What You Get When You Register
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              <Card className="bg-white shadow-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">30 Minute Webinar</h3>
                    <p className="text-muted-foreground">Comprehensive session with expert guidance</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Free "My Medicare Roadmap" (PDF)</h3>
                    <p className="text-muted-foreground">Downloadable reference guide you can keep forever to help you stay on track</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-warning" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Action Plan</h3>
                    <p className="text-muted-foreground">Clear next steps to choose your Medicare plan with confidence</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Expert */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Your Host</h2>
            
            <Card className="bg-white shadow-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img src={brokerHeadshot} alt="Michael Smith - Medicare Expert" className="w-32 h-32 rounded-full object-cover shadow-card" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Michael Smith</h3>
                    <p className="text-primary font-semibold mb-4">Licensed Medicare Broker</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Michael is a dedicated educator and public speaker. With over a decade of experience in simplifying Medicare decisions, he is passionate about assisting individuals in navigating the complexities of Medicare. Michael has successfully guided over 1,000's of people through the Medicare process—now it's your turn...
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                      <span>📜 Licensed Professional</span>
                      <span>👥 Helped 1,000+ Clients</span>
                      <span>⭐ 5 Star Rated</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Step-by-Step Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Happens After You Register?
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {[{
              step: 1,
              title: "Register",
              description: "Fill out the simple form above to secure your spot"
            }, {
              step: 2,
              title: "Get Confirmation",
              description: "Receive an email with your workshop link and calendar reminder"
            }, {
              step: 3,
              title: "Join the Workshop",
              description: "Attend from your phone or computer - no software needed"
            }, {
              step: 4,
              title: "Leave with Clarity",
              description: "Walk away confident with a plan you trust and understand"
            }].map((item, index) => <Card key={index} className="bg-white shadow-card">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Everything you need to know about attending this workshop
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is this really free?</AccordionTrigger>
                <AccordionContent>
                  Yes, absolutely free. No hidden costs, no surprise charges. We believe everyone deserves clear Medicare guidance.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Is this a sales presentation?</AccordionTrigger>
                <AccordionContent>
                  Not at all. This is 100% educational content designed to help you understand Medicare better. No products will be sold during the workshop.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Will you help me choose a specific plan?</AccordionTrigger>
                <AccordionContent>
                  The workshop focuses on education so you can make informed decisions. For personalized plan recommendations, you can schedule a free consultation after the workshop.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What if I'm already retired?</AccordionTrigger>
                <AccordionContent>
                  Perfect! This workshop is ideal for anyone approaching or already in retirement. You'll learn about Medicare timing, coverage options, and how to optimize your benefits.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>How long is the webinar?</AccordionTrigger>
                <AccordionContent>
                  The webinar runs for 30-45 minutes. We respect your time and keep things focused and actionable.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>I already signed up for a plan — will this still help me?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! Even if you've already enrolled, this workshop will help you understand if you made the best choice and what options you'll have during the next enrollment period. You might discover ways to save money or get better coverage.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger>Is this workshop just for seniors turning 65?</AccordionTrigger>
                <AccordionContent>
                  Not at all! This workshop is valuable for anyone approaching Medicare age, caregivers helping aging parents, or anyone already on Medicare who wants to better understand their options and ensure they're not overpaying.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger>Will you help me figure out which specific plan is best for me?</AccordionTrigger>
                <AccordionContent>
                  The workshop provides the education you need to make informed decisions. For personalized plan analysis and recommendations based on your specific health needs and budget, Michael offers free one-on-one consultations after the workshop.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Wait - Secure Your Medicare Future Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Every year you wait could cost you $3,000+ in premiums. 
            Register now to guarantee your seat.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 max-w-md mx-auto mb-8">
            <h3 className="text-lg font-semibold mb-4">The Cost of Waiting</h3>
            <div className="space-y-2 text-blue-100">
              <p className="text-white"><strong className="text-white">$3,000+</strong> - Average yearly overspend on wrong plan</p>
              <p className="text-white"><strong className="text-white">10%</strong> - Annual penalty for late enrollment</p>
              <p className="text-white"><strong className="text-white">1 Year</strong> - How long you're stuck with wrong plan</p>
            </div>
          </div>
          
          <p className="text-lg mb-6 text-blue-100">
            There's no cost, no sales pitch, and no pressure — just the clarity you need to make a smart decision.
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-green-500 rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-medium">Zero Sales Pitch Promise</span>
          </div>
          
          <Button onClick={scrollToForm} variant="cta" size="xl" className="w-full md:w-auto min-h-14 text-lg md:text-xl md:px-12 px-[32px]">Save My Spot</Button>
          
          <p className="text-sm mt-4 text-white">
            We've helped 1,000+ people understand Medicare with confidence
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
            <div className="flex flex-col items-center">
              <FileText className="w-6 h-6 mb-2" />
              <span className="text-xs">Expert Content</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-6 h-6 mb-2" />
              <span className="text-xs">Trusted by 1000+</span>
            </div>
            <div className="flex flex-col items-center">
              <Video className="w-6 h-6 mb-2" />
              <span className="text-xs">Live Workshop</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-6 h-6 mb-2" />
              <span className="text-xs">Licensed Expert</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Guardian Health & Wealth. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;