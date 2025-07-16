import { TrendingUp, Target, Users } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export function AboutSection() {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 });
  const [contentRef, contentInView] = useInView({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [mockupRef, mockupInView] = useInView({ threshold: 0.2 });
  return (
    <section className="relative min-h-screen bg-background overflow-hidden py-24">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 
                ref={titleRef as any}
                className={`text-4xl lg:text-5xl font-bold text-foreground leading-tight transition-all duration-700 ${
                  titleInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Por trás dos números,{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  pessoas que pensam grande.
                </span>
              </h2>
              
              <div 
                ref={contentRef as any}
                className={`space-y-4 text-muted-foreground text-lg leading-relaxed transition-all duration-700 delay-200 ${
                  contentInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p>
                  A <span className="text-accent font-semibold">Blast Company Ads</span> nasceu com um propósito claro: 
                  ajudar empresas a crescerem com inteligência, dados e estratégias reais.
                </p>
                <p>
                  Somos especialistas em tráfego pago e performance digital, apaixonados por resultados 
                  e obcecados por conversão.
                </p>
                <p>
                  Cada campanha que criamos é única — porque cada negócio é único. Trabalhamos lado a lado 
                  com nossos clientes, entendendo suas metas, ajustando estratégias e otimizando cada centavo 
                  investido em mídia paga.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div 
              ref={statsRef as any}
              className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${
                statsInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center group-hover:transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">+R$1M</div>
                  <div className="text-sm text-muted-foreground">Investidos com ROI positivo</div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center group-hover:transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">5 Anos</div>
                  <div className="text-sm text-muted-foreground">De experiência em performance</div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center group-hover:transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">+200</div>
                  <div className="text-sm text-muted-foreground">Campanhas otimizadas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div 
            ref={mockupRef as any}
            className={`relative transition-all duration-700 delay-600 ${
              mockupInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 via-primary/20 to-accent/30 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 overflow-hidden">
              {/* Tech workspace mockup */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 h-6 bg-muted/50 rounded-md"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-16 bg-accent/20 rounded-lg flex items-center justify-center">
                      <div className="text-xs text-accent font-semibold">META ADS</div>
                    </div>
                    <div className="h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <div className="text-xs text-primary font-semibold">GOOGLE ADS</div>
                    </div>
                    <div className="h-16 bg-accent/20 rounded-lg flex items-center justify-center">
                      <div className="text-xs text-accent font-semibold">ANALYTICS</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-accent/40 to-primary/40 rounded-full"></div>
                    <div className="h-4 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full w-4/5"></div>
                    <div className="h-4 bg-gradient-to-r from-accent/40 to-primary/40 rounded-full w-3/5"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-card/50 rounded-lg border border-border/30 p-3">
                      <div className="text-xs text-muted-foreground mb-2">ROI Performance</div>
                      <div className="text-xl font-bold text-accent">+247%</div>
                    </div>
                    <div className="h-24 bg-card/50 rounded-lg border border-border/30 p-3">
                      <div className="text-xs text-muted-foreground mb-2">Conversions</div>
                      <div className="text-xl font-bold text-primary">1,856</div>
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