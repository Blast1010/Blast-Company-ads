
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, BarChart3, Zap, Smartphone, Search } from "lucide-react";
import { FormModal } from "@/components/FormModal";

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Google Ads",
      description: "Campanhas otimizadas para máximo ROI com targeting preciso e análise contínua de performance.",
      highlight: "ROI médio 400%"
    },
    {
      icon: Smartphone,
      title: "Meta Ads",
      description: "Estratégias avançadas no Facebook e Instagram com creative testing e audiências personalizadas.",
      highlight: "CPM otimizado"
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description: "Dashboards personalizados e relatórios automatizados para tomada de decisão baseada em dados.",
      highlight: "Dados em tempo real"
    },
    {
      icon: Target,
      title: "Conversion Rate",
      description: "Otimização de landing pages e funis de conversão através de testes A/B e UX avançado.",
      highlight: "CVR +250%"
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Estratégias de crescimento escalável com automação e integração de todas as plataformas.",
      highlight: "Crescimento exponencial"
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Fluxos automatizados de nutrição, remarketing e retenção para maximizar o LTV dos clientes.",
      highlight: "LTV +300%"
    }
  ];

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-b from-background via-background/95 to-muted/5 border-b border-primary/10 overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-radial from-primary/8 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-radial from-accent/6 to-transparent rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full border border-primary/20 mb-4 backdrop-blur-sm">
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-bold text-xs tracking-wide uppercase">Nossos Serviços</span>
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Soluções Completas
            </span>
          </h2>
          
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-3"></div>
          
          <p className="text-base text-muted-foreground max-w-xl mx-auto font-medium">
            Tecnologia avançada e estratégia personalizada para o seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="relative transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                {/* Card Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-2"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border border-primary/20 hover:border-primary/40 transition-all duration-500 rounded-xl overflow-hidden backdrop-blur-lg shadow-md">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
                  
                  <div className="relative p-4 z-10">
                    <div className="space-y-3">
                      {/* Icon & Highlight */}
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary/95 to-primary/80 rounded-lg flex items-center justify-center shadow-md border border-primary/30 transform group-hover:scale-110 transition-transform duration-300">
                          <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-md"></div>
                          <service.icon className="h-5 w-5 text-black relative z-10" />
                        </div>
                        <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-full border border-accent/20">
                          {service.highlight}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <FormModal>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-6 py-2.5 text-sm font-bold border border-primary/20">
              Ver Todos os Serviços
            </Button>
          </FormModal>
        </div>
      </div>
    </section>
  );
}
