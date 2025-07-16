import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, ChevronRight, ChevronLeft, Check, Building, Target, DollarSign, Calendar, Phone } from "lucide-react";
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
export function ProgressiveForm() {
  const [isOpen, setIsOpen] = useState(false);
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
  const {
    toast
  } = useToast();
  const steps = [{
    id: "name",
    title: "Vamos começar! Como você se chama?",
    placeholder: "Digite seu nome",
    icon: <Mail className="h-6 w-6" />,
    field: "name" as keyof FormData
  }, {
    id: "email",
    title: "Qual é o seu e-mail?",
    placeholder: "seu@email.com",
    icon: <Mail className="h-6 w-6" />,
    field: "email" as keyof FormData,
    type: "email"
  }, {
    id: "company",
    title: "Qual é o nome da sua empresa?",
    placeholder: "Nome da empresa",
    icon: <Building className="h-6 w-6" />,
    field: "company" as keyof FormData
  }, {
    id: "objective",
    title: "Qual é o seu principal objetivo?",
    placeholder: "Ex: Aumentar vendas, gerar leads, melhorar conversões...",
    icon: <Target className="h-6 w-6" />,
    field: "objective" as keyof FormData
  }, {
    id: "budget",
    title: "Qual é o seu orçamento mensal para marketing digital?",
    placeholder: "Ex: R$ 5.000 - R$ 10.000",
    icon: <DollarSign className="h-6 w-6" />,
    field: "budget" as keyof FormData
  }, {
    id: "timeline",
    title: "Em quanto tempo espera ver os primeiros resultados?",
    placeholder: "Ex: 30 dias, 3 meses...",
    icon: <Calendar className="h-6 w-6" />,
    field: "timeline" as keyof FormData
  }, {
    id: "phone",
    title: "Por último, qual é o seu telefone?",
    placeholder: "(11) 99999-9999",
    icon: <Phone className="h-6 w-6" />,
    field: "phone" as keyof FormData,
    type: "tel"
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
    setIsOpen(false);
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
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };
  if (!isOpen) {
    return <Button variant="default" size="lg" onClick={() => setIsOpen(true)} className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full shadow-glow hover:shadow-glow/60 transition-all duration-300 hover:scale-105 group text-slate-950">
        <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
        Solicite um Orçamento
      </Button>;
  }
  const currentStepData = steps[currentStep];
  const progress = (currentStep + 1) / steps.length * 100;
  return <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-card/95 backdrop-blur-sm border border-border/50 shadow-2xl">
        {/* Progress Bar */}
        <div className="h-2 bg-muted/30 rounded-t-lg overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500 ease-out" style={{
          width: `${progress}%`
        }} />
        </div>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm text-muted-foreground">
              {currentStep + 1} de {steps.length}
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
              ✕
            </Button>
          </div>

          {/* Question */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                {currentStepData.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {currentStepData.title}
                </h2>
              </div>
            </div>

            {/* Input */}
            <div className="space-y-6">
              <Input type={currentStepData.type || "text"} placeholder={currentStepData.placeholder} value={formData[currentStepData.field]} onChange={e => handleInputChange(e.target.value)} onKeyPress={handleKeyPress} className="text-lg py-4 h-14 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20" autoFocus />

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4">
                <Button variant="ghost" onClick={handlePrevious} disabled={currentStep === 0} className="flex items-center space-x-2 text-muted-foreground hover:text-foreground disabled:opacity-50">
                  <ChevronLeft className="h-4 w-4" />
                  <span>Voltar</span>
                </Button>

                <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full flex items-center space-x-2 shadow-glow hover:shadow-glow/60 transition-all duration-300">
                  <span>
                    {currentStep === steps.length - 1 ? "Enviar" : "Próximo"}
                  </span>
                  {currentStep === steps.length - 1 ? <Check className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Helper Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Pressione <kbd className="px-2 py-1 bg-muted/30 rounded text-xs">Enter</kbd> para continuar
            </p>
          </div>
        </div>
      </Card>
    </div>;
}