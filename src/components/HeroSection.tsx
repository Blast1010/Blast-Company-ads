import { Button } from "@/components/ui/button";
import { Mail, Target, TrendingUp } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 bg-black overflow-hidden">
      {/* Sophisticated Cinematic Lighting System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main cinematic light emerging from bottom - Turquoise ambiance */}
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[160%] h-[140vh] 
                        bg-gradient-radial from-cyan-400/25 via-cyan-500/15 via-blue-400/10 via-cyan-300/8 to-transparent 
                        rounded-full blur-3xl opacity-80 animate-[cinematic-breathe_12s_ease-in-out_infinite]"></div>
        
        {/* Secondary atmospheric layer */}
        <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-[120%] h-[100vh] 
                        bg-gradient-radial from-cyan-300/30 via-blue-400/18 via-cyan-400/12 to-transparent 
                        rounded-full blur-2xl opacity-70 animate-[cinematic-breathe_10s_ease-in-out_infinite_2s]"></div>
        
        {/* Lateral atmospheric enhancers */}
        <div className="absolute -bottom-10 -left-20 w-[70%] h-[90vh] 
                        bg-gradient-radial from-cyan-400/20 via-blue-300/12 via-cyan-300/8 to-transparent 
                        rounded-full blur-3xl opacity-50 animate-[cinematic-breathe_14s_ease-in-out_infinite_4s]"></div>
        <div className="absolute -bottom-10 -right-20 w-[70%] h-[90vh] 
                        bg-gradient-radial from-cyan-400/20 via-blue-300/12 via-cyan-300/8 to-transparent 
                        rounded-full blur-3xl opacity-50 animate-[cinematic-breathe_14s_ease-in-out_infinite_6s]"></div>
        
        {/* Deep foundation glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200%] h-[120vh] 
                        bg-gradient-radial from-cyan-500/15 via-blue-400/8 via-cyan-300/5 to-transparent 
                        rounded-full blur-3xl opacity-40 animate-[cinematic-breathe_16s_ease-in-out_infinite_1s]"></div>
        
        {/* Floating ambient lights - Premium touch */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 
                        bg-gradient-radial from-cyan-300/18 via-blue-400/10 to-transparent 
                        rounded-full blur-3xl opacity-40 animate-[cinematic-float_20s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 
                        bg-gradient-radial from-cyan-400/15 via-blue-300/8 to-transparent 
                        rounded-full blur-3xl opacity-35 animate-[cinematic-float_25s_ease-in-out_infinite_5s]"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 
                        bg-gradient-radial from-cyan-300/12 via-blue-400/6 to-transparent 
                        rounded-full blur-3xl opacity-30 animate-[cinematic-float_30s_ease-in-out_infinite_10s]"></div>
        
        {/* Top atmospheric rim */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-48 
                        bg-gradient-to-b from-cyan-400/12 via-blue-300/8 via-cyan-300/4 to-transparent 
                        blur-2xl opacity-35 animate-[cinematic-breathe_18s_ease-in-out_infinite_3s]"></div>
        
        {/* Premium highlight overlay with sophisticated gradient */}
        <div className="absolute inset-0 
                        bg-gradient-radial from-transparent via-cyan-400/5 via-blue-400/3 via-transparent to-transparent 
                        opacity-50 animate-[cinematic-breathe_22s_ease-in-out_infinite]"></div>
        
        {/* Film grain texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 opacity-30"></div>
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
                  <span className="text-red-400 font-bold">Cansou de queimar dinheiro</span> em campanhas que não geram resultado? 
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
          <div className="flex items-center space-x-6 text-center group">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
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
          
          <div className="flex items-center space-x-6 text-center group">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
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