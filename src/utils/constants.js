import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import salman from "../assets/salman.png";
export const developer = {
  name: "Salman Ali",
  monogram: "SA",
  role: "Full Stack Developer",
  title: "Full Stack Developer | React | TypeScript | Node.js",
  tagline:
    "React • TypeScript • Node.js • Express.js • Modern Web Experiences",
  intro:
    "I build complete web applications end to end — responsive React and TypeScript interfaces backed by Node.js, Express.js and REST APIs.",
  github: "https://github.com/salmanali162009",
  githubHandle: "salmanali162009",
  linkedin: "https://www.linkedin.com/in/salman-ali-38a387395/",
  linkedinHandle: "Salman Ali",
  email: "salmanali162009@gmail.com",
  portrait: salman
};

export const socialLinks = [
  {
    name: "GitHub",
    url: developer.github,
    icon: FaGithub
  },
  {
    name: "LinkedIn",
    url: developer.linkedin,
    icon: FaLinkedin
  },
  {
    name: "Email",
    url: `mailto:${developer.email}`,
    icon: FaEnvelope
  }
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" }
];