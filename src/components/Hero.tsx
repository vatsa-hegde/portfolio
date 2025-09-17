"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 md:px-10 transition-colors duration-500 ease-in-out overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent dark:from-indigo-900/40 pointer-events-none"></div>

      {/* Floating background shapes */}
      <motion.div
        className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-indigo-400/20 dark:bg-indigo-900/30 top-1/4 left-1/4 blur-3xl pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full bg-pink-400/20 dark:bg-pink-900/30 bottom-1/4 right-1/4 blur-3xl pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
      />

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <motion.img
          src="photo.webp"
          alt="Shreevatsa Ganapathy Hegde"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full shadow-xl border-4 border-white dark:border-gray-800 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Shreevatsa Ganapathy Hegde
      </motion.h1>

      {/* Short Description */}
      <motion.div
        className="mt-4 max-w-md sm:max-w-xl md:max-w-2xl text-gray-700 dark:text-gray-300 text-center space-y-2 px-2 sm:px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p>
          Software Engineer & Researcher passionate about{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            distributed systems
          </span>{" "}
          and{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            cloud computing
          </span>
          .
        </p>
        <p>
          Building scalable{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            web applications
          </span>{" "}
          and delivering impactful software solutions.
        </p>
        <p>
          Exploring{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            AI
          </span>
          -driven and{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            cloud-native projects
          </span>
          .
        </p>
      </motion.div>

      {/* Call-to-action buttons */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="/resume"
          className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition text-sm sm:text-base"
        >
          View Resume
        </a>
        <a
          href="/contact"
          className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 font-medium shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition text-sm sm:text-base"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
