import { Sparkles } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />

      <div className="container-tight relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg mx-auto">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* Main Statement */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Campus Clock is not just a digital tool —{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
              it is the operating system for the future of education.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Helping institutions educate better, manage smarter, and grow faster
            with trust, safety, and transparency at scale.
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-4 pt-8">
            {[
              "Innovate",
              "Transform",
              "Excel",
            ].map((word, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-card rounded-full border border-border/50 text-sm font-medium text-muted-foreground"
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
