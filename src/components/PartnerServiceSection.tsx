
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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/15 rounded-full blur-lg animate-breathe opacity-40"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Direto com o gestor</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Atendimento de Parceiro
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Experiência exclusiva e personalizada para nossos parceiros estratégicos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="relative bg-card border border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden rounded-lg">
              <CardContent className="p-8 relative z-10">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-10 w-10 text-black" />
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
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl blur-xl"></div>
          
          <div className="relative bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm border border-primary/20 rounded-3xl p-12">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-12 h-12 border-2 border-primary/30 rounded-lg transform rotate-12"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 bg-primary/20 rounded-full"></div>
            
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg border border-primary/40 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                  <MessageSquare className="h-10 w-10 text-black relative z-10" />
                </div>
                
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    Relacionamento Premium
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
                    Acesso direto aos nossos estrategistas sênior e acompanhamento personalizado do seu projeto
                  </p>
                  
                  <FormModal>
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl px-8 py-3 text-base font-bold border border-primary/20">
                      Falar com Especialista
                    </Button>
                  </FormModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
