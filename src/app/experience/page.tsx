"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  details: string;
}

const experiences: Experience[] = [
  {
    title: "Graduate Research Assistant",
    company: "University of Washington, Bothell, Washington",
    period: "Jun 2025 – Present",
    description:
      "Leading distributed computing and software engineering research projects, building scalable systems and collaborative platforms.",
    technologies: ["Java", "Hazelcast", "RMI", "ConcurrentHashMap"],
    details:
      "Built secure web systems with CI/CD, led a 5-member team to develop a full-stack linguistic transcription platform. Streamlined researcher workflows, improved productivity by 20%, and documented standardized processes to reduce onboarding time by 40%. Implemented mobile agent dispatch and hierarchical result aggregation for distributed tasks.",
  },
  {
    title: "Software Engineer",
    company: "Accenture Solutions Private Limited, Bangalore, India",
    period: "Mar 2023 – Aug 2024",
    description:
      "Designed and developed microservices, REST APIs, and optimized distributed systems for performance and scalability.",
    technologies: ["Spring Boot", "Java", "Jenkins", "Gradle", "SQL"],
    details:
      "Developed 6+ Spring Boot microservices and REST APIs for large-scale distributed systems, reducing latency by 30%. Automated CI/CD pipelines with Jenkins and Gradle, improving deployment time and observability. Mentored junior developers and conducted 100+ code reviews to enhance team coding standards and maintainability.",
  },
  {
    title: "Application Development Associate",
    company: "Accenture Solutions Private Limited, Bangalore, India",
    period: "Dec 2021 – Feb 2023",
    description:
      "Integrated client Learning Management Systems and resolved technical issues to improve user satisfaction.",
    technologies: ["React", "Node.js", "SQL", "Agile"],
    details:
      "Integrated Learning Management System (LMS) with client infrastructure, reducing response times by 10%. Resolved technical issues through debugging and testing, improving system reliability and user satisfaction by 10%. Collaborated closely with cross-functional teams to implement improvements.",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Khetra Agritech Private Limited, Bangalore, India",
    period: "Jul 2020 – Sep 2020",
    description:
      "Developed farmer-to-buyer e-commerce platform and optimized system performance for better efficiency.",
    technologies: ["Flask", "React.js", "MongoDB", "Node.js"],
    details:
      "Implemented a full-stack e-commerce platform enabling direct sales for 50+ farmers, increasing transaction efficiency by 20%. Optimized application performance with Lighthouse score of 96/100, reduced load times under 1.2s, and improved SEO.",
  },
];

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-gray-900 transition-colors duration-500 ease-in-out relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent dark:from-indigo-900/40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12">
          Professional Experience
        </h2>

        <div className="flex flex-col gap-8 sm:gap-10">
          {experiences.map((exp, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: hoveredIndex === index ? 1.03 : 1,
                  opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.6,
                }}
                className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border-l-4 border-blue-600 relative cursor-pointer transition-transform"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-3 top-6 w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900"></span>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title} –{" "}
                    <span className="text-blue-600">{exp.company}</span>
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  onClick={() => setSelectedExp(exp)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition"
                >
                  Learn More
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg w-full max-w-lg sm:max-w-2xl p-4 sm:p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedExp.title} – {selectedExp.company}
                </h3>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {selectedExp.period}
                </span>
              </div>

              <p className="mt-3 sm:mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {selectedExp.details}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {selectedExp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-3 right-3 px-2 sm:px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
