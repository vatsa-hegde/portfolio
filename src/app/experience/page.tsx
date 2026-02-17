"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

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

  return (
    <section className="relative min-h-screen py-16 sm:py-24 bg-[var(--background)] transition-colors duration-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-indigo-500/10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <MapPin className="w-4 h-4" />
            Career Journey
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A timeline of roles and growth
          </p>
        </motion.div>

        {/* Time map: central line + alternating cards */}
        <div className="relative">
          {/* Mobile: left timeline line */}
          <div className="sm:hidden absolute left-5 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-indigo-200 via-indigo-500 to-indigo-200 dark:from-indigo-900 dark:via-indigo-500 dark:to-indigo-900" />
          {/* Desktop: central journey line */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 sm:w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-200 via-indigo-500 to-indigo-200 dark:from-indigo-900 dark:via-indigo-500 dark:to-indigo-900" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="relative flex flex-col sm:flex-row sm:items-center gap-0 mb-12 sm:mb-16 last:mb-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Mobile: dot on timeline */}
                <div className="sm:hidden absolute left-5 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500 ring-2 ring-white dark:ring-[var(--background)] z-10" />
                {/* Card - alternating sides on desktop */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] flex justify-center pl-12 sm:pl-0 ${
                    isLeft ? "sm:order-1 sm:pr-10" : "sm:order-3 sm:pl-10"
                  }`}
                >
                  <motion.article
                    className="group relative w-full max-w-md rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[var(--surface-elevated)] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -4, scale: 1.01 }}
                    onClick={() => setSelectedExp(exp)}
                  >
                    {/* Date badge - like a map stop */}
                    <div className="absolute -top-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow-md">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>

                    <div className="p-5 pt-6 sm:p-6 cursor-pointer">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white pr-8">
                        {exp.title}
                      </h3>
                      <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        {exp.company}
                      </p>
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md text-xs text-gray-500">
                            +{exp.technologies.length - 4}
                          </span>
                        )}
                      </div>
                      <p className="mt-4 text-xs font-medium text-indigo-600 dark:text-indigo-400 group-hover:underline">
                        Learn more →
                      </p>
                    </div>

                    {/* Connector line from card to center */}
                    <div
                      className={`hidden sm:block absolute top-1/2 w-8 h-0.5 bg-indigo-300 dark:bg-indigo-600 -translate-y-1/2 ${
                        isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"
                      }`}
                    />
                  </motion.article>
                </div>

                {/* Center node - dot on the timeline */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 flex-shrink-0 items-center justify-center z-10 sm:order-2">
                  <motion.div
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-indigo-600 dark:bg-indigo-500 ring-4 ring-white dark:ring-[var(--background)] shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: index * 0.1 + 0.2 }}
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className={`hidden sm:block w-[calc(50%-2rem)] ${isLeft ? "sm:order-3" : "sm:order-1"}`} />
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
            onClick={() => setSelectedExp(null)}
          >
            <motion.div
              className="bg-white dark:bg-[var(--surface-elevated)] rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-2xl p-4 sm:p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white pr-8">
                  {selectedExp.title}
                </h3>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                  {selectedExp.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                {selectedExp.company}
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {selectedExp.details}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedExp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs sm:text-sm rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Close"
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
