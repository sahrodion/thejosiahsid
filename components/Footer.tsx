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
    <footer className="border-t border-black-700 bg-black-950 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="section-shell"
      >
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          <div>
            <Link href="/" className="font-playfair text-xl font-bold text-white">
              Josiah Sid
            </Link>
            <p className="mt-3 text-sm text-white-muted">
              Bass Guitar Lessons for Beginners | Worship, Gospel and Beyond
            </p>
          </div>

          <div className="space-y-2 text-sm text-white-muted">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block transition hover:text-white"
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black-700 text-white-muted transition hover:border-white hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-black-700 pt-6 text-center text-sm text-accent-muted">
          © 2026 Josiah Sid. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
