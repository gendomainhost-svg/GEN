import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import HomeAbout from "@/components/HomeAbout";
import HomeRecognition from "@/components/HomeRecognition";
import SmartContactForm from "@/components/SmartContactForm";
import StrategicPartners from "@/components/StrategicPartners";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <HomeAbout />
      <HomeRecognition />
      <SmartContactForm />
      <StrategicPartners />
      <Footer />
      <CookieBanner />
    </main>
  );
}

