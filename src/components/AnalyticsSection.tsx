import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Eye, Target, Zap, Shield, Database } from "lucide-react";
import { FormModal } from "@/components/FormModal";
import dashboardScreens from "@/assets/dashboard-screens.jpg";
import teamOffice from "@/assets/team-office.jpg";
import metricsImage from "@/assets/workspace-overview.jpg";
export function AnalyticsSection() {
  const features = [{
    icon: BarChart3,
    title: "Dashboard em Tempo Real",
    description: "Monitore todas as métricas importantes com atualização automática e visualização intuitiva dos seus resultados."
  }, {
    icon: Eye,
    title: "Transparência Total",
    description: "Acesso completo a todos os dados, métricas e investimentos. Você vê exatamente onde cada real está sendo aplicado."
  }, {
    icon: Shield,
    title: "Segurança de Dados",
    description: "Proteção total das informações com criptografia avançada e compliance com LGPD para máxima segurança."
  }, {
    icon: Target,
    title: "Otimização Precisa",
    description: "Ajustes contínuos baseados em dados reais para maximizar conversões e reduzir custos de aquisição."
  }, {
    icon: Database,
    title: "Análise Profunda",
    description: "Processamento de grandes volumes de dados para insights estratégicos que realmente fazem diferença."
  }, {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Sistema de alta velocidade que processa milhões de eventos por segundo sem perder nenhum dado importante."
  }];
  return <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/8 rounded-full blur-xl animate-breathe opacity-40"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Tecnologia de Ponta</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Tecnologia e Transparência
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nossa plataforma proprietária combina <span className="text-primary font-semibold">análise avançada</span>, 
            automação inteligente e monitoramento em tempo real para entregar resultados superiores com total transparência.
          </p>
        </div>

        {/* Main Visual Section */}
        <div className="mb-20">
          {/* Primary Dashboard Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20"></div>
            
            <div className="relative p-8">
              <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
                <img src={dashboardScreens} alt="Plataforma avançada de analytics com inteligência artificial" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                
                {/* Advanced Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-background/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/15"></div>
                
                {/* Dynamic Floating Elements */}
                <div className="absolute top-8 right-8 bg-gradient-to-r from-primary to-accent backdrop-blur-sm text-primary-foreground px-6 py-3 rounded-2xl shadow-2xl animate-pulse border border-primary/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    <span className="text-lg font-bold">ROI: +342%</span>
                  </div>
                </div>
                
                <div className="absolute top-8 left-8 bg-card/90 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-xl text-xs font-bold text-primary">
                  ANÁLISE ATIVA
                </div>
                
                <div className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-sm border border-border/50 p-6 rounded-2xl shadow-xl max-w-md">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-foreground">15 Campanhas Otimizadas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{
                      animationDelay: '0.5s'
                    }}></div>
                      <span className="text-sm font-semibold text-foreground">2.3M Eventos Processados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{
                      animationDelay: '1s'
                    }}></div>
                      <span className="text-sm font-semibold text-foreground">98.7% Uptime</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 bg-gradient-to-r from-accent/90 to-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold">
                  Processamento: 47.2k/seg
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Images Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="group cursor-pointer">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10"></div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Acompanhe de perto cada investimento e veja seus resultados crescerem
            </p>
          </div>
          <FormModal>
            <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all duration-300 text-black">
              Solicitar Orçamento
            </Button>
          </FormModal>
        </div>
                <div className="relative p-6">
                  <div className="relative h-64 overflow-hidden rounded-xl">
                    <img src={teamOffice} alt="Equipe especializada em data science e machine learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <h3 className="text-lg font-bold mb-1">Análise Avançada</h3>
                      <p className="text-sm text-muted-foreground">Métricas proprietárias</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg text-xs font-bold">
                      Data Science
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10"></div>
                
                <div className="relative p-6">
                  <div className="relative h-64 overflow-hidden rounded-xl">
                    <img src={metricsImage} alt="Sistema unificado de monitoramento em tempo real" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <h3 className="text-lg font-bold mb-1">Monitoramento 24/7</h3>
                      <p className="text-sm text-muted-foreground">Alertas inteligentes</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-lg text-xs font-bold animate-pulse">
                      Real-time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Recursos Avançados</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologias de ponta que colocam suas campanhas à frente da concorrência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="group cursor-pointer">
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/20"></div>
                  
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <feature.icon className="h-8 w-8 text-white transition-all duration-500 group-hover:scale-125" />
                      </div>
                      <div className="absolute inset-0 bg-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500 -z-10"></div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                    
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl blur-xl"></div>
            
            
          </div>
        </div>
      </div>
    </section>;
}