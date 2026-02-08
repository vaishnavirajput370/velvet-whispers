import { useState, useEffect } from "react";

interface LoadingSceneProps {
  onComplete: () => void;
}

const LoadingScene = ({ onComplete }: LoadingSceneProps) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);

    // Complete after 4 seconds
    const timeout = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="min-h-[500px] flex flex-col items-center justify-center fade-in">
      {/* Cute Bird SVG */}
      <div className="relative mb-8">
        <svg
          className="w-32 h-32 bird-idle"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bird body */}
          <ellipse cx="50" cy="55" rx="25" ry="22" className="fill-rose/80" />
          
          {/* Bird head */}
          <circle cx="50" cy="35" r="18" className="fill-rose/90" />
          
          {/* Left eye */}
          <circle cx="43" cy="33" r="4" className="fill-foreground" />
          <circle cx="44" cy="32" r="1.5" className="fill-white" />
          
          {/* Right eye */}
          <circle cx="57" cy="33" r="4" className="fill-foreground" />
          <circle cx="58" cy="32" r="1.5" className="fill-white" />
          
          {/* Beak */}
          <path d="M50 40 L46 45 L54 45 Z" className="fill-gold" />
          
          {/* Blush spots */}
          <ellipse cx="38" cy="38" rx="3" ry="2" className="fill-deep-rose/40" />
          <ellipse cx="62" cy="38" rx="3" ry="2" className="fill-deep-rose/40" />
          
          {/* Wing */}
          <ellipse cx="35" cy="55" rx="8" ry="12" className="fill-deep-rose/60" />
          
          {/* Tail */}
          <path d="M75 55 Q85 50 80 45 Q78 55 75 60 Z" className="fill-deep-rose/70" />
          
          {/* Feet */}
          <path d="M42 75 L40 82 M42 75 L44 82 M42 75 L46 80" stroke="hsl(var(--gold))" strokeWidth="2" strokeLinecap="round" />
          <path d="M58 75 L56 82 M58 75 L60 82 M58 75 L54 80" stroke="hsl(var(--gold))" strokeWidth="2" strokeLinecap="round" />
        </svg>
        
        {/* Small hearts around bird */}
        <div className="absolute -top-2 -right-2 text-rose animate-pulse">💕</div>
        <div className="absolute -top-4 left-0 text-rose/70 animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
      </div>
      
      {/* Loading text */}
      <div className="text-center space-y-2">
        <p className="text-xl md:text-2xl font-romantic text-primary">
          Loading something special for you{dots}
        </p>
        <p className="text-sm text-muted-foreground/60">
          Please wait 💝
        </p>
      </div>
    </div>
  );
};

export default LoadingScene;
