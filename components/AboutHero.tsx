"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutHero() {
  return (
    <section className="bg-espresso-950 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-shell text-center"
      >
        <p className="section-label">The Teacher</p>
        <h1 className="mt-4 font-playfair text-5xl font-bold text-parchment">
          About Josiah Sid
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-xl leading-8 text-parchment-muted">
          Bass player, teacher, and believer that anyone can learn to play if
          they have the right guidance and a clear plan.
        </p>
      </motion.div>
    </section>
  );
}
