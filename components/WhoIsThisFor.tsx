"use client";

import { motion, type Variants } from "framer-motion";
import { Calendar, Church, Headphones, Map, Music, User } from "lucide-react";

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

const cards = [
  {
    icon: Music,
    title: "You're Starting From Zero",
    description:
      "You've never played bass before or barely picked one up. No prior musical experience needed — this programme was built specifically for people who are starting from nothing.",
    className: "p-8 lg:col-span-3",
  },
  {
    icon: Church,
    title: "You Want to Play Worship or Gospel",
    description:
      "You're drawn to worship, gospel, or Afrobeat — and bass is the instrument you want to master. These styles are at the heart of everything taught here.",
    className: "p-8 lg:col-span-3",
  },
  {
    icon: Calendar,
    title: "You Have a Busy Schedule",
    description:
      "Lessons are fully virtual and flexible. No commute, no fixed studio times. Built around your life, not the other way around.",
    className: "p-6 lg:col-span-2",
  },
  {
    icon: Map,
    title: "You Want a Clear Plan",
    description:
      "No YouTube rabbit holes. A structured 8-week path from your first note to playing full songs with confidence.",
    className: "p-6 lg:col-span-2",
  },
  {
    icon: User,
    title: "You're an Adult Learner",
    description:
      "No pressure, no embarrassment. Lessons are paced for adults with real lives and real schedules.",
    className: "p-6 lg:col-span-2",
  },
  {
    icon: Headphones,
    title: "You Learn Better 1-to-1",
    description:
      "Every lesson is tailored to exactly where you are right now. No generic class curriculum — just focused, personal coaching.",
    className: "p-6 lg:col-span-2 lg:col-start-3",
  },
];

function AudienceCard({
  card,
}: {
  card: (typeof cards)[number];
}) {
  const Icon = card.icon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -4,
        boxShadow: "0 0 28px rgba(255, 255, 255, 0.16)",
      }}
      className={`rounded-xl border-l-4 border-white bg-black-800 transition ${card.className}`}
    >
      <Icon className="h-8 w-8 text-white" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
      <p className="mt-3 leading-7 text-white-muted">{card.description}</p>
    </motion.article>
  );
}

export default function WhoIsThisFor() {
  return (
    <section className="section-padding bg-black-950">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell"
      >
        <motion.p variants={fadeUp} className="section-label">
          Is This You?
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-4 font-playfair text-4xl font-bold text-white md:text-6xl"
        >
          This Is For You If...
        </motion.h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {cards.map((card) => (
            <AudienceCard key={card.title} card={card} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
