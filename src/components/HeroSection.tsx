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
              <span className="text-2xl md:text-3xl lg:text-4xl text-red-400 font-semibold uppercase tracking-wide">Enquanto você hesita,</span><br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                SEUS CONCORRENTES
              </span><br />
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                DOMINAM O MERCADO
              </span>
            </h1>
            
            <div className="space-y-8 mt-12">
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-2xl md:text-3xl font-bold text-center leading-tight">
                  <span className="text-red-400">Eles faturam R$ 50.000+ por mês</span><br/>
                  <span className="text-foreground">enquanto você ainda "pensa" em começar</span>
                </p>
                
                <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
                
                <p className="text-xl md:text-2xl text-center leading-relaxed text-muted-foreground">
                  Cada dia que passa sem uma estratégia de anúncios eficiente é dinheiro 
                  <span className="text-red-400 font-bold"> PERDIDO PARA SEMPRE</span>
                </p>
                
                <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8">
                  <p className="text-lg md:text-xl text-center leading-relaxed">
                    <span className="text-primary font-bold text-2xl">"Mas e se eu te disser</span><br/>
                    <span className="text-foreground">que você pode reverter essa situação em apenas</span>
                    <span className="text-primary font-bold text-2xl"> 30 dias?"</span>
                  </p>
                </div>
                
                <p className="text-base md:text-lg text-center text-muted-foreground leading-relaxed">
                  Pare de ser espectador do sucesso dos outros. <span className="text-primary font-bold">É hora de ser o protagonista</span> 
                  da sua própria história de sucesso.
                </p>
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