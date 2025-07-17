
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Clock, Shield } from "lucide-react";
import { FormModal } from "@/components/FormModal";

export function CTASection() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-background via-background/95 to-primary/10 relative overflow-hidden">
      {/* Enhanced Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary light source */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-primary/25 via-primary/12 to-transparent rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: "2s" }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-1/4 w-6 h-6 bg-primary/40 rounded-full animate-float opacity-70" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-accent/50 rounded-full animate-float opacity-60" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 right-1/6 w-3 h-3 bg-primary/50 rounded-full animate-pulse opacity-80" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="space-y-16">
          {/* Pain Point Header */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-destructive/20 rounded-full border border-destructive/30 text-destructive font-bold text-base mb-8">
              <Clock className="w-5 h-5 animate-pulse" />
              PARE DE DESPERDIÇAR DINHEIRO
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-muted-foreground">Cansado de</span>{" "}
              <span className="bg-gradient-to-r from-destructive via-orange-500 to-destructive bg-clip-text text-transparent">
                QUEIMAR DINHEIRO
              </span>
              <br />
              <span className="text-muted-foreground">em campanhas que</span>{" "}
              <span className="text-destructive font-black">NÃO VENDEM?</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
                Enquanto você continua testando "sozinho", seus concorrentes já estão 
                <br />
                <span className="text-primary font-bold text-3xl md:text-4xl">FATURANDO 5X MAIS</span> com nossa metodologia comprovada.
              </p>
              
              {/* Pain Points Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex flex-col items-center gap-4 p-6 bg-destructive/10 rounded-2xl border border-destructive/20">
                  <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-destructive rotate-180" />
                  </div>
                  <h3 className="text-xl font-bold text-destructive">Vendas em Queda?</h3>
                  <p className="text-muted-foreground text-center">Cada dia sem a estratégia certa é dinheiro jogado fora</p>
                </div>
                
                <div className="flex flex-col items-center gap-4 p-6 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-500">Perdendo Tempo?</h3>
                  <p className="text-muted-foreground text-center">Testando sozinho enquanto a concorrência avança</p>
                </div>
                
                <div className="flex flex-col items-center gap-4 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Sem Garantias?</h3>
                  <p className="text-muted-foreground text-center">Investindo sem saber se vai dar resultado</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desire Section */}
          <div className="space-y-8 py-16 border-y border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Imagine sua empresa <span className="text-primary">MULTIPLICANDO as vendas</span> nos próximos 30 dias...
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left space-y-4 p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
                <h4 className="text-xl font-bold text-green-400">✅ ROI de +284% garantido</h4>
                <p className="text-muted-foreground">Cada R$1 investido retorna R$2,84 ou devolvemos seu dinheiro</p>
              </div>
              
              <div className="text-left space-y-4 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                <h4 className="text-xl font-bold text-primary">✅ Vendas automáticas 24/7</h4>
                <p className="text-muted-foreground">Sistema que vende enquanto você dorme</p>
              </div>
              
              <div className="text-left space-y-4 p-6 bg-accent/10 rounded-2xl border border-accent/20">
                <h4 className="text-xl font-bold text-accent">✅ Leads qualificados diários</h4>
                <p className="text-muted-foreground">Clientes prontos para comprar chegando até você</p>
              </div>
              
              <div className="text-left space-y-4 p-6 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                <h4 className="text-xl font-bold text-orange-400">✅ Domínio total do mercado</h4>
                <p className="text-muted-foreground">Deixe a concorrência para trás definitivamente</p>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                A decisão é sua: <span className="text-destructive">continuar perdendo</span>
                <br />
                ou <span className="text-primary font-black">COMEÇAR A GANHAR HOJE?</span>
              </h3>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Não deixe para amanhã o que pode transformar seu negócio hoje. 
                Cada minuto de atraso é uma venda a menos.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-2xl blur-2xl animate-pulse"></div>
              <FormModal>
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="relative group px-16 py-8 text-2xl font-black bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:to-primary transition-all duration-500 shadow-2xl hover:shadow-primary/50 hover:scale-105 rounded-2xl"
                >
                  <MessageCircle className="mr-4 h-8 w-8 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:scale-105 transition-transform">
                    QUERO MULTIPLICAR MINHAS VENDAS AGORA
                  </span>
                </Button>
              </FormModal>
            </div>
            
            {/* Final Trust Elements */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-green-400 font-semibold">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>Análise GRATUITA</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span>Resultados em 30 dias</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span>Garantia total</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-orange-400 font-semibold">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                <span>Sem contratos longos</span>
              </div>
            </div>
            
            {/* Final Urgency */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-destructive font-bold text-lg">
                ⚠️ ATENÇÃO: Apenas 3 empresas serão aceitas esta semana
              </p>
              <p className="text-muted-foreground mt-2">
                Garantimos atenção total aos nossos clientes. Não perca sua vaga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
