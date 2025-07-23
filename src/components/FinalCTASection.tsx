import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Clock } from "lucide-react";
export function FinalCTASection() {
  return (
    <section className="py-16 lg:py-24 bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="bg-card/50 border border-border rounded-2xl p-8 lg:p-12">
          <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Não Perca Mais Tempo
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Enquanto você decide, seus concorrentes estão vendendo mais. 
            Comece hoje mesmo a transformar seus anúncios em uma máquina de vendas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black px-8 py-6 text-lg font-bold rounded-lg w-full sm:w-auto">
              <MessageSquare className="w-5 h-5 mr-2" />
              Começar Agora
            </Button>
            
            <div className="flex items-center text-muted-foreground">
              <ArrowRight className="w-4 h-4 mr-2" />
              <span className="text-sm">Resposta em até 2 horas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}