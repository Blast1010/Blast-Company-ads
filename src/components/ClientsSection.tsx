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
    <section className="py-20 px-4 bg-gradient-clients border-b border-primary/20 relative overflow-hidden shadow-blue">
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
              Empresas que{" "}
              <span className="text-primary">confiam na Blast Company</span>{" "}
              para desenvolver suas{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                estratégias digitais
              </span>.
            </h2>

            <div className="w-20 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <span className="text-primary font-semibold">Desenvolvemos parcerias estratégicas</span> 
              através do entendimento profundo dos objetivos de negócio, garantindo 
              soluções personalizadas e resultados sustentáveis.
            </p>
          </div>

          {/* Company Logos Carousel */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-muted-foreground mb-8">
              Principais marcas que escolheram nossa consultoria
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
              <h3 className="text-2xl font-bold">
                Pronto para acelerar seu{" "}
                <span className="text-primary">crescimento digital</span>?
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