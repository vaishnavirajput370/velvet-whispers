import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";

const ValentineQuestion = () => {
  const [answered, setAnswered] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleYes = () => {
    setAnswered(true);
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-md mx-auto text-center">
        {!answered ? (
          <div className="fade-in">
            <Heart className="w-12 h-12 text-rose mx-auto mb-8 fill-rose/30 pulse-gentle" />
            
            <h2 className="text-4xl md:text-5xl font-romantic text-primary mb-4">
              Ek sawaal hai...
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 font-light">
              Will you be my Valentine?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleYes}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group relative px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium 
                         transition-all duration-300 hover:shadow-lg hover:shadow-rose/30 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Haan, hamesha 
                  <Heart 
                    className={`w-5 h-5 transition-all duration-300 ${isHovering ? 'fill-primary-foreground scale-110' : ''}`} 
                  />
                </span>
              </button>
              
              <p className="text-sm text-muted-foreground/60 italic">
                (there's only one answer here)
              </p>
            </div>
          </div>
        ) : (
          <div className="fade-in">
            <Sparkles className="w-16 h-16 text-gold mx-auto mb-6" />
            
            <h2 className="text-5xl md:text-6xl font-romantic text-primary mb-6">
              Yay! ♡
            </h2>
            
            <p className="text-xl text-foreground/80 font-light mb-4">
              Mujhe pata tha tum haan bologe
            </p>
            
            <p className="text-lg text-muted-foreground font-light italic">
              Ab is Valentine's Day ko unforgettable banate hain, saath mein ♡
            </p>
            
            <div className="mt-12 flex justify-center gap-4">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i} 
                  className="w-6 h-6 text-rose fill-rose/50 float-heart" 
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ValentineQuestion;
