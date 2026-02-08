import letterPaper from "@/assets/letter-paper.png";

const LoveLetter = () => {
  return (
    <div className="fade-in max-w-md mx-auto">
      <div 
        className="letter-paper rounded-lg p-8 md:p-10 relative"
        style={{ 
          backgroundImage: `url(${letterPaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Decorative torn edge effect */}
        <div className="absolute inset-0 rounded-lg pointer-events-none"
             style={{
               boxShadow: 'inset 0 0 30px hsl(35 40% 60% / 0.3)',
             }}
        />
        
        <div className="relative z-10 space-y-6 text-left">
          {/* Opening line - emphasized */}
          <h3 className="font-romantic text-3xl md:text-4xl text-letter-text leading-relaxed">
            to the one who has my heart,
          </h3>
          
          {/* Letter content */}
          <div className="space-y-5 font-romantic text-lg md:text-xl text-letter-text/90 leading-relaxed">
            <p>
              I was asked that why do I love you
              <br />
              and I looked at them with so much confusion
              <br />
              it's asking like why is the sky blue?
              <br />
              why does she have endless waves?
            </p>
            
            <p>
              I know falling with you in love was not planned
              <br />
              but it turned out to be one of the most beautiful things.
              <br />
              I don't need to explain this to everyone.
            </p>
            
            <p>
              After meeting you, things feel much better —
              <br />
              not perfect, not best,
              <br />
              but life feels lighter and happier with you.
            </p>
            
            <p>
              I hope we become each other's support system
              <br />
              and the key to happiness for the life ahead.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-4 text-right">
            <span className="font-romantic text-2xl text-letter-text/80">
              Forever yours ♡
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
