"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const features = [
  "Fully personalised to your level",
  "Structured lesson with a clear weekly plan",
  "Practice notes sent after every session",
  "Flexible scheduling around your life",
  "Zoom or Google Meet — your choice",
  "Cancel or reschedule with 24hrs notice",
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-black-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell"
      >
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="section-label">Investment</p>
          <h2 className="mt-4 font-playfair text-4xl font-bold text-white md:text-6xl">
            Simple, Transparent Pricing
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="mx-auto mt-12 max-w-md">
          <div className="rounded-2xl border-2 border-white bg-black-800 p-8 shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
              1-to-1 Virtual Lesson
            </p>
            <div className="mt-6">
              <span className="font-playfair text-6xl font-bold text-white">
                £25
              </span>
              <p className="mt-2 text-white-muted">per 45-minute session</p>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3 text-white">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(255, 255, 255, 0.22)" }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 flex w-full justify-center rounded-full bg-white py-4 font-semibold text-black-950 transition hover:bg-white-off"
            >
              Book Your Free 20-Min Chat
            </motion.a>
          </div>
          <p className="mt-4 text-center text-sm text-white-muted">
            First session is a free 20-minute discovery call — no commitment,
            just a conversation.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
