import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Efeitos cinematográficos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse delay-600"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-400"></div>
        <div className="absolute top-40 right-40 w-32 h-32 bg-primary/25 rounded-full blur-2xl animate-pulse delay-800"></div>
        <div className="absolute bottom-40 left-40 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Pronto para escalar seu negócio com{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                tráfego pago?
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Converse com um especialista e descubra como podemos ajudar você a transformar cliques em clientes.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="cta" 
              size="xl" 
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Solicitar Diagnóstico Gratuito
            </Button>
          </div>
          
          <div className="text-sm text-white/70">
            Sem compromisso • Receba insights em 24 horas
          </div>
        </div>
      </div>
    </section>
  );
}