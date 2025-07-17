import { Building2, Lightbulb, Target } from "lucide-react";

export function AboutUsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/15 rounded-full blur-lg animate-breathe opacity-40"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossa História</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Quem Somos
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Nascemos da necessidade de transformar a forma como empresas crescem online. 
            Nossa jornada começou com uma visão simples: democratizar o acesso a estratégias 
            de marketing digital de alta performance.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-10 w-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Capacitar empresas a alcançar seu potencial máximo através de estratégias 
              digitais personalizadas e resultados mensuráveis.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="h-10 w-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecida como a agência que redefine padrões de excelência 
              em gestão de tráfego e performance digital.
            </p>
          </div>

          {/* Values */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="h-10 w-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossos Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transparência total, compromisso com resultados e relacionamentos 
              duradouros baseados em confiança mútua.
            </p>
          </div>
        </div>

        {/* Story Text */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Fundada por especialistas apaixonados por marketing digital, nossa agência surgiu 
              da percepção de que muitas empresas estavam perdidas no mundo complexo do marketing online. 
              Decidimos criar um ambiente onde a estratégia encontra a execução perfeita.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ao longo de nossa trajetória, desenvolvemos uma metodologia única que combina 
              análise profunda de dados, criatividade estratégica e foco absoluto no ROI dos nossos clientes. 
              Cada projeto é tratado como uma parceria de longo prazo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hoje, continuamos evoluindo e inovando, sempre com o mesmo propósito que nos guiou 
              desde o início: fazer nossos parceiros prosperarem no ambiente digital através de 
              estratégias inteligentes e execução impecável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}