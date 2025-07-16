import { Button } from "@/components/ui/button";
import { Handshake, ArrowRight } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
import companyLogos from "@/assets/company-logos-collection.png";

export function ClientsSection() {
  // Company logos for the carousel
  const companyLogos = [
    { name: "TechFlow Solutions", color: "bg-blue-500" },
    { name: "Verde Consulting", color: "bg-green-500" },
    { name: "Horizon Partners", color: "bg-navy-600" },
    { name: "Nexus Digital", color: "bg-purple-500" },
    { name: "Bright Innovations", color: "bg-orange-500" },
    { name: "Atlas Manufacturing", color: "bg-blue-800" },
    { name: "Quantum Systems", color: "bg-indigo-500" },
    { name: "Nova Enterprises", color: "bg-red-500" },
    { name: "Stellar Dynamics", color: "bg-cyan-500" },
    { name: "Prime Solutions", color: "bg-yellow-500" },
    { name: "Focus Ventures", color: "bg-pink-500" },
    { name: "Impact Digital", color: "bg-teal-500" }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Icon and Main Content */}
        <div className="text-center space-y-12">
          {/* Handshake Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
              <Handshake className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>

          {/* Main Text */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
              Esses são alguns dos clientes que{" "}
              <span className="text-primary">escolheram a Blast Company ads</span>{" "}
              como empresa parceira para criar suas{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                estratégias de venda na Internet
              </span>.
            </h2>

            <div className="w-20 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <span className="text-primary font-semibold">Chamamos cada cliente de parceiro</span>, 
              pois entramos e entendemos cada detalhe dos seus negócios, para entregar 
              sucesso a cada um deles.
            </p>
          </div>

          {/* Company Logos Carousel */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-muted-foreground mb-8">
              Empresas que confiam em nosso trabalho
            </h3>
            
            {/* Continuous scrolling carousel */}
            <div className="relative overflow-hidden">
              <div className="flex animate-[scroll_40s_linear_infinite] space-x-8">
                {/* First set */}
                {companyLogos.map((company, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-32 h-20 bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl flex items-center justify-center group hover:bg-card/60 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-16 h-12 bg-gradient-to-br from-muted/40 to-muted/20 rounded-lg flex items-center justify-center">
                      <div className={`w-8 h-8 ${company.color.replace('bg-', 'bg-')} rounded opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {companyLogos.map((company, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-32 h-20 bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl flex items-center justify-center group hover:bg-card/60 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-16 h-12 bg-gradient-to-br from-muted/40 to-muted/20 rounded-lg flex items-center justify-center">
                      <div className={`w-8 h-8 ${company.color.replace('bg-', 'bg-')} rounded opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-border/50 rounded-2xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Pronto para ser nosso próximo{" "}
                <span className="text-primary">parceiro de sucesso</span>?
              </h3>
              
              <div className="flex justify-center">
                <ProgressiveForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}