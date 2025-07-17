
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
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-background via-background/95 to-muted/5 border-b border-primary/10 overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-radial from-primary/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-radial from-accent/6 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full border border-primary/20 mb-6 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-bold text-xs tracking-wide uppercase">Direto com o gestor</span>
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Atendimento de Parceiro
            </span>
          </h2>
          
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-4"></div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Experiência exclusiva e personalizada para nossos parceiros estratégicos
          </p>
        </div>

        {/* Compact Service Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="relative transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Card Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-4"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border border-primary/20 hover:border-primary/40 transition-all duration-500 rounded-2xl overflow-hidden backdrop-blur-lg shadow-lg">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
                  
                  <div className="relative p-6 z-10">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Icon */}
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary/95 to-primary/80 rounded-xl flex items-center justify-center shadow-lg border border-primary/30 transform group-hover:scale-110 transition-transform duration-300">
                          <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                          <service.icon className="h-8 w-8 text-black relative z-10" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
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

        {/* Compact CTA Section */}
        <div className="text-center">
          <div className="relative group max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-br from-card/90 via-card to-card/95 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-300 p-8 backdrop-blur-xl overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg border border-primary/40 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                  <MessageSquare className="h-8 w-8 text-black relative z-10" />
                </div>
                
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Relacionamento Premium
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    Acesso direto aos nossos estrategistas sênior e acompanhamento personalizado do seu projeto
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <FormModal>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl px-8 py-3 text-base font-bold border border-primary/20">
                Falar com Especialista
              </Button>
            </FormModal>
          </div>
        </div>
      </div>
    </section>
  );
}
