import { useState, useEffect, useRef } from "react"
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
    images: [
      {
        src: "/SMO/1.png",
        title: "Faculty of Science and Engineering Student Club",
        desc: "Participated in faculty activities and supported student events, teamwork, and event coordination.",
      },
      {
        src: "/SMO/2.jpg",
        title: "Student Club Activities",
        desc: "Served as the official photographer for the student club, capturing photos and documenting club activities, university events, and faculty events.",
      },
      {
        src: "/SMO/3.jpg",
        title: "Team Photo",
        desc: "A group photo with fellow student activity team members, reflecting the teamwork and coordination behind club events.",
      },
    ],
  },
]

const projects = [
{
    title: "Personal Finance Management Application (Senior Project)",
    desc: "BUDGETMATE — Personal finance mobile app built with Flutter & Firebase.",
    details:
      "BUDGETMATE is a personal finance management app built with Flutter and Firebase. It helps users track income and expenses, plan budgets, set savings goals, and gain insights into their spending habits through clear, data-driven visualizations — all from their mobile device.",
    cardImage: "/thesis/1.png",
    cardFallback:
      "/placeholder.svg",
    images: [
      {
        type: "image",
        src: "/thesis/1.png",
        fallback:
          "/placeholder.svg",
      },
      {
        type: "pdf",
        src: "/thesis/budgetmate-thesis.pdf",
        title: "เอกสารเล่มโครงงาน (PDF)",
      },
    ],
    fitContain: true,
    tech: "Flutter • Firebase • Dart",
    qr: {
      src: "/thesis/qrcode.png",
      url: "https://q.me-qr.com/dbw0bqmr",
      label: "Scan the QR code",
      caption: "Scan with your phone camera to open the project.",
    },
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
      pdf: "/thesis/budgetmate-thesis.pdf",
    },
  },
  {
    title: "Furball Cafi",
    desc: "Responsive pet cafe website with an online table reservation system.",
    details:
      "Developed using Microsoft Visual Studio 2022 as the primary development environment. Designed and implemented a responsive table reservation system for a pet café, focusing on user-friendly interfaces, form validation, and efficient web application development.",
    cardImage: "/Furball/1.PNG",
    cardFallback:
      "/placeholder.svg",
    images: [
      { src: "/Furball/1.PNG", fallback: "/placeholder.svg" },
      { src: "/Furball/2.PNG", fallback: "/placeholder.svg" },
      { src: "/Furball/3.PNG", fallback: "/placeholder.svg" },
      { src: "/Furball/4.PNG", fallback: "/placeholder.svg" },
      { src: "/Furball/5.PNG", fallback: "/placeholder.svg" },
    ],
    tech: "Microsoft Visual Studio 2022 • HTML5 • CSS3 • JavaScript (ES6) • MySQL • XAMPP",
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
      "A full-stack web application built for the \'ผู้กล้าท้า AI\' competition. Students can upload lecture documents to get AI-generated summaries, flashcards, and quizzes — all powered by the OpenAI API. Features Firebase authentication, Firestore history, multilingual support (TH/EN), and a deep-space dark theme UI.",
    cardImage: "/kunextgen/1.png",
    cardFallback:
      "/placeholder.svg",
      
    images: [
      { src: "/kunextgen/1.png", fallback: "/placeholder.svg" },
      { src: "/kunextgen/2.png", fallback: "/placeholder.svg" },
      { src: "/kunextgen/3.png", fallback: "/placeholder.svg" },
      { src: "/kunextgen/4.png", fallback: "/placeholder.svg" },
      { src: "/kunextgen/5.jpg", fallback: "/placeholder.svg" },
      { src: "/kunextgen/6.jpg", fallback: "/placeholder.svg" },
    ],
    tech: "React • Vite • Node.js • Express • Firebase • OpenAI API • Tailwind CSS",
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
    "/placeholder.svg",
  images: [
    { src: "/credit-checker/1.png", fallback: "/placeholder.svg" },
    { src: "/credit-checker/2.png", fallback: "/placeholder.svg" },
    { src: "/credit-checker/3.png", fallback: "/placeholder.svg" },
    { src: "/credit-checker/4.png", fallback: "/placeholder.svg" },
    { src: "/credit-checker/5.PNG", fallback: "/placeholder.svg" },
    { src: "/credit-checker/6.PNG", fallback: "/placeholder.svg" },
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
      "/placeholder.svg",
    images: [
      { src: "/firefly-images/1.JPG", fallback: "/placeholder.svg" },
      { src: "/firefly-images/2.JPG", fallback: "/placeholder.svg" },
      { src: "/firefly-images/3.jpg", fallback: "/placeholder.svg" },
      { src: "/firefly-images/4.JPG", fallback: "/placeholder.svg" },
      { src: "/firefly-images/5.JPG", fallback: "/placeholder.svg" },
      { src: "/firefly-images/6.JPG", fallback: "/placeholder.svg" },
      { src: "/firefly-images/7.JPG", fallback: "/placeholder.svg" },
      { src: "/firefly-images/8.JPG", fallback: "/placeholder.svg" },
      { src: "/firefly-images/9.JPG", fallback: "/placeholder.svg" },
    ],
    tech: "React • MQ2 Sensor • Real-time Alerts",
    fitContain: true,
  },
]

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const glowRef = useRef(null)

  // Full-page cursor glow — tracked via a fixed-position overlay so it
  // stays correct regardless of scroll position. Updates go straight to
  // the DOM (not React state) so mousemove never triggers a re-render.
  useEffect(() => {
    const handleMove = (e) => {
      const el = glowRef.current
      if (!el) return
      el.style.setProperty("--mx", `${e.clientX}px`)
      el.style.setProperty("--my", `${e.clientY}px`)
      el.style.opacity = "1"
    }
    const handleLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0"
    }

    window.addEventListener("mousemove", handleMove)
    document.addEventListener("mouseleave", handleLeave)
    return () => {
      window.removeEventListener("mousemove", handleMove)
      document.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  // Reset scroll position whenever we switch between the home view and a
  // project detail view, otherwise the detail page (or the back button)
  // can render off-screen wherever the user had previously scrolled to.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [selectedProject])

  return (
    <div className="app-shell">
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
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
