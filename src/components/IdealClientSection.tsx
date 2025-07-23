import { Button } from "@/components/ui/button";
import { Check, Target, TrendingUp, Users, Handshake, Clock } from "lucide-react";
import { FormModal } from "@/components/FormModal";

export function IdealClientSection() {
  return (
    <section className="py-20 px-4 text-white bg-gradient-to-br from-background via-background/95 to-primary/10 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-primary/15 via-primary/8 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-green-500/10 via-green-500/5 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm border border-green-500/30 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-400">
              Este é o perfil IDEAL que nós QUEREMOS como parceiro
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Empresas que entendem investimento em marketing</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Sabem que crescimento sustentável requer budget adequado e veem marketing como investimento, não gasto</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Clientes que confiam na nossa expertise</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Valorizam nossa experiência, dão autonomia para executar estratégias e entendem nosso processo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Negócios com produto/serviço validado</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Têm produto testado no mercado, processo de vendas estruturado e equipe preparada para atender demanda</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Quem entende que resultados levam tempo</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Compreendem que marketing digital é processo contínuo e têm paciência para otimizações graduais</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Empresas que querem parceria estratégica</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Buscam relacionamento de longo prazo, trabalham em conjunto e veem a agência como extensão da equipe</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground font-medium">Clientes comprometidos com crescimento</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">Têm visão de longo prazo, investem em estrutura e estão dispostos a evoluir junto com as estratégias</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <FormModal>
                <Button size="lg" className="text-black px-8 py-3 bg-primary hover:bg-primary/90 transition-colors">
                  Quero Ser Seu Parceiro
                </Button>
              </FormModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}