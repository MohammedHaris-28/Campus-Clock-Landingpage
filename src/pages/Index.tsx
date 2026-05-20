import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import ModulesSection from "@/components/sections/ModulesSection";
import AISection from "@/components/sections/AISection";
import SecuritySection from "@/components/sections/SecuritySection";
import TargetUsersSection from "@/components/sections/TargetUsersSection";
import VisionSection from "@/components/sections/VisionSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProblemSection />
        <ValuePropositionSection />
        <ModulesSection />
        <AISection />
        <SecuritySection />
        <TargetUsersSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
