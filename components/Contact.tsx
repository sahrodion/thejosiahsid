"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const inputClass =
  "w-full rounded-xl border border-mahogany/40 bg-espresso-800 px-4 py-3 text-parchment outline-none transition placeholder:text-parchment-muted/70 focus:border-amber";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(false);

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
          phone: formData.phone,
          source: formData.source,
          message: formData.message,
          subject: "New Bass Lesson Enquiry — Josiah Sid",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-espresso-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell"
      >
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="section-label">Get Started</p>
          <h2 className="mt-4 font-playfair text-4xl font-bold text-parchment md:text-6xl">
            Let's Get Started
          </h2>
          <p className="mt-5 text-lg leading-8 text-parchment-muted">
            Book your free 20-minute discovery call. No commitment — just a
            conversation about where you are and where you want to get to.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div variants={fadeUp}>
            {submitted ? (
              <div className="flex min-h-[32rem] flex-col items-center justify-center rounded-2xl border border-mahogany/40 bg-espresso-800 p-8 text-center shadow-glow">
                <CheckCircle2 className="h-16 w-16 text-amber" />
                <h3 className="mt-6 font-playfair text-3xl font-bold text-parchment">
                  You're all booked in!
                </h3>
                <p className="mt-4 max-w-md leading-7 text-parchment-muted">
                  I'll be in touch within 24 hours to confirm your free
                  discovery call. Check your email for confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-parchment-muted">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-parchment-muted">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="mb-1 block text-sm text-parchment-muted">
                    WhatsApp Number
                  </label>
                  <input
                    id="whatsapp"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="source" className="mb-1 block text-sm text-parchment-muted">
                    How did you hear about us?
                  </label>
                  <select
                    id="source"
                    name="source"
                    required
                    value={formData.source}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>Church</option>
                    <option>Friend or Family</option>
                    <option>Social Media</option>
                    <option>Google</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-parchment-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me a little about yourself and why you want to learn bass"
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(200, 133, 58, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-full border border-amber/40 bg-mahogany py-4 font-semibold text-parchment transition-all duration-300 hover:border-amber hover:bg-mahogany-light"
                >
                  {loading ? "Sending..." : "Book My Free Chat"}
                </motion.button>
                {error ? (
                  <p className="mt-2 text-sm text-amber-light">
                    Something went wrong. Please try again or message me on
                    WhatsApp.
                  </p>
                ) : null}
              </form>
            )}
          </motion.div>

          <motion.aside
            variants={fadeUp}
            className="rounded-2xl border border-mahogany/40 bg-espresso-800 p-8"
          >
            <h3 className="font-playfair text-3xl font-bold text-parchment">
              Prefer to reach out directly?
            </h3>
            <div className="mt-8 space-y-5">
              <a
                href="https://wa.me/447438164744?text=Hi%20Josiah%2C%20I%27m%20interested%20in%20bass%20lessons"
                className="flex items-center gap-4 rounded-xl border border-mahogany/40 p-4 transition-all duration-300 hover:border-amber/60 hover:bg-espresso-700 hover:shadow-[0_4px_24px_rgba(200,133,58,0.15)]"
              >
                <MessageCircle className="h-6 w-6 text-amber" />
                <span className="font-medium text-parchment">Message on WhatsApp</span>
              </a>
              <a
                href="mailto:thejosiahsidbass@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-mahogany/40 p-4 transition-all duration-300 hover:border-amber/60 hover:bg-espresso-700 hover:shadow-[0_4px_24px_rgba(200,133,58,0.15)]"
              >
                <Mail className="h-6 w-6 text-amber" />
                <span className="font-medium text-parchment">thejosiahsidbass@gmail.com</span>
              </a>
            </div>
            <p className="mt-8 text-parchment-muted">
              You do not need to have everything figured out before reaching
              out. We will talk through your goals, your schedule, and the best
              first step.
            </p>
            <p className="mt-6 italic text-parchment-dark">
              I typically respond within a few hours.
            </p>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
