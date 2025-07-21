import { Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import realDashboardSales from "@/assets/real-dashboard-sales.jpg";
export function CourseHeroSection() {
  return <section className="min-h-screen bg-background text-foreground flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-0 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-80 h-80 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-64 h-64 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
            Blast Company <span className="text-primary">ads</span>
          </h2>
        </div>
        
        {/* Main Content - Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Nosso trabalho é Aumentar{" "}
              <span className="block sm:inline">as Vendas da sua Empresa</span>{" "}
              <span className="block sm:inline">
                com Tráfego <span className="text-primary">de verdade</span>
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              Somos uma agência parceira estratégica da sua empresa, criando estratégias vencedoras e cuidando do seu investimento como se o dinheiro fosse nosso.
            </p>
            
            {/* CTA Button */}
            <div className="pt-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg xl:text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                SOLICITAR ORÇAMENTO
              </Button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
              <img src={realDashboardSales} alt="Dashboard SaaS Analytics" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        {/* Problem Balloon */}
        <div className="max-w-4xl mx-auto">
          
        </div>

        {/* Solution Balloon */}
        <div className="max-w-4xl mx-auto">
          
        </div>
      </div>
    </section>;
}