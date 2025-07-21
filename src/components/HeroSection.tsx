import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, Shield } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
import saasDashboard from "@/assets/saas-sales-dashboard.jpg";
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
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
          {/* Content Section - Professional Typography */}
          <div className="lg:col-span-7 space-y-10">
            {/* Main Headline */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                ✓ Agência Certificada Google & Meta
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
                Aumentamos as Vendas da sua Empresa com
                <span className="block mt-2 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Tráfego Pago Profissional
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Parceria estratégica focada em resultados reais. Cuidamos do seu investimento como se fosse nosso, com transparência total e estratégias vencedoras.
              </p>
            </div>

            {/* Value Propositions - Professional Cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-background to-muted/30 border border-border/50">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">ROI Garantido</h3>
                  <p className="text-sm text-muted-foreground">Campanhas otimizadas para maximizar retorno sobre investimento</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-background to-muted/30 border border-border/50">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Transparência Total</h3>
                  <p className="text-sm text-muted-foreground">Dashboard em tempo real com todas as métricas e investimentos</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-background to-muted/30 border border-border/50">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Suporte Estratégico</h3>
                  <p className="text-sm text-muted-foreground">Acompanhamento contínuo com reuniões estratégicas regulares</p>
                </div>
              </div>
            </div>

            {/* Professional CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="px-8 py-4 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Solicitar Análise Gratuita
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-base font-medium border-border hover:bg-muted/50 transition-all duration-300"
              >
                Ver Cases de Sucesso
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">R$ 50M+</div>
                <div className="text-sm text-muted-foreground">Investimento Gerenciado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">350%</div>
                <div className="text-sm text-muted-foreground">ROI Médio</div>
              </div>
            </div>
          </div>

          {/* Image Section - Professional Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20">
                <img 
                  src={saasDashboard} 
                  alt="Dashboard Profissional de Análise de Vendas" 
                  className="w-full h-auto object-cover"
                />
                
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
    </section>
  );
}