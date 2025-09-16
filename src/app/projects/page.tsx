"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  desc: string;
  details: {
    overview: string;
    technologies: string[];
    setup: string;
  };
};

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Garbage Management System",
      desc: "YOLO-based IoT waste sorting system using Raspberry Pi and AWS.",
      details: {
        overview:
          "Architected a YOLO-based waste classification system with Raspberry Pi, IR sensors, and stepper motors, achieving 96% real-time classification accuracy. Integrated automated hardware control with AWS cloud logging to demonstrate full-stack IoT-ML coordination.",
        technologies: ["Raspberry Pi", "Python", "YOLOv3", "AWS", "IR Sensors", "Stepper Motors"],
        setup:
          "Configured Raspberry Pi with camera and sensors for image capture and hardware control. YOLO model performs inference to classify waste, while stepper motors automate sorting. Data logged to AWS for monitoring and analysis.",
      },
    },
    {
      title: "Crowd Management System",
      desc: "IoT and ML-based crowd control for COVID-19 safety.",
      details: {
        overview:
          "Developed a real-time crowd tracking system using Raspberry Pi and IR sensors to monitor entry/exit during the pandemic. Implemented a Flask-based ML service to predict crowd density and send alerts, displayed on a Node.js frontend dashboard.",
        technologies: ["Raspberry Pi", "Python", "Flask", "Node.js", "Firebase", "ML Models", "HTTP"],
        setup:
          "Collected entry/exit data using IR sensors connected to Raspberry Pi, stored in Firebase. ML service predicts crowd levels. Node.js frontend displays live dashboards. Facilitated team communication and requirement alignment to meet project milestones.",
      },
    },
    {
      title: "Question and Answer Web Application",
      desc: "Full-stack Q&A platform for developers.",
      details: {
        overview:
          "Designed and implemented a web platform using Express.js, MongoDB, HTML/CSS/JavaScript for developers to post questions and answers. Implemented secure authentication (MD5, later upgraded to OAuth 2.0) and role-based access control for content ownership.",
        technologies: ["Express.js", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript", "OAuth 2.0"],
        setup:
          "Backend built with Node.js and MongoDB, frontend with HTML/CSS/JS. Ensured user-specific edit permissions and profile display of questions/answers. Platform designed for secure, structured Q&A collaboration.",
      },
    },
    {
      title: "NGO Web Application",
      desc: "Responsive web platform to manage volunteers and donations.",
      details: {
        overview:
          "Digitized NGO operations by implementing a role-based web platform using Node.js, MongoDB, and Bootstrap. Allowed volunteers to join programs and administrators to manage events and donations, improving transparency and engagement.",
        technologies: ["Node.js", "MongoDB", "Bootstrap", "HTML", "CSS", "JavaScript"],
        setup:
          "Frontend built with Bootstrap, backend with Node.js and MongoDB. Role-based access controlled volunteer enrollment and admin management of programs and finances. Deployed and tested with focus on usability and security.",
      },
    },
  ];

  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 px-6 py-20 transition-colors duration-500 ease-in-out relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent dark:from-indigo-900/40 pointer-events-none"></div>
      <motion.h1
        className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      {/* Grid of Project Cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0,0,0,0.25)" }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col justify-between transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 flex-grow">{project.desc}</p>
            <button
              onClick={() => setSelected(project)}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-3xl w-full p-10 relative overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{selected.title}</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Overview</h3>
                <p className="text-gray-700 dark:text-gray-300">{selected.details.overview}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Technologies Used</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {selected.details.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Setup / Implementation</h3>
                <p className="text-gray-700 dark:text-gray-300">{selected.details.setup}</p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
