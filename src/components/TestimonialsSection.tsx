import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "João M.",
      role: "CEO de Loja Online",
      text: "A Blast Company Ads mudou completamente o jogo para nosso e-commerce. Triplicamos nossa receita em apenas 3 meses!",
      rating: 5
    },
    {
      name: "Larissa P.",
      role: "Empreendedora",
      text: "Equipe extremamente profissional e resultados reais. Não conseguimos mais viver sem tráfego pago!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de negócios reais que confiaram em nós para seu crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}