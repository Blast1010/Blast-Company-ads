import googleAdsImage from "@/assets/google-ads-image.png";
import metaAdsImage from "@/assets/meta-ads-image.png";

export function GoogleMetaAdsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-muted/5 to-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Google Ads Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
              Fique no topo do{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-pulse">
                Google e venda mais
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Queremos garantir que você utilize os{" "}
              <span className="font-semibold text-foreground">principais recursos do Google</span>{" "}
              da melhor forma possível, proporcionando a{" "}
              <span className="font-semibold text-foreground">melhor performance</span>{" "}
              do seu negócio no digital.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-scale hover:shadow-lg animate-fade-in group" style={{ animationDelay: '0.6s' }}>
              <span className="group-hover:animate-pulse">Solicite um orçamento</span>
            </button>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative group">
              <img 
                src={googleAdsImage} 
                alt="Google Ads Campaign Management" 
                className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg transition-all duration-500 hover-scale group-hover:shadow-2xl group-hover:rotate-1"
              />
              {/* Efeito de brilho animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse rounded-lg -z-10"></div>
              {/* Anel de destaque */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Meta Ads Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative group">
              <img 
                src={metaAdsImage} 
                alt="Meta Ads Campaign Management" 
                className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg transition-all duration-500 hover-scale group-hover:shadow-2xl group-hover:-rotate-1"
              />
              {/* Efeito de brilho animado */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse rounded-lg -z-10"></div>
              {/* Anel de destaque */}
              <div className="absolute -inset-2 bg-gradient-to-l from-blue-500/20 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 blur-sm"></div>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
              Campanhas{" "}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent animate-pulse">
                otimizadas e eficientes
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              Atraia o público certo para o seu perfil e gere{" "}
              <span className="font-semibold text-foreground">leads qualificados</span>{" "}
              para seu time comercial. Garantimos a criação de campanhas estratégicas e fazemos 
              análises e sugestões no seu perfil para obter mais resultados.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-scale hover:shadow-lg animate-fade-in group" style={{ animationDelay: '1.4s' }}>
              <span className="group-hover:animate-pulse">Solicite um orçamento</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}