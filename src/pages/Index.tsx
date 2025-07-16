import { HeroSection } from "@/components/HeroSection";
import { GoogleMetaAdsSection } from "@/components/GoogleMetaAdsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { WhyTrustUsSection } from "@/components/WhyTrustUsSection";
import { PartnerServiceSection } from "@/components/PartnerServiceSection";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Background Lighting Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary ambient light - top left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 
                        bg-gradient-radial from-primary/20 via-primary/10 to-transparent 
                        rounded-full blur-3xl opacity-60 animate-float"></div>
        
        {/* Secondary light - top right */}
        <div className="absolute -top-60 -right-60 w-[500px] h-[500px] 
                        bg-gradient-radial from-primary/15 via-primary/8 to-transparent 
                        rounded-full blur-2xl opacity-40 animate-breathe"></div>
        
        {/* Mid-page accent light - left */}
        <div className="absolute top-1/3 -left-32 w-80 h-80 
                        bg-gradient-radial from-primary/25 via-primary/12 to-transparent 
                        rounded-full blur-3xl opacity-50 animate-float" 
                        style={{ animationDelay: '2s' }}></div>
        
        {/* Mid-page accent light - right */}
        <div className="absolute top-1/2 -right-32 w-72 h-72 
                        bg-gradient-radial from-primary/20 via-primary/10 to-transparent 
                        rounded-full blur-2xl opacity-45 animate-breathe" 
                        style={{ animationDelay: '1s' }}></div>
        
        {/* Bottom ambient light */}
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] 
                        bg-gradient-radial from-primary/18 via-primary/9 to-transparent 
                        rounded-full blur-3xl opacity-55 animate-float" 
                        style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 
                        bg-primary/30 rounded-full blur-sm opacity-60 animate-float" 
                        style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 
                        bg-primary/25 rounded-full blur-sm opacity-50 animate-breathe" 
                        style={{ animationDelay: '2.5s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 
                        bg-primary/35 rounded-full blur-sm opacity-70 animate-float" 
                        style={{ animationDelay: '4s', animationDuration: '3s' }}></div>
      </div>

      {/* Hero Section - Black */}
      <div className="bg-black relative z-10 mb-16">
        <HeroSection />
      </div>
      
      {/* Google/Meta Ads Section - Black */}
      <div className="bg-black relative z-10 mb-16">
        <GoogleMetaAdsSection />
      </div>
      
      {/* Services Section - Black */}
      <div className="bg-black relative z-10 mb-16">
        <ServicesSection />
      </div>
      
      {/* Clients Section - Black */}
      <div className="bg-black relative z-10 mb-16">
        <ClientsSection />
      </div>
      
      {/* Why Trust Us Section - Black */}
      <div className="bg-black relative z-10 mb-16">
        <WhyTrustUsSection />
      </div>
      
      {/* Partner Service Section - Black */}
      <div className="bg-black relative z-10 mb-16">
        <PartnerServiceSection />
      </div>
      
      {/* Analytics Section - Black */}
      <div className="bg-black relative z-10 mb-16">
        <AnalyticsSection />
      </div>
      
      {/* CTA Section - Black */}
      <div className="bg-black relative z-10 mb-16">
        <CTASection />
      </div>
      
      {/* Footer - Black */}
      <div className="bg-black relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
