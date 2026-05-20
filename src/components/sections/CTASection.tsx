import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-tight relative">
        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 rounded-3xl p-8 md:p-12 lg:p-16 border border-border/50">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Ready to modernize your institution?
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join with Campus Clock to transform your institution's management.
              Get started today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" className="group">
                <Calendar className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => navigate("/contact-sales")}
              >
                <MessageSquare className="w-5 h-5" />
                Contact Sales
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center gap-8 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                Free demo included
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                Setup in under 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;