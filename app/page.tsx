import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import ServicesSection from "@/components/ServicesSection";
import GlobalReach from "@/components/GlobalReach";
import AboutSection from "@/components/AboutSection";
import ProgramCatalog from "@/components/ProgramCatalog";
import StrategicPartners from "@/components/StrategicPartners";
import RecognitionExcellence from "@/components/RecognitionExcellence";
import LeadershipGovernance from "@/components/LeadershipGovernance";
import InsightsHub from "@/components/InsightsHub";
import SolutionsBySector from "@/components/SolutionsBySector";
import ConsultingShowcase from "@/components/ConsultingShowcase";
import ClientPortal from "@/components/ClientPortal";
import SmartContactForm from "@/components/SmartContactForm";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ImageSlider />
      <ServicesSection />
      <GlobalReach />
      <AboutSection />
      <ProgramCatalog />
      <RecognitionExcellence />
      <LeadershipGovernance />
      <InsightsHub />
      <SolutionsBySector />
      <ConsultingShowcase />
      <ClientPortal />
      <SmartContactForm />
      <StrategicPartners />
      <Footer />
      <CookieBanner />
    </main>
  );
}

