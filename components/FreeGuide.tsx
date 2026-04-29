"use client";

import { motion, type Variants } from "framer-motion";
import { Check, CheckCircle, Download } from "lucide-react";
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
  "w-full rounded-xl border border-mahogany/40 bg-espresso-800 px-4 py-3 text-parchment outline-none transition placeholder:text-parchment-muted/70 focus:border-amber";

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
          access_key: "04b85a11-b6c6-4d4e-9be0-fe1097e24515",
          name: formData.name,
          email: formData.email,
          subject: "Bass Buying Guide Download — New Lead",
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

  // Place bass-buying-guide.pdf in /public folder
  return (
    <section className="section-padding bg-espresso-900">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell grid items-center gap-12 lg:grid-cols-2"
      >
        <motion.div variants={fadeUp}>
          <p className="section-label">Free Resource</p>
          <h2 className="mt-4 font-playfair text-4xl font-bold text-parchment md:text-6xl">
            Not Sure What Bass to Buy?
          </h2>
          <p className="mt-5 text-lg leading-8 text-parchment-muted">
            Download the free Beginner's Bass Buying Guide — what to buy, what
            to avoid, and how to set up your first rig without wasting money.
          </p>

          <ul className="mt-8 space-y-3">
            {guideItems.map((item) => (
              <li key={item} className="flex gap-3 text-parchment-muted">
                <Check className="mt-0.5 h-5 w-5 flex-none text-amber" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs text-parchment-dark">
            Already have it?{" "}
            <a
              href="/bass-buying-guide.pdf"
              download="The-Beginners-Bass-Buying-Guide.pdf"
              className="underline transition-colors hover:text-parchment"
            >
              Download directly here
            </a>
          </p>

          <p className="mt-6 italic text-parchment-dark">
            "I've helped students set up their first rig properly — this guide
            is everything I tell them."
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-mahogany/50 bg-espresso-800 p-5 text-parchment">
              <CheckCircle className="mx-auto text-amber" size={48} />
              <h3 className="mt-4 text-center font-playfair text-2xl font-bold text-parchment">
                Your guide is ready.
              </h3>
              <p className="mt-2 text-center text-parchment-muted">
                Click below to download your free copy of The Beginner's Bass
                Buying Guide.
              </p>
              <a
                href="/bass-buying-guide.pdf"
                download="The-Beginners-Bass-Buying-Guide.pdf"
                target="_blank"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-amber/40 bg-mahogany px-8 py-4 font-semibold text-parchment transition-all duration-300 hover:border-amber hover:bg-mahogany-light hover:shadow-[0_0_20px_rgba(200,133,58,0.3)]"
              >
                <Download className="h-5 w-5" />
                Download Your Free Guide
              </a>
              <p className="mt-3 text-center text-xs text-parchment-muted">
                PDF — Free to keep and share.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="hidden"
                name="subject"
                value="Bass Buying Guide Download Request"
              />
              <div>
                <label htmlFor="guide-name" className="mb-1 block text-sm text-parchment-muted">
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
                <label htmlFor="guide-email" className="mb-1 block text-sm text-parchment-muted">
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
                  boxShadow: "0 0 20px rgba(200, 133, 58, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full border border-amber/40 bg-mahogany py-4 font-semibold text-parchment transition-all duration-300 hover:border-amber hover:bg-mahogany-light"
              >
                {loading ? "Sending..." : "Send Me the Free Guide"}
              </motion.button>
            </form>
          )}
        </motion.div>

        <motion.div variants={fadeUp} className="mx-auto w-full max-w-sm">
          <div className="flex aspect-[3/4] flex-col items-center justify-center rounded-2xl border-2 border-amber bg-espresso-800 p-8 text-center shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber">
              FREE GUIDE
            </p>
            <h3 className="mt-8 font-playfair text-2xl font-bold text-parchment">
              The Beginner's Bass Buying Guide
            </h3>
            <div className="my-6 h-px w-24 bg-mahogany" />
            <p className="text-sm leading-6 text-parchment-muted">
              What to Buy, What to Avoid & How to Set Up Your First Rig
            </p>
            <p className="mt-8 text-sm text-parchment">By Josiah Sid</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
