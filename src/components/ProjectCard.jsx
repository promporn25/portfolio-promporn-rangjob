import { motion } from "framer-motion"
import { useState } from "react"

export default function ProjectCard({ project, onSelect }) {
  // If project requests hiding images, skip loading any source.
  const initialSrc = project.hideImage ? "" : project.cardImage || project.cardFallback || ""
  const [imgSrc, setImgSrc] = useState(initialSrc)
  const [loaded, setLoaded] = useState(false)

  const primaryTech = project.tech
    ? project.tech.split("•")[0].trim()
    : null

  const handleActivate = () => onSelect(project)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="project-card"
      onClick={handleActivate}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleActivate()
        }
      }}
      aria-label={`View details for ${project.title || "project"}`}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={project.title || "Project"}
          className="project-image"
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 240ms ease" }}
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (imgSrc !== project.cardFallback && project.cardFallback) {
              setImgSrc(project.cardFallback)
            }
          }}
        />
      ) : null}

      {primaryTech ? (
        <span className="project-tech-tag">{primaryTech}</span>
      ) : null}

      {project.inProgress ? (
        <span className="project-status-tag">In Progress</span>
      ) : null}

      {project.title ? (
        <div className="project-overlay">
          <h3>{project.title}</h3>
          <span className="project-cta">
            View project
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h9.5M8 3.5 13 8l-5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      ) : null}
    </motion.div>
  )
}