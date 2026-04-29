"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-espresso-950 px-6 pt-24"
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,133,58,0.08),transparent_70%)] blur-3xl"
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0d0805_100%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.p variants={fadeUp} className="section-label">
          Bass Guitar for Beginners
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-5 font-playfair text-5xl font-bold leading-[1.05] text-parchment md:text-7xl"
        >
          Bass Guitar for Beginners — Worship, Gospel and Beyond
        </motion.h1>
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-3"
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-mahogany/70" />
          <span className="h-2 w-2 rotate-45 border border-amber/70 bg-mahogany" />
          <span className="h-px flex-1 bg-mahogany/70" />
        </motion.div>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-parchment-muted md:text-xl"
        >
          Virtual 1-to-1 lessons for total beginners. Structured, encouraging,
          and built around the music you actually want to play.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10">
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(200, 133, 58, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#discovery-call"
              className="inline-flex rounded-full border border-amber/40 bg-mahogany px-8 py-4 text-lg font-semibold text-parchment transition-all duration-300 hover:border-amber hover:bg-mahogany-light"
            >
              Book Your Free 20-Min Chat
            </Link>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-3">
          <Link
            href="/services"
            className="text-sm text-parchment-dark underline-offset-4 transition hover:text-amber hover:underline"
          >
            Want to explore all services first? →
          </Link>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-4 text-sm text-parchment-dark">
          No experience needed. No gear required to start.
        </motion.p>
      </motion.div>
    </section>
  );
}
