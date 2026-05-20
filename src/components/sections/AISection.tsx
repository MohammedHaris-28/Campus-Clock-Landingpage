import { 
  Brain, 
  TrendingUp, 
  AlertCircle, 
  BarChart3, 
  MessageSquare,
  Lightbulb
} from "lucide-react";

const AISection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Academic Performance Prediction",
      description: "ML algorithms analyze patterns to forecast student outcomes and identify improvement areas early.",
    },
    {
      icon: AlertCircle,
      title: "At-Risk Student Detection",
      description: "Proactive alerts for students showing signs of academic or behavioral challenges before they escalate.",
    },
    {
      icon: BarChart3,
      title: "Smart Grading & Analytics",
      description: "Automated assessment insights with detailed breakdowns and comparative performance analysis.",
    },
    {
      icon: MessageSquare,
      title: "AI-Powered Chatbot",
      description: "24/7 intelligent assistant for academic queries, administrative questions, and campus information.",
    },
    {
      icon: Lightbulb,
      title: "Data-Driven Decisions",
      description: "Actionable insights for leadership with visual dashboards and trend analysis reports.",
    },
  ];

  return (
    <section id="ai" className="section-padding bg-gradient-to-b from-background to-accent/5">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium">
              <Brain className="w-4 h-4" />
              Artificial Intelligence
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Powered by{" "}
              <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Campus Clock leverages cutting-edge machine learning to transform raw
              data into actionable insights, helping institutions make smarter
              decisions and improve student outcomes.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-accent/10 to-success/10 rounded-3xl p-8 lg:p-12">
              {/* Central Brain Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-success rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Predictions", value: "95%", sublabel: "Accuracy" },
                  { label: "Processing", value: "< 1s", sublabel: "Response" },
                  { label: "Insights", value: "1M+", sublabel: "Daily" },
                  { label: "Models", value: "15+", sublabel: "Active" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 text-center"
                  >
                    <p className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                    <p className="text-xs text-accent font-medium mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Connecting Lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-accent" />
                <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-accent" />
                <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-accent" />
                <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-accent" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
