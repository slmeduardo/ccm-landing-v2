import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  delay: number;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "👋 Olá! Eu sou o Assistente CCM. Como posso ajudar você hoje?",
    isBot: true,
    delay: 0,
  },
];

const messageOptions = [
  "Gostaria de agendar um corte de cabelo",
  "Vocês têm horários disponíveis para amanhã?",
  "Preciso remarcar meu agendamento",
  "Quais são os horários de funcionamento?",
];

const WhatsAppDemo = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [currentOption, setCurrentOption] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (option: string) => {
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: option,
      isBot: false,
      delay: 0,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setCurrentOption(option);
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = getBotResponse(option);
      const newBotMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        delay: 0,
      };

      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (option: string): string => {
    switch (option) {
      case "Gostaria de agendar um corte de cabelo":
        return "Ótimo! Posso ajudar você a agendar um corte. Qual dia você prefere?";
      case "Vocês têm horários disponíveis para amanhã?":
        return "Deixe-me verificar nossa disponibilidade para amanhã. Temos slots às 10:00, 13:30 e 15:45. Qual desses funciona para você?";
      case "Preciso remarcar meu agendamento":
        return "Estou feliz em ajudar você a remarcar. Poderia confirmar seu nome e a data do agendamento atual?";
      case "Quais são os horários de funcionamento?":
        return "Nosso salão está aberto de segunda a sexta, das 9:00 às 18:00, e sábado, das 10:00 às 18:00. Estamos fechados aos domingos.";
      default:
        return "Não estou certeza de entender. Poderia reformular ou selecionar uma das opções abaixo?";
    }
  };

  return (
    <section id="demo" className="section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
          Demonstração interativa
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Experimente você mesmo
        </h2>
        <p className="text-lg text-muted-foreground">
          Veja como nosso assistente de agendamento de WhatsApp lida com o
          agendamento em tempo real.
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="relative aspect-[9/16] w-full bg-gradient-to-br from-secondary to-black rounded-3xl p-3 border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-[2px] bg-black rounded-[22px] overflow-hidden flex flex-col">
            {/* WhatsApp header */}
            <div className="bg-secondary p-4 border-b border-white/10 flex items-center">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-lg font-bold text-primary">C</span>
              </div>
              <div>
                <p className="font-medium">Assistente CCM</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollbar-none bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA30lEQVRoge3YMQ6CQBSF4d+YWNjYegFPQKcNNdZ6K8/hDSxsLEhMbKgsXCssHmpoFCFZZsh7yStgmI9kdhcyEBERERERkcSVQA3MgQPTBfgCJ2AN5BaFCmBH99LP2AL5mEUKeupW9E/lKYdsBixiF+lRAPPYJYIaIC3TcR27RNCFtMwH6IIXaoELaZkrP/MwdpGg5dLQfZx2ZC38f9+OKERCFCIhCpEQhUiIQiRkTHNdAofnt98ToBrzpq/cV4b6dGTqz/XpSGVdwZNmBCrSVZHuK+5oJn81sKA5LouIiIiIiIh4+AItMpMdaM6aiAAAAABJRU5ErkJggg==')] bg-repeat bg-[length:50px_50px] bg-black/90">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "p-3 rounded-lg max-w-[80%]",
                    message.isBot
                      ? "bg-secondary rounded-tl-none"
                      : "bg-primary/20 rounded-tr-none ml-auto"
                  )}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              ))}

              {isTyping && (
                <div className="bg-secondary p-3 rounded-lg rounded-tl-none max-w-[80%] flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Message options */}
            <div className="p-4 border-t border-white/10 bg-black">
              <div className="space-y-2">
                {messageOptions.map((option, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-full text-left p-3 rounded-lg text-sm transition-all",
                      currentOption === option
                        ? "bg-primary/40 text-white"
                        : "bg-secondary hover:bg-secondary/80 text-white"
                    )}
                    onClick={() => handleOptionClick(option)}
                    disabled={isTyping}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;
