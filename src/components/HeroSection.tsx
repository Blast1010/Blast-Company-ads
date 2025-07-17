import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, Shield } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 opacity-60"></div>
        
        {/* Animated light orbs */}
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-2xl animate-pulse opacity-50" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-40 right-[20%] w-4 h-4 bg-primary/40 rounded-full animate-bounce opacity-60" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-60 left-[25%] w-3 h-3 bg-primary/30 rounded-full animate-bounce opacity-40" style={{
        animationDelay: '3s'
      }}></div>
        <div className="absolute top-80 left-[60%] w-2 h-2 bg-primary/50 rounded-full animate-bounce opacity-80" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Logo & Brand */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Blast Company <span className="text-primary">ads</span>
            </h2>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-6 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">
                Temos como trabalho aumentar
              </span>
              <br />
              <span className="text-foreground">
                as vendas da empresa com
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent relative">
                Tráfego de verdade
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full"></div>
              </span>
            </h1>
          </div>
          
          {/* Description */}
          <div className="max-w-4xl mx-auto animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground font-medium">
              Somos uma agência <span className="text-primary font-semibold">parceira da sua empresa</span>, desenvolvemos estratégias vencedoras para aumentar as vendas do seu negócio com o mínimo de investimento possível.
            </p>
            <p className="text-base md:text-lg mt-4 text-muted-foreground/80">
              Entenda como crescer ainda mais a sua empresa com <span className="text-primary font-semibold">tráfego de verdade</span>.
            </p>
          </div>

          {/* CTA Section */}
          <div className="pt-12 animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Análise <span className="text-primary">Gratuita</span> da sua conta de anúncios
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Identificamos oportunidades de otimização em 24h
              </p>
              
              <ProgressiveForm />
              
              <div className="flex justify-center gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Análise em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Resultados Garantidos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>;
}