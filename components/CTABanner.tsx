"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CTABanner() {
  return (
    <section className="bg-mahogany py-24 text-parchment">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-shell text-center"
      >
        <h2 className="font-playfair text-5xl font-bold text-parchment">
          Ready to Start Playing?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-parchment/70">
          Book your free 20-minute Bass Roadmap Call today. No commitment —
          just clarity on exactly where to start.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/services#contact"
            className="rounded-full bg-amber px-8 py-4 font-semibold text-espresso-950 transition-all duration-300 hover:bg-amber-light hover:shadow-[0_0_20px_rgba(200,133,58,0.3)]"
          >
            Book Your Free Call
          </Link>
          <Link
            href="/services"
            className="rounded-full border-2 border-parchment px-8 py-4 font-semibold text-parchment transition-all duration-300 hover:bg-parchment/20"
          >
            View Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
