import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-hero-gradient opacity-80 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-glow transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-glow transform translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary animate-fade-in">
              Automate your business processes
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              <span className="text-gradient-blue">AI-powered</span> automation
              solutions for your business
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl animate-fade-in">
              We help you automate processes, creating a more efficient and
              profitable operation, because if you're making more profit, you
              can provide your team with more opportunities to reach new
              horizons.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <a
                href="#demo"
                className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                See it in action
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#features"
                className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Explore our solutions
              </a>
            </div>
          </div>

          {/* Chat UI visualization commented out in original */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
