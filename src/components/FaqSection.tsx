import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Como funciona o chatbot de agendamento do WhatsApp?",
      answer:
        "Nosso chatbot com inteligência artificial se integra diretamente ao WhatsApp. Os clientes podem enviar mensagens para o seu número de WhatsApp Business, e nosso assistente de IA gerencia todo o processo de agendamento - desde verificar disponibilidade até enviar confirmações e lembretes. Todas as conversas acontecem naturalmente, como se estivessem conversando com um assistente humano.",
    },
    {
      question: "Preciso de conhecimento técnico para configurá-lo?",
      answer:
        "De forma alguma. Nosso processo de configuração foi projetado para ser extremamente amigável. Vamos guiá-lo através da conexão do seu número do WhatsApp Business, importação das informações de serviço e definição das suas preferências de disponibilidade. O processo completo geralmente leva menos de 10 minutos para ser concluído.",
    },
    {
      question:
        "Ele pode se integrar com meu sistema de agendamento existente?",
      answer:
        "Sim! Nossa solução se integra com sistemas populares de agendamento e calendário como Google Calendar, Microsoft Outlook, Calendly, Acuity e outros. Durante a configuração, você poderá conectar suas ferramentas existentes, garantindo que todos os compromissos permaneçam sincronizados entre as plataformas.",
    },
    {
      question: "Quais idiomas o chatbot suporta?",
      answer:
        "Atualmente, nosso chatbot suporta inglês, espanhol, português, francês e alemão. Estamos continuamente adicionando suporte para mais idiomas. Se você precisar de um idioma específico que não é suportado atualmente, entre em contato conosco para discutir suas necessidades.",
    },
    {
      question: "Como funciona o preço?",
      answer:
        "Oferecemos vários níveis de preços flexíveis com base no tamanho do seu negócio e volume de agendamentos. Todos os planos incluem nossos recursos principais, com níveis mais altos oferecendo recursos mais avançados como integrações personalizadas e análises. Também oferecemos um período de teste gratuito de 14 dias para que você possa experimentar todos os benefícios antes de se comprometer.",
    },
    {
      question: "Posso personalizar as respostas do chatbot?",
      answer:
        "Absolutamente! Você pode personalizar a personalidade do chatbot, mensagens de saudação, textos de confirmação e muito mais. Para empresas com necessidades específicas, nosso serviço de Bot Personalizado permite uma personalização ainda mais profunda do fluxo de conversa e recursos de integração.",
    },
  ];

  return (
    <section id="faq" className="section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
          Perguntas Frequentes
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-lg text-muted-foreground">
          Tudo o que você precisa saber sobre nosso assistente de agendamento do
          WhatsApp.
        </p>
      </div>

      <div className="max-w-3xl mx-auto glass-card rounded-xl p-6">
        <Accordion
          type="single"
          collapsible
          className="divide-y divide-white/10"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left py-5 text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="py-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Ainda tem dúvidas? Estamos aqui para ajudar.
        </p>
        <a
          href="#contact"
          className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  );
};

export default FaqSection;
