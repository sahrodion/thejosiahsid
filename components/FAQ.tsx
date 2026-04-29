"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const faqs = [
  {
    question: "Do I need a bass guitar to start?",
    answer:
      "Not immediately. We can discuss what you need in your free discovery call. For the first session, just show up — we'll figure out equipment together.",
  },
  {
    question: "What do I need for a virtual lesson?",
    answer:
      "A phone or laptop with a camera, a stable internet connection, and your bass once you have one. That's it.",
  },
  {
    question: "How long until I can play in church?",
    answer:
      "Most students are playing simple songs within 4–6 weeks and feel stage-ready within 8–12 weeks, depending on how consistently they practise.",
  },
  {
    question: "What if I miss a session?",
    answer:
      "No problem. Sessions can be rescheduled with 24 hours notice. Life happens.",
  },
  {
    question: "Are lessons suitable for adults?",
    answer:
      "Absolutely. Most of my students are adults with jobs and busy lives. Lessons are relaxed, judgement-free, and paced for you.",
  },
  {
    question: "What style of music do you teach?",
    answer:
      "Primarily gospel and contemporary worship, but the foundations apply to any genre. If you have specific songs you want to learn, we work those in.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-espresso-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell"
      >
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="section-label">Questions</p>
          <h2 className="mt-4 font-playfair text-4xl font-bold text-parchment md:text-6xl">
            Common Questions
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-mahogany/30 bg-espresso-800 transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-[0_4px_24px_rgba(200,133,58,0.15)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-playfair font-medium text-parchment"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-none text-amber transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                      <p className="px-6 pb-5 leading-7 text-parchment-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
