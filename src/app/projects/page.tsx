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
      title: "Distributed Tic-Tac-Toe Game",
      desc: "Multiplayer Tic-Tac-Toe using Java Sockets and multithreading for real-time play across nodes.",
      details: {
        overview:
          "Developed an online multiplayer Tic-Tac-Toe game with AI opponent and two-node remote play. Implemented using Java Sockets and SSH tunneling for distributed communication, with multithreading to improve synchronization reliability by 70%.",
        technologies: ["Java", "Sockets", "SSH", "Multithreading", "AI"],
        setup:
          "Client-server architecture using TCP sockets for move exchange. Each player runs on separate nodes connected via SSH. Game state synchronized using synchronized threads and buffered streams. AI opponent implemented with Minimax algorithm for optimal move prediction.",
      },
    },
    {
      title: "Cloud-Native Messaging Application on AWS",
      desc: "Event-driven serverless chat platform with scalable architecture and secure authentication.",
      details: {
        overview:
          "Built a cloud-native chat application using React and TypeScript with AWS Amplify and AppSync for real-time messaging. Designed a serverless backend with AWS Lambda, ECS, and Step Functions for event-driven message handling. Integrated Cognito for authentication, DynamoDB and RDS for persistent storage, and CloudWatch for monitoring and alerting.",
        technologies: [
          "React",
          "TypeScript",
          "AWS Amplify",
          "AppSync",
          "Cognito",
          "ECS",
          "Lambda",
          "Step Functions",
          "SQS",
          "DynamoDB",
          "RDS",
          "S3",
          "Route53",
          "IAM",
          "ELB",
          "SES",
          "CloudWatch",
        ],
        setup:
          "Frontend developed with React and AWS Amplify for real-time chat updates. Backend implemented using a combination of ECS containers and AWS Lambda functions connected via Step Functions for asynchronous workflows. AppSync managed GraphQL API requests, Cognito handled secure authentication, and SQS ensured reliable message delivery. Route53 and ELB provided traffic routing and load balancing across distributed services.",
      },
    },
    {
      title: "Real-Time Flight Data Analysis with Apache Storm",
      desc: "A distributed real-time stream processing system to analyze and filter live flight data based on altitude, vertical rate, and proximity to airports using Apache Storm.",
      details: {
        overview: "Developed a real-time flight monitoring system using Apache Storm to process live ADS-B flight streams. Implemented topology components including Spouts for data ingestion, and Bolts such as HubIdentifier and AirlineSorter to filter, group, and analyze flights within a 20-mile radius of airports. The system identifies aircraft below 3000 ft with significant vertical movement, providing near real-time situational awareness for air traffic analytics.",
        technologies: ["Apache Storm, Java, Maven, JSON, Linux, IntelliJ IDEA"],
        setup: "Clone the repository and configure Apache Storm locally or on a distributed cluster. Use Maven to build the project and deploy the topology using 'storm jar'. Provide a flight data stream (e.g., flights.txt or live ADS-B feed) to the Spout. Filter parameters such as altitude threshold and proximity radius can be adjusted in the configuration file."
      },
    },
    {
      title: "Mobile Agent System with Inter-Agent Communication and Spawning",
      desc: "Distributed Java mobile agent framework supporting migration, inter-agent messaging, and dynamic agent spawning across multiple servers.",
      details: {
        overview:
          "Developed a Java-based mobile agent system enabling agents to migrate across 5+ servers using JSCH (SSH2). Implemented inter-agent communication via shared ConcurrentHashMap message queues and supported agent spawning for parallel distributed tasks. The system demonstrates scalable, autonomous agent behavior with synchronized multithreading and shared state coordination.",
        technologies: ["Java", "JSCH", "RMI", "ConcurrentHashMap", "Multithreading", "SSH", "Hazelcast"],
        setup:
          "Configured multiple remote hosts accessible via SSH for agent deployment. Each agent runs on a server, communicates through a shared message map, and can spawn child agents to perform subtasks concurrently. Used JSCH for secure migration and synchronized threads for reliable coordination and execution."
      },
    },
    {
      title: "Distributed Inverted Indexing System with Hierarchical Dispatch and Mobile Agents",
      desc: "A Java-based distributed indexing framework implementing hierarchical dispatch and mobile agent features for scalable and fault-tolerant data processing.",
      details: {
        overview:
          "Built an advanced distributed inverted indexing system in Java to enable parallel text analysis and search across multiple hosts. Implemented three execution modes — Local, Each, and Remote — to support both centralized and distributed indexing. Introduced hierarchical dispatch where a parent agent (HierarchicalIndexingAgent) distributes indexing tasks to multiple child agents (ChildIndexingAgent) across servers, aggregates results using a shared Hazelcast map, and synchronizes collection after completion. Added mobile agent functionality to migrate agents between hosts using Place-based deployment, allowing remote execution and result retrieval through shared storage. The system demonstrates autonomous distributed execution, concurrent processing, and coordinated result merging.",
        technologies: [
          "Java",
          "Hazelcast",
          "RMI",
          "JSCH",
          "Multithreading",
          "ConcurrentHashMap",
          "Distributed Systems"
        ],
        setup:
          "Deploy Hazelcast instances across multiple hosts to establish a distributed shared memory. Run the parent HierarchicalIndexingAgent locally to dispatch child agents to remote servers. Configure hostnames and input text datasets in the configuration file. Each child performs local indexing and stores its results in the shared Hazelcast map. The parent then collects and merges the results to form a global inverted index. The mobile agent feature can alternatively deploy agents to remote hosts via Place for single-node execution and retrieval, supporting modular scalability and distributed coordination."
      },
    },
    {
      title: "Distributed Task Execution and Graph Processing using Apache ZooKeeper",
      desc: "ZooKeeper-based distributed coordination system supporting dynamic task assignment, variable graph sizes, and visual result output.",
      details: {
        overview:
          "Designed and implemented a distributed computing framework leveraging Apache ZooKeeper for synchronized task coordination and fault-tolerant execution. The system supports dynamic task scaling, graph-based computation, and visual output generation. Each worker node registers with ZooKeeper and executes tasks assigned by the master node, maintaining consistency through ephemeral znodes. Introduced visualization and scalability features for analyzing performance across varying graph sizes and workloads.",
        technologies: [
          "Java",
          "Apache ZooKeeper",
          "Multithreading",
          "Distributed Systems",
          "Graph Algorithms",
          "File I/O",
          "Concurrency"
        ],
        setup:
          "Configured ZooKeeper ensemble and launched master and worker nodes on distributed hosts. The master creates znodes representing tasks; workers monitor and claim available tasks via watchers for real-time updates. Implemented modular graph task logic with variable size input graphs to analyze performance. Added graphical output to visualize task completion and workload distribution across nodes, ensuring robust coordination and synchronization under concurrent workloads."
      },
    },
    {
      title: "FarmConnect Web Portal",
      desc: "Full-stack web application connecting farmers with agricultural organizations and resources.",
      details: {
        overview:
          "Developed a responsive web portal using Flask and Bootstrap to display agricultural company details, best farming practices, and application insights for farmers. Designed the platform for accessibility and mobile responsiveness.",
        technologies: ["Flask", "HTML5", "CSS3", "JavaScript (ES6)", "Bootstrap"],
        setup:
          "Implemented Flask routes for dynamic data serving. Designed Bootstrap-based frontend with reusable components. Deployed on a cloud server for public access. Integrated JSON-based APIs to display real-time agricultural information.",
      },
    },
    {
      title: "Smart Waste Sorting System",
      desc: "YOLO-based IoT waste classification system using Raspberry Pi and edge computing.",
      details: {
        overview:
          "Developed a YOLOv3 + OpenCV-based waste sorting system using Raspberry Pi to classify waste into three categories with 96% accuracy. Enabled automated segregation through edge device integration with JSON-based communication between sensors and actuators.",
        technologies: ["Python", "YOLOv3", "OpenCV", "Raspberry Pi", "Edge Computing", "JSON"],
        setup:
          "Trained YOLOv3 model for waste classification. Deployed inference pipeline on Raspberry Pi equipped with camera and motors. Integrated real-time communication between modules using JSON over sockets for automated sorting based on classification output.",
      },
    },
    {
      title: "Crowd Management System using Raspberry Pi, Firebase and ML",
      desc: "IoT solution to enforce social distancing by restricting gatherings at a specific location during Covid-19.",
      details: {
        overview:
          "Developed a complete IoT-based crowd management system leveraging Raspberry Pi with infrared sensors to monitor entry and exit. Data was stored on Firebase for real-time monitoring. Implemented a Crowd Predictor using a Python Flask server to anticipate dense areas, enabling proactive crowd management. Established HTTP communication between Node.js web server and Flask server for seamless integration. Collaborated closely with team members and stakeholders to gather requirements and ensure alignment, meeting project milestones effectively.",
        technologies: [
          "Raspberry Pi",
          "Infrared Sensors",
          "Firebase",
          "Python Flask",
          "Machine Learning",
          "Node.js",
          "IoT"
        ],
        setup:
          "Configured Raspberry Pi to collect and transmit data to Firebase. Developed Node.js web server to display and monitor real-time crowd data. Built and trained machine learning model for predicting high-density areas. Integrated Flask server with web interface via HTTP requests for proactive crowd management."
      }
    },
    {
      title: "StackOverflow Clone",
      desc: "Web platform to facilitate developer Q&A with user authentication, editing features, and profile management.",
      details: {
        overview:
          "Designed and developed a full-stack web application using Express.js as backend, MongoDB for data storage, and HTML/CSS/JavaScript for frontend. Each user’s profile displayed their questions and answers history with robust editing features restricted to the associated user. Implemented MD5 hashing initially and later integrated OAuth authentication for secure user management. Conceptualized, developed, and documented the platform tailored for developer-specific Q&A use cases.",
        technologies: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "HTML",
          "CSS",
          "JavaScript",
          "OAuth",
          "MD5 Hashing"
        ],
        setup:
          "Set up backend Express.js server to handle user requests and CRUD operations. Configured MongoDB for data persistence and user profile management. Developed frontend to display Q&A history with editing capabilities. Integrated authentication mechanisms (MD5 initially, OAuth later) to ensure secure access control."
      }
    },
    {
      title: "NGO Web Application",
      desc: "Digitized operations of a non-governmental organization with role-based authentication and program management.",
      details: {
        overview:
          "Developed a web application to streamline NGO operations using Node.js backend, MongoDB for storage, and Bootstrap for responsive frontend design. Implemented role-based authentication to provide different access levels for volunteers and administrators. Volunteers could join programs while administrators could add/remove programs and manage financial details such as donations and program costs. The system ensured smooth workflow, proper access control, and efficient program management.",
        technologies: [
          "Node.js",
          "MongoDB",
          "Bootstrap",
          "Role-Based Authentication",
          "HTML",
          "CSS",
          "JavaScript"
        ],
        setup:
          "Configured Node.js backend and MongoDB database to handle role-based access control and program management. Developed frontend using Bootstrap for a responsive design. Enabled administrators to manage programs and donations, while volunteers could join existing programs, ensuring operational transparency and efficiency."
      }
    }
  ];


  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[var(--background)] dark:to-[var(--surface)] px-4 sm:px-6 lg:px-12 py-12 sm:py-20 transition-colors duration-500 ease-in-out relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent dark:from-indigo-500/20 pointer-events-none"></div>
      <motion.h1
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      {/* Grid of Project Cards */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0,0,0,0.25)" }}
            className="bg-white dark:bg-[var(--surface-elevated)] shadow-lg rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{project.title}</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex-grow">{project.desc}</p>
            <button
              onClick={() => setSelected(project)}
              className="mt-4 sm:mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
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
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-[var(--surface-elevated)] rounded-xl shadow-xl w-[95%] sm:w-11/12 lg:max-w-3xl p-6 sm:p-10 relative overflow-y-auto max-h-[85vh]"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">{selected.title}</h2>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Overview</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{selected.details.overview}</p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Technologies Used</h3>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  {selected.details.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Setup / Implementation</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{selected.details.setup}</p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-lg sm:text-xl"
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
