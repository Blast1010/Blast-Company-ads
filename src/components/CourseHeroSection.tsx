import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Users, Award } from "lucide-react";
export function CourseHeroSection() {
  return <section className="min-h-screen bg-black text-white flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-80 h-80 bg-gradient-radial from-cyan-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-64 h-64 bg-gradient-radial from-cyan-500/15 via-cyan-500/5 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-cyan-400 text-xl font-bold mb-4">Aladdin</h2>
        </div>
        
        {/* Main Headline */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Aprenda a fazer<br />
            tráfego <span className="text-cyan-400">de verdade</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Entenda de uma vez por todas a criar os<br />
            funis da sua Loja!
          </p>
        </div>
        
        {/* Video Preview */}
        <div className="mb-12">
          <div className="bg-gray-800 rounded-lg p-4 max-w-md mx-auto mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Play className="h-6 w-6 text-cyan-400" />
                <span className="text-sm">Clique e veja como será!</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mb-16">
          <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-black px-12 py-6 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            QUERO PARTICIPAR
          </Button>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="bg-cyan-400/20 p-4 rounded-full mb-4">
              <Award className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Metodologia Testada</h3>
            <p className="text-gray-400 text-sm text-center">de Aquisição</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="bg-cyan-400/20 p-4 rounded-full mb-4">
              <Users className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Time Unificado</h3>
            <p className="text-gray-400 text-sm text-center">Dedicado</p>
          </div>
        </div>
        
        {/* Bottom Section */}
        
      </div>
    </section>;
}