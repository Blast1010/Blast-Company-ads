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
  
  const { toast } = useToast();
  
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
      title: "Qual o principal problema da empresa?",
      placeholder: "Ex: Baixas vendas, poucos leads, conversão baixa...",
      icon: <Target className="h-6 w-6" />,
      field: "problems" as keyof FormData
    },
    {
      id: "website",
      title: "Qual o site da empresa?",
      placeholder: "https://www.exemplo.com.br",
      icon: <Globe className="h-6 w-6" />,
      field: "website" as keyof FormData
    },
    {
      id: "platforms",
      title: "Em quais plataformas já investiu?",
      placeholder: "Selecione uma opção",
      type: "select",
      options: [
        "Google Ads",
        "Facebook/Instagram Ads",
        "Google + Facebook Ads",
        "Nunca investi em tráfego pago",
        "Outros"
      ],
      icon: <TrendingUp className="h-6 w-6" />,
      field: "platforms" as keyof FormData
    },
    {
      id: "budget",
      title: "Qual orçamento mensal para tráfego?",
      placeholder: "Selecione uma faixa",
      type: "select",
      options: [
        "R$ 1.000 - R$ 3.000",
        "R$ 3.000 - R$ 5.000",
        "R$ 5.000 - R$ 10.000",
        "R$ 10.000 - R$ 20.000",
        "Acima de R$ 20.000"
      ],
      icon: <DollarSign className="h-6 w-6" />,
      field: "budget" as keyof FormData
    },
    {
      id: "revenue",
      title: "Qual o faturamento mensal atual?",
      placeholder: "Selecione uma faixa",
      type: "select",
      options: [
        "Até R$ 10.000",
        "R$ 10.000 - R$ 50.000",
        "R$ 50.000 - R$ 100.000",
        "R$ 100.000 - R$ 500.000",
        "Acima de R$ 500.000"
      ],
      icon: <CreditCard className="h-6 w-6" />,
      field: "revenue" as keyof FormData
    },
    {
      id: "name",
      title: "Qual seu nome?",
      placeholder: "Seu nome completo",
      icon: <User className="h-6 w-6" />,
      field: "name" as keyof FormData
    },
    {
      id: "email",
      title: "Qual seu melhor email?",
      placeholder: "seu@email.com",
      type: "email",
      icon: <Mail className="h-6 w-6" />,
      field: "email" as keyof FormData
    },
    {
      id: "phone",
      title: "Qual seu WhatsApp?",
      placeholder: "(11) 99999-9999",
      type: "tel",
      icon: <Phone className="h-6 w-6" />,
      field: "phone" as keyof FormData
    }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
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

  const isCurrentStepValid = () => {
    const currentField = steps[currentStep].field;
    return formData[currentField].trim().length > 0;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-card/80 backdrop-blur border-primary/20 shadow-lg">
        {/* Simple progress bar */}
        <div className="h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="p-8">
          {/* Step counter */}
          <div className="text-center mb-6">
            <span className="text-sm text-muted-foreground">
              Etapa {currentStep + 1} de {steps.length}
            </span>
          </div>

          {/* Form content */}
          <div className="min-h-[200px] flex flex-col justify-center">
            <div className="space-y-6">
              {/* Icon and title */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-primary">
                    {steps[currentStep].icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {steps[currentStep].title}
                </h3>
              </div>

              {/* Input field */}
              <div className="space-y-2">
                {steps[currentStep].type === "select" ? (
                  <select
                    value={formData[steps[currentStep].field]}
                    onChange={(e) => handleInputChange(steps[currentStep].field, e.target.value)}
                    className="w-full p-4 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  >
                    <option value="">{steps[currentStep].placeholder}</option>
                    {steps[currentStep].options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Input
                    type={steps[currentStep].type || "text"}
                    placeholder={steps[currentStep].placeholder}
                    value={formData[steps[currentStep].field]}
                    onChange={(e) => handleInputChange(steps[currentStep].field, e.target.value)}
                    className="w-full p-4 text-lg bg-input border-border focus:ring-primary/50 focus:border-primary"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Anterior</span>
            </Button>

            <Button
              type="button"
              onClick={handleNext}
              disabled={!isCurrentStepValid()}
              className="flex items-center space-x-2"
            >
              <span>
                {currentStep === steps.length - 1 ? "Enviar" : "Próximo"}
              </span>
              {currentStep === steps.length - 1 ? (
                <Check className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}