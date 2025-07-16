import googleAdsImage from "@/assets/google-ads-image.png";
import metaAdsImage from "@/assets/meta-ads-image.png";
import heroAnalytics from "@/assets/hero-analytics-animated.webp";
import metaPhoneMockup from "@/assets/meta-phone-mockup.png";
import metaShirtElement from "@/assets/meta-shirt-element.png";
import metaAnalyticsChart from "@/assets/meta-analytics-chart.png";

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
            {/* Composição complexa de elementos como no site original */}
            <div className="relative w-full max-w-lg h-96">
              {/* Imagem principal do analytics com animação de float */}
              <div className="absolute top-0 right-0 w-80 h-80 animate-float" style={{ animationDelay: '0s' }}>
                <img 
                  src={heroAnalytics} 
                  alt="Analytics Dashboard" 
                  className="w-full h-full object-contain transform hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Google Ads mockup flutuando */}
              <div className="absolute bottom-4 left-4 w-40 h-32 animate-float" style={{ animationDelay: '1s' }}>
                <img 
                  src={googleAdsImage} 
                  alt="Google Ads" 
                  className="w-full h-full object-contain rounded-lg shadow-lg transform hover:rotate-3 transition-all duration-500"
                />
              </div>

              {/* Elementos decorativos flutuantes */}
              <div className="absolute top-8 left-8 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-20 right-12 w-4 h-4 bg-gradient-to-br from-green-500 to-green-600 rounded-lg animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 left-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float shadow-lg" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Meta Ads Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center relative">
            {/* Composição Meta Ads com camisa e elementos */}
            <div className="relative w-full max-w-lg h-96">
              {/* Mockup do celular principal */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-48 h-80 animate-float" style={{ animationDelay: '0.2s' }}>
                <img 
                  src={metaPhoneMockup} 
                  alt="Meta Ads Mobile" 
                  className="w-full h-full object-contain transform hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Elemento da camisa flutuando */}
              <div className="absolute bottom-8 left-4 w-24 h-24 animate-float" style={{ animationDelay: '1.5s' }}>
                <img 
                  src={metaShirtElement} 
                  alt="Product Shirt" 
                  className="w-full h-full object-contain transform hover:rotate-12 transition-all duration-500"
                />
              </div>

              {/* Gráfico de analytics */}
              <div className="absolute top-12 right-0 w-32 h-24 animate-float" style={{ animationDelay: '0.8s' }}>
                <img 
                  src={metaAnalyticsChart} 
                  alt="Analytics Chart" 
                  className="w-full h-full object-contain transform hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Interface do Meta Ads */}
              <div className="absolute bottom-4 right-8 w-28 h-20 animate-float" style={{ animationDelay: '1.2s' }}>
                <img 
                  src={metaAdsImage} 
                  alt="Meta Ads Interface" 
                  className="w-full h-full object-contain rounded-lg shadow-lg transform hover:-rotate-3 transition-all duration-500"
                />
              </div>

              {/* Elementos decorativos Meta */}
              <div className="absolute top-1/3 left-2 w-5 h-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg animate-pulse shadow-lg"></div>
              <div className="absolute bottom-1/3 right-4 w-7 h-7 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-8 left-1/3 w-3 h-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full animate-float shadow-lg" style={{ animationDelay: '1.8s' }}></div>
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