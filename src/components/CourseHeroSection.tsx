import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, BarChart3 } from "lucide-react";

export function CourseHeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-80 h-80 bg-gradient-radial from-cyan-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-64 h-64 bg-gradient-radial from-cyan-500/15 via-cyan-500/5 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-md relative z-10 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-cyan-400 text-2xl font-bold">Aladdin</h2>
        </div>
        
        {/* Main Content */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            Aprenda a fazer<br />
            tráfego <span className="text-cyan-400">de verdade</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Entenda de uma vez por todas e usar os<br />
            Dados ao seu Favor
          </p>
        </div>
        
        {/* Email Form */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Input 
              type="email" 
              placeholder="Digite o seu melhor email" 
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 h-12 text-center"
            />
          </div>
          
          <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-black py-3 text-lg font-bold rounded-lg">
            QUERO PARTICIPAR
          </Button>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 p-3 rounded-full mb-3">
              <Lock className="h-6 w-6 text-cyan-400" />
            </div>
            <p className="text-xs text-gray-300 text-center leading-tight">
              Metodologia Testada<br />
              de Aplicação
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 p-3 rounded-full mb-3">
              <BarChart3 className="h-6 w-6 text-cyan-400" />
            </div>
            <p className="text-xs text-gray-300 text-center leading-tight">
              Tome Melhores<br />
              Decisões
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}