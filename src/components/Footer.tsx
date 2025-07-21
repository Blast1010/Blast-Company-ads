import { MessageCircle, Mail, Instagram, Linkedin } from "lucide-react";
export function Footer() {
  return <footer className="py-16 px-4 bg-gradient-to-t from-muted/20 to-background border-t border-border/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand with Logo */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Blast Company Ads
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Especializados em tráfego pago e growth hacking para empresas que querem escalar suas vendas de forma consistente e sustentável.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group">
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Serviços</h4>
            <div className="space-y-3">
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Google Ads
              </div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Meta Ads
              </div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                CRM & Automação
              </div>
              <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Analytics
              </div>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors group">
                <MessageCircle className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:contato@blastcompanyads.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                <span>contato@blastcompanyads.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>&copy; 2025 Blast Company Ads. Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="hover:text-primary transition-colors cursor-pointer">Política de Privacidade</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Termos de Uso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}