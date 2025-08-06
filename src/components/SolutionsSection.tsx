import { Settings } from "lucide-react";
export const SolutionsSection = () => {
  return <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Icon and Title */}
        <div className="flex flex-col items-center mb-16">
          <div className="mb-6 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl 
                          border border-primary/20 backdrop-blur-sm">
            <Settings className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 
                         bg-clip-text text-transparent text-center">
            Soluções que oferecemos
          </h2>
        </div>

        {/* Content Card */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative p-8 sm:p-12 
                          bg-gradient-to-br from-muted/40 via-muted/20 to-muted/40 
                          rounded-3xl border border-white/10 backdrop-blur-sm
                          hover:border-primary/30 transition-all duration-500
                          shadow-2xl hover:shadow-primary/20">
            
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 
                            rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground/90 text-center font-medium">
                A Solução que oferecemos é{" "}
                <span className="text-primary font-bold">vendas</span>. Sem firulas ou 
                textinhos bonitos de Marketing para tentar mostrar que somos uma agência diferente. 
                Quando você se tornar nosso parceiro, vamos fazer de tudo pra você{" "}
                <span className="text-primary font-bold">vender muito</span>. Mas abaixo 
                explicamos o{" "}
                .
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/30 rounded-full blur-sm"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary/20 rounded-full blur-sm"></div>
            <div className="absolute top-1/2 -right-4 w-3 h-3 bg-primary/25 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>
    </section>;
};