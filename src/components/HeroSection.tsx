import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, Shield } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
import saasDashboard from "@/assets/saas-sales-dashboard.jpg";
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Professional Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-60"></div>
        
        {/* Professional lighting effects */}
        <div className="absolute top-20 left-[10%] w-80 h-80 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-[15%] w-64 h-64 bg-gradient-radial from-primary/10 via-primary/3 to-transparent rounded-full blur-2xl opacity-30"></div>
        
        {/* Geometric elements for professionalism */}
        <div className="absolute top-1/4 right-[20%] w-1 h-20 bg-gradient-to-b from-primary/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-[15%] w-1 h-16 bg-gradient-to-b from-primary/15 to-transparent"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Professional Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Content Section - Original Copy with Professional Layout */}
          <div className="lg:col-span-6 space-y-8">
            {/* Company Name */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Blast Company <span className="text-primary">ads</span>
              </h2>
            </div>
            
            {/* Main Headline - Original Text */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl leading-[1.1] tracking-tight text-foreground text-left lg:text-6xl font-bold">
                Nosso trabalho é Aumentar<br />
                as Vendas da sua Empresa<br />
                com <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">Tráfego de verdade</span>
              </h1>
            </div>

            {/* Original Balloons - Professional Format */}
            <div className="space-y-6">
              {/* Primeiro balão - Original text */}
              <div className="relative p-6 lg:p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 backdrop-blur-sm rounded-xl">
                <p className="text-lg leading-relaxed text-foreground font-medium">
                  Somos uma agência <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">parceira estratégica</span> da sua empresa, criando estratégias vencedoras e cuidando do seu investimento como se o dinheiro fosse nosso.
                </p>
              </div>
              
              {/* Segundo balão - Original text */}
              <div className="relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-muted/50 via-background to-muted/30 border border-border backdrop-blur-sm">
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-red-500">
                    Cansou de queimar dinheiro em campanhas que não geram resultados?
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Enquanto você lê isso, seus concorrentes estão vendendo mais — e pagando menos por isso. 
                    Eles entenderam que tráfego pago não é sobre gastar, e sim investir com inteligência e foco em performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Original CTA - Professional Format */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="px-12 py-4 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full text-black text-center text-xl font-bold"
                onClick={() => window.open('https://typebot.co/my-typebot-e19rlye', '_blank')}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>

          {/* Image Section - Professional Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20">
                <img src={saasDashboard} alt="Dashboard SaaS com notificações de vendas" className="w-full h-auto object-cover" />
                
                {/* Professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>
              </div>
              
              {/* Professional floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                +47% Vendas
              </div>
              
              <div className="absolute top-1/2 -left-6 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                ROI: 420%
              </div>
              
              <div className="absolute -bottom-4 left-1/3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                -35% CPA
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute top-10 -right-2 w-2 h-2 bg-primary/30 rounded-full"></div>
              <div className="absolute bottom-20 -left-2 w-3 h-3 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}