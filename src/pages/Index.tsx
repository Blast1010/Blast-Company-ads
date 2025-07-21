import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GoogleMetaAdsSection } from "@/components/GoogleMetaAdsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { WhyTrustUsSection } from "@/components/WhyTrustUsSection";
import { PartnerServiceSection } from "@/components/PartnerServiceSection";
import { PartnerCareSection } from "@/components/PartnerCareSection";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { SolutionSection } from "@/components/SolutionSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Background Lighting Effects - Responsivo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary ambient light - top left - Ajustado para mobile */}
        <div className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-48 sm:w-96 h-48 sm:h-96 
                        bg-gradient-radial from-primary/20 via-primary/10 to-transparent 
                        rounded-full blur-2xl sm:blur-3xl opacity-60 animate-float"></div>
        
        {/* Secondary light - top right - Responsivo */}
        <div className="absolute -top-30 sm:-top-60 -right-30 sm:-right-60 w-64 sm:w-[500px] h-64 sm:h-[500px] 
                        bg-gradient-radial from-primary/15 via-primary/8 to-transparent 
                        rounded-full blur-xl sm:blur-2xl opacity-40 animate-breathe"></div>
        
        {/* Mid-page accent light - left - Ajustado */}
        <div className="absolute top-1/3 -left-16 sm:-left-32 w-40 sm:w-80 h-40 sm:h-80 
                        bg-gradient-radial from-primary/25 via-primary/12 to-transparent 
                        rounded-full blur-2xl sm:blur-3xl opacity-50 animate-float" 
                        style={{ animationDelay: '2s' }}></div>
        
        {/* Mid-page accent light - right - Responsivo */}
        <div className="absolute top-1/2 -right-16 sm:-right-32 w-36 sm:w-72 h-36 sm:h-72 
                        bg-gradient-radial from-primary/20 via-primary/10 to-transparent 
                        rounded-full blur-xl sm:blur-2xl opacity-45 animate-breathe" 
                        style={{ animationDelay: '1s' }}></div>
        
        {/* Bottom ambient light - Responsivo */}
        <div className="absolute -bottom-20 sm:-bottom-40 left-1/2 transform -translate-x-1/2 w-80 sm:w-[600px] h-48 sm:h-[400px] 
                        bg-gradient-radial from-primary/18 via-primary/9 to-transparent 
                        rounded-full blur-2xl sm:blur-3xl opacity-55 animate-float" 
                        style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles effect - Ajustados para mobile */}
        <div className="absolute top-1/4 left-1/4 w-2 sm:w-4 h-2 sm:h-4 
                        bg-primary/30 rounded-full blur-sm opacity-60 animate-float" 
                        style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 sm:w-3 h-1.5 sm:h-3 
                        bg-primary/25 rounded-full blur-sm opacity-50 animate-breathe" 
                        style={{ animationDelay: '2.5s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1 sm:w-2 h-1 sm:h-2 
                        bg-primary/35 rounded-full blur-sm opacity-70 animate-float" 
                        style={{ animationDelay: '4s', animationDuration: '3s' }}></div>
      </div>

      {/* Header */}
      <Header />
      
      {/* Todas as seções com responsividade melhorada */}
      <div className="bg-black relative z-10">
        <HeroSection />
      </div>
      
      <div className="bg-black relative z-10">
        <GoogleMetaAdsSection />
      </div>
      
      <div className="bg-black relative z-10">
        <ClientsSection />
      </div>
      
      <div className="bg-black relative z-10">
        <WhyTrustUsSection />
      </div>
      
      <div className="bg-black relative z-10">
        <PartnerCareSection />
      </div>
      
      <div className="bg-black relative z-10">
        <ServicesSection />
      </div>
      
      <div className="bg-black relative z-10">
        <SolutionSection />
      </div>
      
      <div className="bg-black relative z-10">
        <PartnerServiceSection />
      </div>
      
      <div className="bg-black relative z-10">
        <AnalyticsSection />
      </div>
      
      
      <div className="bg-black relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
