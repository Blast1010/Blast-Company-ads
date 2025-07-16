import { Button } from "@/components/ui/button";
import { Crown, Award } from "lucide-react";

export function GoogleMetaAdsSection() {
  return (
    <section className="py-20 px-4 text-white overflow-hidden relative">
      <div className="container mx-auto max-w-5xl">
        {/* Conteúdo em balões lado a lado */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Balão de Dor */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">💸</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-red-400 leading-tight">
                    CANSADO DE VER SEU<br />
                    <span className="text-3xl md:text-4xl bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                      DINHEIRO DESAPARECER?
                    </span>
                  </h2>
                  
                  <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-red-400 rounded-full mx-auto"></div>
                  
                  <p className="text-lg md:text-xl text-red-400 font-semibold">
                    Você investe na internet e não vê retorno?
                  </p>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 font-bold text-xl mt-1">✗</span>
                      <p className="text-lg text-muted-foreground">Gasta em anúncios que não trazem clientes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 font-bold text-xl mt-1">✗</span>
                      <p className="text-lg text-muted-foreground">Vê os concorrentes crescendo enquanto você fica parado</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 font-bold text-xl mt-1">✗</span>
                      <p className="text-lg text-muted-foreground">Não sabe se o dinheiro investido está dando resultado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Balão de Desejo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-primary/30 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-primary/20 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">🚀</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                    IMAGINE TER<br />
                    <span className="text-3xl md:text-4xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      CLIENTES TODO DIA
                    </span>
                  </h2>
                  
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
                  
                  <p className="text-lg md:text-xl text-primary font-semibold">
                    Seu negócio crescendo de forma previsível
                  </p>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start space-x-3">
                      <span className="text-primary font-bold text-xl mt-1">✓</span>
                      <p className="text-lg text-muted-foreground">Seu telefone tocando com pessoas interessadas no seu produto</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-primary font-bold text-xl mt-1">✓</span>
                      <p className="text-lg text-muted-foreground">Vendas acontecendo mesmo quando você está dormindo</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-primary font-bold text-xl mt-1">✓</span>
                      <p className="text-lg text-muted-foreground">Seu negócio crescendo de forma consistente e previsível</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Seção Google e Meta Ads */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Domine o <span className="text-primary">Google</span> e <span className="text-blue-500">Meta</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As duas plataformas mais poderosas para transformar visitantes em clientes pagantes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Google Ads */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">G</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Google Ads
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Capture clientes no exato momento que eles procuram por você
                  </p>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start space-x-3">
                      <span className="text-primary font-bold text-lg mt-1">✓</span>
                      <p className="text-base text-muted-foreground">Apareça primeiro nas pesquisas</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-primary font-bold text-lg mt-1">✓</span>
                      <p className="text-base text-muted-foreground">Pague apenas por cliques reais</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-primary font-bold text-lg mt-1">✓</span>
                      <p className="text-base text-muted-foreground">Controle total do orçamento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meta Ads */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center">
                    <span className="text-4xl font-bold text-blue-500">M</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Meta Ads
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Alcance milhões de pessoas no Facebook e Instagram
                  </p>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-500 font-bold text-lg mt-1">✓</span>
                      <p className="text-base text-muted-foreground">Segmentação ultra-precisa</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-500 font-bold text-lg mt-1">✓</span>
                      <p className="text-base text-muted-foreground">Conteúdo visual impactante</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-500 font-bold text-lg mt-1">✓</span>
                      <p className="text-base text-muted-foreground">Remarketing inteligente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed border-l-4 border-primary pl-6">
              <span className="text-primary font-bold">É exatamente isso que fazemos:</span> transformamos 
              empresários frustrados em donos de negócios prósperos e previsíveis.
            </p>
          </div>
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Solicitar Orçamento
          </Button>
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
    </section>
  );
}