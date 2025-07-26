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
            {/* ATENÇÃO - Headline que chama atenção */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-red-400">PARE DE QUEIMAR DINHEIRO!</span><br />
              Transforme seus Anúncios em<br />
              uma <span className="text-primary">Máquina de Vendas</span>
            </h1>
            
            {/* INTERESSE - Desperta interesse mostrando a solução */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6">
              Descubra como empresários inteligentes estão <span className="text-primary font-semibold">triplicando suas vendas</span> 
              enquanto seus concorrentes desperdiçam fortunas em anúncios que não funcionam.
            </p>
            
            {/* DESEJO - Cria desejo mostrando o que oferecemos */}
            <div className="bg-card/30 border border-primary/20 rounded-lg p-4 mb-8">
              <p className="text-lg text-foreground font-medium">
                Somos a agência que cuida do seu dinheiro como se fosse nosso, 
                criando estratégias que <span className="text-primary">garantem resultados reais</span> 
                e crescimento previsível para sua empresa.
              </p>
            </div>
            
            {/* AÇÃO - Call to action claro e urgente */}
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black px-12 py-6 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://typebot.co/my-typebot-e19rlye', '_blank')}
            >
              QUERO RESULTADOS AGORA
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              ⚡ Resposta em até 2 horas - Vagas limitadas
            </p>
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
        
        {/* Message Balloon - Problem */}
        

        {/* Solution Balloon */}
        
      </div>
    </section>;
}