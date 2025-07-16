import { Search, Users, BarChart3, Activity } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Google Ads",
      description: "Gere Demanda na Maior Ferramenta de Buscas e Vendas do Mundo"
    },
    {
      icon: Users,
      title: "Meta Ads", 
      description: "Atraia a Atenção dos seus Clientes no Facebook e Instagram para Vender Mais"
    },
    {
      icon: BarChart3,
      title: "CRM de Vendas",
      description: "Implementação de CRM, Funil de Vendas e Processos Inteligentes"
    },
    {
      icon: Activity,
      title: "Dashboards",
      description: "Acompanhe os Resultados do seu Investimento pelo Painel de Controle"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-background/95 to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Icon Card */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-card border border-border/50 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300 group-hover:scale-105">
                  <service.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-center mb-3 text-foreground">
                {service.title}
              </h3>
              
              {/* Description below card */}
              <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-xs">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative line */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mb-8"></div>
            
            {/* Main text with enhanced typography */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.3] text-foreground">
              De <span className="text-primary">negócios locais</span> a grandes 
              <span className="text-primary"> e-commerces</span>, de produtos físicos a 
              <span className="text-primary"> digitais</span>, de poucos concorrentes a 
              <span className="text-primary"> muitos concorrentes</span>, nós sabemos o caminho para fazer você 
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> escalar as vendas</span> da sua empresa!
            </h2>
            
            {/* Subtle accent elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-radial from-primary/8 to-transparent rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}