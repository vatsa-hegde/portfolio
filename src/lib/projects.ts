export type Project = {
  title: string;
  desc: string;
  category: "full-stack" | "distributed-systems" | "iot";
  details: {
    overview: string;
    technologies: string[];
    setup: string;
    architecture?: string;
  };
  github?: string;
};

export const projectsData: Project[] = [
  {
    title: "Distributed Tic-Tac-Toe Game",
    category: "distributed-systems",
    desc: "Multiplayer Tic-Tac-Toe using Java Sockets and multithreading for real-time play across nodes.",
    github: "https://github.com/vatsa-hegde/Distributed-Computing/tree/main/Distributed%20Tic-Tac-Toe",
    details: {
      overview:
        "Developed an online multiplayer Tic-Tac-Toe game with AI opponent and two-node remote play. Implemented using Java Sockets and SSH tunneling for distributed communication, with multithreading to improve synchronization reliability by 70%.",
      architecture:
        "Client-Server Architecture: Two players connect to a central game server via TCP sockets. Each client sends moves as serialized objects through buffered streams. The server validates moves, maintains game state in a synchronized 2D array, and broadcasts updates to both clients. SSH tunneling secures inter-node communication. AI opponent uses Minimax algorithm evaluated on a separate thread for non-blocking gameplay.",
      technologies: ["Java", "Sockets", "SSH", "Multithreading", "AI"],
      setup:
        "Client-server architecture using TCP sockets for move exchange. Each player runs on separate nodes connected via SSH. Game state synchronized using synchronized threads and buffered streams. AI opponent implemented with Minimax algorithm for optimal move prediction.",
    },
  },
  {
    title: "Cloud-Native Messaging Application on AWS",
    category: "full-stack",
    desc: "Event-driven serverless chat platform with scalable architecture and secure authentication.",
    details: {
      overview:
        "Built a cloud-native chat application using React and TypeScript with AWS Amplify and AppSync for real-time messaging. Designed a serverless backend with AWS Lambda, ECS, and Step Functions for event-driven message handling. Integrated Cognito for authentication, DynamoDB and RDS for persistent storage, and CloudWatch for monitoring and alerting.",
      architecture:
        "Serverless Event-Driven Architecture: Frontend (React/TypeScript) connects to API Gateway and AppSync for GraphQL subscriptions. Backend consists of Lambda microservices (Auth, Chat, Notifications) orchestrated by Step Functions. SNS/SQS handle async message processing. DynamoDB stores chat history and user profiles; RDS handles transactional data. Cognito provides OAuth/JWT authentication. CloudFront CDN accelerates static assets. CloudWatch/X-Ray enable distributed tracing and monitoring across all services.",
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
    category: "distributed-systems",
    desc: "A distributed real-time stream processing system to analyze and filter live flight data based on altitude, vertical rate, and proximity to airports using Apache Storm.",
    github: "https://github.com/vatsa-hegde/Distributed-Computing/tree/main/Flight%20Data%20Analysis",
    details: {
      overview: "Developed a real-time flight monitoring system using Apache Storm to process live ADS-B flight streams. Implemented topology components including Spouts for data ingestion, and Bolts such as HubIdentifier and AirlineSorter to filter, group, and analyze flights within a 20-mile radius of airports. The system identifies aircraft below 3000 ft with significant vertical movement, providing near real-time situational awareness for air traffic analytics.",
      architecture:
        "Storm Topology Architecture: ADS-B Flight Data Spout ingests real-time flight streams. Data flows through parallel Bolts: DecoderBolt (deserializes flight data), AltitudeFilterBolt (filters aircraft below 3000ft), VerticalRateBolt (detects vertical movement >500fpm), and ProximityBolt (checks 20-mile radius from airports using geospatial indices). Results aggregated by HubIdentifier and AirlineSorter Bolts. Topology deployed on Storm cluster with configurable parallelism. Redis/Kafka stores intermediate results. Bolt grouping strategies ensure data locality and fault tolerance.",
      technologies: ["Apache Storm", "Java", "Maven", "JSON", "Linux", "IntelliJ IDEA"],
      setup: "Clone the repository and configure Apache Storm locally or on a distributed cluster. Use Maven to build the project and deploy the topology using 'storm jar'. Provide a flight data stream (e.g., flights.txt or live ADS-B feed) to the Spout. Filter parameters such as altitude threshold and proximity radius can be adjusted in the configuration file."
    },
  },
  {
    title: "Mobile Agent System with Inter-Agent Communication and Spawning",
    category: "distributed-systems",
    desc: "Distributed Java mobile agent framework supporting migration, inter-agent messaging, and dynamic agent spawning across multiple servers.",
    github: "https://github.com/vatsa-hegde/Distributed-Computing/tree/main/Mobile%20Agent%20system",
    details: {
      overview:
        "Developed a Java-based mobile agent system enabling agents to migrate across 5+ servers using JSCH (SSH2). Implemented inter-agent communication via shared ConcurrentHashMap message queues and supported agent spawning for parallel distributed tasks. The system demonstrates scalable, autonomous agent behavior with synchronized multithreading and shared state coordination.",
      architecture:
        "Mobile Agent Framework: Agent class extends Serializable for migration. PlaceManager runs on each host providing local execution environment via reflection. AgentMigrationService uses JSCH for secure SSH-based agent transportation. Agents communicate through a distributed ConcurrentHashMap (shared state) accessible via SSH tunnels or Hazelcast. Parent agents spawn child agents using dynamic class loading and thread pooling. Synchronized message queues ensure FIFO ordering. Service registry (Zookeeper-like) tracks active agents. Fault tolerance via checkpoint-restore and dead letter queues.",
      technologies: ["Java", "JSCH", "RMI", "ConcurrentHashMap", "Multithreading", "SSH", "Hazelcast"],
      setup:
        "Configured multiple remote hosts accessible via SSH for agent deployment. Each agent runs on a server, communicates through a shared message map, and can spawn child agents to perform subtasks concurrently. Used JSCH for secure migration and synchronized threads for reliable coordination and execution."
    },
  },
  {
    title: "Distributed Inverted Indexing System with Hierarchical Dispatch and Mobile Agents",
    category: "distributed-systems",
    desc: "A Java-based distributed indexing framework implementing hierarchical dispatch and mobile agent features for scalable and fault-tolerant data processing.",
    github: "https://github.com/vatsa-hegde/Distributed-Computing/tree/main/Inverted%20Indexing%20-%20Hazelcast",
    details: {
      overview:
        "Built an advanced distributed inverted indexing system in Java to enable parallel text analysis and search across multiple hosts. Implemented three execution modes — Local, Each, and Remote — to support both centralized and distributed indexing. Introduced hierarchical dispatch where a parent agent (HierarchicalIndexingAgent) distributes indexing tasks to multiple child agents (ChildIndexingAgent) across servers, aggregates results using a shared Hazelcast map, and synchronizes collection after completion. Added mobile agent functionality to migrate agents between hosts using Place-based deployment, allowing remote execution and result retrieval through shared storage. The system demonstrates autonomous distributed execution, concurrent processing, and coordinated result merging.",
      architecture:
        "Hierarchical Agent-Based Architecture: ParentIndexingAgent splits large text documents and creates ChildIndexingAgent tasks. Tasks distributed via agent migration (JSCH SSH) to worker nodes based on load balancing. Each ChildAgent performs local inverted indexing using HashMap<Term, List<DocID>>. Results stored in shared Hazelcast Distributed Map for aggregation. Synchronization barrier waits for all children completion. Final ParentAgent merges child results using reduce operations. Fault tolerance: dead agents detected via heartbeat; tasks reassigned to healthy nodes. Three execution modes: Local (sequential), Each (one task per worker), Remote (dynamic distribution).",
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
    category: "distributed-systems",
    desc: "ZooKeeper-based distributed coordination system supporting dynamic task assignment, variable graph sizes, and visual result output.",
    github: "https://github.com/vatsa-hegde/Distributed-Computing/tree/main/Variable%20Graph%20Analysis%20and%20Task%20Execution",
    details: {
      overview:
        "Designed and implemented a distributed computing framework leveraging Apache ZooKeeper for synchronized task coordination and fault-tolerant execution. The system supports dynamic task scaling, graph-based computation, and visual output generation. Each worker node registers with ZooKeeper and executes tasks assigned by the master node, maintaining consistency through ephemeral znodes. Introduced visualization and scalability features for analyzing performance across varying graph sizes and workloads.",
      architecture:
        "ZooKeeper-Based Master-Worker Architecture: ZooKeeper ensemble provides coordination and fault tolerance. Master node creates task znodes in /tasks path. Worker nodes register as ephemeral children under /workers. Workers use Watchers to detect new task assignments. Task execution model: workers claim tasks atomically via CAS (Compare-And-Set) operations. Graph processing: tasks construct graph from input, perform BFS/DFS traversals, aggregate results. Visualization: computed results written to JSON; D3.js frontend for interactive graph rendering. Scalability: supports 10-100+ workers; tested with graphs 100-10,000 nodes. Fault tolerance: task reassignment on worker failure via ZooKeeper watches.",
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
    category: "full-stack",
    desc: "Full-stack web application connecting farmers with agricultural organizations and resources.",
    details: {
      overview:
        "Developed a responsive web portal using Flask and Bootstrap to display agricultural company details, best farming practices, and application insights for farmers. Designed the platform for accessibility and mobile responsiveness.",
      architecture:
        "Web Portal Architecture: Flask backend serves dynamic content via templating (Jinja2) to display company profiles, farming best practices, and market insights. Bootstrap frontend provides responsive UI across devices with CSS3 enhancements. SQLite/PostgreSQL database stores farmer profiles, organization details, and practice libraries. RESTful JSON APIs expose data for frontend consumption. Session management ensures farmer authentication. Admin portal allows content management for agricultural organizations. Caching layer improves performance for frequently accessed practice libraries and market data.",
      technologies: ["Flask", "HTML5", "CSS3", "JavaScript (ES6)", "Bootstrap"],
      setup:
        "Implemented Flask routes for dynamic data serving. Designed Bootstrap-based frontend with reusable components. Deployed on a cloud server for public access. Integrated JSON-based APIs to display real-time agricultural information.",
    },
  },
  {
    title: "Smart Waste Sorting System",
    category: "iot",
    desc: "YOLO-based IoT waste classification system using Raspberry Pi and edge computing.",
    github: "https://github.com/vatsa-hegde/Garbage-Management-System",
    details: {
      overview:
        "Developed a YOLOv3 + OpenCV-based waste sorting system using Raspberry Pi to classify waste into three categories with 96% accuracy. Enabled automated segregation through edge device integration with JSON-based communication between sensors and actuators.",
      architecture:
        "Edge Computing IoT System: Raspberry Pi 4 with USB camera captures waste images at 30fps. YOLOv3 model (trained on custom waste dataset) runs inference on edge using TensorFlow Lite for optimization. Classification output (Organic/Recyclable/Hazardous) triggers servo motors via GPIO pins for segregation. SQLite database logs all classifications. MQTT broker enables communication with cloud dashboard. Sensor readings (weight, bin level) via I2C interface. Local REST API provides real-time statistics. Cloud sync via WiFi only uploads summaries to reduce bandwidth.",
      technologies: ["Python", "YOLOv3", "OpenCV", "Raspberry Pi", "Edge Computing", "JSON"],
      setup:
        "Trained YOLOv3 model for waste classification. Deployed inference pipeline on Raspberry Pi equipped with camera and motors. Integrated real-time communication between modules using JSON over sockets for automated sorting based on classification output.",
    },
  },
  {
    title: "Crowd Management System using Raspberry Pi, Firebase and ML",
    category: "iot",
    desc: "IoT solution to enforce social distancing by restricting gatherings at a specific location during Covid-19.",
    github: "https://github.com/vatsa-hegde/PeopleCountingSystem-main",
    details: {
      overview:
        "Developed a complete IoT-based crowd management system leveraging Raspberry Pi with infrared sensors to monitor entry and exit. Data was stored on Firebase for real-time monitoring. Implemented a Crowd Predictor using a Python Flask server to anticipate dense areas, enabling proactive crowd management. Established HTTP communication between Node.js web server and Flask server for seamless integration. Collaborated closely with team members and stakeholders to gather requirements and ensure alignment, meeting project milestones effectively.",
      architecture:
        "Distributed IoT Architecture: Raspberry Pi nodes equipped with IR motion sensors count footfall at entry/exit points. Real-time data streamed to Firebase Realtime Database via WiFi. Flask ML Server analyzes historical data using LSTM/Time-Series models to predict crowd density at future time intervals. Node.js web server fetches Firebase data and Flask predictions via REST APIs. Dashboard visualizes real-time crowd levels, heat maps, and predictions. Alert system triggers notifications when density exceeds threshold. Edge caching on Pi reduces Firebase query load. Horizontal scaling: multiple Pi nodes with UUID-based zone mapping.",
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
    category: "full-stack",
    desc: "Web platform to facilitate developer Q&A with user authentication, editing features, and profile management.",
    github: "https://github.com/vatsa-hegde/Stack-OverFlow-mini-project",
    details: {
      overview:
        "Designed and developed a full-stack web application using Express.js as backend, MongoDB for data storage, and HTML/CSS/JavaScript for frontend. Each user's profile displayed their questions and answers history with robust editing features restricted to the associated user. Implemented MD5 hashing initially and later integrated OAuth authentication for secure user management. Conceptualized, developed, and documented the platform tailored for developer-specific Q&A use cases.",
      architecture:
        "MVC Web Architecture: Frontend (HTML/CSS/JS) communicates with Express.js backend via RESTful APIs. MongoDB stores Users, Questions, Answers, and Comments collections with proper indexing for full-text search performance. Authentication: MD5 hashing for passwords (v1), OAuth 2.0 with Google/GitHub (v2) for enhanced security. User profiles maintain answer/question history with read-only access for others, edit-only for author. Voting system with upvote/downvote caching. Session management via JSON Web Tokens. Admin dashboard for content moderation.",
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
    category: "full-stack",
    desc: "Digitized operations of a non-governmental organization with role-based authentication and program management.",
    github: "https://github.com/vatsa-hegde/NGO-Web",
    details: {
      overview:
        "Developed a web application to streamline NGO operations using Node.js backend, MongoDB for storage, and Bootstrap for responsive frontend design. Implemented role-based authentication to provide different access levels for volunteers and administrators. Volunteers could join programs while administrators could add/remove programs and manage financial details such as donations and program costs. The system ensured smooth workflow, proper access control, and efficient program management.",
      architecture:
        "Role-Based Web Architecture: Node.js Express backend with JWT-based authentication provides role separation (Admin/Volunteer). MongoDB stores Users, Programs, Donations, and Participation data with indices on user_id and program_id for efficient queries. Frontend (Bootstrap/HTML/JS) communicates via RESTful endpoints. Admin Routes: Create/Update/Delete programs, view financial reports, manage donations. Volunteer Routes: Browse programs, join programs, view participation history (read-only for others). Email notifications triggered on program updates via NodeMailer. Dashboard shows aggregate statistics. Session timeouts and CORS security policies enforce access control.",
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

// Utility function to create URL-friendly slugs
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Utility function to find project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(p => createSlug(p.title) === slug);
}

// Get all project slugs for static generation
export function getAllProjectSlugs(): string[] {
  return projectsData.map(p => createSlug(p.title));
}
