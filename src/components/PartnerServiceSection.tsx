import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Shield, BarChart3, Mail } from "lucide-react";
import { FormModal } from "@/components/FormModal";
export function PartnerServiceSection() {
  const services = [{
    icon: Users,
    title: "Acompanhamento Contínuo",
    description: "Fazer você vender é o nosso trabalho diário, mas sabemos o quão importante é para nossos parceiros acompanharem o que está sendo feito."
  }, {
    icon: BarChart3,
    title: "Reuniões Estratégicas",
    description: "Sempre faremos reuniões estratégicas, seja para extrair informações de inteligência, para tomar decisões juntos com você ou apenas para mostrar os resultados do nosso trabalho."
  }, {
    icon: Shield,
    title: "Contato Direto",
    description: "Não criamos burocracias para falar conosco, terá contato direto com nossos estrategistas para se sentir sempre seguro."
  }, {
    icon: Mail,
    title: "CRM Integrado",
    description: "Diferente de outros gestores, nos contamos com CRM integrado na sua estrutura juntamente com Relatórios diários com rastreamento de conversas, fazendo assim identificarmos otimizações precisas e economizar o seu dinheiro."
  }];
  return;
}