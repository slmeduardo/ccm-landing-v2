import { Calendar, Check, Clock, Sparkles, User } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Save 20+ Hours Monthly",
      description:
        "Eliminate manual calls and scheduling, saving valuable time for your team.",
      icon: Clock,
      stat: "20+ hours saved",
    },
    {
      title: "Reduce No-Shows by 60%",
      description:
        "Automatic reminders and easy rescheduling significantly reduce no-shows.",
      icon: User,
      stat: "60% fewer no-shows",
    },
    {
      title: "24/7 Availability",
      description:
        "Allow customers to book anytime, even outside business hours, never missing an opportunity.",
      icon: Calendar,
      stat: "24/7 scheduling",
    },
    {
      title: "Enhance Customer Experience",
      description:
        "Provide a modern, hassle-free scheduling experience that keeps customers happy.",
      icon: Sparkles,
      stat: "98% satisfaction",
    },
  ];

  return (
    <section id="benefits" className="section bg-secondary/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
          Benefits
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why businesses love our solution
        </h2>
        <p className="text-lg text-muted-foreground">
          Join hundreds of businesses that have transformed their scheduling
          process.
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
              Ready to optimize your scheduling?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of businesses that save time, reduce no-shows, and
              improve customer satisfaction with our AI scheduling assistant.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <Check size={18} className="text-primary mr-2" />
                <span>Simple setup in less than 1 hour</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-primary mr-2" />
                <span>No technical experience required</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-primary mr-2" />
                <span>Seamless WhatsApp integration</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-primary mr-2" />
                <span>14-day free trial, no credit card needed</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
            >
              Get Started
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
