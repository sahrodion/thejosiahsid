"use client";

import { motion, type Variants } from "framer-motion";
import { Instagram, Music2, Youtube } from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Book a Call", href: "/services#contact" },
];

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "TikTok", href: "#", icon: Music2 },
];

export default function Footer() {
  return (
    <footer className="border-t border-mahogany/40 bg-espresso-950 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-shell"
      >
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          <div>
            <Link href="/" className="font-playfair text-xl font-bold text-amber">
              Josiah Sid
            </Link>
            <p className="mt-3 text-sm text-parchment-muted">
              Bass Guitar Lessons for Beginners | Worship, Gospel and Beyond
            </p>
          </div>

          <div className="space-y-2 text-sm text-parchment-muted">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block transition hover:text-amber"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-4 md:justify-end">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-mahogany/40 text-parchment-muted transition hover:border-amber hover:text-amber"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-mahogany/40 pt-6 text-center text-sm text-parchment-dark">
          © 2026 Josiah Sid. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
