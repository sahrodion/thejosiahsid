"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

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

const guideItems = [
  "Recommended starter basses under £200",
  "When and what amp to buy",
  "Essential extras — strap, cable, tuner",
  "What to avoid as a beginner",
  "Where to buy in the UK",
];

const inputClass =
  "w-full rounded-xl border border-black-700 bg-black-800 px-4 py-3 text-white outline-none transition placeholder:text-white-muted/70 focus:border-white";

export default function FreeGuide() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "784670d9-86c8-44c8-a22e-f271e4f89080",
          name: formData.name,
          email: formData.email,
          subject: "Bass Buying Guide Download Request",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-black-950">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell grid items-center gap-12 lg:grid-cols-2"
      >
        <motion.div variants={fadeUp}>
          <p className="section-label">Free Resource</p>
          <h2 className="mt-4 font-playfair text-4xl font-bold text-white md:text-6xl">
            Not Sure What Bass to Buy?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white-muted">
            Download the free Beginner's Bass Buying Guide — what to buy, what
            to avoid, and how to set up your first rig without wasting money.
          </p>

          <ul className="mt-8 space-y-3">
            {guideItems.map((item) => (
              <li key={item} className="flex gap-3 text-white">
                <Check className="mt-0.5 h-5 w-5 flex-none text-white" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 italic text-white-muted">
            "I've helped students set up their first rig properly — this guide
            is everything I tell them."
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-white bg-black-800 p-5 text-white">
              Check your inbox — the guide is on its way!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="hidden"
                name="subject"
                value="Bass Buying Guide Download Request"
              />
              <div>
                <label htmlFor="guide-name" className="mb-1 block text-sm text-white-muted">
                  First Name
                </label>
                <input
                  id="guide-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="guide-email" className="mb-1 block text-sm text-white-muted">
                  Email Address
                </label>
                <input
                  id="guide-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.22)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-white py-4 font-semibold text-black-950 transition hover:bg-white-off"
              >
                {loading ? "Sending..." : "Send Me the Free Guide"}
              </motion.button>
            </form>
          )}
        </motion.div>

        <motion.div variants={fadeUp} className="mx-auto w-full max-w-sm">
          <div className="flex aspect-[3/4] flex-col items-center justify-center rounded-2xl border-2 border-white bg-black-800 p-8 text-center shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white-muted">
              FREE GUIDE
            </p>
            <h3 className="mt-8 font-playfair text-2xl font-bold text-white">
              The Beginner's Bass Buying Guide
            </h3>
            <div className="my-6 h-px w-24 bg-white" />
            <p className="text-sm leading-6 text-white-muted">
              What to Buy, What to Avoid & How to Set Up Your First Rig
            </p>
            <p className="mt-8 text-sm text-white">By Josiah Sid</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
