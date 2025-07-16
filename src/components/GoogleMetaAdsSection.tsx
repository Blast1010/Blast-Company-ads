import googleAnalyticsMain from "@/assets/google-analytics-main.png";
import googleSearchBar from "@/assets/google-search-bar.png";
import googleChart from "@/assets/google-chart.png";
import googlePerformance from "@/assets/google-performance.png";
import googleAdsIcon from "@/assets/google-ads-icon.png";
import googleSearch from "@/assets/google-search.png";
import googleMaps from "@/assets/google-maps.webp";
import facebookAds from "@/assets/facebook-ads.png";
import youtubeAds from "@/assets/youtube-ads.png";
import instagramAds from "@/assets/instagram-ads.png";
import inpulsoMetaMockup from "@/assets/inpulso-meta-mockup.png";
export function GoogleMetaAdsSection() {
  return <section className="py-12 md:py-16 lg:py-20 px-4 text-white overflow-hidden relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Seção de Pros e Contras - Gatilhos de Dor e Desejo */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              <span className="text-destructive">Sem estratégia digital</span> vs{" "}
              <span className="text-primary">Com nossa expertise</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja a diferença entre continuar perdendo oportunidades ou dominar o mercado digital
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Lado da DOR - Sem estratégia */}
            <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-destructive text-2xl">❌</span>
                  </div>
                  <h3 className="text-2xl font-bold text-destructive">Sem Nossa Ajuda</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-destructive mr-3 mt-1">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-white">Dinheiro jogado fora</strong> em anúncios que não convertem
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3 mt-1">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-white">Concorrentes roubando</strong> seus clientes enquanto você fica invisível
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3 mt-1">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-white">Vendas estagnadas</strong> porque ninguém encontra sua empresa
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3 mt-1">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-white">Tempo perdido</strong> tentando aprender sozinho o que não funciona
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3 mt-1">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-white">Estresse constante</strong> vendo o negócio não crescer
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Lado do DESEJO - Com nossa estratégia */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Com Nossa Expertise</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-white">ROI otimizado</strong> com campanhas que realmente geram vendas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-white">Dominância no mercado</strong> aparecendo antes dos concorrentes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-white">Crescimento exponencial</strong> com leads qualificados todos os dias
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-white">Equipe especializada</strong> cuidando da sua presença digital 24/7
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-white">Tranquilidade total</strong> sabendo que sua empresa está crescendo
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Central */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
              <div>
                <p className="text-lg md:text-xl text-muted-foreground mb-4">
                  <strong className="text-white">Não deixe</strong> seus concorrentes dominarem seu mercado por mais um dia
                </p>
                <button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden">
                  <span className="relative z-10 text-black">Quero Dominar Meu Mercado Agora</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Google Ads Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="transform translate-y-0 opacity-100 transition-all duration-1000 ease-out">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white leading-tight">
                Fique no topo do{" "}
                <span className="text-primary relative">
                  Google e venda mais
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full transform scale-x-0 animate-scaleX"></div>
                </span>
              </h2>
            </div>
            
            <div className="transform translate-y-4 opacity-0 animate-fadeInUp" style={{
            animationDelay: '0.3s'
          }}>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Queremos garantir que você utilize os{" "}
                <span className="font-semibold text-white">principais recursos do Google</span>{" "}
                da melhor forma possível, proporcionando a{" "}
                <span className="font-semibold text-white">melhor performance</span>{" "}
                do seu negócio no digital.
              </p>
            </div>

            <div className="transform translate-y-4 opacity-0 animate-fadeInUp" style={{
            animationDelay: '0.6s'
          }}>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden">
                <span className="relative z-10 text-black">Solicite um orçamento</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center relative">
            {/* Composição complexa com múltiplas imagens animadas */}
            <div className="relative w-full max-w-2xl h-[500px]">
              {/* Analytics principal - centro */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-64 h-72 animate-float" style={{
              animationDelay: '0s'
            }}>
                <img src={googleAnalyticsMain} alt="Google Analytics Dashboard" className="w-full h-full object-contain transform hover:scale-105 transition-all duration-500" />
              </div>

              {/* Barra de pesquisa - topo */}
              <div className="absolute top-0 left-8 w-48 h-16 animate-float" style={{
              animationDelay: '0.5s'
            }}>
                <img src={googleSearchBar} alt="Google Search Bar" className="w-full h-full object-contain transform hover:scale-105 transition-all duration-500" />
              </div>

              {/* Gráfico - direita */}
              <div className="absolute top-16 right-0 w-32 h-32 animate-float" style={{
              animationDelay: '1s'
            }}>
                <img src={googleChart} alt="Google Analytics Chart" className="w-full h-full object-contain transform hover:scale-110 transition-all duration-500" />
              </div>

              {/* Performance - esquerda inferior */}
              <div className="absolute bottom-4 left-0 w-36 h-20 animate-float" style={{
              animationDelay: '1.5s'
            }}>
                <img src={googlePerformance} alt="Google Performance" className="w-full h-full object-contain transform hover:scale-105 transition-all duration-500" />
              </div>

              {/* Ícones flutuantes das plataformas */}
              <div className="absolute top-32 left-4 w-12 h-12 animate-bounce" style={{
              animationDelay: '0.2s'
            }}>
                <img src={googleAdsIcon} alt="Google Ads" className="w-full h-full object-contain rounded-lg shadow-lg" />
              </div>

              <div className="absolute top-48 right-8 w-12 h-12 animate-bounce" style={{
              animationDelay: '0.7s'
            }}>
                <img src={googleSearch} alt="Google Search" className="w-full h-full object-contain rounded-lg shadow-lg" />
              </div>

              <div className="absolute bottom-32 right-4 w-12 h-12 animate-bounce" style={{
              animationDelay: '1.2s'
            }}>
                <img src={googleMaps} alt="Google Maps" className="w-full h-full object-contain rounded-lg shadow-lg" />
              </div>

              {/* Elementos decorativos */}
              <div className="absolute top-8 right-16 w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute bottom-16 left-16 w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 left-2 w-5 h-5 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full animate-bounce shadow-lg" style={{
              animationDelay: '0.8s'
            }}></div>
            </div>
          </div>
        </div>

        {/* Meta Ads Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center relative">
            {/* Composição Meta com elementos animados */}
            <div className="relative w-full max-w-lg h-[400px]">
              {/* Mockup principal do Meta */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-80 animate-float" style={{
              animationDelay: '0.2s'
            }}>
                <img src={inpulsoMetaMockup} alt="Meta Ads Marketing" className="w-full h-full object-contain transform hover:scale-105 transition-all duration-500" />
              </div>

              {/* Ícones das redes sociais flutuando */}
              <div className="absolute top-8 left-4 w-16 h-16 animate-float" style={{
              animationDelay: '0.5s'
            }}>
                <img src={facebookAds} alt="Facebook Ads" className="w-full h-full object-contain rounded-lg shadow-lg hover:rotate-6 transition-all duration-500" />
              </div>

              <div className="absolute top-16 right-4 w-16 h-16 animate-float" style={{
              animationDelay: '1s'
            }}>
                <img src={instagramAds} alt="Instagram Ads" className="w-full h-full object-contain rounded-lg shadow-lg hover:-rotate-6 transition-all duration-500" />
              </div>

              <div className="absolute bottom-8 left-8 w-16 h-16 animate-float" style={{
              animationDelay: '1.5s'
            }}>
                <img src={youtubeAds} alt="YouTube Ads" className="w-full h-full object-contain rounded-lg shadow-lg hover:rotate-3 transition-all duration-500" />
              </div>

              {/* Elementos decorativos Meta */}
              <div className="absolute top-1/3 left-0 w-5 h-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg animate-pulse shadow-lg"></div>
              <div className="absolute bottom-1/3 right-0 w-7 h-7 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-bounce shadow-lg" style={{
              animationDelay: '0.7s'
            }}></div>
              <div className="absolute top-8 left-1/3 w-4 h-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full animate-pulse shadow-lg" style={{
              animationDelay: '1.8s'
            }}></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="transform translate-y-0 opacity-100 transition-all duration-1000 ease-out">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white leading-tight">
                Campanhas{" "}
                <span className="text-primary relative">
                  otimizadas e eficientes
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full transform scale-x-0 animate-scaleX" style={{
                  animationDelay: '0.5s'
                }}></div>
                </span>
              </h2>
            </div>
            
            <div className="transform translate-y-4 opacity-0 animate-fadeInUp" style={{
            animationDelay: '0.8s'
          }}>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Atraia o público certo para o seu perfil e gere{" "}
                <span className="font-semibold text-white">leads qualificados</span>{" "}
                para seu time comercial. Garantimos a criação de campanhas estratégicas e fazemos 
                análises e sugestões no seu perfil para obter mais resultados.
              </p>
            </div>

            <div className="transform translate-y-4 opacity-0 animate-fadeInUp" style={{
            animationDelay: '1.1s'
          }}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden">
                <span className="relative z-10">Solicite um orçamento</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}