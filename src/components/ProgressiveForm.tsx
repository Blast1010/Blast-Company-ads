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
export function ProgressiveForm({
  onComplete
}: ProgressiveFormProps = {}) {
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
  const steps = [{
    id: "company",
    title: "Qual o nome da empresa?",
    subtitle: "Vamos começar com o básico",
    placeholder: "Digite o nome da sua empresa",
    icon: <Building className="h-6 w-6" />,
    field: "company" as keyof FormData
  }, {
    id: "problems",
    title: "Qual o principal problema da empresa?",
    subtitle: "Conte-nos sobre seus desafios atuais",
    placeholder: "Ex: Baixas vendas, poucos leads, conversão baixa...",
    icon: <Target className="h-6 w-6" />,
    field: "problems" as keyof FormData
  }, {
    id: "website",
    title: "Qual o site da empresa?",
    subtitle: "Queremos conhecer melhor seu negócio",
    placeholder: "https://www.exemplo.com.br",
    icon: <Globe className="h-6 w-6" />,
    field: "website" as keyof FormData
  }, {
    id: "platforms",
    title: "Em quais plataformas já investiu?",
    subtitle: "Nos ajude a entender sua experiência",
    placeholder: "Selecione uma opção",
    type: "select",
    options: ["Google Ads", "Facebook/Instagram Ads", "Google + Facebook Ads", "Nunca investi em tráfego pago", "Outros"],
    icon: <TrendingUp className="h-6 w-6" />,
    field: "platforms" as keyof FormData
  }, {
    id: "budget",
    title: "Qual orçamento mensal para tráfego?",
    subtitle: "Isso nos ajuda a criar a estratégia ideal",
    placeholder: "Selecione uma faixa",
    type: "select",
    options: ["R$ 1.000 - R$ 3.000", "R$ 3.000 - R$ 5.000", "R$ 5.000 - R$ 10.000", "R$ 10.000 - R$ 20.000", "Acima de R$ 20.000"],
    icon: <DollarSign className="h-6 w-6" />,
    field: "budget" as keyof FormData
  }, {
    id: "revenue",
    title: "Qual o faturamento mensal atual?",
    subtitle: "Informação confidencial - apenas para nossa análise",
    placeholder: "Selecione uma faixa",
    type: "select",
    options: ["Até R$ 10.000", "R$ 10.000 - R$ 50.000", "R$ 50.000 - R$ 100.000", "R$ 100.000 - R$ 500.000", "Acima de R$ 500.000"],
    icon: <CreditCard className="h-6 w-6" />,
    field: "revenue" as keyof FormData
  }, {
    id: "name",
    title: "Qual seu nome?",
    subtitle: "Como podemos te chamar?",
    placeholder: "Seu nome completo",
    icon: <User className="h-6 w-6" />,
    field: "name" as keyof FormData
  }, {
    id: "email",
    title: "Qual seu melhor email?",
    subtitle: "Enviaremos sua proposta personalizada aqui",
    placeholder: "seu@email.com",
    type: "email",
    icon: <Mail className="h-6 w-6" />,
    field: "email" as keyof FormData
  }, {
    id: "phone",
    title: "Qual seu WhatsApp?",
    subtitle: "Para agilizar o contato",
    placeholder: "(11) 99999-9999",
    type: "tel",
    icon: <Phone className="h-6 w-6" />,
    field: "phone" as keyof FormData
  }];
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
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isCurrentStepValid()) {
      handleNext();
    }
  };
  return <div className="w-full max-w-2xl mx-auto animate-materialize">
      <Card className="bg-black border border-border/20 shadow-2xl overflow-hidden relative">
        {/* Typeform-style progress bar */}
        <div className="h-1 bg-gray-800">
          <div className="h-full bg-primary transition-all duration-500 ease-out" style={{
          width: `${(currentStep + 1) / steps.length * 100}%`
        }} />
        </div>

        
      </Card>
    </div>;
}