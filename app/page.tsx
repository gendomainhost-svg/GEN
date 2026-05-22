import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const HomeAbout = dynamic(() => import("@/components/HomeAbout"));
const HomeRecognition = dynamic(() => import("@/components/HomeRecognition"));
const ClientsBeneficiaries = dynamic(
  () => import("@/components/ClientsBeneficiaries")
);
const SmartContactForm = dynamic(() => import("@/components/SmartContactForm"));
const StrategicPartners = dynamic(() => import("@/components/StrategicPartners"));
const CookieBanner = dynamic(() => import("@/components/CookieBanner"), {
  ssr: false,
});

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
