
import { Lightbulb, Rocket, Heart, Star, Zap, Target, Award, Cpu } from "lucide-react";
import { Scene3D } from "./Scene3D";
import { Suspense } from "react";

export function AboutSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background/98 to-muted/5 overflow-hidden py-32">
      {/* Enhanced Cinematic Background Effects */}
      <div className="absolute inset-0">
        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-noise"></div>
        
        {/* Professional gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-accent/6"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/4 via-transparent to-primary/4"></div>
        
        {/* Cinematic light rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/15 via-primary/3 to-transparent rotate-12 opacity-50"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-accent/12 via-accent/2 to-transparent -rotate-12 opacity-40"></div>
        
        {/* Professional floating orbs */}
        <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-radial from-primary/8 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 right-32 w-[450px] h-[450px] bg-gradient-radial from-accent/6 via-accent/2 to-transparent rounded-full blur-3xl animate-pulse opacity-35" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-radial from-primary/5 via-primary/1 to-transparent rounded-full blur-2xl animate-pulse opacity-30" style={{ animationDelay: "6s" }}></div>
        
        {/* Subtle particles */}
        <div className="absolute top-20 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent/35 rounded-full animate-pulse opacity-45" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary/30 rounded-full animate-pulse opacity-50" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid xl:grid-cols-2 gap-24 items-center">
          {/* Enhanced Professional Story Content */}
          <div className="space-y-12">
            {/* Professional Header */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-primary/8 to-primary/10 rounded-full border border-primary/20 backdrop-blur-sm shadow-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse shadow-md"></div>
                <Star className="w-5 h-5 text-primary" />
                <span className="text-primary font-bold text-sm tracking-wider uppercase">Nossa História</span>
                <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse shadow-md"></div>
              </div>
              
              <h2 className="text-5xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                A jornada que{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    revolucionou
                  </span>
                  <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent rounded-full opacity-70"></div>
                </span>
                <br />
                o marketing digital.
              </h2>
              
              <p className="text-xl xl:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Uma história de inovação, tecnologia e resultados que transformaram empresas em todo o Brasil.
              </p>
            </div>
            
            {/* Enhanced Professional Timeline */}
            <div className="space-y-10">
              {/* Chapter 1 */}
              <div className="relative pl-16 border-l-2 border-gradient-to-b from-primary via-primary/40 to-primary/10">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-br from-primary to-primary/90 rounded-full animate-pulse shadow-2xl border-4 border-background"></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-accent/15 to-accent/8 rounded-2xl border border-accent/20 shadow-lg">
                      <Lightbulb className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">O Início da Revolução</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Tudo começou quando nossos fundadores perceberam que <span className="text-accent font-semibold bg-accent/8 px-3 py-1 rounded-lg border border-accent/20">95% das empresas</span> 
                    estavam desperdiçando dinheiro em campanhas mal otimizadas. Era hora de mudar isso para sempre.
                  </p>
                </div>
              </div>

              {/* Chapter 2 */}
              <div className="relative pl-16 border-l-2 border-gradient-to-b from-accent via-accent/40 to-accent/10">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-br from-accent to-accent/90 rounded-full animate-pulse shadow-2xl border-4 border-background" style={{ animationDelay: "1s" }}></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/15 to-primary/8 rounded-2xl border border-primary/20 shadow-lg">
                      <Rocket className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">Tecnologia Proprietária</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Desenvolvemos um ecossistema único que combina <span className="text-primary font-semibold bg-primary/8 px-3 py-1 rounded-lg border border-primary/20">inteligência artificial</span>, 
                    análise comportamental avançada e otimização contínua para garantir ROI máximo.
                  </p>
                </div>
              </div>

              {/* Chapter 3 */}
              <div className="relative pl-16 border-l-2 border-gradient-to-b from-primary via-primary/40 to-primary/10">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-br from-primary to-primary/90 rounded-full animate-pulse shadow-2xl border-4 border-background" style={{ animationDelay: "2s" }}></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-accent/15 to-accent/8 rounded-2xl border border-accent/20 shadow-lg">
                      <Heart className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">Paixão por Resultados</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Mais que uma agência, somos <span className="text-accent font-semibold bg-accent/8 px-3 py-1 rounded-lg border border-accent/20">parceiros estratégicos</span> 
                    que vivem e respiram o sucesso dos nossos clientes. Cada vitória sua é uma vitória nossa.
                  </p>
                </div>
              </div>

              {/* Chapter 4 */}
              <div className="relative pl-16 border-l-2 border-gradient-to-b from-accent via-accent/40 to-accent/10">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-br from-accent to-accent/90 rounded-full animate-pulse shadow-2xl border-4 border-background" style={{ animationDelay: "3s" }}></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/15 to-primary/8 rounded-2xl border border-primary/20 shadow-lg">
                      <Award className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">Excelência Reconhecida</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Nossa metodologia inovadora se tornou referência no mercado, transformando a forma como 
                    <span className="text-primary font-semibold bg-primary/8 px-3 py-1 rounded-lg border border-primary/20 ml-1">empresas pensam marketing digital</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Professional Mission Statement */}
            <div className="relative p-10 rounded-3xl bg-gradient-to-br from-card/50 via-card/70 to-card/50 border border-primary/20 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Professional accent border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-80"></div>
              
              {/* Subtle floating elements */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-accent/25 rounded-full animate-bounce"></div>
              
              <div className="relative space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl shadow-xl border border-primary/20">
                    <Target className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-4xl font-bold text-foreground">Nossa Missão</h3>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  Transformar cada real investido em marketing digital numa máquina de gerar vendas, 
                  combinando <span className="text-primary font-semibold">tecnologia de ponta</span> 
                  com estratégias humanizadas e foco absoluto em performance que supera expectativas.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Professional 3D Visual */}
          <div className="relative">
            {/* Professional depth layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-primary/15 to-accent/20 rounded-3xl blur-3xl transform rotate-6 scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/18 via-accent/10 to-primary/18 rounded-3xl blur-2xl transform -rotate-3 scale-105"></div>
            
            {/* Main professional container */}
            <div className="relative bg-gradient-to-br from-card/40 via-card/60 to-card/40 backdrop-blur-2xl border border-primary/30 rounded-3xl overflow-hidden shadow-3xl">
              {/* Professional accent bar */}
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary opacity-90"></div>
              
              {/* 3D Scene Container */}
              <div className="p-10">
                <Suspense fallback={
                  <div className="w-full h-96 bg-gradient-to-br from-muted/15 to-muted/5 rounded-2xl flex items-center justify-center border border-muted/20">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
                  </div>
                }>
                  <Scene3D />
                </Suspense>
              </div>
              
              {/* Professional Command Center Interface */}
              <div className="p-10 bg-gradient-to-t from-card/70 to-transparent">
                <div className="space-y-8">
                  {/* Professional Status Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-5 h-5 bg-green-400 rounded-full animate-pulse shadow-xl"></div>
                        <div className="absolute inset-0 w-5 h-5 bg-green-400 rounded-full animate-ping opacity-20"></div>
                      </div>
                      <span className="text-base font-bold text-foreground tracking-wider">SISTEMA NEURAL ATIVO</span>
                    </div>
                    <div className="text-sm text-muted-foreground font-mono bg-muted/15 px-4 py-2 rounded-full border border-muted/20">
                      <span className="text-primary">INPULSO_AI</span> v3.0.2
                    </div>
                  </div>
                  
                  {/* Professional Neural Network Status */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-primary/25 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                      <div className="relative bg-card/70 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 text-center shadow-lg">
                        <div className="flex items-center justify-center gap-3 mb-4">
                          <Cpu className="w-5 h-5 text-black" />
                          <div className="text-sm text-primary font-bold">NEURAL ENGINE</div>
                        </div>
                        <div className="text-4xl font-bold text-foreground mb-3">AI</div>
                        <div className="w-full h-3 bg-primary/15 rounded-full overflow-hidden">
                          <div className="w-5/6 h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/25 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                      <div className="relative bg-card/70 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 text-center shadow-lg">
                        <div className="flex items-center justify-center gap-3 mb-4">
                          <Zap className="w-5 h-5 text-black" />
                          <div className="text-sm text-accent font-bold">QUANTUM PROC</div>
                        </div>
                        <div className="text-4xl font-bold text-foreground mb-3">ML</div>
                        <div className="w-full h-3 bg-accent/15 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Performance Dashboard */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-accent/3 to-primary/3 rounded-2xl blur-sm"></div>
                    <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center justify-between mb-8">
                        <span className="text-base font-bold text-foreground flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          PERFORMANCE NEURAL
                        </span>
                        <div className="flex space-x-2">
                          {[...Array(4)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-2 h-2 bg-green-400 rounded-full animate-pulse" 
                              style={{ animationDelay: `${i * 0.3}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Professional performance metrics */}
                      <div className="space-y-6">
                        {[
                          { label: "ROI OPTIMIZATION", value: "+427%", color: "primary" },
                          { label: "NEURAL CONVERSION", value: "+298%", color: "accent" },
                          { label: "COST EFFICIENCY", value: "+384%", color: "green-400" }
                        ].map((metric, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground font-mono font-semibold">{metric.label}</span>
                              <span className={`text-sm font-bold text-${metric.color}`}>{metric.value}</span>
                            </div>
                            <div className="w-full h-3 bg-muted/15 rounded-full overflow-hidden border border-muted/20">
                              <div 
                                className={`h-full bg-gradient-to-r from-${metric.color} via-primary to-${metric.color} rounded-full animate-pulse shadow-sm`}
                                style={{ width: `${85 + index * 5}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Mission Control Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "NEURAL NODES", value: "∞", color: "primary" },
                      { label: "UPTIME", value: "99.9%", color: "green-400" },
                      { label: "ALERTS", value: "ZERO", color: "accent" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl p-5 text-center shadow-lg">
                        <div className="text-xs text-muted-foreground mb-3 font-mono font-semibold">{stat.label}</div>
                        <div className={`text-xl font-bold text-${stat.color}`}>{stat.value}</div>
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
