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
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-primary/5 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Análises <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Avançadas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologia de ponta para maximizar seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="relative p-6 bg-gradient-to-br from-background to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}