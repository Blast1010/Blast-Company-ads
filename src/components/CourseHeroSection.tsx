import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Users, Award } from "lucide-react";

export function CourseHeroSection() {
  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-80 h-80 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-64 h-64 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-primary text-xl font-bold mb-4">Aladdin</h2>
        </div>
        
        {/* Main Headline */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Nosso trabalho é Aumentar<br />
            as Vendas da sua Empresa<br />
            com Tráfego <span className="text-primary">de verdade</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos uma agência parceira estratégica da sua empresa, criando estratégias vencedoras e cuidando do seu investimento como se o dinheiro fosse nosso.
          </p>
        </div>
        
        {/* Video Preview */}
        <div className="mb-12">
          <div className="bg-card rounded-lg p-4 max-w-md mx-auto mb-6 border border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Play className="h-6 w-6 text-primary" />
                <span className="text-sm">Clique e veja como será!</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mb-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            QUERO PARTICIPAR
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
        
        {/* Bottom Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Ferramentas que<br />
            você irá <span className="text-primary">aprender</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aprenda o principio da tráfego pago e a <br />
            construir funis de vendas usando as melhores <br />
            técnicas e ferramentas do mercado.
          </p>
        </div>
      </div>
    </section>
  );
}