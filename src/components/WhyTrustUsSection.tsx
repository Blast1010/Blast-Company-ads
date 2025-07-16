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
    <section className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Como vamos ajudar a sua empresa?
          </h2>
          <h3 className="text-xl md:text-2xl text-primary font-semibold mb-4">
            Como confiar em nossa metodologia?
          </h3>
          <div className="w-24 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="relative bg-card border border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
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
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">
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
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <Lightbulb className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">
              Metodologia comprovada em centenas de empresas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}