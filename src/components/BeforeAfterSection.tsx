import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";

export const BeforeAfterSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          From Overwhelmed to In Control
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-destructive flex items-center gap-2">
                <X className="w-5 h-5" />
                Before This Workshop
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                  <span>Confused about coverage options</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                  <span>Worried about making costly mistakes</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                  <span>Overwhelmed by Medicare jargon</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                  <span>Anxious about enrollment deadlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                  <span>Unsure which plan fits your needs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* After */}
          <Card className="border-success/20 bg-success/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-success flex items-center gap-2">
                <Check className="w-5 h-5" />
                After This Workshop
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Confident in your Medicare choice</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Clear on exactly what to do next</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Understand Medicare in simple terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Calm and prepared for enrollment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Know which plan saves you money</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};