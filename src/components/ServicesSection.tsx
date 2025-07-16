import { Infinity, FolderOpen, BarChart3 } from "lucide-react";
import googleLogo from "@/assets/logos/google-logo.svg";

export function ServicesSection() {
  const services = [
    {
      icon: null,
      isGoogleLogo: true,
      title: "Google Ads",
      description: "Gere Demanda na Maior Ferramenta de Buscas e Vendas do Mundo",
      colors: {
        bg: "bg-white",
        icon: "text-white",
        shadow: "shadow-lg"
      }
    },
    {
      icon: Infinity,
      title: "Meta Ads", 
      description: "Atraia a Atenção dos seus Clientes no Facebook e Instagram para Vender Mais",
      colors: {
        bg: "bg-white",
        icon: "text-blue-500",
        shadow: "shadow-lg"
      }
    },
    {
      icon: FolderOpen,
      title: "CRM de Vendas",
      description: "Implementação de CRM, Funil de Vendas e Processos Inteligentes",
      colors: {
        bg: "bg-white",
        icon: "text-blue-600",
        shadow: "shadow-lg"
      }
    },
    {
      icon: BarChart3,
      title: "Dashboards",
      description: "Acompanhe os Resultados do seu Investimento pelo Painel de Controle",
      colors: {
        bg: "bg-white",
        icon: "text-blue-600",
        shadow: "shadow-lg"
      }
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-6xl">
        {/* Services Grid - Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              {/* Destacado balão com gradiente colorido - Responsivo */}
              <div className="relative mb-4 md:mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                {/* Balão principal com gradiente específico - Tamanhos responsivos */}
                <div className={`w-20 h-20 md:w-24 md:h-24 ${service.colors.bg} rounded-2xl md:rounded-3xl flex items-center justify-center ${service.colors.shadow} shadow-xl md:shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:rotate-3`}>
                  {service.isGoogleLogo ? (
                    <img 
                      src="/lovable-uploads/7314178c-83bf-47a5-be36-4f25a4df31d9.png" 
                      alt="Google" 
                      className="h-12 w-12 md:h-16 md:w-16 object-contain transition-all duration-500 group-hover:scale-125" 
                    />
                  ) : (
                    <service.icon className={`h-10 w-10 md:h-12 md:w-12 ${service.colors.icon} transition-all duration-500 group-hover:scale-125`} />
                  )}
                </div>
                
                {/* Efeito de brilho animado */}
                <div className={`absolute inset-0 ${service.colors.bg} rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 -z-10`}></div>
                
                {/* Anel de destaque */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
              
              {/* Title - Responsivo */}
              <h3 className="text-lg md:text-xl font-bold text-center mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors duration-300 px-2">
                {service.title}
              </h3>
              
              {/* Description - Responsivo */}
              <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed max-w-xs group-hover:text-foreground/80 transition-colors duration-300 px-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text Section - Responsivo */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="relative">
            {/* Decorative line */}
            <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mb-6 md:mb-8"></div>
            
            {/* Main text with enhanced typography - Responsivo */}
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-[1.3] text-foreground">
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