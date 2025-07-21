import { Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
export function CourseHeroSection() {
  return <section className="min-h-screen bg-background text-foreground flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-80 h-80 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-64 h-64 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Blast Company <span className="text-primary">ads</span></h2>
        </div>
        
        {/* Main Headline */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 lg:text-6xl">
            Nosso trabalho é Aumentar<br />
            as Vendas da sua Empresa<br />
            com Tráfego <span className="text-primary">de verdade</span>
          </h1>
          
        </div>
        
        {/* CTA Button */}
        <div className="mb-16">
          <Button size="lg" className="bg-black hover:bg-black/90 text-white px-12 py-6 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            SOLICITAR ORÇAMENTO
          </Button>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg border border-border">
            <div className="bg-primary/20 p-4 rounded-full mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Solução Sob Medida</h3>
            <p className="text-muted-foreground text-sm text-center">Criamos a estratégia perfeita para o seu tipo de negócio</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-card/50 rounded-lg border border-border">
            <div className="bg-primary/20 p-4 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Resultados Crescentes</h3>
            <p className="text-muted-foreground text-sm text-center">Seus clientes aumentam mês após mês, de forma consistente</p>
          </div>
        </div>
        
        {/* Message Balloon */}
        <div className="mt-20">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto shadow-lg relative">
            {/* Balloon pointer */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-card border-l border-t border-border rotate-45"></div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-red-500">Cansou de queimar dinheiro em campanhas que não geram resultados?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enquanto você lê isso, seus concorrentes estão vendendo mais — e pagando menos por isso. 
                Eles entenderam que tráfego pago não é sobre gastar, e sim investir com estratégia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}