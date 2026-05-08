"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#how", label: "How it works" },
  { href: "#apps", label: "Apps" },
  { href: "#features", label: "Features" },
  { href: "#download", label: "Download" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-2 sm:top-4 z-50 mx-auto mt-2 sm:mt-4 w-full max-w-[1200px] px-2 sm:px-4"
      >
        <div className="flex items-center justify-between rounded-2xl glass-strong px-4 py-3 sm:px-5">
          <Logo />

          <nav className="hidden md:flex gap-7 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#download"
              className="hidden sm:flex rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground glow transition hover:scale-105 whitespace-nowrap"
            >
              Get the App
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid h-9 w-9 place-items-center rounded-xl glass-strong text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="mt-2 glass-strong rounded-2xl overflow-hidden"
            >
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-5 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors border-b border-white/10 last:border-0"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="p-3">
                  <a
                    href="#download"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-primary-foreground glow"
                  >
                    Get the App
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
