import { Button } from "@/components/ui/button";
import { Handshake, ArrowRight } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
import googleLogo from "@/assets/logos/google-logo.svg";
import microsoftLogo from "@/assets/logos/microsoft-logo.svg";
import amazonLogo from "@/assets/logos/amazon-logo.png";
import appleLogo from "@/assets/logos/apple-logo.png";
import netflixLogo from "@/assets/logos/netflix-logo.svg";
import spotifyLogo from "@/assets/logos/spotify-logo.svg";
import facebookLogo from "@/assets/logos/facebook-logo.svg";
import instagramLogo from "@/assets/logos/instagram-logo.svg";

export function ClientsSection() {
  // Real company logos for the carousel
  const companyLogos = [
    { name: "Google", logo: googleLogo },
    { name: "Microsoft", logo: microsoftLogo },
    { name: "Amazon", logo: amazonLogo },
    { name: "Apple", logo: appleLogo },
    { name: "Netflix", logo: netflixLogo },
    { name: "Spotify", logo: spotifyLogo },
    { name: "Facebook", logo: facebookLogo },
    { name: "Instagram", logo: instagramLogo }
  ];

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Efeito de luz minimalista preta cinematográfico */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-40 h-40 bg-black/5 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-gray-900/5 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-gray-800/3 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-black/3 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Icon and Main Content */}
        <div className="text-center space-y-12">
          {/* Handshake Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow animate-pulse">
                <Handshake className="h-12 w-12 text-primary-foreground" />
              </div>
              <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-50 animate-pulse delay-300"></div>
            </div>
          </div>

          {/* Main Text */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-gray-900">
              Esses são alguns dos clientes que{" "}
              <span className="text-primary">escolheram a Blast Company ads</span>{" "}
              como empresa parceira para criar suas{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                estratégias de venda na Internet
              </span>.
            </h2>

            <div className="w-20 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <span className="text-primary font-semibold">Chamamos cada cliente de parceiro</span>, 
              pois entramos e entendemos cada detalhe dos seus negócios, para entregar 
              sucesso a cada um deles.
            </p>
          </div>

          {/* Company Logos Carousel */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-gray-600 mb-8">
              Empresas que confiam em nosso trabalho
            </h3>
            
            {/* Continuous scrolling carousel */}
            <div className="relative overflow-hidden">
              <div className="flex animate-[scroll_40s_linear_infinite] space-x-8">
                {/* First set */}
                {companyLogos.map((company, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-32 h-20 bg-card border border-border rounded-xl flex items-center justify-center group hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="max-w-24 max-h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {companyLogos.map((company, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-32 h-20 bg-card border border-border rounded-xl flex items-center justify-center group hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="max-w-24 max-h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-card border border-border rounded-2xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
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