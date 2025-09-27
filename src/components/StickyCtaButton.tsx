import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface StickyCtaButtonProps {
  onClick: () => void;
}

export const StickyCtaButton = ({ onClick }: StickyCtaButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show sticky button after scrolling 100px
      if (window.pageYOffset > 100) {
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
    <div className="fixed bottom-4 right-4 z-50 animate-float">
      <Button
        variant="cta"
        size="lg"
        onClick={onClick}
        className="shadow-float animate-pulse-glow"
      >
        Save My Seat
      </Button>
    </div>
  );
};