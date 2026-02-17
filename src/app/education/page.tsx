"use client";

import { motion } from "framer-motion";
import Education from "@/components/Education";
import { useState } from "react";

export default function EducationPage() {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.03, boxShadow: "0 15px 35px rgba(0,0,0,0.25)" },
  };

  const educationData = [
    {
      university: "University of Washington, Bothell, Washington",
      program: "Master of Science",
      major: "Computer Science and Software Engineering | GPA: 3.95",
      graduation: "March 2026",
      courses: [
        "Internet of Things (IoT)",
        "Machine Learning",
        "Software Architecture",
        "Evaluation of Software Design",
        "Distributed Computing",
        "Research Methods in Software Engineering",
      ],
      transcriptUrl: "/transcripts/UWTranscript.pdf",
    },
    {
      university: "Visvesvaraya Technological University (VTU), Bangalore, India",
      program: "Bachelor of Engineering",
      major: "Computer Science | GPA: 3.94",
      graduation: "August 2021",
      courses: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Operating Systems",
        "Computer Networks",
        "Web Development",
        "Advanced Algorithms",
        "Database Management Systems",
        "Compiler Design",
        "Artificial Intelligence",
      ],
      transcriptUrl: "/transcripts/VTUTranscript.pdf",
    },
  ];

const certificationData = [
  {
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey & Company",
    date: "Jul 2025",
    certificateUrl: "/certificates/McKinseyForwardProgram.pdf", // replace with actual URL
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    date: "Dec 2023",
    certificateUrl: "/certificates/AWSCloudPractitioner.pdf", // replace with actual URL
  },
];


  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-indigo-500/10 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Education Section */}
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
            Education
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Academic background and relevant coursework
          </p>
        </motion.div>

        <div className="space-y-8 mb-20">
          {educationData.map((degree, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              onMouseEnter={() => setFocusedIndex(idx)}
              onMouseLeave={() => setFocusedIndex(null)}
              className={`transition-opacity duration-300 ${
                focusedIndex !== null && focusedIndex !== idx ? "opacity-60" : "opacity-100"
              }`}
            >
              <Education
                university={degree.university}
                program={degree.program}
                major={degree.major}
                graduation={degree.graduation}
                courses={degree.courses}
                transcriptUrl={degree.transcriptUrl}
              />
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20 mt-20 pt-20 border-t border-gray-200 dark:border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Certifications
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Professional Certifications
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Industry-recognized credentials and training programs
          </p>
        </motion.div>

        <div className="space-y-6 mb-20">
          {certificationData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              onMouseEnter={() => setFocusedIndex(idx)}
              onMouseLeave={() => setFocusedIndex(null)}
              className={`transition-opacity duration-300 ${
                focusedIndex !== null && focusedIndex !== idx ? "opacity-60" : "opacity-100"
              } p-6 sm:p-8 bg-white dark:bg-[var(--surface-elevated)] rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{cert.title}</h3>
              <div className="mt-3 space-y-2">
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{cert.issuer}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
              </div>
              <motion.a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline text-sm"
                whileHover={{ x: 4 }}
              >
                View Certificate
                <span>→</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
