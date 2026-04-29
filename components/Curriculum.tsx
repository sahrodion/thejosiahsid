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

const weeks = [
  {
    title: "Your First Notes",
    description:
      "How to hold the bass, finger placement, posture, and playing your very first note cleanly.",
  },
  {
    title: "Rhythm and Timing",
    description:
      "Playing simple grooves with a metronome. Understanding root notes and how they anchor a song.",
  },
  {
    title: "Scales and Movement",
    description:
      "Major and minor scales. Building confidence moving across the fretboard.",
  },
  {
    title: "Church Chord Progressions",
    description:
      "The most common progressions in worship music — I-IV-V, I-VI-IV-V — and how to lock into them.",
  },
  {
    title: "Playing a Real Song",
    description:
      "Put everything together and play along to an actual worship track from start to finish.",
  },
  {
    title: "Tone and Technique",
    description:
      "Muting, dynamics, and sounding clean. The difference between a beginner and someone who sounds polished.",
  },
  {
    title: "Playing With a Drummer",
    description:
      "How to lock in with the kick drum. Understanding your role in the rhythm section.",
  },
  {
    title: "Stage Ready",
    description:
      "Full run-through of two songs. Stage confidence, worship team etiquette, and what comes next.",
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="section-padding bg-espresso-950">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell"
      >
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="section-label">The Journey</p>
          <h2 className="mt-4 font-playfair text-4xl font-bold text-parchment md:text-6xl">
            Your 8-Week Programme
          </h2>
          <p className="mt-5 text-lg leading-8 text-parchment-muted">
            A structured path from complete beginner to confidently playing
            worship songs.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-5 top-0 h-full w-px bg-mahogany/40 md:left-1/2 md:w-[2px] md:-translate-x-1/2" />

          <div className="space-y-8">
            {weeks.map((week, index) => {
              const weekNumber = index + 1;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={week.title}
                  variants={fadeUp}
                  className={`relative grid gap-6 pl-16 md:grid-cols-2 md:pl-0 ${
                    isEven ? "" : "md:[&>article]:col-start-2"
                  }`}
                >
                  <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-amber/40 bg-mahogany text-sm font-bold text-parchment md:left-1/2 md:-translate-x-1/2">
                    {weekNumber}
                  </div>
                  <article
                    className={`rounded-xl border border-mahogany/40 bg-espresso-800 p-6 shadow-2xl shadow-espresso-950/10 transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-[0_4px_24px_rgba(200,133,58,0.15)] ${
                      isEven ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <p className="font-playfair text-sm font-semibold italic tracking-widest text-amber">
                      Week {weekNumber}
                    </p>
                    <h3 className="mt-3 font-playfair text-2xl font-semibold text-parchment">
                      {week.title}
                    </h3>
                    <p className="mt-3 leading-7 text-parchment-muted">
                      {week.description}
                    </p>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
