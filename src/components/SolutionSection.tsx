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
        {/* First Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            A Solução que oferecemos
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              Nosso trabalho é vendas. Sem firulas ou textinhos bonitos de Marketing para tentar mostrar 
              que somos uma agência diferente. Quando você se tornar nosso parceiro, vamos fazer de tudo 
              pra você vender muito.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Como vou fazer você vender em 24hrs
          </h2>
        </div>

        {/* Third Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 bg-card/50 rounded-3xl border border-border/50 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <X className="h-8 w-8 text-red-400" />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-red-400">
              Não vamos, esse é o EXATO perfil de cliente que nós NÃO ACEITAMOS aqui
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Empresas que querem resultados sem investir</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Clientes que não confiam no nosso processo</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Quem procura soluções milagrosas instantâneas</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Empresas que não querem trabalhar em parceria</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <FormModal>
                <Button 
                  size="lg" 
                  className="text-black px-8 py-3 bg-primary hover:bg-primary/90 transition-colors"
                >
                  Vamos conversar e ver se você se encaixa
                </Button>
              </FormModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}