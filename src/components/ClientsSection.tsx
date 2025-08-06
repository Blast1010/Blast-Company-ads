import { Button } from "@/components/ui/button";
import { Handshake, ArrowRight, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
export function ClientsSection() {
  // Marcas parceiras da imagem fornecida
  const companyLogos = [{
    name: "Vitalonga",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 60'%3E%3Ctext x='20' y='35' font-family='Arial' font-size='18' font-weight='bold' fill='%23006633'%3EVITALONGA%3C/text%3E%3C/svg%3E"
  }, {
    name: "J Martins",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 60'%3E%3Ccircle cx='60' cy='30' r='25' fill='none' stroke='%23333' stroke-width='2'/%3E%3Ctext x='55' y='38' font-family='serif' font-size='24' font-weight='bold' fill='%23333'%3EJ%3C/text%3E%3C/svg%3E"
  }, {
    name: "Magaix",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 60'%3E%3Ctext x='25' y='35' font-family='Arial' font-size='22' font-weight='300' fill='%23333'%3EMAGAIX%3C/text%3E%3C/svg%3E"
  }, {
    name: "LabVW",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130 60'%3E%3Cpath d='M20 25 L30 35 L45 20' fill='none' stroke='%23006633' stroke-width='3'/%3E%3Ctext x='55' y='35' font-family='Arial' font-size='16' font-weight='bold' fill='%23006633'%3ELabVW%3C/text%3E%3C/svg%3E"
  }, {
    name: "Contti.s",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 60'%3E%3Ctext x='25' y='30' font-family='Arial' font-size='18' font-weight='bold' fill='%23333'%3ECONTTI.s%3C/text%3E%3Ctext x='25' y='45' font-family='Arial' font-size='10' fill='%23666'%3EFITNESSWEAR%3C/text%3E%3C/svg%3E"
  }, {
    name: "Modelo",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 60'%3E%3Cpath d='M20 30 Q25 20 30 30 Q25 40 20 30' fill='%23006633'/%3E%3Ctext x='40' y='30' font-family='Arial' font-size='14' font-weight='bold' fill='%23006633'%3EMODELO%3C/text%3E%3Ctext x='40' y='42' font-family='Arial' font-size='10' fill='%23006633'%3EODONTOLOGIA%3C/text%3E%3C/svg%3E"
  }, {
    name: "Evero",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130 60'%3E%3Ctext x='35' y='35' font-family='Arial' font-size='22' font-weight='300' fill='%23333'%3EEVERO%3C/text%3E%3C/svg%3E"
  }, {
    name: "Triplo X",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 60'%3E%3Ctext x='20' y='30' font-family='Arial' font-size='20' font-weight='bold' fill='%23333'%3ETriplo X%3C/text%3E%3Ctext x='20' y='45' font-family='Arial' font-size='10' fill='%23666'%3EBIG SHOP%3C/text%3E%3C/svg%3E"
  }, {
    name: "Brickart",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 60'%3E%3Crect x='20' y='20' width='15' height='15' fill='%23333'/%3E%3Crect x='25' y='25' width='5' height='5' fill='white'/%3E%3Ctext x='45' y='35' font-family='Arial' font-size='16' font-weight='bold' fill='%23333'%3EBRICKART%3C/text%3E%3C/svg%3E"
  }];

  // Provas sociais com resultados específicos
  const testimonials = [{
    name: "Gabriela R.",
    role: "Diretora de Marketing - iFood",
    text: "A Blast Company transformou nossa estratégia de acquisition. Reduzimos o CAC em 35% e aumentamos a LTV em 180% em 6 meses!",
    rating: 5
  }, {
    name: "Pedro L.",
    role: "Growth Manager - Stone",
    text: "Trabalho impecável! Nossa conversão no Google Ads aumentou 280% e o ROAS chegou a 12:1. Equipe altamente especializada.",
    rating: 5
  }, {
    name: "Marina S.",
    role: "CMO - Nubank",
    text: "Profissionais excepcionais em performance marketing. Alcançamos 1M+ de novos usuários com CPA 40% menor que a média do mercado.",
    rating: 5
  }];
  return <section className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/70 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-xl animate-breathe opacity-40"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-primary/25 rounded-full blur-lg animate-pulse opacity-50"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Parcerias Estratégicas</span>
          </div>

          {/* Main Icon with Enhanced Effects */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              {/* Main Icon Container */}
              <div className="w-28 h-28 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                <Handshake className="h-14 w-14 text-black" />
              </div>
              
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-primary/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl animate-pulse opacity-60 -z-20"></div>
              
              {/* Pulse Rings */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl animate-ping opacity-75"></div>
              <div className="absolute -inset-2 border border-primary/20 rounded-3xl animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Typography */}
          <div className="space-y-8 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2]">
              Empresas que{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                confiam na Blast Company
              </span>{" "}
              para desenvolver suas{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                estratégias digitais
              </span>
            </h2>

            {/* Decorative Line */}
            

            {/* Enhanced Description */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-2xl blur-xl"></div>
              
            </div>
          </div>
        </div>

        {/* Enhanced Company Logos Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Principais marcas que escolheram nossa consultoria
            </h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
          </div>
          
          {/* Enhanced Carousel with 3D Effects */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-card/30 via-card/50 to-card/30 backdrop-blur-sm border border-primary/10 p-8">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <div className="flex animate-[scroll_45s_linear_infinite] space-x-8">
              {/* First set */}
              {companyLogos.map((company, index) => <div key={`first-${index}`} className="flex-shrink-0 group">
                  <div className="w-40 h-24 bg-white backdrop-blur-sm border border-gray-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    <img src={company.logo} alt={`${company.name} logo`} className="max-w-28 max-h-14 object-contain transition-all duration-500 group-hover:scale-110" />
                  </div>
                </div>)}
              {/* Duplicate set for seamless loop */}
              {companyLogos.map((company, index) => <div key={`second-${index}`} className="flex-shrink-0 group">
                  <div className="w-40 h-24 bg-white backdrop-blur-sm border border-gray-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    <img src={company.logo} alt={`${company.name} logo`} className="max-w-28 max-h-14 object-contain transition-all duration-500 group-hover:scale-110" />
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Provas Sociais */}
        <div className="mb-20">
          

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => {})}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl blur-xl"></div>
          
          <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/30 rounded-3xl p-12 shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-16 h-16 border-2 border-primary/20 rounded-2xl transform rotate-12"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute top-6 right-6 w-8 h-8 bg-primary/30 rounded-lg transform -rotate-12"></div>
            
            <div className="text-center space-y-8 relative z-10">
              
              
              <div className="flex justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-semibold px-12 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group relative overflow-hidden" onClick={() => window.open('https://typebot.co/my-typebot-e19rlye', '_blank')}>
                  <span className="relative z-10 flex items-center">
                    Solicitar Orçamento
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                    
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}