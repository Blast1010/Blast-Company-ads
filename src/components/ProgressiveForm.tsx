import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, ChevronRight, ChevronLeft, Check, Building, Target, DollarSign, Globe, TrendingUp, CreditCard, User, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
interface FormData {
  company: string;
  problems: string;
  website: string;
  platforms: string;
  budget: string;
  revenue: string;
  name: string;
  email: string;
  phone: string;
}

interface ProgressiveFormProps {
  onComplete?: () => void;
}

export function ProgressiveForm({ onComplete }: ProgressiveFormProps = {}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [formData, setFormData] = useState<FormData>({
    company: "",
    problems: "",
    website: "",
    platforms: "",
    budget: "",
    revenue: "",
    name: "",
    email: "",
    phone: ""
  });
  const {
    toast
  } = useToast();
  const steps = [
    {
      id: "company",
      title: "Qual o nome da empresa?",
      placeholder: "Digite o nome da sua empresa",
      icon: <Building className="h-6 w-6" />,
      field: "company" as keyof FormData
    },
    {
      id: "problems",
      title: "Quais problemas você precisa resolver?",
      placeholder: "Ex: Baixas vendas, pouco tráfego, conversões ruins...",
      icon: <Target className="h-6 w-6" />,
      field: "problems" as keyof FormData
    },
    {
      id: "website",
      title: "Qual o site da empresa?",
      placeholder: "https://www.suaempresa.com.br",
      icon: <Globe className="h-6 w-6" />,
      field: "website" as keyof FormData,
      type: "url"
    },
    {
      id: "platforms",
      title: "Em quais plataformas você pretende investir?",
      placeholder: "Selecione uma opção",
      icon: <TrendingUp className="h-6 w-6" />,
      field: "platforms" as keyof FormData,
      type: "select",
      options: [
        "Google Ads (Recomendado)",
        "Facebook Ads",
        "Ambos"
      ]
    },
    {
      id: "budget",
      title: "Quanto você investe ou pretende investir no tráfego pago? (Custo da campanha + agência)",
      placeholder: "Selecione uma opção",
      icon: <DollarSign className="h-6 w-6" />,
      field: "budget" as keyof FormData,
      type: "select",
      options: [
        "A partir de R$ 1.000",
        "A partir de R$ 2.000",
        "A partir de R$ 3.000",
        "A partir de R$ 4.000 a R$ 5.000",
        "Outro valor"
      ]
    },
    {
      id: "revenue",
      title: "Qual seu faturamento mensal?",
      placeholder: "Ex: R$ 50.000, R$ 100.000...",
      icon: <CreditCard className="h-6 w-6" />,
      field: "revenue" as keyof FormData
    },
    {
      id: "name",
      title: "Qual seu nome?",
      placeholder: "Digite seu nome completo",
      icon: <User className="h-6 w-6" />,
      field: "name" as keyof FormData
    },
    {
      id: "email",
      title: "Qual seu email?",
      placeholder: "seu@email.com",
      icon: <Mail className="h-6 w-6" />,
      field: "email" as keyof FormData,
      type: "email"
    },
    {
      id: "phone",
      title: "Qual seu whatsapp?",
      placeholder: "(11) 99999-9999",
      icon: <Phone className="h-6 w-6" />,
      field: "phone" as keyof FormData,
      type: "tel"
    }
  ];
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
      setIsTransitioning(true);
      setSlideDirection('right');
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsTransitioning(false);
      }, 250);
    } else {
      handleSubmit();
    }
  };
  const handlePrevious = () => {
    if (currentStep > 0) {
      setIsTransitioning(true);
      setSlideDirection('left');
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsTransitioning(false);
      }, 250);
    }
  };
  const handleSubmit = () => {
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Entraremos em contato em breve para elaborar sua proposta personalizada."
    });
    setCurrentStep(0);
    setFormData({
      company: "",
      problems: "",
      website: "",
      platforms: "",
      budget: "",
      revenue: "",
      name: "",
      email: "",
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
  return <Card className="w-full max-w-md bg-gradient-to-br from-card/95 via-card/90 to-card/95 backdrop-blur-sm border-0 shadow-glow hover:shadow-glow/80 transition-all duration-500 relative overflow-hidden group animate-cinematic-fade">
      {/* Cinematic light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-[float_4s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[scaleX_3s_ease-in-out_infinite]"></div>
      </div>

      {/* Morphing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg opacity-50 animate-morphing"></div>
      
      {/* Premium glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Cinematic Progress Bar */}
      <div className="h-3 bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20 rounded-t-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[scaleX_2s_ease-in-out_infinite]"></div>
        <div 
          className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary transition-all duration-700 ease-out relative overflow-hidden" 
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[scaleX_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <div className="p-6 relative z-10">
        {/* Floating particles */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
        <div className="absolute top-8 left-8 w-1 h-1 bg-primary/40 rounded-full animate-[pulse_2s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-primary/50 rounded-full animate-[pulse_3s_ease-in-out_infinite_1s]"></div>
        
        {/* Header with cinematic counter */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative text-sm text-muted-foreground font-medium bg-gradient-to-r from-muted/20 via-muted/30 to-muted/20 px-4 py-2 rounded-full border border-border/30 shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-full animate-breathe"></div>
            <span className="relative z-10 font-mono">
              {(currentStep + 1).toString().padStart(2, '0')} / {steps.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Question with sliding animation */}
        <div className={`space-y-6 transition-all duration-800 ${
          isTransitioning 
            ? slideDirection === 'right' 
              ? 'animate-slideOutLeft' 
              : 'animate-slideOutRight'
            : slideDirection === 'right' 
              ? 'animate-slideInRight' 
              : 'animate-slideInLeft'
        }`}>
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground flex-shrink-0 shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-glow-pulse">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {currentStepData.icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-500 relative">
                <span className="relative z-10">{currentStepData.title}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"></div>
              </h3>
            </div>
          </div>

          {/* Input with enhanced styling */}
          <div className="space-y-5">
            {currentStepData.type === "select" ? (
              <div className="space-y-3">
                {currentStepData.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleInputChange(option)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-500 relative group/option overflow-hidden ${
                      formData[currentStepData.field] === option
                        ? "border-primary bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 text-primary shadow-glow animate-glow-pulse"
                        : "border-border/30 bg-gradient-to-r from-background/50 via-background/70 to-background/50 hover:border-primary/60 hover:shadow-glow/50"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover/option:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 font-medium">{option}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="relative">
                <Input
                  type={currentStepData.type || "text"}
                  placeholder={currentStepData.placeholder}
                  value={formData[currentStepData.field]}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="text-base py-4 h-14 bg-gradient-to-r from-background/50 via-background/70 to-background/50 border-2 border-border/30 focus:border-primary focus:ring-primary/20 hover:border-primary/50 transition-all duration-500 rounded-xl shadow-subtle hover:shadow-glow/30 pl-4"
                  autoFocus
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
              </div>
            )}

            {/* Enhanced Navigation */}
            <div className="flex items-center justify-between pt-4">
              <Button 
                variant="ghost" 
                onClick={handlePrevious} 
                disabled={currentStep === 0} 
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground disabled:opacity-50 px-6 py-3 rounded-xl hover:bg-muted/20 transition-all duration-300 group/btn"
              >
                <ChevronLeft className="h-4 w-4 group-hover/btn:-translate-x-1 transition-transform duration-300" />
                <span>Voltar</span>
              </Button>

              <Button 
                onClick={handleNext} 
                className="bg-gradient-primary hover:shadow-glow px-8 py-4 rounded-2xl flex items-center space-x-3 shadow-glow hover:scale-105 transition-all duration-500 text-primary-foreground font-semibold relative overflow-hidden group/next"
              >
                {/* Enhanced button effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 opacity-0 group-hover/next:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/next:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10 text-lg">
                  {currentStep === steps.length - 1 ? "Enviar" : "Próximo"}
                </span>
                <span className="relative z-10 group-hover/next:translate-x-1 transition-transform duration-300">
                  {currentStep === steps.length - 1 ? 
                    <Check className="h-5 w-5" /> : 
                    <ChevronRight className="h-5 w-5" />
                  }
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Helper Text */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center space-x-2 group/helper">
            <span className="opacity-70 group-hover/helper:opacity-100 transition-opacity duration-300">Pressione</span>
            <kbd className="px-3 py-1.5 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 border border-primary/30 rounded-lg text-xs text-primary font-mono shadow-glow/30 animate-pulse">
              Enter
            </kbd>
            <span className="opacity-70 group-hover/helper:opacity-100 transition-opacity duration-300">para continuar</span>
          </p>
        </div>
      </div>
    </Card>;
}