import { 
  Building2, 
  GraduationCap, 
  Users, 
  UserCircle,
  Bus,
  CheckCircle
} from "lucide-react";

const TargetUsersSection = () => {
  const users = [
    {
      icon: Building2,
      title: "School & College Administrators",
      benefits: [
        "Complete institutional oversight",
        "Real-time performance dashboards",
        "Streamlined operations management",
        "Automated compliance reporting",
      ],
      color: "primary",
    },
    {
      icon: GraduationCap,
      title: "Teachers & Academic Staff",
      benefits: [
        "Simplified attendance tracking",
        "Digital gradebook & analytics",
        "Easy parent communication",
        "Resource sharing tools",
      ],
      color: "accent",
    },
    {
      icon: Users,
      title: "Students",
      benefits: [
        "Access schedules anywhere",
        "Track academic progress",
        "Submit assignments online",
        "Stay updated with notifications",
      ],
      color: "success",
    },
    {
      icon: UserCircle,
      title: "Parents",
      benefits: [
        "Real-time child tracking",
        "Instant grade notifications",
        "Direct teacher messaging",
        "Fee payment management",
      ],
      color: "lavender",
    },
    {
      icon: Bus,
      title: "Transport & Support Staff",
      benefits: [
        "GPS route optimization",
        "Student pickup verification",
        "Vehicle maintenance logs",
        "Emergency alert system",
      ],
      color: "primary",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; check: string }> = {
      primary: { bg: "bg-primary/10", icon: "text-primary", check: "text-primary" },
      accent: { bg: "bg-accent/10", icon: "text-accent", check: "text-accent" },
      success: { bg: "bg-success/10", icon: "text-success", check: "text-success" },
      lavender: { bg: "bg-lavender/10", icon: "text-lavender", check: "text-lavender" },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            For Everyone
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Stakeholder
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Campus Clock serves the unique needs of everyone in your educational
            community with role-specific features and experiences.
          </p>
        </div>

        {/* User Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => {
            const Icon = user.icon;
            const colorClasses = getColorClasses(user.color);
            return (
              <div
                key={index}
                className={`card-premium p-8 ${index === 4 ? "lg:col-span-1 md:col-span-2 lg:mx-auto lg:max-w-md" : ""}`}
              >
                <div
                  className={`w-14 h-14 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-7 h-7 ${colorClasses.icon}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {user.title}
                </h3>
                <ul className="space-y-3">
                  {user.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${colorClasses.check} flex-shrink-0`} />
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection;
