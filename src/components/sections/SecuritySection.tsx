import { 
  Shield, 
  Smartphone, 
  Server, 
  Lock, 
  UserCheck, 
  FileText,
  Cloud,
  Zap
} from "lucide-react";

const SecuritySection = () => {
  const technologies = [
    {
      icon: Smartphone,
      title: "Cross-Platform Apps",
      description: "Mobile, Web, and Desktop with native performance.",
    },
    {
      icon: Server,
      title: "Scalable Backend",
      description: "Architecture designed for high availability and horizontal scaling.",
    },
    {
      icon: Lock,
      title: "Secure Authentication",
      description: "2FA for enhanced account protection.",
    },
    {
      icon: UserCheck,
      title: "Role-Based Access",
      description: "Granular permissions ensuring users only access what they need.",
    },
    {
      icon: FileText,
      title: "Audit Logging",
      description: "Comprehensive activity trails for compliance and security monitoring.",
    },
    {
      icon: Cloud,
      title: "Cloud-Ready",
      description: "Optimized for cloud deployment with future-proof architecture.",
    },
  ];

  return (
    <section id="security" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full text-success text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Enterprise Security
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Enterprise-Grade{" "}
            <span className="bg-gradient-to-r from-success to-accent bg-clip-text text-transparent">
              Technology & Security
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with the latest technologies and security best practices to
            protect your institution's most sensitive data.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="card-premium p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-success/20 transition-colors">
                    <Icon className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Badges */}
        <div className="mt-16 p-8 bg-card rounded-2xl border border-border/50">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { icon: Shield, label: "SOC 2 Compliant" },
              { icon: Lock, label: "256-bit Encryption" },
              { icon: Zap, label: "99.9% Uptime SLA" },
              { icon: Cloud, label: "GDPR Ready" },
            ].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-full"
                >
                  <Icon className="w-5 h-5 text-success" />
                  <span className="font-medium text-foreground">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
