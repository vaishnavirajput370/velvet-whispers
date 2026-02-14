import { useState, useEffect, useCallback, useRef } from "react";
import { Heart, Trophy, X } from "lucide-react";

interface FallingHeart {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
}

const CatchHeartsGame = ({ onComplete }: { onComplete?: () => void }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [bucketX, setBucketX] = useState(50);
  const [hearts, setHearts] = useState<FallingHeart[]>([]);
  const [caught, setCaught] = useState(0);
  const [missed, setMissed] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const heartIdRef = useRef(0);
  const bucketXRef = useRef(50);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setCaught(0);
    setMissed(0);
    setTimeLeft(30);
    setHearts([]);
  };

  // Handle mouse/touch movement
  const handleMove = useCallback((clientX: number) => {
    if (!gameAreaRef.current || !gameStarted || gameOver) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(10, Math.min(90, x));
    bucketXRef.current = clamped;
    setBucketX(clamped);
  }, [gameStarted, gameOver]);

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  // Spawn hearts
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    
    const spawnInterval = setInterval(() => {
      heartIdRef.current += 1;
      const newHeart: FallingHeart = {
        id: heartIdRef.current,
        x: Math.random() * 80 + 10,
        y: 0,
        speed: 1 + Math.random() * 1.5,
        size: 24 + Math.random() * 16,
      };
      setHearts(prev => [...prev, newHeart]);
    }, 800);

    return () => clearInterval(spawnInterval);
  }, [gameStarted, gameOver]);

  // Move hearts down
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    
    const moveInterval = setInterval(() => {
      setHearts(prev => {
        const updated: FallingHeart[] = [];
        let missedCount = 0;
        let caughtCount = 0;

        prev.forEach(heart => {
          const newY = heart.y + heart.speed;
          
          // Check if caught (near bucket)
          if (newY >= 85 && newY <= 95 && Math.abs(heart.x - bucketXRef.current) < 12) {
            caughtCount++;
          } else if (newY > 100) {
            missedCount++;
          } else {
            updated.push({ ...heart, y: newY });
          }
        });

        if (caughtCount > 0) setCaught(c => c + caughtCount);
        if (missedCount > 0) setMissed(m => m + missedCount);

        return updated;
      });
    }, 50);

    return () => clearInterval(moveInterval);
  }, [gameStarted, gameOver]);

  // Timer
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, gameOver]);

  const score = caught * 10;

  return (
    <div className="fade-in py-8 px-4 max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-romantic text-primary flex items-center justify-center gap-2">
          Catch the Hearts <span className="text-rose">💗</span>
        </h2>
        <p className="text-muted-foreground mt-2">Move the bucket to catch falling hearts!</p>
      </div>

      {!gameStarted ? (
        /* Start Screen */
        <div className="text-center space-y-6 py-12">
          <div className="text-6xl animate-pulse">💕</div>
          <button
            onClick={startGame}
            className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg
                       transition-all duration-300 hover:shadow-xl hover:shadow-rose/40 hover:scale-105"
          >
            Start Game 🎮
          </button>
        </div>
      ) : gameOver ? (
        /* Game Over Screen */
        <div className="text-center space-y-6 py-8">
          <Trophy className="w-16 h-16 text-gold mx-auto" />
          <h3 className="text-3xl font-romantic text-primary">Game Over!</h3>
          
          <div className="bg-gradient-to-br from-soft-pink to-blush rounded-2xl p-6 space-y-4 max-w-xs mx-auto">
            <div className="flex justify-between items-center">
              <span className="text-foreground">Hearts Caught:</span>
              <span className="font-bold text-primary">{caught} 💗</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground">Hearts Missed:</span>
              <span className="font-bold text-muted-foreground">{missed} 💔</span>
            </div>
            <div className="border-t border-rose/30 pt-4">
              <span className="text-2xl font-romantic text-deep-rose">Score: {score}</span>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={startGame}
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium
                         transition-all duration-300 hover:bg-secondary/80 hover:scale-105"
            >
              Play Again 🔄
            </button>
            {onComplete && (
              <button
                onClick={onComplete}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium
                           transition-all duration-300 hover:shadow-xl hover:shadow-rose/40 hover:scale-105"
              >
                Continue 💕
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Game Area */
        <div className="space-y-4">
          {/* Stats */}
          <div className="flex justify-between items-center px-2 text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-rose fill-rose" /> {caught}
              </span>
              <span className="flex items-center gap-1">
                <X className="w-4 h-4 text-muted-foreground" /> {missed}
              </span>
            </div>
            <span className="font-medium">Score: {score}</span>
            <span className="text-primary font-bold">⏱️ {timeLeft}s</span>
          </div>

          {/* Game Area */}
          <div
            ref={gameAreaRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-80 bg-gradient-to-b from-soft-pink/50 to-blush/30 
                       rounded-2xl overflow-hidden border-2 border-rose/20 cursor-none"
          >
            {/* Falling Hearts */}
            {hearts.map(heart => (
              <div
                key={heart.id}
                className="absolute transition-none"
                style={{
                  left: `${heart.x}%`,
                  top: `${heart.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Heart 
                  className="text-rose fill-rose/80" 
                  style={{ width: heart.size, height: heart.size }}
                />
              </div>
            ))}

            {/* Bucket */}
            <div
              className="absolute bottom-2 transition-all duration-75"
              style={{
                left: `${bucketX}%`,
                transform: 'translateX(-50%)',
              }}
            >
              <div className="w-16 h-10 bg-gradient-to-b from-gold to-accent rounded-b-xl 
                              border-2 border-gold/50 flex items-center justify-center">
                <span className="text-lg">🧺</span>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Move your mouse or finger to catch hearts! 💕
          </p>
        </div>
      )}
    </div>
  );
};

export default CatchHeartsGame;
