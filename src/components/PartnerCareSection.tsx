import { Users, MessageCircle, Shield, BarChart3 } from "lucide-react";

export const PartnerCareSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Acompanhamento Transparente",
      description: "Fazer você vender é o nosso trabalho diário, mas sabemos o quão importante é para nossos parceiros acompanharem o que está sendo feito."
    },
    {
      icon: MessageCircle,
      title: "Reuniões Estratégicas",
      description: "Sempre faremos reuniões estratégicas, seja para extrair informações de inteligência, para tomar decisões juntos com você ou apenas para mostrar os resultados do nosso trabalho."
    },
    {
      icon: Shield,
      title: "Contato Direto",
      description: "Não criamos burocracias para falar conosco, terá contato direto com nossos estrategistas para se sentir sempre seguro"
    },
    {
      icon: BarChart3,
      title: "CRM Integrado",
      description: "Diferente de outros gestores, nos contamos com CRM integrado na sua estrutura juntamente com Relatórios diários com rastreamento de conversas, fazendo assim identificarmos otimizações precisas e economizar o seu dinheiro."
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/15 rounded-full blur-lg animate-breathe opacity-40"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-primary text-lg mb-4 font-medium tracking-wide">Direto com o gestor</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Atendimento de Parceiro
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="group cursor-pointer">
                {/* Service Card */}
                <div className="relative h-full">
                  {/* Background Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col items-center text-center bg-white">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      {/* Main Icon Circle */}
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <IconComponent className="h-10 w-10 text-primary transition-all duration-500 group-hover:scale-125" />
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500 -z-10"></div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-4 transition-colors duration-300 text-black">
                        {benefit.title}
                      </h3>
                      
                      <p className="leading-relaxed transition-colors duration-300 text-base font-normal text-black">
                        {benefit.description}
                      </p>
                    </div>
                    
                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};