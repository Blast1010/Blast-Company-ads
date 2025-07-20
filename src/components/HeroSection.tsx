import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, Shield } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
import { FormModal } from "@/components/FormModal";
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Enhanced Background Effects - Responsivos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 opacity-60"></div>
        
        {/* Animated light orbs - Responsivos */}
        <div className="absolute top-10 sm:top-20 left-[5%] sm:left-[10%] w-48 sm:w-96 h-48 sm:h-96 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-[10%] sm:right-[15%] w-40 sm:w-80 h-40 sm:h-80 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-xl sm:blur-2xl animate-pulse opacity-50" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Floating elements - Ajustados para mobile */}
        <div className="absolute top-20 sm:top-40 right-[15%] sm:right-[20%] w-2 sm:w-4 h-2 sm:h-4 bg-primary/40 rounded-full animate-bounce opacity-60" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-40 sm:bottom-60 left-[20%] sm:left-[25%] w-1.5 sm:w-3 h-1.5 sm:h-3 bg-primary/30 rounded-full animate-bounce opacity-40" style={{
        animationDelay: '3s'
      }}></div>
        <div className="absolute top-60 sm:top-80 left-[50%] sm:left-[60%] w-1 sm:w-2 h-1 sm:h-2 bg-primary/50 rounded-full animate-bounce opacity-80" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        {/* Logo & Brand - Responsivo */}
        

        {/* Main Hero Content - Completamente responsivo */}
        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Main Headline - Similar to V4 Company */}
          <div className="space-y-6 animate-fade-in px-2" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center text-white">
              Tenha Um Time Feito{" "}
              <span className="text-primary">sob medida</span> Para 
              Atender Seu Negócio
            </h1>
          </div>

          {/* Call to Action Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <FormModal>
              <Button className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-4 text-lg rounded uppercase tracking-wide">
                QUERO MAIS INFORMAÇÕES
              </Button>
            </FormModal>
          </div>

          {/* Social Proof */}
          <div className="animate-fade-in flex items-center justify-center space-x-4 text-white" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gray-600 rounded"></div>
                ))}
              </div>
              <span className="text-primary font-bold">+ de 20.000</span>
              <span className="text-gray-300">empresas</span>
            </div>
            <span className="text-gray-400">já tomaram essa decisão</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div>
              <div className="text-3xl font-bold text-primary">+16 Bi</div>
              <div className="text-gray-400 text-sm">Receita gerada para nossos clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">+12</div>
              <div className="text-gray-400 text-sm">Anos de mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}