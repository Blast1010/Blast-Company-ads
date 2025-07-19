
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="relative bg-card border border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden rounded-xl">
              <div className="p-6 relative z-10">
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium text-center">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
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
            
            {/* CTA Button */}
            <div className="text-center mt-8">
              <FormModal>
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all duration-300 text-black"
                >
                  Solicitar Orçamento
                </Button>
              </FormModal>
            </div>
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex flex-col items-center justify-center gap-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-md">
                  <MessageSquare className="h-8 w-8 text-black" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Relacionamento Premium
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6">
                    Acesso direto aos nossos estrategistas sênior e acompanhamento personalizado do seu projeto
                  </p>
                  
                  <FormModal>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300 px-8 py-3 text-base font-semibold">
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
