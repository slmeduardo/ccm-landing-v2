import BenefitsSection from "@/components/BenefitsSection";
import Layout from "@/components/Layout";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart,
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Globe,
  MessageSquare,
  Settings,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
}) => (
  <div
    className={cn(
      "glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg",
      className
    )}
  >
    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
}) => (
  <div className="glass-card rounded-xl p-8">
    <div className="mb-6">
      <svg width="45" height="36" className="text-primary/60 mb-4">
        <path
          d="M13.415.43c-2.523 0-4.75 1.76-5.675 4.25C6.84 6.416 6.173 8.103 5.77 9.965c-.196.892-.18 1.783.136 2.678.315.895.782 1.61 1.555 2.41 1.183 1.217 2.58 1.825 4.188 1.825 1.61 0 3.177-.608 4.533-1.795 1.356-1.187 2.06-2.582 2.06-4.118 0-1.536-.704-2.931-2.06-4.118-1.367-1.187-2.933-1.786-4.533-1.786-.167 0-.346.015-.527.044 2.06-1.447 4.44-2.163 7.128-2.163 1.157 0 2.207.124 3.15.35-.29-.933-.724-1.732-1.357-2.41-.633-.677-1.515-1.007-2.648-1.007-.138 0-.257.015-.384.029-.126.015-.264.029-.43.029-.165 0-.304-.014-.43-.029-.126-.014-.246-.029-.384-.029-1.133 0-2.015.33-2.648 1.007-.632.678-1.067 1.477-1.356 2.41.943-.226 1.993-.35 3.15-.35 1.289 0 2.495.166 3.616.497-1.104-.498-2.319-.746-3.644-.746-1.367 0-2.639.228-3.823.685zm27.784 0c-2.523 0-4.752 1.76-5.677 4.25-.9 1.737-1.568 3.424-1.97 5.286-.196.892-.18 1.783.136 2.678.315.895.78 1.61 1.555 2.41 1.181 1.217 2.58 1.825 4.188 1.825 1.61 0 3.176-.608 4.531-1.795 1.356-1.187 2.062-2.582 2.062-4.118 0-1.536-.706-2.931-2.062-4.118-1.367-1.187-2.932-1.786-4.531-1.786-.168 0-.347.015-.527.044 2.06-1.447 4.44-2.163 7.127-2.163 1.157 0 2.207.124 3.151.35-.292-.933-.723-1.732-1.357-2.41-.633-.677-1.515-1.007-2.648-1.007-.137 0-.259.015-.385.029-.125.015-.264.029-.428.029-.166 0-.305-.014-.43-.029-.126-.014-.246-.029-.385-.029-1.133 0-2.015.33-2.648 1.007-.633.678-1.067 1.477-1.356 2.41.942-.226 1.992-.35 3.15-.35 1.29 0 2.496.166 3.616.497-1.103-.498-2.318-.746-3.644-.746-1.368 0-2.64.228-3.825.685z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </svg>
      <blockquote className="text-lg italic mb-4">{quote}</blockquote>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
          <span className="font-medium">{author.charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ProductPage = () => {
  const features = [
    {
      title: "Agendamento inteligente",
      description:
        "Assistente IA que compreende solicitações de linguagem natural e gerencia seu calendário de forma inteligente.",
      icon: Brain,
    },
    {
      title: "Integração com WhatsApp",
      description:
        "Conecta-se de forma suave com WhatsApp Business para gerenciar agendamentos onde seus clientes estão.",
      icon: MessageSquare,
    },
    {
      title: "Sincronização com calendário",
      description:
        "Sincroniza automaticamente com seus sistemas de calendário existentes para evitar agendamentos duplicados.",
      icon: Calendar,
    },
    {
      title: "Lembretes automáticos",
      description:
        "Envia notificações pontuais para reduzir ausências e melhorar a presença.",
      icon: Clock,
    },
    {
      title: "Análise de negócios",
      description:
        "Painel de análise completo fornecendo dados valiosos sobre padrões de agendamento e comportamento do cliente.",
      icon: BarChart,
    },
    {
      title: "Configuração personalizada",
      description:
        "Personalize regras de agendamento, durações de serviço, tempos de buffer e horários de funcionamento.",
      icon: Settings,
    },
    {
      title: "Gerenciamento de equipe",
      description:
        "Gerencia vários membros da equipe, seus horários e especialidades em um único lugar.",
      icon: Users,
    },
    {
      title: "Segurança de dados",
      description:
        "Segurança de nível empresarial garantindo que todos os dados e conversas do cliente permaneçam privados e protegidos.",
      icon: Shield,
    },
    {
      title: "Desempenho",
      description:
        "Respostas rápidas com garantia de 99,9% de uptime para serviço contínuo.",
      icon: Zap,
    },
  ];

  const useCases = [
    {
      title: "Barbearias",
      description:
        "Agende cortes de cabelo, reduza tempos de espera e melhore a satisfação do cliente.",
      icon: Users,
    },
    {
      title: "Clínicas Médicas",
      description:
        "Gerencie agendamentos de pacientes de forma eficiente enquanto mantém a privacidade e envia lembretes importantes.",
      icon: CheckCircle,
    },
    {
      title: "Salões de beleza",
      description:
        "Gerencie diferentes tipos de serviços, durações e atribuições de equipe especializadas automaticamente.",
      icon: Smartphone,
    },
    {
      title: "Serviços profissionais",
      description:
        "Perfeito para consultores, advogados e outros profissionais que trabalham por agendamento.",
      icon: Globe,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description:
        "Ideal para pequenas empresas que estão começando com agendamento automatizado.",
      features: [
        "Até 100 agendamentos/mês",
        "Integração com WhatsApp Business",
        "Lembretes automatizados",
        "Sincronização com Google Calendar",
        "Relatórios básicos",
        "Suporte por email",
      ],
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description:
        "Para empresas em crescimento que precisam de capacidades de agendamento mais avançadas.",
      features: [
        "Até 500 agendamentos/mês",
        "Todos os recursos Starter",
        "Gerenciamento de várias equipes",
        "Regras de agendamento personalizadas",
        "Análise avançada",
        "Suporte prioritário",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description:
        "Para grandes organizações com necessidades complexas de agendamento e alto volume.",
      features: [
        "Agendamentos ilimitados",
        "Todos os recursos Professional",
        "Integrações personalizadas",
        "Suporte dedicado",
        "Suporte 24/7",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "Since implementing CCM's scheduling assistant, we've reduced our front desk workload by 70% and significantly improved customer satisfaction. The WhatsApp integration is seamless and our clients love how easy it is to book appointments.",
      author: "Michael Rodriguez",
      position: "Owner",
      company: "Elite Cuts Barbershop",
    },
    {
      quote:
        "As a busy dermatology clinic, managing appointments efficiently is crucial. CCM's solution has not only streamlined our scheduling process but also reduced no-shows by 65% thanks to the automated reminders. It's been a game-changer for our practice.",
      author: "Dr. Sarah Chen",
      position: "Medical Director",
      company: "Glow Dermatology Clinic",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-hero-gradient opacity-80 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-glow transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        {/* Content */}
        <div className="container max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4 animate-fade-in">
              Assistente de agendamento de WhatsApp
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
              Simplifique o agendamento de consultas com{" "}
              <span className="text-gradient-blue">IA-Powered</span> Automação
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
              Nossa solução de agendamento completa ajuda empresas a automatizar
              o agendamento de consultas e gerenciar agendamentos através do
              WhatsApp, economizando tempo e melhorando a experiência do
              cliente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <a
                href="#"
                className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
                onClick={(e) => e.preventDefault()}
              >
                Ver demonstração
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#use-cases"
                className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Explorar casos de uso
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Recursos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos de agendamento completo
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo o que você precisa para automatizar seu processo de agendamento
            desde o início até o fim.
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
            />
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="section bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Casos de uso
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perfeito para muitas indústrias
          </h2>
          <p className="text-lg text-muted-foreground">
            Nosso assistente de agendamento se adapta às necessidades únicas de
            diferentes negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-8 animate-slide-in-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <useCase.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div id="demo">
        <WhatsAppDemo />
      </div>

      <BenefitsSection />

      {/* Technical Specs */}
      <section id="tech-specs" className="section bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Especificações técnicas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Construído para desempenho e confiabilidade
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossa plataforma é projetada com tecnologia de nível empresarial
            para ensure smooth operation.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Capacidade de integração
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>WhatsApp Business API</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Dashboard de gerenciamento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Aplicativo personalizado para sua marca</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>API REST para integrações personalizadas</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Segurança e conformidade
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Criptografia de ponta a ponta</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Tratamento de dados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Certificado de aprovação</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Auditorias de segurança regulares</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Desempenho</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Garantia de uptime de 99,9%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Tempo de resposta entre 20 e 40 segundos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Infraestrutura distribuída globalmente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>
                    Escalabilidade automática durante picos de demanda
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Implementação</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Configuração rápida (em menos de 1 hora)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Processo de onboarding guiado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Validamos a configuração da dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Assistência de configuração gratuita</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Histórias de sucesso
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresas em várias indústrias estão transformando seu agendamento
            com nossa solução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section bg-secondary/30">
        <div className="glass-card rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Pronto para transformar seu agendamento?
              </h2>
              <p className="text-muted-foreground mb-6">
                Junte-se a empresas que revolucionaram seu processo de
                agendamento com nosso assistente de agendamento do WhatsApp IA.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-2" />
                  <span>Implementação completa</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-2" />
                  <span>Acesso total a todos os recursos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-2" />
                  <span>Suporte dedicado durante a configuração</span>
                </li>
              </ul>
              <a
                href="#"
                className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Comece sua implementação
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"></div>
              <div className="relative p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Endereço de email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Digite seu email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-1"
                    >
                      Número de contato
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Digite o número de contato"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Mensagem (Opcional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nos conte sobre suas necessidades de agendamento"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium"
                  >
                    Solicite uma demonstração
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
