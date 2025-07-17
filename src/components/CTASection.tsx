
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { FormModal } from "@/components/FormModal";

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-background/95 to-primary/10 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-primary/15 via-primary/8 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-gradient-radial from-accent/12 via-accent/6 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-12">
          {/* Main Heading */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Transforme seu negócio com</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                estratégias comprovadas
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Descubra como nossa metodologia pode impulsionar seus resultados de forma consistente e sustentável.
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center gap-4 p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Análise Personalizada</h3>
              <p className="text-muted-foreground text-center text-sm">Entendemos seu negócio e criamos estratégias sob medida</p>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Acompanhamento Dedicado</h3>
              <p className="text-muted-foreground text-center text-sm">Suporte contínuo para otimizar seus resultados</p>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Transparência Total</h3>
              <p className="text-muted-foreground text-center text-sm">Acompanhe cada métrica e resultado em tempo real</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Pronto para dar o próximo passo?
              </h3>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Converse conosco e descubra como podemos ajudar seu negócio a crescer de forma inteligente.
              </p>
            </div>
            
            <div className="relative">
              <FormModal>
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="group px-12 py-6 text-xl font-semibold bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:to-primary transition-all duration-500 shadow-lg hover:shadow-primary/30 hover:scale-105 rounded-xl"
                >
                  <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:scale-105 transition-transform">
                    Conversar com Especialista
                  </span>
                </Button>
              </FormModal>
            </div>
            
            {/* Subtle Trust Elements */}
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Resposta rápida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
