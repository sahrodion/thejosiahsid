"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black-950/85 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a
          href="#top"
          className="font-playfair text-xl font-bold text-white"
          onClick={closeMenu}
        >
          Josiah Sid
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white-muted transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(255, 255, 255, 0.22)" }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-white px-5 py-2 font-semibold text-black-950 transition hover:bg-white-off"
          >
            Book Free Chat
          </motion.a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-full border border-black-700 p-2 text-white md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-white/5 bg-black-950/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-white-muted transition hover:bg-black-800 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <motion.a
                href="#contact"
                onClick={closeMenu}
                whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(255, 255, 255, 0.22)" }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-white px-5 py-3 text-center font-semibold text-black-950"
              >
                Book Free Chat
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
