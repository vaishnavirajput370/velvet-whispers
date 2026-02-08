import FloatingHearts from "@/components/FloatingHearts";
import ValentineProposal from "@/components/ValentineProposal";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen romantic-gradient relative overflow-hidden">
      <FloatingHearts />
      
      <main className="relative z-10 pt-12">
        {/* Main Proposal Section */}
        <ValentineProposal />
        
        {/* Footer */}
        <footer className="py-12 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground/60">
            <span className="text-sm font-light">Made with</span>
            <Heart className="w-4 h-4 text-rose fill-rose/50" />
            <span className="text-sm font-light">for you</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
