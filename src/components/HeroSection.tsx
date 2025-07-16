import { Button } from "@/components/ui/button";
import { Mail, Target, TrendingUp } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
import heroTeamImage from "@/assets/hero-team-success.jpg";
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 bg-background overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-2xl font-bold tracking-tight">
            Blast Company <span className="text-primary">ads</span>
          </h2>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-left">
              Temos como trabalho<br />
              <span className="text-muted-foreground/80">Aumentar as Vendas da</span><br />
              sua Empresa com{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Tráfego<br />
                de Verdade
              </span>
            </h1>
            
            <div className="space-y-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              
              <div className="space-y-4 text-left">
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                  Somos uma agência parceira da sua empresa.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
                  Desenvolvemos estratégias <span className="text-foreground font-medium">Vencedoras</span> para 
                  aumentar as vendas do seu negócio com o{" "}
                  <span className="text-primary font-medium">mínimo investimento possível</span>.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
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

          {/* Right Column - Logo with Cinematic Animation */}
          <div className="relative flex items-center justify-center">
            <div className="relative group">
              {/* Main Logo Container with Cinematic Effects */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
                
                {/* Logo Image with Cinematic Animation */}
                <div className="relative w-full h-full bg-gradient-to-br from-background/10 to-background/30 backdrop-blur-sm border border-border/20 rounded-3xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-700">
                  <img 
                    src="/lovable-uploads/649405e1-63b9-4e91-984d-f03230fd7ec9.png" 
                    alt="Blast Company Ads Logo" 
                    className="w-48 h-48 lg:w-56 lg:h-56 object-contain animate-fade-in group-hover:scale-110 transition-all duration-1000 filter drop-shadow-2xl"
                  />
                  
                  {/* Cinematic Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-background/10 opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                </div>
                
                {/* Floating Particles Effect */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary/60 rounded-full animate-pulse opacity-70"></div>
                <div className="absolute top-8 right-6 w-1 h-1 bg-accent/80 rounded-full animate-pulse opacity-50 animation-delay-300"></div>
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse opacity-60 animation-delay-700"></div>
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-accent/60 rounded-full animate-pulse opacity-80 animation-delay-500"></div>
                
                {/* Premium Light Streaks */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animation-delay-200"></div>
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animation-delay-500"></div>
              </div>
              
              {/* Floating Badge - Company Name */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary/90 backdrop-blur-sm text-primary-foreground px-6 py-2 rounded-full shadow-glow animate-fade-in animation-delay-500">
                <span className="text-sm font-bold tracking-wide">Blast Company</span>
              </div>
              
              {/* Bottom Stats with Animation */}
              <div className="absolute -bottom-6 right-4 bg-card/95 backdrop-blur-sm border border-border/50 p-4 rounded-xl shadow-lg animate-fade-in animation-delay-700">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="text-center">
                    <div className="text-primary font-bold text-lg animate-scale-in">+300%</div>
                    <div className="text-muted-foreground">ROI Médio</div>
                  </div>
                  <div className="w-px h-8 bg-border"></div>
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg animate-scale-in animation-delay-200">100+</div>
                    <div className="text-muted-foreground">Clientes</div>
                  </div>
                </div>
              </div>
              
              {/* Cinematic Halo Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-radial from-transparent via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none scale-110"></div>
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
              <h3 className="text-lg font-semibold text-foreground mb-2">Metodologia Comprovada</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
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
              <h3 className="text-lg font-semibold text-foreground mb-2">Resultados Garantidos</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Decisões baseadas em dados e performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}