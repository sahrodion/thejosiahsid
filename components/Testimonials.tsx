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

const testimonials = [
  {
    quote:
      "I had no idea where to start with bass. After just four weeks I was playing along to songs at home. The lessons are so clear and there's no pressure.",
    name: "Sarah M., Church Worship Team Member",
  },
  {
    quote:
      "I tried YouTube for months and got nowhere. Having a structured plan and someone to guide me every week made all the difference.",
    name: "David K., Adult Beginner",
  },
  {
    quote:
      "Jo teaches in a way that actually makes sense. I went from not knowing how to hold the bass to playing in church within two months.",
    name: "Temi A., Worship Team Bassist",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-espresso-900">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-shell"
      >
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="section-label">Student Results</p>
          <h2 className="mt-4 font-playfair text-4xl font-bold text-parchment md:text-6xl">
            What Students Say
          </h2>
          <p className="mt-5 text-lg text-parchment-muted">
            Early students. Real feedback.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={fadeUp}
              className="rounded-xl border-l-4 border-amber bg-espresso-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-[0_4px_24px_rgba(200,133,58,0.15)]"
            >
              <div className="font-playfair text-6xl leading-none text-amber">
                "
              </div>
              <p className="mt-2 leading-7 text-parchment">{testimonial.quote}</p>
              <p className="mt-6 text-sm font-semibold text-parchment-dark">
                — {testimonial.name}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-center text-sm italic text-parchment-muted"
        >
          *Testimonials from founding students.
        </motion.p>
      </motion.div>
    </section>
  );
}
