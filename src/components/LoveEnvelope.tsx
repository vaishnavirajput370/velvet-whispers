import { useState } from "react";
import envelopeImage from "@/assets/envelope.png";
import LoveLetter from "./LoveLetter";

const LoveEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-12 space-y-8">
      {!isOpen ? (
        <div className="fade-in space-y-4">
          <p className="text-lg text-muted-foreground font-light">
            I have something special for you...
          </p>
          
          <button
            onClick={() => setIsOpen(true)}
            className="group cursor-pointer mx-auto block"
          >
            <div className="envelope-hover">
              <img 
                src={envelopeImage} 
                alt="Love letter envelope" 
                className="w-40 h-32 object-contain mx-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground/70 mt-4 group-hover:text-primary transition-colors">
              Click to open 💌
            </p>
          </button>
        </div>
      ) : (
        <LoveLetter />
      )}
    </div>
  );
};

export default LoveEnvelope;
