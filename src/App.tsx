import { useEffect } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import {
  About,
  Services,
  WhyChoose,
  Fleet,
  Coverage,
  Industries,
  Stats,
  Testimonials,
  Gallery,
  Process,
  QuoteForm,
  FAQ,
  Contact,
  Footer,
} from "@/components/site/Sections";
import { WhatsAppFab, InstallPwa } from "@/components/site/Floats";
import { useReveal } from "@/hooks/use-reveal";

export default function App() {
  useReveal();

  useEffect(() => {
    const ld = {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "ECR Translogix and Petroleum SA (PTY) LTD",
      areaServed: "Africa",
      telephone: "+27766589138",
      email: "energyrice260@gmail.com",
      url: window.location.origin,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Fleet />
        <Coverage />
        <Industries />
        <Stats />
        <Process />
        <Gallery />
        <Testimonials />
        <QuoteForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <InstallPwa />
    </div>
  );
}
