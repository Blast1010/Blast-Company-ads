import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Users, BarChart3 } from "lucide-react";

export function AboutSection() {
  const services = [
    {
      icon: Target,
      title: "Full Campaign Management",
      description: "Complete management on Meta Ads and Google Ads with expert oversight."
    },
    {
      icon: TrendingUp,
      title: "Customized Strategies",
      description: "Tailored strategies designed specifically for your business goals."
    },
    {
      icon: BarChart3,
      title: "Continuous Optimization",
      description: "Ongoing optimization to maximize ROI and campaign performance."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "More Sales, Less Waste",
      description: "Increase revenue while reducing wasted ad spend"
    },
    {
      icon: BarChart3,
      title: "Weekly Reports",
      description: "Clear performance metrics delivered weekly"
    },
    {
      icon: Target,
      title: "Direct Support",
      description: "Direct access to our team of specialists"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We specialize in turning your advertising budget into measurable business growth.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose Us
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}