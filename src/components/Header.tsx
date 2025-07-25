import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FormModal } from "@/components/FormModal";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <>
      {/* Top banner like V4 Company */}
      

      {/* Main header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                  O QUE FAZEMOS?
                </button>
                <button onClick={() => scrollToSection('differentials')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                  BENEFÍCIOS
                </button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                  COMO FUNCIONA
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                  RESULTADOS
                </button>
                <div className="pt-4">
                  <FormModal>
                    <Button variant="cta" size="lg" className="w-full font-semibold">
                      QUERO MAIS INFORMAÇÕES
                    </Button>
                  </FormModal>
                </div>
              </nav>
            </div>}
        </div>
      </header>
    </>;
}