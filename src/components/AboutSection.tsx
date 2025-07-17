import { Lightbulb, Rocket, Heart, Star, Zap, Target, Award, Cpu } from "lucide-react";
import { Scene3D } from "./Scene3D";
import { Suspense } from "react";

export function AboutSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background/98 to-muted/5 overflow-hidden py-32">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0">
        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-noise"></div>
        
        {/* Professional gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5"></div>
        
        {/* Cinematic light rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rotate-12 opacity-40"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-accent/15 via-accent/3 to-transparent -rotate-12 opacity-30"></div>
        
        {/* Floating cinematic orbs */}
        <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-radial from-primary/12 via-primary/4 to-transparent rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-40 right-32 w-96 h-96 bg-gradient-radial from-accent/10 via-accent/3 to-transparent rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-radial from-primary/8 via-primary/2 to-transparent rounded-full blur-2xl animate-pulse opacity-40" style={{ animationDelay: "6s" }}></div>
        
        {/* Cinematic particles */}
        <div className="absolute top-20 right-1/4 w-1 h-1 bg-primary/60 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent/50 rounded-full animate-pulse opacity-60" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-pulse opacity-70" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid xl:grid-cols-2 gap-20 items-center">
          {/* Enhanced Story Content */}
          <div className="space-y-12">
            {/* Cinematic Header */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 rounded-full border-2 border-primary/30 backdrop-blur-sm">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse shadow-lg"></div>
                <Star className="w-5 h-5 text-primary" />
                <span className="text-primary font-bold text-sm tracking-wider uppercase">Nossa História</span>
                <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse shadow-lg"></div>
              </div>
              
              <h2 className="text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                A jornada que{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    revolucionou
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent rounded-full opacity-60"></div>
                </span>
                <br />
                o marketing digital.
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                Uma história de inovação, tecnologia e resultados que transformaram empresas em todo o Brasil.
              </p>
            </div>
            
            {/* Enhanced Story Timeline */}
            <div className="space-y-10">
              {/* Chapter 1 - Enhanced */}
              <div className="relative pl-12 border-l-4 border-gradient-to-b from-primary via-primary/50 to-primary/20">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-primary to-primary/80 rounded-full animate-pulse shadow-xl border-2 border-background"></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl">
                      <Lightbulb className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">O Início da Revolução</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Tudo começou quando nossos fundadores perceberam que <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded">95% das empresas</span> 
                    estavam desperdiçando dinheiro em campanhas mal otimizadas. Era hora de mudar isso para sempre.
                  </p>
                </div>
              </div>

              {/* Chapter 2 - Enhanced */}
              <div className="relative pl-12 border-l-4 border-gradient-to-b from-accent via-accent/50 to-accent/20">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-accent to-accent/80 rounded-full animate-pulse shadow-xl border-2 border-background" style={{ animationDelay: "1s" }}></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Tecnologia Proprietária</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Desenvolvemos um ecossistema único que combina <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">inteligência artificial</span>, 
                    análise comportamental avançada e otimização contínua para garantir ROI máximo.
                  </p>
                </div>
              </div>

              {/* Chapter 3 - Enhanced */}
              <div className="relative pl-12 border-l-4 border-gradient-to-b from-primary via-primary/50 to-primary/20">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-primary to-primary/80 rounded-full animate-pulse shadow-xl border-2 border-background" style={{ animationDelay: "2s" }}></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Paixão por Resultados</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Mais que uma agência, somos <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded">parceiros estratégicos</span> 
                    que vivem e respiram o sucesso dos nossos clientes. Cada vitória sua é uma vitória nossa.
                  </p>
                </div>
              </div>

              {/* Chapter 4 - New */}
              <div className="relative pl-12 border-l-4 border-gradient-to-b from-accent via-accent/50 to-accent/20">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-accent to-accent/80 rounded-full animate-pulse shadow-xl border-2 border-background" style={{ animationDelay: "3s" }}></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Excelência Reconhecida</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Nossa metodologia inovadora se tornou referência no mercado, transformando a forma como 
                    <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded ml-1">empresas pensam marketing digital</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Mission Statement */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card/40 via-card/60 to-card/40 border-2 border-primary/30 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Accent border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-accent/40 rounded-full animate-bounce"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg">
                    <Target className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Nossa Missão</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transformar cada real investido em marketing digital numa máquina de gerar vendas, 
                  combinando <span className="text-primary font-bold">tecnologia de ponta</span> 
                  com estratégias humanizadas e foco absoluto em performance que supera expectativas.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced 3D Cinematic Visual */}
          <div className="relative">
            {/* Multiple depth layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 via-primary/20 to-accent/30 rounded-3xl blur-3xl transform rotate-6 scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/25 via-accent/15 to-primary/25 rounded-3xl blur-2xl transform -rotate-3 scale-105"></div>
            
            {/* Main cinematic container */}
            <div className="relative bg-gradient-to-br from-card/30 via-card/50 to-card/30 backdrop-blur-2xl border-2 border-primary/40 rounded-3xl overflow-hidden shadow-3xl">
              {/* Top accent bar */}
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
              
              {/* 3D Scene Container */}
              <div className="p-8">
                <Suspense fallback={
                  <div className="w-full h-96 bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                }>
                  <Scene3D />
                </Suspense>
              </div>
              
              {/* Enhanced Command Center Interface */}
              <div className="p-8 bg-gradient-to-t from-card/60 to-transparent">
                <div className="space-y-6">
                  {/* Status Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                        <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-30"></div>
                      </div>
                      <span className="text-sm font-bold text-foreground tracking-wider">SISTEMA NEURAL ATIVO</span>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono bg-muted/20 px-3 py-1 rounded-full">
                      <span className="text-primary">INPULSO_AI</span> v3.0.2
                    </div>
                  </div>
                  
                  {/* Advanced Neural Network Status */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                      <div className="relative bg-card/60 backdrop-blur-sm border border-primary/40 rounded-2xl p-6 text-center">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <Cpu className="w-4 h-4 text-primary" />
                          <div className="text-xs text-primary font-bold">NEURAL ENGINE</div>
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-2">AI</div>
                        <div className="w-full h-2 bg-primary/20 rounded-full overflow-hidden">
                          <div className="w-5/6 h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                      <div className="relative bg-card/60 backdrop-blur-sm border border-accent/40 rounded-2xl p-6 text-center">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <Zap className="w-4 h-4 text-accent" />
                          <div className="text-xs text-accent font-bold">QUANTUM PROC</div>
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-2">ML</div>
                        <div className="w-full h-2 bg-accent/20 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Real-time Performance Dashboard */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl blur-sm"></div>
                    <div className="relative bg-card/40 backdrop-blur-sm border border-border/60 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-bold text-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          PERFORMANCE NEURAL
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-1 h-1 bg-green-400 rounded-full animate-pulse" 
                              style={{ animationDelay: `${i * 0.3}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Enhanced performance metrics */}
                      <div className="space-y-4">
                        {[
                          { label: "ROI OPTIMIZATION", value: "+427%", color: "primary" },
                          { label: "NEURAL CONVERSION", value: "+298%", color: "accent" },
                          { label: "COST EFFICIENCY", value: "+384%", color: "green-400" }
                        ].map((metric, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground font-mono">{metric.label}</span>
                              <span className={`text-xs font-bold text-${metric.color}`}>{metric.value}</span>
                            </div>
                            <div className="w-full h-2 bg-muted/20 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r from-${metric.color} via-primary to-${metric.color} rounded-full animate-pulse`}
                                style={{ width: `${85 + index * 5}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Mission Control Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "NEURAL NODES", value: "∞", color: "primary" },
                      { label: "UPTIME", value: "99.9%", color: "green-400" },
                      { label: "ALERTS", value: "ZERO", color: "accent" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-4 text-center">
                        <div className="text-xs text-muted-foreground mb-2 font-mono">{stat.label}</div>
                        <div className={`text-lg font-bold text-${stat.color}`}>{stat.value}</div>
                      </div>
                    ))}
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