import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="text-center max-w-3xl mx-auto">
        <Heart className="w-6 h-6 text-rose mx-auto mb-12 fill-rose/30 fade-in" />
        
        <div className="space-y-4 fade-in">
          <p className="text-3xl md:text-5xl font-romantic text-primary leading-relaxed">
            Tum achanak nahi aaye,
          </p>
          <p className="text-3xl md:text-5xl font-romantic text-primary leading-relaxed fade-in-delay-1">
            tum dheere dheere zaroorat ban gaye.
          </p>
        </div>

        <div className="mt-16 fade-in-delay-2">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-rose/40 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
