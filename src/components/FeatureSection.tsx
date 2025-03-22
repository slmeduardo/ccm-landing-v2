
import React from 'react';
import { Calendar, MessageSquare, Brain, Clock, BarChart, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  className,
  delay = 0 
}) => (
  <div 
    className={cn(
      "glass-card rounded-xl p-6 transition-all hover:translate-y-[-4px] hover:shadow-lg",
      className
    )}
    style={{ animationDelay: `${delay * 100}ms` }}
  >
    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      title: 'Automated Scheduling',
      description: 'Let customers book appointments directly through WhatsApp without human intervention.',
      icon: Calendar,
    },
    {
      title: 'Natural Conversations',
      description: 'AI-powered chat that feels natural and understands customer requests intelligently.',
      icon: MessageSquare,
    },
    {
      title: 'Smart Recommendations',
      description: 'Suggests optimal time slots based on business availability and customer preferences.',
      icon: Brain,
    },
    {
      title: 'Automated Reminders',
      description: 'Sends timely appointment reminders to reduce no-shows and improve attendance.',
      icon: Clock,
    },
    {
      title: 'Business Analytics',
      description: 'Get insights into booking patterns, popular services, and customer behavior.',
      icon: BarChart,
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly connects with your existing calendar and business management systems.',
      icon: Settings,
    },
  ];

  return (
    <section id="features" className="section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
          Features
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Scheduling Made Simple</h2>
        <p className="text-lg text-muted-foreground">
          Everything you need to automate appointments and deliver a seamless customer experience.
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
            delay={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
