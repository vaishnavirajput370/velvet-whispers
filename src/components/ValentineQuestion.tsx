import { useState } from "react";
import { Heart } from "lucide-react";

const ValentineQuestion = () => {
  const [answered, setAnswered] = useState(false);

  const handleYes = () => {
    setAnswered(true);
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-lg mx-auto text-center">
        {!answered ? (
          <div className="fade-in space-y-8">
            <Heart className="w-8 h-8 text-rose mx-auto fill-rose/30 pulse-gentle" />
            
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-romantic text-primary">
                Will you be my Valentine?
              </h2>
              <p className="text-muted-foreground font-light italic">
                (Sirf aaj ke liye nahi…)
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={handleYes}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium 
                         transition-all duration-300 hover:shadow-lg hover:shadow-rose/30 hover:scale-105"
              >
                YES ❤️
              </button>
              
              <button
                onClick={handleYes}
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium 
                         transition-all duration-300 hover:shadow-lg hover:shadow-rose/20 hover:scale-105"
              >
                YES, obviously 💕
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
