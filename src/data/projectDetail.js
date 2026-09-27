import {
  FaReact,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiJavascript,
  SiFirebase,
  SiAntdesign,
  SiTypescript,
  SiCloudinary
} from "react-icons/si";

import edutrain from "../assets/edutrain.jpg";
import xplosive from "../assets/xplosivefitness.jpg";
import ecommerce from "../assets/ecommerc.jpg";
import obsidian from "../assets/obsidien.jpg";
import antddash from "../assets/antddash.jpg";
import qr from "../assets/qr.jpg";
import fancy from "../assets/fancy.jpg";
const projectDetail = [
  {
    id: 1,
    slug: "edutrain",
    title: "EduTrain",
    description:
      "A modern learning platform built with React delivering a responsive, interactive educational experience.",
    longDescription:
      "EduTrain is a comprehensive e-learning platform that presents courses, lessons and learning paths through a clean, responsive interface built with React. The project emphasizes component-driven architecture, smooth routing and a polished user experience across all device sizes.",
    image: edutrain,
    category: "React",
    technologies: [{ name: "React", icon: FaReact }],
    liveUrl: "https://edutrain.netlify.app/",
    githubUrl: "",
    featured: true,
    features: [
      "Responsive, mobile-first interface",
      "Component-driven React architecture",
      "Clean, modern course presentation layout"
    ]
  },
  {
    id: 2,
    slug: "xplosive-fitness",
    title: "Xplosive Fitness",
    description:
      "A fitness platform integrating Firebase Authentication and Firestore with Cloudinary media handling.",
    longDescription:
      "Xplosive Fitness is a dynamic fitness web application that combines a striking frontend with real backend services. It uses Firebase Authentication for secure sign-in, Firestore for storing dynamic content and Cloudinary for optimized image delivery.",
    image: xplosive,
    category: "Frontend / Firebase",
    technologies: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Firebase Authentication", icon: SiFirebase },
      { name: "Firebase Firestore", icon: SiFirebase },
      { name: "Cloudinary", icon: SiCloudinary }
    ],
    liveUrl: "https://xplosivefitness.netlify.app/",
    githubUrl: "",
    featured: true,
    features: [
      "Firebase Authentication for secure user login",
      "Firestore-backed dynamic content",
      "Cloudinary-powered media optimization"
    ]
  },
  {
    id: 3,
    slug: "react-ecommerce-store",
    title: "React Ecommerce Store",
    description:
      "A fully interactive e-commerce store built with React featuring product browsing and cart interactions.",
    longDescription:
      "React Ecommerce Store is a feature-rich online storefront demonstrating modern React patterns. It includes product listings, category filtering and a functional shopping experience with a responsive, mobile-friendly layout.",
    image: ecommerce,
    category: "React / Ecommerce",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript }
    ],
    liveUrl: "https://salmanali162009.github.io/react-ecommerce-store/",
    githubUrl: "",
    featured: true,
    features: [
      "Interactive product catalog",
      "Category and product filtering",
      "Responsive shopping layout"
    ]
  },
  {
    id: 4,
    slug: "ant-design-dashboard",
    title: "Ant Design Dashboard",
    description:
      "An enterprise-style dashboard leveraging Ant Design components for a professional admin experience.",
    longDescription:
      "This dashboard showcases the power of Ant Design for building professional, data-rich admin interfaces. It features structured layouts, reusable UI components and a clean visual hierarchy suitable for enterprise applications.",
    image: antddash,
    category: "Dashboard",
    technologies: [{ name: "Ant Design", icon: SiAntdesign }],
    liveUrl: "https://antdproject.netlify.app/",
    githubUrl: "",
    featured: false,
    features: [
      "Enterprise-grade Ant Design components",
      "Clean admin layout structure",
      "Reusable, data-driven UI sections"
    ]
  },
  {
    id: 5,
    slug: "qr-tools",
    title: "QR Tools",
    description:
      "A handy web tool for generating and scanning QR codes with a simple, fast interface.",
    longDescription:
      "QR Tools is a focused utility web app that lets users generate QR codes quickly and easily. Built as a lightweight, performance-friendly application, it delivers core functionality through a clean and straightforward interface.",
    image: qr,
    category: "Web App / Tools",
    technologies: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: FaReact }
    ],
    liveUrl: "https://qrscaner.netlify.app/",
    githubUrl: "",
    featured: false,
    features: [
      "Fast QR code generation",
      "Minimalist utility-focused design",
      "Lightweight and performant"
    ]
  },
  {
    id: 6,
    slug: "fancy-text-generator",
    title: "Fancy Text Generator",
    description:
      "A creative tool for transforming plain text into stylish formatted text variations.",
    longDescription:
      "Fancy Text Generator lets users convert ordinary text into a variety of eye-catching styles. The application focuses on a simple, responsive interaction while delivering useful formatting tools in a distraction-free interface.",
    image: fancy,
    category: "Web App / Tools",
    technologies: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: FaReact }
    ],
    liveUrl: "https://fancytextgenerater.netlify.app/",
    githubUrl: "",
    featured: false,
    features: [
      "Multiple text styling options",
      "Instant conversion feedback",
      "Responsive and easy to use"
    ]
  },
  {
    id: 7,
    slug: "obsidian-motors",
    title: "Obsidian Motors",
    description:
      "A premium automotive frontend delivering a bold, modern brand experience.",
    longDescription:
      "Obsidian Motors is a visually striking automotive website that focuses on brand presence and premium presentation. Built for a fast, responsive experience, it showcases automotive inventory and brand storytelling through a bold design.",
    image: obsidian,
    category: "Frontend / Automotive",
    technologies: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript }
    ],
    liveUrl: "https://obsidian-motors.netlify.app/",
    githubUrl: "",
    featured: true,
    features: [
      "Bold automotive brand design",
      "Responsive frontend experience",
      "Premium visual presentation"
    ]
  }
];

export default projectDetail;

