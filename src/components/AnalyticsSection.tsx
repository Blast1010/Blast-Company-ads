import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp, Eye, Target } from "lucide-react";
import dashboardImage from "@/assets/dashboard-analytics.jpg";
import teamImage from "@/assets/team-analytics.jpg";
import metricsImage from "@/assets/metrics-dashboard.jpg";

export function AnalyticsSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Dashboard Completo",
      description: "Acompanhe todas as métricas importantes em tempo real com relatórios detalhados e insights precisos."
    },
    {
      icon: TrendingUp,
      title: "Análise de Performance",
      description: "Monitoramento contínuo de conversões, ROI e otimizações para maximizar seus resultados."
    },
    {
      icon: Eye,
      title: "Transparência Total",
      description: "Acesso completo aos dados das suas campanhas com relatórios diários e semanais."
    },
    {
      icon: Target,
      title: "Otimização Precisa",
      description: "Identificação de oportunidades e ajustes estratégicos baseados em dados reais."
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Efeito de luz minimalista preta */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-10 w-40 h-40 bg-black/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-10 w-60 h-60 bg-gray-900/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tecnologia e Transparência
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa plataforma oferece controle total sobre suas campanhas com{" "}
            <span className="text-primary font-semibold">dados em tempo real</span> e 
            relatórios detalhados para decisões estratégicas precisas.
          </p>
          <div className="w-24 h-0.5 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Main Images Section */}
        <div className="mb-16 space-y-8">
          {/* Primary Dashboard */}
          <Card className="relative bg-card/30 backdrop-blur-sm border-border/50 overflow-hidden shadow-2xl">
            <div className="relative">
              <div className="relative h-80 md:h-96 overflow-hidden">
                <img 
                  src={dashboardImage} 
                  alt="Dashboard profissional com métricas de marketing digital"
                  className="w-full h-full object-cover"
                />
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-accent/15"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg shadow-glow">
                  <span className="text-sm font-semibold">ROI em Tempo Real</span>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm border border-border/50 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Campanhas Ativas</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Secondary Images Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="relative bg-card/30 backdrop-blur-sm border-border/50 overflow-hidden shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={teamImage} 
                  alt="Equipe analisando dados de performance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="text-lg font-bold mb-1">Análise Colaborativa</h3>
                  <p className="text-sm text-muted-foreground">Decisões baseadas em dados</p>
                </div>
              </div>
            </Card>

            <Card className="relative bg-card/30 backdrop-blur-sm border-border/50 overflow-hidden shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={metricsImage} 
                  alt="Interface de métricas e conversões"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="text-lg font-bold mb-1">Métricas Avançadas</h3>
                  <p className="text-sm text-muted-foreground">Controle total de performance</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative bg-card/40 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 group"
            >
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="relative mx-auto">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 backdrop-blur-sm">
            <BarChart3 className="h-8 w-8 text-primary" />
            <div className="text-left">
              <p className="text-lg font-bold text-foreground">
                Controle Total das Suas Campanhas
              </p>
              <p className="text-muted-foreground">
                Dashboards profissionais e relatórios detalhados sempre à sua disposição
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}