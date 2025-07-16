import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Shield, BarChart3 } from "lucide-react";

export function PartnerServiceSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Transparência Total",
      description: "Fazer você vender é o nosso trabalho diário, mas sabemos o quão importante é para nossos parceiros acompanharem o que está sendo feito.",
    },
    {
      icon: Users,
      title: "Reuniões Estratégicas",
      description: "Sempre faremos reuniões estratégicas, seja para extrair informações de inteligência, para tomar decisões juntos com você ou apenas para mostrar os resultados do nosso trabalho.",
    },
    {
      icon: Shield,
      title: "Acesso Direto",
      description: "Não criamos burocracias para falar conosco, terá contato direto com nossos estrategistas para se sentir sempre seguro.",
    },
    {
      icon: MessageSquare,
      title: "CRM Integrado",
      description: "Diferente de outros gestores, nós contamos com CRM integrado na sua estrutura juntamente com Relatórios diários com rastreamento de conversas, fazendo assim identificarmos otimizações precisas e economizar o seu dinheiro.",
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <div className="w-6 h-6 bg-primary text-primary-foreground rounded flex items-center justify-center font-bold text-sm">
              B
            </div>
            <span className="text-primary font-semibold text-sm">Direto com o gestor</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Atendimento de Parceiro
          </h2>
          <div className="w-24 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
            <MessageSquare className="h-6 w-6 text-primary" />
            <div className="text-left">
              <p className="text-primary font-semibold">
                Atendimento diferenciado
              </p>
              <p className="text-muted-foreground text-sm">
                Contato direto com especialistas, sem burocracias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}