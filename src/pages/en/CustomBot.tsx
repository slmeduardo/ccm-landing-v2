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
  style?: React.CSSProperties;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  industry,
  challenge,
  solution,
  results,
  className,
}) => (
  <div
    className={cn(
      "glass-card rounded-xl p-8 animate-slide-in-bottom",
      className
    )}
  >
    <div className="inline-block bg-primary/20 rounded-full px-3 py-1 text-xs font-medium text-primary mb-4">
      {industry}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="space-y-4 mb-6">
      <div>
        <h4 className="text-sm font-medium text-primary mb-1">Challenge</h4>
        <p className="text-muted-foreground">{challenge}</p>
      </div>
      <div>
        <h4 className="text-sm font-medium text-primary mb-1">Solution</h4>
        <p className="text-muted-foreground">{solution}</p>
      </div>
      <div>
        <h4 className="text-sm font-medium text-primary mb-1">Results</h4>
        <ul className="space-y-1">
          {results.map((result, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle
                size={16}
                className="text-primary mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-muted-foreground">{result}</span>
            </li>
          ))}
        </ul>
      </div>
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

  const services = [
    {
      title: "Custom Conversation Flows",
      description:
        "We design complex conversation paths that match your exact business processes, handling multiple decision points and routing logic.",
      icon: Layers,
    },
    {
      title: "Enterprise Integrations",
      description:
        "Seamlessly connect your bot with your existing CRM, ERP, scheduling, payment, or any proprietary system through custom APIs.",
      icon: Code,
    },
    {
      title: "Multi-Channel Support",
      description:
        "Extend functionality beyond WhatsApp to other communication channels like web chat, SMS, or social media platforms.",
      icon: Globe,
    },
    {
      title: "Advanced Analytics",
      description:
        "Custom reporting and analytics dashboards to track performance, user behavior, and derive actionable business insights.",
      icon: BarChart,
    },
    {
      title: "Data Security Solutions",
      description:
        "Industry-specific security protocols and compliance measures for sensitive data handling in regulated fields.",
      icon: Shield,
    },
    {
      title: "Tech Stack Integration",
      description:
        "Deep integration with your existing technology infrastructure, maintaining data consistency across systems.",
      icon: Settings,
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: Stethoscope,
      examples: [
        "Patient pre-screening and triage",
        "Medical records integration",
        "Insurance verification workflows",
        "Prescription refill management",
      ],
    },
    {
      name: "Professional Services",
      icon: Briefcase,
      examples: [
        "Client intake and qualification",
        "Document collection workflows",
        "Service recommendation engines",
        "Client lifecycle management",
      ],
    },
    {
      name: "Multi-Location Businesses",
      icon: Globe,
      examples: [
        "Location-aware booking allocation",
        "Cross-location inventory checks",
        "Staff availability management",
        "Regional promotion distribution",
      ],
    },
    {
      name: "High-Volume Operations",
      icon: Calendar,
      examples: [
        "Queue management systems",
        "Group booking coordination",
        "Capacity optimization",
        "Seasonal demand handling",
      ],
    },
  ];

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    needs: "",
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
      await emailjs.send(
        "service_73hrjon",
        "template_8ji0c3s",
        {
          name: formState.name,
          time: new Date().toLocaleString(),
          message: `
Email: ${formState.email}
Phone: ${formState.phone}
Company: ${formState.company}
Needs: ${formState.needs}
          `,
        },
        "shas1t9WT9WETAZdN"
      );

      setFormSuccess(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        needs: "",
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
              Custom Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
              Customized automation for{" "}
              <span className="text-gradient-blue">unique business needs</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
              Beyond scheduling, we create custom solutions that solve your
              specific business challenges with advanced automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <a
                href="#case-studies"
                className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                See Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact-us"
                className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Custom solutions that deliver real results
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped businesses solve complex challenges with
            tailored automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudy
              key={index}
              {...study}
              className=""
              // Animate with delay
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </section>

      {/* Services Offered */}
      <section id="services" className="section bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Custom Development
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beyond standard features
          </h2>
          <p className="text-lg text-muted-foreground">
            Our custom development services go far beyond basic bots, addressing
            complex automation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customization Options */}
      <section id="customization" className="section bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Customization Options
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored to your exact needs
          </h2>
          <p className="text-lg text-muted-foreground">
            Our custom solutions can be configured in various ways to meet your
            specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom">
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Settings size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Advanced Business Logic
            </h3>
            <p className="text-muted-foreground">
              Complex decision trees and business rules to handle intricate
              scheduling scenarios and customer interactions.
            </p>
          </div>

          <div
            className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom"
            style={{ animationDelay: "100ms" }}
          >
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <MessageSquare size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Personalized Communication
            </h3>
            <p className="text-muted-foreground">
              Tailored messaging that matches your brand voice and delivers the
              right information at the right time.
            </p>
          </div>

          <div
            className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom"
            style={{ animationDelay: "200ms" }}
          >
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Smartphone size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Multi-Channel Integration
            </h3>
            <p className="text-muted-foreground">
              Connect your WhatsApp bot with your website, SMS, and other
              messaging platforms for a unified experience.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="industries" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Industry Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Specialized for your industry
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer tailored solutions that address the specific challenges in
            your field.
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
            Integration Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect to your existing systems
          </h2>
          <p className="text-lg text-muted-foreground">
            Our custom solutions can integrate with nearly any software platform
            your business uses.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Zap size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">CRM Systems</h3>
              <p className="text-sm text-muted-foreground">
                Salesforce, HubSpot, Zoho, etc.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Calendar size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">Calendar Systems</h3>
              <p className="text-sm text-muted-foreground">
                Google Calendar, Outlook, iCloud
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <MessageSquare size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">Communication Tools</h3>
              <p className="text-sm text-muted-foreground">
                Email, SMS, Chat platforms
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Code size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">Custom APIs</h3>
              <p className="text-sm text-muted-foreground">
                Proprietary and legacy systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-us" className="section bg-secondary/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Let's Talk
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to discuss your custom solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experts will work closely with you to understand your
              needs and create a tailored plan for your business.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-primary font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Consultation</h3>
                  <p className="text-muted-foreground">
                    We'll discuss your specific challenges and goals to
                    understand what you need.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-primary font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Custom Proposal</h3>
                  <p className="text-muted-foreground">
                    We'll create a detailed plan with timeline, features, and
                    pricing tailored to your needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-primary font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Implementation</h3>
                  <p className="text-muted-foreground">
                    Our team develops and deploys your custom solution with
                    ongoing support.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-xl p-8">
            {formSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Request Received!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest. One of our solutions experts will
                  contact you within 24 hours to discuss your needs.
                </p>
                <button
                  onClick={() => setFormSuccess(false)}
                  className="bg-primary hover:bg-primary/90 transition-colors text-white px-6 py-3 rounded-md font-medium"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold mb-6">Request Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="needs"
                      className="block text-sm font-medium mb-2"
                    >
                      Tell us about your needs
                    </label>
                    <textarea
                      id="needs"
                      name="needs"
                      value={formState.needs}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Describe your business challenge or what you're looking to automate..."
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
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/70 transition-colors text-white px-6 py-3 rounded-md font-medium flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Book a Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomBot;
