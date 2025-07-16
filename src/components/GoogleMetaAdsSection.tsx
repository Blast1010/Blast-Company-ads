import inpulsoGoogleAds from "@/assets/inpulso-google-ads.webp";
import inpulsoMetaAds from "@/assets/inpulso-meta-ads.webp";

export function GoogleMetaAdsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-muted/5 to-background overflow-hidden relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Seção Google Ads - baseada no site Inpulso */}
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
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Queremos garantir que você utilize os{" "}
                <span className="font-semibold text-foreground">principais recursos do Google</span>{" "}
                da melhor forma possível, proporcionando a{" "}
                <span className="font-semibold text-foreground">melhor performance</span>{" "}
                do seu negócio no digital.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Somos uma agência especializada em tráfego pago com foco em vendas e estruturação comercial. 
                Entendemos a jornada do seu cliente e traçamos a{" "}
                <span className="font-semibold text-foreground">estratégia ideal</span>{" "}
                com análises detalhadas e planejamento estratégico.
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
                src={inpulsoGoogleAds} 
                alt="Google Ads Analytics Dashboard" 
                className="w-full h-auto object-contain transform hover:scale-105 transition-all duration-500 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Seção Meta Ads - baseada no site Inpulso */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center relative">
            <div className="relative w-full max-w-lg">
              <img 
                src={inpulsoMetaAds} 
                alt="Meta Ads Marketing Interface" 
                className="w-full h-auto object-contain transform hover:scale-105 transition-all duration-500 rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="transform translate-y-0 opacity-100 transition-all duration-1000 ease-out">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
                Gestão de{" "}
                <span className="text-primary relative">
                  tráfego pago
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full transform scale-x-0 animate-scaleX" style={{ animationDelay: '0.5s' }}></div>
                </span>{" "}
                com método e responsabilidade
              </h2>
            </div>
            
            <div className="transform translate-y-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Nossa metodologia faz a sua empresa{" "}
                <span className="text-primary">faturar mais</span>{" "}
                de forma segura e escalável
              </h3>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Atraia o público certo para o seu perfil e gere{" "}
                <span className="font-semibold text-foreground">leads qualificados</span>{" "}
                para seu time comercial. Garantimos a criação de campanhas estratégicas e fazemos 
                análises e sugestões no seu perfil para obter mais resultados.
              </p>
            </div>

            <div className="transform translate-y-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.1s' }}>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden">
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