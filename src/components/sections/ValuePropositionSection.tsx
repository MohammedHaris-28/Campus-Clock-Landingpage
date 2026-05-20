import { 
  Layers, 
  Brain, 
  Eye, 
  Shield, 
  Building2, 
  Zap 
} from "lucide-react";

const ValuePropositionSection = () => {
  const values = [
    {
      icon: Layers,
      title: "Unified Ecosystem",
      description: "One platform for academics, admin, transport, finance, and communication. No more juggling multiple tools.",
      color: "primary",
    },
    {
      icon: Brain,
      title: "Automation & AI Intelligence",
      description: "Predictive analytics, performance insights, and intelligent risk detection powered by machine learning.",
      color: "accent",
    },
    {
      icon: Eye,
      title: "Transparency & Trust",
      description: "Real-time attendance, academic progress, and transport tracking visible to all stakeholders.",
      color: "success",
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Verified student movement, comprehensive audit logs, and secure role-based access control.",
      color: "lavender",
    },
    {
      icon: Building2,
      title: "Scalable Architecture",
      description: "Built for single schools to multi-campus institutions. Grow without limits or disruptions.",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Get up and running in days, not months. Seamless migration with dedicated support team.",
      color: "accent",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; border: string }> = {
      primary: { bg: "bg-primary/10", icon: "text-primary", border: "hover:border-primary/30" },
      accent: { bg: "bg-accent/10", icon: "text-accent", border: "hover:border-accent/30" },
      success: { bg: "bg-success/10", icon: "text-success", border: "hover:border-success/30" },
      lavender: { bg: "bg-lavender/10", icon: "text-lavender", border: "hover:border-lavender/30" },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full text-success text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Our Advantage
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Makes Campus Clock{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Purpose-built for modern education with features that matter most to
            institutions, educators, and families.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            const colorClasses = getColorClasses(value.color);
            return (
              <div
                key={index}
                className={`card-premium p-8 group ${colorClasses.border}`}
              >
                <div
                  className={`w-14 h-14 mb-6 ${colorClasses.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${colorClasses.icon}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
