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
      
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/8 rounded-full blur-xl animate-breathe opacity-40"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        

        {/* Main Visual Section */}
        <div className="mb-20">
          {/* Primary Dashboard Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20"></div>
            
            
          </div>

          {/* Secondary Images Grid */}
          
        </div>

        {/* Features Grid */}
        

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl blur-xl"></div>
            
            
          </div>
        </div>
      </div>
    </section>;
}