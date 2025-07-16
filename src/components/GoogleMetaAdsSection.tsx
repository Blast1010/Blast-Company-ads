import inpulsoGoogleMockup from "@/assets/inpulso-google-mockup.png";
import inpulsoMetaMockup from "@/assets/inpulso-meta-mockup.png";

export function GoogleMetaAdsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-muted/5 to-background overflow-hidden relative">
      <div className="container mx-auto max-w-6xl">
        {/* Google Ads Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="transform translate-y-0 opacity-100 transition-all duration-1000 ease-out">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
                Fique no topo do{" "}
                <span className="text-primary relative">
                  Google e venda mais
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full transform scale-x-0 animate-scaleX"></div>
                </span>
              </h2>
            </div>
            
            <div className="transform translate-y-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Queremos garantir que você utilize os{" "}
                <span className="font-semibold text-foreground">principais recursos do Google</span>{" "}
                da melhor forma possível, proporcionando a{" "}
                <span className="font-semibold text-foreground">melhor performance</span>{" "}
                do seu negócio no digital.
              </p>
            </div>

            <div className="transform translate-y-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden">
                <span className="relative z-10">Solicite um orçamento</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative w-full max-w-lg">
              <img 
                src={inpulsoGoogleMockup} 
                alt="Google Ads Dashboard" 
                className="w-full h-auto object-contain transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Meta Ads Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center relative">
            <div className="relative w-full max-w-lg">
              <img 
                src={inpulsoMetaMockup} 
                alt="Meta Ads Marketing" 
                className="w-full h-auto object-contain transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="transform translate-y-0 opacity-100 transition-all duration-1000 ease-out">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
                Campanhas{" "}
                <span className="text-blue-600 relative">
                  otimizadas e eficientes
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full transform scale-x-0 animate-scaleX" style={{ animationDelay: '0.5s' }}></div>
                </span>
              </h2>
            </div>
            
            <div className="transform translate-y-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Atraia o público certo para o seu perfil e gere{" "}
                <span className="font-semibold text-foreground">leads qualificados</span>{" "}
                para seu time comercial. Garantimos a criação de campanhas estratégicas e fazemos 
                análises e sugestões no seu perfil para obter mais resultados.
              </p>
            </div>

            <div className="transform translate-y-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.1s' }}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden">
                <span className="relative z-10">Solicite um orçamento</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}