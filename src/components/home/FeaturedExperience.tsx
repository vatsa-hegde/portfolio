"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

interface FeaturedExp {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const featured: FeaturedExp[] = [
  {
    title: "Software Engineering Intern",
    company: "Greensand AI, Seattle, Washington",
    period: "Jan 2026 – Present",
    description:
      "Building an AI evaluation platform to validate LLM outputs and systematically measure model quality with automated comparisons.",
    technologies: ["Django", "Python", "React", "TypeScript"],
  },
  {
    title: "Graduate Research Assistant",
    company: "University of Washington, Bothell, Washington",
    period: "Jun 2025 – Present",
    description:
      "Led technical execution of an audio transcription system with end-to-end ownership including API optimization and CI/CD automation.",
    technologies: ["Flask", "Python", "PostgreSQL", "Firebase", "React", "GitHub Actions"],
  },
];

export default function FeaturedExperience() {
  const createSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-gray-50 dark:bg-[var(--surface)]/50 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent dark:via-indigo-500/10 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-[var(--foreground)]">
            Experience
          </h2>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            View all experience
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="space-y-6">
          {featured.map((exp, idx) => (
            <Link key={exp.title} href={`/experience#${createSlug(exp.title)}`} className="block">
              <motion.article
                className="p-5 sm:p-6 rounded-xl bg-white dark:bg-[var(--surface-elevated)] shadow-sm border border-gray-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -4, boxShadow: "0 12px 24px -10px rgba(0,0,0,0.15)" }}
              >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                  <span className="text-indigo-600 dark:text-indigo-400 font-normal">
                    {" "}
                    · {exp.company}
                  </span>
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {exp.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}