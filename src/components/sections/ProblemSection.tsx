import { 
  Layers, 
  FileText, 
  Eye, 
  MessageSquareOff, 
  Bus,
  AlertTriangle
} from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Layers,
      title: "Fragmented Systems",
      description: "Multiple disconnected tools creating data silos and inefficiency",
    },
    {
      icon: FileText,
      title: "Manual Record-Keeping",
      description: "Time-consuming paperwork and redundant administrative work",
    },
    {
      icon: Eye,
      title: "No Real-time Visibility",
      description: "Lack of instant academic insights and performance tracking",
    },
    {
      icon: MessageSquareOff,
      title: "Poor Communication",
      description: "Ineffective parent-teacher engagement and delayed updates",
    },
    {
      icon: Bus,
      title: "Transport Chaos",
      description: "Inefficient routing, tracking, and student safety concerns",
    },
    {
      icon: AlertTriangle,
      title: "Compliance Gaps",
      description: "Missing audit trails and inadequate security measures",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-destructive text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Challenge
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Traditional Campus Management{" "}
            <span className="text-destructive">Fails</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Educational institutions struggle with outdated systems that create
            more problems than they solve.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-destructive/30 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 bg-destructive/10 rounded-xl flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
