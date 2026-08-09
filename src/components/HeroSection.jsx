import { motion } from "framer-motion"
import { FaDownload, FaArrowRight } from "react-icons/fa"

const container = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.15,
      staggerChildren: 0.12,
      delayChildren: 0.35,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-nodes" aria-hidden="true">
        <span className="hero-node n1" />
        <span className="hero-node n2" />
        <span className="hero-node n3" />
        <span className="hero-node n4" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="hero-copy"
      >
        <motion.div variants={item} className="status-strip">
          <span className="status-dot" aria-hidden="true" />
          Open to internship opportunities in Software and Computer Engineering
        </motion.div>

        <motion.h1 variants={item} className="hero-title">
          Promporn Rangjob
        </motion.h1>

        <motion.p variants={item} className="hero-text">
          Computer Engineering student, Year 4 at Kasetsart University Chalermphrakiat Sakon Nakhon Campus.
          Interested in Frontend Development, Mobile App Development, and Embedded / IoT systems.
        </motion.p>

        <motion.div variants={item} className="hero-actions">
          <a
            href="#projects"
            className="button primary"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            View Projects <FaArrowRight aria-hidden="true" />
          </a>
          <a href="/promporn rangjob.pdf" download className="button secondary">
            <FaDownload aria-hidden="true" /> Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}