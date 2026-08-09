import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ExperienceSection from "./components/ExperienceSection"
import ContactSection from "./components/ContactSection"
import ProjectDetail from "./components/ProjectDetail"

import { SiJavascript, SiTypescript, SiPython, SiCplusplus, SiPhp, SiDart, SiReact, SiFlutter, SiVite, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiExpress, SiMysql, SiFirebase, SiGit, SiGithub, SiVercel } from "react-icons/si"

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "Dart", icon: <SiDart /> },
    ],
  },
  {
    category: "Frontend & Mobile Development",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel / Render", icon: <SiVercel /> },
    ],
  },
]

const experience = [
  {
    title: "Faculty of Science and Engineering Student Club Member",
    desc: "Joined the student club to support faculty events and projects, gaining teamwork and event coordination experience.",
    image: "/SMO/1.png",
  },
]

const projects = [
  {
    title: "Personal Finance Management Application (Senior Project)",
    desc: "BUDGETMATE — Personal finance mobile app built with Flutter & Firebase.",
    inProgress: true,
    details:
      "BUDGETMATE is a personal finance management app built with Flutter and Firebase. It helps users track income and expenses, plan budgets, set savings goals, and gain insights into their spending habits through clear, data-driven visualizations — all from their mobile device.",
    note: "This project is currently in development as part of my senior project. The Figma prototype below reflects the latest design progress and will keep evolving as the project moves forward.",
    cardImage: "/thesis/1.png",
    cardFallback:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
    images: [
      {
        src: "/thesis/1.png",
        fallback:
          "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    fitContain: true,
    tech: "Flutter • Firebase • Dart",
    features: [
      "Income & Expense Tracking",
      "Budget Planning & Management",
      "Savings Goal Setting",
      "Data Visualization & Reports",
      "Category-based Expense Analysis",
      "Cross-platform Mobile Dashboard",
    ],
    links: {
      figma:
        "https://www.figma.com/proto/SCMoxhopynMpYgiyhPCgOE/%E0%B9%81%E0%B8%AD%E0%B8%9B?node-id=3-11&p=f&t=f7GMlgi9teSTCc4C-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A11&show-proto-sidebar=1",
    },
  },
  {
    title: "Furball Cafi",
    desc: "A modern cafe website design with visual branding and menu showcase.",
    details:
      "Developed using Microsoft Visual Studio 2022 as the primary development environment. Designed and implemented a responsive table reservation system for a pet café, focusing on user-friendly interfaces, form validation, and efficient web application development.",
    cardImage: "/Furball/1.PNG",
    cardFallback:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
    images: [
      { src: "/Furball/1.PNG", fallback: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" },
      { src: "/Furball/2.PNG", fallback: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" },
      { src: "/Furball/3.PNG", fallback: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" },
      { src: "/Furball/4.PNG", fallback: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" },
      { src: "/Furball/5.PNG", fallback: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" },
    ],
    tech: "Microsoft Visual Studio 2022 • HTML5 • CSS3 • JavaScript (ES6) • PHP • MySQL • XAMPP",
    features: [
      "Online Table Reservation",
      "Responsive Web Design",
      "Customer Booking Form",
      "Image Carousel",
      "Input Validation",
      "User-Friendly Interface",
      "Database Integration (MySQL)",
      "PHP Backend Processing",
    ],
  },
  {
    title: "KUNextGen × AI",
    desc: "AI-powered study tool for Kasetsart University students",
    details:
      "A full-stack web application built for the \'ผู้กล้าท้า AI\' competition. Students can upload lecture documents to get AI-generated summaries, flashcards, and quizzes — all powered by Gemini 2.0 Flash. Features Firebase authentication, Firestore history, multilingual support (TH/EN), and a deep-space dark theme UI.",
    cardImage: "/kunextgen/1.png",
    cardFallback:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
      
    images: [
      { src: "/kunextgen/1.png", fallback: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80" },
      { src: "/kunextgen/2.png", fallback: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80" },
      { src: "/kunextgen/3.png", fallback: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80" },
      { src: "/kunextgen/4.png", fallback: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80" },
      { src: "/kunextgen/5.jpg", fallback: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80" },
      { src: "/kunextgen/6.jpg", fallback: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80" },
    ],
    tech: "React • Vite • Node.js • Express • Firebase • Openai API • Tailwind CSS",
    features: [
      "AI-powered Document Summarization",
      "Flashcard Generation",
      "Quiz Generation",
      "Thai / English Translation",
      "Firebase Authentication",
      "Firestore Database Integration",
      "Responsive User Interface",
      "Cloud Deployment (Vercel & Render)",
    ],
    links: {
      github: "https://github.com/Fang2510/KUNEXTGEN-X-AI",
      live: "https://kunextgen-x-ai.vercel.app",
    },
  },
  {
  title: "GradieKU — Course Completion Checker Website",
  desc: "Graduation credit verification web application",
  details:
    "Developed a website to verify completed credits and graduation eligibility, allowing students to check their status instantly. Built a responsive frontend using HTML, CSS, and JavaScript, and designed a MySQL database with backend logic to validate graduation requirements and display real-time pass/fail status.",
  cardImage: "/credit-checker/1.png",
  cardFallback:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
  images: [
    { src: "/credit-checker/1.png", fallback: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80" },
    { src: "/credit-checker/2.png", fallback: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80" },
    { src: "/credit-checker/3.png", fallback: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80" },
    { src: "/credit-checker/4.png", fallback: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80" },
    { src: "/credit-checker/5.PNG", fallback: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80" },
    { src: "/credit-checker/6.PNG", fallback: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80" },
  ],
  tech: "HTML • CSS • JavaScript • PHP • MySQL",
  features: [
    "Check completed courses against curriculum requirements",
    "Display remaining required courses",
    "Validate graduation eligibility automatically",
    "Responsive and user-friendly interface",
  ],
},
  {
    title: "Firefly — Fire Alert Application",
    desc: "Mobile app for fire and gas alert management",
    details:
      "A real-time monitoring platform that uses MQ2 sensors for smoke and gas detection, emergency alerts, building maps, and configurable notification thresholds.",
    cardImage: "/firefly-images/1.JPG",
    cardFallback:
      "https://images.unsplash.com/photo-1480190670609-5a6c1a96908e?auto=format&fit=crop&w=1200&q=80",
    images: [
      { src: "/firefly-images/1.JPG", fallback: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" },
      { src: "/firefly-images/2.JPG", fallback: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80" },
      { src: "/firefly-images/3.jpg", fallback: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" },
      { src: "/firefly-images/4.JPG", fallback: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80" },
      { src: "/firefly-images/5.JPG", fallback: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" },
      { src: "/firefly-images/6.JPG", fallback: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80" },
      { src: "/firefly-images/8.JPG", fallback: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80" },
      { src: "/firefly-images/9.JPG", fallback: "https://images.unsplash.com/photo-1555617117-08fda66c3b6b?auto=format&fit=crop&w=1200&q=80" },
      { src: "/firefly-images/10.JPG", fallback: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" },
    ],
    tech: "React • MQ2 Sensor • Real-time Alerts",
    fitContain: true,
  },
]

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  // Reset scroll position whenever we switch between the home view and a
  // project detail view, otherwise the detail page (or the back button)
  // can render off-screen wherever the user had previously scrolled to.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [selectedProject])

  return (
    <div className="app-shell">
      <Navbar />

      {!selectedProject ? (
        <>
          <HeroSection />
          <AboutSection />
          <ProjectsSection projects={projects} onSelectProject={setSelectedProject} />
          <SkillsSection skills={skills} />
          <ExperienceSection experience={experience} />
          <ContactSection />
        </>
      ) : (
        <ProjectDetail
          selectedProject={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      )}

      <footer className="footer">
        <span className="footer-tag">designed &amp; built by promporn rangjob</span>
        <a
          href="#home"
          className="footer-top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          Back to top ↑
        </a>
      </footer>
    </div>
  )
}