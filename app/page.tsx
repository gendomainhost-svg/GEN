import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import HomeAbout from "@/components/HomeAbout";
import HomeRecognition from "@/components/HomeRecognition";
import ClientsBeneficiaries from "@/components/ClientsBeneficiaries";
import SmartContactForm from "@/components/SmartContactForm";
import StrategicPartners from "@/components/StrategicPartners";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ServicesSection />
      <HomeAbout />
      <HomeRecognition />
      <ClientsBeneficiaries />
      <SmartContactForm />
      <StrategicPartners />
      <Footer />
      <CookieBanner />
    </main>
  );
}

