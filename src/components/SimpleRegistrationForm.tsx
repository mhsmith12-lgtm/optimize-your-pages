import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Users } from "lucide-react";
interface SimpleRegistrationFormProps {
  onRegister?: () => void;
}
export const SimpleRegistrationForm = ({
  onRegister
}: SimpleRegistrationFormProps) => {
  const handleClick = () => {
    // This will link to external form
    if (onRegister) {
      onRegister();
    }
  };
  return <Card className="w-full max-w-md mx-auto shadow-card border-2 border-primary/20">
      <CardContent className="p-6">
        <div className="space-y-4">
          <Button onClick={handleClick} variant="cta" size="xl" className="w-full">✅ Save My Spot – No Cost, No Sales Pitch</Button>
          
          <div className="space-y-2 text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              <span>SSL secured • We respect your privacy</span>
            </div>
            <p className="text-success font-medium">✅ Trusted by 1,000+ people turning 65 just like you.</p>
            <p>We'll email you the webinar link + reminders. No spam. Unsubscribe anytime.</p>
            
            <div className="flex items-center justify-center gap-1 mt-3 text-xs">
              <Users className="w-3 h-3 text-warning" />
              <span className="text-warning font-medium">Spots are limited</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>;
};