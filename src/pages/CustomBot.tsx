
import React from 'react';
import Layout from '@/components/Layout';
import { ArrowRight, Settings, Code, Layers, Zap, MessageSquare, Shield, BarChart, Smartphone, Briefcase, Globe, Stethoscope, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudyProps {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  className?: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, industry, challenge, solution, results, className }) => (
  <div className={cn("glass-card rounded-xl p-8 transition-all", className)}>
    <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-xs font-medium text-primary mb-4">
      {industry}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    
    <div className="mb-4">
      <p className="text-sm font-medium text-muted-foreground mb-1">Challenge:</p>
      <p>{challenge}</p>
    </div>
    
    <div className="mb-4">
      <p className="text-sm font-medium text-muted-foreground mb-1">Solution:</p>
      <p>{solution}</p>
    </div>
    
    <div>
      <p className="text-sm font-medium text-muted-foreground mb-2">Results:</p>
      <ul className="space-y-2">
        {results.map((result, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
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
      challenge: "A high-end salon chain with 8 locations struggled with managing appointments across different branches, each with unique services and specialists.",
      solution: "We developed a custom WhatsApp bot that recognized location preferences, specialist requests, and service types, then routed appointments accordingly.",
      results: [
        "85% reduction in booking staff workload",
        "23% increase in cross-location appointments",
        "Personalized follow-ups resulted in 34% more repeat bookings"
      ]
    },
    {
      title: "Medical Practice Enhances Patient Communication",
      industry: "Healthcare",
      challenge: "A large medical practice needed a HIPAA-compliant way to handle appointment scheduling while providing patients with pre-visit instructions.",
      solution: "Created a secure, custom WhatsApp integration that managed appointments and automatically sent prep instructions based on appointment type.",
      results: [
        "Decreased no-shows by 62%",
        "Improved patient preparedness for appointments",
        "Reduced administrative phone time by 70%"
      ]
    },
    {
      title: "Law Firm Optimizes Client Consultations",
      industry: "Legal",
      challenge: "A busy law firm needed to qualify potential clients before scheduling consultations with the appropriate attorney based on case type.",
      solution: "Developed an AI-powered WhatsApp assistant that asked qualifying questions and routed appointments based on legal specialties.",
      results: [
        "40% increase in consultation conversion rates",
        "Improved attorney-client matching",
        "Saved 15+ hours weekly in initial client screening"
      ]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: Stethoscope,
      examples: [
        "Patient appointment management",
        "Pre-visit instructions",
        "Follow-up scheduling",
        "Medication reminders"
      ]
    },
    {
      name: "Professional Services",
      icon: Briefcase,
      examples: [
        "Client consultations",
        "Document submission reminders",
        "Meeting scheduling",
        "Service follow-ups"
      ]
    },
    {
      name: "Hospitality",
      icon: Globe,
      examples: [
        "Restaurant reservations",
        "Hotel bookings",
        "Service requests",
        "Guest experience management"
      ]
    },
    {
      name: "Retail",
      icon: Smartphone,
      examples: [
        "Personal shopping appointments",
        "Product demos",
        "VIP client bookings",
        "Service scheduling"
      ]
    }
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
              Custom Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
              Tailored WhatsApp Automation for <span className="text-gradient-blue">Unique Business Needs</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
              Beyond standard scheduling, we create custom WhatsApp solutions that solve your specific business challenges with advanced AI automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#case-studies" 
                className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Development Process */}
      <section id="process" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Build Your Custom Solution</h2>
          <p className="text-lg text-muted-foreground">
            Our expert team follows a proven methodology to develop your perfect WhatsApp automation solution.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[50%] h-full w-[2px] bg-white/10"></div>
          <div className="space-y-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:order-1 order-2">
                <h3 className="text-2xl font-bold mb-3">Discovery & Requirements</h3>
                <p className="text-muted-foreground">
                  We begin with a thorough consultation to understand your business challenges, workflows, and goals. Our team identifies key requirements and opportunities for automation.
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
                <h3 className="text-2xl font-bold mb-3">Solution Design</h3>
                <p className="text-muted-foreground">
                  Our experts design a custom WhatsApp solution that addresses your specific needs. We create detailed conversation flows, integration points, and data handling processes.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:order-1 order-2">
                <h3 className="text-2xl font-bold mb-3">Development & Testing</h3>
                <p className="text-muted-foreground">
                  We develop your custom solution using cutting-edge AI and WhatsApp Business API technologies. Rigorous testing ensures everything works flawlessly in real-world scenarios.
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
                <h3 className="text-2xl font-bold mb-3">Implementation & Training</h3>
                <p className="text-muted-foreground">
                  We deploy your solution and provide comprehensive training for your team. The transition is smooth and supported at every step.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:order-1 order-2">
                <h3 className="text-2xl font-bold mb-3">Ongoing Support & Optimization</h3>
                <p className="text-muted-foreground">
                  Our relationship continues with dedicated support and continuous optimization based on performance data and your evolving business needs.
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
            Customization Options
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored To Your Exact Needs</h2>
          <p className="text-lg text-muted-foreground">
            Our custom WhatsApp solutions can be configured in numerous ways to meet your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom">
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Settings size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Business Logic</h3>
            <p className="text-muted-foreground">Custom decision trees and complex business rules to handle intricate scheduling scenarios and customer interactions.</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom" style={{ animationDelay: "100ms" }}>
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Code size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom Integrations</h3>
            <p className="text-muted-foreground">Connect to your existing software systems, ERP, CRM, or proprietary platforms for seamless data exchange.</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom" style={{ animationDelay: "200ms" }}>
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <MessageSquare size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Conversation Design</h3>
            <p className="text-muted-foreground">Tailor the conversation flow and bot personality to match your brand voice and customer experience standards.</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom" style={{ animationDelay: "300ms" }}>
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Layers size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Multi-Department Support</h3>
            <p className="text-muted-foreground">Route conversations to the appropriate departments or staff members based on inquiry type or customer needs.</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom" style={{ animationDelay: "400ms" }}>
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <BarChart size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom Analytics</h3>
            <p className="text-muted-foreground">Build specialized reporting dashboards that track the specific metrics that matter most to your business.</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg animate-slide-in-bottom" style={{ animationDelay: "500ms" }}>
            <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Shield size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
            <p className="text-muted-foreground">Implement additional security measures for industries with strict compliance requirements like healthcare or finance.</p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="industries" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Industry Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized For Your Industry</h2>
          <p className="text-lg text-muted-foreground">
            We develop custom WhatsApp automation solutions tailored to the unique challenges of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="glass-card rounded-xl p-8 animate-slide-in-bottom" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <industry.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.examples.map((example, exIndex) => (
                      <li key={exIndex} className="flex items-start">
                        <CheckCircle size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
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

      {/* Case Studies */}
      <section id="case-studies" className="section bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Case Studies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Real-world examples of how our custom WhatsApp solutions have transformed businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudy
              key={index}
              title={study.title}
              industry={study.industry}
              challenge={study.challenge}
              solution={study.solution}
              results={study.results}
              className="animate-slide-in-bottom"
            />
          ))}
        </div>
      </section>

      {/* Integration Capabilities */}
      <section id="integrations" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Integration Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Your Existing Systems</h2>
          <p className="text-lg text-muted-foreground">
            Our custom solutions can integrate with virtually any software platform your business uses.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Zap size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">CRM Systems</h3>
              <p className="text-sm text-muted-foreground">Salesforce, HubSpot, Zoho, etc.</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Calendar size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">Calendar Systems</h3>
              <p className="text-sm text-muted-foreground">Google Calendar, Outlook, iCloud</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Settings size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">Business Software</h3>
              <p className="text-sm text-muted-foreground">ERP, POS, Booking Systems</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Code size={32} className="text-primary" />
              </div>
              <h3 className="font-medium mb-1">Custom APIs</h3>
              <p className="text-sm text-muted-foreground">Your Proprietary Systems</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="mb-4">Don't see your system listed? No problem. Our team specializes in creating custom integrations.</p>
            <a 
              href="#contact" 
              className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
            >
              Discuss Your Integration Needs
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Get Started
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Discuss Your Custom Project</h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and our team will contact you to discuss your specific needs.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="industry" className="block text-sm font-medium mb-1">Industry</label>
              <select
                id="industry"
                className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select your industry</option>
                <option value="healthcare">Healthcare</option>
                <option value="professional">Professional Services</option>
                <option value="hospitality">Hospitality</option>
                <option value="retail">Retail</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="project-details" className="block text-sm font-medium mb-1">Project Details</label>
              <textarea
                id="project-details"
                rows={6}
                className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Describe your project, challenges, and goals"
              ></textarea>
            </div>
            
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-2"
                />
                <span className="text-sm text-muted-foreground">
                  I agree to receive communications about my inquiry and other relevant marketing materials.
                </span>
              </label>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 transition-all text-white px-8 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Submit Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CustomBot;
