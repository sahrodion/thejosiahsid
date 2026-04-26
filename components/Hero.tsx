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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black-950 px-6 pt-24"
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl"
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.03),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0),#000000_90%)]" />

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
          className="mt-5 font-playfair text-5xl font-bold leading-[1.05] text-white md:text-7xl"
        >
          Bass Guitar for Beginners — Worship, Gospel and Beyond
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white-muted md:text-xl"
        >
          Virtual 1-to-1 lessons for total beginners. Structured, encouraging,
          and built around the music you actually want to play.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10">
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(255, 255, 255, 0.24)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#discovery-call"
              className="inline-flex rounded-full bg-white px-8 py-4 text-lg font-semibold text-black-950 transition hover:bg-white-off"
            >
              Book Your Free 20-Min Chat
            </Link>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-3">
          <Link
            href="/services"
            className="text-sm text-accent-muted underline-offset-4 transition hover:underline"
          >
            Want to explore all services first? →
          </Link>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-4 text-sm text-accent-muted">
          No experience needed. No gear required to start.
        </motion.p>
      </motion.div>
    </section>
  );
}
