
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Shield, Target, TrendingUp, CheckCircle, Award } from "lucide-react";
import { FormModal } from "@/components/FormModal";

export function WhyTrustUsSection() {
  const reasons = [
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Acesso completo aos dados, métricas e estratégias utilizadas. Você acompanha cada centavo investido e resultado obtido."
    },
    {
      icon: Target,
      title: "Resultados Comprovados", 
      description: "Mais de 500 empresas atendidas com ROI médio de 400%. Cases reais e resultados mensuráveis em todos os projetos."
    },
    {
      icon: TrendingUp,
      title: "Metodologia Exclusiva",
      description: "Sistema proprietário de otimização que combina IA, análise preditiva e expertise humana para maximizar conversões."
    },
    {
      icon: CheckCircle,
      title: "Suporte Especializado",
      description: "Time dedicado com certificações Google e Meta, disponível para estratégias personalizadas e suporte técnico avançado."
    }
  ];

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-b from-background via-background/95 to-muted/5 border-b border-primary/10 overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-radial from-primary/8 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-28 h-28 bg-gradient-radial from-accent/6 to-transparent rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full border border-primary/20 mb-4 backdrop-blur-sm">
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-bold text-xs tracking-wide uppercase">Por que nos escolher</span>
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Confiança & Resultados
            </span>
          </h2>
          
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-3"></div>
          
          <p className="text-base text-muted-foreground max-w-xl mx-auto font-medium">
            Mais de 8 anos transformando empresas através do marketing digital
          </p>
        </div>

        {/* Compact Service Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative">
              <div className="relative transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                {/* Card Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-2"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border border-primary/20 hover:border-primary/40 transition-all duration-500 rounded-xl overflow-hidden backdrop-blur-lg shadow-md">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
                  
                  <div className="relative p-4 z-10">
                    <div className="flex flex-col items-center text-center space-y-3">
                      {/* Icon */}
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary/95 to-primary/80 rounded-lg flex items-center justify-center shadow-md border border-primary/30 transform group-hover:scale-110 transition-transform duration-300">
                          <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-md"></div>
                          <reason.icon className="h-6 w-6 text-black relative z-10" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact CTA Section */}
        <div className="text-center">
          <div className="relative group max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-card/90 via-card to-card/95 rounded-xl border border-primary/30 hover:border-primary/50 transition-all duration-300 p-6 backdrop-blur-xl overflow-hidden shadow-md">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md border border-primary/40 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-md"></div>
                  <Award className="h-6 w-6 text-black relative z-10" />
                </div>
                
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    Garantia de Resultados
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-lg text-sm">
                    Compromisso com o seu crescimento através de estratégias personalizadas
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <FormModal>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-6 py-2.5 text-sm font-bold border border-primary/20">
                Começar Agora
              </Button>
            </FormModal>
          </div>
        </div>
      </div>
    </section>
  );
}
