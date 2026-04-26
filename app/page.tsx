import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import Curriculum from "@/components/Curriculum";
import DiscoveryCall from "@/components/DiscoveryCall";
import Footer from "@/components/Footer";
import FreeGuide from "@/components/FreeGuide";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export function generateMetadata(): Metadata {
  return {
    title:
      "Josiah Sid — Bass Guitar Lessons for Beginners | Worship, Gospel and Beyond",
  };
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-black-950">
      <Navbar />
      <Hero />
      <DiscoveryCall />
      <Curriculum />
      <FreeGuide />
      <CTABanner />
      <Footer />
    </main>
  );
}
