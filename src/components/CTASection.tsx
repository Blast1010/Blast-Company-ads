import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { FormModal } from "@/components/FormModal";

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-block-cta relative overflow-hidden shadow-block">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Pronto para{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                VENDER MAIS
              </span>{" "}
              investindo menos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entre em contato agora e descubra como podemos <span className="text-primary font-semibold">turbinar suas vendas</span> com estratégias comprovadas.
            </p>
          </div>
          
          <div className="flex justify-center">
            <FormModal>
              <Button 
                variant="cta" 
                size="xl" 
                className="group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                QUERO VENDER MAIS
              </Button>
            </FormModal>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Análise gratuita • Estratégia personalizada • Resultados garantidos
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}