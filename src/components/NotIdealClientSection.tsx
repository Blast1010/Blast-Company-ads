import { Button } from "@/components/ui/button";
import { X, DollarSign, Clock, MessageCircleX, AlertTriangle, Target } from "lucide-react";
export function NotIdealClientSection() {
  return <section className="py-20 px-4 text-white bg-gradient-to-br from-background via-background/95 to-red-500/10 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-red-500/15 via-red-500/8 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-red-500/10 via-red-500/5 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
      </div>
    </section>;
}