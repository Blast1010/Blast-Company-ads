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
  return;
}