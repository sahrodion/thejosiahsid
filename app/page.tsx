import About from "@/components/About";
import Contact from "@/components/Contact";
import Curriculum from "@/components/Curriculum";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WhoIsThisFor from "@/components/WhoIsThisFor";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black-950">
      <Navbar />
      <Hero />
      <WhoIsThisFor />
      <Curriculum />
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
