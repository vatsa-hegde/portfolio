"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Mail } from "lucide-react";

const SCROLL_THRESHOLD = 60;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 24 },
  },
};

export default function Hero() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) setShowScrollHint(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 transition-colors duration-500 ease-in-out overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent dark:from-indigo-500/20 pointer-events-none" />

      {/* Floating background shapes */}
      <motion.div
        className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-indigo-400/20 dark:bg-indigo-500/20 top-1/4 left-1/4 blur-3xl pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full bg-pink-400/20 dark:bg-pink-900/30 bottom-1/4 right-1/4 blur-3xl pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
      />

      {/* Two-column layout */}
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14 lg:gap-20">
        {/* Left: Photo */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.img
              src="/photo.webp"
              alt="Shreevatsa Ganapathy Hegde"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl object-cover shadow-2xl ring-4 ring-white/50 dark:ring-[var(--surface-elevated)]/80"
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
              }}
            />
            <motion.div
              className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-indigo-400/30 to-purple-500/30 blur-xl dark:from-indigo-500/20 dark:to-purple-600/20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>
        </motion.div>

        {/* Right: Details */}
        <motion.div
          className="text-center md:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
          >
            Shreevatsa Ganapathy Hegde
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg text-gray-700 dark:text-gray-300 sm:text-xl"
          >
            Software Engineer & Researcher ·{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Distributed systems
            </span>
            ,{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              cloud
            </span>
            , and full-stack development
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Building scalable systems and collaborative platforms. Currently at the University of
            Washington, leading distributed computing research while staying hands-on with
            full-stack development and cloud-native architecture.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5"
          >
            <motion.a
              href="/resume"
              className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 text-sm sm:text-base gap-2"
              whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight className="w-4 h-4" />
              View Resume
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-gray-200 text-gray-900 dark:bg-[var(--surface-elevated)] dark:text-gray-100 font-medium shadow hover:bg-gray-300 dark:hover:bg-[var(--surface)] text-sm sm:text-base border border-gray-300/50 dark:border-white/10 gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.a
            href="#about"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 1.2, duration: 0.6 } },
              exit: { opacity: 0, y: 8, transition: { duration: 0.25 } },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-label="Scroll to see more"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6" strokeWidth={2.5} />
            </motion.span>
          </motion.a>
        )}
      </AnimatePresence>
    </section>
  );
}
