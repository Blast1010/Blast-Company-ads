import { Button } from "@/components/ui/button";
import { Mail, Crown, Award } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 overflow-hidden text-white">
      {/* Cinematic Ambient Light Effects - Emerging from Bottom */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary ambient emergence - Main cinematic light from bottom */}
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[200%] h-[100vh] 
                        bg-gradient-radial from-primary/30 via-primary/15 via-primary/8 to-transparent 
                        rounded-full animate-ambient-emerge"></div>
        
        {/* Secondary ambient pulse - Continuous breathing effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-[80vh] 
                        bg-gradient-to-t from-primary/20 via-primary/10 via-primary/5 to-transparent 
                        blur-2xl animate-ambient-pulse"></div>
        
        {/* Floating accent lights */}
        <div className="absolute bottom-20 left-[20%] w-32 h-32 
                        bg-primary/20 rounded-full blur-xl animate-cinematic-float"
                        style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-40 right-[15%] w-24 h-24 
                        bg-primary/15 rounded-full blur-lg animate-cinematic-float"
                        style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-10 left-[60%] w-20 h-20 
                        bg-primary/25 rounded-full blur-lg animate-cinematic-float"
                        style={{ animationDelay: '6s' }}></div>
        
        {/* Subtle atmospheric top accent */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-20 
                        bg-gradient-to-b from-primary/5 to-transparent 
                        blur-lg opacity-40 animate-cinematic-breathe"></div>
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
              <span className="text-primary text-lg md:text-xl font-medium tracking-wide uppercase">CANSADO DE VER</span><br />
              <span className="text-4xl md:text-5xl lg:text-6xl">SEU DINHEIRO</span><br />
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
                DESAPARECER?
              </span><br />
              <span className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-semibold">
                Chegou a hora de mudar isso
              </span>
            </h1>
            
            <div className="space-y-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
              
              <div className="space-y-6 text-center">
                <p className="text-xl md:text-2xl text-red-400 font-bold leading-relaxed">
                  Você investe na internet e não vê retorno?
                </p>
                
                <div className="space-y-4 max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    <span className="text-red-400 font-semibold">✗</span> Gasta em anúncios que não trazem clientes<br/>
                    <span className="text-red-400 font-semibold">✗</span> Vê os concorrentes crescendo enquanto você fica parado<br/>
                    <span className="text-red-400 font-semibold">✗</span> Não sabe se o dinheiro investido está dando resultado
                  </p>
                </div>
                
                <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto my-8"></div>
                
                <p className="text-xl md:text-2xl text-primary font-bold leading-relaxed">
                  Imagine ter clientes chegando todo dia
                </p>
                
                <div className="space-y-4 max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    <span className="text-primary font-semibold">✓</span> Seu telefone tocando com pessoas interessadas no seu produto<br/>
                    <span className="text-primary font-semibold">✓</span> Vendas acontecendo mesmo quando você está dormindo<br/>
                    <span className="text-primary font-semibold">✓</span> Seu negócio crescendo de forma consistente e previsível
                  </p>
                </div>
                
                <p className="text-base md:text-lg text-foreground font-medium leading-relaxed max-w-2xl mx-auto border-l-4 border-primary pl-4">
                  <span className="text-primary font-bold">É exatamente isso que fazemos:</span> transformamos 
                  empresários frustrados em donos de negócios prósperos e previsíveis.
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
              <h3 className="text-lg font-semibold text-foreground mb-2">Solução Sob Medida</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Criamos a estratégia perfeita para o seu tipo de negócio
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
              <h3 className="text-lg font-semibold text-foreground mb-2">Resultados Crescentes</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Seus clientes aumentam mês após mês, de forma consistente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}