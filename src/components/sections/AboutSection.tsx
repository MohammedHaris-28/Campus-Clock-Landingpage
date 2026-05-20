import { Building2, Users, Globe, Sparkles } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "10+", label: "Scalable Modules", icon: Building2 },
    { value: "8+", label: "Core Modules", icon: Globe },
    { value: "100%", label: "Role-Based Access", icon: Users },
    { value: "99.9%", label: "Uptime", icon: Sparkles },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            About the Platform
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            A Next-Generation{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education ERP.
            </span>
             , Not Just Software
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Campus Clock is a comprehensive digital ecosystem designed for schools. It automates academic and administrative
            operations, eliminates fragmented tools, and empowers institutions with
            real-time data, AI-driven insights, and transparent communication.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="card-premium p-6 text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
