import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FormModal } from "@/components/FormModal";

export function SolutionSection() {
  return (
    <section className="py-20 px-4 text-white bg-gradient-to-br from-background via-background/95 to-primary/10 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-radial from-primary/12 via-primary/6 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-accent/10 via-accent/5 to-transparent rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* First Section - Enhanced */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            A Solução que oferecemos
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-card/30 rounded-3xl border border-border/50 backdrop-blur-sm p-12">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed text-center font-medium mb-8">
                Nosso trabalho é <span className="text-primary font-bold">vendas</span>. Sem firulas ou textinhos bonitos de Marketing para tentar mostrar que somos uma agência diferente. 
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                Quando você se tornar nosso parceiro, vamos fazer de tudo pra você <span className="text-primary font-semibold">vender muito</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section - Enhanced */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Como vou fazer você <span className="text-primary">vender em 24hrs</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card/20 rounded-2xl p-8 border border-border/30">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Análise Imediata</h3>
                <p className="text-muted-foreground text-sm">Identificamos gargalos que impedem suas vendas</p>
              </div>
              
              <div className="bg-card/20 rounded-2xl p-8 border border-border/30">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Implementação Rápida</h3>
                <p className="text-muted-foreground text-sm">Estratégias em ação sem enrolação</p>
              </div>
              
              <div className="bg-card/20 rounded-2xl p-8 border border-border/30">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Resultados Concretos</h3>
                <p className="text-muted-foreground text-sm">Mudanças visíveis nas primeiras 24h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Section - Enhanced and Segmented */}
        <div className="space-y-16">
          {/* Warning Header */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-6">
              <X className="h-10 w-10 text-red-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
              ATENÇÃO: Perfil que NÃO aceitamos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Esse é o EXATO perfil de cliente que nós <span className="text-red-400 font-semibold">NÃO TRABALHAMOS</span> aqui
            </p>
          </div>

          {/* Client Profile Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-red-500/5 border-2 border-red-500/20 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <X className="h-4 w-4 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-400">Empresas "Espertas"</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <X className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Querem resultados sem investir adequadamente</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Procuram soluções milagrosas instantâneas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Acham que sabem mais que especialistas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-red-500/5 border-2 border-red-500/20 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <X className="h-4 w-4 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-400">Empresas Desconfiadas</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <X className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Não confiam no nosso processo testado</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Não querem trabalhar em parceria real</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Questionam cada decisão estratégica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-card/30 rounded-3xl border border-border/50 backdrop-blur-sm p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Você <span className="text-primary">NÃO</span> se encaixa nesse perfil?
              </h3>
              <p className="text-muted-foreground mb-6">
                Ótimo! Vamos conversar e descobrir como podemos ajudar você a vender mais.
              </p>
              
              <FormModal>
                <Button 
                  size="lg" 
                  className="text-black px-10 py-4 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-semibold text-lg"
                >
                  Quero descobrir se sou o perfil ideal
                </Button>
              </FormModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}