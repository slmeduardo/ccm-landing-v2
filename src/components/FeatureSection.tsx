import { cn } from "@/lib/utils";
import {
  BarChart,
  Brain,
  Calendar,
  Clock,
  MessageSquare,
  Settings,
} from "lucide-react";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
}) => (
  <div
    className={cn(
      "glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg",
      className
    )}
    style={{ animationDelay: `${delay * 100}ms` }}
  >
    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      title: "Agendamento Automatizado",
      description:
        "Permite que os clientes agendem consultas diretamente pelo WhatsApp sem a necessidade de intervenção humana.",
      icon: Calendar,
    },
    {
      title: "Conversas Inteligentes",
      description:
        "Chat com IA que se comporta de forma natural e compreende as solicitações do cliente de forma inteligente.",
      icon: MessageSquare,
    },
    {
      title: "Recomendações Inteligentes",
      description:
        "Sugestões de horários ideais com base na disponibilidade do negócio e preferências do cliente.",
      icon: Brain,
    },
    {
      title: "Lembretes Automáticos",
      description:
        "Envia lembretes de consultas pontuais para reduzir ausências e melhorar a presença.",
      icon: Clock,
    },
    {
      title: "Análise de Negócios",
      description:
        "Obtenha insights sobre padrões de agendamento, serviços populares e comportamento do cliente.",
      icon: BarChart,
    },
    {
      title: "Integração Simples",
      description:
        "Conecta-se de forma suave com seus sistemas de calendário e gerenciamento de negócios existentes.",
      icon: Settings,
    },
  ];

  return (
    <section id="features" className="section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
          Recursos
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Agendamento Automatizado
        </h2>
        <p className="text-lg text-muted-foreground">
          Tudo o que você precisa para automatizar agendamentos e fornecer uma
          experiência de cliente sem falhas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            className="animate-slide-in-bottom"
            delay={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
