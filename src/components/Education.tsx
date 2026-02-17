"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface EducationProps {
  university: string;
  program: string;
  major: string;
  graduation: string; // e.g. "June 2026"
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
  const visibleCourses = showAll ? courses : courses.slice(0, 4);

  // Animation variants for courses
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-[var(--surface-elevated)] shadow-lg rounded-xl p-6 mb-8 transition-colors duration-500 ease-in-out"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {university}
      </h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">
        {program} in {major}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Date: {graduation}</p>

      {/* Courses */}
      <div className="mt-4">
        <h4 className="font-semibold text-gray-900 dark:text-gray-100">Courses</h4>
        <motion.div
          className="mt-3 flex flex-wrap gap-2"
          initial="hidden"
          animate="visible"
        >
          {visibleCourses.map((course, idx) => (
            <motion.span
              key={idx}
              custom={idx}
              variants={courseVariants}
              className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {course}
            </motion.span>
          ))}
        </motion.div>

        {courses.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      {/* Transcript Download */}
      <motion.div
        className="mt-4"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <a
          href={transcriptUrl}
          download
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Transcript
        </a>
      </motion.div>
    </motion.div>
  );
}
