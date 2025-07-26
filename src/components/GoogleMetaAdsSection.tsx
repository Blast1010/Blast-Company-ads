import { Button } from "@/components/ui/button";
import { Crown, Award } from "lucide-react";
export function GoogleMetaAdsSection() {
  return <section className="py-20 px-4 text-white overflow-hidden relative">
      <div className="container mx-auto max-w-5xl">
        {/* Top Features */}
        

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

          {/* Call to Action */}
          <div className="mt-12 text-center">
            {/* INTERESSE/DESEJO - Mostra a transformação */}
            <div className="max-w-3xl mx-auto mb-8 space-y-6">
              <p className="text-xl md:text-2xl text-primary font-bold text-center">
                A SOLUÇÃO ESTÁ AQUI! 👇
              </p>
              <div className="bg-card/40 border border-primary/30 rounded-xl p-6">
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed text-center">
                  <span className="text-primary font-bold">Transformamos empresários frustrados 
                  em donos de negócios prósperos</span> através de estratégias de tráfego pago 
                  que realmente funcionam. Seu investimento será tratado como se fosse nosso.
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg text-muted-foreground">
                  ⏰ <span className="text-red-400 font-semibold">Cada dia que você espera, é dinheiro que seus concorrentes estão ganhando</span>
                </p>
              </div>
            </div>
            
            {/* AÇÃO - CTA com urgência */}
            <Button 
              size="xl" 
              className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 text-black"
              onClick={() => window.open('https://typebot.co/my-typebot-e19rlye', '_blank')}
            >
              QUERO SAIR DO VERMELHO AGORA
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              🚀 Análise gratuita do seu negócio • Sem compromisso
            </p>
          </div>
        </div>

        {/* Final CTA Button */}
        
      </div>
    </section>;
}