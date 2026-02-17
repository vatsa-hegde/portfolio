"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { createSlug } from "@/lib/projects";

interface FeaturedProject {
  title: string;
  desc: string;
  tags: string[];
}

const featured: FeaturedProject[] = [
  {
    title: "Cloud-Native Messaging Application on AWS",
    desc: "Event-driven serverless chat platform with React, AppSync, Lambda, and Cognito.",
    tags: ["React", "TypeScript", "AWS", "Lambda", "DynamoDB"],
  },
  {
    title: "Real-Time Flight Data Analysis with Apache Storm",
    desc: "Distributed real-time stream processing for live flight data analysis and filtering.",
    tags: ["Apache Storm", "Java", "Distributed Systems"],
  },
  {
    title: "Distributed Inverted Indexing System with Hierarchical Dispatch and Mobile Agents",
    desc: "Advanced distributed indexing with hierarchical dispatch and mobile agent features.",
    tags: ["Java", "Hazelcast", "Distributed Systems"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Showcase of my most impactful work across different domains
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            View All <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, idx) => (
            <Link key={project.title} href={`/projects/${createSlug(project.title)}`}>
              <motion.article
                className="group h-full p-5 sm:p-6 rounded-xl bg-gray-50 dark:bg-[var(--surface)] border border-gray-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors cursor-pointer"
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
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:gap-3 transition-all">                <Zap className="w-4 h-4" />                  Learn More <ArrowRight size={16} />
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        <motion.div
          className="mt-8 sm:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/projects"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 transition-colors"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}