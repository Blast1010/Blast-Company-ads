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

          {/* Problem Description */}
          <div className="max-w-5xl mx-auto animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-muted/50 via-background to-muted/30 border border-border backdrop-blur-sm mb-8">
              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium">
                  Cansou de queimar dinheiro em campanhas que não geram resultados?
                </p>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Enquanto você lê isso, seus concorrentes estão vendendo mais
                </p>
              </div>
            </div>
          </div>

          {/* Solution Description */}
          <div className="max-w-5xl mx-auto animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                  Nossa Abordagem
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium">
                  Somos uma agência <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">parceira estratégica</span> da sua empresa, 
                  desenvolvemos estratégias focadas para aumentar as vendas 
                  do seu negócio com tráfego qualificado.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Estratégia personalizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Acompanhamento detalhado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Relatórios transparentes</span>
                  </div>
                </div>
                
                <p className="text-base md:text-lg text-primary/80 font-medium">
                  Vamos analisar sua situação atual e desenvolver uma estratégia 
                  específica para seu negócio.
                </p>
              </div>
            </div>
          </div>

          {/* TypeForm Style Section */}
          <div className="pt-16 animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 text-primary font-semibold text-sm mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  ANÁLISE GRATUITA
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                  Vamos analisar sua conta
                  <br />
                  <span className="text-primary">gratuitamente</span>
                </h3>
                
                <p className="text-lg text-muted-foreground">
                  Responda algumas perguntas e receba um diagnóstico da sua situação atual
                </p>
              </div>
              
              <ProgressiveForm />
            </div>
          </div>
        </div>

      </div>
    </section>;
}