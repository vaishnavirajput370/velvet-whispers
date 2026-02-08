import { useState, useRef, useCallback } from "react";
import { Heart } from "lucide-react";
import doodleProposal from "@/assets/doodle-proposal.png";
import doodleCelebration from "@/assets/doodle-celebration.png";
import LoveEnvelope from "./LoveEnvelope";

const ValentineProposal = () => {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYes = () => {
    setAnswered(true);
  };

  const moveNoButton = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 120;
    const buttonHeight = 50;
    const padding = 20;
    
    // Calculate random position within container bounds
    const maxX = container.width - buttonWidth - padding * 2;
    const maxY = 150; // Keep within reasonable vertical range
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: newX, y: newY });
  }, []);

  return (
    <section className="py-16 px-6 relative min-h-[600px]">
      <div className="max-w-lg mx-auto text-center" ref={containerRef}>
        {!answered ? (
          <div className="fade-in space-y-8">
            {/* Doodle Proposal Illustration */}
            <div className="flex justify-center mb-8">
              <img 
                src={doodleProposal} 
                alt="Cute proposal doodle" 
                className="w-48 h-48 object-contain doodle-bounce"
              />
            </div>

            <Heart className="w-8 h-8 text-rose mx-auto fill-rose/30 pulse-gentle" />
            
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-romantic text-primary">
                Will you be my Valentine??
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 min-h-[120px] relative">
              <button
                onClick={handleYes}
                className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg
                         transition-all duration-300 hover:shadow-xl hover:shadow-rose/40 hover:scale-110
                         z-10"
              >
                YES ❤️
              </button>
              
              <button
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                }}
                className="px-10 py-4 bg-secondary text-secondary-foreground rounded-full font-medium text-lg
                         transition-all duration-200 ease-out cursor-not-allowed select-none"
              >
                NO 🙈
              </button>
            </div>

            <p className="text-muted-foreground/70 text-sm italic mt-4">
              (Hint: The NO button is shy... 🙈)
            </p>
          </div>
        ) : (
          <div className="fade-in space-y-8">
            {/* Celebration Doodle */}
            <div className="flex justify-center mb-6">
              <img 
                src={doodleCelebration} 
                alt="Celebration doodle" 
                className="w-56 h-56 object-contain doodle-bounce"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-romantic text-primary">
                Yeh! Officially you are my Valentine! 💖
              </h2>
            </div>
            
            {/* Love Envelope */}
            <LoveEnvelope />
          </div>
        )}
      </div>
    </section>
  );
};

export default ValentineProposal;
