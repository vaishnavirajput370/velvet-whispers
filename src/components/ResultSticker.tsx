import { Heart, Sparkles, Star } from "lucide-react";

interface ResultStickerProps {
  onContinue: () => void;
}

const ResultSticker = ({ onContinue }: ResultStickerProps) => {
  return (
    <div className="fade-in text-center space-y-8 py-8 px-6">
      {/* Sticker Card */}
      <div className="max-w-sm mx-auto bg-gradient-to-br from-soft-pink via-blush to-warm-cream 
                      rounded-3xl p-8 shadow-xl border-4 border-rose/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-4 right-4">
          <Sparkles className="w-6 h-6 text-gold animate-pulse" />
        </div>
        <div className="absolute top-4 left-4">
          <Star className="w-6 h-6 text-gold fill-gold/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Title */}
        <div className="mb-6">
          <h3 className="text-2xl font-romantic text-deep-rose flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 fill-deep-rose" />
            Analysis Complete
            <Heart className="w-5 h-5 fill-deep-rose" />
          </h3>
        </div>

        {/* Report card content */}
        <div className="space-y-4 text-left bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex justify-between items-center border-b border-rose/20 pb-3">
            <span className="font-medium text-foreground">Item:</span>
            <span className="font-romantic text-xl text-primary">You</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-rose/20 pb-3">
            <span className="font-medium text-foreground">Cuteness:</span>
            <span className="font-bold text-deep-rose">UNLIMITED ✨</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-rose/20 pb-3">
            <span className="font-medium text-foreground">Sweetness:</span>
            <span className="font-bold text-deep-rose">OVERLOAD 🍬</span>
          </div>
          
          <div className="flex justify-between items-center pb-2">
            <span className="font-medium text-foreground">Vibe:</span>
            <span className="font-bold text-deep-rose">PERFECT 💫</span>
          </div>
        </div>

        {/* Total */}
        <div className="mt-6 py-4 bg-gradient-to-r from-primary to-deep-rose rounded-xl">
          <p className="text-2xl font-romantic text-white">
            TOTAL = 100% LOVELY 💖
          </p>
        </div>

        {/* Stamp */}
        <div className="absolute -bottom-2 -right-2 transform rotate-12">
          <div className="w-20 h-20 rounded-full border-4 border-dashed border-rose/50 
                          flex items-center justify-center bg-white/50">
            <span className="text-xs font-bold text-deep-rose">CERTIFIED</span>
          </div>
        </div>
      </div>

      {/* Continue button */}
      <button
        onClick={onContinue}
        className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg
                   transition-all duration-300 hover:shadow-xl hover:shadow-rose/40 hover:scale-105"
      >
        CONTINUE 💝
      </button>
    </div>
  );
};

export default ResultSticker;
