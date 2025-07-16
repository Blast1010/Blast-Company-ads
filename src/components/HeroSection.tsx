import { Button } from "@/components/ui/button";
import { Mail, Target, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      
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