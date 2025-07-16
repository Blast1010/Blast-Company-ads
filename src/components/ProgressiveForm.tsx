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
  return <Card className="w-full max-w-md bg-gradient-to-br from-card/95 via-card/90 to-card/95 backdrop-blur-sm border-0 shadow-glow hover:shadow-glow/80 transition-all duration-500 relative overflow-hidden group">
      {/* Premium glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-[spin_8s_linear_infinite]"></div>
      </div>
      {/* Progress Bar */}
      <div className="h-2 bg-muted/30 rounded-t-lg overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500 ease-out" style={{
        width: `${progress}%`
      }} />
      </div>

      <div className="p-6 relative z-10">
        {/* Premium badge */}
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-glow animate-pulse">
          <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
        </div>
        
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <div className="text-sm text-muted-foreground font-medium bg-muted/20 px-3 py-1 rounded-full border border-border/30">
            {currentStep + 1} de {steps.length}
          </div>
        </div>

        {/* Question */}
        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300">
              {currentStepData.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                {currentStepData.title}
              </h3>
            </div>
          </div>

          {/* Input */}
          <div className="space-y-4">
            {currentStepData.type === "select" ? (
              <div className="space-y-3">
                {currentStepData.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleInputChange(option)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                      formData[currentStepData.field] === option
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border/30 bg-background/50 hover:border-primary/50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <Input
                type={currentStepData.type || "text"}
                placeholder={currentStepData.placeholder}
                value={formData[currentStepData.field]}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-base py-3 h-12 bg-background/50 border-2 border-border/30 focus:border-primary focus:ring-primary/20 hover:border-primary/50 transition-all duration-300"
                autoFocus
              />
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2">
              <Button variant="ghost" onClick={handlePrevious} disabled={currentStep === 0} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground disabled:opacity-50">
                <ChevronLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Button>

              <Button onClick={handleNext} className="bg-gradient-primary hover:shadow-glow px-8 py-3 rounded-full flex items-center space-x-2 shadow-glow hover:scale-105 transition-all duration-300 text-primary-foreground font-semibold relative overflow-hidden group">
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">
                  {currentStep === steps.length - 1 ? "Enviar" : "Próximo"}
                </span>
                <span className="relative z-10">
                  {currentStep === steps.length - 1 ? <Check className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Helper Text */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center space-x-2">
            <span>Pressione</span>
            <kbd className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs text-primary font-mono">Enter</kbd>
            <span>para continuar</span>
          </p>
        </div>
      </div>
    </Card>;
}