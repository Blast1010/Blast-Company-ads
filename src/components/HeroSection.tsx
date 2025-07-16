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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-center">
              <span className="text-foreground">
                Maximize o ROI dos seus
              </span><br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Anúncios Digitais
              </span>
            </h1>
            
            <div className="space-y-10 mt-12">
              <div className="max-w-3xl mx-auto space-y-8">
                <p className="text-lg md:text-xl text-center leading-relaxed text-muted-foreground font-medium">
                  Estratégias baseadas em dados para maximizar conversões e reduzir custo de aquisição. 
                  Metodologia comprovada que já gerou <span className="text-primary font-semibold">R$ 2.3 milhões</span> em retorno para empresas parceiras.
                </p>
                
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
                
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-3 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/10">
                    <div className="text-2xl font-bold text-primary">+280%</div>
                    <div className="text-sm text-muted-foreground">Aumento médio em ROAS</div>
                  </div>
                  <div className="space-y-3 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/10">
                    <div className="text-2xl font-bold text-primary">-45%</div>
                    <div className="text-sm text-muted-foreground">Redução no CAC</div>
                  </div>
                  <div className="space-y-3 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/10">
                    <div className="text-2xl font-bold text-primary">R$ 2.3M</div>
                    <div className="text-sm text-muted-foreground">Retorno gerado</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ProgressiveForm />
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground font-medium">
                  Análise gratuita da sua conta de anúncios
                </p>
                <p className="text-xs text-primary">
                  Identificamos oportunidades de otimização em 24h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
              <span className="text-primary font-semibold text-sm">24h</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Implementação rápida</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
              <span className="text-primary font-semibold text-sm">100%</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Transparência total</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
              <span className="text-primary font-semibold text-sm">Data</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Decisões baseadas em dados</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
              <span className="text-primary font-semibold text-sm">24/7</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Monitoramento contínuo</p>
          </div>
        </div>
      </div>
    </section>;
}