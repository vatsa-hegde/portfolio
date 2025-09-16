"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex flex-col items-center justify-center px-6 py-20 transition-colors duration-500 ease-in-out relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent dark:from-indigo-900/40 pointer-events-none"></div>

      {/* Animated subtle overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-indigo-500/10 dark:from-indigo-900/20 dark:to-indigo-900/20 pointer-events-none"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Card container */}
      <motion.div
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 max-w-2xl w-full text-center flex flex-col items-center gap-6 transition-colors duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Get in Touch
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          Have a project or opportunity? I’d love to connect. Reach out to me anytime via email, phone, or social platforms.
        </p>

        {/* Mail Me Button */}
        <motion.a
          href="mailto:sghegde@uw.edu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Mail Me
        </motion.a>

        {/* Phone number */}
        <motion.a
          href="tel:+11234567890" // Replace with your actual phone number
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 mt-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <FaPhone />
          +1 425 471 1440
        </motion.a>

        {/* Social icons */}
        <div className="flex gap-6 text-2xl text-gray-700 dark:text-gray-300 mt-4">
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
            className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
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
