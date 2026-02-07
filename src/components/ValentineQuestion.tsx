import { useState, useRef, useEffect } from "react";
import { Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ValentineQuestion = () => {
  const [answered, setAnswered] = useState(false);
  const [yesPosition, setYesPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const isMobile = useIsMobile();

  const handleYes = () => {
    setAnswered(true);
  };

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Move YES button toward cursor position
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Move YES button toward the cursor
      const offsetX = (mouseX - centerX) * 0.3;
      const offsetY = (mouseY - centerY) * 0.3;
      
      setYesPosition({ x: offsetX, y: offsetY });
    }
  };

  useEffect(() => {
    if (isMobile || answered) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !noButtonRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const noButtonRect = noButtonRef.current.getBoundingClientRect();
      
      // Calculate distance from cursor to NO button center
      const noButtonCenterX = noButtonRect.left + noButtonRect.width / 2;
      const noButtonCenterY = noButtonRect.top + noButtonRect.height / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - noButtonCenterX, 2) + 
        Math.pow(e.clientY - noButtonCenterY, 2)
      );

      // If cursor is within 150px of NO button, move YES toward cursor
      const threshold = 150;
      if (distance < threshold) {
        const mouseX = e.clientX - containerRect.left;
        const mouseY = e.clientY - containerRect.top;
        const centerX = containerRect.width / 2;
        const centerY = containerRect.height / 2;
        
        // Calculate offset to move YES button toward cursor
        const intensity = 1 - (distance / threshold);
        const maxOffset = 80;
        const offsetX = (mouseX - centerX) * intensity * 0.5;
        const offsetY = (mouseY - centerY) * intensity * 0.3;
        
        setYesPosition({
          x: Math.max(-maxOffset, Math.min(maxOffset, offsetX)),
          y: Math.max(-maxOffset / 2, Math.min(maxOffset / 2, offsetY))
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, answered]);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-lg mx-auto text-center" ref={containerRef}>
        {!answered ? (
          <div className="fade-in space-y-8">
            <Heart className="w-8 h-8 text-rose mx-auto fill-rose/30 pulse-gentle" />
            
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-romantic text-primary">
                Agr hona chahu tera, tum hone doge kya
              </h2>
              <p className="text-muted-foreground font-light italic">
                (Sirf aaj ke liye nahi…)
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 min-h-[80px]">
              <button
                onClick={handleYes}
                style={{
                  transform: isMobile 
                    ? 'none' 
                    : `translate(${yesPosition.x}px, ${yesPosition.y}px)`
                }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium 
                         transition-all duration-500 ease-out hover:shadow-lg hover:shadow-rose/30 hover:scale-105"
              >
                YES ❤️
              </button>
              
              <button
                ref={noButtonRef}
                onClick={handleNoClick}
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium 
                         transition-all duration-300 hover:shadow-lg hover:shadow-rose/20"
              >
                NO 🙈
              </button>
            </div>
          </div>
        ) : (
          <div className="fade-in space-y-8">
            <Heart className="w-10 h-10 text-rose mx-auto fill-rose/40" />
            
            <div className="space-y-6 text-foreground/80">
              <p className="text-lg md:text-xl font-light leading-relaxed">
                Mujhe grand gestures nahi aate,
                <br />
                bas tumhara saath kaafi hai.
              </p>
              
              <p className="text-lg md:text-xl font-light leading-relaxed">
                Agar haan hai,
                <br />
                toh dil yahin thehar jaaye.
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-2xl font-romantic text-primary">♡</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ValentineQuestion;
