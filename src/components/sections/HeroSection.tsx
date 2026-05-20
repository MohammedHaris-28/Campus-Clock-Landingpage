import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const HeroSection = () => {
  const features = [
    "AI-Powered Analytics",
    "Real-time Tracking",
    "Enterprise Security",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              Transform your Campus Management with
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up">
              Campus Clock –{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                The Intelligent Operating System
              </span>{" "}
              for Modern Education
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up animation-delay-100">
              A unified, AI-powered campus management platform that connects
              administrators, teachers, students, and parents into one
              transparent and secure digital ecosystem.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-200">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-success" />
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Button variant="hero" size="lg" className="group">
                Request a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg" className="group">
                <Play className="w-4 h-4" />
                Explore Platform
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 animate-fade-in-up animation-delay-400">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background flex items-center justify-center text-xs font-semibold text-primary"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground"></span>
                
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative animate-fade-in-right animation-delay-200">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl transform scale-95" />
              
              {/* Dashboard Image */}
              <div className="relative bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
                <img
                  src={dashboardMockup}
                  alt="Campus Clock Dashboard"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-card rounded-xl shadow-lg p-4 border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">98.5%</p>
                    <p className="text-xs text-muted-foreground">Attendance Rate</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 border border-border/50 animate-float animation-delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📊</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">AI Insights</p>
                    <p className="text-xs text-muted-foreground">Real-time analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
