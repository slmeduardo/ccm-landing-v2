
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How does the WhatsApp scheduling chatbot work?",
      answer: "Our AI-powered chatbot integrates directly with WhatsApp. Customers can send messages to your WhatsApp business number, and our AI assistant handles the entire scheduling process - from checking availability to sending confirmations and reminders. All conversations happen naturally, as if they were chatting with a human assistant."
    },
    {
      question: "Do I need technical knowledge to set it up?",
      answer: "Not at all. Our setup process is designed to be extremely user-friendly. We'll guide you through connecting your WhatsApp Business number, importing your service information, and setting your availability preferences. The entire process typically takes less than 10 minutes to complete."
    },
    {
      question: "Can it integrate with my existing scheduling system?",
      answer: "Yes! Our solution integrates with popular scheduling and calendar systems like Google Calendar, Microsoft Outlook, Calendly, Acuity, and more. During setup, you'll be able to connect your existing tools, ensuring all appointments stay synchronized across platforms."
    },
    {
      question: "What languages does the chatbot support?",
      answer: "Currently, our chatbot supports English, Spanish, Portuguese, French, and German. We're continuously adding support for more languages. If you need a specific language that's not currently supported, please contact us to discuss your requirements."
    },
    {
      question: "How does pricing work?",
      answer: "We offer several flexible pricing tiers based on your business size and volume of appointments. All plans include our core features, with higher tiers offering more advanced capabilities like custom integrations and analytics. We also offer a 14-day free trial so you can experience the full benefits before committing."
    },
    {
      question: "Can I customize the chatbot's responses?",
      answer: "Absolutely! You can customize the chatbot's personality, greeting messages, confirmation texts, and more. For businesses with specific needs, our Custom Bot service allows for even deeper customization of the conversation flow and integration capabilities."
    },
  ];

  return (
    <section id="faq" className="section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
          FAQ
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground">
          Everything you need to know about our WhatsApp scheduling assistant.
        </p>
      </div>

      <div className="max-w-3xl mx-auto glass-card rounded-xl p-6">
        <Accordion type="single" collapsible className="divide-y divide-white/10">
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
          Still have questions? We're here to help.
        </p>
        <a 
          href="#contact" 
          className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default FaqSection;
