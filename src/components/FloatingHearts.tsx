import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const hearts = [
    { size: 16, left: "10%", top: "20%", delay: "" },
    { size: 12, left: "85%", top: "15%", delay: "float-heart-delay-1" },
    { size: 20, left: "75%", top: "60%", delay: "float-heart-delay-2" },
    { size: 14, left: "15%", top: "70%", delay: "float-heart-delay-3" },
    { size: 10, left: "90%", top: "80%", delay: "" },
    { size: 18, left: "5%", top: "45%", delay: "float-heart-delay-1" },
    { size: 8, left: "50%", top: "10%", delay: "float-heart-delay-2" },
    { size: 14, left: "60%", top: "85%", delay: "float-heart-delay-3" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart, index) => (
        <Heart
          key={index}
          size={heart.size}
          className={`absolute text-rose/40 fill-rose/20 float-heart ${heart.delay}`}
          style={{ left: heart.left, top: heart.top }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
