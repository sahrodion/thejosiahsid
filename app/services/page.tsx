import type { Metadata } from "next";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ServicesHero from "@/components/ServicesHero";
import Testimonials from "@/components/Testimonials";
import WhoIsThisFor from "@/components/WhoIsThisFor";

export function generateMetadata(): Metadata {
  return {
    title: "Services — Josiah Sid Bass Lessons",
    description:
      "Virtual bass guitar lessons for beginners. 1-to-1 sessions, structured programmes, exam prep, audition coaching and more.",
  };
}

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-black-950">
      <Navbar />
      <ServicesHero />
      <WhoIsThisFor />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
