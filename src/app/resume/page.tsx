"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  GitBranch,
  Zap,
  Award,
  CheckCircle,
  Download,
  Mail,
  Clock,
  Briefcase,
} from "lucide-react";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Distributed Systems",
  "AWS",
  "Docker",
];

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-16 px-4 sm:px-6 md:px-20 bg-white dark:bg-[var(--background)] transition-colors duration-500 ease-in-out relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent dark:from-indigo-500/20 pointer-events-none"></div>

      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Resume
      </motion.h2>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Left: Skills-first intro */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              How I see my work
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I focus on solving high-impact problems with reliable, maintainable systems. I
              prioritize clear APIs, observable services, and fast developer feedback loops.
              Below are my core technical strengths and a concise view of my recent experience.
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Core Skills
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm flex items-center gap-1 inline-flex"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Selected accomplishments
              </h4>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <Server className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Designed and implemented event-driven services for production workloads.</span>
                </li>
                <li className="flex gap-2">
                  <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Improved API performance and observability in multi-service systems.</span>
                </li>
                <li className="flex gap-2">
                  <GitBranch className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Built end-to-end prototypes to validate architecture decisions quickly.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download="Shreevatsa_Hegde_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium shadow hover:bg-indigo-700 transition"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[var(--surface-elevated)] text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-white/10 hover:shadow-md transition"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right: Timeline + preview */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-[var(--surface-elevated)]">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Recent Experience
              </h4>
              <ol className="relative border-l border-gray-200 dark:border-white/10 ml-2">
                <li className="mb-6 ml-4">
                  <div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-1 -left-1.5 border border-white dark:border-[var(--surface-elevated)]"></div>
                  <time className="mb-1 text-xs font-normal leading-none text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Jan 2026 — Present
                  </time>
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    Software Engineering Intern — Greensand AI
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Built an AI evaluation platform and backend APIs to run large-scale evaluations.</p>
                </li>
                <li className="mb-6 ml-4">
                  <div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-1 -left-1.5 border border-white dark:border-[var(--surface-elevated)]"></div>
                  <time className="mb-1 text-xs font-normal leading-none text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Jun 2025 — Present
                  </time>
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    Graduate Research Assistant — UW Bothell
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Led audio transcription system work and optimized backend APIs.</p>
                </li>
                <li className="mb-0 ml-4">
                  <div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-1 -left-1.5 border border-white dark:border-[var(--surface-elevated)]"></div>
                  <time className="mb-1 text-xs font-normal leading-none text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Dec 2021 — Aug 2024
                  </time>
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    Software Engineer — Accenture
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Built enterprise REST APIs and improved performance for production systems.</p>
                </li>
              </ol>

              <div className="mt-6">
                <div className="rounded-md overflow-hidden border border-gray-100 dark:border-white/5">
                  <iframe src="/resume.pdf" title="Resume preview" className="w-full h-56 sm:h-72 md:h-80" />
                </div>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Preview — use the download button for the full printable PDF.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
