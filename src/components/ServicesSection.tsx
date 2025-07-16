import { Search, Infinity, FolderOpen, BarChart3 } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Google Ads",
      description: "Gere Demanda na Maior Ferramenta de Buscas e Vendas do Mundo",
      gradient: "from-blue-500 to-green-500"
    },
    {
      icon: Infinity,
      title: "Meta Ads", 
      description: "Atraia a Atenção dos seus Clientes no Facebook e Instagram para Vender Mais",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: FolderOpen,
      title: "CRM de Vendas",
      description: "Implementação de CRM, Funil de Vendas e Processos Inteligentes",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Dashboards",
      description: "Acompanhe os Resultados do seu Investimento pelo Painel de Controle",
      gradient: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-background/95 to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Enhanced Card with better highlighting */}
              <div className="relative mb-8">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 scale-110`}></div>
                
                {/* Main card */}
                <div className="relative w-24 h-24 bg-card/90 backdrop-blur-sm border-2 border-border/30 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50">
                  {/* Icon with gradient */}
                  <div className={`p-2 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10`}>
                    <service.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Inner glow */}
                  <div className="absolute inset-2 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/60 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent/60 rounded-full animate-pulse delay-300"></div>
              </div>
              
              {/* Title with better spacing */}
              <h3 className="text-xl font-bold text-center mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Enhanced description */}
              <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-xs font-medium">
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