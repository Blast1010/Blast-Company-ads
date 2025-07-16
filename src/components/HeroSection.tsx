import { Button } from "@/components/ui/button";
import { Mail, Target, TrendingUp } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
import heroProfessional from "@/assets/hero-professional.jpg";
export function HeroSection() {
  return <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 bg-block-hero overflow-hidden border-b border-primary/10 shadow-block">
      {/* Cinematic Light Effects - Emerging from Below */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary light emerging from bottom - Main cinematographic effect */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[140%] h-[120vh] bg-gradient-radial from-primary/20 via-primary/12 via-primary/8 via-primary/4 to-transparent rounded-full blur-3xl opacity-70 animate-[breathe_8s_ease-in-out_infinite]"></div>
        
        {/* Secondary bottom light layer for depth */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[100%] h-96 bg-gradient-to-t from-primary/25 via-primary/15 via-primary/8 to-transparent rounded-full blur-2xl opacity-50 animate-[breathe_6s_ease-in-out_infinite_1s]"></div>
        
        {/* Lateral emerging lights */}
        <div className="absolute bottom-0 left-0 w-[60%] h-[80vh] bg-gradient-radial from-primary/15 via-primary/8 via-primary/4 to-transparent rounded-full blur-3xl opacity-40 animate-[breathe_10s_ease-in-out_infinite_2s]"></div>
        <div className="absolute bottom-0 right-0 w-[60%] h-[80vh] bg-gradient-radial from-primary/15 via-primary/8 via-primary/4 to-transparent rounded-full blur-3xl opacity-40 animate-[breathe_10s_ease-in-out_infinite_4s]"></div>
        
        {/* Central depth enhancer */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[180%] h-[100vh] bg-gradient-radial from-primary/8 via-primary/4 via-primary/2 to-transparent rounded-full blur-3xl opacity-30 animate-[breathe_12s_ease-in-out_infinite]"></div>
        
        {/* Floating ambient particles */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-primary/12 via-primary/6 to-transparent rounded-full blur-3xl opacity-30 animate-[float_15s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl opacity-25 animate-[float_18s_ease-in-out_infinite_3s]"></div>
        <div className="absolute top-3/4 left-1/4 w-64 h-64 bg-gradient-radial from-primary/8 via-primary/4 to-transparent rounded-full blur-3xl opacity-20 animate-[float_20s_ease-in-out_infinite_6s]"></div>
        
        {/* Top rim illumination */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-2xl opacity-25 animate-[breathe_14s_ease-in-out_infinite_1s]"></div>
        
        {/* Premium highlight overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent via-primary/3 to-transparent opacity-40 animate-[breathe_16s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Logo */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 font-bold text-sm">VAGAS LIMITADAS - APENAS 5 CONTAS POR MÊS</span>
          </div>
          <h2 className="text-2xl md:text-2xl font-bold tracking-tight">
            Blast Company <span className="text-primary">ads</span>
          </h2>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-center">
              <span className="text-primary text-lg md:text-xl font-medium tracking-wide uppercase">SEU TRÁFEGO PAGO</span><br />
              <span className="text-4xl md:text-5xl lg:text-6xl">ESTÁ QUEIMANDO</span><br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
                SEU DINHEIRO?
              </span>
            </h1>
            
            <div className="space-y-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              
              <div className="space-y-4 text-center">
                <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                  <span className="text-red-400 font-bold">CAC alto, ROAS baixo</span> e campanhas sem performance? 
                  Seus <span className="text-primary font-bold">concorrentes estão dominando</span> Facebook, Google e TikTok Ads.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
                  Somos especialistas em <span className="text-foreground font-medium">tráfego pago de alta performance</span>. 
                  Reduzimos CAC em até <span className="text-primary font-bold">70%</span> e aumentamos ROAS para 
                  <span className="text-primary font-bold">8x ou mais</span> em 60 dias.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <ProgressiveForm />
            </div>
          </div>

          {/* Right Column - Cinematic Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img 
                src={heroProfessional} 
                alt="Profissional especialista em marketing digital trabalhando com dashboards"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg shadow-glow animate-pulse">
                <span className="text-sm font-semibold">Live Analytics</span>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm border border-border/50 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Performance em Tempo Real</span>
                </div>
              </div>
              
              {/* Brand Badge */}
              <div className="absolute top-6 left-6 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-glow">
                Blast Company
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="flex items-center space-x-6 text-center group">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">ROAS 8x Garantido</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Ou otimizamos de graça até atingir a meta
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-center group">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">CAC Reduzido em 70%</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Estratégias avançadas de segmentação e otimização
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}