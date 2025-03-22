
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  delay: number;
}

const initialMessages: Message[] = [
  { id: 1, text: "👋 Hi there! I'm the CCM Assistant. How can I help you today?", isBot: true, delay: 0 },
];

const messageOptions = [
  "I'd like to schedule a haircut",
  "Do you have any appointments for tomorrow?",
  "I need to reschedule my appointment",
  "What are your working hours?"
];

const WhatsAppDemo = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [currentOption, setCurrentOption] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOptionClick = (option: string) => {
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: option,
      isBot: false,
      delay: 0
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setCurrentOption(option);
    setIsTyping(true);
    
    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = getBotResponse(option);
      const newBotMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        delay: 0
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (option: string): string => {
    switch (option) {
      case "I'd like to schedule a haircut":
        return "Great! I can help you schedule a haircut. What day would you prefer?";
      case "Do you have any appointments for tomorrow?":
        return "Let me check our availability for tomorrow. We have slots at 10:00 AM, 1:30 PM, and 3:45 PM. Would any of these work for you?";
      case "I need to reschedule my appointment":
        return "I'd be happy to help you reschedule. Could you please confirm your name and the current appointment date?";
      case "What are your working hours?":
        return "Our salon is open Monday to Friday from 9:00 AM to 8:00 PM, and Saturday from 10:00 AM to 6:00 PM. We're closed on Sundays.";
      default:
        return "I'm not sure I understand. Could you please rephrase or select one of the options below?";
    }
  };

  return (
    <section id="demo" className="section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
          Interactive Demo
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Yourself</h2>
        <p className="text-lg text-muted-foreground">
          See how our WhatsApp assistant handles scheduling in real-time.
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
                <p className="font-medium">CCM Assistant</p>
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
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
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
