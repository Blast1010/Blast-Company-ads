import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { FormModal } from "@/components/FormModal";

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-background/90 to-primary/5 relative overflow-hidden">
      {/* Enhanced Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary light source */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-accent/15 via-accent/8 to-transparent rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDelay: "2s" }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 right-1/3 w-4 h-4 bg-primary/50 rounded-full animate-bounce opacity-60" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-accent/40 rounded-full animate-bounce opacity-50" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 right-1/5 w-2 h-2 bg-primary/60 rounded-full animate-pulse opacity-70" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="space-y-12">
          {/* Enhanced Header */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary font-semibold text-sm mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              ÚLTIMA CHANCE HOJE
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Pronto para</span>{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                MULTIPLICAR
              </span>
              <br />
              <span className="text-foreground">suas vendas em</span>{" "}
              <span className="text-primary font-bold">30 dias?</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Pare de perder tempo e dinheiro com campanhas que não funcionam. 
                <br />
                <span className="text-primary font-semibold">Nossa metodologia BLAST</span> já transformou centenas de negócios.
              </p>
              
              {/* Urgency Elements */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">ROI médio: +284%</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-400 font-semibold">Resultados em 30 dias</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-semibold">100% Garantido</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-xl animate-pulse"></div>
              <FormModal>
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="relative group px-12 py-6 text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:to-primary transition-all duration-300 shadow-2xl"
                >
                  <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:scale-105 transition-transform">
                    QUERO MULTIPLICAR MINHAS VENDAS AGORA
                  </span>
                </Button>
              </FormModal>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Análise gratuita em 24h</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Estratégia personalizada</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-accent">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Resultados garantidos ou dinheiro de volta</span>
              </div>
            </div>
            
            {/* Final Scarcity */}
            <div className="flex items-center justify-center gap-2 text-orange-400 font-semibold">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
              <span>⚡ Apenas 3 vagas disponíveis para análise gratuita hoje</span>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}