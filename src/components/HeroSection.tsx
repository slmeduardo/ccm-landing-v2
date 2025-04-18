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
              Automatize processos da sua empresa
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Soluções{" "}
              <span className="text-gradient-blue">automatizadas em IA</span>{" "}
              para o seu negócio
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl animate-fade-in">
              Ajudamos você a automatizar processos, gerando uma operação mais
              eficiente e mais lucrativa, porque se você estiver obtendo mais
              lucro, mais oportunidades consegue dar aos seus colaboradores de
              atingirem novos horizontes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <a
                href="#demo"
                className="bg-primary hover:bg-primary/90 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Ver em ação
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#features"
                className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center justify-center"
              >
                Conheça nossas soluções
              </a>
            </div>
          </div>

          {/* <div className="relative lg:ml-auto">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 bg-gradient-to-br from-secondary to-black rounded-2xl p-4 border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] animate-float">
              <div className="absolute inset-[2px] bg-black rounded-xl overflow-hidden">
                <div className="h-full flex flex-col">
                  <div className="bg-secondary p-4 border-b border-white/10 flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-lg font-bold text-primary">C</span>
                    </div>
                    <div>
                      <p className="font-medium">CCM Assistant</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>

                  <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollbar-none">
                    <div className="bg-secondary p-3 rounded-lg rounded-tl-none max-w-[80%]">
                      <p className="text-sm">
                        Hello! I'm your scheduling assistant. Would you like to
                        book an appointment?
                      </p>
                    </div>

                    <div className="bg-primary/20 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                      <p className="text-sm">
                        Yes, I need a haircut tomorrow afternoon
                      </p>
                    </div>

                    <div className="bg-secondary p-3 rounded-lg rounded-tl-none max-w-[80%]">
                      <p className="text-sm">
                        Great! I have the following slots available tomorrow:
                      </p>
                      <p className="text-sm mt-2">• 2:00 PM</p>
                      <p className="text-sm">• 3:30 PM</p>
                      <p className="text-sm">• 5:00 PM</p>
                    </div>

                    <div className="bg-primary/20 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                      <p className="text-sm">3:30 PM works for me</p>
                    </div>

                    <div className="bg-secondary p-3 rounded-lg rounded-tl-none max-w-[80%]">
                      <p className="text-sm">
                        Perfect! I've booked you for a haircut tomorrow at 3:30
                        PM with Alex. You'll receive a reminder 1 hour before.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500/20 backdrop-blur-xl rounded-full z-[-1] animate-pulse-slow"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500/10 backdrop-blur-xl rounded-full z-[-1] animate-pulse-slow"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
