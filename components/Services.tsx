"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

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
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    name: "1-to-1 Lesson",
    price: "£25 per session",
    duration: "45 minutes",
    description:
      "Fully personalised virtual lessons built around where you are and where you want to get to.",
    features: [
      "Personalised to your level",
      "Structured weekly plan",
      "Practice notes after every session",
      "Flexible scheduling",
      "Cancel or reschedule anytime",
    ],
    cta: "Book a Lesson",
  },
  {
    name: "8-Week Beginner Programme",
    badge: "Most Popular",
    price: "£180",
    duration: "8 sessions (save £20)",
    description:
      "The complete beginner journey from your first note to playing full songs with confidence.",
    features: [
      "Everything in 1-to-1 lessons",
      "Full 8-week structured curriculum",
      "Progress review at Week 4",
      "Song performance at Week 8",
      "Priority scheduling",
    ],
    cta: "Start the Programme",
    featured: true,
  },
  {
    name: "Worship & Gospel Intensive",
    price: "£100",
    duration: "4 sessions",
    description:
      "Already playing but want to level up for church? This intensive focuses on worship progressions, dynamics, and playing confidently with a band.",
    features: [
      "Worship and gospel progressions",
      "Playing with a live band context",
      "Stage presence and dynamics",
      "Tailored to your church's style",
    ],
    cta: "Book Intensive",
  },
  {
    name: "Music Exam Preparation",
    price: "£30 per session",
    duration: "45 minutes",
    description:
      "Structured preparation for ABRSM or Rockschool bass guitar grades 1–3. Focused, syllabus-aligned, and results driven.",
    features: [
      "Grade 1, 2, and 3 preparation",
      "Scales, pieces, and sight reading",
      "Mock exam run-throughs",
      "Exam technique and confidence",
    ],
    cta: "Book Exam Prep",
  },
  {
    name: "Audition Preparation",
    price: "£40 per session",
    duration: "60 minutes",
    description:
      "Preparing for a worship team audition, school music audition, or band tryout? We work entirely on your specific requirements.",
    features: [
      "Song-specific preparation",
      "Audition technique coaching",
      "Confidence and performance mindset",
      "Flexible — book as many as you need",
    ],
    cta: "Book Audition Prep",
  },
  {
    name: "Crash Course Session",
    price: "£55",
    duration: "90 minutes",
    description:
      "Need to learn a specific song or skill quickly? One intensive session focused entirely on what you need right now.",
    features: [
      "Learn one song start to finish",
      "Tackle a specific technique problem",
      "No ongoing commitment needed",
      "Results in a single session",
    ],
    cta: "Book Crash Course",
  },
];

export default function Services() {
  return (
    <section id="pricing" className="section-padding bg-black-900">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell"
      >
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="section-label">Services</p>
          <h2 className="mt-4 font-playfair text-4xl font-bold text-white md:text-6xl">
            How We Can Work Together
          </h2>
          <p className="mt-5 text-lg leading-8 text-white-muted">
            Whether you're a complete beginner or preparing for something
            specific, there's a path for you.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.name}
              variants={fadeUp}
              className={`relative flex flex-col rounded-2xl bg-black-800 p-6 ${
                service.featured
                  ? "border-2 border-white shadow-glow md:p-8"
                  : "border border-black-700"
              }`}
            >
              {service.badge ? (
                <span className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black-950">
                  {service.badge}
                </span>
              ) : null}
              <h3 className="pr-28 font-playfair text-3xl font-bold text-white">
                {service.name}
              </h3>
              <div className="mt-5">
                <p className="text-3xl font-bold text-white">{service.price}</p>
                <p className="mt-1 text-sm text-white-muted">
                  {service.duration}
                </p>
              </div>
              <p className="mt-5 leading-7 text-white-muted">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-white">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-white" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.22)",
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-8"
              >
                <Link
                  href="#contact"
                  className="flex w-full justify-center rounded-full bg-white py-4 font-semibold text-black-950 transition hover:bg-white-off"
                >
                  {service.cta}
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
