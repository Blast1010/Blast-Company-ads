
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
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background/98 to-muted/5 overflow-hidden py-32">
      {/* Enhanced Cinematic Background Effects */}
      <div className="absolute inset-0">
        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-noise"></div>
        
        {/* Professional gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/6 via-transparent to-primary/6"></div>
        
        {/* Cinematic light rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rotate-12 opacity-60"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-accent/15 via-accent/3 to-transparent -rotate-12 opacity-50"></div>
        
        {/* Professional floating orbs */}
        <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/4 to-transparent rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div className="absolute bottom-40 right-32 w-[450px] h-[450px] bg-gradient-radial from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-radial from-primary/6 via-primary/2 to-transparent rounded-full blur-2xl animate-pulse opacity-35" style={{ animationDelay: "6s" }}></div>
        
        {/* Subtle particles */}
        <div className="absolute top-20 right-1/4 w-1 h-1 bg-primary/50 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent/40 rounded-full animate-pulse opacity-55" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary/35 rounded-full animate-pulse opacity-60" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Enhanced Professional Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/12 via-primary/8 to-primary/12 rounded-full border border-primary/25 mb-10 backdrop-blur-sm shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse shadow-md"></div>
            <span className="text-primary font-bold text-sm tracking-wider uppercase">Direto com o gestor</span>
            <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse shadow-md"></div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Atendimento de
            </span>
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Parceiro
              </span>
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent rounded-full opacity-80"></div>
            </span>
          </h2>
          
          <p className="text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto mt-8 font-light leading-relaxed">
            Experiência exclusiva e personalizada para nossos parceiros estratégicos, 
            com acesso direto aos nossos especialistas sênior
          </p>
        </div>

        {/* Enhanced Professional Service Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Professional Card Container */}
              <div className="relative transform-gpu transition-all duration-700 hover:scale-105 hover:-translate-y-4">
                {/* Enhanced shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-10"></div>
                
                {/* Main Professional Card */}
                <div className="relative bg-gradient-to-br from-card/95 via-card to-card/90 border-2 border-primary/25 hover:border-primary/45 transition-all duration-700 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Premium accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-90"></div>
                  
                  <div className="relative p-12 z-10">
                    <div className="flex flex-col items-center text-center space-y-10">
                      {/* Enhanced Professional Icon */}
                      <div className="relative">
                        <div className="relative transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          {/* Enhanced icon shadow */}
                          <div className="absolute inset-0 bg-primary/25 rounded-3xl blur-xl translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Icon container with enhanced professional styling */}
                          <div className="relative w-28 h-28 bg-gradient-to-br from-primary via-primary/95 to-primary/85 rounded-3xl flex items-center justify-center shadow-2xl border-2 border-primary/35">
                            {/* Enhanced inner highlight */}
                            <div className="absolute inset-3 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
                            
                            <service.icon className="h-14 w-14 text-black relative z-10" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Professional Content */}
                      <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed font-medium text-lg max-w-md">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-x-0 group-hover:scale-x-100 rounded-b-3xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Professional CTA Section */}
        <div className="text-center">
          <div className="relative group max-w-5xl mx-auto">
            {/* Enhanced professional background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-accent/8 to-primary/12 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-3"></div>
            
            <div className="relative bg-gradient-to-br from-card/90 via-card to-card/95 rounded-3xl border-2 border-primary/35 hover:border-primary/55 transition-all duration-500 p-16 backdrop-blur-xl overflow-hidden shadow-3xl">
              {/* Enhanced accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-90"></div>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                {/* Enhanced Professional Icon */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center shadow-2xl border-2 border-primary/45 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-3 bg-gradient-to-br from-white/25 to-transparent rounded-2xl"></div>
                    <MessageSquare className="h-12 w-12 text-black relative z-10" />
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <h3 className="text-4xl font-bold text-primary mb-4">
                    Relacionamento Premium
                  </h3>
                  <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl">
                    Acesso direto aos nossos estrategistas sênior e acompanhamento personalizado 
                    do seu projeto com transparência total e resultados garantidos
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <FormModal>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl px-16 py-6 text-xl font-bold border-2 border-primary/25">
                Falar com Especialista
              </Button>
            </FormModal>
          </div>
        </div>
      </div>
    </section>
  );
}
