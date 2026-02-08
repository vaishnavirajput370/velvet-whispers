import { Heart } from "lucide-react";

interface ConfessionSectionProps {
  onOpenClick: () => void;
}

const ConfessionSection = ({ onOpenClick }: ConfessionSectionProps) => {
  return (
    <div className="fade-in text-center space-y-8 py-12">
      <div className="space-y-4">
        <p className="text-xl md:text-2xl font-romantic text-foreground/80">
          On this day, something honest I wanted to share.
        </p>
      </div>

      {/* Romantic OPEN button */}
      <button
        onClick={onOpenClick}
        className="group relative mx-auto block px-12 py-5 bg-gradient-to-r from-primary to-deep-rose 
                   text-primary-foreground rounded-2xl font-romantic text-2xl
                   transition-all duration-500 hover:scale-105 hover:shadow-2xl
                   shadow-lg shadow-rose/30"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-deep-rose 
                        opacity-50 blur-xl group-hover:blur-2xl transition-all duration-500" />
        
        <span className="relative z-10 flex items-center gap-3">
          <Heart className="w-6 h-6 fill-current" />
          OPEN
          <Heart className="w-6 h-6 fill-current" />
        </span>
      </button>

      {/* Decorative hearts */}
      <div className="flex justify-center gap-4 text-rose/50">
        <span className="animate-pulse">💕</span>
        <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>💗</span>
        <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>💕</span>
      </div>
    </div>
  );
};

export default ConfessionSection;
