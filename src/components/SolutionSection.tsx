import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FormModal } from "@/components/FormModal";
export function SolutionSection() {
  return <section className="py-20 px-4 text-white bg-gradient-to-br from-background via-background/95 to-primary/10 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-radial from-primary/12 via-primary/6 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-accent/10 via-accent/5 to-transparent rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* First Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossa Proposta</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            A Solução Definitiva para Seu Crescimento
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center font-medium">
              Transformamos empresas em máquinas de vendas através de estratégias digitais precisas e execução impecável. 
              Nosso foco é simples: <span className="text-primary font-semibold">fazer você vender mais</span>.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Como vou fazer você vender em 24hrs?
          </h2>
        </div>

        {/* Third Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm border border-red-500/30 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-400">NÃO VAMOS ,Esse é o EXATO perfil de cliente que nós NÃO ACEITAMOS</h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Empresas que querem resultados sem investir</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Acreditam que marketing digital é gratuito e que podem obter ROI sem budget adequado para mídia paga</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Clientes que não confiam no nosso processo</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Questionam cada estratégia, querem controlar tudo e não dão autonomia para executarmos o trabalho</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Negócios sem produto/serviço validado</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Empresas que ainda não provaram que o mercado quer o que oferecem ou não têm processo de vendas estruturado</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Quem procura soluções milagrosas instantâneas</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Esperam resultados em 48h sem entender que marketing digital é um processo contínuo de otimização</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Empresas que não querem trabalhar em parceria</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Veem a agência como fornecedor, não como parceiro estratégico para crescimento do negócio</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Clientes que mudam de estratégia constantemente</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Não têm paciência para aguardar resultados e ficam trocando de abordagem a cada semana</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <FormModal>
                <Button size="lg" className="text-black px-8 py-3 bg-primary hover:bg-primary/90 transition-colors">
                  Solicitar Orçamento
                </Button>
              </FormModal>
              <FormModal>
                <Button size="lg" variant="outline" className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-black transition-colors">
                  Vamos conversar e ver se você se encaixa
                </Button>
              </FormModal>
            </div>
          </div>
        </div>
      </div>
    </section>;
}