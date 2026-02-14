import { Heart, Sparkles } from "lucide-react";

const ThankYouScreen = () => {
  return (
    <div className="fade-in py-12 px-6 text-center space-y-8 max-w-lg mx-auto">
      <Sparkles className="w-10 h-10 text-gold mx-auto animate-pulse" />

      <h2 className="text-4xl md:text-5xl font-romantic text-deep-rose leading-snug">
        Thank You for Being You 💖
      </h2>

      <p className="text-lg text-foreground/80 font-light leading-relaxed">
        This little journey was made just for you — every word, every heart, every pixel.
      </p>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-rose/20 shadow-lg">
        <p className="text-foreground/70 italic leading-relaxed">
          No matter where life takes us, I hope you always remember —
          you are deeply appreciated, endlessly adored, and completely enough.
        </p>
        <Heart className="w-8 h-8 text-rose fill-rose/40 mx-auto pulse-gentle" />
        <p className="font-romantic text-2xl text-primary">
          Forever & Always ✨
        </p>
      </div>

      <p className="text-muted-foreground/60 text-sm pt-4">
        Made with all my heart, just for you 🌹
      </p>
    </div>
  );
};

export default ThankYouScreen;
