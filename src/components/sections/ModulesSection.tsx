import { 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  UserCircle,
  BookOpen,
  Bus,
  ClipboardList,
  CreditCard,
  ArrowRight
} from "lucide-react";

const ModulesSection = () => {
  const modules = [
    {
      icon: LayoutDashboard,
      title: "Admin Dashboard",
      description: "Complete oversight with real-time analytics and management tools",
      color: "primary",
    },
    {
      icon: GraduationCap,
      title: "Teacher App",
      description: "Streamlined grading, attendance, and classroom management",
      color: "accent",
    },
    {
      icon: Users,
      title: "Student App",
      description: "Access schedules, assignments, and academic progress anytime",
      color: "success",
    },
    {
      icon: UserCircle,
      title: "Parent App",
      description: "Stay connected with real-time updates and direct communication",
      color: "lavender",
    },
    {
      icon: BookOpen,
      title: "Library Management",
      description: "Digital cataloging, reservations, and resource tracking",
      color: "primary",
    },
    {
      icon: Bus,
      title: "Transport & GPS",
      description: "Live tracking, route optimization, and safety monitoring",
      color: "accent",
    },
    {
      icon: ClipboardList,
      title: "Admissions & Enrollment",
      description: "Paperless applications, document verification, and onboarding",
      color: "success",
    },
    {
      icon: CreditCard,
      title: "Finance & Fee Management",
      description: "Automated billing, payment tracking, and financial reporting",
      color: "lavender",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; gradient: string }> = {
      primary: { 
        bg: "bg-primary/10 group-hover:bg-primary/20", 
        icon: "text-primary",
        gradient: "from-primary/0 to-primary/5"
      },
      accent: { 
        bg: "bg-accent/10 group-hover:bg-accent/20", 
        icon: "text-accent",
        gradient: "from-accent/0 to-accent/5"
      },
      success: { 
        bg: "bg-success/10 group-hover:bg-success/20", 
        icon: "text-success",
        gradient: "from-success/0 to-success/5"
      },
      lavender: { 
        bg: "bg-lavender/10 group-hover:bg-lavender/20", 
        icon: "text-lavender",
        gradient: "from-lavender/0 to-lavender/5"
      },
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="modules" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <LayoutDashboard className="w-4 h-4" />
            Complete Ecosystem
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Modules &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of integrated applications designed for every
            stakeholder in your educational institution.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const colorClasses = getColorClasses(module.color);
            return (
              <div
                key={index}
                className={`group relative p-6 bg-card rounded-2xl border border-border/50 hover:border-border transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative">
                  <div
                    className={`w-12 h-12 mb-4 ${colorClasses.bg} rounded-xl flex items-center justify-center transition-colors`}
                  >
                    <Icon className={`w-6 h-6 ${colorClasses.icon}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {module.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {module.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
