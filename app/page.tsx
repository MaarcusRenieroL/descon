import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import MembersSection from "@/sections/MembersSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MembersSection />
      <ContactSection />
      <Footer />
    </>
  );
}
