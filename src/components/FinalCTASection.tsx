import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Clock } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-primary/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Main CTA Content */}
        <div className="space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Pronto para Multiplicar
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                suas Vendas?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Não perca mais tempo queimando dinheiro. Comece hoje mesmo a ver resultados reais com nossa estratégia comprovada.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="p-6 rounded-xl bg-gradient-to-br from-background to-muted/30 border border-border/50">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Análise Gratuita</h3>
              <p className="text-sm text-muted-foreground">Diagnóstico completo das suas campanhas atuais</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-background to-muted/30 border border-border/50">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Resultados em 30 dias</h3>
              <p className="text-sm text-muted-foreground">Primeiras otimizações e melhorias visíveis</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-background to-muted/30 border border-border/50">
              <ArrowRight className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Sem Compromisso</h3>
              <p className="text-sm text-muted-foreground">Comece sem contratos longos ou taxas ocultas</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="px-16 py-6 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 rounded-full"
            >
              Quero Aumentar Minhas Vendas Agora
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ⚡ Resposta em até 2 horas • 🎯 Sem compromisso • 📈 Resultados garantidos
            </p>
          </div>

          {/* Urgency Element */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
            <p className="text-red-400 font-semibold">
              ⏰ Vagas limitadas para novos clientes este mês
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Garantimos atenção personalizada com nossa equipe dedicada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}