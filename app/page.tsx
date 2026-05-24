import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

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
      <StrategicPartners />
      <Footer />
      <CookieBanner />
    </main>
  );
}
