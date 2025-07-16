import { Card, CardContent } from "@/components/ui/card";
import googleLogo from "@/assets/logos/google-logo.svg";
import facebookLogo from "@/assets/logos/facebook-logo.svg";
import { Database, BarChart3 } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      logo: googleLogo,
      title: "Google Ads",
      description: "Gere Demanda na Maior Ferramenta de Buscas e Vendas do Mundo",
      isImage: true
    },
    {
      logo: facebookLogo,
      title: "Meta Ads", 
      description: "Atraia a Atenção dos seus Clientes no Facebook e Instagram para Vender Mais",
      isImage: true
    },
    {
      icon: Database,
      title: "CRM de Vendas",
      description: "Implementação de CRM, Funil de Vendas e Processos Inteligentes", 
      isImage: false
    },
    {
      icon: BarChart3,
      title: "Dashboards",
      description: "Acompanhe os Resultados do seu Investimento pelo Painel de Controle",
      isImage: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  {/* Logo/Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      {service.isImage ? (
                        <img 
                          src={service.logo} 
                          alt={`${service.title} logo`}
                          className="h-8 w-8 object-contain"
                        />
                      ) : (
                        <service.icon className="h-8 w-8 text-primary" />
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed max-w-4xl mx-auto">
            De negócios locais a grandes e-commerces, de produtos físicos a digitais, 
            de poucos concorrentes a muitos concorrentes,{" "}
            <span className="text-primary">
              nós sabemos o caminho para fazer você escalar as vendas da sua empresa!
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}