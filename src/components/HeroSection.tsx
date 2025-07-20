import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, Shield } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
export function HeroSection() {
  return <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 text-foreground overflow-hidden">
      {/* Enhanced Background Effects - Responsivos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 opacity-60"></div>
        
        {/* Animated light orbs - Responsivos */}
        <div className="absolute top-10 sm:top-20 left-[5%] sm:left-[10%] w-48 sm:w-96 h-48 sm:h-96 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-[10%] sm:right-[15%] w-40 sm:w-80 h-40 sm:h-80 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-xl sm:blur-2xl animate-pulse opacity-50" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Floating elements - Ajustados para mobile */}
        <div className="absolute top-20 sm:top-40 right-[15%] sm:right-[20%] w-2 sm:w-4 h-2 sm:h-4 bg-primary/40 rounded-full animate-bounce opacity-60" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-40 sm:bottom-60 left-[20%] sm:left-[25%] w-1.5 sm:w-3 h-1.5 sm:h-3 bg-primary/30 rounded-full animate-bounce opacity-40" style={{
        animationDelay: '3s'
      }}></div>
        <div className="absolute top-60 sm:top-80 left-[50%] sm:left-[60%] w-1 sm:w-2 h-1 sm:h-2 bg-primary/50 rounded-full animate-bounce opacity-80" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Texto Principal - 8 colunas */}
          <div className="lg:col-span-8 space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-foreground block">Nosso trabalho é Aumentar</span>
                <span className="text-foreground block">as Vendas da sua Empresa com</span>
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent block">Tráfego de verdade</span>
              </h1>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                QUERO UMA ANÁLISE GRATUITA
              </Button>
            </div>

            {/* Description */}
            <div className="space-y-4 pt-6">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                <span className="text-red-500 font-semibold">Cansou de queimar dinheiro em campanhas que não geram resultados?</span>
              </p>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Enquanto você lê isso, seus concorrentes estão vendendo mais — e pagando menos por isso. 
                Eles entenderam que tráfego pago não é sobre gastar, e sim investir com estratégia.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground/80 max-w-3xl">
                Somos uma agência parceira estratégica da sua empresa, 
                criando estratégias vencedoras e cuidando do seu investimento como se o dinheiro fosse nosso!
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-primary">+500</span>
                <span className="text-sm text-muted-foreground">Empresas<br />atendidas</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-primary">+R$ 50M</span>
                <span className="text-sm text-muted-foreground">Em vendas<br />geradas</span>
              </div>
            </div>
          </div>

          {/* Imagem - 4 colunas */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/team-analytics.jpg" 
                  alt="Profissional analisando estratégias digitais" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="pt-16 max-w-2xl mx-auto">
          <ProgressiveForm />
        </div>
      </div>
    </section>;
}