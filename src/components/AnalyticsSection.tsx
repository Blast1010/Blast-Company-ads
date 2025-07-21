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
    <section className="py-24 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Dados e Analytics em Tempo Real</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tenha acesso completo a todas as informações e métricas importantes do seu investimento em tráfego pago.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <FormModal>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Ver Dashboard Demo
            </Button>
          </FormModal>
        </div>
      </div>
    </section>
  );
}