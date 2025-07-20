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
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-medium">
        EXCLUSIVO PARA EMPRESAS QUE FATURAM ACIMA DE R$ 50 MIL AO MÊS
      </div>

      {/* Main header */}
      <header className="bg-black border-b border-gray-900 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-xl font-bold text-white">
                <span className="bg-primary text-black px-2 py-1 rounded font-black">IN</span>
                <span className="text-white ml-1 font-bold">PULSO</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">
                o que fazemos?
              </button>
              <button onClick={() => scrollToSection('differentials')} className="text-white hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">
                benefícios
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <FormModal>
                <Button className="bg-primary hover:bg-primary/90 text-black font-bold px-6 py-2 rounded text-sm uppercase tracking-wide">
                  quero mais informações
                </Button>
              </FormModal>
            </div>

            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="md:hidden p-2 text-white hover:text-primary transition-colors" aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden py-4 border-t border-gray-900 bg-black">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('services')} className="text-left text-white hover:text-primary transition-colors font-medium py-2 text-sm uppercase tracking-wide">
                  o que fazemos?
                </button>
                <button onClick={() => scrollToSection('differentials')} className="text-left text-white hover:text-primary transition-colors font-medium py-2 text-sm uppercase tracking-wide">
                  benefícios
                </button>
                <div className="pt-4">
                  <FormModal>
                    <Button className="bg-primary hover:bg-primary/90 text-black font-bold px-6 py-2 rounded w-full text-sm uppercase tracking-wide">
                      quero mais informações
                    </Button>
                  </FormModal>
                </div>
              </nav>
            </div>}
        </div>
      </header>
    </>;
}