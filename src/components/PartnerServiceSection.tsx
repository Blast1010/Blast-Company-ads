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
    <section className="relative py-24 bg-gradient-to-b from-background via-background/95 to-muted/5 border-b border-primary/10 overflow-hidden">
      {/* Professional Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-primary/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-accent/6 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-bold text-sm tracking-wide uppercase">Direto com o gestor</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Atendimento de Parceiro
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6 font-medium leading-relaxed">
            Experiência exclusiva e personalizada para nossos parceiros estratégicos
          </p>
        </div>

        {/* Enhanced Service Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Professional Card Container */}
              <div className="relative transform-gpu transition-all duration-700 hover:scale-105 hover:-translate-y-3">
                {/* Elegant Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-8"></div>
                
                {/* Main Professional Card */}
                <div className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border-2 border-primary/20 hover:border-primary/40 transition-all duration-700 rounded-3xl overflow-hidden backdrop-blur-lg shadow-2xl">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Premium accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
                  
                  <div className="relative p-10 z-10">
                    <div className="flex flex-col items-center text-center space-y-8">
                      {/* Professional Icon */}
                      <div className="relative">
                        <div className="relative transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-2">
                          {/* Icon shadow */}
                          <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl translate-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Icon container with professional styling */}
                          <div className="relative w-24 h-24 bg-gradient-to-br from-primary via-primary/95 to-primary/80 rounded-2xl flex items-center justify-center shadow-xl border-2 border-primary/30">
                            {/* Inner highlight */}
                            <div className="absolute inset-2 bg-gradient-to-br from-white/25 to-transparent rounded-xl"></div>
                            
                            <service.icon className="h-12 w-12 text-black relative z-10" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Professional Content */}
                      <div className="space-y-5">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed font-medium text-lg max-w-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-x-0 group-hover:scale-x-100 rounded-b-3xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional CTA Section */}
        <div className="text-center">
          <div className="relative group max-w-4xl mx-auto">
            {/* Professional background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-2"></div>
            
            <div className="relative bg-gradient-to-br from-card/90 via-card to-card/95 rounded-3xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 p-12 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Professional Icon */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl border-2 border-primary/40 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                    <MessageSquare className="h-10 w-10 text-black relative z-10" />
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-primary mb-3">
                    Relacionamento Premium
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                    Acesso direto aos nossos estrategistas sênior e acompanhamento personalizado do seu projeto
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <FormModal>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl px-12 py-4 text-lg font-bold border-2 border-primary/20">
                Falar com Especialista
              </Button>
            </FormModal>
          </div>
        </div>
      </div>
    </section>
  );
}