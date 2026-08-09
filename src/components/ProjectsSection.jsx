import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection({ projects, onSelectProject }) {
  const carouselRef = useRef(null)
  const [activeDot, setActiveDot] = useState(0)

  const scrollProjects = (direction) => {
    if (!carouselRef.current) return
    carouselRef.current.scrollBy({
      left: direction === "right" ? 360 : -360,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const onScroll = () => {
      const cardWidth = el.scrollWidth / projects.length
      const idx = Math.round(el.scrollLeft / cardWidth)
      setActiveDot(Math.min(projects.length - 1, Math.max(0, idx)))
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [projects.length])

  const scrollToIndex = (idx) => {
    const el = carouselRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / projects.length
    el.scrollTo({ left: cardWidth * idx, behavior: "smooth" })
  }

  return (
    <section id="projects" className="projects-section">
      <div className="section-content">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        >
          Featured Works
        </motion.h2>
        <motion.p
          className="section-description projects-intro"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          A mix of shipped apps, coursework, and the senior project currently in progress.
        </motion.p>

        <div className="project-carousel-wrapper">
          <button
            type="button"
            className="carousel-button prev"
            onClick={() => scrollProjects("left")}
            aria-label="Scroll projects left"
          >
            ‹
          </button>

          <div
            className="projects-carousel"
            aria-label="Project carousel"
            ref={carouselRef}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>

          <button
            type="button"
            className="carousel-button next"
            onClick={() => scrollProjects("right")}
            aria-label="Scroll projects right"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Project pagination">
          {projects.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`carousel-dot${idx === activeDot ? " active" : ""}`}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to project ${idx + 1}`}
              aria-selected={idx === activeDot}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  )
}