import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
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
import React, { useState } from "react";

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

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
}) => (
  <div
    className={cn(
      "glass-card rounded-xl p-8 transition-all animate-slide-in-bottom",
      isPopular &&
        "relative border-primary/30 before:absolute before:top-0 before:right-0 before:-translate-y-1/2 before:translate-x-1/4 before:bg-primary before:text-white before:py-1 before:px-3 before:rounded-full before:text-xs before:font-medium before:content-['Most_Popular']"
    )}
  >
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <div className="flex items-end gap-1 mb-2">
      <span className="text-3xl font-bold">{price}</span>
      <span className="text-muted-foreground mb-1">/month</span>
    </div>
    <p className="text-muted-foreground mb-6">{description}</p>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className={cn(
        "w-full text-center py-2 px-4 rounded-md transition-colors font-medium",
        isPopular
          ? "bg-primary hover:bg-primary/90 text-white"
          : "bg-white/10 hover:bg-white/20 text-white"
      )}
    >
      Get Started
    </a>
  </div>
);

const ProductPage = () => {
  const features = [
    {
      title: "Intelligent Scheduling",
      description:
        "AI assistant that understands natural language requests and intelligently manages your calendar.",
      icon: Brain,
    },
    {
      title: "WhatsApp Integration",
      description:
        "Seamlessly connects with WhatsApp Business to manage appointments where your customers are.",
      icon: MessageSquare,
    },
    {
      title: "Calendar Sync",
      description:
        "Automatically syncs with your existing calendar systems to avoid double bookings.",
      icon: Calendar,
    },
    {
      title: "Automatic Reminders",
      description:
        "Sends timely notifications to reduce no-shows and improve attendance.",
      icon: Clock,
    },
    {
      title: "Business Analytics",
      description:
        "Comprehensive analytics dashboard providing valuable data on scheduling patterns and customer behavior.",
      icon: BarChart,
    },
    {
      title: "Custom Setup",
      description:
        "Customize scheduling rules, service durations, buffer times, and business hours.",
      icon: Settings,
    },
    {
      title: "Team Management",
      description:
        "Manage multiple team members, their schedules, and specialties in one place.",
      icon: Users,
    },
    {
      title: "Data Security",
      description:
        "Enterprise-level security ensuring all customer data and conversations remain private and protected.",
      icon: Shield,
    },
    {
      title: "Performance",
      description:
        "Fast responses with 99.9% uptime guarantee for uninterrupted service.",
      icon: Zap,
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 100 appointments/month",
        "Basic appointment scheduling",
        "Email reminders",
        "Google Calendar integration",
        "Business hour settings",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing businesses with moderate volume",
      features: [
        "Up to 500 appointments/month",
        "Advanced scheduling options",
        "WhatsApp & Email reminders",
        "Multi-calendar integrations",
        "Team member management",
        "Custom booking page",
        "Priority support",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For established businesses with high scheduling needs",
      features: [
        "Unlimited appointments",
        "Complete customization",
        "Advanced analytics",
        "Multi-location support",
        "API access",
        "Custom integrations",
        "Dedicated support manager",
        "SLA guarantees",
      ],
    },
  ];

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    try {
      // Replace these with your EmailJS service details
      await emailjs.send(
        "service_id",
        "template_id",
        {
          from_name: formState.name,
          from_email: formState.email,
          phone: formState.phone,
          business: formState.business,
          message: formState.message,
        },
        "user_id"
      );

      setFormSuccess(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: "",
      });
    } catch (error) {
      setFormError(
        "There was an error sending your message. Please try again later."
      );
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
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
              AI-Powered Scheduling
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
              Transform your business with{" "}
              <span className="text-gradient-blue">intelligent scheduling</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
              Automate your appointment booking process with our AI WhatsApp
              assistant. Save time, reduce no-shows, and provide 24/7 booking
              availability for your customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <a
                href="#pricing"
                className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                View Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#features"
                className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need for seamless scheduling
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI assistant streamlines your booking process while enhancing
            customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="section bg-secondary/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Natural and efficient scheduling through WhatsApp
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our AI assistant handles the entire scheduling process through
              familiar WhatsApp conversations. Customers chat naturally while
              the AI takes care of checking availability, confirming
              appointments, and sending reminders.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-primary font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Customer sends a message</h3>
                  <p className="text-muted-foreground text-sm">
                    Your customer messages your business WhatsApp requesting an
                    appointment.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-primary font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">
                    AI understands and processes
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Our AI understands the request, checks your availability,
                    and offers suitable time slots.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-primary font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Appointment confirmed</h3>
                  <p className="text-muted-foreground text-sm">
                    Once the customer selects a time, the AI confirms the
                    booking, adds it to your calendar, and sends reminders.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
            >
              Try It Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-square max-w-lg mx-auto bg-black rounded-xl p-4 border border-white/10 animate-float">
              <div className="h-full flex flex-col bg-secondary/30 rounded-lg overflow-hidden">
                <div className="bg-secondary p-4 border-b border-white/10 flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold text-primary">C</span>
                  </div>
                  <div>
                    <p className="font-medium">CCM Assistant</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>

                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="bg-secondary p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="text-sm">
                      Hi! I'm your scheduling assistant. How can I help you
                      today?
                    </p>
                  </div>

                  <div className="bg-primary/20 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                    <p className="text-sm">
                      I'd like to book a haircut for tomorrow afternoon
                    </p>
                  </div>

                  <div className="bg-secondary p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="text-sm">
                      Great! I have the following times available tomorrow:
                    </p>
                    <p className="text-sm mt-2">• 2:00 PM with Sarah</p>
                    <p className="text-sm">• 3:30 PM with Alex</p>
                    <p className="text-sm">• 4:45 PM with Sarah</p>
                  </div>

                  <div className="bg-primary/20 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                    <p className="text-sm">3:30 PM with Alex works for me</p>
                  </div>

                  <div className="bg-secondary p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="text-sm">
                      Perfect! I've booked you for a haircut tomorrow at 3:30 PM
                      with Alex. You'll receive a reminder 1 hour before. Can I
                      help with anything else?
                    </p>
                  </div>

                  <div className="bg-primary/20 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                    <p className="text-sm">That's all, thank you!</p>
                  </div>

                  <div className="bg-secondary p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="text-sm">
                      You're welcome! Have a great day. Feel free to message
                      anytime if you need to reschedule or have questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>

        <div className="glass-card rounded-xl p-6 mt-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold mb-2">
                Need a custom solution?
              </h3>
              <p className="text-muted-foreground max-w-xl">
                Contact us for a tailored plan that perfectly fits your business
                needs, volume, and specific requirements.
              </p>
            </div>
            <a
              href="#contact"
              className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium whitespace-nowrap flex-shrink-0"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section bg-secondary/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your scheduling?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fill out the form to get a personalized demo and see how our AI
              scheduling assistant can work for your business.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Works Globally</h3>
                  <p className="text-muted-foreground text-sm">
                    Our solution works worldwide with WhatsApp's global
                    availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Smartphone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">No App Required</h3>
                  <p className="text-muted-foreground text-sm">
                    Customers use their existing WhatsApp - no new apps to
                    download.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Quick Setup</h3>
                  <p className="text-muted-foreground text-sm">
                    Be up and running in less than a day with our guided setup
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="glass-card rounded-xl p-6">
              {formSuccess ? (
                <div className="text-center py-8">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setFormSuccess(false)}
                    className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="business"
                        className="block text-sm font-medium mb-2"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formState.business}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                      ></textarea>
                    </div>

                    {formError && (
                      <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-md text-sm">
                        {formError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/70 transition-all text-white px-6 py-3 rounded-md text-base font-medium flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
