
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
              <span className="text-foreground">O momento de decidir</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                é agora
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Sua empresa precisa de um parceiro que entenda do seu negócio e que tenha experiência comprovada.
            </p>
          </div>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center gap-4 p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">+</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Experiência Real</h3>
              <p className="text-muted-foreground text-center text-sm">Anos trabalhando com diversos segmentos de mercado</p>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">%</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Foco em Resultado</h3>
              <p className="text-muted-foreground text-center text-sm">Nosso sucesso está diretamente ligado ao seu</p>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">24</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Suporte Total</h3>
              <p className="text-muted-foreground text-center text-sm">Equipe disponível para acompanhar sua jornada</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Vamos começar sua jornada?
              </h3>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Entre em contato e vamos analisar as oportunidades específicas do seu mercado.
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
            
            {/* Trust Elements */}
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Análise gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Primeira consulta sem custo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Diagnóstico personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
