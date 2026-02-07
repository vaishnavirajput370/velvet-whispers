import { useEffect, useRef, useState } from "react";

const LoveLetterSection = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const lines = [
    "Shayad tumhein andaaza nahi,",
    "lekin tumhari maujoodgi bohot kuch theek kar deti hai.",
    "",
    "Tum se baat ho jaaye",
    "toh din halka lagta hai,",
    "aur jab na ho",
    "toh dil thoda sa chup ho jaata hai.",
    "",
    "Yeh mohabbat ka shor nahi,",
    "bas ek gehri si tasalli hai —",
    "ke tum ho."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          lines.forEach((_, index) => {
            setTimeout(() => {
              setVisibleLines((prev) => [...prev, index]);
            }, index * 400);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 relative" ref={sectionRef}>
      <div className="max-w-xl mx-auto">
        <div className="space-y-6 text-center">
          {lines.map((line, index) => (
            <p
              key={index}
              className={`text-lg md:text-xl font-light leading-relaxed transition-all duration-1000 ${
                line === "" ? "h-4" : ""
              } ${
                visibleLines.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } ${
                line.includes("ke tum ho") ? "text-primary font-romantic text-2xl mt-4" : "text-foreground/80"
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
