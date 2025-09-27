import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Users, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    turningAge: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Seat Reserved!",
      description: "You'll receive an email confirmation with the workshop link + reminders. No spam.",
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-card border-2 border-primary/20">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="h-12 text-base"
              required
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 text-base"
              required
            />
          </div>
          
          <div>
            <Select onValueChange={(value) => setFormData({ ...formData, turningAge: value })}>
              <SelectTrigger className="h-12 text-base">
                <SelectValue placeholder="When are you turning 65?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-year">This year</SelectItem>
                <SelectItem value="next-year">Next year</SelectItem>
                <SelectItem value="2-3-years">In 2-3 years</SelectItem>
                <SelectItem value="already-65">I'm already 65+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit" variant="cta" size="xl" className="w-full">
            Save My Seat - It's FREE
          </Button>
          
          <div className="space-y-2 text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              <span>SSL secured form • We respect your privacy</span>
            </div>
            <p>We'll email you the workshop link + reminders. No spam. Unsubscribe anytime.</p>
            
            <div className="flex items-center justify-center gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-warning" />
                <span className="text-warning font-medium">Only 12 spots left</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-success" />
                <span className="text-success font-medium">Starts in 2 days</span>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};