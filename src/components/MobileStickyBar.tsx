import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface MobileStickyBarProps {
  onClick: () => void;
}

export const MobileStickyBar = ({ onClick }: MobileStickyBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling past hero section
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 shadow-lg md:hidden">
      <div className="container mx-auto px-4 max-w-sm">
        <Button
          variant="cta"
          size="lg"
          onClick={onClick}
          className="w-full flex items-center justify-center gap-2"
        >
          <Lock className="w-4 h-4" />
          Reserve My Free Spot
        </Button>
      </div>
    </div>
  );
};