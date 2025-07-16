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
      {/* Hero Section - Deep Black */}
      <div className="bg-black">
        <HeroSection />
      </div>
      
      {/* Google/Meta Ads Section - Dark Blue */}
      <div className="bg-blue-900">
        <GoogleMetaAdsSection />
      </div>
      
      {/* Services Section - Very Dark Gray/Black */}
      <div className="bg-gray-950">
        <ServicesSection />
      </div>
      
      {/* Clients Section - Blue */}
      <div className="bg-blue-800">
        <ClientsSection />
      </div>
      
      {/* Why Trust Us Section - Black */}
      <div className="bg-black">
        <WhyTrustUsSection />
      </div>
      
      {/* Partner Service Section - Dark Blue */}
      <div className="bg-blue-900">
        <PartnerServiceSection />
      </div>
      
      {/* Analytics Section - Dark Gray */}
      <div className="bg-gray-900">
        <AnalyticsSection />
      </div>
      
      {/* CTA Section - Primary Blue */}
      <div className="bg-blue-600">
        <CTASection />
      </div>
      
      {/* Footer - Black */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
