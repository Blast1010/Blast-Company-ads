import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, Shield } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
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
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-extralight text-left">
              Blast Company <span className="text-primary">ads</span>
            </h2>
          </div>
        </div>

        {/* Main Hero Content - Completamente responsivo */}
        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Main Headline - Responsivo */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in px-2" style={{
          animationDelay: '0.2s'
        }}>
            <h1 className="text-4xl lg:text-6xl leading-[1.1] tracking-tight md:text-5xl font-bold text-center">
              <span className="text-foreground block mb-2 sm:mb-0 sm:inline text-center">Nosso trabalho é impulsionar o crescimento e  aumentar</span>
              <br className="hidden sm:block" />
              <span className="text-foreground block mb-2 sm:mb-0 sm:inline">as vendas da sua empresa  com</span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent relative block sm:inline">
                Tráfego de verdade
                <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full"></div>
              </span>
            </h1>
          </div>

          {/* Problem Description - Responsivo */}
          <div className="max-w-5xl mx-auto animate-fade-in px-2" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-muted/50 via-background to-muted/30 border border-border backdrop-blur-sm mb-6 sm:mb-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <p className="text-xl md:text-2xl leading-relaxed font-medium text-red-500 text-center">
                  Cansou de queimar dinheiro em campanhas que não geram resultados?
                </p>
                <p className="text-lg md:text-xl text-muted-foreground text-center">Enquanto você lê isso, seus concorrentes estão vendendo mais — e pagando menos por isso.

Eles entenderam que tráfego pago não é sobre gastar, e sim investir com estratégia.</p>
              </div>
            </div>
          </div>

          {/* Solution Description - Responsivo */}
          <div className="max-w-5xl mx-auto animate-fade-in px-2" style={{
          animationDelay: '0.4s'
        }}>
            <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 backdrop-blur-sm">
              <div className="text-center space-y-4 sm:space-y-6">
                
                <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium text-left">
                  Somos uma agência <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">parceira estratégica</span> da sua empresa, 
                  criando estratégias vencedoras e cuidando do seu investimento como se o dinheiro fosse nosso!
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-base lg:text-lg text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Estratégia personalizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Acompanhamento detalhado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Relatórios transparentes</span>
                  </div>
                </div>
                
                <p className="text-base md:text-lg text-primary/80 font-medium text-left">
                  Vamos analisar sua situação atual e desenvolver uma estratégia 
                  específica para seu negócio.
                </p>
              </div>
            </div>
          </div>

          {/* TypeForm Style Section - Responsivo */}
          <div className="pt-12 sm:pt-16 animate-fade-in px-2" style={{
          animationDelay: '0.8s'
        }}>
            <div className="max-w-2xl mx-auto">
              
              
              <ProgressiveForm />
            </div>
          </div>
        </div>
      </div>
    </section>;
}