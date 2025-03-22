
import React from 'react';
import Layout from '@/components/Layout';
import { ArrowRight, Calendar, MessageSquare, Brain, Clock, BarChart, Settings, Users, Shield, Zap, CheckCircle, Smartphone, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, className }) => (
  <div className={cn("glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg", className)}>
    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company }) => (
  <div className="glass-card rounded-xl p-8">
    <div className="mb-6">
      <svg width="45" height="36" className="text-primary/60 mb-4">
        <path
          d="M13.415.43c-2.523 0-4.75 1.76-5.675 4.25C6.84 6.416 6.173 8.103 5.77 9.965c-.196.892-.18 1.783.136 2.678.315.895.782 1.61 1.555 2.41 1.183 1.217 2.58 1.825 4.188 1.825 1.61 0 3.177-.608 4.533-1.795 1.356-1.187 2.06-2.582 2.06-4.118 0-1.536-.704-2.931-2.06-4.118-1.367-1.187-2.933-1.786-4.533-1.786-.167 0-.346.015-.527.044 2.06-1.447 4.44-2.163 7.128-2.163 1.157 0 2.207.124 3.15.35-.29-.933-.724-1.732-1.357-2.41-.633-.677-1.515-1.007-2.648-1.007-.138 0-.257.015-.384.029-.126.015-.264.029-.43.029-.165 0-.304-.014-.43-.029-.126-.014-.246-.029-.384-.029-1.133 0-2.015.33-2.648 1.007-.632.678-1.067 1.477-1.356 2.41.943-.226 1.993-.35 3.15-.35 1.289 0 2.495.166 3.616.497-1.104-.498-2.319-.746-3.644-.746-1.367 0-2.639.228-3.823.685zm27.784 0c-2.523 0-4.752 1.76-5.677 4.25-.9 1.737-1.568 3.424-1.97 5.286-.196.892-.18 1.783.136 2.678.315.895.78 1.61 1.555 2.41 1.181 1.217 2.58 1.825 4.188 1.825 1.61 0 3.176-.608 4.531-1.795 1.356-1.187 2.062-2.582 2.062-4.118 0-1.536-.706-2.931-2.062-4.118-1.367-1.187-2.932-1.786-4.531-1.786-.168 0-.347.015-.527.044 2.06-1.447 4.44-2.163 7.127-2.163 1.157 0 2.207.124 3.151.35-.292-.933-.723-1.732-1.357-2.41-.633-.677-1.515-1.007-2.648-1.007-.137 0-.259.015-.385.029-.125.015-.264.029-.428.029-.166 0-.305-.014-.43-.029-.126-.014-.246-.029-.385-.029-1.133 0-2.015.33-2.648 1.007-.633.678-1.067 1.477-1.356 2.41.942-.226 1.992-.35 3.15-.35 1.29 0 2.496.166 3.616.497-1.103-.498-2.318-.746-3.644-.746-1.368 0-2.64.228-3.825.685z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </svg>
      <blockquote className="text-lg italic mb-4">{quote}</blockquote>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
          <span className="font-medium">{author.charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{position}, {company}</p>
        </div>
      </div>
    </div>
  </div>
);

const ProductPage = () => {
  const features = [
    {
      title: 'Smart Scheduling',
      description: 'AI-powered assistant that understands natural language requests and manages your calendar intelligently.',
      icon: Brain,
    },
    {
      title: 'WhatsApp Integration',
      description: 'Seamlessly connects with WhatsApp Business to handle appointments right where your customers are.',
      icon: MessageSquare,
    },
    {
      title: 'Calendar Sync',
      description: 'Automatically synchronizes with your existing calendar systems to prevent double bookings.',
      icon: Calendar,
    },
    {
      title: 'Automated Reminders',
      description: 'Sends timely notifications to reduce no-shows and improve appointment attendance.',
      icon: Clock,
    },
    {
      title: 'Business Insights',
      description: 'Comprehensive analytics dashboard providing valuable data on booking patterns and customer behavior.',
      icon: BarChart,
    },
    {
      title: 'Custom Configuration',
      description: 'Easily customize booking rules, service durations, buffer times, and operating hours.',
      icon: Settings,
    },
    {
      title: 'Team Management',
      description: 'Manage multiple staff members, their schedules, and specialties all in one place.',
      icon: Users,
    },
    {
      title: 'Secure Data',
      description: 'Enterprise-grade security ensuring all customer data and conversations remain private and protected.',
      icon: Shield,
    },
    {
      title: 'High Performance',
      description: 'Lightning-fast responses with 99.9% uptime guarantee for uninterrupted service.',
      icon: Zap,
    },
  ];

  const useCases = [
    {
      title: 'Barbershops',
      description: 'Streamline haircut appointments, reduce wait times, and improve client satisfaction.',
      icon: Users,
    },
    {
      title: 'Medical Clinics',
      description: 'Manage patient appointments efficiently while maintaining privacy and sending important reminders.',
      icon: CheckCircle,
    },
    {
      title: 'Beauty Salons',
      description: 'Handle different service types, durations, and specialized staff assignments automatically.',
      icon: Smartphone,
    },
    {
      title: 'Professional Services',
      description: 'Perfect for consultants, lawyers, and other professionals who work by appointment.',
      icon: Globe,
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses just getting started with automated scheduling.',
      features: [
        'Up to 100 appointments/month',
        'WhatsApp Business integration',
        'Automated reminders',
        'Google Calendar sync',
        'Basic reporting',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For growing businesses that need more advanced scheduling capabilities.',
      features: [
        'Up to 500 appointments/month',
        'All Starter features',
        'Multiple staff management',
        'Custom booking rules',
        'Advanced analytics',
        'Priority support'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex scheduling needs and high volume.',
      features: [
        'Unlimited appointments',
        'All Professional features',
        'Custom integrations',
        'Multiple location support',
        'Dedicated account manager',
        '24/7 premium support'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Since implementing CCM's scheduling assistant, we've reduced our front desk workload by 70% and significantly improved customer satisfaction. The WhatsApp integration is seamless and our clients love how easy it is to book appointments.",
      author: "Michael Rodriguez",
      position: "Owner",
      company: "Elite Cuts Barbershop"
    },
    {
      quote: "As a busy dermatology clinic, managing appointments efficiently is crucial. CCM's solution has not only streamlined our scheduling process but also reduced no-shows by 65% thanks to the automated reminders. It's been a game-changer for our practice.",
      author: "Dr. Sarah Chen",
      position: "Medical Director",
      company: "Glow Dermatology Clinic"
    },
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
              WhatsApp Scheduling Assistant
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
              Simplify Appointment Scheduling with <span className="text-gradient-blue">AI-Powered</span> Automation
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
              Our comprehensive scheduling solution helps businesses automate appointment booking and management through WhatsApp, saving time and improving customer experience.
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
                href="#use-cases" 
                className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Explore Use Cases
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Scheduling Features</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to automate your appointment scheduling process from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="animate-slide-in-bottom"
            />
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="section bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Use Cases
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For Many Industries</h2>
          <p className="text-lg text-muted-foreground">
            Our scheduling assistant adapts to the unique needs of different businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="glass-card rounded-xl p-8 animate-slide-in-bottom" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <useCase.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card rounded-xl p-8 flex flex-col h-full transition-all hover:translate-y-[-4px]",
                plan.highlighted ? "ring-2 ring-primary" : ""
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={cn(
                  "transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center w-full",
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90"
                    : "backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10"
                )}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specs */}
      <section id="tech-specs" className="section bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Technical Specifications
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Performance & Reliability</h2>
          <p className="text-lg text-muted-foreground">
            Our platform is engineered with enterprise-grade technology to ensure smooth operation.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Integration Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>WhatsApp Business API</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Google Calendar, iCloud, Outlook</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Zapier for 3000+ app connections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>REST API for custom integrations</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>GDPR compliant data handling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>SOC 2 Type II certified</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Regular security audits</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>99.9% uptime guarantee</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Response time under 1 second</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Globally distributed infrastructure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Automatic scaling during peak times</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Quick setup (under 10 minutes)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Guided onboarding process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Comprehensive documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-2 mt-0.5" />
                  <span>Free setup assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Businesses across industries are transforming their scheduling with our solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section bg-secondary/30">
        <div className="glass-card rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Scheduling?</h2>
              <p className="text-muted-foreground mb-6">
                Join hundreds of businesses that have revolutionized their appointment booking process with our WhatsApp AI assistant.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-2" />
                  <span>Free 14-day trial</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-2" />
                  <span>No credit card required</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-2" />
                  <span>Full access to all features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-2" />
                  <span>Dedicated support during setup</span>
                </li>
              </ul>
              <a 
                href="#" 
                className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"></div>
              <div className="relative p-6">
                <form className="space-y-4">
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
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message (Optional)</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your scheduling needs"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium"
                  >
                    Request Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
