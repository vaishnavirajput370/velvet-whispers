import { useState, useEffect } from "react";

interface ScanningAnimationProps {
  onComplete: () => void;
}

const scanTexts = [
  "Scanning your face…",
  "Scanning your smile…",
  "Scanning cuteness…",
  "Scanning sweetness…",
  "Scanning your vibe…",
];

const ScanningAnimation = ({ onComplete }: ScanningAnimationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Text cycling
    const textInterval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= scanTexts.length - 1) {
          clearInterval(textInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    // Complete after 5.5 seconds
    const timeout = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="fade-in text-center space-y-8 py-12 px-6">
      {/* Scanning visual */}
      <div className="relative w-48 h-48 mx-auto">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-rose/30 animate-pulse" />
        
        {/* Scanning line */}
        <div 
          className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent scanning-line"
          style={{
            top: `${(progress % 100)}%`,
          }}
        />
        
        {/* Inner circle with emoji */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-soft-pink to-blush 
                        flex items-center justify-center border-2 border-rose/20">
          <span className="text-6xl animate-pulse">🥰</span>
        </div>
        
        {/* Rotating ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary 
                        border-r-primary animate-spin" 
             style={{ animationDuration: '2s' }} />
      </div>

      {/* Scanning text */}
      <div className="h-12 flex items-center justify-center">
        <p className="text-2xl font-romantic text-primary transition-all duration-300">
          {scanTexts[currentIndex]}
        </p>
      </div>

      {/* Progress bar */}
      <div className="max-w-xs mx-auto">
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-deep-rose transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2">{progress}%</p>
      </div>
    </div>
  );
};

export default ScanningAnimation;
