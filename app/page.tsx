import About from "@/components/About";
import Contact from "@/components/Contact";
import Curriculum from "@/components/Curriculum";
import DiscoveryCall from "@/components/DiscoveryCall";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FreeGuide from "@/components/FreeGuide";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhoIsThisFor from "@/components/WhoIsThisFor";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black-950">
      <Navbar />
      <Hero />
      <DiscoveryCall />
      <WhoIsThisFor />
      <Curriculum />
      <About />
      <Services />
      <Testimonials />
      <FreeGuide />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
