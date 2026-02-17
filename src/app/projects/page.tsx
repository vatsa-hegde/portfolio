"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projectsData, createSlug } from "@/lib/projects";
import { Rocket, Laptop, Share2, Zap } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "full-stack" | "distributed-systems" | "iot">("all");

  const categories = [
    { id: "all", label: "All Projects", icon: Rocket },
    { id: "full-stack", label: "Full-Stack Applications", icon: Laptop },
    { id: "distributed-systems", label: "Distributed Systems", icon: Share2 },
    { id: "iot", label: "IoT Solutions", icon: Zap },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 sm:px-6 lg:px-8 py-16 sm:py-24 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-indigo-500/10 pointer-events-none"></div>
      
      <div className="relative max-w-6xl mx-auto">
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
            Portfolio
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A complete collection of full-stack applications, distributed systems, and IoT solutions spanning multiple domains and technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 sm:px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg"
                  : "bg-white dark:bg-[var(--surface)] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-500/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Results count */}
        <motion.p
          className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Grid of Project Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Link href={`/projects/${createSlug(project.title)}`}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)" }}
                    className="group relative h-full bg-white dark:bg-[var(--surface-elevated)] rounded-2xl border border-gray-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    {/* Top gradient accent */}
                    <div className="h-1 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 group-hover:via-indigo-700 transition-colors"></div>

                    <div className="p-6 sm:p-7 flex flex-col h-full">
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow line-clamp-3">
                        {project.desc}
                      </p>

                      {/* Tech tags preview */}
                      <div className="mb-6 flex flex-wrap gap-1.5">
                        {project.details.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.details.technologies.length > 3 && (
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400">
                            +{project.details.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Learn More Button */}
                      <motion.button
                        className="w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
