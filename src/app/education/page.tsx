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

  return (
    <section className="min-h-screen px-6 py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 ease-in-out relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent dark:from-indigo-900/40 pointer-events-none"></div>

      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
        Education
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {[{
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
          transcriptUrl: "/transcripts/UWTranscript.pdf"
        },{
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
          transcriptUrl: "/transcripts/VTUTranscript.pdf"
        }].map((degree, idx) => (
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
    </section>
  );
}
