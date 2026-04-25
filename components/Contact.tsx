"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const inputClass =
  "w-full rounded-xl border border-black-700 bg-black-800 px-4 py-3 text-white outline-none transition placeholder:text-white-muted/70 focus:border-white";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-black-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell"
      >
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="section-label">Get Started</p>
          <h2 className="mt-4 font-playfair text-4xl font-bold text-white md:text-6xl">
            Let's Get Started
          </h2>
          <p className="mt-5 text-lg leading-8 text-white-muted">
            Book your free 15-minute discovery call. No commitment — just a
            conversation about where you are and where you want to get to.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div variants={fadeUp}>
            {submitted ? (
              <div className="flex min-h-[32rem] flex-col items-center justify-center rounded-2xl border border-white/40 bg-black-800 p-8 text-center shadow-glow">
                <CheckCircle2 className="h-16 w-16 text-white" />
                <h3 className="mt-6 font-playfair text-3xl font-bold text-white">
                  You're booked in!
                </h3>
                <p className="mt-4 max-w-md leading-7 text-white-muted">
                  I'll be in touch within 24 hours to confirm your free
                  discovery call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-white-muted">
                    Full Name
                  </label>
                  <input id="name" name="name" type="text" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-white-muted">
                    Email Address
                  </label>
                  <input id="email" name="email" type="email" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="mb-1 block text-sm text-white-muted">
                    WhatsApp Number
                  </label>
                  <input id="whatsapp" name="whatsapp" type="tel" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="source" className="mb-1 block text-sm text-white-muted">
                    How did you hear about us?
                  </label>
                  <select id="source" name="source" required className={inputClass}>
                    <option value="">Select one</option>
                    <option>Church</option>
                    <option>Friend or Family</option>
                    <option>Social Media</option>
                    <option>Google</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-white-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me a little about yourself and why you want to learn bass"
                    className={inputClass}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255, 255, 255, 0.22)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-full bg-white py-4 font-semibold text-black-950 transition hover:bg-white-off"
                >
                  Book My Free Chat
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.aside
            variants={fadeUp}
            className="rounded-2xl border border-black-700 bg-black-800 p-8"
          >
            <h3 className="font-playfair text-3xl font-bold text-white">
              Prefer to reach out directly?
            </h3>
            <div className="mt-8 space-y-5">
              <a
                href="https://wa.me/447438164744?text=Hi%20Josiah%2C%20I%27m%20interested%20in%20bass%20lessons"
                className="flex items-center gap-4 rounded-xl border border-black-700 p-4 transition hover:border-white hover:bg-black-700"
              >
                <MessageCircle className="h-6 w-6 text-white" />
                <span className="font-medium text-white">Message on WhatsApp</span>
              </a>
              <a
                href="mailto:thejosiahsidbass@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-black-700 p-4 transition hover:border-white hover:bg-black-700"
              >
                <Mail className="h-6 w-6 text-white" />
                <span className="font-medium text-white">thejosiahsidbass@gmail.com</span>
              </a>
            </div>
            <p className="mt-8 text-white-muted">
              You do not need to have everything figured out before reaching
              out. We will talk through your goals, your schedule, and the best
              first step.
            </p>
            <p className="mt-6 italic text-accent-muted">
              I typically respond within a few hours.
            </p>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
