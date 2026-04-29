"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-mahogany/30 bg-espresso-950/85 backdrop-blur-xl"
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-playfair text-xl font-bold text-amber"
          onClick={closeMenu}
        >
          Josiah Sid
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 text-sm font-medium transition hover:text-parchment ${
                  isActive
                    ? "border-amber text-amber"
                    : "border-transparent text-parchment-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(200, 133, 58, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/services#contact"
              className="block rounded-full border border-amber/40 bg-mahogany px-5 py-2 font-semibold text-parchment transition-all duration-300 hover:border-amber hover:bg-mahogany-light"
            >
              Book Free Call
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-full border border-mahogany/50 p-2 text-parchment md:hidden"
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
            className="border-t border-mahogany/30 bg-espresso-950/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`rounded-xl border-b-2 px-4 py-3 transition hover:bg-espresso-800 hover:text-parchment ${
                      isActive
                        ? "border-amber text-amber"
                        : "border-transparent text-parchment-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <motion.div
                onClick={closeMenu}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(200, 133, 58, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/services#contact"
                  className="block rounded-full border border-amber/40 bg-mahogany px-5 py-3 text-center font-semibold text-parchment"
                >
                  Book Free Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
