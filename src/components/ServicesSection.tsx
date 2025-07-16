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
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-6xl">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Simplified and cleaner card */}
              <div className="relative mb-6">
                {/* Clean card design */}
                <div className="w-20 h-20 bg-card border border-border/50 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300 group-hover:scale-105">
                  <service.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-center mb-3 text-foreground">
                {service.title}
              </h3>
              
              {/* Description */}
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
          </div>
        </div>
      </div>
    </section>
  );
}