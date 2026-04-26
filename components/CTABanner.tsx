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
    <section className="bg-white py-24 text-black-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-shell text-center"
      >
        <h2 className="font-playfair text-5xl font-bold text-black-950">
          Ready to Start Playing?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-black-950/70">
          Book your free 20-minute Bass Roadmap Call today. No commitment —
          just clarity on exactly where to start.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/services#contact"
            className="rounded-full bg-black-950 px-8 py-4 font-semibold text-white"
          >
            Book Your Free Call
          </Link>
          <Link
            href="/services"
            className="rounded-full border-2 border-black-950 px-8 py-4 font-semibold text-black-950"
          >
            View Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
