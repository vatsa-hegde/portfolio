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
    <section className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 ease-in-out relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent dark:from-indigo-900/40 pointer-events-none"></div>

      {/* Education Section */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-gray-100">
        Education
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((degree, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            onMouseEnter={() => setFocusedIndex(idx)}
            onMouseLeave={() => setFocusedIndex(null)}
            className={`transition-transform duration-300 ${
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

      {/* Certification Section */}
      <h2 className="text-3xl sm:text-4xl font-bold mt-16 mb-8 sm:mb-12 text-center text-gray-900 dark:text-gray-100">
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificationData.map((cert, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            onMouseEnter={() => setFocusedIndex(idx)}
            onMouseLeave={() => setFocusedIndex(null)}
            className={`transition-transform duration-300 ${
              focusedIndex !== null && focusedIndex !== idx ? "opacity-60" : "opacity-100"
            } p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md`}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{cert.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{cert.issuer}</p>
            <p className="text-gray-500 dark:text-gray-400">{cert.date}</p>
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
