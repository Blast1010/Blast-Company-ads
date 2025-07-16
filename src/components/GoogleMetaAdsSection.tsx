import googleAdsImage from "@/assets/google-ads-image.png";
import metaAdsImage from "@/assets/meta-ads-image.png";

export function GoogleMetaAdsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-muted/5 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Google Ads Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
              Fique no topo do{" "}
              <span className="text-primary">Google e venda mais</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Queremos garantir que você utilize os{" "}
              <span className="font-semibold text-foreground">principais recursos do Google</span>{" "}
              da melhor forma possível, proporcionando a{" "}
              <span className="font-semibold text-foreground">melhor performance</span>{" "}
              do seu negócio no digital.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Solicite um orçamento
            </button>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img 
              src={googleAdsImage} 
              alt="Google Ads Campaign Management" 
              className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Meta Ads Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={metaAdsImage} 
              alt="Meta Ads Campaign Management" 
              className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
              Campanhas{" "}
              <span className="text-primary">otimizadas e eficientes</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Atraia o público certo para o seu perfil e gere{" "}
              <span className="font-semibold text-foreground">leads qualificados</span>{" "}
              para seu time comercial. Garantimos a criação de campanhas estratégicas e fazemos 
              análises e sugestões no seu perfil para obter mais resultados.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Solicite um orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}