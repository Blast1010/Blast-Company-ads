import { Users, Trophy, Target, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export const AboutUsSection = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Hide intro after 6 seconds
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 6000);

    // Show content after 6.2 seconds
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 6200);

    // Hide phrases and show regular content after 12 seconds
    const finalTimer = setTimeout(() => {
      setShowContent(false);
    }, 12000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(contentTimer);
      clearTimeout(finalTimer);
    };
  }, []);

  const stats = [
    { number: "500+", label: "Campanhas Criadas", icon: Target },
    { number: "98%", label: "Taxa de Satisfação", icon: Trophy },
    { number: "200+", label: "Clientes Ativos", icon: Users },
    { number: "3x", label: "Aumento Médio em ROI", icon: Zap },
  ];

  const phrases = [
    "Acreditamos em performance de verdade.",
    "Trabalhamos com dados. Estratégia. Clareza.",
    "Escalamos empresas com tráfego pago.",
    "Essa é a mentalidade Blast Company Ads."
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Animated Intro - similar to Ayres Marketing */}
      {showIntro && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center animate-fade-out" 
             style={{ 
               animation: 'fadeOut 6s forwards',
               animationFillMode: 'forwards'
             }}>
          <div className="opacity-0 animate-fade-in" 
               style={{ 
                 animation: 'logoFadeIn 1.5s ease-in forwards'
               }}>
            <img 
              src="/lovable-uploads/b313ace2-ef2c-47ca-8199-4992e690d55d.png" 
              alt="Logo Blast" 
              className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
            />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-primary mt-5 opacity-0"
              style={{
                animation: 'textFadeIn 1.5s ease-in forwards',
                animationDelay: '1.8s'
              }}>
            Blast Company Ads
          </h1>
        </div>
      )}

      {/* Content that appears after intro */}
      {showContent && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center text-center px-8">
          {phrases.map((phrase, index) => (
            <div 
              key={index}
              className="text-xl lg:text-3xl font-light mb-6 text-white opacity-0"
              style={{
                animation: 'phrasesFadeIn 1s forwards',
                animationDelay: `${index + 0.5}s`
              }}
            >
              {phrase}
            </div>
          ))}
        </div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-primary/15 via-primary/8 to-transparent rounded-full blur-2xl opacity-40"></div>
      </div>

      {/* Regular content (hidden during animation) */}
      <div className={`container mx-auto max-w-7xl relative z-10 transition-opacity duration-1000 ${showIntro || showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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