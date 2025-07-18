import { useState } from "react";
import { Building2, Lightbulb, Target, ChevronLeft, ChevronRight, Users, Award, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselItems = [
  {
    icon: Target,
    title: "Estratégia Personalizada",
    description: "Desenvolvemos estratégias únicas para cada cliente, analisando profundamente seu mercado, concorrência e objetivos específicos.",
    highlight: "Cada negócio é único"
  },
  {
    icon: Rocket,
    title: "Execução Ágil",
    description: "Implementamos campanhas de alta performance com velocidade e precisão, otimizando continuamente para máximo retorno.",
    highlight: "Resultados rápidos"
  },
  {
    icon: Users,
    title: "Time Especializado",
    description: "Nossa equipe é formada por especialistas certificados em Google Ads, Meta Ads e análise de dados avançada.",
    highlight: "Expertise comprovada"
  },
  {
    icon: Award,
    title: "Metodologia Própria",
    description: "Utilizamos nossa metodologia proprietária de otimização contínua baseada em dados e testes constantes.",
    highlight: "Processo exclusivo"
  },
  {
    icon: Building2,
    title: "Parceria Estratégica",
    description: "Trabalhamos como extensão do seu time, com transparência total e foco no crescimento sustentável do seu negócio.",
    highlight: "Relacionamento duradouro"
  },
  {
    icon: Lightbulb,
    title: "Inovação Constante",
    description: "Estamos sempre à frente das tendências do mercado digital, implementando as melhores práticas e tecnologias.",
    highlight: "Sempre evoluindo"
  }
];

export function AboutUsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, carouselItems.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossa História</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            O que fazemos?
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Somos especialistas em transformar visitantes em clientes através de estratégias digitais 
            personalizadas e execução impecável.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-12 w-12 rounded-full border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-12 w-12 rounded-full border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Carousel Items */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {carouselItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="h-full bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 group hover:border-primary/40 transition-all duration-300">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-black" />
                      </div>
                      
                      <div className="inline-block px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
                        <span className="text-primary text-sm font-semibold">{item.highlight}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Story */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Fundada por especialistas apaixonados por marketing digital, nossa agência surgiu 
              da percepção de que muitas empresas estavam perdidas no mundo complexo do marketing online. 
              Decidimos criar um ambiente onde a estratégia encontra a execução perfeita.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ao longo de nossa trajetória, desenvolvemos uma metodologia única que combina 
              análise profunda de dados, criatividade estratégica e foco absoluto no ROI dos nossos clientes. 
              Cada projeto é tratado como uma parceria de longo prazo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hoje, continuamos evoluindo e inovando, sempre com o mesmo propósito que nos guiou 
              desde o início: fazer nossos parceiros prosperarem no ambiente digital através de 
              estratégias inteligentes e execução impecável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}