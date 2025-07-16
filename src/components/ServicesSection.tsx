import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, Database, BarChart3 } from "lucide-react";

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
      icon: Database,
      title: "CRM de Vendas",
      description: "Implementação de CRM, Funil de Vendas e Processos Inteligentes"
    },
    {
      icon: BarChart3,
      title: "Dashboards",
      description: "Acompanhe os Resultados do seu Investimento pelo Painel de Controle"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Efeito de luz minimalista azul turquesa cinematográfico */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-pulse delay-900"></div>
        <div className="absolute top-20 right-40 w-20 h-20 bg-primary/8 rounded-full blur-xl animate-pulse delay-1300"></div>
        <div className="absolute bottom-20 left-40 w-28 h-28 bg-accent/3 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
                    <p className="text-gray-600 leading-relaxed font-medium text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cinematic Bottom Card */}
        <div className="relative overflow-hidden">
          <Card className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border-0 shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse delay-700"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-pulse delay-300"></div>
            </div>
            
            <CardContent className="p-12 relative z-10">
              <div className="text-center space-y-8">
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  De negócios locais a{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    grandes e-commerces
                  </span>
                  , de produtos físicos a digitais, de poucos concorrentes a muitos concorrentes,{" "}
                  <span className="text-primary font-extrabold">
                    nós sabemos o caminho para fazer você escalar as vendas da sua empresa!
                  </span>
                </h2>
                
                <div className="flex justify-center space-x-2 mt-8">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}