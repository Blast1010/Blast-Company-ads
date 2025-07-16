import { HeroSection } from "@/components/HeroSection";
import { ClientsSection } from "@/components/ClientsSection";
import { WhyTrustUsSection } from "@/components/WhyTrustUsSection";
import { PartnerServiceSection } from "@/components/PartnerServiceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ClientsSection />
      <WhyTrustUsSection />
      <PartnerServiceSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
