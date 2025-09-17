"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-16 px-4 sm:px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-500 ease-in-out relative"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent dark:from-indigo-900/40 pointer-events-none"></div>

      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Resume
      </motion.h2>

      {/* Resume Preview */}
      <motion.div
        className="flex flex-col items-center relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <iframe
          src="/resume.pdf"
          className="w-full sm:w-11/12 md:w-3/4 h-[400px] sm:h-[500px] md:h-[650px] rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
        ></iframe>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download="Shreevatsa_Hegde_Resume.pdf"
          className="mt-6 inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          {/* Inline SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="mr-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
