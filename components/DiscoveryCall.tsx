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

const steps = [
  {
    time: "Mins 1–3",
    title: "Where You Are Now",
    description:
      "We talk through your current level, experience, and what you've tried before. No judgement — just context.",
  },
  {
    time: "Mins 4–8",
    title: "Where You Want to Get To",
    description:
      "Your goals, your timeline, and what playing bass actually means to you.",
  },
  {
    time: "Mins 9–14",
    title: "Your Personal Roadmap",
    description:
      "I map out exactly what your first 8 weeks would look like based on everything you've told me.",
  },
  {
    time: "Mins 15–19",
    title: "Your Questions",
    description:
      "Ask me anything about lessons, process, pricing, or what to expect.",
  },
  {
    time: "Minute 20",
    title: "Next Steps",
    description:
      "If it feels right, we book your first lesson. No pressure, no obligation either way.",
  },
];

export default function DiscoveryCall() {
  return (
    <section className="section-padding bg-black-900">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell"
      >
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="section-label">Free 20-Minute Call</p>
          <h2 className="mt-4 font-playfair text-4xl font-bold text-white md:text-6xl">
            Your Free Bass Roadmap Call
          </h2>
          <p className="mt-5 text-lg leading-8 text-white-muted">
            This isn't a sales call. It's a structured 20-minute session where
            you leave with a clear picture of exactly what your bass journey
            looks like.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {steps.map((step) => (
            <motion.article
              key={step.time}
              variants={fadeUp}
              className="rounded-xl border border-white bg-black-800 p-6"
            >
              <p className="font-bold text-white">{step.time}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-white-muted">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-10 text-center">
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.22)",
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black-950 transition hover:bg-white-off"
          >
            Book Your Free Bass Roadmap Call
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
