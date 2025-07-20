import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, Shield } from "lucide-react";
import { ProgressiveForm } from "@/components/ProgressiveForm";
export function HeroSection() {
  return <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Texto Principal - 8 colunas */}
          <div className="lg:col-span-8 space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white block">Cansou de queimar dinheiro em campanhas que</span>
                <span className="text-red-500 block">não geram resultados?</span>
                <span className="text-white block">Para Atender Seu Negócio</span>
              </h1>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                QUERO MAIS INFORMAÇÕES
              </Button>
            </div>

            {/* Description */}
            <div className="space-y-4 pt-6">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl">
                Enquanto você lê isso, seus concorrentes estão vendendo mais — e pagando menos por isso. 
                Eles entenderam que tráfego pago não é sobre gastar, e sim investir com estratégia.
              </p>
              
              <p className="text-base sm:text-lg text-gray-400 max-w-3xl">
                Somos uma agência parceira estratégica da sua empresa, 
                criando estratégias vencedoras e cuidando do seu investimento como se o dinheiro fosse nosso!
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-red-500">+500</span>
                <span className="text-sm text-gray-400">Empresas<br />atendidas</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-red-500">+R$ 50M</span>
                <span className="text-sm text-gray-400">Em vendas<br />geradas</span>
              </div>
            </div>
          </div>

          {/* Imagem - 4 colunas */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/team-analytics.jpg" 
                  alt="Profissional analisando estratégias digitais" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="pt-16 max-w-2xl mx-auto">
          <ProgressiveForm />
        </div>
      </div>
    </section>;
}