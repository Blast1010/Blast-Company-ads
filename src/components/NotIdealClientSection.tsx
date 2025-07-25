import { Button } from "@/components/ui/button";
import { X, DollarSign, Clock, MessageCircleX, AlertTriangle, Target } from "lucide-react";

export function NotIdealClientSection() {
  return (
    <section className="py-20 px-4 text-white bg-gradient-to-br from-background via-background/95 to-red-500/10 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-red-500/15 via-red-500/8 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-red-500/10 via-red-500/5 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm border border-red-500/30 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-400">
              NÃO VAMOS! Esse é o EXATO perfil de cliente que nós NÃO ACEITAMOS
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Empresas que veem marketing como gasto</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Querem "só testar com pouco dinheiro" e não entendem que resultado requer investimento consistente</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircleX className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Clientes que não confiam na nossa metodologia</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Querem controlar cada detalhe, não seguem nossas recomendações e acham que sabem mais que especialistas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Negócios sem produto/serviço validado</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Não têm estrutura para atender demanda, processo de vendas confuso ou produto ainda em fase de teste</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Quem quer resultados "para ontem"</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Acham que marketing é mágica, querem ROI em 1 semana e não entendem que otimização leva tempo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Empresas que só querem o menor preço</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Focam apenas no custo, não no valor, e querem comparar nossa estratégia com freelancers baratos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Clientes sem comprometimento real</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Querem testar "só um mês", não investem em estrutura e abandonam na primeira dificuldade</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-center text-muted-foreground text-lg font-medium">
                <span className="text-red-400 font-bold">Se você se identificou com esses pontos</span>, 
                talvez não sejamos a parceria ideal. Nosso foco é trabalhar com empresas sérias que 
                querem crescer de verdade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}