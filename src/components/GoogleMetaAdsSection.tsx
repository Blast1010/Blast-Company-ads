import googleAdsImage from "@/assets/google-ads-image.png";
import metaAdsImage from "@/assets/meta-ads-image.png";

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
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-out_forwards]"></div>
                </span>
              </h2>
            </div>
            
            <div className="transform translate-y-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Queremos garantir que você utilize os{" "}
                <span className="font-semibold text-foreground">principais recursos do Google</span>{" "}
                da melhor forma possível, proporcionando a{" "}
                <span className="font-semibold text-foreground">melhor performance</span>{" "}
                do seu negócio no digital.
              </p>
            </div>

            <div className="transform translate-y-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden">
                <span className="relative z-10">Solicite um orçamento</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative transform rotate-0 hover:rotate-2 transition-all duration-700 ease-out">
              {/* Elementos flutuantes animados como no site */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg animate-[float_6s_ease-in-out_infinite] shadow-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full animate-[float_4s_ease-in-out_infinite_reverse] shadow-lg"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-br from-green-500 to-green-400 rounded-lg animate-[bounce_3s_ease-in-out_infinite] shadow-lg"></div>
              
              {/* Imagem principal com perspectiva 3D */}
              <div className="relative" style={{ perspective: '1000px' }}>
                <img 
                  src={googleAdsImage} 
                  alt="Google Ads Campaign Management" 
                  className="w-full max-w-md h-auto object-contain rounded-lg shadow-2xl transform hover:rotateY-12 hover:scale-105 transition-all duration-700 ease-out"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))'
                  }}
                />
                
                {/* Reflexão sutil */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 rounded-lg pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Meta Ads Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center relative">
            <div className="relative transform rotate-0 hover:-rotate-2 transition-all duration-700 ease-out">
              {/* Elementos flutuantes animados específicos para Meta */}
              <div className="absolute -top-6 -right-4 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl animate-[float_5s_ease-in-out_infinite_0.5s] shadow-lg"></div>
              <div className="absolute -bottom-4 -left-6 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-[float_7s_ease-in-out_infinite_reverse] shadow-lg opacity-80"></div>
              <div className="absolute top-1/3 -right-10 w-4 h-4 bg-gradient-to-br from-orange-500 to-red-400 rounded-lg animate-[pulse_2s_ease-in-out_infinite] shadow-lg"></div>
              
              {/* Imagem principal com efeito 3D */}
              <div className="relative" style={{ perspective: '1000px' }}>
                <img 
                  src={metaAdsImage} 
                  alt="Meta Ads Campaign Management" 
                  className="w-full max-w-md h-auto object-contain rounded-lg shadow-2xl transform hover:rotateY-12 hover:scale-105 transition-all duration-700 ease-out"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))'
                  }}
                />
                
                {/* Brilho holográfico */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-lg pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="transform translate-y-0 opacity-100 transition-all duration-1000 ease-out">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
                Campanhas{" "}
                <span className="text-blue-600 relative">
                  otimizadas e eficientes
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-out_0.5s_forwards]"></div>
                </span>
              </h2>
            </div>
            
            <div className="transform translate-y-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Atraia o público certo para o seu perfil e gere{" "}
                <span className="font-semibold text-foreground">leads qualificados</span>{" "}
                para seu time comercial. Garantimos a criação de campanhas estratégicas e fazemos 
                análises e sugestões no seu perfil para obter mais resultados.
              </p>
            </div>

            <div className="transform translate-y-4 opacity-0 animate-[fadeInUp_1s_ease-out_1.1s_forwards]">
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