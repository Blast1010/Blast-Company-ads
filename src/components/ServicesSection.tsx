import { Infinity, FolderOpen, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormModal } from "@/components/FormModal";
import googleLogo from "@/assets/logos/google-logo.svg";
export function ServicesSection() {
  const services = [{
    icon: null,
    isGoogleLogo: true,
    title: "Google Ads",
    description: "Gere Demanda na Maior Ferramenta de Buscas e Vendas do Mundo",
    colors: {
      bg: "bg-white",
      icon: "text-white",
      shadow: "shadow-lg"
    }
  }, {
    icon: Infinity,
    title: "Meta Ads",
    description: "Atraia a Atenção dos seus Clientes no Facebook e Instagram para Vender Mais",
    colors: {
      bg: "bg-white",
      icon: "text-blue-500",
      shadow: "shadow-lg"
    }
  }, {
    icon: FolderOpen,
    title: "CRM de Vendas",
    description: "Implementação de CRM, Funil de Vendas e Processos Inteligentes",
    colors: {
      bg: "bg-white",
      icon: "text-blue-600",
      shadow: "shadow-lg"
    }
  }, {
    icon: BarChart3,
    title: "Dashboards",
    description: "Acompanhe os Resultados do seu Investimento pelo Painel de Controle",
    colors: {
      bg: "bg-white",
      icon: "text-blue-600",
      shadow: "shadow-lg"
    }
  }];
  return <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/15 rounded-full blur-lg animate-breathe opacity-40"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => <div key={index} className="group cursor-pointer">
              {/* Service Card */}
              <div className="relative h-full">
                {/* Background Shadow & Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/50 rounded-3xl shadow-2xl shadow-black/5 border border-gray-100/50 transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-primary/10 group-hover:scale-[1.02] group-hover:-translate-y-2"></div>
                
                {/* Content Container */}
                <div className="relative p-8 h-full flex flex-col items-center text-center bg-white rounded-3xl overflow-hidden">
                  {/* Decorative Top Gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-8 mt-2">
                    {/* Icon Background Circle */}
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl flex items-center justify-center shadow-lg border border-primary/10 group-hover:border-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {service.isGoogleLogo ? 
                        <img src="/lovable-uploads/7314178c-83bf-47a5-be36-4f25a4df31d9.png" alt="Google" className="h-14 w-14 object-contain transition-all duration-500 group-hover:scale-110" /> : 
                        <service.icon className="h-12 w-12 text-primary transition-all duration-500 group-hover:scale-110" />
                      }
                    </div>
                    
                    {/* Floating Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 scale-150"></div>
                    
                    {/* Pulse Ring Animation */}
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000 animate-pulse"></div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col justify-center space-y-4">
                    <h3 className="text-xl font-bold transition-all duration-300 text-gray-900 group-hover:text-primary">
                      {service.title}
                    </h3>
                    
                    <p className="leading-relaxed transition-colors duration-300 text-gray-600 group-hover:text-gray-800 text-sm font-medium">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Bottom Decorative Elements */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Corner Decorations */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                </div>
              </div>
            </div>)}
        </div>

        {/* Bottom Statement Section */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl blur-xl"></div>
          
          <div className="relative bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm border border-primary/20 rounded-3xl p-12">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-12 h-12 border-2 border-primary/30 rounded-lg transform rotate-12"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 bg-primary/20 rounded-full"></div>
            
            <div className="text-center max-w-4xl mx-auto">
              {/* Quote Marks */}
              <div className="text-6xl text-primary/20 font-serif mb-4">"</div>
              
              {/* Main Statement */}
              <h3 className="text-3xl md:text-4xl font-bold leading-[1.3] text-foreground mb-6">
                De <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">negócios locais</span> a grandes 
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> e-commerces</span>, de produtos físicos a 
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> digitais</span>, de poucos concorrentes a 
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> muitos concorrentes</span>
              </h3>
              
              <p className="text-xl md:text-2xl font-semibold text-primary mb-4">
                Nós sabemos o caminho para fazer você escalar as vendas da sua empresa!
              </p>
              
              
              {/* Bottom Decorative Line */}
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-8"></div>
              
              {/* CTA Button */}
              <FormModal>
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/25 transition-all duration-300 text-black">
                  Solicitar Orçamento
                </Button>
              </FormModal>
            </div>
          </div>
        </div>
      </div>
    </section>;
}