import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, Shield } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
import { FormModal } from "@/components/FormModal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Enhanced Background Effects - V4 Style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/90 to-black/80"></div>
        
        {/* Subtle animated lights */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-radial from-primary/15 via-transparent to-transparent rounded-full blur-2xl animate-pulse opacity-30" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        {/* Main Hero Content - V4 Style Layout */}
        <div className="space-y-8 animate-fade-in">
          
          {/* Main Headline - V4 Style */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white block mb-2">Nosso trabalho é</span>
              <span className="text-white block mb-2">Aumentar as Vendas</span>
              <span className="text-white block mb-2">da sua Empresa com</span>
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent block">
                Tráfego de verdade
              </span>
            </h1>
          </div>

          {/* Problem Statement - Destacado */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-red-400 font-semibold leading-relaxed mb-4">
              Cansou de queimar dinheiro em campanhas que não geram resultados?
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Enquanto você lê isso, seus concorrentes estão vendendo mais — e pagando menos por isso. 
              Eles entenderam que tráfego pago não é sobre gastar, e sim investir com estratégia.
            </p>
          </div>

          {/* Solution Statement */}
          <div className="max-w-3xl mx-auto py-8">
            <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
              Somos uma agência <span className="text-primary font-bold bg-primary/20 px-3 py-1 rounded-lg">parceira estratégica</span> da sua empresa, 
              criando estratégias vencedoras e cuidando do seu investimento como se o dinheiro fosse nosso!
            </p>
          </div>

          {/* Main CTA Button - V4 Style */}
          <div className="pt-8">
            <FormModal>
              <Button 
                size="lg" 
                className="px-12 py-6 text-xl font-bold bg-primary hover:bg-primary/90 text-black shadow-2xl hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300 rounded-lg"
              >
                QUERO MAIS INFORMAÇÕES
              </Button>
            </FormModal>
          </div>

          {/* Bottom description */}
          <div className="pt-8 max-w-2xl mx-auto">
            <p className="text-gray-400 font-medium">
              Vamos analisar sua situação atual e desenvolver uma estratégia específica para seu negócio.
            </p>
          </div>

        </div>

        {/* Image Section - Mantendo a imagem existente mas com novo layout */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              <img 
                src="/src/assets/team-analytics.jpg" 
                alt="Equipe analisando estratégias digitais" 
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}