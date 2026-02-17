"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, GraduationCap } from "lucide-react";

interface EducationProps {
  university: string;
  program: string;
  major: string;
  graduation: string;
  courses: string[];
  transcriptUrl: string;
}

export default function Education({
  university,
  program,
  major,
  graduation,
  courses,
  transcriptUrl,
}: EducationProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleCourses = showAll ? courses : courses.slice(0, 5);

  const courseVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white dark:bg-[var(--surface-elevated)] rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500"></div>

      <div className="p-6 sm:p-8">
        {/* Header with icon */}
        <div className="flex items-start gap-3 mb-5">
          <div className="p-2.5 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/60 transition-colors">
            <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide font-semibold mb-1">
              {university}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-400 dark:to-indigo-500 bg-clip-text text-transparent mb-2">
              {program}
            </h3>
            <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              {major}
            </p>
          </div>
        </div>

        {/* Graduation date */}
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          Graduation: <span className="font-semibold text-gray-600 dark:text-gray-300">{graduation}</span>
        </p>

        {/* Courses */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-3">
            Courses
          </h4>
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            animate="visible"
          >
            {visibleCourses.map((course, idx) => (
              <motion.span
                key={idx}
                custom={idx}
                variants={courseVariants}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-medium border border-indigo-200 dark:border-indigo-500/30 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
              >
                {course}
              </motion.span>
            ))}
          </motion.div>

          {courses.length > 5 && (
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="mt-3 text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              whileHover={{ x: 4 }}
            >
              {showAll ? "Show Less" : `Show ${courses.length - 5} More`}
            </motion.button>
          )}
        </div>

        {/* Transcript Download Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href={transcriptUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Download className="w-4 h-4" />
            Download Transcript
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
