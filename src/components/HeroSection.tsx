import { Button } from "@/components/ui/button";
import { Mail, Crown, Award } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 overflow-hidden text-white">
      {/* Simplified Light Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main ambient light - simplified */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[100%] h-[60vh] 
                        bg-gradient-radial from-primary/15 via-primary/8 to-transparent 
                        rounded-full blur-2xl opacity-60 animate-breathe"></div>
        
        {/* Secondary glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120%] h-[40vh] 
                        bg-gradient-to-t from-primary/10 via-primary/5 to-transparent 
                        blur-xl opacity-40 animate-breathe"></div>
        
        {/* Subtle top accent */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 
                        bg-gradient-to-b from-primary/8 to-transparent 
                        blur-xl opacity-25"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Logo */}
        <div className="text-center mb-16">
          
          
          {/* User Logo */}
          <div className="mb-4">
            
          </div>
          
          <h2 className="text-2xl md:text-2xl font-bold tracking-tight">
            Blast Company <span className="text-primary">ads</span>
          </h2>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-center">
              <span className="text-primary text-lg md:text-xl font-medium tracking-wide uppercase">NOSSO TRABALHO É</span><br />
              <span className="text-4xl md:text-5xl lg:text-6xl">AUMENTAR AS VENDAS</span><br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
                DA SUA EMPRESA
              </span><br />
              <span className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-semibold">
                com tráfego de verdade
              </span>
            </h1>
            
            <div className="space-y-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
              
              <div className="space-y-4 text-center">
                <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed text-left">
                  <span className="font-bold text-red-500">Cansou de queimar dinheiro</span> em campanhas que não geram resultado? 
                  Enquanto você lê isso, seus <span className="text-primary font-bold">concorrentes estão vendendo mais</span>.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
                  <span className="text-foreground font-medium">Chega de desculpas.</span> Nosso método já fez empresas 
                  aumentarem suas vendas em <span className="text-primary font-bold">300% em 90 dias</span>, 
                  investindo <span className="text-primary font-bold">50% menos</span> que antes.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <ProgressiveForm />
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center group">
            <div className="relative flex-shrink-0 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <Crown className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">Resultados em 30 Dias</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Ou devolvemos 100% do seu investimento
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center group">
            <div className="relative flex-shrink-0 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <Award className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">Mais Vendas, Menos Gasto</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Sistema comprovado que multiplica seu faturamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}