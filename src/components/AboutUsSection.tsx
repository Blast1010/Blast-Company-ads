import { Users, Trophy, Target, Zap } from "lucide-react";

export const AboutUsSection = () => {
  const stats = [
    { number: "500+", label: "Campanhas Criadas", icon: Target },
    { number: "98%", label: "Taxa de Satisfação", icon: Trophy },
    { number: "200+", label: "Clientes Ativos", icon: Users },
    { number: "3x", label: "Aumento Médio em ROI", icon: Zap },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-primary/15 via-primary/8 to-transparent rounded-full blur-2xl opacity-40"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Logo + Name Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            {/* Logo B with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-2xl blur-lg opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl p-6 shadow-2xl shadow-primary/30 border border-primary/20">
                <span className="text-6xl lg:text-7xl font-black text-black">B</span>
              </div>
            </div>
            
            {/* Company Name */}
            <div className="ml-6">
              <h1 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent leading-tight">
                Blast Company
              </h1>
              <p className="text-2xl lg:text-3xl font-bold text-primary/80 mt-2">
                ads
              </p>
            </div>
          </div>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Somos especialistas em transformar anúncios em máquinas de vendas. 
            Nossa missão é acelerar o crescimento do seu negócio através de estratégias 
            de marketing digital comprovadas e resultados mensuráveis.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl lg:text-4xl font-black text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-card/50 border border-border rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
            Nossa Visão
          </h3>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Acreditamos que todo negócio merece crescer. Por isso, combinamos criatividade, 
            dados e tecnologia para criar campanhas que não apenas chamam atenção, 
            mas geram resultados reais e sustentáveis para nossos parceiros.
          </p>
        </div>
      </div>
    </section>
  );
};