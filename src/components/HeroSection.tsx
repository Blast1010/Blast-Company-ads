import { Button } from "@/components/ui/button";
import { Mail, Crown, Award, TrendingUp, Users } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
import { useInView } from "@/hooks/useInView";

export function HeroSection() {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 });
  const [subtitleRef, subtitleInView] = useInView({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  return <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 overflow-hidden text-white bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Professional Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Elegant Light Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main professional glow */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50vh] 
                        bg-gradient-radial from-primary/8 via-primary/4 to-transparent 
                        rounded-full blur-3xl opacity-40"></div>
        
        {/* Side accent lights */}
        <div className="absolute top-0 right-0 w-[30%] h-[40%] 
                        bg-gradient-to-bl from-primary/6 to-transparent 
                        blur-2xl opacity-30"></div>
        
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] 
                        bg-gradient-to-tr from-primary/6 to-transparent 
                        blur-2xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-20">
          <div 
            ref={titleRef as any}
            className={`inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-primary/20 bg-background/10 backdrop-blur-sm transition-all duration-700 ${
              titleInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Especialistas em Performance Digital
            </span>
          </div>
          
          <h2 
            className={`text-3xl md:text-4xl font-bold tracking-tight transition-all duration-700 delay-100 ${
              titleInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Blast Company 
            </span>
            <span className="text-primary ml-2">Ads</span>
          </h2>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 
              ref={subtitleRef as any}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-center transition-all duration-700 delay-200 ${
                subtitleInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="block text-foreground/90 mb-2">
                Transformamos
              </span>
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent mb-2">
                Investimento
              </span>
              <span className="block text-foreground/90 text-3xl md:text-4xl lg:text-5xl">
                em <span className="text-primary font-black">Resultados</span>
              </span>
            </h1>
            
            <div 
              className={`space-y-8 transition-all duration-700 delay-400 ${
                subtitleInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-20 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full mx-auto"></div>
              
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                  Estratégias de <span className="text-primary font-semibold">tráfego pago</span> baseadas em dados, 
                  otimizadas para <span className="text-foreground font-semibold">máximo ROI</span> e 
                  <span className="text-primary font-semibold"> resultados mensuráveis</span>.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-medium">ROI Comprovado</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium">+200 Clientes</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Crown className="w-5 h-5 text-primary" />
                    <span className="font-medium">5 Anos de Mercado</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              ref={ctaRef as any}
              className={`flex justify-center transition-all duration-700 delay-600 ${
                ctaInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <ProgressiveForm />
            </div>
          </div>
        </div>

        {/* Professional Trust Indicators */}
        <div 
          ref={statsRef as any}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-2xl mx-auto transition-all duration-700 delay-800 ${
            statsInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Garantia 30 Dias</h3>
                <p className="text-sm text-muted-foreground">Resultados ou reembolso</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">ROI Garantido</h3>
                <p className="text-sm text-muted-foreground">Performance comprovada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}