import { Button } from "@/components/ui/button";
import { Mail, Crown, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 py-20 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Logo */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold">
            Blast Company <span className="text-primary">ads</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Temos como trabalho<br />
              Aumentar as Vendas da<br />
              sua Empresa com{" "}
              <span className="text-primary">
                Tráfego<br />
                de Verdade
              </span>
            </h1>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground">
                Somos uma agência parceira da sua empresa.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Desenvolvemos estratégias Vencedoras para<br />
                Aumentar as vendas do seu negócio com o<br />
                mínimo investimento possível.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Entenda como crescer ainda mais a sua<br />
                empresa por meio das maiores fontes de{" "}
                <span className="text-primary">Tráfego<br />
                do mundo.</span>
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Mail className="mr-2 h-5 w-5" />
              Solicite um Orçamento
            </Button>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-2xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto">
              <Crown className="h-8 w-8 text-primary" />
            </div>
            <p className="text-muted-foreground font-medium">
              Metodologia Tirada da<br />
              Aplicação
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <p className="text-muted-foreground font-medium">
              Tome Melhores Decisões
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}