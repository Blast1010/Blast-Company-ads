import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, ChevronRight, ChevronLeft, Check, Building, Target, DollarSign, Calendar, Phone, Sparkles, Zap, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  objective: string;
  timeline: string;
  phone: string;
}

interface ProgressiveFormProps {
  onComplete?: () => void;
}

export function ProgressiveForm({ onComplete }: ProgressiveFormProps = {}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    objective: "",
    timeline: "",
    phone: ""
  });
  const { toast } = useToast();
  
  const steps = [{
    id: "name",
    title: "Vamos começar! Como você se chama?",
    placeholder: "Digite seu nome",
    icon: <Sparkles className="h-6 w-6" />,
    field: "name" as keyof FormData,
    gradient: "from-purple-500 to-pink-500"
  }, {
    id: "email",
    title: "Qual é o seu e-mail?",
    placeholder: "seu@email.com",
    icon: <Mail className="h-6 w-6" />,
    field: "email" as keyof FormData,
    type: "email",
    gradient: "from-blue-500 to-cyan-500"
  }, {
    id: "company",
    title: "Qual é o nome da sua empresa?",
    placeholder: "Nome da empresa",
    icon: <Building className="h-6 w-6" />,
    field: "company" as keyof FormData,
    gradient: "from-green-500 to-emerald-500"
  }, {
    id: "objective",
    title: "Qual é o seu principal objetivo?",
    placeholder: "Ex: Aumentar vendas, gerar leads, melhorar conversões...",
    icon: <Target className="h-6 w-6" />,
    field: "objective" as keyof FormData,
    gradient: "from-orange-500 to-red-500"
  }, {
    id: "budget",
    title: "Qual é o seu orçamento mensal para marketing digital?",
    placeholder: "Ex: R$ 5.000 - R$ 10.000",
    icon: <DollarSign className="h-6 w-6" />,
    field: "budget" as keyof FormData,
    gradient: "from-yellow-500 to-orange-500"
  }, {
    id: "timeline",
    title: "Em quanto tempo espera ver os primeiros resultados?",
    placeholder: "Ex: 30 dias, 3 meses...",
    icon: <Calendar className="h-6 w-6" />,
    field: "timeline" as keyof FormData,
    gradient: "from-indigo-500 to-purple-500"
  }, {
    id: "phone",
    title: "Por último, qual é o seu telefone?",
    placeholder: "(11) 99999-9999",
    icon: <Phone className="h-6 w-6" />,
    field: "phone" as keyof FormData,
    type: "tel",
    gradient: "from-pink-500 to-rose-500"
  }];

  const handleInputChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      [steps[currentStep].field]: value
    }));
  };

  const handleNext = () => {
    const currentValue = formData[steps[currentStep].field];
    if (!currentValue.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, preencha este campo para continuar.",
        variant: "destructive"
      });
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Entraremos em contato em breve para elaborar sua proposta personalizada."
    });
    setCurrentStep(0);
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      objective: "",
      timeline: "",
      phone: ""
    });
    onComplete?.();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  const currentStepData = steps[currentStep];
  const progress = (currentStep + 1) / steps.length * 100;

  return (
    <div className="relative">
      {/* Elementos flutuantes surreais ao redor do formulário */}
      <div className="absolute -inset-20 pointer-events-none">
        {/* Orbes flutuantes coloridos */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-float opacity-70"></div>
        <div className="absolute top-10 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full blur-xl animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-10 right-1/4 w-28 h-28 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full blur-xl animate-float opacity-65" style={{ animationDelay: '1s' }}></div>
        
        {/* Partículas pequenas */}
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Ondas de energia */}
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        </div>
      </div>

      <Card className="w-full max-w-lg relative overflow-hidden bg-transparent backdrop-blur-xl border-0 shadow-none">
        {/* Container principal com glassmorphism */}
        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          {/* Brilho animado nas bordas */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
          </div>
          
          {/* Reflexos holográficos */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent via-blue-500/10 via-transparent to-pink-500/10 opacity-50 animate-pulse"></div>
          
          {/* Progress Bar Surreal */}
          <div className="h-3 bg-black/20 rounded-t-3xl overflow-hidden relative">
            <div 
              className={`h-full bg-gradient-to-r ${currentStepData.gradient} transition-all duration-1000 ease-out relative`}
              style={{ width: `${progress}%` }}
            >
              {/* Brilho na barra de progresso */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
            </div>
            {/* Estrelas flutuantes na barra */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <Star className="h-3 w-3 text-white animate-pulse" style={{ left: `${progress - 5}%`, position: 'absolute' }} />
            </div>
          </div>

          <div className="p-8 relative">
            {/* Ícone principal surreal */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className={`w-20 h-20 bg-gradient-to-br ${currentStepData.gradient} rounded-full flex items-center justify-center text-white shadow-2xl transform hover:scale-110 transition-all duration-500 animate-float`}>
                  {currentStepData.icon}
                  {/* Anel de energia */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                  <div className="absolute -inset-2 rounded-full border border-white/20 animate-pulse"></div>
                </div>
                {/* Partículas ao redor do ícone */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Contador de passos */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-white font-medium text-sm">
                  {currentStep + 1} de {steps.length}
                </span>
              </div>
            </div>

            {/* Título com efeito surreal */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white leading-tight relative">
                {currentStepData.title}
                {/* Sublinhado animado */}
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r ${currentStepData.gradient} rounded-full animate-pulse`}></div>
              </h3>
            </div>

            {/* Input surreal */}
            <div className="space-y-6">
              <div className="relative">
                <Input 
                  type={currentStepData.type || "text"}
                  placeholder={currentStepData.placeholder}
                  value={formData[currentStepData.field]}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="text-base py-4 h-14 bg-black/20 backdrop-blur-sm border-2 border-white/20 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/20 hover:border-white/40 transition-all duration-500 rounded-2xl"
                  autoFocus
                />
                {/* Brilho no input */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Botões de navegação */}
              <div className="flex items-center justify-between pt-4">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="flex items-center space-x-2 text-white/70 hover:text-white disabled:opacity-30 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Voltar</span>
                </Button>

                <Button
                  onClick={handleNext}
                  className={`bg-gradient-to-r ${currentStepData.gradient} hover:shadow-2xl px-8 py-4 rounded-full flex items-center space-x-3 shadow-xl hover:scale-105 transition-all duration-500 text-white font-semibold relative overflow-hidden group`}
                >
                  {/* Efeito de brilho no botão */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  
                  {/* Ícone mágico */}
                  <Zap className="h-5 w-5 animate-pulse relative z-10" />
                  
                  <span className="relative z-10">
                    {currentStep === steps.length - 1 ? "Enviar Mágica" : "Próximo"}
                  </span>
                  
                  <span className="relative z-10">
                    {currentStep === steps.length - 1 ? 
                      <Sparkles className="h-5 w-5 animate-spin" /> : 
                      <ChevronRight className="h-5 w-5" />
                    }
                  </span>
                </Button>
              </div>
            </div>

            {/* Texto de ajuda surreal */}
            <div className="mt-8 text-center">
              <p className="text-xs text-white/60 flex items-center justify-center space-x-2">
                <Sparkles className="h-3 w-3" />
                <span>Pressione</span>
                <kbd className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xs text-white font-mono">Enter</kbd>
                <span>para continuar</span>
                <Sparkles className="h-3 w-3" />
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}