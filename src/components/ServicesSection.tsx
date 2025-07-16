import { Search, Infinity, FolderOpen, BarChart3 } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Google Ads",
      description: "Gere Demanda na Maior Ferramenta de Buscas e Vendas do Mundo",
      colors: {
        bg: "bg-gradient-to-br from-blue-500 via-red-500 via-yellow-400 to-green-500",
        icon: "text-white",
        shadow: "shadow-blue-500/30"
      }
    },
    {
      icon: Infinity,
      title: "Meta Ads", 
      description: "Atraia a Atenção dos seus Clientes no Facebook e Instagram para Vender Mais",
      colors: {
        bg: "bg-gradient-to-br from-blue-600 to-purple-600",
        icon: "text-white",
        shadow: "shadow-purple-500/30"
      }
    },
    {
      icon: FolderOpen,
      title: "CRM de Vendas",
      description: "Implementação de CRM, Funil de Vendas e Processos Inteligentes",
      colors: {
        bg: "bg-gradient-to-br from-indigo-500 to-cyan-500",
        icon: "text-white",
        shadow: "shadow-indigo-500/30"
      }
    },
    {
      icon: BarChart3,
      title: "Dashboards",
      description: "Acompanhe os Resultados do seu Investimento pelo Painel de Controle",
      colors: {
        bg: "bg-gradient-to-br from-purple-500 to-pink-500",
        icon: "text-white",
        shadow: "shadow-purple-500/30"
      }
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-6xl">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              {/* Destacado balão com gradiente colorido */}
              <div className="relative mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                {/* Balão principal com gradiente específico */}
                <div className={`w-24 h-24 ${service.colors.bg} rounded-3xl flex items-center justify-center ${service.colors.shadow} shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:rotate-3`}>
                  <service.icon className={`h-12 w-12 ${service.colors.icon} transition-all duration-500 group-hover:scale-125`} />
                </div>
                
                {/* Efeito de brilho animado */}
                <div className={`absolute inset-0 ${service.colors.bg} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 -z-10`}></div>
                
                {/* Anel de destaque */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-center mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-xs group-hover:text-foreground/80 transition-colors duration-300">
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