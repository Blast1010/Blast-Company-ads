import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp, Eye, Target } from "lucide-react";

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
    <section className="py-20 px-4 bg-gradient-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent blur-xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl opacity-30"></div>
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

        {/* Main Image Section */}
        <div className="mb-16">
          <Card className="relative bg-card/30 backdrop-blur-sm border-border/50 overflow-hidden shadow-2xl">
            <div className="relative">
              {/* Hero Image */}
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <img 
                  src="/lovable-uploads/55a1dad1-20d1-48a8-9d57-85e671dbb72c.png" 
                  alt="Dashboard profissional com análises e métricas em tempo real"
                  className="w-full h-full object-cover"
                />
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-sm font-semibold">Dados em Tempo Real</span>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm border border-border/50 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Sistema Ativo</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
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