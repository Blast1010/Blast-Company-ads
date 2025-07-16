import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Users, Target, Lightbulb } from "lucide-react";
import partnershipImage from "@/assets/partnership-image.jpg";
import teamworkImage from "@/assets/teamwork-image.jpg";
import strategyImage from "@/assets/strategy-image.jpg";

export function WhyTrustUsSection() {
  const reasons = [
    {
      icon: Target,
      title: "Conhecimento Especializado",
      description: "Você conhece seu negócio melhor do que ninguém, nós conhecemos as melhores estratégias para vender na internet.",
      image: strategyImage,
      imageAlt: "Estratégias digitais profissionais"
    },
    {
      icon: Handshake,
      title: "Parceria Verdadeira",
      description: "Sempre trabalharemos juntos, cuidando de cada real investido como se fosse nosso próprio dinheiro.",
      image: partnershipImage,
      imageAlt: "Parceria de negócios sólida"
    },
    {
      icon: Users,
      title: "Inteligência Coletiva",
      description: "Nós atuamos como seu parceiro, extraindo inteligência de diretores, coordenadores, gerentes, times de vendas, times de atendimento e de clientes finais.",
      image: teamworkImage,
      imageAlt: "Trabalho em equipe colaborativo"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-primary overflow-hidden">
      {/* Efeito minimalista cinematográfico */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-40 left-40 w-20 h-20 bg-white/8 rounded-full blur-lg animate-pulse delay-1100"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-white/6 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Como vamos ajudar a sua empresa?
          </h2>
          <h3 className="text-xl md:text-2xl text-white/90 font-semibold mb-4">
            Como confiar em nossa metodologia?
          </h3>
          <div className="w-24 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="relative bg-white/95 backdrop-blur-sm border-white/20 hover:bg-white transition-all duration-300 group overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <img 
                  src={reason.image} 
                  alt={reason.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              
              <CardContent className="p-8 relative z-10">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Connector line (except for last item on desktop) */}
              {index < reasons.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/60 to-transparent"></div>
              )}
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/20 rounded-full border border-white/30">
            <Lightbulb className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">
              Metodologia comprovada em centenas de empresas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}