import { useState, useRef, useCallback } from "react";
import { Heart } from "lucide-react";
import doodleProposal from "@/assets/doodle-proposal.png";
import doodleCelebration from "@/assets/doodle-celebration.png";
import ConfessionSection from "./ConfessionSection";
import ScanningAnimation from "./ScanningAnimation";
import ResultSticker from "./ResultSticker";
import NoteSection from "./NoteSection";
import CatchHeartsGame from "./CatchHeartsGame";

type Stage = 'proposal' | 'celebration' | 'confession' | 'scanning' | 'result' | 'note' | 'game';

const ValentineProposal = () => {
  const [stage, setStage] = useState<Stage>('proposal');
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYes = () => {
    setStage('celebration');
  };

  const moveNoButton = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 120;
    const buttonHeight = 50;
    const padding = 20;
    
    // Calculate random position within container bounds
    const maxX = container.width - buttonWidth - padding * 2;
    const maxY = 150;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: newX, y: newY });
  }, []);

  return (
    <section className="py-8 px-6 relative min-h-[600px]">
      <div className="max-w-lg mx-auto text-center" ref={containerRef}>
        {/* Proposal Stage */}
        {stage === 'proposal' && (
          <div className="fade-in space-y-6">
            {/* Doodle Proposal Illustration */}
            <div className="flex justify-center mb-6">
              <img 
                src={doodleProposal} 
                alt="Cute proposal doodle" 
                className="w-44 h-44 object-contain doodle-bounce"
              />
            </div>

            {/* Intro text */}
            <p className="text-lg md:text-xl text-foreground/80 font-light">
              Hey, on this special day, I made something for you.
            </p>

            <Heart className="w-6 h-6 text-rose mx-auto fill-rose/30 pulse-gentle" />
            
            {/* Main proposal question */}
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-romantic text-deep-rose">
                Will you be my Valentine??
              </h2>
            </div>
            
            {/* Buttons */}
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
        )}

        {/* Celebration Stage */}
        {stage === 'celebration' && (
          <div className="fade-in space-y-6">
            <div className="flex justify-center mb-4">
              <img 
                src={doodleCelebration} 
                alt="Celebration doodle" 
                className="w-48 h-48 object-contain doodle-bounce"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-romantic text-primary">
              Yeh! Officially you are my Valentine! 💖
            </h2>

            <div className="pt-4">
              <button
                onClick={() => setStage('confession')}
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium
                         transition-all duration-300 hover:bg-secondary/80 hover:scale-105"
              >
                Continue 💕
              </button>
            </div>
          </div>
        )}

        {/* Confession Stage */}
        {stage === 'confession' && (
          <ConfessionSection onOpenClick={() => setStage('scanning')} />
        )}

        {/* Scanning Stage */}
        {stage === 'scanning' && (
          <ScanningAnimation onComplete={() => setStage('result')} />
        )}

        {/* Result Stage */}
        {stage === 'result' && (
          <ResultSticker onContinue={() => setStage('note')} />
        )}

        {/* Note Stage */}
        {stage === 'note' && (
          <NoteSection onContinue={() => setStage('game')} />
        )}

        {/* Game Stage */}
        {stage === 'game' && (
          <CatchHeartsGame />
        )}
      </div>
    </section>
  );
};

export default ValentineProposal;
