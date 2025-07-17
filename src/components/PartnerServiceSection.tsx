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
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* 3D Card Container */}
              <div className="relative transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2 perspective-1000">
                {/* 3D Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-6"></div>
                
                {/* Main Card */}
                <Card className="relative bg-gradient-to-br from-card via-card to-card/95 border border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                  {/* 3D Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating orbs */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary/40 rounded-full blur-sm animate-pulse opacity-60"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-primary/30 rounded-full blur-sm animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
                  
                  <CardContent className="relative p-8 z-10">
                    <div className="space-y-6 text-center">
                      {/* 3D Icon Container */}
                      <div className="relative mb-6">
                        <div className="relative transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          {/* Icon Shadow */}
                          <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-lg translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Icon Background with 3D effect */}
                          <div className="relative w-20 h-20 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-primary/30">
                            {/* Inner glow */}
                            <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                            
                            <service.icon className="h-10 w-10 text-black relative z-10" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed font-medium text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* 3D Bottom accent with depth */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-x-95 rounded-b-2xl"></div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom highlight */}
        <div className="text-center mt-20">
          <div className="relative group max-w-2xl mx-auto">
            {/* 3D Background with depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2"></div>
            
            <div className="relative bg-gradient-to-br from-card via-card to-card/90 rounded-3xl border border-primary/30 p-8 backdrop-blur-sm overflow-hidden">
              {/* Floating elements */}
              <div className="absolute top-4 right-6 w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-8 w-3 h-3 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {/* 3D Icon */}
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg border border-primary/30 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                    <MessageSquare className="h-8 w-8 text-black relative z-10" />
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <p className="text-xl font-bold text-primary mb-2">
                    Inteligência Artificial + Estratégia Humana
                  </p>
                  <p className="text-muted-foreground">
                    A fórmula perfeita para resultados exponenciais
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <FormModal>
              <Button size="lg" className="bg-accent hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Começar Agora
              </Button>
            </FormModal>
          </div>
        </div>
      </div>
    </section>;
}