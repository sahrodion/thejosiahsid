import type { Metadata } from "next";
import About from "@/components/About";
import AboutHero from "@/components/AboutHero";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export function generateMetadata(): Metadata {
  return {
    title: "About — Josiah Sid Bass Teacher",
    description:
      "Learn about Josiah Sid — bass player and teacher helping beginners learn to play worship, gospel and beyond.",
  };
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-espresso-950">
      <Navbar />
      <AboutHero />
      <About />
      <CTABanner />
      <Footer />
    </main>
  );
}
