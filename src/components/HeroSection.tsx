import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, Shield } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
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
      
      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        {/* Logo & Brand - Responsivo */}
        

        {/* Main Hero Content - Estilo Ayres Marketing */}
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Título Principal em Destaque */}
          <div className="space-y-6 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground">
              Nosso trabalho é Aumentar<br />
              as Vendas da sua Empresa<br />
              com <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">Tráfego de verdade</span>
            </h1>
          </div>

          {/* Descrição - Espaçamento adequado como na Ayres */}
          <div className="max-w-3xl mx-auto animate-fade-in space-y-6" style={{
          animationDelay: '0.3s'
        }}>
            <p className="text-lg sm:text-xl leading-relaxed text-foreground font-medium">
              Somos uma agência parceira estratégica da sua empresa, criando estratégias vencedoras e cuidando do seu investimento como se o dinheiro fosse nosso.
            </p>
            
            <p className="text-lg sm:text-xl leading-relaxed text-foreground font-medium">
              Cansou de queimar dinheiro em campanhas que não geram resultados?
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Enquanto você lê isso, seus concorrentes estão vendendo mais — e pagando menos por isso. 
              Eles entenderam que tráfego pago não é sobre gastar, e sim investir com inteligência e foco em performance.
            </p>
          </div>

          {/* Botão CTA - Azul turquesa com letras pretas, centralizado */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <Button 
              size="xl" 
              className="px-12 py-4 text-lg font-semibold bg-cyan-500 hover:bg-cyan-600 text-black shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>;
}