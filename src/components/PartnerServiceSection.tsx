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
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-primary/5 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nosso <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Atendimento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como cuidamos dos nossos parceiros estratégicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="relative p-8 bg-gradient-to-br from-background to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <FormModal>
            <Button size="lg" className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-black font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Quero ser um Parceiro
            </Button>
          </FormModal>
        </div>
      </div>
    </section>
  );
}