import { Calendar, Check, Clock, Sparkles, User } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Salve 20+ Horas Mensais",
      description:
        "Elimine chamadas e agendamentos manuais, economizando tempo valioso do seu time.",
      icon: Clock,
      stat: "20+ horas economizadas",
    },
    {
      title: "Reduza os No-Shows em 60%",
      description:
        "Avisos automáticos e reagendamento fácil reduzem significativamente os no-shows.",
      icon: User,
      stat: "60% menos no-shows",
    },
    {
      title: "Disponibilidade 24/7",
      description:
        "Permita que os clientes agendem em qualquer momento, mesmo fora do horário comercial, nunca perdendo uma oportunidade.",
      icon: Calendar,
      stat: "Agendamento 24/7",
    },
    {
      title: "Melhore a Experiência do Cliente",
      description:
        "Forneça uma experiência de agendamento moderna e sem complicações que deixa os clientes felizes.",
      icon: Sparkles,
      stat: "98% de satisfação",
    },
  ];

  return (
    <section id="benefits" className="section bg-secondary/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
          Benefícios
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Por que os negócios amam nossa solução
        </h2>
        <p className="text-lg text-muted-foreground">
          Junte-se a centenas de negócios que transformaram seu processo de
          agendamento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="glass-card rounded-xl p-8 animate-slide-in-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <benefit.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {benefit.description}
                </p>
                <div className="flex items-center">
                  <div className="bg-secondary/50 px-3 py-1 rounded-full text-sm font-medium">
                    {benefit.stat}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Pronto para otimizar seu agendamento?
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a centenas de negócios que economizam tempo, reduzem
              no-shows e melhoram a satisfação do cliente com nosso assistente
              de agendamento AI.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <Check size={18} className="text-primary mr-2" />
                <span>Configuração simples em menos de 1 hora</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-primary mr-2" />
                <span>Nenhuma experiência técnica necessária</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-primary mr-2" />
                <span>Integração perfeita com WhatsApp</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-primary mr-2" />
                <span>
                  Teste gratuito de 14 dias, sem necessidade de cartão de
                  crédito
                </span>
              </li>
            </ul>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
            >
              Comece agora
            </a>
          </div>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"></div>
            <div className="absolute inset-4 bg-black rounded-lg flex items-center justify-center">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/uJE7qU-82Vw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
