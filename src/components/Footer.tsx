import { MessageCircle, Mail, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Blast Company Ads
            </h3>
            <p className="text-muted-foreground">
              Transformando cliques em clientes com estratégias comprovadas de tráfego pago.
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2">
              <a 
                href="#" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
              <a 
                href="mailto:contact@blastcompanyads.com" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                contact@blastcompanyads.com
              </a>
            </div>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Siga-nos</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; 2025 Blast Company Ads – Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}