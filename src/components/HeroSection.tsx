import { Button } from "@/components/ui/button";
import { Mail, Target, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 bg-background overflow-hidden">
      {/* Cinematic Light Effects - Emerging from Below */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary light emerging from bottom - Main cinematographic effect */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[140%] h-[120vh] bg-gradient-radial from-primary/20 via-primary/12 via-primary/8 via-primary/4 to-transparent rounded-full blur-3xl opacity-70 animate-[breathe_8s_ease-in-out_infinite]"></div>
        
        {/* Secondary bottom light layer for depth */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[100%] h-96 bg-gradient-to-t from-primary/25 via-primary/15 via-primary/8 to-transparent rounded-full blur-2xl opacity-50 animate-[breathe_6s_ease-in-out_infinite_1s]"></div>
        
        {/* Lateral emerging lights */}
        <div className="absolute bottom-0 left-0 w-[60%] h-[80vh] bg-gradient-radial from-primary/15 via-primary/8 via-primary/4 to-transparent rounded-full blur-3xl opacity-40 animate-[breathe_10s_ease-in-out_infinite_2s]"></div>
        <div className="absolute bottom-0 right-0 w-[60%] h-[80vh] bg-gradient-radial from-primary/15 via-primary/8 via-primary/4 to-transparent rounded-full blur-3xl opacity-40 animate-[breathe_10s_ease-in-out_infinite_4s]"></div>
        
        {/* Central depth enhancer */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[180%] h-[100vh] bg-gradient-radial from-primary/8 via-primary/4 via-primary/2 to-transparent rounded-full blur-3xl opacity-30 animate-[breathe_12s_ease-in-out_infinite]"></div>
        
        {/* Floating ambient particles */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-primary/12 via-primary/6 to-transparent rounded-full blur-3xl opacity-30 animate-[float_15s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl opacity-25 animate-[float_18s_ease-in-out_infinite_3s]"></div>
        <div className="absolute top-3/4 left-1/4 w-64 h-64 bg-gradient-radial from-primary/8 via-primary/4 to-transparent rounded-full blur-3xl opacity-20 animate-[float_20s_ease-in-out_infinite_6s]"></div>
        
        {/* Top rim illumination */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-2xl opacity-25 animate-[breathe_14s_ease-in-out_infinite_1s]"></div>
        
        {/* Premium highlight overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent via-primary/3 to-transparent opacity-40 animate-[breathe_16s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Logo */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight">
            Blast Company <span className="text-primary">ads</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-16">
          <div className="space-y-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Temos como trabalho<br />
              <span className="text-muted-foreground/80">Aumentar as Vendas da</span><br />
              sua Empresa com{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Tráfego<br />
                de Verdade
              </span>
            </h1>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                Somos uma agência parceira da sua empresa.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Desenvolvemos estratégias <span className="text-foreground font-medium">Vencedoras</span> para<br />
                Aumentar as vendas do seu negócio com o<br />
                <span className="text-primary font-medium">mínimo investimento possível</span>.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Entenda como crescer ainda mais a sua<br />
                empresa por meio das maiores fontes de{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-semibold">
                  Tráfego<br />
                  do mundo
                </span>.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-xl font-semibold rounded-full shadow-glow hover:shadow-glow/60 transition-all duration-300 hover:scale-105 group"
            >
              <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Solicite um Orçamento
            </Button>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 max-w-3xl mx-auto">
          <div className="text-center space-y-6 group">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <Target className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Metodologia Comprovada</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Estratégias testadas e<br />
                validadas no mercado
              </p>
            </div>
          </div>
          
          <div className="text-center space-y-6 group">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <TrendingUp className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Resultados Garantidos</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Decisões baseadas em<br />
                dados e performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}