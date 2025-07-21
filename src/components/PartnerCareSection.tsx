import { Check } from "lucide-react";

export const PartnerCareSection = () => {
  const benefits = [
    "Fazer você vender é o nosso trabalho diário, mas sabemos o quão importante é para nossos parceiros acompanharem o que está sendo feito.",
    "Sempre faremos reuniões estratégicas, seja para extrair informações de inteligência, para tomar decisões juntos com você ou apenas para mostrar os resultados do nosso trabalho.",
    "Não criamos burocracias para falar conosco, terá contato direto com nossos estrategistas para se sentir sempre seguro",
    "Diferente de outros gestores, nos contamos com CRM integrado na sua estrutura juntamente com Relatórios diários com rastreamento de conversas, fazendo assim identificarmos otimizações precisas e economizar o seu dinheiro."
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-black rounded-lg mb-6 font-bold text-xl">
            B
          </div>
          <p className="text-muted-foreground text-lg mb-4">Direto com o gestor</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Atendimento de Parceiro
          </h2>
        </div>

        {/* Benefits List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
              <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-white transition-colors duration-300">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/8 rounded-full blur-2xl opacity-40"></div>
      </div>
    </section>
  );
};