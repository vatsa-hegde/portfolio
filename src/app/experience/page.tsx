"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Code2, Calendar, Building2, FileText } from "lucide-react";

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
    title: "Software Engineering Intern",
    company: "Greensand AI, Seattle, Washington",
    period: "Jan 2026 – Present",
    description:
      "Building an AI evaluation platform to validate LLM outputs and systematically measure model quality with automated comparisons.",
    technologies: ["Django", "Python", "React", "TypeScript"],
    details:
      "Built an AI evaluation platform to validate LLM outputs against curated inputs and expected outputs, enabling systematic measurement of model quality. Designed and implemented Django (Python) backend APIs to run evaluations, persist results, and compute metrics such as accuracy, completeness, and determinism. Developed a React and TypeScript web interface to manage 50+ test cases, trigger evaluations, and compare outputs. Enabled automated, repeatable comparisons to detect regressions and inconsistencies in AI model behavior.",
  },
  {
    title: "Graduate Research Assistant",
    company: "University of Washington, Bothell, Washington",
    period: "Jun 2025 – Present",
    description:
      "Led technical execution of an audio transcription system with end-to-end ownership including API optimization and CI/CD automation.",
    technologies: ["Flask", "Python", "PostgreSQL", "Firebase", "React", "GitHub Actions"],
    details:
      "Led technical execution of an audio transcription system, driving design decisions across a 5-member engineering team. Built backend services to ingest audio data, generate time-frequency representations, and expose APIs for linguistic analysis. Improved API performance by 40% by optimizing Flask services and PostgreSQL/Firebase queries backing React interfaces. Owned end-to-end delivery, including CI/CD automation using GitHub Actions and authoring technical documentation, aligned with Software Development Lifecycle (SDLC) best practices.",
  },
  {
    title: "Teaching Assistant",
    company: "University of Washington, Bothell, Washington",
    period: "Mar 2025 – Jun 2025",
    description:
      "Mentored students on system architecture and software engineering best practices across 15+ engineering projects.",
    technologies: ["System Design", "Code Review", "Documentation"],
    details:
      "Mentored students by reviewing system architecture, data flow, and correctness across 15+ software engineering projects. Provided technical feedback focused on maintainability, consistency, and production-readiness.",
  },
  {
    title: "Software Engineer",
    company: "Accenture, Bengaluru, India",
    period: "Dec 2021 – Aug 2024",
    description:
      "Built enterprise REST APIs and resolved production issues while optimizing system performance for millions of customers.",
    technologies: ["Java", "Spring Boot", "REST APIs", "SonarQube", "Agile"],
    details:
      "Built and maintained 6+ Java Spring Boot REST APIs using MVC and layered design patterns for enterprise mortgage and payments workflows, supporting transactions, payments, and mortgage calculations for over 2M customers. Resolved 100+ production issues through systematic debugging, refactoring, and troubleshooting, leveraging SonarQube to address code quality, security, and test coverage gaps in an agile environment. Reduced API latency by 30% by optimizing data structures, query execution paths, and validation and error-handling logic.",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Khetra Agritech Private Limited, Bangalore, India",
    period: "Jul 2020 – Sep 2020",
    description:
      "Built a complete farmer-to-buyer e-commerce platform in 6 weeks to streamline crop sales and eliminate supply chain middlemen.",
    technologies: ["Flask", "React.js", "MongoDB", "Node.js"],
    details:
      "Implemented a farmer-to-buyer platform from scratch in 6 weeks using Flask backend and React.js frontend to streamline crop sales, reducing middlemen and enabling direct market access for 50+ farmers. Designed and built RESTful APIs with Flask to handle user authentication, crop listings, and transaction management. Developed a responsive React.js frontend with intuitive UI/UX for both farmers and buyers. Implemented MongoDB for scalable document storage and Node.js utilities for background processing. Optimized the application to achieve 96/100 Lighthouse score for performance and SEO, enhancing load time to under 1.2s through code splitting, asset optimization, and efficient database queries. Increased transaction efficiency by 20% and enabled farmers to directly reach buyers, significantly improving profit margins and market accessibility.",
  },
];

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const createSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  useEffect(() => {
    const scrollToHash = () => {
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      if (!hash) return;
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // small timeout to allow layout to settle
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 60);
      }
    };

    // initial attempt
    scrollToHash();

    // react to future hash changes (back/forward or repeated clicks)
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

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
                  className={`w-full sm:w-[calc(50%-2rem)] flex justify-center pl-12 sm:pl-0 sm:ml-8 ${
                    isLeft ? "sm:order-1 sm:pr-10" : "sm:order-3 sm:pl-10"
                  }`}
                >
                  <motion.article
                    id={createSlug(exp.title)}
                    className="group relative w-full max-w-md rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[var(--surface-elevated)] shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -4, scale: 1.01 }}
                    onClick={() => setSelectedExp(exp)}
                  >
                    {/* Date badge - like a map stop */}
                    <div className="absolute -top-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow-md whitespace-nowrap">
                      <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
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
                            className="px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 flex items-center gap-1 inline-flex"
                          >
                            <Code2 className="w-3 h-3" />
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
