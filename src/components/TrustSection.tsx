import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Heart } from "lucide-react";

export const TrustSection = () => {
  return (
    <section className="py-12 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-primary mb-2">Trusted by 1,000+ People</h3>
          <p className="text-muted-foreground">Expert guidance you can count on</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <Card className="border-0 bg-white/80 shadow-card">
            <CardContent className="p-4 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium">No Sales Pitch</div>
              <div className="text-xs text-muted-foreground">100% Educational</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-white/80 shadow-card">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-sm font-medium">1,000+</div>
              <div className="text-xs text-muted-foreground">Happy Clients</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-white/80 shadow-card">
            <CardContent className="p-4 text-center">
              <Award className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-sm font-medium">Expert Led</div>
              <div className="text-xs text-muted-foreground">Medicare Specialist</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-white/80 shadow-card">
            <CardContent className="p-4 text-center">
              <Heart className="w-8 h-8 text-destructive mx-auto mb-2" />
              <div className="text-sm font-medium">Unbiased</div>
              <div className="text-xs text-muted-foreground">Your Best Interest</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};