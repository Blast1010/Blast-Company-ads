import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, Shield } from "lucide-react";
import { FormModal } from "@/components/FormModal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-3 h-3 bg-blue-500/40 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-300/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-blue-400/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Ambient light */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 text-white">
            {/* Main Headline */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white block">Seu perpétuo vendendo</span>
                <span className="text-white block">mais com</span>
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent block">
                  tráfego pago focado
                </span>
                <span className="text-white block">em resultados!</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
                Escale seu faturamento com quem é especialista na área e já 
                gerou mais de 20 milhões de reais de faturamento para seus 
                clientes.
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <FormModal>
                <Button 
                  size="xl" 
                  className="px-12 py-6 text-lg font-bold bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-300"
                >
                  Fazer minha aplicação
                </Button>
              </FormModal>
            </div>
          </div>

          {/* Right Content - Images & Notification */}
          <div className="relative hidden lg:flex justify-end items-center">
            {/* Main persons - placeholder for now */}
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-blue-600/20 to-slate-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-sm">Área para imagens dos profissionais</p>
                </div>
              </div>
              
              {/* Success notification */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="bg-white rounded-xl p-4 shadow-2xl border border-gray-200 min-w-[250px]">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-gray-800">HOTMART POCKET</span>
                        <span className="text-xs text-gray-500">01:20</span>
                      </div>
                      <div className="text-sm text-gray-600">Venda realizada</div>
                      <div className="text-sm font-bold text-gray-800">Sua comissão: R$100,00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}