import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection({ projects, onSelectProject }) {
  return (
    <section id="projects" className="projects-section">
      <div className="section-content">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 12, scale: 0.9, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Projects
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 26, scale: 0.95, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        >
          Featured Works
        </motion.h2>
        <motion.p
          className="section-description projects-intro"
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          A mix of shipped apps, coursework, and the senior project currently in progress.
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32, scale: 0.92, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}
            >
              <ProjectCard
                project={project}
                onSelect={onSelectProject}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}