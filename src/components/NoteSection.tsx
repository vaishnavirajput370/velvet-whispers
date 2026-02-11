import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Music, FileText } from "lucide-react";
import letterPaper from "@/assets/letter-paper.png";

interface NoteSectionProps {
  onContinue: () => void;
}

const NoteSection = ({ onContinue }: NoteSectionProps) => {
  const [activeTab, setActiveTab] = useState("note");

  return (
    <div className="fade-in space-y-8 py-8 px-4 max-w-lg mx-auto">
      {/* Greeting */}
      <div className="text-center">
        <h2 className="text-4xl font-romantic text-primary mb-2">Hey love,</h2>
        <div className="flex justify-center gap-2">
          <Heart className="w-5 h-5 text-rose fill-rose/30" />
          <Heart className="w-4 h-4 text-rose/70 fill-rose/20" />
          <Heart className="w-5 h-5 text-rose fill-rose/30" />
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-soft-pink/50">
          <TabsTrigger value="note" className="flex items-center gap-2 data-[state=active]:bg-white">
            <FileText className="w-4 h-4" />
            Note
          </TabsTrigger>
          <TabsTrigger value="music" className="flex items-center gap-2 data-[state=active]:bg-white">
            <Music className="w-4 h-4" />
            Music
          </TabsTrigger>
        </TabsList>

        {/* Note Content */}
        <TabsContent value="note" className="mt-6">
          <div 
            className="letter-paper rounded-2xl p-6 md:p-8 relative"
            style={{ 
              backgroundImage: `url(${letterPaper})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none"
                 style={{ boxShadow: 'inset 0 0 30px hsl(35 40% 60% / 0.3)' }}
            />
            
            <div className="relative z-10 space-y-5 font-romantic text-lg md:text-xl text-letter-text/90 leading-relaxed">
              <p>
                I wanted to do this today because you have been in my mind.
                This day does not have to be about big words or promises.
              </p>
              
              <p>
                For me, it's just about saying something I have been feeling —
                that I like the way things are when I am around you.
              </p>
              
              <p>
                After meeting you, things feel much better —
                not perfect, not best,
                but life feels lighter and happier with you.
              </p>
              
              <p>
                I appreciate how real you are —
                the way you listen, the calm you bring,
                the ease I feel talking to you.
                Nothing forced, nothing heavy.
              </p>
              
              <p className="text-letter-text font-medium">
                I hope we become each other's support system
                and the key to happiness for the life ahead.
              </p>
              
              <div className="text-right pt-4">
                <span className="text-2xl">💕</span>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Music Content */}
        <TabsContent value="music" className="mt-6">
          <div className="bg-gradient-to-br from-soft-pink to-blush rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-romantic text-primary text-center mb-6">
              Songs for Us 🎵
            </h3>
            
            {/* Song 1 - Tum Ho */}
            <div className="bg-white/70 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose to-deep-rose 
                                flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">Tum Ho</h4>
                  <p className="text-sm text-muted-foreground">calm, steady feeling</p>
                </div>
              </div>
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/7uNnlVit5qDvfOje0pqICF?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            
            {/* Song 2 - Dooron Dooron */}
            <div className="bg-white/70 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose to-deep-rose 
                                flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">Dooron Dooron</h4>
                  <p className="text-sm text-muted-foreground">soft and easy mood</p>
                </div>
              </div>
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/0q5e5KtUOhYQujmhLP0pKd?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            
            <p className="text-center text-sm text-muted-foreground/70 pt-2">
              🎧 Click play to listen together
            </p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Continue button */}
      <div className="text-center pt-4">
        <button
          onClick={onContinue}
          className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg
                     transition-all duration-300 hover:shadow-xl hover:shadow-rose/40 hover:scale-105"
        >
          One More Thing 💫
        </button>
      </div>
    </div>
  );
};

export default NoteSection;
