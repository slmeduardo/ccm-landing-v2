import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  BarChart,
  Briefcase,
  Calendar,
  CheckCircle,
  Code,
  Globe,
  Layers,
  MessageSquare,
  Settings,
  Shield,
  Smartphone,
  Stethoscope,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

interface CaseStudyProps {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  className?: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  industry,
  challenge,
  solution,
  results,
  className,
}) => (
  <div className={cn("glass-card rounded-xl p-8 transition-all", className)}>
    <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-xs font-medium text-primary mb-4">
      {industry}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>

    <div className="mb-4">
      <p className="text-sm font-medium text-muted-foreground mb-1">
        Challenge:
      </p>
      <p>{challenge}</p>
    </div>

    <div className="mb-4">
      <p className="text-sm font-medium text-muted-foreground mb-1">
        Solution:
      </p>
      <p>{solution}</p>
    </div>

    <div>
      <p className="text-sm font-medium text-muted-foreground mb-2">Results:</p>
      <ul className="space-y-2">
        {results.map((result, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle
              size={16}
              className="text-primary mr-2 mt-0.5 flex-shrink-0"
            />
            <span>{result}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const CustomBot = () => {
  const caseStudies = [
    {
      title: "Luxury Salon Chain Streamlines Multi-Location Booking",
      industry: "Beauty",
      challenge:
        "A high-end salon chain with 8 locations struggled with managing appointments across different branches, each with unique services and specialists.",
      solution:
        "We developed a custom WhatsApp bot that recognized location preferences, specialist requests, and service types, then routed appointments accordingly.",
      results: [
        "85% reduction in booking staff workload",
        "23% increase in cross-location appointments",
        "Personalized follow-ups resulted in 34% more repeat bookings",
      ],
    },
    {
      title: "Medical Practice Enhances Patient Communication",
      industry: "Healthcare",
      challenge:
        "A large medical practice needed a HIPAA-compliant way to handle appointment scheduling while providing patients with pre-visit instructions.",
      solution:
        "Created a secure, custom WhatsApp integration that managed appointments and automatically sent prep instructions based on appointment type.",
      results: [
        "Decreased no-shows by 62%",
        "Improved patient preparedness for appointments",
        "Reduced administrative phone time by 70%",
      ],
    },
    {
      title: "Law Firm Optimizes Client Consultations",
      industry: "Legal",
      challenge:
        "A busy law firm needed to qualify potential clients before scheduling consultations with the appropriate attorney based on case type.",
      solution:
        "Developed an AI-powered WhatsApp assistant that asked qualifying questions and routed appointments based on legal specialties.",
      results: [
        "40% increase in consultation conversion rates",
        "Improved attorney-client matching",
        "Saved 15+ hours weekly in initial client screening",
      ],
    },
  ];

  const industries = [
    {
      name: "Assistência médica",
      icon: Stethoscope,
      examples: [
        "Pacientes agendando consultas",
        "Instruções pré-visita",
        "Agendamento de follow-up",
        "Lembretes de medicamentos",
      ],
    },
    {
      name: "Serviços profissionais",
      icon: Briefcase,
      examples: [
        "Consultas de clientes",
        "Envio de documentos",
        "Agendamento de reuniões",
        "Follow-ups de serviços",
      ],
    },
    {
      name: "Hospitais",
      icon: Globe,
      examples: [
        "Reservas de quartos",
        "Agendamento de consultas",
        "Gestão de experiência de hóspedes",
        "Follow-ups de serviços",
      ],
    },
    {
      name: "Varejo",
      icon: Smartphone,
      examples: [
        "Agendamento de consultas",
        "Demonstracões de produtos",
        "VIP client bookings",
        "Follow-ups de serviços",
      ],
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    projectDetails: "",
    marketing: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({
    success: false,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      marketing: e.target.checked,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .send(
        "service_73hrjon",
        "template_8ji0c3s",
        {
          name: formData.name,
          time: new Date().toLocaleString(),
          message: `
            Email: ${formData.email}
            Empresa: ${formData.company}
            Telefone: ${formData.phone}
            Setor: ${formData.industry}
            Detalhes do projeto: ${formData.projectDetails}
            Aceitou marketing: ${formData.marketing ? "Sim" : "Não"}
        `,
        },
        "shas1t9WT9WETAZdN"
      )
      .then((result) => {
        setSubmitting(false);
        setSubmitResult({
          success: true,
          message:
            "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          industry: "",
          projectDetails: "",
          marketing: false,
        });
      })
      .catch((error) => {
        setSubmitting(false);
        setSubmitResult({
          success: false,
          message: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        });
        console.error("Erro ao enviar email:", error);
      });
  };

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
              Soluções personalizadas
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
              Automatizações personalizada para{" "}
              <span className="text-gradient-blue">
                necessidades únicas de negócios
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
              Além de agendamentos, criamos soluções personalizadas que resolvem
              seus desafios de negócios com automação avançada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Discutir seu projeto
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#process"
                className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Ver processos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Development Process */}
      <section id="process" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Nosso processo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como construímos sua solução personalizada
          </h2>
          <p className="text-lg text-muted-foreground">
            Nosso time experiente segue um método comprovado para desenvolver
            sua solução perfeita de automação.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[50%] h-full w-[2px] bg-white/10"></div>
          <div className="space-y-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:order-1 order-2">
                <h3 className="text-2xl font-bold mb-3">
                  Descoberta e requisitos
                </h3>
                <p className="text-muted-foreground">
                  Começamos com uma consulta completa para entender seus
                  desafios de negócios, fluxos de trabalho e objetivos. Nosso
                  time identifica as principais necessidades e oportunidades de
                  automação.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center z-10 border-4 border-background">
                  <span className="text-lg font-bold">1</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex justify-center items-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center z-10 border-4 border-background">
                  <span className="text-lg font-bold">2</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold mb-3">Projeto de solução</h3>
                <p className="text-muted-foreground">
                  Nossos especialistas projetam uma solução personalizada que
                  atende aos seus requisitos específicos. Criamos fluxos de
                  conversação detalhados, pontos de integração e processos de
                  manipulação de dados.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:order-1 order-2">
                <h3 className="text-2xl font-bold mb-3">
                  Desenvolvimento e teste
                </h3>
                <p className="text-muted-foreground">
                  Desenvolvemos sua solução personalizada usando tecnologias
                  avançadas. Testes rigorosos garantem que tudo funcione
                  perfeitamente em cenários reais.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center z-10 border-4 border-background">
                  <span className="text-lg font-bold">3</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex justify-center items-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center z-10 border-4 border-background">
                  <span className="text-lg font-bold">4</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold mb-3">
                  Implementação e treinamento
                </h3>
                <p className="text-muted-foreground">
                  Implementamos sua solução e fornecemos treinamento completo
                  para seu time. O processo é suave e com suporte em cada etapa.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:order-1 order-2">
                <h3 className="text-2xl font-bold mb-3">
                  Suporte contínuo e otimização
                </h3>
                <p className="text-muted-foreground">
                  Nosso relacionamento continua com suporte dedicado e
                  otimização contínua com base nos dados de desempenho e
                  necessidades de negócios evolutivos.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center z-10 border-4 border-background">
                  <span className="text-lg font-bold">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section id="customization" className="section bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Opções de customização
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personalizado para suas necessidades exatas
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossas soluções personalizadas podem ser configuradas de várias
            maneiras para atender aos seus requisitos específicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom">
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Settings size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Lógica de negócios avançada
            </h3>
            <p className="text-muted-foreground">
              Árvores de decisão e regras de negócios complexas para lidar com
              cenários de agendamento intricados e interações com clientes.
            </p>
          </div>

          <div
            className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom"
            style={{ animationDelay: "100ms" }}
          >
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Code size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Integrações personalizadas
            </h3>
            <p className="text-muted-foreground">
              Conecte-se a seus sistemas de software existentes, ERP, CRM ou
              plataformas proprietárias para troca de dados sem esforço.
            </p>
          </div>

          <div
            className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom"
            style={{ animationDelay: "200ms" }}
          >
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <MessageSquare size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Design de conversação
            </h3>
            <p className="text-muted-foreground">
              Ajuste o fluxo de conversação e a personalidade do bot para
              corresponder à sua voz de marca e padrões de experiência do
              cliente.
            </p>
          </div>

          <div
            className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom"
            style={{ animationDelay: "300ms" }}
          >
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Layers size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Suporte multi-departamento
            </h3>
            <p className="text-muted-foreground">
              Encaminhe conversas para os departamentos ou membros da equipe
              apropriados com base no tipo de consulta ou necessidades do
              cliente.
            </p>
          </div>

          <div
            className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom"
            style={{ animationDelay: "400ms" }}
          >
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <BarChart size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Relatórios personalizados
            </h3>
            <p className="text-muted-foreground">
              Construa dashboards de relatórios especializados que rastreiam
              métricas que importam mais para seu negócio.
            </p>
          </div>

          <div
            className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom"
            style={{ animationDelay: "500ms" }}
          >
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Shield size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Segurança aprimorada</h3>
            <p className="text-muted-foreground">
              Implemente medidas adicionais de segurança para setores com
              requisitos de conformidade rigorosos, como saúde ou finanças.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="industries" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Soluções para seu setor
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Especializadas para seu setor
          </h2>
          <p className="text-lg text-muted-foreground">
            Desenvolvemos soluções de automação personalizadas para lidar com os
            desafios únicos do seu setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-8 animate-slide-in-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <industry.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {industry.name}
                  </h3>
                  <ul className="space-y-2">
                    {industry.examples.map((example, exIndex) => (
                      <li key={exIndex} className="flex items-start">
                        <CheckCircle
                          size={16}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Capabilities */}
      <section id="integrations" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Capabilidades de integração
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conecte-se a seus sistemas existentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossas soluções personalizadas podem integrar com quase qualquer
            plataforma de software que seu negócio utiliza.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Zap size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">Sistemas CRM</h3>
              <p className="text-sm text-muted-foreground">
                Salesforce, HubSpot, Zoho, etc.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Calendar size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">Sistemas de calendário</h3>
              <p className="text-sm text-muted-foreground">
                Google Calendar, Outlook, iCloud
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Settings size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">
                Sistemas de software de negócios
              </h3>
              <p className="text-sm text-muted-foreground">
                ERP, POS, Sistemas de reserva
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Code size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">APIs personalizadas</h3>
              <p className="text-sm text-muted-foreground">
                Seus sistemas proprietários
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4">
              Não vê seu sistema listado? Não há problema. Nosso time
              especializa-se em criar integrações personalizadas.
            </p>
            <a
              href="#contact"
              className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
            >
              Discuta suas necessidades de integração
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Comece agora
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos discutir seu projeto personalizado
          </h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário abaixo e nosso time entrará em contato para
            discutir suas necessidades específicas.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
          {submitResult.message && (
            <div
              className={`mb-4 p-3 rounded-md ${
                submitResult.success
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {submitResult.message}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Digite seu nome"
                  required
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
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Digite seu email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-1"
                >
                  Nome da empresa
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Digite o nome da empresa"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Número de telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Digite seu número de telefone"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium mb-1"
              >
                Setor
              </label>
              <select
                id="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Selecione seu setor</option>
                <option value="healthcare">Saúde</option>
                <option value="professional">Serviços profissionais</option>
                <option value="hospitality">Hospedagem</option>
                <option value="retail">Varejo</option>
                <option value="education">Educação</option>
                <option value="other">Outro</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="projectDetails"
                className="block text-sm font-medium mb-1"
              >
                Detalhes do projeto
              </label>
              <textarea
                id="projectDetails"
                rows={6}
                value={formData.projectDetails}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Descreva seu projeto, desafios e objetivos"
                required
              ></textarea>
            </div>

            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-2"
                  checked={formData.marketing}
                  onChange={handleCheckboxChange}
                />
                <span className="text-sm text-muted-foreground">
                  Eu concordo em receber comunicações sobre minha solicitação e
                  outros materiais de marketing relevantes.
                </span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={submitting}
                className="bg-primary hover:bg-primary/90 transition-all text-white px-8 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                {submitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar solicitação
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CustomBot;
