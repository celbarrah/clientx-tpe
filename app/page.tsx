import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LogosMarquee from "@/components/sections/LogosMarquee";
import DecisionsSection from "@/components/sections/DecisionsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import PillarsSection from "@/components/sections/PillarsSection";
import CtaSection from "@/components/sections/CtaSection";
import Calender from "@/components/sections/Calender";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogosMarquee />
        <DecisionsSection />
        <Calender />
        <TestimonialSection />
        <PillarsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
