import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FormData {
  companyName: string;
  problems: string;
  website: string;
  platforms: string;
  investment: string;
  revenue: string;
  name: string;
  email: string;
  whatsapp: string;
}

const questions = [
  {
    id: "companyName",
    title: "Qual nome da empresa?",
    type: "input",
    placeholder: "Digite o nome da sua empresa"
  },
  {
    id: "problems",
    title: "Quais problemas você precisa resolver?",
    type: "textarea",
    placeholder: "Descreva os principais desafios da sua empresa"
  },
  {
    id: "website",
    title: "Qual o site da empresa?",
    type: "input",
    placeholder: "https://www.suaempresa.com.br"
  },
  {
    id: "platforms",
    title: "Em quais plataformas você pretende investir?",
    type: "radio",
    options: [
      "Google Ads (Recomendado)",
      "Facebook Ads",
      "Ambos"
    ]
  },
  {
    id: "investment",
    title: "Quanto você investe ou pretende investir no tráfego pago?",
    subtitle: "(Custo da campanha + agência)",
    type: "radio",
    options: [
      "A partir de R$ 1.000",
      "A partir de R$ 2.000", 
      "A partir de R$ 3.000",
      "A partir de R$ 4.000 a 5.000",
      "Outro valor"
    ]
  },
  {
    id: "revenue",
    title: "Qual seu faturamento mensal?",
    type: "input",
    placeholder: "Ex: R$ 50.000"
  },
  {
    id: "name",
    title: "Qual seu nome?",
    type: "input",
    placeholder: "Seu nome completo"
  },
  {
    id: "email",
    title: "Qual seu email?",
    type: "input",
    placeholder: "seu@email.com"
  },
  {
    id: "whatsapp",
    title: "Qual seu WhatsApp?",
    type: "input",
    placeholder: "(11) 99999-9999"
  }
];

export function ProgressiveFormTypeform() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    problems: "",
    website: "",
    platforms: "",
    investment: "",
    revenue: "",
    name: "",
    email: "",
    whatsapp: ""
  });

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      console.log("Form submitted:", formData);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const isStepValid = () => {
    const currentValue = formData[currentQuestion.id as keyof FormData];
    return currentValue && currentValue.trim() !== "";
  };

  return (
    <div className="bg-card rounded-xl p-8 max-w-2xl mx-auto border border-border shadow-lg">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Pergunta {currentStep + 1} de {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{currentQuestion.title}</h3>
        {currentQuestion.subtitle && (
          <p className="text-muted-foreground mb-4">{currentQuestion.subtitle}</p>
        )}

        {currentQuestion.type === "input" && (
          <Input
            placeholder={currentQuestion.placeholder}
            value={formData[currentQuestion.id as keyof FormData]}
            onChange={(e) => handleInputChange(e.target.value)}
            className="text-lg p-4 h-14"
          />
        )}

        {currentQuestion.type === "textarea" && (
          <Textarea
            placeholder={currentQuestion.placeholder}
            value={formData[currentQuestion.id as keyof FormData]}
            onChange={(e) => handleInputChange(e.target.value)}
            className="text-lg p-4 min-h-32 resize-none"
          />
        )}

        {currentQuestion.type === "radio" && (
          <div className="space-y-3">
            {currentQuestion.options?.map((option, index) => (
              <label
                key={index}
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option}
                  checked={formData[currentQuestion.id as keyof FormData] === option}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  formData[currentQuestion.id as keyof FormData] === option 
                    ? "border-primary bg-primary" 
                    : "border-border"
                }`}>
                  {formData[currentQuestion.id as keyof FormData] === option && (
                    <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
                  )}
                </div>
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </Button>

        <Button
          onClick={handleNext}
          disabled={!isStepValid()}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8"
        >
          {currentStep === questions.length - 1 ? "Finalizar" : "Próxima"}
          {currentStep < questions.length - 1 && <ChevronRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}