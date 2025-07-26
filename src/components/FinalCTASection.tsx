import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Clock } from "lucide-react";
export function FinalCTASection() {
  return (
    <section className="py-16 lg:py-24 bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="bg-card/50 border border-border rounded-2xl p-8 lg:p-12">
          <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
          
          {/* ATENÇÃO/URGÊNCIA */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-red-400">ÚLTIMA CHANCE!</span><br />
            Não Deixe Seus Concorrentes<br />
            <span className="text-primary">Dominarem o Mercado</span>
          </h2>
          
          {/* DESEJO/AÇÃO */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-400 font-semibold">Enquanto você hesita, seus concorrentes estão faturando mais.</span><br />
            Pare de assistir de camarote e comece hoje mesmo a transformar 
            seus anúncios em uma máquina de vendas que trabalha 24h por dia.
          </p>
          
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-8">
            <p className="text-primary font-semibold text-lg">
              ⚡ Vagas limitadas para novos clientes em Janeiro 2025
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black px-8 py-6 text-lg font-bold rounded-lg w-full sm:w-auto animate-pulse"
              onClick={() => window.open('https://typebot.co/my-typebot-e19rlye', '_blank')}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              GARANTIR MINHA VAGA AGORA
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