"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[var(--background)] dark:to-[var(--surface)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 transition-colors duration-500 ease-in-out relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent dark:from-indigo-500/20 pointer-events-none"></div>

      {/* Animated subtle overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-indigo-500/10 dark:from-indigo-500/15 dark:to-indigo-500/15 pointer-events-none"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Card container */}
      <motion.div
        className="relative bg-white dark:bg-[var(--surface-elevated)] rounded-2xl shadow-2xl p-6 sm:p-10 max-w-lg sm:max-w-2xl w-full text-center flex flex-col items-center gap-6 transition-colors duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2">
          <Send className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          Get in Touch
        </h1>

        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
          Have a project or opportunity? I’d love to connect. Reach out to me
          anytime via email, phone, or social platforms.
        </p>

        {/* Mail Me Button */}
        <motion.a
          href="mailto:sghegde@uw.edu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition text-sm sm:text-base inline-flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Mail Me
        </motion.a>

        {/* Phone number */}
        <motion.a
          href="tel:+14254711440"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 mt-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          +1 425 471 1440
        </motion.a>

        {/* Social icons */}
        <div className="flex gap-4 sm:gap-6 text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mt-4 flex-wrap justify-center">
          <motion.a
            href="https://github.com/vatsa-hegde"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/shreevatsa-g-hegde"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:sghegde@uw.edu"
            whileHover={{ scale: 1.2 }}
            className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </motion.div>
    </main>
  );
}
