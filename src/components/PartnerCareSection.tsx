import { Users, MessageCircle, Shield, BarChart3 } from "lucide-react";

export const PartnerCareSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Acompanhamento Transparente",
      description: "Fazer você vender é o nosso trabalho diário, mas sabemos o quão importante é para nossos parceiros acompanharem o que está sendo feito.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: MessageCircle,
      title: "Reuniões Estratégicas",
      description: "Sempre faremos reuniões estratégicas, seja para extrair informações de inteligência, para tomar decisões juntos com você ou apenas para mostrar os resultados do nosso trabalho.",
      gradient: "from-primary/20 to-blue-500/20"
    },
    {
      icon: Shield,
      title: "Contato Direto",
      description: "Não criamos burocracias para falar conosco, terá contato direto com nossos estrategistas para se sentir sempre seguro",
      gradient: "from-green-500/20 to-primary/20"
    },
    {
      icon: BarChart3,
      title: "CRM Integrado",
      description: "Diferente de outros gestores, nos contamos com CRM integrado na sua estrutura juntamente com Relatórios diários com rastreamento de conversas, fazendo assim identificarmos otimizações precisas e economizar o seu dinheiro.",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute top-3/4 -right-40 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-primary/10 rounded-full blur-3xl opacity-40 animate-breathe"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-gray-200 rounded-2xl mb-8 shadow-lg overflow-hidden">
            <img 
              src="/lovable-uploads/b49237f5-d804-4b27-a4c6-ca054312ba8f.png" 
              alt="Logo B" 
              className="w-10 h-10 object-contain"
            />
          </div>
          <p className="text-primary text-lg mb-4 font-medium tracking-wide">Direto com o gestor</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Atendimento de{" "}
            <span className="text-primary">Parceiro</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trabalhamos como parceiros estratégicos, oferecendo suporte direto e transparente para o crescimento do seu negócio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Floating orb effect */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Hover effect gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-20">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};