import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Clock } from "lucide-react";
export function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Multiplicar suas Vendas?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não perca mais tempo queimando dinheiro. Comece hoje mesmo a trabalhar com uma agência que entende de performance e resultados reais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-green-600">
              <MessageSquare className="h-5 w-5 mr-2" />
              <span className="font-medium">Consulta Gratuita</span>
            </div>
            <div className="flex items-center text-blue-600">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-medium">Resposta em 24h</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg font-semibold group">
            Solicitar Orçamento Agora
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Sem compromisso • Análise gratuita do seu negócio
          </p>
        </div>
      </div>
    </section>
  );
}