import { Users, MessageCircle, Shield, BarChart3, Play, Camera, Film } from "lucide-react";
import logoBCinematic from "@/assets/logo-b-cinematic.png";

export const PartnerCareSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Direção Executiva Personalizada",
      description: "Como uma produção cinematográfica de alto nível, cada detalhe da sua estratégia é cuidadosamente dirigido para criar uma história de sucesso épica.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: MessageCircle,
      title: "Roteiro Estratégico em Tempo Real",
      description: "Reuniões estratégicas que moldam o roteiro do seu sucesso - cada cena planejada, cada ato executado com precisão cinematográfica para maximizar o impacto.",
      gradient: "from-primary/20 to-blue-500/20"
    },
    {
      icon: Shield,
      title: "Acesso VIP aos Bastidores",
      description: "Contato direto com os diretores da sua campanha - sem intermediários, sem burocracia. Você tem acesso total aos bastidores da sua produção de sucesso.",
      gradient: "from-green-500/20 to-primary/20"
    },
    {
      icon: BarChart3,
      title: "Tecnologia de Pós-Produção Avançada",
      description: "CRM integrado como uma sala de edição profissional - cada interação rastreada, cada lead refinado, cada conversão editada para a perfeição final.",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main spotlights */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/25 via-purple-500/15 to-transparent rounded-full blur-3xl opacity-50 animate-float"></div>
        
        {/* Film grain effect */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] animate-pulse"></div>
        
        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"></div>
        
        {/* Moving light beams */}
        <div className="absolute top-10 left-10 w-1 h-96 bg-gradient-to-b from-primary/50 to-transparent rotate-12 animate-pulse opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-1 h-80 bg-gradient-to-t from-blue-500/40 to-transparent -rotate-12 animate-pulse opacity-25" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/60 rounded-full animate-float opacity-80"></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-blue-500/70 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500/60 rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Cinematic Header */}
        <div className="text-center mb-24">
          {/* Logo with cinematic frame */}
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 rounded-3xl blur-xl animate-pulse"></div>
            <div className="relative flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 backdrop-blur-xl border-2 border-primary/40 rounded-3xl shadow-2xl shadow-primary/30 overflow-hidden group">
              <img 
                src={logoBCinematic} 
                alt="Logo B Cinematográfica" 
                className="w-20 h-20 object-contain filter brightness-125 group-hover:scale-110 transition-transform duration-500"
              />
              {/* Film strip decoration */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>

          {/* Cinematic subtitle */}
          <div className="relative mb-8">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 backdrop-blur-sm border border-primary/40 rounded-full shadow-xl shadow-primary/20">
              <Camera className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary text-lg font-bold tracking-widest uppercase">Produção Exclusiva</span>
              <Film className="w-5 h-5 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Main title with cinematic effect */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-transparent bg-gradient-to-br from-white via-gray-100 to-primary bg-clip-text leading-tight mb-8">
            Atendimento de{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-primary via-primary/90 to-blue-500 bg-clip-text">
                Parceiro
              </span>
              {/* Underline effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full animate-pulse"></div>
            </span>
          </h2>

          {/* Cinematic description */}
          <div className="relative max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light tracking-wide">
              Uma experiência cinematográfica completa onde{" "}
              <span className="text-primary font-semibold">cada frame</span> da sua estratégia é{" "}
              <span className="text-blue-400 font-semibold">cuidadosamente dirigido</span> para criar{" "}
              <span className="text-purple-400 font-semibold">histórias épicas de sucesso</span>
            </p>
            
            {/* Decorative film strip */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-3 h-6 bg-primary/60 rounded-sm animate-pulse"></div>
              <div className="w-3 h-6 bg-primary/40 rounded-sm animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-6 bg-primary/60 rounded-sm animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <div className="w-3 h-6 bg-primary/40 rounded-sm animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <div className="w-3 h-6 bg-primary/60 rounded-sm animate-pulse" style={{ animationDelay: '0.8s' }}></div>
            </div>
          </div>
        </div>

        {/* Cinematic Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative p-10 rounded-3xl bg-gradient-to-br ${benefit.gradient} backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Cinematic backdrop effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                
                {/* Film spotlights */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-radial from-primary/40 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-radial from-blue-500/30 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
                
                {/* Cinematic icon frame */}
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 backdrop-blur-sm border-2 border-primary/40 rounded-2xl mb-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-primary/20">
                    <IconComponent className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  {/* Icon glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>

                {/* Cinematic content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-6 group-hover:text-primary transition-colors duration-300 tracking-wide">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 font-light text-lg tracking-wide">
                    {benefit.description}
                  </p>
                </div>

                {/* Cinematic overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Film grain overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:15px_15px] transition-opacity duration-700 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Cinematic Final Elements */}
        <div className="text-center">
          {/* Film reel decoration */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-4 h-4 border-2 border-primary/60 rounded-full animate-pulse"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-4 h-4 border-2 border-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-primary rounded-full"></div>
            <div className="w-4 h-4 border-2 border-purple-500/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Cinematic tagline */}
          <p className="text-gray-400 text-lg font-light italic tracking-wider">
            "Onde cada estratégia se torna uma obra-prima"
          </p>
          
          {/* Play button decoration */}
          <div className="flex justify-center mt-8">
            <div className="relative group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/40 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-primary ml-1" />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};