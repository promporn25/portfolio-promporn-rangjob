import { motion } from "framer-motion"
import { useState } from "react"

export default function ProjectCard({ project, onSelect }) {
  // If project requests hiding images, skip loading any source.
  const initialSrc = project.hideImage ? "" : project.cardImage || project.cardFallback || ""
  const [imgSrc, setImgSrc] = useState(initialSrc)
  const [loaded, setLoaded] = useState(false)

  const techList = project.tech
    ? project.tech.split("•").map((t) => t.trim()).filter(Boolean)
    : []
  const kicker = techList[0] || null

  const handleActivate = () => onSelect(project)

  return (
    <motion.article
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
      <div className="project-card-media">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={project.title || "Project"}
            className="project-card-img"
            style={{ opacity: loaded ? 1 : 0, transition: "opacity 240ms ease" }}
            onLoad={() => setLoaded(true)}
            onError={() => {
              if (imgSrc !== project.cardFallback && project.cardFallback) {
                setImgSrc(project.cardFallback)
              }
            }}
          />
        ) : (
          <div className="project-card-img-placeholder" aria-hidden="true" />
        )}

        {project.inProgress ? (
          <span className="project-status-tag">In Progress</span>
        ) : null}
      </div>

      <div className="project-card-body">
        {kicker ? <span className="project-card-kicker">{kicker}</span> : null}

        {project.title ? (
          <h3 className="project-card-title">{project.title}</h3>
        ) : null}

        {project.desc ? (
          <p className="project-card-desc">{project.desc}</p>
        ) : null}

        {techList.length > 0 ? (
          <p className="project-card-tech">{techList.join(" · ")}</p>
        ) : null}

        <span className="project-card-cta">
          View Project
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h9.5M8 3.5 13 8l-5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </motion.article>
  )
}