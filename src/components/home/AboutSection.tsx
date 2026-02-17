"use client";

import { motion } from "framer-motion";

const focusAreas = [
  "Distributed Systems",
  "Cloud Computing",
  "Full-Stack Development",
  "Research & Software Engineering",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-white dark:bg-[var(--background)] transition-colors duration-500 scroll-mt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent dark:via-indigo-500/10 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-[var(--foreground)] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I&apos;m a Software Engineer and Researcher with a focus on building scalable systems and
          collaborative platforms. Currently at the University of Washington, I lead distributed
          computing research while staying hands-on with full-stack development, microservices, and
          cloud-native architecture.
        </motion.p>
        <motion.p
          className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I enjoy turning complex problems into clean solutions—whether it&apos;s distributed
          coordination with ZooKeeper, real-time stream processing with Apache Storm, or
          serverless applications on AWS.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {focusAreas.map((area, i) => (
            <motion.span
              key={area}
              variants={{
                hidden: { opacity: 0, y: 12, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                },
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30"
            >
              {area}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
