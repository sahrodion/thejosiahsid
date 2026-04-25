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

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const stats = ["100% Virtual", "Beginner Focused", "Church Specialist"];

export default function About() {
  return (
    <section id="about" className="section-padding bg-black-950">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell grid items-center gap-12 lg:grid-cols-2"
      >
        <motion.div variants={fadeUp}>
          <div className="aspect-square overflow-hidden rounded-2xl border-2 border-white bg-black-800 shadow-glow">
            <img
              src="/josiah-sid-about.png"
              alt="Portrait of Josiah Sid"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="section-label">Your Teacher</p>
          <h2 className="mt-4 font-playfair text-4xl font-bold text-white md:text-6xl">
            Who You're Learning From
          </h2>
          <h3 className="mt-7 font-playfair text-3xl font-bold text-white">
            Jo Sid
          </h3>

          <div className="mt-6 space-y-4 leading-relaxed text-white-muted">
            <p>
              I've been playing bass in church settings for years. I know the
              worship environment — the pressure of playing live, the importance
              of locking in with a team, and what it actually takes to go from
              nervous beginner to confident musician.
            </p>
            <p>
              I don't teach theory for the sake of theory. I teach you what you
              actually need to play real songs in a real church context —
              simply, clearly, and at your own pace.
            </p>
            <p>
              My lessons are virtual, relaxed, and built around your schedule.
              Whether you've never touched a bass or you've been dabbling for
              months without direction, you're in the right place.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((stat) => (
              <span
                key={stat}
                className="rounded-full border border-white bg-black-800 px-4 py-2 text-sm font-medium text-white"
              >
                {stat}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
