import { Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import realDashboardSales from "@/assets/real-dashboard-sales.jpg";
export function CourseHeroSection() {
  return <section className="min-h-screen bg-background text-foreground flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-80 h-80 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-64 h-64 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold mb-4">Blast Company <span className="text-primary">ads</span></h2>
        </div>
        
        {/* Main Content - Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Nosso trabalho é Aumentar<br />
              as Vendas da sua Empresa<br />
              com Tráfego <span className="text-primary">de verdade</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              Somos uma agência parceira estratégica da sua empresa, criando estratégias vencedoras e cuidando do seu investimento como se o dinheiro fosse nosso.
            </p>
            
            {/* CTA Button */}
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black px-12 py-6 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              SOLICITAR ORÇAMENTO
            </Button>
          </div>
          
          {/* Image Content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={realDashboardSales} alt="Dashboard SaaS Analytics" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          
          
          
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