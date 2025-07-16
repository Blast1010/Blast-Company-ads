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
    <div className="min-h-screen">
      {/* Hero Section - Dark background */}
      <div className="bg-gray-900">
        <HeroSection />
      </div>
      
      {/* Google/Meta Ads Section - Light background */}
      <div className="bg-gray-50">
        <GoogleMetaAdsSection />
      </div>
      
      {/* Services Section - Dark background */}
      <div className="bg-gray-800">
        <ServicesSection />
      </div>
      
      {/* Clients Section - Light background */}
      <div className="bg-white">
        <ClientsSection />
      </div>
      
      {/* Why Trust Us Section - Dark background */}
      <div className="bg-gray-900">
        <WhyTrustUsSection />
      </div>
      
      {/* Partner Service Section - Light background */}
      <div className="bg-gray-100">
        <PartnerServiceSection />
      </div>
      
      {/* Analytics Section - Dark background */}
      <div className="bg-gray-800">
        <AnalyticsSection />
      </div>
      
      {/* CTA Section - Primary color background */}
      <div className="bg-primary">
        <CTASection />
      </div>
      
      {/* Footer - Dark background */}
      <div className="bg-gray-900">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
