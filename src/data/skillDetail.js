import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaRobot,
  FaCloud,
  FaServer,
  FaMobile
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiAntdesign,
  SiMui,
  SiGreensock,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiExpress,
  SiCloudinary
} from "react-icons/si";

const skillDetail = [
  // ---------- Frontend ----------
  {
    id: 1,
    name: "HTML5",
    category: "Frontend",
    level: "Advanced",
    icon: FaHtml5,
    description: "Semantic and accessible HTML structure."
  },
  {
    id: 2,
    name: "CSS3",
    category: "Frontend",
    level: "Advanced",
    icon: FaCss3Alt,
    description: "Responsive layouts and modern CSS techniques."
  },
  {
    id: 3,
    name: "JavaScript",
    category: "Frontend",
    level: "Advanced",
    icon: SiJavascript,
    description: "Modern ES6+ JavaScript development."
  },
  {
    id: 4,
    name: "TypeScript",
    category: "Frontend",
    level: "Advanced",
    icon: SiTypescript,
    description: "Type-safe application development."
  },
  {
    id: 5,
    name: "React",
    category: "Frontend",
    level: "Advanced",
    icon: FaReact,
    description: "Building reusable and reactive user interfaces."
  },
  {
    id: 6,
    name: "React Components",
    category: "Frontend",
    level: "Advanced",
    icon: FaLaptopCode,
    description: "Scalable and reusable component architecture."
  },
  {
    id: 7,
    name: "React Hooks",
    category: "Frontend",
    level: "Advanced",
    icon: FaReact,
    description: "State and lifecycle management with React Hooks."
  },
  {
    id: 8,
    name: "React Router",
    category: "Frontend",
    level: "Advanced",
    icon: FaCode,
    description: "Client-side routing and navigation."
  },
  {
    id: 9,
    name: "Responsive Web Design",
    category: "Frontend",
    level: "Advanced",
    icon: FaMobile,
    description: "Fluid, responsive interfaces across devices."
  },

  // ---------- UI & Design ----------
  {
    id: 10,
    name: "Material UI",
    category: "UI & Design",
    level: "Advanced",
    icon: SiMui,
    description: "Component library for polished interfaces."
  },
  {
    id: 11,
    name: "Ant Design",
    category: "UI & Design",
    level: "Advanced",
    icon: SiAntdesign,
    description: "Enterprise-ready UI components."
  },
  {
    id: 27,
    name: "Tailwind CSS",
    category: "UI & Design",
    level: "Advanced",
    icon: SiTailwindcss,
    description: "Utility-first CSS framework for building responsive interfaces."
  },

  // ---------- Animation ----------
  {
    id: 12,
    name: "GSAP",
    category: "Animation",
    level: "Advanced",
    icon: SiGreensock,
    description: "High-performance web animations."
  },
  {
    id: 13,
    name: "GSAP ScrollTrigger",
    category: "Animation",
    level: "Advanced",
    icon: SiGreensock,
    description: "Scroll-driven, timeline-based animations."
  },

  // ---------- State Management ----------
  {
    id: 24,
    name: "Redux",
    category: "State Management",
    level: "Advanced",
    icon: SiRedux,
    description: "Predictable global state management for React applications."
  },
  {
    id: 25,
    name: "Redux Toolkit",
    category: "State Management",
    level: "Advanced",
    icon: SiRedux,
    description: "Modern Redux development with simplified state management patterns."
  },

  // ---------- Backend & Services ----------
  {
    id: 20,
    name: "Node.js",
    category: "Backend & Services",
    level: "Advanced",
    icon: SiNodedotjs,
    description: "Server-side JavaScript runtime for building backend applications and APIs."
  },
  {
    id: 21,
    name: "Express.js",
    category: "Backend & Services",
    level: "Advanced",
    icon: SiExpress,
    description: "Backend framework for building REST APIs and server-side applications."
  },
  {
    id: 28,
    name: "REST APIs",
    category: "Backend & Services",
    level: "Advanced",
    icon: SiNodedotjs,
    description: "Designing and integrating RESTful APIs for full-stack applications."
  },
  {
    id: 22,
    name: "MongoDB",
    category: "Backend & Services",
    level: "Advanced",
    icon: SiMongodb,
    description: "NoSQL document database for storing and managing application data."
  },
  {
    id: 30,
    name: "Authentication & Security",
    category: "Backend & Services",
    level: "Advanced",
    icon: FaServer,
    description:
      "Implementing authentication flows and applying secure practices in full-stack applications."
  },
  {
    id: 14,
    name: "Firebase Authentication",
    category: "Backend & Services",
    level: "Advanced",
    icon: SiFirebase,
    description: "Secure authentication and user management for web applications."
  },
  {
    id: 15,
    name: "Firebase Firestore",
    category: "Backend & Services",
    level: "Advanced",
    icon: SiFirebase,
    description: "NoSQL cloud database for storing and managing application data."
  },
  {
    id: 16,
    name: "Cloudinary",
    category: "Backend & Services",
    level: "Advanced",
    icon: SiCloudinary,
    description: "Cloud-based image and media management for web applications."
  },

  // ---------- Tools ----------
  {
    id: 17,
    name: "Git",
    category: "Tools",
    level: "Advanced",
    icon: FaGitAlt,
    description: "Version control and collaboration."
  },
  {
    id: 18,
    name: "GitHub",
    category: "Tools",
    level: "Advanced",
    icon: FaGithub,
    description: "Code hosting and project management."
  },

  // ---------- AI ----------
  {
    id: 19,
    name: "AI Prompt Engineering",
    category: "AI",
    level: "Advanced",
    icon: FaRobot,
    description: "Crafting effective prompts for AI tooling."
  },

  // ---------- Learning ----------
  {
    id: 23,
    name: "PostgreSQL",
    category: "Learning",
    level: "Learning",
    icon: SiPostgresql,
    description: "Currently learning relational databases."
  },
  {
    id: 26,
    name: "Next.js",
    category: "Learning",
    level: "Learning",
    icon: SiNextdotjs,
    description: "Currently learning React frameworks."
  },
  {
    id: 29,
    name: "GraphQL",
    category: "Learning",
    level: "Learning",
    icon: SiGraphql,
    description: "Currently learning query languages."
  },
  {
    id: 31,
    name: "Payment Integration",
    category: "Learning",
    level: "Learning",
    icon: FaDatabase,
    description: "Currently learning payment gateways."
  },
  {
    id: 32,
    name: "Docker",
    category: "Learning",
    level: "Learning",
    icon: SiDocker,
    description: "Currently learning containerization."
  },
  {
    id: 33,
    name: "CI/CD",
    category: "Learning",
    level: "Learning",
    icon: FaGithub,
    description: "Currently learning pipelines and automation."
  },
  {
    id: 34,
    name: "Cloud Deployment",
    category: "Learning",
    level: "Learning",
    icon: FaCloud,
    description: "Currently learning cloud hosting."
  }
];

export default skillDetail;
