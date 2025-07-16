import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                We turn{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  clicks into customers
                </span>{" "}
                every single day.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Boost your sales with paid traffic strategies that actually work.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
              >
                I want to scale my business
                <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional working with performance analytics"
                className="rounded-2xl shadow-subtle w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
    </section>
  );
}