import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, Rocket, BarChart } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Entendemos seu negócio",
      description: "Mergulhamos fundo em seus objetivos, público-alvo e desafios atuais para criar uma base sólida para o sucesso."
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Planejamos e construímos uma estratégia de mídia paga",
      description: "Desenvolvemos uma estratégia abrangente sob medida para as necessidades específicas do seu negócio e condições de mercado."
    },
    {
      number: "03",
      icon: Rocket,
      title: "Criamos e gerenciamos campanhas",
      description: "Lançamos e gerenciamos ativamente suas campanhas nas plataformas Meta Ads e Google Ads."
    },
    {
      number: "04",
      icon: BarChart,
      title: "Analisamos resultados e otimizamos constantemente",
      description: "Monitoramento contínuo, análise e otimização para garantir máximo ROI e performance."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nosso processo comprovado de 4 etapas que transforma sua publicidade em uma máquina geradora de receita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
              
              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}