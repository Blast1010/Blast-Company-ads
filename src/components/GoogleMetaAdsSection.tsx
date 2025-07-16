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
            <div className="inline-block bg-destructive/10 border border-destructive/30 rounded-full px-6 py-2 mb-6">
              <span className="text-destructive font-semibold text-sm uppercase tracking-wider">⚠️ ALERTA URGENTE</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Enquanto você <span className="text-destructive relative">
                hesita
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-destructive rounded-full animate-pulse"></div>
              </span>, seus concorrentes{" "}
              <span className="text-primary relative">
                faturam milhões
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full animate-pulse"></div>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              <strong className="text-white">A cada segundo que passa</strong>, você está perdendo clientes para quem investe em marketing digital profissional
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Lado da DOR - Sem estratégia */}
            <div className="bg-gradient-to-br from-destructive/15 to-red-900/10 border-2 border-destructive/30 rounded-2xl p-8 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full -translate-y-8 translate-x-8 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500/5 rounded-full animate-ping"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-destructive/30 to-red-600/30 rounded-xl flex items-center justify-center mr-4 animate-bounce">
                    <span className="text-destructive text-3xl">💸</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-destructive">SUA REALIDADE ATUAL</h3>
                </div>
                
                <ul className="space-y-5">
                  <li className="flex items-start group">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-spin">
                      <span className="text-destructive text-lg">💀</span>
                    </div>
                    <span className="text-base md:text-lg">
                      <strong className="text-white text-xl">R$ 50.000+ POR MÊS</strong> 
                      <span className="text-gray-300"> desperdiçados em anúncios que só geram prejuízo</span>
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-spin">
                      <span className="text-destructive text-lg">🏃‍♂️</span>
                    </div>
                    <span className="text-base md:text-lg">
                      <strong className="text-white text-xl">CLIENTES FUGINDO</strong>
                      <span className="text-gray-300"> direto para a concorrência que aparece primeiro no Google</span>
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-spin">
                      <span className="text-destructive text-lg">📉</span>
                    </div>
                    <span className="text-base md:text-lg">
                      <strong className="text-white text-xl">VENDAS DESPENCANDO</strong>
                      <span className="text-gray-300"> porque você é invisível online</span>
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-spin">
                      <span className="text-destructive text-lg">😰</span>
                    </div>
                    <span className="text-base md:text-lg">
                      <strong className="text-white text-xl">NOITES EM CLARO</strong>
                      <span className="text-gray-300"> se perguntando por que o negócio não decola</span>
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-spin">
                      <span className="text-destructive text-lg">⏰</span>
                    </div>
                    <span className="text-base md:text-lg">
                      <strong className="text-white text-xl">ANOS PERDIDOS</strong>
                      <span className="text-gray-300"> tentando "se virar" sozinho enquanto outros prosperam</span>
                    </span>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                  <p className="text-destructive font-bold text-center text-lg">
                    ⚠️ QUANTO MAIS VOCÊ ESPERA, MAIS VOCÊ PERDE!
                  </p>
                </div>
              </div>
            </div>

            {/* Lado do DESEJO - Com nossa estratégia */}
            <div className="bg-gradient-to-br from-primary/15 to-green-900/10 border-2 border-primary/40 rounded-2xl p-8 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-8 translate-x-8 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500/5 rounded-full animate-ping"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/40 to-green-500/40 rounded-xl flex items-center justify-center mr-4 animate-bounce">
                    <span className="text-primary text-3xl">🏆</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-primary">SUA NOVA REALIDADE</h3>
                </div>
                
                <ul className="space-y-5">
                  <li className="flex items-start group">
                    <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-spin">
                      <span className="text-primary text-lg">💰</span>
                    </div>
                    <span className="text-base md:text-lg">
                      <strong className="text-white text-xl">ROI DE 500%+</strong>
                      <span className="text-gray-300"> cada R$1 investido retorna R$5 em vendas garantidas</span>
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-spin">
                      <span className="text-primary text-lg">👑</span>
                    </div>
                    <span className="text-base md:text-lg">
                      <strong className="text-white text-xl">LÍDER DO MERCADO</strong>
                      <span className="text-gray-300"> seus concorrentes choram vendo você dominar o Google</span>
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-spin">
                      <span className="text-primary text-lg">📈</span>
                    </div>
                    <span className="text-base md:text-lg">
                      <strong className="text-white text-xl">200+ LEADS/DIA</strong>
                      <span className="text-gray-300"> clientes qualificados brigando para comprar de você</span>
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-spin">
                      <span className="text-primary text-lg">😎</span>
                    </div>
                    <span className="text-base md:text-lg">
                      <strong className="text-white text-xl">LIBERDADE TOTAL</strong>
                      <span className="text-gray-300"> dormindo tranquilo sabendo que o dinheiro nunca para de entrar</span>
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-spin">
                      <span className="text-primary text-lg">🚀</span>
                    </div>
                    <span className="text-base md:text-lg">
                      <strong className="text-white text-xl">CRESCIMENTO IMPARÁVEL</strong>
                      <span className="text-gray-300"> nossa equipe expert trabalhando 24/7 para você lucrar mais</span>
                    </span>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-primary/20 to-green-500/10 border border-primary/40 rounded-lg">
                  <p className="text-primary font-bold text-center text-lg">
                    ✨ ESTA É A VIDA QUE VOCÊ MERECE!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Central com Urgência */}
          <div className="text-center mt-16">
            <div className="max-w-4xl mx-auto">
              {/* Contador de Urgência */}
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border-2 border-red-500/30 rounded-2xl p-6 mb-8 animate-pulse">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  🔥 ÚLTIMAS <span className="text-destructive">48 HORAS</span> COM 50% DE DESCONTO!
                </h3>
                <p className="text-lg md:text-xl text-gray-300 mb-4">
                  <strong className="text-white">APENAS 7 VAGAS RESTANTES</strong> para empresas que querem sair do zero e faturar milhões
                </p>
                <div className="flex justify-center items-center space-x-4 text-sm md:text-base">
                  <div className="bg-destructive/20 px-4 py-2 rounded-lg border border-destructive/30">
                    <span className="text-destructive font-bold">23:45:12</span>
                  </div>
                  <span className="text-gray-400">restantes para aprovação</span>
                </div>
              </div>

              {/* CTA Principal */}
              <div className="bg-gradient-to-r from-primary/15 to-accent/15 border-2 border-primary/30 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-pulse"></div>
                <div className="relative z-10">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-6">
                    Pare de <span className="text-destructive">PERDER DINHEIRO</span> e comece a 
                    <span className="text-primary"> FATURAR MILHÕES</span> ainda este mês!
                  </h4>
                  
                  <button className="bg-gradient-to-r from-primary via-accent to-green-500 hover:from-primary/90 hover:via-accent/90 hover:to-green-500/90 text-black px-12 py-6 rounded-2xl font-black text-xl md:text-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group relative overflow-hidden animate-bounce">
                    <span className="relative z-10 flex items-center justify-center">
                      💰 SIM! QUERO FATURAR MILHÕES AGORA
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                  
                  <p className="text-sm md:text-base text-gray-400 mt-4">
                    ⚡ <strong className="text-white">Resposta em menos de 2 horas</strong> • 
                    🎯 <strong className="text-white">Primeira campanha em 24h</strong> • 
                    💎 <strong className="text-white">Garantia de resultados</strong>
                  </p>
                </div>
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