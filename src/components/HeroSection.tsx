import { Button } from "@/components/ui/button";
import { Mail, Target, TrendingUp } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
import heroTeamImage from "@/assets/hero-team-success.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 bg-black overflow-hidden">
      {/* Efeito de luz azul turquesa */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[140%] h-[120vh] bg-gradient-radial from-primary/25 via-primary/15 via-primary/8 to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Logo */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-2xl font-bold tracking-tight text-white">
            Blast Company <span className="text-primary">ads</span>
          </h2>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-left text-white">
              Temos como trabalho<br />
              <span className="text-white/70">Aumentar as Vendas da</span><br />
              sua Empresa com{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Tráfego<br />
                de Verdade
              </span>
            </h1>
            
            <div className="space-y-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              
              <div className="space-y-4 text-left">
                <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                  Somos uma agência parceira da sua empresa.
                </p>
                
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Desenvolvemos estratégias <span className="text-white font-medium">Vencedoras</span> para 
                  aumentar as vendas do seu negócio com o{" "}
                  <span className="text-primary font-medium">mínimo investimento possível</span>.
                </p>
                
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Entenda como crescer ainda mais a sua empresa por meio das maiores fontes de{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-semibold">
                    Tráfego do mundo
                  </span>.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <ProgressiveForm />
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={heroTeamImage} 
                alt="Equipe de sucesso colaborando em estratégias de marketing digital"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-accent/15"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg shadow-glow">
                <span className="text-sm font-bold">Resultados Reais</span>
              </div>
              
              {/* Bottom Stats */}
              <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm border border-border/50 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="text-center">
                    <div className="text-primary font-bold text-lg">+300%</div>
                    <div className="text-muted-foreground">ROI Médio</div>
                  </div>
                  <div className="w-px h-8 bg-border"></div>
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg">100+</div>
                    <div className="text-muted-foreground">Clientes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="flex items-center space-x-6 text-left group">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">Metodologia Comprovada</h3>
              <p className="text-white/70 font-medium leading-relaxed">
                Estratégias testadas e validadas no mercado
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-left group">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">Resultados Garantidos</h3>
              <p className="text-white/70 font-medium leading-relaxed">
                Decisões baseadas em dados e performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}