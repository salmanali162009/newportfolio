import {
  FaHtml5,
  FaReact,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaServer
} from "react-icons/fa";

const journeyDetail = [
  {
    id: 1,
    title: "Frontend Foundations",
    period: "Getting Started",
    icon: FaHtml5,
    description:
      "Began the journey by learning the core building blocks of the web — semantic HTML, modern CSS and responsive layout fundamentals."
  },
  {
    id: 2,
    title: "JavaScript & TypeScript",
    period: "Core Skills",
    icon: FaCode,
    description:
      "Built strong foundations in modern JavaScript (ES6+) and TypeScript, writing clean, type-safe and maintainable code."
  },
  {
    id: 3,
    title: "React Ecosystem",
    period: "Component Engineering",
    icon: FaReact,
    description:
      "Learned to build scalable, reusable interfaces with React — components, hooks, routing and state management."
  },
  {
    id: 4,
    title: "UI & Animation",
    period: "Design Premium UI",
    icon: FaLaptopCode,
    description:
      "Mastered professional UI design with Material UI, Ant Design and Tailwind, plus GSAP and ScrollTrigger for polished motion."
  },
  {
    id: 5,
    title: "Backend & APIs",
    period: "Server-Side Development",
    icon: FaServer,
    description:
      "Moved beyond the browser with Node.js and Express.js — designing and integrating RESTful APIs, and applying authentication and security practices across the stack."
  },
  {
    id: 6,
    title: "Services & Cloud Expansion",
    period: "Current Journey",
    icon: FaGraduationCap,
    description:
      "Integrated real services like Firebase Authentication, Firestore and Cloudinary, and I'm now expanding into databases, GraphQL, Next.js, Docker, CI/CD and cloud deployment."
  }
];

export default journeyDetail;
