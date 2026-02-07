import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="text-center max-w-2xl mx-auto fade-in">
        <Heart className="w-8 h-8 text-rose mx-auto mb-8 fill-rose/30" />
        
        <h1 className="text-5xl md:text-7xl font-romantic text-primary mb-6 leading-tight">
          دل سے دل تک
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 fade-in-delay-1">
          Tum se milke zindagi ka matlab samajh aaya
        </p>
        
        <p className="text-lg text-muted-foreground/80 font-light italic fade-in-delay-2">
          "When I found you, I found meaning in every heartbeat"
        </p>

        <div className="mt-12 fade-in-delay-3">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-rose/50 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
