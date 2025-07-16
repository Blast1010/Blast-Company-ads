import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Shield, BarChart3, Mail } from "lucide-react";
import { FormModal } from "@/components/FormModal";
export function PartnerServiceSection() {
  const services = [{
    icon: BarChart3,
    title: "Transparência Operacional",
    description: "Garantimos visibilidade completa das ações e investimentos, com relatórios detalhados e acesso às métricas em tempo real."
  }, {
    icon: Users,
    title: "Alinhamento Estratégico",
    description: "Reuniões periódicas para análise de resultados, tomada de decisões colaborativas e planejamento de próximas etapas."
  }, {
    icon: Shield,
    title: "Comunicação Direta",
    description: "Canal prioritário com especialistas sênior, garantindo agilidade na resolução de questões e otimizações."
  }, {
    icon: MessageSquare,
    title: "Tecnologia Integrada",
    description: "Plataforma proprietária de gestão com integração completa ao seu CRM, permitindo análises precisas e otimizações baseadas em dados reais."
  }];
  return <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/5 border-b border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            
            <span className="text-primary font-semibold text-sm">Direto com o gestor</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Atendimento de Parceiro
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => <Card key={index} className="relative bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="space-y-6 text-center">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-medium text-center">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>)}
        </div>

        {/* Bottom highlight */}
        <div className="text-center mt-16 space-y-6">
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
            <MessageSquare className="h-6 w-6 text-primary" />
            <div className="text-center">
              <p className="text-primary font-semibold">
                Excelência no Atendimento
              </p>
              <p className="text-muted-foreground text-sm">
                Suporte especializado com foco em resultados
              </p>
            </div>
          </div>
          
          <FormModal>
            <Button variant="outline" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Solicitar Orçamento
            </Button>
          </FormModal>
        </div>
      </div>
    </section>;
}