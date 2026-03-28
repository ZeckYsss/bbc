import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AboutSection from "@/components/AboutSection";
import DeliverySection from "@/components/DeliverySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <main className="bg-background min-h-screen overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <AboutSection />
    <DeliverySection />
    <HowItWorksSection />
    <DifferentialsSection />
    <ServicesSection />
    <ContactSection />
    <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
      <p>© {new Date().getFullYear()} BBC Fibra. Todos os direitos reservados.</p>
    </footer>
  </main>
);

export default Index;
