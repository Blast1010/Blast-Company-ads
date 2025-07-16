import { Button } from "@/components/ui/button";
import { Mail, Crown, Award } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 overflow-hidden text-white">
      {/* Cinematic Ambient Light Effects - Emerging from Bottom */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary ambient emergence - Main cinematic light from bottom */}
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[200%] h-[100vh] 
                        bg-gradient-radial from-primary/30 via-primary/15 via-primary/8 to-transparent 
                        rounded-full animate-ambient-emerge"></div>
        
        {/* Secondary ambient pulse - Continuous breathing effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-[80vh] 
                        bg-gradient-to-t from-primary/20 via-primary/10 via-primary/5 to-transparent 
                        blur-2xl animate-ambient-pulse"></div>
        
        {/* Floating accent lights */}
        <div className="absolute bottom-20 left-[20%] w-32 h-32 
                        bg-primary/20 rounded-full blur-xl animate-cinematic-float"
                        style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-40 right-[15%] w-24 h-24 
                        bg-primary/15 rounded-full blur-lg animate-cinematic-float"
                        style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-10 left-[60%] w-20 h-20 
                        bg-primary/25 rounded-full blur-lg animate-cinematic-float"
                        style={{ animationDelay: '6s' }}></div>
        
        {/* Subtle atmospheric top accent */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-20 
                        bg-gradient-to-b from-primary/5 to-transparent 
                        blur-lg opacity-40 animate-cinematic-breathe"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Logo */}
        <div className="text-center mb-16">
          
          
          {/* User Logo */}
          <div className="mb-4">
            
          </div>
          
          <h2 className="text-2xl md:text-2xl font-bold tracking-tight">
            Blast Company <span className="text-primary">ads</span>
          </h2>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-center">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Transforme Sua Empresa
              </span><br />
              <span className="text-foreground">
                com Anúncios que
              </span> 
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                VENDEM
              </span>
            </h1>
            
            <div className="space-y-8 mt-12">
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-xl md:text-2xl text-center leading-relaxed text-muted-foreground">
                  Pare de desperdiçar dinheiro com anúncios que não convertem. 
                  Nossa metodologia comprovada já gerou mais de <span className="text-primary font-bold">R$ 2.3 milhões</span> em vendas diretas para nossos clientes.
                </p>
                
                <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">300%</div>
                    <div className="text-sm text-muted-foreground">Aumento médio em ROI</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">24h</div>
                    <div className="text-sm text-muted-foreground">Para primeiros resultados</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">R$ 2.3M</div>
                    <div className="text-sm text-muted-foreground">Gerados para clientes</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ProgressiveForm />
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-sm text-red-400 font-semibold">
                  ⏰ Seus concorrentes não vão esperar você decidir
                </p>
                <p className="text-sm text-primary font-medium">
                  🚀 Comece hoje e recupere o tempo perdido
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Credibilidade sem prova social direta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold text-lg">24h</span>
            </div>
            <p className="text-sm text-muted-foreground">Setup inicial</p>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold text-lg">0%</span>
            </div>
            <p className="text-sm text-muted-foreground">Taxa de setup</p>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold text-lg">30</span>
            </div>
            <p className="text-sm text-muted-foreground">Dias para resultados</p>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold text-lg">∞</span>
            </div>
            <p className="text-sm text-muted-foreground">Suporte incluído</p>
          </div>
        </div>
      </div>
    </section>;
}