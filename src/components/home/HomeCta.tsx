"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function HomeCta() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-gray-50 dark:bg-[var(--surface)]/50 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent dark:via-indigo-500/15 pointer-events-none" />
      <motion.div
        className="relative max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-[var(--foreground)] mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-gray-600 dark:text-[var(--muted)] mb-8">
          Open to research collaborations, full-time roles, and impactful projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/resume"
              className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 text-sm sm:text-base gap-2"
            >
              <Zap className="w-4 h-4" />
              View Resume
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white dark:bg-[var(--surface-elevated)] text-gray-900 dark:text-gray-100 font-medium border border-gray-300 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/50 text-sm sm:text-base gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
