import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Clock } from "lucide-react";
export function FinalCTASection() {
  return <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-primary/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Main CTA Content */}
        <div className="space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Não perca mais tempo queimando dinheiro. Comece hoje mesmo a ver resultados reais com nossa estratégia comprovada.
            </p>
          </div>

          {/* Benefits Cards */}
          

          {/* Final CTA */}
          <div className="space-y-6">
            <Button size="lg" className="px-16 py-6 text-xl font-bold bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 rounded-full text-black">
              Quero Aumentar Minhas Vendas Agora
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ⚡ Resposta em até 2 horas • 🎯 Sem compromisso • 📈 Resultados garantidos
            </p>
          </div>

          {/* Urgency Element */}
          
        </div>
      </div>
    </section>;
}