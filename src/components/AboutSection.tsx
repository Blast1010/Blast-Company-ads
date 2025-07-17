
import { Award, Users, Target, TrendingUp, Lightbulb, Shield, Zap, Star } from "lucide-react";
import { Scene3D } from "./Scene3D";
import { Suspense } from "react";

export function AboutSection() {
  const achievements = [
    { number: "500+", label: "Clientes Atendidos", icon: Users },
    { number: "250M+", label: "Em Vendas Geradas", icon: TrendingUp },
    { number: "98%", label: "Taxa de Satisfação", icon: Award },
    { number: "5 Anos", label: "De Experiência", icon: Star }
  ];

  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada estratégia é desenvolvida com foco absoluto em performance e ROI máximo."
    },
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Relatórios detalhados e acesso completo aos dados da sua operação."
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Implementação rápida e otimizações contínuas para máxima eficiência."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre utilizando as mais recentes tecnologias e metodologias do mercado."
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)]"></div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/8 rounded-full blur-lg animate-breathe opacity-30"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Quem Somos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Especialistas em Performance Digital
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma agência especializada em marketing digital de performance, focada em gerar resultados reais e mensuráveis para empresas que querem escalar suas vendas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Mission Statement */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Nossa Missão</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transformar investimentos em marketing digital em máquinas de vendas altamente eficientes, 
                utilizando estratégias baseadas em dados e tecnologia de ponta para garantir o máximo retorno 
                sobre investimento.
              </p>
            </div>

            {/* Professional Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Nossa Jornada</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Fundação e Visão</h4>
                    <p className="text-muted-foreground">
                      Identificamos uma lacuna no mercado: empresas desperdiçando recursos em campanhas mal otimizadas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Desenvolvimento de Metodologia</h4>
                    <p className="text-muted-foreground">
                      Criamos processos únicos que combinam análise de dados, inteligência artificial e experiência humana.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Crescimento e Reconhecimento</h4>
                    <p className="text-muted-foreground">
                      Nos tornamos referência em performance digital, atendendo empresas de diversos segmentos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
              
              <div className="p-8">
                <Suspense fallback={
                  <div className="w-full h-80 bg-gradient-to-br from-muted/20 to-muted/5 rounded-xl flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                }>
                  <Scene3D />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <achievement.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{achievement.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Nossos Valores</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam nossa forma de trabalhar e entregar resultados excepcionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
