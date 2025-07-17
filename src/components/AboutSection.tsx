import { Lightbulb, Rocket, Heart, Star } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden py-24">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0">
        {/* Primary cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-70"></div>
        
        {/* Floating light orbs */}
        <div className="absolute top-32 left-20 w-64 h-64 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-40 right-32 w-80 h-80 bg-gradient-radial from-accent/25 via-accent/8 to-transparent rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: "4s" }}></div>
        
        {/* Cinematic particles */}
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-primary/60 rounded-full animate-bounce opacity-80" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent/50 rounded-full animate-bounce opacity-60" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-primary/40 rounded-full animate-pulse opacity-70" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content Side */}
          <div className="space-y-10">
            {/* Chapter Title */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Nossa História</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                A jornada que mudou{" "}
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  o marketing digital.
                </span>
              </h2>
            </div>
            
            {/* Story Timeline */}
            <div className="space-y-8">
              {/* Chapter 1 */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-bold text-foreground">O Início da Revolução</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Tudo começou quando nossos fundadores perceberam que <span className="text-accent font-semibold">95% das empresas</span> 
                    estavam desperdiçando dinheiro em campanhas mal otimizadas. Era hora de mudar isso.
                  </p>
                </div>
              </div>

              {/* Chapter 2 */}
              <div className="relative pl-8 border-l-2 border-accent/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">A Metodologia Única</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Desenvolvemos um sistema proprietário que combina <span className="text-primary font-semibold">inteligência artificial</span>, 
                    análise comportamental e otimização contínua para garantir que cada real investido gere o máximo retorno.
                  </p>
                </div>
              </div>

              {/* Chapter 3 */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-bold text-foreground">Paixão por Resultados</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Não somos apenas uma agência, somos <span className="text-accent font-semibold">parceiros estratégicos</span> 
                    que vivem e respiram o sucesso dos nossos clientes. Cada vitória sua é uma vitória nossa.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border border-primary/20 backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Nossa Missão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transformar cada real investido em marketing digital numa máquina de gerar vendas, 
                  combinando <span className="text-primary font-semibold">tecnologia de ponta</span> 
                  com estratégias humanizadas e foco total em performance.
                </p>
              </div>
            </div>
          </div>

          {/* Cinematic Visual Side */}
          <div className="relative">
            {/* Multiple layered backgrounds for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-primary/30 to-accent/40 rounded-3xl blur-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-2xl transform -rotate-2"></div>
            
            {/* Main container with glass effect */}
            <div className="relative bg-gradient-to-br from-card/40 via-card/60 to-card/40 backdrop-blur-xl border-2 border-primary/30 rounded-3xl p-8 overflow-hidden shadow-2xl">
              {/* Floating elements for dynamism */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-6 w-2 h-2 bg-accent rounded-full animate-bounce"></div>
              
              {/* Command Center Interface */}
              <div className="space-y-8">
                {/* Header with status indicators */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                    <span className="text-sm font-bold text-foreground">SISTEMA ATIVO</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    <span className="text-primary">BLAST_OS</span> v2.0.1
                  </div>
                </div>
                
                {/* Advanced Dashboard Grid */}
                <div className="space-y-6">
                  {/* Platform Status */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                      <div className="relative bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 text-center">
                        <div className="text-xs text-primary font-bold mb-2">META INTELLIGENCE</div>
                        <div className="text-2xl font-bold text-foreground">AI</div>
                        <div className="w-full h-1 bg-primary/20 rounded-full mt-2">
                          <div className="w-4/5 h-full bg-primary rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                      <div className="relative bg-card/60 backdrop-blur-sm border border-accent/30 rounded-2xl p-4 text-center">
                        <div className="text-xs text-accent font-bold mb-2">GOOGLE NEURAL</div>
                        <div className="text-2xl font-bold text-foreground">ML</div>
                        <div className="w-full h-1 bg-accent/20 rounded-full mt-2">
                          <div className="w-5/6 h-full bg-accent rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Real-time Performance Graph */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-sm"></div>
                    <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold text-foreground">PERFORMANCE REAL-TIME</span>
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                        </div>
                      </div>
                      
                      {/* Animated performance bars */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">ROI OPTIMIZATION</span>
                          <span className="text-xs font-bold text-primary">+347%</span>
                        </div>
                        <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-pulse"></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">CONVERSION RATE</span>
                          <span className="text-xs font-bold text-accent">+198%</span>
                        </div>
                        <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-gradient-to-r from-accent via-primary to-accent rounded-full animate-pulse"></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">COST EFFICIENCY</span>
                          <span className="text-xs font-bold text-green-400">+284%</span>
                        </div>
                        <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
                          <div className="w-5/6 h-full bg-gradient-to-r from-green-400 via-primary to-green-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mission Control Status */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">CAMPANHAS</div>
                      <div className="text-lg font-bold text-foreground">24/7</div>
                    </div>
                    <div className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">UPTIME</div>
                      <div className="text-lg font-bold text-green-400">99.9%</div>
                    </div>
                    <div className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">ALERTS</div>
                      <div className="text-lg font-bold text-primary">ZERO</div>
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