"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 px-4 sm:px-6 bg-transparent">
      <motion.nav
        className="mx-auto flex max-w-4xl justify-between items-center rounded-2xl px-5 py-3 sm:px-6 sm:py-3 bg-[linear-gradient(to_bottom,var(--surface),var(--background))] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 transition-colors duration-500 ease-in-out"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.h1
          className="text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link href="/">Shreevatsa Hegde</Link>
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i + 0.2, duration: 0.3 }}
            >
              <Link
                href={link.href}
                className="relative py-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-[width] duration-300 ease-out" />
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <motion.div
          className="md:hidden flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-indigo-600 dark:text-indigo-400 focus:outline-none hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile Dropdown - floating below the bar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-4 right-4 top-full mt-2 rounded-2xl bg-[linear-gradient(to_bottom,var(--surface),var(--background))] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-xl flex flex-col items-center gap-6 py-6 md:hidden z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
