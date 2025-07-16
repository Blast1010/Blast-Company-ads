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
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <GoogleMetaAdsSection />
      <ServicesSection />
      <ClientsSection />
      <WhyTrustUsSection />
      <PartnerServiceSection />
      <AnalyticsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
