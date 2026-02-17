"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featured = [
  {
    title: "Cloud-Native Messaging Application on AWS",
    desc: "Event-driven serverless chat platform with React, AppSync, Lambda, and Cognito.",
    tags: ["React", "TypeScript", "AWS", "Lambda", "DynamoDB"],
  },
  {
    title: "Distributed Task Execution with Apache ZooKeeper",
    desc: "ZooKeeper-based coordination for dynamic task assignment and graph processing.",
    tags: ["Java", "ZooKeeper", "Distributed Systems"],
  },
  {
    title: "Real-Time Flight Data Analysis with Apache Storm",
    desc: "Stream processing system to analyze and filter live ADS-B flight data.",
    tags: ["Apache Storm", "Java", "Real-time"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-white dark:bg-[var(--background)] transition-colors duration-500">
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
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, idx) => (
            <motion.article
              key={project.title}
              className="group p-5 sm:p-6 rounded-xl bg-gray-50 dark:bg-[var(--surface)] border border-gray-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.2)" }}
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                {project.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
